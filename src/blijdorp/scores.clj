(ns blijdorp.scores
  (:require [cheshire.core :refer :all]))

(def KEYS
  [:team
   :minute
   :flag
   :goal
   :assist
   :situation
   :set-piece
   :origin
   :method
   :x
   :y])

(defn transform-position [m]
  (-> (assoc m :position (select-keys m [:x :y]))
      (dissoc :x :y)))

(defn transform-coll [c]
  (into {} (filter val (zipmap KEYS c))))

(defn transform-team [m]
  (-> (assoc m :team (if (:flag m) "Blijdorp" (:team m)))
      (dissoc :flag)))

(defn transform-goal [c]
  (->> (transform-coll c)
       (transform-position)
       (transform-team)))

(defn transform-group [k v]
  {:opponent k
   :goals (map transform-goal v)})

(defn import-json [f]
  (parse-string (slurp f) true))

(defn export-json
  [root filename]
  (let [path (str "data/current/" filename)]
    (with-open [out (clojure.java.io/writer path)]
      (generate-stream root out {:pretty true})
      (println "Written to" path))))

(defn transform []
  (let [scores (import-json "data/current/scores.json")
        groups (group-by first scores)]
    (map #(transform-group % (get groups %)) (keys groups))))
