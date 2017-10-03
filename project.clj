(defproject trainorg "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [cheshire "5.6.3"]
                 [hiccup "1.0.5"]
                 [compojure "1.5.1"]
                 [clj-http "3.7.0"]
                 [clj-time "0.14.0"]]
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler blijdorp.graphql/handler
         :nrepl {:start? true :port 4555}
         :port 8080}
  :aliases {"build-data"      ["run" "-m" "blijdorp.update/export"]
            "build-forecast"  ["run" "-m" "blijdorp.weather/export"]})
