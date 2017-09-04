(ns blijdorp.json
  (:require [cheshire.core :refer :all]))

(defn export
  [root filename]
  (let [path (str "data/current/" filename)]
    (with-open [out (clojure.java.io/writer path)]
      (generate-stream root out {:pretty true})
      (println "Written to" path))))

(defn read
  [s]
  (parse-string s true))
