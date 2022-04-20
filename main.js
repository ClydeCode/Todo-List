/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 3fr;\\r\\n    height: 100vh;\\r\\n    background-color: white;\\r\\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.nav-bar {\\r\\n    background-color: rgba(155, 155, 155, .25);\\r\\n    border-right: 1px solid rgba(0, 0, 0, .2);\\r\\n    -webkit-touch-callout: none; /* iOS Safari */\\r\\n    -webkit-user-select: none; /* Safari */\\r\\n    -khtml-user-select: none; /* Konqueror HTML */\\r\\n    -moz-user-select: none; /* Old versions of Firefox */\\r\\n    -ms-user-select: none; /* Internet Explorer/Edge */\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n.nav-bar .pages {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: left;\\r\\n    gap: 30px;\\r\\n    font-size: 1.2rem;\\r\\n    letter-spacing: 1px;\\r\\n    color: black;\\r\\n}\\r\\n\\r\\n.nav-bar .pages .page:nth-child(1) {\\r\\n    margin-top: 20px;\\r\\n}\\r\\n\\r\\n.nav-bar .pages .page:nth-child(4) img {\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    margin-left: 3px;\\r\\n}\\r\\n\\r\\n.nav-bar .pages .page:nth-child(4) #arrow {\\r\\n    margin-left: 160px;\\r\\n    width: 28px;\\r\\n    height: 28px;\\r\\n    rotate: 180deg;\\r\\n}\\r\\n\\r\\n.nav-bar .pages .page {\\r\\n    margin-left: 20px;\\r\\n    padding: 15px;\\r\\n    /* padding-left: 80px; */\\r\\n    width: 370px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 25px;\\r\\n}\\r\\n\\r\\n.pages .page img {\\r\\n    height: 43px;\\r\\n    width: 43px;\\r\\n}\\r\\n\\r\\n.nav-bar .pages .page:hover {\\r\\n    background-color: rgba(0, 0, 0, .05);\\r\\n    border-radius: 6px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav-bar .active {\\r\\n    background-color: rgba(0, 0, 0, .09);\\r\\n    border-radius: 6px;\\r\\n}\\r\\n\\r\\n.nav-bar .projects-list {\\r\\n    /* background-color: rgb(209, 209, 209); */\\r\\n    height: 340px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 12px;\\r\\n    overflow: scroll;\\r\\n    -ms-overflow-style: none;  /* Internet Explorer 10+ */\\r\\n    scrollbar-width: none;\\r\\n    font-size: .93rem;\\r\\n}\\r\\n\\r\\n.nav-bar .projects-list::-webkit-scrollbar { /* Hide scrollbar for Chrome, Safari and Opera */\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.nav-bar .projects-list .list:nth-child(1) {\\r\\n    margin-top: 20px;\\r\\n}\\r\\n\\r\\n.nav-bar .projects-list .list {\\r\\n    margin-left: 75px;\\r\\n    padding: 15px;\\r\\n    padding-top: 5px;\\r\\n    padding-bottom: 5px;\\r\\n    width: 300px;\\r\\n    border-radius: 3px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav-bar .projects-list .list:hover {\\r\\n    background-color: rgba(0, 0, 0, .05);\\r\\n}\\r\\n\\r\\n.content {\\r\\n    padding: 40px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.content .title {\\r\\n    font-size: 1.6rem;\\r\\n}\\r\\n\\r\\n.content .tabs {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 15px;\\r\\n    padding: 15px;\\r\\n    color: white;\\r\\n    height: 90vh;\\r\\n    overflow: scroll;\\r\\n    margin-top: 15px;\\r\\n    scrollbar-width: none;\\r\\n}\\r\\n\\r\\n.content .tabs::-webkit-scrollbar { /* Hide scrollbar for Chrome, Safari and Opera */\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.content .tab {\\r\\n    display: flex;\\r\\n    gap: 20px;\\r\\n    background-color: coral;\\r\\n    border-radius: 6px;\\r\\n    padding-top: 7px;\\r\\n    padding-bottom: 7px;\\r\\n    padding-left: 10px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.date {\\r\\n    margin-left: auto;\\r\\n    margin-right: 15px;\\r\\n}\\r\\n\\r\\nsvg {\\r\\n    fill: rgba(255, 94, 0, .3);\\r\\n    align-self: center;\\r\\n}\\r\\n\\r\\n.button-x {\\r\\n    width: 12px;\\r\\n    height: 12px;   \\r\\n    margin-left: 25px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    height: 60px;\\r\\n    width: 60px;\\r\\n    position: absolute;\\r\\n    bottom: 130px;\\r\\n    right: 90px;\\r\\n    border-radius: 100%;\\r\\n    font-size: 1.5rem;\\r\\n    border-style: none;\\r\\n    background-color: rgb(255, 94, 0);\\r\\n    color:white;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n    background-color: rgba(255, 94, 0, .9);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createList\": () => (/* binding */ createList),\n/* harmony export */   \"hideList\": () => (/* binding */ hideList),\n/* harmony export */   \"rotateArrow\": () => (/* binding */ rotateArrow),\n/* harmony export */   \"setActive\": () => (/* binding */ setActive),\n/* harmony export */   \"setTitle\": () => (/* binding */ setTitle)\n/* harmony export */ });\nlet rotation = 180;\r\n\r\nfunction setTitle(name) {\r\n    const title = document.querySelector('.title');\r\n    title.innerHTML = name;\r\n}\r\n\r\nfunction createList(name, date) {\r\n    const tabs = document.querySelector('.tabs');\r\n\r\n    const div = document.createElement('div');\r\n    div.className = 'tab';\r\n    div.innerHTML = name;\r\n\r\n    const divDate = document.createElement('div');\r\n    divDate.className = 'date';\r\n    divDate.innerHTML = date;\r\n\r\n    tabs.appendChild(div);\r\n    div.insertBefore(createIndicator(), div.firstChild);\r\n    divDate.appendChild(createDeleteBtn());\r\n    div.appendChild(divDate);\r\n}\r\n\r\nfunction createIndicator() {\r\n    const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n    const circle = document.createElementNS(\"http://www.w3.org/2000/svg\", \"circle\");\r\n\r\n    svg.setAttribute('height', '18');\r\n    svg.setAttribute('width', '18');\r\n\r\n    circle.setAttribute('cx', '9');\r\n    circle.setAttribute('cy', '9');  \r\n    circle.setAttribute('r', '5');\r\n    circle.setAttribute('stroke', 'black');\r\n\r\n    svg.appendChild(circle);\r\n\r\n    return svg;\r\n};\r\n\r\nfunction createDeleteBtn() {\r\n    const img = document.createElement('img');\r\n    img.src = './icons/9fc7b42bf4ed81bf00dd.png'\r\n    img.className = 'button-x';\r\n\r\n    return img;\r\n}\r\n\r\nfunction setActive(id) {\r\n    removeAnyActives();\r\n\r\n    const element = document.getElementById(id);\r\n    element.classList.add('active');\r\n}\r\n\r\nfunction removeAnyActives() {\r\n    const elements = document.querySelectorAll('.active');\r\n    elements.forEach(item => item.classList.remove('active'));\r\n}\r\n\r\nfunction rotateArrow() {\r\n    document.getElementById('arrow').style.transform = `rotate(${(rotation)+'deg'})`;\r\n    rotation += 180;\r\n}\r\n\r\nfunction hideList() {\r\n    if (document.querySelector('.projects-list').style.visibility === '' ||\r\n        document.querySelector('.projects-list').style.visibility === 'visible')\r\n            document.querySelector('.projects-list').style.visibility = 'hidden';\r\n    else\r\n        document.querySelector('.projects-list').style.visibility = 'visible';\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initInbox\": () => (/* binding */ initInbox)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\r\n\r\nfunction initInbox() {\r\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.setActive)('inbox');\r\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.setTitle)('Inbox');\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_icon_suitcase_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icon-suitcase.png */ \"./src/assets/icon-suitcase.png\");\n/* harmony import */ var _assets_icon_travel_book_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icon-travel-book.png */ \"./src/assets/icon-travel-book.png\");\n/* harmony import */ var _assets_icon_traveler_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icon-traveler.png */ \"./src/assets/icon-traveler.png\");\n/* harmony import */ var _assets_layers_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/layers.png */ \"./src/assets/layers.png\");\n/* harmony import */ var _assets_icon_expand_arrow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icon-expand-arrow.png */ \"./src/assets/icon-expand-arrow.png\");\n/* harmony import */ var _assets_x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/x.png */ \"./src/assets/x.png\");\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _upcoming__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upcoming */ \"./src/upcoming.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst pages = document.querySelectorAll('.page');\r\n\r\n(0,_inbox__WEBPACK_IMPORTED_MODULE_7__.initInbox)();\r\n\r\npages.forEach(page => page.addEventListener('click', () => {\r\n    switch(page.id) {\r\n        case 'inbox':\r\n            (0,_inbox__WEBPACK_IMPORTED_MODULE_7__.initInbox)();\r\n            break;\r\n        case 'today':\r\n            (0,_today__WEBPACK_IMPORTED_MODULE_8__.initToday)();\r\n            break;\r\n        case 'upcoming':\r\n            (0,_upcoming__WEBPACK_IMPORTED_MODULE_9__.initUpcoming)();\r\n            break;\r\n        case 'projects':\r\n            (0,_projects__WEBPACK_IMPORTED_MODULE_10__.expandProjects)();\r\n            break;\r\n    };\r\n}));\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"expandProjects\": () => (/* binding */ expandProjects)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\r\n\r\n\r\nfunction expandProjects() {\r\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.rotateArrow)();\r\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.hideList)();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initToday\": () => (/* binding */ initToday)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\r\n\r\nfunction initToday() {\r\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.setActive)('today');\r\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.setTitle)('Today');\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/today.js?");

/***/ }),

/***/ "./src/upcoming.js":
/*!*************************!*\
  !*** ./src/upcoming.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initUpcoming\": () => (/* binding */ initUpcoming)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\r\n\r\nfunction initUpcoming() {\r\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.setActive)('upcoming');\r\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.setTitle)('Upcoming');\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/upcoming.js?");

/***/ }),

/***/ "./src/assets/icon-expand-arrow.png":
/*!******************************************!*\
  !*** ./src/assets/icon-expand-arrow.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icons/b366904896f3eaead5d9.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icon-expand-arrow.png?");

/***/ }),

/***/ "./src/assets/icon-suitcase.png":
/*!**************************************!*\
  !*** ./src/assets/icon-suitcase.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icons/cb8eb20440af740c236d.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icon-suitcase.png?");

/***/ }),

/***/ "./src/assets/icon-travel-book.png":
/*!*****************************************!*\
  !*** ./src/assets/icon-travel-book.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icons/a98b8d9c8add211a74ce.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icon-travel-book.png?");

/***/ }),

/***/ "./src/assets/icon-traveler.png":
/*!**************************************!*\
  !*** ./src/assets/icon-traveler.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icons/aac5441b3489e5051263.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icon-traveler.png?");

/***/ }),

/***/ "./src/assets/layers.png":
/*!*******************************!*\
  !*** ./src/assets/layers.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icons/3ea47a60dbac3815aaad.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/layers.png?");

/***/ }),

/***/ "./src/assets/x.png":
/*!**************************!*\
  !*** ./src/assets/x.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icons/9fc7b42bf4ed81bf00dd.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/x.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;