(defproject trainorg "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [cheshire "5.4.0"]
                 [stasis "2.3.0"]
                 [hiccup "1.0.5"]]
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler blijdorp.site/app
         :nrepl {:start? true :port 4555}
         :port 8080}
  :aliases {"build-site" ["run" "-m" "blijdorp.site/export"]
            "build-exercises" ["run" "-m" "blijdorp.exercises/export"]
            "build-news" ["run" "-m" "blijdorp.news/export"]}
  :main blijdorp.update)
