(ns blijdorp.update
  (:require [cheshire.core :refer :all]))

(def season           "2017-18")
(def competitions     {"3e klasse 9 voorjaar"
                       nil
                       "3e klasse 7 najaar"
                       nil
                       "Beker Groep 3-16"
                       nil})

(def results-filename "uitslagen.json")
(def table-filename   "stand.json")
(def matches-filename "matches.json")
(def goals-filename   "doelpunten.json")
(def assists-filename "assists.json")
(def stats-filename   "stats.json")

(def PLAYERS
  {"Helene"  {:id 1 :name  "Helene"  :matches 0 :goals 0 :assists 0 :total 0 :position :centrum}
   "Inder"   {:id 2 :name  "Inder"   :matches 0 :goals 0 :assists 0 :total 0 :position :centrum}
   "Jan"     {:id 3 :name  "Jan"     :matches 0 :goals 0 :assists 0 :total 0 :position :doel}
   "Lil"     {:id 4 :name  "Lil"     :matches 0 :goals 0 :assists 0 :total 0 :position :aanval}
   "Noah"    {:id 5 :name  "Noah"    :matches 0 :goals 0 :assists 0 :total 0 :position :verdediging}
   "Raf"     {:id 6 :name  "Raf"     :matches 0 :goals 0 :assists 0 :total 0 :position :aanval}
   "Ruben"   {:id 7 :name  "Ruben"   :matches 0 :goals 0 :assists 0 :total 0 :position :verdediging}
   "Senn"    {:id 8 :name  "Senn"    :matches 0 :goals 0 :assists 0 :total 0 :position :centrum}
   "Tije"    {:id 9 :name  "Tije"    :matches 0 :goals 0 :assists 0 :total 0 :position :verdediging}
   "Zay"     {:id 10 :name "Zay"     :matches 0 :goals 0 :assists 0 :total 0 :position :aanval}})

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
  ([ms]
   (let [players (atom (generate-players ms))]
     (doseq [m ms]
       (doseq [p (get m :goals)]
         (swap! players update-in [(name (first p)) :goals] + (second p)))
       (doseq [p (get m :assists)]
         (swap! players update-in [(name (first p)) :assists] + (second p))))
     (doseq [player (vals @players)]
       (let [total (+ (:goals player) (:assists player))]
         (swap! players update-in [(:name player) :total] + total)))
     (vals @players)))
  ([ms k]
   (let [players (atom (generate-players ms))]
     (doseq [m ms]
       (doseq [p (get m k)]
         (swap! players update-in [(name (first p)) :total] + (second p))))
     (vals @players))))

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
        (reverse
         (sort-by
          (juxt :points (comp - :total) :diff :team)
          (map #(let [team (get @table %)]
                  (assoc team
                         :team %
                         :total (apply + (vals (:matches team)))
                         :points (+ (* 3 (-> team :matches :wins))
                                    (-> team :matches :draws))
                         :diff (- (-> team :goals :for)
                                  (-> team :goals :against))))
               (keys @table))))
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

(defn all-competitions
  []
  (let [filename (str "data/" season "/" results-filename)
        results (parse-string (slurp filename) true)]
    (set (map :competition results))))

(defn get-competition
  [k]
  (if-let [teams (get competitions k)]
    (map #(assoc %
                 :total 0
                 :matches {:wins 0
                           :draws 0
                           :losses 0}
                 :points 0
                 :goals {:for 0
                         :against 0}
                 :diff 0
                 :form []) teams)))

(defn tables
  []
  (loop [comps (keys competitions) coll []]
    (if-not (empty? comps)
      (let [key (first comps)
            teams (generate-table (parse-results key))]
        (recur (next comps)
               (conj coll (hash-map :competition key :teams teams))))
      coll)))

(defn export-tables []
  (export-json (tables) table-filename))

(defn export-goals []
  (export-json (generate-stats (parse-matches) :goals) goals-filename))

(defn export-assists []
  (export-json (generate-stats (parse-matches) :assists) assists-filename))

(defn export-stats []
  (export-json (generate-stats (parse-matches)) stats-filename))

(defn export []
  (export-tables)
  (export-stats))
