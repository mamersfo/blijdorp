System.config({
  baseURL: "/blijdorp",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "app/main.js",
      "npm:redux@3.5.2.js",
      "npm:redux@3.5.2/lib/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.9.js",
      "npm:process@0.11.9/browser.js",
      "npm:redux@3.5.2/lib/utils/warning.js",
      "npm:redux@3.5.2/lib/compose.js",
      "npm:redux@3.5.2/lib/applyMiddleware.js",
      "npm:redux@3.5.2/lib/bindActionCreators.js",
      "npm:redux@3.5.2/lib/combineReducers.js",
      "npm:lodash@4.15.0/isPlainObject.js",
      "npm:lodash@4.15.0/isObjectLike.js",
      "npm:lodash@4.15.0/_isHostObject.js",
      "npm:lodash@4.15.0/_getPrototype.js",
      "npm:lodash@4.15.0/_overArg.js",
      "npm:redux@3.5.2/lib/createStore.js",
      "npm:symbol-observable@0.2.4.js",
      "npm:symbol-observable@0.2.4/index.js",
      "npm:symbol-observable@0.2.4/ponyfill.js",
      "npm:react-redux@4.4.5.js",
      "npm:react-redux@4.4.5/lib/index.js",
      "npm:react-redux@4.4.5/lib/components/connect.js",
      "npm:invariant@2.2.1.js",
      "npm:invariant@2.2.1/browser.js",
      "npm:hoist-non-react-statics@1.2.0.js",
      "npm:hoist-non-react-statics@1.2.0/index.js",
      "npm:react-redux@4.4.5/lib/utils/warning.js",
      "npm:react-redux@4.4.5/lib/utils/wrapActionCreators.js",
      "npm:react-redux@4.4.5/lib/utils/shallowEqual.js",
      "npm:react-redux@4.4.5/lib/utils/storeShape.js",
      "npm:react@15.3.1.js",
      "npm:react@15.3.1/react.js",
      "npm:react@15.3.1/lib/React.js",
      "npm:react@15.3.1/lib/ReactElementValidator.js",
      "npm:fbjs@0.8.4/lib/warning.js",
      "npm:fbjs@0.8.4/lib/emptyFunction.js",
      "npm:react@15.3.1/lib/getIteratorFn.js",
      "npm:react@15.3.1/lib/canDefineProperty.js",
      "npm:react@15.3.1/lib/checkReactTypeSpec.js",
      "npm:react@15.3.1/lib/ReactComponentTreeHook.js",
      "npm:fbjs@0.8.4/lib/invariant.js",
      "npm:react@15.3.1/lib/ReactCurrentOwner.js",
      "npm:react@15.3.1/lib/reactProdInvariant.js",
      "npm:react@15.3.1/lib/ReactPropTypesSecret.js",
      "npm:react@15.3.1/lib/ReactPropTypeLocationNames.js",
      "npm:react@15.3.1/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.8.4/lib/keyMirror.js",
      "npm:react@15.3.1/lib/ReactElement.js",
      "npm:object-assign@4.1.0.js",
      "npm:object-assign@4.1.0/index.js",
      "npm:react@15.3.1/lib/onlyChild.js",
      "npm:react@15.3.1/lib/ReactVersion.js",
      "npm:react@15.3.1/lib/ReactPropTypes.js",
      "npm:react@15.3.1/lib/ReactDOMFactories.js",
      "npm:react@15.3.1/lib/ReactClass.js",
      "npm:fbjs@0.8.4/lib/keyOf.js",
      "npm:fbjs@0.8.4/lib/emptyObject.js",
      "npm:react@15.3.1/lib/ReactNoopUpdateQueue.js",
      "npm:react@15.3.1/lib/ReactComponent.js",
      "npm:react@15.3.1/lib/ReactPureComponent.js",
      "npm:react@15.3.1/lib/ReactChildren.js",
      "npm:react@15.3.1/lib/traverseAllChildren.js",
      "npm:react@15.3.1/lib/KeyEscapeUtils.js",
      "npm:react@15.3.1/lib/PooledClass.js",
      "npm:react-redux@4.4.5/lib/components/Provider.js",
      "app/news.js",
      "app/api.js",
      "npm:whatwg-fetch@1.0.0.js",
      "npm:whatwg-fetch@1.0.0/fetch.js",
      "app/datetime.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:core-js@1.2.7/library/fn/object/define-property.js",
      "npm:core-js@1.2.7/library/modules/$.js",
      "npm:babel-runtime@5.8.38/helpers/inherits.js",
      "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
      "npm:core-js@1.2.7/library/fn/object/set-prototype-of.js",
      "npm:core-js@1.2.7/library/modules/$.core.js",
      "npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js",
      "npm:core-js@1.2.7/library/modules/$.set-proto.js",
      "npm:core-js@1.2.7/library/modules/$.ctx.js",
      "npm:core-js@1.2.7/library/modules/$.a-function.js",
      "npm:core-js@1.2.7/library/modules/$.an-object.js",
      "npm:core-js@1.2.7/library/modules/$.is-object.js",
      "npm:core-js@1.2.7/library/modules/$.export.js",
      "npm:core-js@1.2.7/library/modules/$.global.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:core-js@1.2.7/library/fn/object/create.js",
      "npm:babel-runtime@5.8.38/helpers/get.js",
      "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/modules/$.object-sap.js",
      "npm:core-js@1.2.7/library/modules/$.fails.js",
      "npm:core-js@1.2.7/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.7/library/modules/$.defined.js",
      "npm:core-js@1.2.7/library/modules/$.iobject.js",
      "npm:core-js@1.2.7/library/modules/$.cof.js",
      "npm:react-router@2.6.1.js",
      "npm:react-router@2.6.1/lib/index.js",
      "npm:react-router@2.6.1/lib/createMemoryHistory.js",
      "npm:history@2.1.2/lib/createMemoryHistory.js",
      "npm:history@2.1.2/lib/createHistory.js",
      "npm:history@2.1.2/lib/deprecate.js",
      "npm:warning@2.1.0.js",
      "npm:warning@2.1.0/browser.js",
      "npm:history@2.1.2/lib/runTransitionHook.js",
      "npm:history@2.1.2/lib/createLocation.js",
      "npm:history@2.1.2/lib/PathUtils.js",
      "npm:history@2.1.2/lib/Actions.js",
      "npm:history@2.1.2/lib/AsyncUtils.js",
      "npm:deep-equal@1.0.1.js",
      "npm:deep-equal@1.0.1/index.js",
      "npm:deep-equal@1.0.1/lib/is_arguments.js",
      "npm:deep-equal@1.0.1/lib/keys.js",
      "npm:history@2.1.2/lib/useBasename.js",
      "npm:history@2.1.2/lib/ExecutionEnvironment.js",
      "npm:history@2.1.2/lib/useQueries.js",
      "npm:query-string@3.0.3.js",
      "npm:query-string@3.0.3/index.js",
      "npm:strict-uri-encode@1.1.0.js",
      "npm:strict-uri-encode@1.1.0/index.js",
      "npm:react-router@2.6.1/lib/hashHistory.js",
      "npm:react-router@2.6.1/lib/createRouterHistory.js",
      "npm:react-router@2.6.1/lib/useRouterHistory.js",
      "npm:history@2.1.2/lib/createHashHistory.js",
      "npm:history@2.1.2/lib/createDOMHistory.js",
      "npm:history@2.1.2/lib/DOMUtils.js",
      "npm:history@2.1.2/lib/DOMStateStorage.js",
      "npm:react-router@2.6.1/lib/browserHistory.js",
      "npm:history@2.1.2/lib/createBrowserHistory.js",
      "npm:react-router@2.6.1/lib/applyRouterMiddleware.js",
      "npm:react-router@2.6.1/lib/RouterContext.js",
      "npm:react-router@2.6.1/lib/routerWarning.js",
      "npm:warning@3.0.0.js",
      "npm:warning@3.0.0/browser.js",
      "npm:react-router@2.6.1/lib/RouteUtils.js",
      "npm:react-router@2.6.1/lib/getRouteParams.js",
      "npm:react-router@2.6.1/lib/PatternUtils.js",
      "npm:react-router@2.6.1/lib/deprecateObjectProperties.js",
      "npm:react-router@2.6.1/lib/match.js",
      "npm:react-router@2.6.1/lib/RouterUtils.js",
      "npm:react-router@2.6.1/lib/createTransitionManager.js",
      "npm:react-router@2.6.1/lib/matchRoutes.js",
      "npm:react-router@2.6.1/lib/makeStateWithLocation.js",
      "npm:react-router@2.6.1/lib/AsyncUtils.js",
      "npm:react-router@2.6.1/lib/getComponents.js",
      "npm:react-router@2.6.1/lib/isActive.js",
      "npm:react-router@2.6.1/lib/TransitionUtils.js",
      "npm:react-router@2.6.1/lib/computeChangedRoutes.js",
      "npm:react-router@2.6.1/lib/RoutingContext.js",
      "npm:react-router@2.6.1/lib/useRoutes.js",
      "npm:react-router@2.6.1/lib/RouteContext.js",
      "npm:react-router@2.6.1/lib/Lifecycle.js",
      "npm:react-router@2.6.1/lib/History.js",
      "npm:react-router@2.6.1/lib/InternalPropTypes.js",
      "npm:react-router@2.6.1/lib/Route.js",
      "npm:react-router@2.6.1/lib/Redirect.js",
      "npm:react-router@2.6.1/lib/IndexRoute.js",
      "npm:react-router@2.6.1/lib/IndexRedirect.js",
      "npm:react-router@2.6.1/lib/withRouter.js",
      "npm:react-router@2.6.1/lib/PropTypes.js",
      "npm:react-router@2.6.1/lib/IndexLink.js",
      "npm:react-router@2.6.1/lib/Link.js",
      "npm:react-router@2.6.1/lib/Router.js",
      "app/analysis.js",
      "app/charts.js",
      "npm:react-vis@0.4.2/main.css!github:systemjs/plugin-css@0.1.27.js",
      "npm:react-vis@0.4.2.js",
      "npm:react-vis@0.4.2/index.js",
      "npm:react-vis@0.4.2/dist/index.js",
      "npm:react-vis@0.4.2/dist/lib/make-vis-flexible.js",
      "npm:global@4.3.0/window.js",
      "npm:react-vis@0.4.2/dist/lib/utils/react-utils.js",
      "npm:react-vis@0.4.2/dist/lib/radial-chart/radial-chart.js",
      "npm:react-vis@0.4.2/dist/lib/theme.js",
      "npm:react-vis@0.4.2/dist/lib/utils/animation-utils.js",
      "npm:d3-transition@0.2.10.js",
      "npm:d3-transition@0.2.10/build/d3-transition.js",
      "npm:d3-ease@0.7.0.js",
      "npm:d3-ease@0.7.0/build/d3-ease.js",
      "npm:d3-color@0.4.2.js",
      "npm:d3-color@0.4.2/build/d3-color.js",
      "npm:d3-interpolate@0.8.3.js",
      "npm:d3-interpolate@0.8.3/build/d3-interpolate.js",
      "npm:d3-timer@0.4.4.js",
      "npm:d3-timer@0.4.4/build/d3-timer.js",
      "npm:d3-dispatch@0.4.4.js",
      "npm:d3-dispatch@0.4.4/build/d3-dispatch.js",
      "npm:d3-selection@0.7.3.js",
      "npm:d3-selection@0.7.3/build/d3-selection.js",
      "npm:react-vis@0.4.2/dist/lib/utils/chart-utils.js",
      "npm:react-vis@0.4.2/dist/lib/utils/series-utils.js",
      "npm:react-vis@0.4.2/dist/lib/plot/series/abstract-series.js",
      "npm:react-vis@0.4.2/dist/lib/utils/scales-utils.js",
      "npm:react-vis@0.4.2/dist/lib/utils/data-utils.js",
      "npm:d3-collection@0.1.2.js",
      "npm:d3-collection@0.1.2/build/d3-collection.js",
      "npm:d3-array@0.7.1.js",
      "npm:d3-array@0.7.1/build/d3-array.js",
      "npm:d3-scale@0.7.2.js",
      "npm:d3-scale@0.7.2/build/d3-scale.js",
      "npm:d3-time-format@0.3.2.js",
      "npm:d3-time-format@0.3.2/build/d3-time-format.js",
      "npm:d3-time@0.2.6.js",
      "npm:d3-time@0.2.6/build/d3-time.js",
      "npm:d3-format@0.5.1.js",
      "npm:d3-format@0.5.1/build/d3-format.js",
      "npm:d3-collection@0.2.0.js",
      "npm:d3-collection@0.2.0/build/d3-collection.js",
      "npm:react-vis@0.4.2/dist/lib/pure-render-component.js",
      "npm:react-addons-shallow-compare@15.3.0.js",
      "npm:react-addons-shallow-compare@15.3.0/index.js",
      "npm:react@15.3.1/lib/shallowCompare.js",
      "npm:fbjs@0.8.4/lib/shallowEqual.js",
      "npm:d3-shape@0.6.1.js",
      "npm:d3-shape@0.6.1/build/d3-shape.js",
      "npm:d3-path@0.1.5.js",
      "npm:d3-path@0.1.5/build/d3-path.js",
      "npm:react-vis@0.4.2/dist/lib/plot/horizontal-grid-lines.js",
      "npm:react-vis@0.4.2/dist/lib/utils/axis-utils.js",
      "npm:d3-axis@0.3.2.js",
      "npm:d3-axis@0.3.2/build/d3-axis.js",
      "npm:react-vis@0.4.2/dist/lib/plot/grid-lines.js",
      "npm:react-vis@0.4.2/dist/lib/plot/vertical-grid-lines.js",
      "npm:react-vis@0.4.2/dist/lib/plot/y-axis.js",
      "npm:react-vis@0.4.2/dist/lib/plot/axis.js",
      "npm:react-vis@0.4.2/dist/lib/plot/x-axis.js",
      "npm:react-vis@0.4.2/dist/lib/plot/crosshair.js",
      "npm:react-vis@0.4.2/dist/lib/plot/hint.js",
      "npm:react-vis@0.4.2/dist/lib/plot/series/line-mark-series.js",
      "npm:react-vis@0.4.2/dist/lib/plot/series/mark-series.js",
      "npm:react-vis@0.4.2/dist/lib/plot/series/line-series.js",
      "npm:react-vis@0.4.2/dist/lib/plot/series/area-series.js",
      "npm:react-vis@0.4.2/dist/lib/plot/series/heatmap-series.js",
      "npm:react-vis@0.4.2/dist/lib/plot/series/horizontal-bar-series.js",
      "npm:react-vis@0.4.2/dist/lib/plot/series/bar-series.js",
      "npm:react-vis@0.4.2/dist/lib/plot/series/vertical-bar-series.js",
      "npm:react-vis@0.4.2/dist/lib/plot/xy-plot.js",
      "npm:react-vis@0.4.2/dist/lib/treemap/treemap.js",
      "npm:d3-hierarchy@0.2.4.js",
      "npm:d3-hierarchy@0.2.4/build/d3-hierarchy.js",
      "npm:react-vis@0.4.2/dist/lib/table/table.js",
      "app/util.js",
      "npm:babel-runtime@5.8.38/core-js/object/keys.js",
      "npm:core-js@1.2.7/library/fn/object/keys.js",
      "npm:core-js@1.2.7/library/modules/es6.object.keys.js",
      "npm:core-js@1.2.7/library/modules/$.to-object.js",
      "npm:react-responsive@1.1.5.js",
      "npm:react-responsive@1.1.5/src/index.js",
      "npm:react-responsive@1.1.5/src/toQuery.js",
      "npm:react-responsive@1.1.5/src/mediaQuery.js",
      "npm:hyphenate-style-name@1.0.1.js",
      "npm:hyphenate-style-name@1.0.1/index.js",
      "npm:matchmedia@0.1.2.js",
      "npm:matchmedia@0.1.2/index.js",
      "npm:css-mediaquery@0.1.2.js",
      "npm:css-mediaquery@0.1.2/index.js",
      "npm:nuka-carousel@2.0.3.js",
      "npm:nuka-carousel@2.0.3/index.js",
      "npm:nuka-carousel@2.0.3/lib/carousel.js",
      "npm:exenv@1.2.1.js",
      "npm:exenv@1.2.1/index.js",
      "npm:nuka-carousel@2.0.3/lib/decorators.js",
      "npm:kw-react-tween-state@0.1.5.js",
      "npm:kw-react-tween-state@0.1.5/lib/index.js",
      "npm:react-dom@15.3.1.js",
      "npm:react-dom@15.3.1/index.js",
      "npm:react@15.3.1/lib/ReactDOM.js",
      "npm:react@15.3.1/lib/ReactDOMNullInputValuePropHook.js",
      "npm:react@15.3.1/lib/ReactDOMUnknownPropertyHook.js",
      "npm:react@15.3.1/lib/EventPluginRegistry.js",
      "npm:react@15.3.1/lib/DOMProperty.js",
      "npm:react@15.3.1/lib/ReactInstrumentation.js",
      "npm:react@15.3.1/lib/ReactDebugTool.js",
      "npm:fbjs@0.8.4/lib/performanceNow.js",
      "npm:fbjs@0.8.4/lib/performance.js",
      "npm:fbjs@0.8.4/lib/ExecutionEnvironment.js",
      "npm:react@15.3.1/lib/ReactChildrenMutationWarningHook.js",
      "npm:react@15.3.1/lib/ReactHostOperationHistoryHook.js",
      "npm:react@15.3.1/lib/ReactInvalidSetStateWarningHook.js",
      "npm:react@15.3.1/lib/renderSubtreeIntoContainer.js",
      "npm:react@15.3.1/lib/ReactMount.js",
      "npm:react@15.3.1/lib/shouldUpdateReactComponent.js",
      "npm:react@15.3.1/lib/setInnerHTML.js",
      "npm:react@15.3.1/lib/createMicrosoftUnsafeLocalFunction.js",
      "npm:react@15.3.1/lib/DOMNamespaces.js",
      "npm:react@15.3.1/lib/instantiateReactComponent.js",
      "npm:react@15.3.1/lib/ReactHostComponent.js",
      "npm:react@15.3.1/lib/ReactEmptyComponent.js",
      "npm:react@15.3.1/lib/ReactCompositeComponent.js",
      "npm:react@15.3.1/lib/ReactReconciler.js",
      "npm:react@15.3.1/lib/ReactRef.js",
      "npm:react@15.3.1/lib/ReactOwner.js",
      "npm:react@15.3.1/lib/ReactNodeTypes.js",
      "npm:react@15.3.1/lib/ReactInstanceMap.js",
      "npm:react@15.3.1/lib/ReactErrorUtils.js",
      "npm:react@15.3.1/lib/ReactComponentEnvironment.js",
      "npm:react@15.3.1/lib/ReactUpdates.js",
      "npm:react@15.3.1/lib/Transaction.js",
      "npm:react@15.3.1/lib/ReactFeatureFlags.js",
      "npm:react@15.3.1/lib/CallbackQueue.js",
      "npm:react@15.3.1/lib/ReactUpdateQueue.js",
      "npm:react@15.3.1/lib/ReactMarkupChecksum.js",
      "npm:react@15.3.1/lib/adler32.js",
      "npm:react@15.3.1/lib/ReactDOMFeatureFlags.js",
      "npm:react@15.3.1/lib/ReactDOMContainerInfo.js",
      "npm:react@15.3.1/lib/validateDOMNesting.js",
      "npm:react@15.3.1/lib/ReactDOMComponentTree.js",
      "npm:react@15.3.1/lib/ReactDOMComponentFlags.js",
      "npm:react@15.3.1/lib/ReactBrowserEventEmitter.js",
      "npm:react@15.3.1/lib/isEventSupported.js",
      "npm:react@15.3.1/lib/getVendorPrefixedEventName.js",
      "npm:react@15.3.1/lib/ViewportMetrics.js",
      "npm:react@15.3.1/lib/ReactEventEmitterMixin.js",
      "npm:react@15.3.1/lib/EventPluginHub.js",
      "npm:react@15.3.1/lib/forEachAccumulated.js",
      "npm:react@15.3.1/lib/accumulateInto.js",
      "npm:react@15.3.1/lib/EventPluginUtils.js",
      "npm:react@15.3.1/lib/EventConstants.js",
      "npm:react@15.3.1/lib/DOMLazyTree.js",
      "npm:react@15.3.1/lib/setTextContent.js",
      "npm:react@15.3.1/lib/escapeTextContentForBrowser.js",
      "npm:react@15.3.1/lib/getHostComponentFromComposite.js",
      "npm:react@15.3.1/lib/findDOMNode.js",
      "npm:react@15.3.1/lib/ReactDefaultInjection.js",
      "npm:react@15.3.1/lib/SimpleEventPlugin.js",
      "npm:react@15.3.1/lib/getEventCharCode.js",
      "npm:react@15.3.1/lib/SyntheticWheelEvent.js",
      "npm:react@15.3.1/lib/SyntheticMouseEvent.js",
      "npm:react@15.3.1/lib/getEventModifierState.js",
      "npm:react@15.3.1/lib/SyntheticUIEvent.js",
      "npm:react@15.3.1/lib/getEventTarget.js",
      "npm:react@15.3.1/lib/SyntheticEvent.js",
      "npm:react@15.3.1/lib/SyntheticTransitionEvent.js",
      "npm:react@15.3.1/lib/SyntheticTouchEvent.js",
      "npm:react@15.3.1/lib/SyntheticDragEvent.js",
      "npm:react@15.3.1/lib/SyntheticKeyboardEvent.js",
      "npm:react@15.3.1/lib/getEventKey.js",
      "npm:react@15.3.1/lib/SyntheticFocusEvent.js",
      "npm:react@15.3.1/lib/SyntheticClipboardEvent.js",
      "npm:react@15.3.1/lib/SyntheticAnimationEvent.js",
      "npm:react@15.3.1/lib/EventPropagators.js",
      "npm:fbjs@0.8.4/lib/EventListener.js",
      "npm:react@15.3.1/lib/SelectEventPlugin.js",
      "npm:react@15.3.1/lib/isTextInputElement.js",
      "npm:fbjs@0.8.4/lib/getActiveElement.js",
      "npm:react@15.3.1/lib/ReactInputSelection.js",
      "npm:fbjs@0.8.4/lib/focusNode.js",
      "npm:fbjs@0.8.4/lib/containsNode.js",
      "npm:fbjs@0.8.4/lib/isTextNode.js",
      "npm:fbjs@0.8.4/lib/isNode.js",
      "npm:react@15.3.1/lib/ReactDOMSelection.js",
      "npm:react@15.3.1/lib/getTextContentAccessor.js",
      "npm:react@15.3.1/lib/getNodeForCharacterOffset.js",
      "npm:react@15.3.1/lib/SVGDOMPropertyConfig.js",
      "npm:react@15.3.1/lib/ReactReconcileTransaction.js",
      "npm:react@15.3.1/lib/ReactInjection.js",
      "npm:react@15.3.1/lib/ReactEventListener.js",
      "npm:fbjs@0.8.4/lib/getUnboundedScrollPosition.js",
      "npm:react@15.3.1/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@15.3.1/lib/ReactDOMTextComponent.js",
      "npm:react@15.3.1/lib/DOMChildrenOperations.js",
      "npm:react@15.3.1/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@15.3.1/lib/Danger.js",
      "npm:fbjs@0.8.4/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.8.4/lib/getMarkupWrap.js",
      "npm:fbjs@0.8.4/lib/createArrayFromMixed.js",
      "npm:react@15.3.1/lib/ReactDOMTreeTraversal.js",
      "npm:react@15.3.1/lib/ReactDOMEmptyComponent.js",
      "npm:react@15.3.1/lib/ReactDOMComponent.js",
      "npm:react@15.3.1/lib/ReactServerRenderingTransaction.js",
      "npm:react@15.3.1/lib/ReactServerUpdateQueue.js",
      "npm:react@15.3.1/lib/ReactMultiChild.js",
      "npm:react@15.3.1/lib/flattenChildren.js",
      "npm:react@15.3.1/lib/ReactChildReconciler.js",
      "npm:react@15.3.1/lib/ReactDOMTextarea.js",
      "npm:react@15.3.1/lib/LinkedValueUtils.js",
      "npm:react@15.3.1/lib/DisabledInputUtils.js",
      "npm:react@15.3.1/lib/ReactDOMSelect.js",
      "npm:react@15.3.1/lib/ReactDOMOption.js",
      "npm:react@15.3.1/lib/ReactDOMInput.js",
      "npm:react@15.3.1/lib/DOMPropertyOperations.js",
      "npm:react@15.3.1/lib/quoteAttributeValueForBrowser.js",
      "npm:react@15.3.1/lib/ReactDOMButton.js",
      "npm:react@15.3.1/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.8.4/lib/memoizeStringOnly.js",
      "npm:fbjs@0.8.4/lib/hyphenateStyleName.js",
      "npm:fbjs@0.8.4/lib/hyphenate.js",
      "npm:react@15.3.1/lib/dangerousStyleValue.js",
      "npm:react@15.3.1/lib/CSSProperty.js",
      "npm:fbjs@0.8.4/lib/camelizeStyleName.js",
      "npm:fbjs@0.8.4/lib/camelize.js",
      "npm:react@15.3.1/lib/AutoFocusUtils.js",
      "npm:react@15.3.1/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@15.3.1/lib/ReactDOMIDOperations.js",
      "npm:react@15.3.1/lib/HTMLDOMPropertyConfig.js",
      "npm:react@15.3.1/lib/EnterLeaveEventPlugin.js",
      "npm:react@15.3.1/lib/DefaultEventPluginOrder.js",
      "npm:react@15.3.1/lib/ChangeEventPlugin.js",
      "npm:react@15.3.1/lib/BeforeInputEventPlugin.js",
      "npm:react@15.3.1/lib/SyntheticInputEvent.js",
      "npm:react@15.3.1/lib/SyntheticCompositionEvent.js",
      "npm:react@15.3.1/lib/FallbackCompositionState.js",
      "npm:babel-runtime@5.8.38/core-js/array/from.js",
      "npm:core-js@1.2.7/library/fn/array/from.js",
      "npm:core-js@1.2.7/library/modules/es6.array.from.js",
      "npm:core-js@1.2.7/library/modules/$.iter-detect.js",
      "npm:core-js@1.2.7/library/modules/$.wks.js",
      "npm:core-js@1.2.7/library/modules/$.uid.js",
      "npm:core-js@1.2.7/library/modules/$.shared.js",
      "npm:core-js@1.2.7/library/modules/core.get-iterator-method.js",
      "npm:core-js@1.2.7/library/modules/$.iterators.js",
      "npm:core-js@1.2.7/library/modules/$.classof.js",
      "npm:core-js@1.2.7/library/modules/$.to-length.js",
      "npm:core-js@1.2.7/library/modules/$.to-integer.js",
      "npm:core-js@1.2.7/library/modules/$.is-array-iter.js",
      "npm:core-js@1.2.7/library/modules/$.iter-call.js",
      "npm:core-js@1.2.7/library/modules/es6.string.iterator.js",
      "npm:core-js@1.2.7/library/modules/$.iter-define.js",
      "npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js",
      "npm:core-js@1.2.7/library/modules/$.has.js",
      "npm:core-js@1.2.7/library/modules/$.iter-create.js",
      "npm:core-js@1.2.7/library/modules/$.hide.js",
      "npm:core-js@1.2.7/library/modules/$.descriptors.js",
      "npm:core-js@1.2.7/library/modules/$.property-desc.js",
      "npm:core-js@1.2.7/library/modules/$.redefine.js",
      "npm:core-js@1.2.7/library/modules/$.library.js",
      "npm:core-js@1.2.7/library/modules/$.string-at.js",
      "npm:babel-runtime@5.8.38/core-js/object/assign.js",
      "npm:core-js@1.2.7/library/fn/object/assign.js",
      "npm:core-js@1.2.7/library/modules/es6.object.assign.js",
      "npm:core-js@1.2.7/library/modules/$.object-assign.js",
      "npm:babel-runtime@5.8.38/core-js/set.js",
      "npm:core-js@1.2.7/library/fn/set.js",
      "npm:core-js@1.2.7/library/modules/es7.set.to-json.js",
      "npm:core-js@1.2.7/library/modules/$.collection-to-json.js",
      "npm:core-js@1.2.7/library/modules/$.for-of.js",
      "npm:core-js@1.2.7/library/modules/es6.set.js",
      "npm:core-js@1.2.7/library/modules/$.collection.js",
      "npm:core-js@1.2.7/library/modules/$.strict-new.js",
      "npm:core-js@1.2.7/library/modules/$.redefine-all.js",
      "npm:core-js@1.2.7/library/modules/$.collection-strong.js",
      "npm:core-js@1.2.7/library/modules/$.set-species.js",
      "npm:core-js@1.2.7/library/modules/$.iter-step.js",
      "npm:core-js@1.2.7/library/modules/web.dom.iterable.js",
      "npm:core-js@1.2.7/library/modules/es6.array.iterator.js",
      "npm:core-js@1.2.7/library/modules/$.add-to-unscopables.js",
      "npm:core-js@1.2.7/library/modules/es6.object.to-string.js",
      "npm:babel-runtime@5.8.38/helpers/extends.js",
      "app/results.js",
      "app/seasonal.js",
      "npm:react-stonecutter@0.3.3.js",
      "npm:react-stonecutter@0.3.3/lib/react-stonecutter.js",
      "npm:react-motion@0.4.4.js",
      "npm:react-motion@0.4.4/lib/react-motion.js",
      "npm:react-motion@0.4.4/lib/reorderKeys.js",
      "npm:react-motion@0.4.4/lib/presets.js",
      "npm:react-motion@0.4.4/lib/spring.js",
      "npm:react-motion@0.4.4/lib/TransitionMotion.js",
      "npm:react-motion@0.4.4/lib/shouldStopAnimation.js",
      "npm:raf@3.3.0.js",
      "npm:raf@3.3.0/index.js",
      "npm:performance-now@0.2.0.js",
      "npm:performance-now@0.2.0/lib/performance-now.js",
      "npm:react-motion@0.4.4/lib/mergeDiff.js",
      "npm:react-motion@0.4.4/lib/stepper.js",
      "npm:react-motion@0.4.4/lib/stripStyle.js",
      "npm:react-motion@0.4.4/lib/mapToZero.js",
      "npm:react-motion@0.4.4/lib/StaggeredMotion.js",
      "npm:react-motion@0.4.4/lib/Motion.js",
      "npm:react-addons-transition-group@15.3.1.js",
      "npm:react-addons-transition-group@15.3.1/index.js",
      "npm:react@15.3.1/lib/ReactTransitionGroup.js",
      "npm:react@15.3.1/lib/ReactTransitionChildMapping.js",
      "npm:lodash.partition@4.6.0.js",
      "npm:lodash.partition@4.6.0/index.js",
      "npm:lodash.debounce@4.0.8.js",
      "npm:lodash.debounce@4.0.8/index.js",
      "npm:imagesloaded@4.1.1.js",
      "npm:imagesloaded@4.1.1/imagesloaded.js",
      "npm:ev-emitter@1.0.3.js",
      "npm:ev-emitter@1.0.3/ev-emitter.js",
      "npm:enquire.js@2.1.1.js",
      "npm:enquire.js@2.1.1/dist/enquire.js",
      "npm:shallowequal@0.2.2.js",
      "npm:shallowequal@0.2.2/modules/index.js",
      "npm:lodash.keys@3.1.2.js",
      "npm:lodash.keys@3.1.2/index.js",
      "npm:lodash.isarray@3.0.4.js",
      "npm:lodash.isarray@3.0.4/index.js",
      "npm:lodash.isarguments@3.1.0.js",
      "npm:lodash.isarguments@3.1.0/index.js",
      "npm:lodash._getnative@3.9.1.js",
      "npm:lodash._getnative@3.9.1/index.js",
      "npm:lodash.omit@4.5.0.js",
      "npm:lodash.omit@4.5.0/index.js",
      "app/table.js",
      "npm:babel-runtime@5.8.38/core-js/object/values.js",
      "npm:core-js@1.2.7/library/fn/object/values.js",
      "npm:core-js@1.2.7/library/modules/es7.object.values.js",
      "npm:core-js@1.2.7/library/modules/$.object-to-array.js",
      "app/schedule.js",
      "app/exercises.js",
      "npm:react-tokeninput@2.1.1.js",
      "npm:react-tokeninput@2.1.1/lib/index.js",
      "npm:react-tokeninput@2.1.1/lib/main.js",
      "npm:classnames@2.2.5.js",
      "npm:classnames@2.2.5/index.js",
      "npm:react-tokeninput@2.1.1/lib/token.js",
      "npm:react-tokeninput@2.1.1/lib/combobox.js",
      "npm:react-tokeninput@2.1.1/lib/option.js",
      "npm:react-tokeninput@2.1.1/lib/add-class.js",
      "npm:react-dynamic-modal@1.1.1.js",
      "npm:react-dynamic-modal@1.1.1/lib.js",
      "npm:react-dynamic-modal@1.1.1/lib/index.js",
      "npm:react-dynamic-modal@1.1.1/lib/Effect.js",
      "npm:react-dynamic-modal@1.1.1/lib/Modal.js",
      "npm:react-prefixr@0.1.0.js",
      "npm:react-prefixr@0.1.0/stylePrefixr.js",
      "npm:lodash.assign@3.2.0.js",
      "npm:lodash.assign@3.2.0/index.js",
      "npm:lodash._createassigner@3.1.1.js",
      "npm:lodash._createassigner@3.1.1/index.js",
      "npm:lodash.restparam@3.6.1.js",
      "npm:lodash.restparam@3.6.1/index.js",
      "npm:lodash._isiterateecall@3.0.9.js",
      "npm:lodash._isiterateecall@3.0.9/index.js",
      "npm:lodash._bindcallback@3.0.1.js",
      "npm:lodash._bindcallback@3.0.1/index.js",
      "npm:lodash._baseassign@3.2.0.js",
      "npm:lodash._baseassign@3.2.0/index.js",
      "npm:lodash._basecopy@3.0.1.js",
      "npm:lodash._basecopy@3.0.1/index.js",
      "npm:react-sanfona@0.0.14.js",
      "npm:react-sanfona@0.0.14/dist-modules/index.js",
      "npm:react-sanfona@0.0.14/dist-modules/AccordionItem/index.js",
      "npm:react-sanfona@0.0.14/dist-modules/AccordionItemTitle/index.js",
      "npm:classnames@2.2.0.js",
      "npm:classnames@2.2.0/index.js",
      "npm:react-sanfona@0.0.14/dist-modules/AccordionItemBody/index.js",
      "npm:uuid@2.0.1.js",
      "npm:uuid@2.0.1/uuid.js",
      "npm:uuid@2.0.1/rng-browser.js",
      "npm:react-sanfona@0.0.14/dist-modules/Accordion/index.js",
      "npm:babel-runtime@5.8.38/helpers/to-consumable-array.js",
      "app/choose-season.js",
      "app/matches.js",
      "app/assists.js",
      "app/players.js",
      "npm:react-bootstrap-table@2.4.2/css/react-bootstrap-table.min.css!github:systemjs/plugin-css@0.1.27.js",
      "npm:react-bootstrap-table@2.4.2.js",
      "npm:react-bootstrap-table@2.4.2/lib/index.js",
      "npm:react-bootstrap-table@2.4.2/lib/TableHeaderColumn.js",
      "npm:react-bootstrap-table@2.4.2/lib/filters/Number.js",
      "npm:react-bootstrap-table@2.4.2/lib/Const.js",
      "npm:react-bootstrap-table@2.4.2/lib/filters/Select.js",
      "npm:react-bootstrap-table@2.4.2/lib/filters/Regex.js",
      "npm:react-bootstrap-table@2.4.2/lib/filters/Text.js",
      "npm:react-bootstrap-table@2.4.2/lib/filters/Date.js",
      "npm:react-bootstrap-table@2.4.2/lib/util.js",
      "npm:react-bootstrap-table@2.4.2/lib/BootstrapTable.js",
      "npm:react-bootstrap-table@2.4.2/lib/Filter.js",
      "github:jspm/nodelibs-events@0.1.1.js",
      "github:jspm/nodelibs-events@0.1.1/index.js",
      "npm:events@1.0.2.js",
      "npm:events@1.0.2/events.js",
      "npm:react-bootstrap-table@2.4.2/lib/csv_export_util.js",
      "npm:react-bootstrap-table@2.4.2/lib/filesaver.js",
      "npm:react-bootstrap-table@2.4.2/lib/store/TableDataStore.js",
      "npm:react-bootstrap-table@2.4.2/lib/TableFilter.js",
      "npm:react-bootstrap-table@2.4.2/lib/toolbar/ToolBar.js",
      "npm:react-bootstrap-table@2.4.2/lib/Notification.js",
      "npm:react-toastr@2.8.0.js",
      "npm:react-toastr@2.8.0/lib/index.js",
      "npm:react-toastr@2.8.0/lib/ToastMessage/index.js",
      "npm:react-toastr@2.8.0/lib/ToastMessage/jQueryMixin.js",
      "npm:react-toastr@2.8.0/lib/ToastMessage/animationMixin.js",
      "npm:element-class@0.2.2.js",
      "npm:element-class@0.2.2/index.js",
      "npm:react@15.3.1/lib/ReactTransitionEvents.js",
      "npm:react-addons-update@15.3.0.js",
      "npm:react-addons-update@15.3.0/index.js",
      "npm:react@15.3.1/lib/update.js",
      "npm:react-toastr@2.8.0/lib/ToastContainer.js",
      "npm:lodash@4.15.0.js",
      "npm:lodash@4.15.0/lodash.js",
      "npm:react-bootstrap-table@2.4.2/lib/Editor.js",
      "npm:react-bootstrap-table@2.4.2/lib/pagination/PaginationList.js",
      "npm:react-bootstrap-table@2.4.2/lib/pagination/PageButton.js",
      "npm:react-bootstrap-table@2.4.2/lib/TableBody.js",
      "npm:react-bootstrap-table@2.4.2/lib/TableEditColumn.js",
      "npm:react-bootstrap-table@2.4.2/lib/TableColumn.js",
      "npm:react-bootstrap-table@2.4.2/lib/TableRow.js",
      "npm:react-bootstrap-table@2.4.2/lib/TableHeader.js",
      "npm:react-bootstrap-table@2.4.2/lib/SelectRowHeaderColumn.js",
      "app/goals.js",
      "app/home.js",
      "app/update.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.27",
    "d3-color": "npm:d3-color@0.4.2",
    "d3-scale": "npm:d3-scale@0.7.2",
    "fetch": "npm:whatwg-fetch@1.0.0",
    "history": "npm:history@2.1.2",
    "nuka-carousel": "npm:nuka-carousel@2.0.3",
    "react": "npm:react@15.3.1",
    "react-bootstrap-table": "npm:react-bootstrap-table@2.4.2",
    "react-dom": "npm:react-dom@15.3.1",
    "react-dynamic-modal": "npm:react-dynamic-modal@1.1.1",
    "react-redux": "npm:react-redux@4.4.5",
    "react-responsive": "npm:react-responsive@1.1.5",
    "react-router": "npm:react-router@2.6.1",
    "react-sanfona": "npm:react-sanfona@0.0.14",
    "react-slick": "npm:react-slick@0.14.3",
    "react-stonecutter": "npm:react-stonecutter@0.3.3",
    "react-tokeninput": "npm:react-tokeninput@2.1.1",
    "react-vis": "npm:react-vis@0.4.2",
    "redux": "npm:redux@3.5.2",
    "slick-carousel": "npm:slick-carousel@1.6.0",
    "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@3.1.0"
    },
    "npm:asap@2.0.4": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.8.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:classnames@2.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.1"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:d3-axis@0.3.2": {
      "d3-scale": "npm:d3-scale@0.7.2",
      "d3-selection": "npm:d3-selection@0.7.3",
      "d3-transition": "npm:d3-transition@0.2.10"
    },
    "npm:d3-interpolate@0.8.3": {
      "d3-color": "npm:d3-color@0.4.2"
    },
    "npm:d3-scale@0.7.2": {
      "d3-array": "npm:d3-array@0.7.1",
      "d3-collection": "npm:d3-collection@0.2.0",
      "d3-color": "npm:d3-color@0.4.2",
      "d3-format": "npm:d3-format@0.5.1",
      "d3-interpolate": "npm:d3-interpolate@0.8.3",
      "d3-time": "npm:d3-time@0.2.6",
      "d3-time-format": "npm:d3-time-format@0.3.2"
    },
    "npm:d3-shape@0.6.1": {
      "d3-path": "npm:d3-path@0.1.5"
    },
    "npm:d3-time-format@0.3.2": {
      "d3-time": "npm:d3-time@0.2.6"
    },
    "npm:d3-transition@0.2.10": {
      "d3-color": "npm:d3-color@0.4.2",
      "d3-dispatch": "npm:d3-dispatch@0.4.4",
      "d3-ease": "npm:d3-ease@0.7.0",
      "d3-interpolate": "npm:d3-interpolate@0.8.3",
      "d3-selection": "npm:d3-selection@0.7.3",
      "d3-timer": "npm:d3-timer@0.4.4"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@6.3.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.8.4": {
      "core-js": "npm:core-js@1.2.7",
      "immutable": "npm:immutable@3.8.1",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:global@4.3.0": {
      "process": "npm:process@0.5.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:history@2.1.2": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.3",
      "warning": "npm:warning@2.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:imagesloaded@4.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "ev-emitter": "npm:ev-emitter@1.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.1",
      "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
    },
    "npm:json2mq@0.2.0": {
      "string-convert": "npm:string-convert@0.2.1"
    },
    "npm:kw-react-tween-state@0.1.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "raf": "npm:raf@3.3.0",
      "react": "npm:react@15.3.1",
      "react-dom": "npm:react-dom@15.3.1",
      "tween-functions": "npm:tween-functions@1.2.0"
    },
    "npm:lodash._baseassign@3.2.0": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._createassigner@3.1.1": {
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.assign@3.2.0": {
      "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
      "lodash._createassigner": "npm:lodash._createassigner@3.1.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.debounce@4.0.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.omit@4.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.partition@4.6.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:matchmedia@0.1.2": {
      "css-mediaquery": "npm:css-mediaquery@0.1.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6"
    },
    "npm:node-fetch@1.6.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:nuka-carousel@2.0.3": {
      "exenv": "npm:exenv@1.2.1",
      "kw-react-tween-state": "npm:kw-react-tween-state@0.1.5",
      "object-assign": "npm:object-assign@4.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "react": "npm:react@15.3.1",
      "react-dom": "npm:react-dom@15.3.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.8.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:performance-now@0.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.3": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:raf@3.3.0": {
      "performance-now": "npm:performance-now@0.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-addons-shallow-compare@15.3.0": {
      "react": "npm:react@15.3.1"
    },
    "npm:react-addons-transition-group@15.3.1": {
      "react": "npm:react@15.3.1"
    },
    "npm:react-addons-update@15.3.0": {
      "react": "npm:react@15.3.1"
    },
    "npm:react-bootstrap-table@2.4.2": {
      "classnames": "npm:classnames@2.2.5",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.1",
      "react-toastr": "npm:react-toastr@2.8.0"
    },
    "npm:react-dom@15.3.1": {
      "react": "npm:react@15.3.1"
    },
    "npm:react-dynamic-modal@1.1.1": {
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "react": "npm:react@15.3.1",
      "react-dom": "npm:react-dom@15.3.1",
      "react-prefixr": "npm:react-prefixr@0.1.0"
    },
    "npm:react-motion@0.4.4": {
      "performance-now": "npm:performance-now@0.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "raf": "npm:raf@3.3.0",
      "react": "npm:react@15.3.1"
    },
    "npm:react-redux@4.4.5": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@4.15.0",
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.1",
      "redux": "npm:redux@3.5.2"
    },
    "npm:react-responsive-mixin@0.4.0": {
      "can-use-dom": "npm:can-use-dom@0.1.0",
      "enquire.js": "npm:enquire.js@2.1.1",
      "json2mq": "npm:json2mq@0.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-responsive@1.1.5": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "hyphenate-style-name": "npm:hyphenate-style-name@1.0.1",
      "matchmedia": "npm:matchmedia@0.1.2",
      "object-assign": "npm:object-assign@4.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.1"
    },
    "npm:react-router@2.6.1": {
      "history": "npm:history@2.1.2",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.1",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-sanfona@0.0.14": {
      "classnames": "npm:classnames@2.2.0",
      "react": "npm:react@15.3.1",
      "react-dom": "npm:react-dom@15.3.1",
      "uuid": "npm:uuid@2.0.1"
    },
    "npm:react-slick@0.14.3": {
      "classnames": "npm:classnames@2.2.5",
      "json2mq": "npm:json2mq@0.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.1",
      "react-dom": "npm:react-dom@15.3.1",
      "react-responsive-mixin": "npm:react-responsive-mixin@0.4.0",
      "slick-carousel": "npm:slick-carousel@1.6.0"
    },
    "npm:react-stonecutter@0.3.3": {
      "enquire.js": "npm:enquire.js@2.1.1",
      "imagesloaded": "npm:imagesloaded@4.1.1",
      "lodash.debounce": "npm:lodash.debounce@4.0.8",
      "lodash.omit": "npm:lodash.omit@4.5.0",
      "lodash.partition": "npm:lodash.partition@4.6.0",
      "react": "npm:react@15.3.1",
      "react-addons-transition-group": "npm:react-addons-transition-group@15.3.1",
      "react-dom": "npm:react-dom@15.3.1",
      "react-motion": "npm:react-motion@0.4.4",
      "shallowequal": "npm:shallowequal@0.2.2"
    },
    "npm:react-toastr@2.8.0": {
      "classnames": "npm:classnames@2.2.5",
      "element-class": "npm:element-class@0.2.2",
      "lodash": "npm:lodash@4.15.0",
      "react": "npm:react@15.3.1",
      "react-addons-update": "npm:react-addons-update@15.3.0",
      "react-dom": "npm:react-dom@15.3.1"
    },
    "npm:react-tokeninput@2.1.1": {
      "classnames": "npm:classnames@2.2.5"
    },
    "npm:react-vis@0.4.2": {
      "d3-array": "npm:d3-array@0.7.1",
      "d3-axis": "npm:d3-axis@0.3.2",
      "d3-collection": "npm:d3-collection@0.1.2",
      "d3-color": "npm:d3-color@0.4.2",
      "d3-hierarchy": "npm:d3-hierarchy@0.2.4",
      "d3-scale": "npm:d3-scale@0.7.2",
      "d3-selection": "npm:d3-selection@0.7.3",
      "d3-shape": "npm:d3-shape@0.6.1",
      "d3-transition": "npm:d3-transition@0.2.10",
      "deep-equal": "npm:deep-equal@1.0.1",
      "global": "npm:global@4.3.0",
      "react": "npm:react@15.3.1",
      "react-addons-shallow-compare": "npm:react-addons-shallow-compare@15.3.0",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react@15.3.1": {
      "fbjs": "npm:fbjs@0.8.4",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:redux@3.5.2": {
      "lodash": "npm:lodash@4.15.0",
      "lodash-es": "npm:lodash-es@4.15.0",
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@0.2.4"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:shallowequal@0.2.2": {
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:slick-carousel@1.6.0": {
      "jquery": "npm:jquery@3.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uuid@2.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@3.0.0": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
