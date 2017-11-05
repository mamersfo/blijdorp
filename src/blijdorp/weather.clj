
(ns blijdorp.weather
  (:require [cheshire.core :refer :all]
            [clj-http.client :as http]
            [clojure.java.io :refer (reader)]
            [clj-time.format :as f]
            [clj-time.periodic :as p]
            [clj-time.core :as t]
            [blijdorp.json :as json]))

(defn uri
  [s]
  (let [base-uri "http://api.wunderground.com/api"
        api-key  "e068850faf772ae0"
        lang     "NL"
        q        "q/Netherlands/Rotterdam.json"]
    (str base-uri "/" api-key "/" s "/lang:" lang "/" q)))

(defn forecasts
  []
  (let [resp (http/get (uri "forecast10day") {:accept :json})
        titles #{"zondag" "maandag" "dinsdag" "woensdag"
                 "donderdag" "vrijdag" "zaterdag"}]
    (map #(select-keys % [:title
                          :icon_url
                          :fcttext])
         (filter #(contains? titles (:title %))
                 (-> resp
                     :body
                     (parse-string true)
                     :forecast
                     :txt_forecast
                     :forecastday
                     )))))

(defn matches
  []
  (let [date-fn (fn [s] (t/day (f/parse (f/formatters :date) (subs s 0 10))))
        matches (parse-stream (reader "data/current/programma.json") true)
        matches (take 2 matches)
        matches (map (fn [m] (assoc m :day (date-fn (:date m)))) matches)]
   (reduce (fn [ms m] (assoc ms (:day m) m)) {} matches)))

(defn schedule
  []
  (let [ms (matches)
        fc (forecasts)
        ds (take (count fc)
                 (p/periodic-seq (t/now) (t/days 1)))
        merge-fn (fn [date forecast]
                   (if-let [match (get ms (t/day date))]
                     (assoc (merge forecast match)
                            :type "match")
                     (when (contains? #{2 4} (t/day-of-week date))
                       (assoc forecast
                              :date (str
                                     (f/unparse (f/formatters :date) date)
                                     "T17:15+02:00")
                              :type "training"))))]
    (filter identity (map merge-fn ds fc))))

(defn export
  []
  (json/export (schedule) "forecast.json"))
