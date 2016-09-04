(ns blijdorp.update
  (:gen-class)
  (:require [cheshire.core :refer :all]))

(def season "2016-17")
(def results-filename "uitslagen.json")
(def table-filename "stand.json")
(def matches-filename "matches.json")
(def goals-filename "doelpunten.json")
(def assists-filename "assists.json")

(def PLAYERS {"Amine"  {:id  1 :name "Amine"  :matches 0 :total 0 :position :defender}
              "Dieuwe" {:id  2 :name "Dieuwe" :matches 0 :total 0 :position :defender}
              "Fadi"   {:id  3 :name "Fadi"   :matches 0 :total 0 :position :striker}
              "Jonas"  {:id  4 :name "Jonas"  :matches 0 :total 0 :position :striker}
              "Lenny"  {:id  5 :name "Lenny"  :matches 0 :total 0 :position :defender}
              "Luc"    {:id  6 :name "Luc"    :matches 0 :total 0 :position :midfielder}
              "Quincy" {:id  7 :name "Quincy" :matches 0 :total 0 :position :midfielder}
              "Stijn"  {:id  8 :name "Stijn"  :matches 0 :total 0 :position :striker}
              "Vito"   {:id  9 :name "Vito"   :matches 0 :total 0 :position :midfielder}
              "Xaver"  {:id 10 :name "Xaver " :matches 0 :total 0 :position :keeper}})

(defn parse-matches
  []
  (let [filename (str "data/" season "/" matches-filename)]
    (parse-string (slurp filename) true)))

(defn generate-players
  [ms]
  (let [players (atom PLAYERS)
        match-count (count ms)]
    (doseq [p (keys @players)]
      (swap! players update-in [p :matches] + match-count))
    (doseq [m ms]
      (doseq [p (:absent m)]
        (swap! players update-in [(name (first p)) :matches] - (second p))))
    @players))

(defn generate-stats
  [ms k]
  (let [players (atom (generate-players ms))]
    (doseq [m ms]
      (doseq [p (get m k)]
        (swap! players update-in [(name (first p)) :total] + (second p))))
    (vals @players)))

(defn parse-results
  []
  (let [filename (str "data/" season "/" results-filename)]
    (parse-string (slurp filename) true)))

(defn generate-table
  [ms]
  (let [matches (apply concat (map :fixtures ms))
        matches (filter #(= 4 (count %1)) matches)
        teams (set (flatten (map #(vector (first %) (second %)) matches)))
        stats {:matches {:wins 0 :draws 0 :losses 0} :goals {:for 0 :against 0}}
        table (atom (reduce #(assoc %1 %2 stats) {} teams))]
    (loop [matches matches]
      (if (empty? matches)
        (map #(assoc (get @table %) :team %) (keys @table))
        (let [match (first matches)
              home-team (first match)
              away-team (second match)
              home-goals (last (butlast match))
              away-goals (last match)
              diff (- home-goals away-goals)]
          (cond
            (> diff 0) (do
                         (swap! table update-in [home-team :matches :wins] inc)
                         (swap! table update-in [away-team :matches :losses] inc))
            (< diff 0) (do
                         (swap! table update-in [home-team :matches :losses] inc)
                         (swap! table update-in [away-team :matches :wins] inc))
            :else      (do
                         (swap! table update-in [home-team :matches :draws] inc)
                         (swap! table update-in [away-team :matches :draws] inc)))
          (swap! table update-in [home-team :goals :for] + home-goals)
          (swap! table update-in [home-team :goals :against] + away-goals)
          (swap! table update-in [away-team :goals :for] + away-goals)
          (swap! table update-in [away-team :goals :against] + home-goals)
          (recur (rest matches)))))))

(defn export
  [root filename]
  (let [path (str "data/" season "/" filename)]
    (with-open [out (clojure.java.io/writer path)]
      (generate-stream root out {:pretty true})
      (println "Written to" path))))

(defn export-table []
  (export (generate-table (parse-results)) table-filename))

(defn export-goals []
  (export (generate-stats (parse-matches) :goals) goals-filename))

(defn export-assists []
  (export (generate-stats (parse-matches) :assists) assists-filename))

(defn -main []
  (export-table)
  (export-goals)
  (export-assists))
