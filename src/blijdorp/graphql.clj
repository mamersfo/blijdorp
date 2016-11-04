(ns blijdorp.graphql
  (:require [blijdorp.news :as news]
            [blijdorp.update :refer (parse-matches)]
            [clojure.core.match :as match]
            [clojure.java.io :as io]
            [graphql-clj.type :refer (create-schema)]
            [graphql-clj.parser :refer (parse)]
            [graphql-clj.introspection :refer (introspection-schema)]
            [graphql-clj.executor :as executor]
            [graphql-clj.error :refer (throw-error)]
            [compojure.core :refer (ANY POST defroutes)]
            [compojure.route :as route]
            [ring.util.response :as response]
            [ring.middleware.json :refer (wrap-json-response
                                          wrap-json-params)]
            [ring.adapter.jetty :refer (run-jetty)]
            [ring.middleware.cors :refer (wrap-cors)]
            [cheshire.core :refer (parse-string)])
  (:import java.util.Date))

(def schema
  (let [parsed-schema (parse (slurp (io/resource "schema.gql")))]
    (create-schema parsed-schema introspection-schema)))

(def context nil)

(defn get-matches
  [ctx parent args]
  (parse-matches))

(defn get-match
  [ctx parent args]
  (let [date (get args "date")
        filename (str "data/scores/" date ".json")]
    (parse-string (slurp filename) true)))

(defn get-stories
  [ctx parent args]
  (news/stories))

(defn get-story
  [ctx parent args]
  (let [id (get args "id")]
    (first (filter #(= id (:id %)) (news/stories)))))

(defn get-content
  [ctx parent args]
  (:content parent))

(defn make-id
  [s]
  (when s
    (clojure.string/lower-case
     (clojure.string/replace s #"\s+" "-"))))

(defn upsert-story
  [ctx parent args]
  (let [story (get args "story")]
    (if-let [title (get story "title")]
      (let [id (or (get story "id") (make-id title))
            content (get-in story ["content" :values])
            story (assoc story "content" content)]
        (news/save id story)
        (assoc story :id id))
      (throw-error "Missing field (title) in type (Story)"))))

(defn publish-stories
  [ctx parent args]
  (println "ctx:" ctx "parent:" parent "args:" args)
  (let [pattern "yyyy-MM-dd'T'HH:mm:ss+01:00"
        format (java.text.SimpleDateFormat. pattern)
        stories (sort
                 #(compare (:date %2) (:date %1))
                 (for [story (news/stories)]
                   (if (nil? (:date story))
                     (let [date (.format format (java.util.Date.))]
                       (news/save (:id story) (assoc story :date date)))
                     story)))]
    (news/export stories)))

(defn resolver
  [type-name field-name]
  (match/match
   [type-name field-name]
   ["Query" "stories"] get-stories
   ["Query" "story"] get-story
   ["Query" "matches"] get-matches
   ["Query" "match"] get-match
   ["Story" "content"] get-content
   ["Mutation" "upsertStory"] upsert-story
   ["Mutation" "publish"] publish-stories
   :else nil))

(defn execute
  [query variables]
  (println "query:" query)
  (executor/execute context schema resolver query variables))

(defroutes routes
  (POST "/graphql" [query :as request]
        (try
          (response/response (execute query nil))
          (catch Throwable e
            (do
              (.printStackTrace e)
              {:status 500
               :body {:exception (.getName (.getClass e))}}))))
  (ANY   "/graphql" [] {:status 405})
  (route/not-found (response/not-found {:message "Not found"})))

(def handler
  (-> routes
      wrap-json-response
      (wrap-cors
       :access-control-allow-origin [#"http://localhost:3000" #"http://.*"]
       :access-control-allow-methods [:get :put :post :delete])
      wrap-json-params))

;; (defonce server (run-jetty #'handler {:port 8080 :join? false}))
;; (defn start [] (.start server))
;; (defn stop [] (.stop server))

