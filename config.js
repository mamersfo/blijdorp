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
      "app/List.js",
      "npm:react@15.3.0.js",
      "npm:react@15.3.0/react.js",
      "npm:react@15.3.0/lib/React.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.8.js",
      "npm:process@0.11.8/browser.js",
      "npm:react@15.3.0/lib/ReactElementValidator.js",
      "npm:fbjs@0.8.3/lib/warning.js",
      "npm:fbjs@0.8.3/lib/emptyFunction.js",
      "npm:react@15.3.0/lib/getIteratorFn.js",
      "npm:react@15.3.0/lib/canDefineProperty.js",
      "npm:react@15.3.0/lib/checkReactTypeSpec.js",
      "npm:react@15.3.0/lib/ReactComponentTreeDevtool.js",
      "npm:fbjs@0.8.3/lib/invariant.js",
      "npm:react@15.3.0/lib/ReactCurrentOwner.js",
      "npm:react@15.3.0/lib/reactProdInvariant.js",
      "npm:react@15.3.0/lib/ReactPropTypesSecret.js",
      "npm:react@15.3.0/lib/ReactPropTypeLocationNames.js",
      "npm:react@15.3.0/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.8.3/lib/keyMirror.js",
      "npm:react@15.3.0/lib/ReactElement.js",
      "npm:object-assign@4.1.0.js",
      "npm:object-assign@4.1.0/index.js",
      "npm:react@15.3.0/lib/onlyChild.js",
      "npm:react@15.3.0/lib/ReactVersion.js",
      "npm:react@15.3.0/lib/ReactPropTypes.js",
      "npm:react@15.3.0/lib/ReactDOMFactories.js",
      "npm:fbjs@0.8.3/lib/mapObject.js",
      "npm:react@15.3.0/lib/ReactClass.js",
      "npm:fbjs@0.8.3/lib/keyOf.js",
      "npm:fbjs@0.8.3/lib/emptyObject.js",
      "npm:react@15.3.0/lib/ReactNoopUpdateQueue.js",
      "npm:react@15.3.0/lib/ReactComponent.js",
      "npm:react@15.3.0/lib/ReactPureComponent.js",
      "npm:react@15.3.0/lib/ReactChildren.js",
      "npm:react@15.3.0/lib/traverseAllChildren.js",
      "npm:react@15.3.0/lib/KeyEscapeUtils.js",
      "npm:react@15.3.0/lib/PooledClass.js",
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
      "npm:react-dom@15.3.0.js",
      "npm:react-dom@15.3.0/index.js",
      "npm:react@15.3.0/lib/ReactDOM.js",
      "npm:fbjs@0.8.3/lib/ExecutionEnvironment.js",
      "npm:react@15.3.0/lib/renderSubtreeIntoContainer.js",
      "npm:react@15.3.0/lib/ReactMount.js",
      "npm:react@15.3.0/lib/shouldUpdateReactComponent.js",
      "npm:react@15.3.0/lib/setInnerHTML.js",
      "npm:react@15.3.0/lib/createMicrosoftUnsafeLocalFunction.js",
      "npm:react@15.3.0/lib/DOMNamespaces.js",
      "npm:react@15.3.0/lib/instantiateReactComponent.js",
      "npm:react@15.3.0/lib/ReactInstrumentation.js",
      "npm:react@15.3.0/lib/ReactDebugTool.js",
      "npm:fbjs@0.8.3/lib/performanceNow.js",
      "npm:fbjs@0.8.3/lib/performance.js",
      "npm:react@15.3.0/lib/ReactChildrenMutationWarningDevtool.js",
      "npm:react@15.3.0/lib/ReactHostOperationHistoryDevtool.js",
      "npm:react@15.3.0/lib/ReactInvalidSetStateWarningDevTool.js",
      "npm:react@15.3.0/lib/ReactHostComponent.js",
      "npm:react@15.3.0/lib/ReactEmptyComponent.js",
      "npm:react@15.3.0/lib/ReactCompositeComponent.js",
      "npm:fbjs@0.8.3/lib/shallowEqual.js",
      "npm:react@15.3.0/lib/ReactReconciler.js",
      "npm:react@15.3.0/lib/ReactRef.js",
      "npm:react@15.3.0/lib/ReactOwner.js",
      "npm:react@15.3.0/lib/ReactNodeTypes.js",
      "npm:react@15.3.0/lib/ReactInstanceMap.js",
      "npm:react@15.3.0/lib/ReactErrorUtils.js",
      "npm:react@15.3.0/lib/ReactComponentEnvironment.js",
      "npm:react@15.3.0/lib/ReactUpdates.js",
      "npm:react@15.3.0/lib/Transaction.js",
      "npm:react@15.3.0/lib/ReactFeatureFlags.js",
      "npm:react@15.3.0/lib/CallbackQueue.js",
      "npm:react@15.3.0/lib/ReactUpdateQueue.js",
      "npm:react@15.3.0/lib/ReactMarkupChecksum.js",
      "npm:react@15.3.0/lib/adler32.js",
      "npm:react@15.3.0/lib/ReactDOMFeatureFlags.js",
      "npm:react@15.3.0/lib/ReactDOMContainerInfo.js",
      "npm:react@15.3.0/lib/validateDOMNesting.js",
      "npm:react@15.3.0/lib/ReactDOMComponentTree.js",
      "npm:react@15.3.0/lib/ReactDOMComponentFlags.js",
      "npm:react@15.3.0/lib/DOMProperty.js",
      "npm:react@15.3.0/lib/ReactBrowserEventEmitter.js",
      "npm:react@15.3.0/lib/isEventSupported.js",
      "npm:react@15.3.0/lib/getVendorPrefixedEventName.js",
      "npm:react@15.3.0/lib/ViewportMetrics.js",
      "npm:react@15.3.0/lib/ReactEventEmitterMixin.js",
      "npm:react@15.3.0/lib/EventPluginHub.js",
      "npm:react@15.3.0/lib/forEachAccumulated.js",
      "npm:react@15.3.0/lib/accumulateInto.js",
      "npm:react@15.3.0/lib/EventPluginUtils.js",
      "npm:react@15.3.0/lib/EventConstants.js",
      "npm:react@15.3.0/lib/EventPluginRegistry.js",
      "npm:react@15.3.0/lib/DOMLazyTree.js",
      "npm:react@15.3.0/lib/setTextContent.js",
      "npm:react@15.3.0/lib/escapeTextContentForBrowser.js",
      "npm:react@15.3.0/lib/getHostComponentFromComposite.js",
      "npm:react@15.3.0/lib/findDOMNode.js",
      "npm:react@15.3.0/lib/ReactDefaultInjection.js",
      "npm:react@15.3.0/lib/SimpleEventPlugin.js",
      "npm:react@15.3.0/lib/getEventCharCode.js",
      "npm:react@15.3.0/lib/SyntheticWheelEvent.js",
      "npm:react@15.3.0/lib/SyntheticMouseEvent.js",
      "npm:react@15.3.0/lib/getEventModifierState.js",
      "npm:react@15.3.0/lib/SyntheticUIEvent.js",
      "npm:react@15.3.0/lib/getEventTarget.js",
      "npm:react@15.3.0/lib/SyntheticEvent.js",
      "npm:react@15.3.0/lib/SyntheticTransitionEvent.js",
      "npm:react@15.3.0/lib/SyntheticTouchEvent.js",
      "npm:react@15.3.0/lib/SyntheticDragEvent.js",
      "npm:react@15.3.0/lib/SyntheticKeyboardEvent.js",
      "npm:react@15.3.0/lib/getEventKey.js",
      "npm:react@15.3.0/lib/SyntheticFocusEvent.js",
      "npm:react@15.3.0/lib/SyntheticClipboardEvent.js",
      "npm:react@15.3.0/lib/SyntheticAnimationEvent.js",
      "npm:react@15.3.0/lib/EventPropagators.js",
      "npm:fbjs@0.8.3/lib/EventListener.js",
      "npm:react@15.3.0/lib/SelectEventPlugin.js",
      "npm:react@15.3.0/lib/isTextInputElement.js",
      "npm:fbjs@0.8.3/lib/getActiveElement.js",
      "npm:react@15.3.0/lib/ReactInputSelection.js",
      "npm:fbjs@0.8.3/lib/focusNode.js",
      "npm:fbjs@0.8.3/lib/containsNode.js",
      "npm:fbjs@0.8.3/lib/isTextNode.js",
      "npm:fbjs@0.8.3/lib/isNode.js",
      "npm:react@15.3.0/lib/ReactDOMSelection.js",
      "npm:react@15.3.0/lib/getTextContentAccessor.js",
      "npm:react@15.3.0/lib/getNodeForCharacterOffset.js",
      "npm:react@15.3.0/lib/SVGDOMPropertyConfig.js",
      "npm:react@15.3.0/lib/ReactReconcileTransaction.js",
      "npm:react@15.3.0/lib/ReactInjection.js",
      "npm:react@15.3.0/lib/ReactEventListener.js",
      "npm:fbjs@0.8.3/lib/getUnboundedScrollPosition.js",
      "npm:react@15.3.0/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@15.3.0/lib/ReactDOMTextComponent.js",
      "npm:react@15.3.0/lib/DOMChildrenOperations.js",
      "npm:react@15.3.0/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@15.3.0/lib/Danger.js",
      "npm:fbjs@0.8.3/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.8.3/lib/getMarkupWrap.js",
      "npm:fbjs@0.8.3/lib/createArrayFromMixed.js",
      "npm:react@15.3.0/lib/ReactDOMTreeTraversal.js",
      "npm:react@15.3.0/lib/ReactDOMEmptyComponent.js",
      "npm:react@15.3.0/lib/ReactDOMComponent.js",
      "npm:react@15.3.0/lib/ReactServerRenderingTransaction.js",
      "npm:react@15.3.0/lib/ReactServerUpdateQueue.js",
      "npm:react@15.3.0/lib/ReactMultiChild.js",
      "npm:react@15.3.0/lib/flattenChildren.js",
      "npm:react@15.3.0/lib/ReactChildReconciler.js",
      "npm:react@15.3.0/lib/ReactDOMTextarea.js",
      "npm:react@15.3.0/lib/LinkedValueUtils.js",
      "npm:react@15.3.0/lib/DisabledInputUtils.js",
      "npm:react@15.3.0/lib/ReactDOMSelect.js",
      "npm:react@15.3.0/lib/ReactDOMOption.js",
      "npm:react@15.3.0/lib/ReactDOMInput.js",
      "npm:react@15.3.0/lib/DOMPropertyOperations.js",
      "npm:react@15.3.0/lib/quoteAttributeValueForBrowser.js",
      "npm:react@15.3.0/lib/ReactDOMInstrumentation.js",
      "npm:react@15.3.0/lib/ReactDOMDebugTool.js",
      "npm:react@15.3.0/lib/ReactDOMUnknownPropertyDevtool.js",
      "npm:react@15.3.0/lib/ReactDOMNullInputValuePropDevtool.js",
      "npm:react@15.3.0/lib/ReactDOMButton.js",
      "npm:react@15.3.0/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@15.3.0/lib/ReactDOMIDOperations.js",
      "npm:react@15.3.0/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.8.3/lib/memoizeStringOnly.js",
      "npm:fbjs@0.8.3/lib/hyphenateStyleName.js",
      "npm:fbjs@0.8.3/lib/hyphenate.js",
      "npm:react@15.3.0/lib/dangerousStyleValue.js",
      "npm:react@15.3.0/lib/CSSProperty.js",
      "npm:fbjs@0.8.3/lib/camelizeStyleName.js",
      "npm:fbjs@0.8.3/lib/camelize.js",
      "npm:react@15.3.0/lib/AutoFocusUtils.js",
      "npm:react@15.3.0/lib/HTMLDOMPropertyConfig.js",
      "npm:react@15.3.0/lib/EnterLeaveEventPlugin.js",
      "npm:react@15.3.0/lib/DefaultEventPluginOrder.js",
      "npm:react@15.3.0/lib/ChangeEventPlugin.js",
      "npm:react@15.3.0/lib/BeforeInputEventPlugin.js",
      "npm:react@15.3.0/lib/SyntheticInputEvent.js",
      "npm:react@15.3.0/lib/SyntheticCompositionEvent.js",
      "npm:react@15.3.0/lib/FallbackCompositionState.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "core-js": "npm:core-js@1.2.7",
    "react": "npm:react@15.3.0",
    "react-dom": "npm:react-dom@15.3.0",
    "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
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
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.8"
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
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:asap@2.0.4": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
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
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
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
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:fbjs@0.8.3": {
      "core-js": "npm:core-js@1.2.7",
      "immutable": "npm:immutable@3.8.1",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
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
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.0",
      "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:node-fetch@1.6.0": {
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
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@15.3.0": {
      "react": "npm:react@15.3.0"
    },
    "npm:react@15.3.0": {
      "fbjs": "npm:fbjs@0.8.3",
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
    "npm:readable-stream@2.1.4": {
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
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
