(ns blijdorp.site
  (:require [stasis.core :as stasis]
            [hiccup.page :refer (html5)]
            [cheshire.core :refer :all]
            [clojure.java.io :refer (reader)]))

(def menu
  [{:uri "/blijdorp/static/schedule.html" :name "Programma"}])

(defn navbar [items]
  [:nav {:class "navbar navbar-default"}
   [:div {:class "container-fluid"}
    [:div {:class "navbar-header"}
     [:button {:type "button" :class "navbar-toggle" :data-toggle "collapse" :data-target ".navbar-collapse" :aria-controls "navbar"}
      (take 3 (repeat [:span {:class "icon-bar"}]))]
     [:div {:class "navbar-brand"}
      [:a {:href "/blijdorp/static/"} "Blijdorp JO11-1"]]]
    [:div {:class "navbar-collapse collapse"}
     [:ul {:class "nav navbar-nav"}
      (map (fn [i]
             [:li {:role "presentation"}
              [:a {:href (:uri i)} (:name i)]])
           items)]]]])

(defn layout-page [page]
  (html5
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:name "viewport"
            :content "width=device-width, initial-scale=1.0"}]
    [:title "JO11-1"]
    [:link {:rel "stylesheet" :href "../css/bootstrap.min.css"}]]
   [:body
    (navbar menu)
    page
    [:script {:src "../lib/jquery@2.2.4/jquery.min.js"}]
    [:script {:src "../lib/bootstrap@3.3.7/bootstrap.min.js"}]]))

(defn home [ctx]
  (layout-page
   [:div {:class "col-xs-12"}
    [:div {:class "jumbotron" :style "margin: 0px"}
     [:img {:src "/blijdorp/images/team-1617.png"
            :style "display: block; margin-left: auto; margin-right: auto"}]
     [:p {:style "margin: 20px"} "Website gewijd aan het selectieteam voor Blijdorp-spelers die zijn geboren in het jaar 2006. Nu als JO11-1 uitkomend in Groep 2 04 van het KNVB district West II. Op deze site vind je onder meer wedstrijdverslagen, statistieken en oefenstof."]]]))

(defn schedule [ctx]
  (let [matches (parse-stream (reader "data/current/programma.json") true)
        date-format (java.text.SimpleDateFormat. "dd-MM")
        time-format (java.text.SimpleDateFormat. "HH:mm")]
    (println matches)
    (layout-page
     [:div.row-fluid
      [:div.col-xs-12
       [:table.table.table.hover
        [:thead
         [:tr
          [:th {:style "width: 20%"} "Datum"]
          [:th {:style "width: 20%"} "Aftrap"]
          [:th {:style "width: 30%"} "Thuisploeg"]
          [:th {:style "width: 30%"} "Bezoekers"]]]
        [:tbody
         (map (fn [m]
                (let [d (clojure.instant/read-instant-date (:date m))]
                  [:tr
                   [:td (. date-format format d)]
                   [:td (. time-format format d)]
                   [:td (first (:teams m))]
                   [:td (second (:teams m))]]))
              matches)]]]])))

(def pages {"/index.html" home
            "/schedule.html" schedule})

(def app (stasis/serve-pages pages))

(def target-dir "static")

(defn export []
  (stasis/empty-directory! target-dir)
  (stasis/export-pages pages target-dir))
