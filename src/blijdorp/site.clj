(ns blijdorp.site
  (:require [stasis.core :as stasis]
            [hiccup.page :refer (html5)]
            [cheshire.core :refer :all]
            [clojure.java.io :refer (reader)]))

(def menu
  [{:uri "/index.html"    :name "JO11-1"}
   {:uri "/schedule.html" :name "Programma"}
   {:uri "/results.html"  :name "Uitslagen"}
   {:uri "/table.html"    :name "Stand"}
   {:uri "/report.html"   :name "Verslag"}])

(def base-uri "/blijdorp/static")

(defn link [i]
  [:a {:href (str base-uri (:uri i))} (:name i)])

(defn navbar [items]
  [:nav {:class "navbar navbar-default"}
   [:div {:class "container-fluid"}
    [:div {:class "navbar-header"}
     [:button {:type "button" :class "navbar-toggle" :data-toggle "collapse" :data-target ".navbar-collapse" :aria-controls "navbar"}
      (take 3 (repeat [:span {:class "icon-bar"}]))]
     [:div {:class "navbar-brand"} (link (first items))]]
    [:div {:class "navbar-collapse collapse"}
     [:ul {:class "nav navbar-nav"}
      (map (fn [i] [:li {:role "presentation"} (link i)]) (rest items))]]]])

(defn layout-page [page]
  (html5
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:name "viewport"
            :content "width=device-width, initial-scale=1.0"}]
    [:title "JO11-1 (Static)"]
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

(defn report [ctx]
  (let [matches (parse-stream (reader "data/current/matches.json") true)
        match (first matches)
        path (str "data/reports/" (:date match) ".json")
        report (parse-stream (reader path) true)]
    (println match)
    (layout-page
     [:div.row-fluid
      [:div.col-xs-12
       [:h4 (str (first (:teams match)) " - " (second (:teams match))
                 "&nbsp;&nbsp;"
                 (first (:result match)) "-" (second (:result match)))]
       (map (fn [c]
              (condp = (:type c)
                "text" [:div {:style "margin-bottom: 10px"} (:text c)]
                "youtube" [:iframe {:width 275 :height 154
                                    :src (str "https://www.youtube.com/embed/" (:videoId c))}]
                :default [:div]))
            (:content report))]])))

(defn table [ctx]
  (let [teams (->> (parse-stream (reader "data/current/stand.json") true)
                   (map #(assoc % :played (reduce + (vals (:matches %)))))
                   (map #(assoc % :points (+ (* 3 (-> % :matches :wins))
                                             (-> % :matches :draws))))
                   (map #(assoc % :diff (- (-> % :goals :for)
                                           (-> % :goals :against))))
                   (map #(assoc % :scored (-> % :goals :for)))
                   (sort-by (juxt :points :played :diff :scored))
                   (reverse))]
    (layout-page
     [:div.row-fluid
      [:div.col-xs-12
       [:h4 "Stand"]
       [:table.table {:style "margin: 0px"}
        [:thead
         [:tr
          [:th {:style "width: 10px"} "#"]
          [:th]
          [:th {:style "width: 10%; text-align: right"} "G"]
          [:th {:style "width: 10%; text-align: right"} "P"]]]
        [:tbody
         (map (fn [t idx]
                [:tr
                 [:td (str idx ".")]
                 [:td (:team t)]
                 [:td {:style "text-align: right"} (:played t)]
                 [:td {:style "text-align: right"} (:points t)]])
              teams (range 1 (inc (count teams))))]
        ]]])))

(defn results [ctx]
  (let [results (parse-stream (reader "data/current/uitslagen.json") true)
        latest (first (filter #(:latest %) results))]
    (layout-page
     [:div.for-fluid
      [:div.col-xs-12
       [:h4 "Uitslagen"]
       [:table.table {:style "margin: 0px"}
        [:tbody
         (map (fn [f]
                [:tr
                 [:td (str (first f) " - " (second f))]
                 [:td {:style "text-align: right"}
                  (if (= (count f) 4) (str (get f 2) "-" (get f 3)) "")]])
              (:fixtures latest))]]]])))

(defn schedule [ctx]
  (let [matches (parse-stream (reader "data/current/programma.json") true)
        date-format (java.text.SimpleDateFormat. "dd-MM")
        time-format (java.text.SimpleDateFormat. "HH:mm")]
    (layout-page
     [:div.row-fluid
      [:div.col-xs-12
       [:h4 "Programma"]
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
            "/schedule.html" schedule
            "/results.html" results
            "/table.html" table
            "/report.html" report})

(def app (stasis/serve-pages pages))

(def target-dir "static")

(defn export []
  (stasis/empty-directory! target-dir)
  (stasis/export-pages pages target-dir))
