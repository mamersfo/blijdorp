(ns blijdorp.exercises
  (:require [cheshire.core :refer :all]))

(def base-pattern #"(^\*+) (\S+)")
(def ext-pattern #"(^\*+) (\S+): ([ \S]+$)")

(defn get-parts
  [line]
  (if line
    (seq (rest
          (or (re-find ext-pattern line)
              (re-find base-pattern line))))))

(defn make-node
  [parts]
  (if (seq parts)
    {:level (count (first parts))
     :type (keyword (clojure.string/lower-case (second parts)))
     :name (last parts)
     :text []}))

(defn make-nodes
  [lines]
  (loop [in lines out []]
    (if-let [line (first in)]
      (if-let [parts (get-parts line)]
        (recur (rest in) (conj out (make-node parts)))
        (recur (rest in) (update-in out [(dec (count out)) :text] conj line)))
      out)))

(defn make-tree
  [nodes]
  (cond
    (= 0 (count nodes)) nil
    (= 1 (count nodes)) (first nodes)
    :else
    (let [parent (first nodes)
          target-level (inc (:level parent))]
      (loop [in (rest nodes) part nil out []]
        (if-let [next (first in)]
          (if (= (:level next) target-level)
            (recur (rest in) (vector next) (if part (conj out part) out))
            (recur (rest in) (conj part next) out))
          (assoc parent :children (map make-tree (conj out part))))))))

(defn join-text
  [nodes]
  (map #(if (seq (:text %))
          (update-in % [:text] (partial clojure.string/join " "))
          (dissoc % :text)) nodes))

(defn parse
  [f]
  (with-open [rdr (clojure.java.io/reader f)]
    (make-tree (join-text (make-nodes (line-seq rdr))))))

(defn string-for-type
  [t coll]
  (apply str (interpose ";" (map :name (filter #(= t (:type %)) coll)))))

(def images
  (let [dir (str (System/getProperty "user.dir") "/images/exercises")]
    (set
     (map #(first (clojure.string/split (.getName %) #"\."))
          (file-seq (clojure.java.io/file dir))))))

(defn exercises
  [root]
  (apply concat
         (for [training (:children root)]
           (apply concat
                  (for [category (:children training)]
                    (for [exercise (:children category)]
                      (let [children (:children exercise)
                            uuid (-> (filter #(= :uuid (:type %)) children)
                                     first :name)]
                        {:uuid uuid
                         :name (:name exercise)
                         :category (:name category)
                         :text (:text exercise)
                         :image (contains? images uuid)
                         :tags (string-for-type :tag children)
                         :variations (string-for-type :variation children)
                         :station (-> (filter #(= :station (:type %)) children)
                                      first :name)
                         })))))))

(defn random-uuid []
  (.toString (java.util.UUID/randomUUID)))


(defn print-uuids [count]
  (repeatedly count #(println (random-uuid))))

(defn inspect [root]
  (doseq [training (:children root)]
    (println "training:" (:name training))
    (doseq [category (:children training)]
      (println "category:" (:name category))
      (doseq [exercise (:children category)]
        (println "exercise:" (:name exercise))
        (let [variations (filter #(= :variation (:type %))
                                 (:children exercise))]
          (println "variations:" (map :name variations)))))))

(def input-file
  (str (System/getProperty "user.dir") "/data/exercises.org"))

(def output-file
  (str (System/getProperty "user.dir") "/data/exercises.json"))

(defn export-json
  ([]
   (export-json (parse input-file)))
  ([root]
   (with-open [out (clojure.java.io/writer output-file)]
     (generate-stream (exercises root) out))))
