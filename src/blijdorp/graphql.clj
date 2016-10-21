(ns blijdorp.graphql
  (:require [blijdorp.news :as news]
            [clojure.core.match :as match]
            [clojure.java.io :as io]
            [graphql-clj.type :refer (create-schema)]
            [graphql-clj.parser :refer (parse)]
            [graphql-clj.introspection :refer (introspection-schema)]
            [graphql-clj.executor :as executor]
            [compojure.core :refer (ANY POST defroutes)]
            [compojure.route :as route]
            [ring.util.response :as response]
            [ring.middleware.json :refer (wrap-json-response
                                          wrap-json-params)]))

(def schema
  (let [parsed-schema (parse (slurp (io/resource "stories.gql")))]
    (create-schema parsed-schema introspection-schema)))

(def context nil)

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

(defn create-story
  [ctx parent args]
  (let [title (get args "title")
        id (clojure.string/lower-case
            (clojure.string/replace title #"\s" "-"))]
    {:id id :title title}))

(defn resolver
  [type-name field-name]
  (match/match
   [type-name field-name]
   ["Query" "stories"] get-stories
   ["Query" "story"] get-story
   ["Story" "content"] get-content
   ["Mutation" "createStory"] create-story
   :else nil))

(defn execute
  [query variables]
  (executor/execute context schema resolver query variables))

(defroutes routes
  (POST "/graphql" [query :as request]
        (try (response/response (execute query nil))
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
      wrap-json-params))
