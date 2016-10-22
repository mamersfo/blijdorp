(ns blijdorp.site
  (:require [stasis.core :as stasis]
            [hiccup.page :refer (html5)]
            [cheshire.core :refer :all]
            [clojure.java.io :refer (reader)]))

(declare layout-page)

;; landingspagina

(defn home [ctx]
  (layout-page
   [:div {:class "col-xs-12"}
    [:div {:class "jumbotron" :style "margin: 0px"}
     [:p {:style "margin: 20px"} "Website gewijd aan het selectieteam voor Blijdorp-spelers die zijn geboren in het jaar 2006. Nu als JO11-1 uitkomend in de 1e klasse 06 van het KNVB district West II. Op deze site vind je onder meer wedstrijdverslagen, statistieken en oefenstof."]]]))

;; verslag

(defn report [ctx]
  (let [matches (parse-stream (reader "data/current/matches.json") true)
        match (first matches)
        path (str "data/reports/" (:date match) ".json")
        report (parse-stream (reader path) true)]
    (layout-page
     [:div.row-fluid
      [:div.col-xs-12
       [:h4 (str (first (:teams match)) " - " (second (:teams match))
                 "&nbsp;&nbsp;"
                 (first (:result match)) "-" (second (:result match)))]
       (map (fn [c]
              (condp = (:type c)
                "text" [:div {:style "margin-bottom: 10px"} (:text c)]
                "video" [:iframe
                           {:width 275 :height 154
                            :src (str (:url c))}]
                :default [:div]))
            (:content report))]])))

;; stand

(defn blijdorp? [s]
  (= "Blijdorp" s))

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
                [:tr {:class (if (blijdorp? (:team t)) "active" "")}
                 [:td (str idx ".")]
                 [:td (if (blijdorp? (:team t)) [:b (:team t)] (:team t))]
                 [:td {:style "text-align: right"} (:played t)]
                 [:td {:style "text-align: right"} (:points t)]])
              teams (range 1 (inc (count teams))))]
        ]]])))

;; uitslagen

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

;; programma

(defn schedule [ctx]
  (let [matches (parse-stream (reader "data/current/programma.json") true)
        date-format (java.text.SimpleDateFormat. "dd-MM")
        time-format (java.text.SimpleDateFormat. "HH:mm")]
    (layout-page
     [:div.row-fluid
      [:div.col-xs-12
       [:h4 "Programma"]
       [:table.table
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
                   [:td (if (empty? (:teams m)) "vrij" (. time-format format d))]
                   [:td (first (:teams m))]
                   [:td (second (:teams m))]]))
              matches)]]]])))

;; statistieken

(defn compare-players
  [x y]
  (let [result (- (compare (:total x) (:total y)))]
    (if (= result 0) (compare (:matches x) (:matches y)) result)))

(defn thead []
  [:thead
   [:tr
    [:th {:style "width: 50%"} "Speler"]
    [:th {:style "width: 25%; text-align: right"} "Wedstr."]
    [:th {:style "width: 25%; text-align: right"} "Totaal"]]])

(defn tbody [data]
  [:tbody
   (map (fn [m]
          [:tr
           [:td (:name m)]
           [:td {:style "text-align: right"} (:matches m)]
           [:td {:style "text-align: right"} (:total m)]])
        (sort compare-players data))])

(defn stats [title file]
  (let [data (parse-stream (reader file) true)]
    (layout-page
     [:div.row-fluid
      [:div.col-xs-12
       [:h4 title]
       [:table.table
        (thead)
        (tbody data)]]])))

(defn goals [ctx]
  (stats "Doelpunten" "data/current/doelpunten.json"))

(defn assists [ctx]
  (stats "Assists" "data/current/assists.json"))

;; menu

(def menu
  [{:uri "/index.html"    :name "JO11-1"     :fn home}
   {:uri "/schedule.html" :name "Programma"  :fn schedule}
   {:uri "/results.html"  :name "Uitslagen"  :fn results}
   {:uri "/table.html"    :name "Stand"      :fn table}
   {:uri "/report.html"   :name "Verslag"    :fn report}
   {:uri "/goals.html"    :name "Doelpunten" :fn goals}
   {:uri "/assists.html"  :name "Assists"    :fn assists}])

(defn get-pages []
  (reduce (fn [m i] (assoc m (:uri i) (:fn i))) {}  menu))

;; layout

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
    [:title "JO11-1"]
    [:link {:rel "stylesheet"
            :href "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            :integrity "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            :crossorigin "anonymous"}]]
   [:body
    (navbar menu)
    page
    [:script {:src "https://code.jquery.com/jquery-2.2.4.min.js"
              :integrity "sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
              :crossorigin "anonymous"}]
    [:script {:src "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
              :integrity "sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
              :crossorigin "anonymous"}]]))

;; export

(def app (stasis/serve-pages (get-pages)))

(def target-dir "static")

(defn export []
  (let [pages (get-pages)]
    (stasis/empty-directory! target-dir)
    (stasis/export-pages pages target-dir)))
