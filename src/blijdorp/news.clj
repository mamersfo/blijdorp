(ns blijdorp.news
  (:require [cheshire.core :refer :all]
            [clojure.string :refer (split)]))

(def news-dir
  (str (System/getProperty "user.dir") "/data/news"))

(defn articles []
  (->> (map #(.getName %) (file-seq (clojure.java.io/file news-dir)))
       (filter #(= "json" (last (split % #"\."))))
       (filter #(not= "index.json" %))
       (map (fn [f]
              (let [path (str news-dir "/" f)
                    json (parse-string (slurp path) true)]
                (assoc json :id (first (split f #"\."))))))
       (sort #(compare (:date %2) (:date %1)))
       (map #(select-keys % [:id :title :date]))))

(def output-file
  (str news-dir "/index.json"))

(defn export
  []
  (with-open [out (clojure.java.io/writer output-file)]
    (generate-stream (articles) out {:pretty true})
    (println "News index written to" output-file)))
