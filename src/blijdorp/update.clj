(ns blijdorp.update
  (:require [cheshire.core :refer :all]))

(def season           "2016-17")
(def competition      "1e klasse 06")
(def results-filename "uitslagen.json")
(def table-filename   "stand.json")
(def matches-filename "matches.json")
(def goals-filename   "doelpunten.json")
(def assists-filename "assists.json")

(def PLAYERS {"Amine"  {:id  1 :name "Amine"  :matches 0 :total 0 :position :verdediging}
              "Dieuwe" {:id  2 :name "Dieuwe" :matches 0 :total 0 :position :verdediging}
              "Fadi"   {:id  3 :name "Fadi"   :matches 0 :total 0 :position :aanval}
              "Jonas"  {:id  4 :name "Jonas"  :matches 0 :total 0 :position :aanval}
              "Lenny"  {:id  5 :name "Lenny"  :matches 0 :total 0 :position :verdediging}
              "Luc"    {:id  6 :name "Luc"    :matches 0 :total 0 :position :centrum}
              "Quincy" {:id  7 :name "Quincy" :matches 0 :total 0 :position :centrum}
              "Stijn"  {:id  8 :name "Stijn"  :matches 0 :total 0 :position :aanval}
              "Vito"   {:id  9 :name "Vito"   :matches 0 :total 0 :position :centrum}
              "Xaver"  {:id 10 :name "Xaver " :matches 0 :total 0 :position :doel}})

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
        (swap! players update-in [(name (first p)) :matches] - (second p)))
      (doseq [p (:keeper m)]
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
  [competition]
  (let [filename (str "data/" season "/" results-filename)]
    (filter #(= competition (:competition %))
            (parse-string (slurp filename) true))))

(defn generate-table
  [ms]
  (let [matches (apply concat (map :fixtures ms))
        matches (filter #(= 4 (count %1)) matches)
        teams (set (flatten (map #(vector (first %) (second %)) matches)))
        stats {:matches {:wins 0 :draws 0 :losses 0}
               :goals {:for 0 :against 0}
               :form []}
        table (atom (reduce #(assoc %1 %2 stats) {} teams))]
    (loop [matches matches]
      (if (empty? matches)
        (map #(assoc (get @table %) :team %) (keys @table))
        (let [match (first matches)
              home-team (first match)
              away-team (second match)
              home-goals (last (butlast match))
              away-goals (last match)
              text (str home-team " " home-goals "-" away-goals " " away-team)
              win {:result "win" :text text}
              draw {:result "draw" :text text}
              loss {:result "loss" :text text}
              diff (- home-goals away-goals)]
          (cond
            (> diff 0)
            (do
              (swap! table update-in [home-team :matches :wins] inc)
              (swap! table update-in [away-team :matches :losses] inc))
            (< diff 0)
            (do
              (swap! table update-in [home-team :matches :losses] inc)
              (swap! table update-in [away-team :matches :wins] inc))
            :else
            (do
              (swap! table update-in [home-team :matches :draws] inc)
              (swap! table update-in [away-team :matches :draws] inc)))
          (swap! table update-in [home-team :goals :for] + home-goals)
          (swap! table update-in [home-team :goals :against] + away-goals)
          (swap! table update-in [away-team :goals :for] + away-goals)
          (swap! table update-in [away-team :goals :against] + home-goals)
          (when (< (count (get-in @table [home-team :form])) 5)
            (cond
              (> diff 0) (swap! table update-in [home-team :form] conj win)
              (< diff 0) (swap! table update-in [home-team :form] conj loss)
              :else (swap! table update-in [home-team :form] conj draw)))
          (when (< (count (get-in @table [away-team :form])) 5)
            (cond
              (> diff 0) (swap! table update-in [away-team :form] conj loss)
              (< diff 0) (swap! table update-in [away-team :form] conj win)
              :else (swap! table update-in [away-team :form] conj draw)))
          (recur (rest matches)))))))

(defn export-json
  [root filename]
  (let [path (str "data/" season "/" filename)]
    (with-open [out (clojure.java.io/writer path)]
      (generate-stream root out {:pretty true})
      (println "Written to" path))))

(defn export-table []
  (export-json (generate-table (parse-results competition)) table-filename))

(defn export-goals []
  (export-json (generate-stats (parse-matches) :goals) goals-filename))

(defn export-assists []
  (export-json (generate-stats (parse-matches) :assists) assists-filename))

(defn export []
  (export-table)
  (export-goals)
  (export-assists))
