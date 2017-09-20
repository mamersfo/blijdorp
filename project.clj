(defproject trainorg "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [cheshire "5.6.3"]
                 [stasis "2.3.0"]
                 [hiccup "1.0.5"]
                 [graphql-clj "0.1.16" :exclusions [org.clojure/clojure]]
                 [compojure "1.5.1"]
                 [ring "1.5.0"]
                 [ring-cors "0.1.8"]
                 [ring/ring-json "0.4.0"]
                 [clj-http "3.7.0"]
                 [clj-time "0.14.0"]]
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler blijdorp.graphql/handler
         :nrepl {:start? true :port 4555}
         :port 8080}
  :aliases {"build-data"      ["run" "-m" "blijdorp.update/export"]
            "build-site"      ["run" "-m" "blijdorp.site/export"]
            "build-news"      ["run" "-m" "blijdorp.news/export"]
            "build-forecast"  ["run" "-m" "blijdorp.weather/export"]})
