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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    padding: 0;\\n    margin: 0;\\n    display: grid;\\n    grid-template-columns: 1fr 3fr;\\n    height: 100vh;\\n    background-color: white;\\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n    overflow: hidden;\\n}\\n\\n.nav-bar {\\n    background-color: rgba(155, 155, 155, .25);\\n    border-right: 1px solid rgba(0, 0, 0, .2);\\n    -webkit-touch-callout: none; /* iOS Safari */\\n    -webkit-user-select: none; /* Safari */\\n    -khtml-user-select: none; /* Konqueror HTML */\\n    -moz-user-select: none; /* Old versions of Firefox */\\n    -ms-user-select: none; /* Internet Explorer/Edge */\\n    user-select: none;\\n}\\n\\n.nav-bar .pages {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: left;\\n    gap: 30px;\\n    font-size: 1.2rem;\\n    letter-spacing: 1px;\\n    color: black;\\n}\\n\\n.nav-bar .pages .page:nth-child(1) {\\n    margin-top: 20px;\\n}\\n\\n.nav-bar .pages .page:nth-child(4) img {\\n    width: 40px;\\n    height: 40px;\\n    margin-left: 3px;\\n}\\n\\n.nav-bar .pages .page:nth-child(4) #arrow {\\n    margin-left: 160px;\\n    width: 28px;\\n    height: 28px;\\n    rotate: 180deg;\\n}\\n\\n.nav-bar .pages .page {\\n    margin-left: 20px;\\n    padding: 15px;\\n    /* padding-left: 80px; */\\n    width: 370px;\\n    display: flex;\\n    align-items: center;\\n    gap: 25px;\\n}\\n\\n.pages .page img {\\n    height: 43px;\\n    width: 43px;\\n}\\n\\n.nav-bar .pages .page:hover {\\n    background-color: rgba(0, 0, 0, .05);\\n    border-radius: 6px;\\n    cursor: pointer;\\n}\\n\\n.nav-bar .active {\\n    background-color: rgba(0, 0, 0, .09);\\n    border-radius: 6px;\\n}\\n\\n.nav-bar .projects-list {\\n    /* background-color: rgb(209, 209, 209); */\\n    height: 340px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 12px;\\n    overflow: scroll;\\n    -ms-overflow-style: none;  /* Internet Explorer 10+ */\\n    scrollbar-width: none;\\n    font-size: .93rem;\\n}\\n\\n.nav-bar .projects-list::-webkit-scrollbar { /* Hide scrollbar for Chrome, Safari and Opera */\\n    display: none;\\n}\\n\\n.nav-bar .projects-list .list:nth-child(1) {\\n    margin-top: 20px;\\n}\\n\\n.nav-bar .projects-list .list {\\n    margin-left: 75px;\\n    padding: 15px;\\n    padding-top: 5px;\\n    padding-bottom: 5px;\\n    width: 300px;\\n    border-radius: 3px;\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.nav-bar .projects-list .list:hover {\\n    background-color: rgba(0, 0, 0, .05);\\n}\\n\\n.projects-list .list img {\\n    height: 8px;\\n    width: 8px;\\n    margin-left: 70%;\\n}\\n\\n.content {\\n    padding: 40px;\\n    position: relative;\\n}\\n\\n.content .title {\\n    font-size: 1.6rem;\\n}\\n\\n.content .tabs {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 15px;\\n    padding: 15px;\\n    color: white;\\n    height: 90vh;\\n    overflow: scroll;\\n    margin-top: 15px;\\n    scrollbar-width: none;\\n}\\n\\n.content .tabs::-webkit-scrollbar { /* Hide scrollbar for Chrome, Safari and Opera */\\n    display: none;\\n}\\n\\n.content .tab {\\n    display: flex;\\n    gap: 20px;\\n    background-color: coral;\\n    border-radius: 6px;\\n    padding-top: 7px;\\n    padding-bottom: 7px;\\n    padding-left: 10px;\\n    cursor: pointer;\\n}\\n\\n.date {\\n    margin-left: auto;\\n    margin-right: 15px;\\n}\\n\\ninput[type='date'] {\\n    background: transparent;\\n    color: white;\\n    border: none;\\n    outline: none;\\n    font-size: .93rem;\\n}\\n\\nsvg {\\n    fill: #ffffff;\\n    align-self: center;\\n}\\n\\n.button-x {\\n    width: 12px;\\n    height: 12px;   \\n    margin-left: 25px;\\n}\\n\\nbutton {\\n    height: 60px;\\n    width: 60px;\\n    position: absolute;\\n    bottom: 130px;\\n    right: 90px;\\n    border-radius: 100%;\\n    font-size: 1.5rem;\\n    border-style: none;\\n    background-color: rgb(255, 94, 0);\\n    color:white;\\n    cursor: pointer;\\n}\\n\\nbutton:hover {\\n    background-color: rgba(255, 94, 0, .9);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addLeadingZeros)\n/* harmony export */ });\nfunction addLeadingZeros(number, targetLength) {\n  var sign = number < 0 ? '-' : '';\n  var output = Math.abs(number).toString();\n\n  while (output.length < targetLength) {\n    output = '0' + output;\n  }\n\n  return sign + output;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ \"./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js\");\n\n/*\n * |     | Unit                           |     | Unit                           |\n * |-----|--------------------------------|-----|--------------------------------|\n * |  a  | AM, PM                         |  A* |                                |\n * |  d  | Day of month                   |  D  |                                |\n * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |\n * |  m  | Minute                         |  M  | Month                          |\n * |  s  | Second                         |  S  | Fraction of second             |\n * |  y  | Year (abs)                     |  Y  |                                |\n *\n * Letters marked by * are not implemented but reserved by Unicode standard.\n */\n\nvar formatters = {\n  // Year\n  y: function (date, token) {\n    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens\n    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |\n    // |----------|-------|----|-------|-------|-------|\n    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |\n    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |\n    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |\n    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |\n    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |\n    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)\n\n    var year = signedYear > 0 ? signedYear : 1 - signedYear;\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(token === 'yy' ? year % 100 : year, token.length);\n  },\n  // Month\n  M: function (date, token) {\n    var month = date.getUTCMonth();\n    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(month + 1, 2);\n  },\n  // Day of the month\n  d: function (date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCDate(), token.length);\n  },\n  // AM or PM\n  a: function (date, token) {\n    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';\n\n    switch (token) {\n      case 'a':\n      case 'aa':\n        return dayPeriodEnumValue.toUpperCase();\n\n      case 'aaa':\n        return dayPeriodEnumValue;\n\n      case 'aaaaa':\n        return dayPeriodEnumValue[0];\n\n      case 'aaaa':\n      default:\n        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';\n    }\n  },\n  // Hour [1-12]\n  h: function (date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCHours() % 12 || 12, token.length);\n  },\n  // Hour [0-23]\n  H: function (date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCHours(), token.length);\n  },\n  // Minute\n  m: function (date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCMinutes(), token.length);\n  },\n  // Second\n  s: function (date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCSeconds(), token.length);\n  },\n  // Fraction of second\n  S: function (date, token) {\n    var numberOfDigits = token.length;\n    var milliseconds = date.getUTCMilliseconds();\n    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fractionalSeconds, token.length);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));\n  utcDate.setUTCFullYear(date.getFullYear());\n  return date.getTime() - utcDate.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name addMilliseconds\n * @category Millisecond Helpers\n * @summary Add the specified number of milliseconds to the given date.\n *\n * @description\n * Add the specified number of milliseconds to the given date.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} the new date with the milliseconds added\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Add 750 milliseconds to 10 July 2014 12:45:30.000:\n * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)\n * //=> Thu Jul 10 2014 12:45:30.750\n */\n\nfunction addMilliseconds(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate).getTime();\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyAmount);\n  return new Date(timestamp + amount);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/addMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compareAsc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\n\nfunction compareAsc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1; // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/compareAsc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/compareDesc/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/compareDesc/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compareDesc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name compareDesc\n * @category Common Helpers\n * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return -1 if the first date is after the second,\n * 1 if the first date is before the second or 0 if dates are equal.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:\n * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> 1\n *\n * @example\n * // Sort the array of dates in reverse chronological order:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareDesc)\n * //=> [\n * //   Sun Jul 02 1995 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Wed Feb 11 1987 00:00:00\n * // ]\n */\n\nfunction compareDesc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n\n  if (diff > 0) {\n    return -1;\n  } else if (diff < 0) {\n    return 1; // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/compareDesc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name isDate\n * @category Common Helpers\n * @summary Is the given value a date?\n *\n * @description\n * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {*} value - the value to check\n * @returns {boolean} true if the given value is a date\n * @throws {TypeError} 1 arguments required\n *\n * @example\n * // For a valid date:\n * const result = isDate(new Date())\n * //=> true\n *\n * @example\n * // For an invalid date:\n * const result = isDate(new Date(NaN))\n * //=> true\n *\n * @example\n * // For some value:\n * const result = isDate('2014-02-31')\n * //=> false\n *\n * @example\n * // For an object:\n * const result = isDate({})\n * //=> false\n */\n\nfunction isDate(value) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isDate/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day (and year and month)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n * \n * @example\n * // Are 4 September and 4 October in the same day?\n * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n * \n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\n\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name isSameWeek\n * @category Week Helpers\n * @summary Are the given dates in the same week (and month and year)?\n *\n * @description\n * Are the given dates in the same week (and month and year)?\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the dates are in the same week (and month and year)\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {\n *   weekStartsOn: 1\n * })\n * //=> false\n * \n * @example\n * // Are 1 January 2014 and 1 January 2015 in the same week?\n * var result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))\n * //=> false\n */\nfunction isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft, dirtyOptions);\n  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight, dirtyOptions);\n  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isThisWeek)\n/* harmony export */ });\n/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ \"./node_modules/date-fns/esm/isSameWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name isThisWeek\n * @category Week Helpers\n * @summary Is the given date in the same week as the current date?\n * @pure false\n *\n * @description\n * Is the given date in the same week as the current date?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the date to check\n * @param {Object} [options] - the object with options\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the date is in this week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // If today is 25 September 2014, is 21 September 2014 in this week?\n * var result = isThisWeek(new Date(2014, 8, 21))\n * //=> true\n *\n * @example\n * // If today is 25 September 2014 and week starts with Monday\n * // is 21 September 2014 in this week?\n * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })\n * //=> false\n */\nfunction isThisWeek(dirtyDate, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now(), options);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isThisWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * var result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\n\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isValid)\n/* harmony export */ });\n/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ \"./node_modules/date-fns/esm/isDate/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name isValid\n * @category Common Helpers\n * @summary Is the given date valid?\n *\n * @description\n * Returns false if argument is Invalid Date and true otherwise.\n * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}\n * Invalid Date is a Date, whose time value is NaN.\n *\n * Time value of Date: http://es5.github.io/#x15.9.1.1\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * - Now `isValid` doesn't throw an exception\n *   if the first argument is not an instance of Date.\n *   Instead, argument is converted beforehand using `toDate`.\n *\n *   Examples:\n *\n *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |\n *   |---------------------------|---------------|---------------|\n *   | `new Date()`              | `true`        | `true`        |\n *   | `new Date('2016-01-01')`  | `true`        | `true`        |\n *   | `new Date('')`            | `false`       | `false`       |\n *   | `new Date(1488370835081)` | `true`        | `true`        |\n *   | `new Date(NaN)`           | `false`       | `false`       |\n *   | `'2016-01-01'`            | `TypeError`   | `false`       |\n *   | `''`                      | `TypeError`   | `false`       |\n *   | `1488370835081`           | `TypeError`   | `true`        |\n *   | `NaN`                     | `TypeError`   | `false`       |\n *\n *   We introduce this change to make *date-fns* consistent with ECMAScript behavior\n *   that try to coerce arguments to the expected type\n *   (which is also the case with other *date-fns* functions).\n *\n * @param {*} date - the date to check\n * @returns {Boolean} the date is valid\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // For the valid date:\n * const result = isValid(new Date(2014, 1, 31))\n * //=> true\n *\n * @example\n * // For the value, convertable into a date:\n * const result = isValid(1393804800000)\n * //=> true\n *\n * @example\n * // For the invalid date:\n * const result = isValid(new Date(''))\n * //=> false\n */\n\nfunction isValid(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n\n  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate) && typeof dirtyDate !== 'number') {\n    return false;\n  }\n\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyDate);\n  return !isNaN(Number(date));\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isValid/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/lightFormat/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/lightFormat/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ lightFormat)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_format_lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/format/lightFormatters/index.js */ \"./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js\");\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ \"./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js\");\n/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../isValid/index.js */ \"./node_modules/date-fns/esm/isValid/index.js\");\n/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subMilliseconds/index.js */ \"./node_modules/date-fns/esm/subMilliseconds/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n\n\n // This RegExp consists of three parts separated by `|`:\n// - (\\w)\\1* matches any sequences of the same letter\n// - '' matches two quote characters in a row\n// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),\n//   except a single quote symbol, which ends the sequence.\n//   Two quote characters do not end the sequence.\n//   If there is no matching single quote\n//   then the sequence will continue until the end of the string.\n// - . matches any single character unmatched by previous parts of the RegExps\n\nvar formattingTokensRegExp = /(\\w)\\1*|''|'(''|[^'])+('|$)|./g;\nvar escapedStringRegExp = /^'([^]*?)'?$/;\nvar doubleQuoteRegExp = /''/g;\nvar unescapedLatinCharacterRegExp = /[a-zA-Z]/;\n/**\n * @name lightFormat\n * @category Common Helpers\n * @summary Format the date.\n *\n * @description\n * Return the formatted date string in the given format. Unlike `format`,\n * `lightFormat` doesn't use locales and outputs date using the most popular tokens.\n *\n * > ⚠️ Please note that the `lightFormat` tokens differ from Moment.js and other libraries.\n * > See: https://git.io/fxCyr\n *\n * The characters wrapped between two single quotes characters (') are escaped.\n * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.\n *\n * Format of the string is based on Unicode Technical Standard #35:\n * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table\n *\n * Accepted patterns:\n * | Unit                            | Pattern | Result examples                   |\n * |---------------------------------|---------|-----------------------------------|\n * | AM, PM                          | a..aaa  | AM, PM                            |\n * |                                 | aaaa    | a.m., p.m.                        |\n * |                                 | aaaaa   | a, p                              |\n * | Calendar year                   | y       | 44, 1, 1900, 2017                 |\n * |                                 | yy      | 44, 01, 00, 17                    |\n * |                                 | yyy     | 044, 001, 000, 017                |\n * |                                 | yyyy    | 0044, 0001, 1900, 2017            |\n * | Month (formatting)              | M       | 1, 2, ..., 12                     |\n * |                                 | MM      | 01, 02, ..., 12                   |\n * | Day of month                    | d       | 1, 2, ..., 31                     |\n * |                                 | dd      | 01, 02, ..., 31                   |\n * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |\n * |                                 | hh      | 01, 02, ..., 11, 12               |\n * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |\n * |                                 | HH      | 00, 01, 02, ..., 23               |\n * | Minute                          | m       | 0, 1, ..., 59                     |\n * |                                 | mm      | 00, 01, ..., 59                   |\n * | Second                          | s       | 0, 1, ..., 59                     |\n * |                                 | ss      | 00, 01, ..., 59                   |\n * | Fraction of second              | S       | 0, 1, ..., 9                      |\n * |                                 | SS      | 00, 01, ..., 99                   |\n * |                                 | SSS     | 000, 001, ..., 999                |\n * |                                 | SSSS    | ...                               |\n *\n * @param {Date|Number} date - the original date\n * @param {String} format - the string of tokens\n * @returns {String} the formatted date string\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} format string contains an unescaped latin alphabet character\n *\n * @example\n * const result = lightFormat(new Date(2014, 1, 11), 'yyyy-MM-dd')\n * //=> '2014-02-11'\n */\n\nfunction lightFormat(dirtyDate, formatStr) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n\n  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(originalDate)) {\n    throw new RangeError('Invalid time value');\n  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.\n  // This ensures that when UTC functions will be implemented, locales will be compatible with them.\n  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376\n\n\n  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(originalDate);\n  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(originalDate, timezoneOffset);\n  var tokens = formatStr.match(formattingTokensRegExp); // The only case when formattingTokensRegExp doesn't match the string is when it's empty\n\n  if (!tokens) return '';\n  var result = tokens.map(function (substring) {\n    // Replace two single quote characters with one single quote character\n    if (substring === \"''\") {\n      return \"'\";\n    }\n\n    var firstCharacter = substring[0];\n\n    if (firstCharacter === \"'\") {\n      return cleanEscapedString(substring);\n    }\n\n    var formatter = _lib_format_lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][firstCharacter];\n\n    if (formatter) {\n      return formatter(utcDate, substring);\n    }\n\n    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {\n      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');\n    }\n\n    return substring;\n  }).join('');\n  return result;\n}\n\nfunction cleanEscapedString(input) {\n  var matches = input.match(escapedStringRegExp);\n\n  if (!matches) {\n    return input;\n  }\n\n  return matches[1].replace(doubleQuoteRegExp, \"'\");\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/lightFormat/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\n\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the start of a week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\n\nfunction startOfWeek(dirtyDate, dirtyOptions) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var options = dirtyOptions || {};\n  var locale = options.locale;\n  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;\n  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(localeWeekStartsOn);\n  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyDate);\n  var day = date.getDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setDate(date.getDate() - diff);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ subMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ \"./node_modules/date-fns/esm/addMilliseconds/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name subMilliseconds\n * @category Millisecond Helpers\n * @summary Subtract the specified number of milliseconds from the given date.\n *\n * @description\n * Subtract the specified number of milliseconds from the given date.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} the new date with the milliseconds subtracted\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:\n * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)\n * //=> Thu Jul 10 2014 12:45:29.250\n */\n\nfunction subMilliseconds(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyAmount);\n  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyDate, -amount);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/subMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeIndicatorColor\": () => (/* binding */ changeIndicatorColor),\n/* harmony export */   \"cleanList\": () => (/* binding */ cleanList),\n/* harmony export */   \"createList\": () => (/* binding */ createList),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"rotateArrow\": () => (/* binding */ rotateArrow),\n/* harmony export */   \"setActive\": () => (/* binding */ setActive),\n/* harmony export */   \"setTitle\": () => (/* binding */ setTitle),\n/* harmony export */   \"toggleList\": () => (/* binding */ toggleList),\n/* harmony export */   \"wipeContent\": () => (/* binding */ wipeContent)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/lightFormat/index.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\nlet rotation = 180;\n\nconst WHITE = '#ffffff';\nconst GREEN = '#43f071';\nconst BLUE = '#007bff';\n\nfunction setTitle(name) {\n    const title = document.querySelector('.title');\n    title.innerHTML = name;\n}\n\nfunction createList(name, date, id) {\n    const tabs = document.querySelector('.tabs');\n\n    const div = document.createElement('div');\n    div.className = 'tab';\n\n    const text = document.createElement('div');\n    text.className = 'text';\n    text.textContent = name;\n    text.contentEditable = 'true';\n\n    const divDate = document.createElement('div');\n    divDate.className = 'date';\n\n    const inputDate = document.createElement('input');\n    inputDate.type = 'date';\n    inputDate.className = 'date-picker';\n    inputDate.setAttribute('value', (0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new Date(date), 'yyyy-MM-dd'));\n    inputDate.required = true;\n\n    tabs.appendChild(div);\n    div.insertBefore(createIndicator(id), div.firstChild);\n    div.appendChild(text);\n    divDate.appendChild(inputDate);\n    divDate.appendChild(createDeleteBtn(id));\n    div.appendChild(divDate);\n}\n\nfunction createIndicator(id) {\n    const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n    const circle = document.createElementNS(\"http://www.w3.org/2000/svg\", \"circle\");\n\n    svg.setAttribute('height', '18');\n    svg.setAttribute('width', '18');\n    svg.id = `svg-${id}`;\n\n    circle.setAttribute('cx', '9');\n    circle.setAttribute('cy', '9');  \n    circle.setAttribute('r', '5');\n    circle.setAttribute('stroke', 'black');\n\n    svg.appendChild(circle);\n\n    return svg;\n};\n\nfunction createDeleteBtn(id) {\n    const img = document.createElement('img');\n    img.src = './icons/9fc7b42bf4ed81bf00dd.png'\n    img.className = 'button-x';\n    img.id = id;\n\n    return img;\n}\n\nfunction setActive(id) {\n    removeAnyActives();\n\n    const element = document.getElementById(id);\n    element.classList.add('active');\n}\n\nfunction removeAnyActives() {\n    const elements = document.querySelectorAll('.active');\n    elements.forEach(item => item.classList.remove('active'));\n}\n\nfunction rotateArrow() {\n    document.getElementById('arrow').style.transform = `rotate(${(rotation)+'deg'})`;\n    rotation += 180;\n}\n\nfunction toggleList() {\n    if (document.querySelector('.projects-list').style.visibility === '' ||\n        document.querySelector('.projects-list').style.visibility === 'visible')\n            document.querySelector('.projects-list').style.visibility = 'hidden';\n    else\n        document.querySelector('.projects-list').style.visibility = 'visible';\n}\n\nfunction createProject(name, id) {\n    const lists = document.querySelector('.projects-list');\n    const list = document.createElement('div');\n    list.className = 'list';\n    list.innerHTML = name;\n\n    const img = document.createElement('img');\n    img.src = './icons/9fc7b42bf4ed81bf00dd.png';\n    img.className = 'list-delete-button';\n    img.id = id;\n\n    const lastChild = document.querySelector('.list.last');\n\n    list.appendChild(img);\n\n    lists.insertBefore(list, lastChild);\n}\n\nfunction cleanList() {\n    const lists = document.querySelector('.projects-list');\n\n    const lastList = document.createElement('div');\n    lastList.className = 'list last';\n    lastList.innerText = '+ New Project'\n\n    lists.innerHTML = '';\n\n    lists.appendChild(lastList);\n}\n\nfunction wipeContent() {\n    const tabs = document.querySelector('.tabs');\n    tabs.innerHTML = '';\n}\n\nfunction changeIndicatorColor(id) {\n    const svg = document.querySelector(`#${id}`);\n    const goodId = id.split('-');\n    const _id = goodId[1];\n\n    if ((0,_storage__WEBPACK_IMPORTED_MODULE_0__.showPriority)(_id) === 0) svg.style.fill = WHITE;\n    if ((0,_storage__WEBPACK_IMPORTED_MODULE_0__.showPriority)(_id) === 1) svg.style.fill = GREEN;\n    if ((0,_storage__WEBPACK_IMPORTED_MODULE_0__.showPriority)(_id) === 2) svg.style.fill = BLUE;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changePriority\": () => (/* binding */ changePriority),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"editTodoTitle\": () => (/* binding */ editTodoTitle),\n/* harmony export */   \"inboxContent\": () => (/* binding */ inboxContent),\n/* harmony export */   \"loadProjects\": () => (/* binding */ loadProjects),\n/* harmony export */   \"projectContent\": () => (/* binding */ projectContent),\n/* harmony export */   \"refresh\": () => (/* binding */ refresh),\n/* harmony export */   \"todayContent\": () => (/* binding */ todayContent),\n/* harmony export */   \"upcomingContent\": () => (/* binding */ upcomingContent)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isToday/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isThisWeek/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/compareDesc/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/compareAsc/index.js\");\n\n\n\n\nfunction inboxContent() {\n    let arr = sortArray(getArray());\n    create(arr);\n}\n\nfunction todayContent() {\n    let arr = sortArray(getArray());\n    arr = arr.filter(item => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new Date(item.date)));\n    create(arr);\n}\n\nfunction upcomingContent() {\n    let arr = sortArray(getArray());\n    arr = arr.filter(item => (0,date_fns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new Date(item.date)));\n    create(arr);\n}\n\nfunction projectContent(name) {\n    let arr = sortArray(getArray());\n    arr = arr.filter(item => item.project === name)\n    create(arr);\n}\n\nfunction loadProjects() {\n    const projects = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getProjects)();\n\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.cleanList)();\n\n    projects.forEach(project => (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createProject)(project.title, project.id));\n}\n\nfunction sortArray(array) {\n    let arr;\n\n    var isChromium = !!window.chrome;\n\n    if (isChromium)\n        arr = array.sort((a, b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Date(a.date), new Date(b.date)));\n    else\n        arr = array.sort((a, b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(new Date(a.date), new Date(b.date)));\n    \n    return arr.sort((a, b) => a.priority < b.priority ? 1 : -1);\n}\n\nfunction create(arr) {\n    arr.forEach(item => (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createList)(item.title, item.date, item.id));\n    setPriorities(arr);\n}\n\nfunction editTodoTitle(title, id) {\n    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.editTitle)(title, id);\n}\n\nfunction deleteTodo(id) {\n    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.removeItem)(id);\n}\n\nfunction deleteProject(id) {\n    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.removeProject)(id);\n}\n\nfunction refresh() {\n    const currentPlace = document.querySelector('.title');\n\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.wipeContent)();\n\n    switch(currentPlace.textContent) {\n        case 'inbox':\n            inboxContent();\n            break;\n        case 'today':\n            todayContent();\n            break;\n        case 'upcoming':\n            upcomingContent();\n            break;\n    }\n}\n\nfunction setPriorities(array) {\n    array.forEach(item => (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.changeIndicatorColor)(`svg-${item.id}`));\n}\n\nfunction getArray() {\n    return (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getItems)();\n}\n\nfunction changePriority(id) {\n    let goodId = id.split('-');\n    const _id = goodId[1];\n\n    let priority = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.showPriority)(_id);\n\n    if (priority < 2) {\n        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setPriority)(_id, ++priority)\n    }\n    else {\n        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setPriority)(_id, 0);\n    }\n    \n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.changeIndicatorColor)(id);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_icon_suitcase_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icon-suitcase.png */ \"./src/assets/icon-suitcase.png\");\n/* harmony import */ var _assets_icon_travel_book_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icon-travel-book.png */ \"./src/assets/icon-travel-book.png\");\n/* harmony import */ var _assets_icon_traveler_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icon-traveler.png */ \"./src/assets/icon-traveler.png\");\n/* harmony import */ var _assets_layers_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/layers.png */ \"./src/assets/layers.png\");\n/* harmony import */ var _assets_icon_expand_arrow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icon-expand-arrow.png */ \"./src/assets/icon-expand-arrow.png\");\n/* harmony import */ var _assets_x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/x.png */ \"./src/assets/x.png\");\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages */ \"./src/pages.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst pages = document.querySelectorAll('.page');\n\n(0,_pages__WEBPACK_IMPORTED_MODULE_7__.initInbox)();\n(0,_pages__WEBPACK_IMPORTED_MODULE_7__.initProjects)();\n\npages.forEach(page => page.addEventListener('click', () => {\n    switch(page.id) {\n        case 'inbox':\n            (0,_pages__WEBPACK_IMPORTED_MODULE_7__.initInbox)();\n            break;\n        case 'today':\n            (0,_pages__WEBPACK_IMPORTED_MODULE_7__.initToday)();\n            break;\n        case 'upcoming':\n            (0,_pages__WEBPACK_IMPORTED_MODULE_7__.initUpcoming)();\n            break;\n        case 'projects':\n            (0,_pages__WEBPACK_IMPORTED_MODULE_7__.expandProjects)();\n            break;\n    };\n}));\n\ndocument.addEventListener('click', (e) => {\n    if (e.target.className === 'text') {\n        e.target.addEventListener('keypress', (e) => {\n            if (e.key === 'Enter') {\n                let id = e.target.parentNode.firstChild.id.split('-');\n                (0,_Todo__WEBPACK_IMPORTED_MODULE_8__.editTodoTitle)(e.target.textContent, id[1]);\n                (0,_Todo__WEBPACK_IMPORTED_MODULE_8__.refresh)();\n            };\n        });\n    };\n\n    if (e.target.className === 'date-picker') {\n        e.target.addEventListener('change', () => {\n            (0,_storage__WEBPACK_IMPORTED_MODULE_9__.editDate)(e.target.value, e.target.parentNode.children[1].id);\n            (0,_Todo__WEBPACK_IMPORTED_MODULE_8__.refresh)();\n        });\n    }\n\n    if (e.target.className === 'button-x') {\n        (0,_Todo__WEBPACK_IMPORTED_MODULE_8__.deleteTodo)(e.target.id);\n        (0,_Todo__WEBPACK_IMPORTED_MODULE_8__.refresh)();\n    };\n    \n    if (e.target.tagName === 'svg') {\n        (0,_Todo__WEBPACK_IMPORTED_MODULE_8__.changePriority)(e.target.id);\n        (0,_Todo__WEBPACK_IMPORTED_MODULE_8__.refresh)();\n    };\n\n    if (e.target.parentNode.tagName === 'svg') {\n        (0,_Todo__WEBPACK_IMPORTED_MODULE_8__.changePriority)(e.target.parentNode.id);\n        (0,_Todo__WEBPACK_IMPORTED_MODULE_8__.refresh)();\n    };\n\n    if (e.target.className === 'list') (0,_pages__WEBPACK_IMPORTED_MODULE_7__.loadProject)(e.target.textContent);\n\n    if (e.target.className === 'list-delete-button') {\n        (0,_Todo__WEBPACK_IMPORTED_MODULE_8__.deleteProject)(e.target.id);\n        (0,_pages__WEBPACK_IMPORTED_MODULE_7__.initProjects)();\n    };\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"expandProjects\": () => (/* binding */ expandProjects),\n/* harmony export */   \"initInbox\": () => (/* binding */ initInbox),\n/* harmony export */   \"initProjects\": () => (/* binding */ initProjects),\n/* harmony export */   \"initToday\": () => (/* binding */ initToday),\n/* harmony export */   \"initUpcoming\": () => (/* binding */ initUpcoming),\n/* harmony export */   \"loadProject\": () => (/* binding */ loadProject)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n\n\n\nfunction initInbox() {\n    initialize('inbox');\n    (0,_Todo__WEBPACK_IMPORTED_MODULE_1__.inboxContent)();\n}\n\nfunction initToday() {\n    initialize('today');\n    (0,_Todo__WEBPACK_IMPORTED_MODULE_1__.todayContent)();\n}\n\nfunction initUpcoming() {\n    initialize('upcoming');\n    (0,_Todo__WEBPACK_IMPORTED_MODULE_1__.upcomingContent)();\n}\n\nfunction expandProjects() {\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.rotateArrow)();\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.toggleList)();\n}\n\nfunction initProjects() {\n    (0,_Todo__WEBPACK_IMPORTED_MODULE_1__.loadProjects)();\n}\n\nfunction loadProject(name) {\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.wipeContent)();\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.setTitle)(name);\n    (0,_Todo__WEBPACK_IMPORTED_MODULE_1__.projectContent)(name);\n}\n\nfunction initialize(name) {\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.wipeContent)();\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.setActive)(name);\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.setTitle)(name);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/pages.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addItem\": () => (/* binding */ addItem),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"editDate\": () => (/* binding */ editDate),\n/* harmony export */   \"editTitle\": () => (/* binding */ editTitle),\n/* harmony export */   \"getItems\": () => (/* binding */ getItems),\n/* harmony export */   \"getProjects\": () => (/* binding */ getProjects),\n/* harmony export */   \"removeItem\": () => (/* binding */ removeItem),\n/* harmony export */   \"removeProject\": () => (/* binding */ removeProject),\n/* harmony export */   \"setPriority\": () => (/* binding */ setPriority),\n/* harmony export */   \"showPriority\": () => (/* binding */ showPriority)\n/* harmony export */ });\nlet todos = [];\nlet projects = [];\n\nif (localStorage.length > 0) {\n    if (localStorage.getItem('projects'))\n        projects = JSON.parse(localStorage.getItem('projects'));\n\n    if (localStorage.getItem('todos'))\n        todos = JSON.parse(localStorage.getItem('todos'));\n}\n\nfunction addItem(title, date, project = false) {\n    const item = {\n        id : todos.length,\n        title, \n        date,\n        priority : 0,\n        project\n    };\n    todos.push(item);\n    saveArrayToStorage('todos');\n}\n\nfunction addProject(title) {\n    const project = {id : projects.length, title};\n    projects.push(project);\n    saveArrayToStorage('projects');\n}\n\nfunction editTitle(title, id) {\n    todos.forEach(item => {\n        if (item.id == id) item.title = title;\n    });\n    saveArrayToStorage('todos');\n}\n\nfunction editDate(date, id) {\n    todos.forEach(item => {\n        if (item.id == id) item.date = date;\n    });\n    saveArrayToStorage('todos');\n}\n\nfunction removeItem(id) {\n    todos.forEach((item, index) => {\n        if (item.id == id) todos.splice(index, 1);\n    }); \n    saveArrayToStorage('todos');\n}\n\nfunction removeProject(id) {\n    projects.forEach((project, index) => {\n        if (project.id == id) projects.splice(index, 1);\n    });\n    saveArrayToStorage('projects');\n}\n\nfunction setPriority(id, number) {\n    todos.forEach(item => {\n        if (item.id == id) item.priority = number;\n    });\n    saveArrayToStorage('todos');\n}\n\nfunction showPriority(id) {\n    let priority;\n    todos.forEach(item => {\n        if (item.id == id) priority = item.priority;\n    });\n    return priority;\n}\n\nfunction saveArrayToStorage(name) {\n    if (name === 'todos') localStorage.setItem('todos', JSON.stringify(todos));\n    if (name === 'projects') localStorage.setItem('projects', JSON.stringify(projects));\n}\n\nfunction getItems() {\n    return todos;\n}\n\nfunction getProjects() {\n    return projects;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

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