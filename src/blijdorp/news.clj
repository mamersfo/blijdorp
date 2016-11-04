(ns blijdorp.news
  (:require [cheshire.core :refer :all]
            [clojure.string :refer (split)]))

(def news-dir
  (str (System/getProperty "user.dir") "/data/news"))

(defn stories []
  (->> (map #(.getName %) (file-seq (clojure.java.io/file news-dir)))
       (filter #(= "json" (last (split % #"\."))))
       (filter #(not= "index.json" %))
       (map (fn [f]
              (let [path (str news-dir "/" f)
                    json (parse-string (slurp path) true)]
                (assoc json :id (first (split f #"\."))))))
       (sort #(compare (:date %2) (:date %1)))))

(defn save [id story]
  (let [output-file (str news-dir "/" id ".json")]
    (println "save:" output-file)
    (with-open [out (clojure.java.io/writer output-file)]
      (generate-stream story out {:pretty true})
      story)))

(defn export
  ([]
   (export (stories)))
  ([stories]
   (let [all (map #(select-keys % [:id :title :date]) stories)
         output-file (str news-dir "/index.json")]
     (with-open [out (clojure.java.io/writer output-file)]
       (generate-stream all out {:pretty true})
       (println "News index written to" output-file))
     stories)))
