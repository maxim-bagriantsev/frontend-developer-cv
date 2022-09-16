/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/constants/lexicons.ts":
/*!***********************************!*\
  !*** ./lib/constants/lexicons.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"translations\": () => (/* binding */ translations)\n/* harmony export */ });\nconst translations = {\n  en: {\n    translation: {\n      \"fullName\": \"Bagryancev Maxim, 35\",\n      \"directions\": \"Hardworking and passionate full-stack developer\",\n      \"stack\": '(Node.js, Next.js, ReactJS, TypeScript)'\n    }\n  },\n  ru: {\n    translation: {\n      \"fullName\": \"Багрянцев Максим, 35\"\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uc3RhbnRzL2xleGljb25zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7RUFDMUJDLEVBQUUsRUFBRTtJQUNGQyxXQUFXLEVBQUU7TUFDWCxZQUFZLHNCQUREO01BRVgsY0FBYyxpREFGSDtNQUdYLFNBQVM7SUFIRTtFQURYLENBRHNCO0VBWTFCQyxFQUFFLEVBQUU7SUFDRkQsV0FBVyxFQUFFO01BQ1gsWUFBWTtJQUREO0VBRFg7QUFac0IsQ0FBckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWdyeWFuY2V2LXZjLy4vbGliL2NvbnN0YW50cy9sZXhpY29ucy50cz85OTE0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0cmFuc2xhdGlvbnMgPSB7XG4gIGVuOiB7XG4gICAgdHJhbnNsYXRpb246IHtcbiAgICAgIFwiZnVsbE5hbWVcIjogXCJCYWdyeWFuY2V2IE1heGltLCAzNVwiLFxuICAgICAgXCJkaXJlY3Rpb25zXCI6IFwiSGFyZHdvcmtpbmcgYW5kIHBhc3Npb25hdGUgZnVsbC1zdGFjayBkZXZlbG9wZXJcIixcbiAgICAgIFwic3RhY2tcIjogJyhOb2RlLmpzLCBOZXh0LmpzLCBSZWFjdEpTLCBUeXBlU2NyaXB0KSdcbiAgICB9LFxuICB9LFxuXG5cblxuXG4gIHJ1OiB7XG4gICAgdHJhbnNsYXRpb246IHtcbiAgICAgIFwiZnVsbE5hbWVcIjogXCLQkdCw0LPRgNGP0L3RhtC10LIg0JzQsNC60YHQuNC8LCAzNVwiLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbInRyYW5zbGF0aW9ucyIsImVuIiwidHJhbnNsYXRpb24iLCJydSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/constants/lexicons.ts\n");

/***/ }),

/***/ "./lib/helpers/i18n.ts":
/*!*****************************!*\
  !*** ./lib/helpers/i18n.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lexicons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lexicons */ \"./lib/constants/lexicons.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__]);\ni18next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst resources = _lexicons__WEBPACK_IMPORTED_MODULE_2__.translations;\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({\n  resources,\n  lng: `en`,\n  interpolation: {\n    escapeValue: false\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaGVscGVycy9pMThuLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUcsU0FBUyxHQUFHRCxtREFBbEI7QUFFQUYsbURBQUEsQ0FBU0MsMkRBQVQsRUFBMkJJLElBQTNCLENBQWdDO0VBQzlCRixTQUQ4QjtFQUU5QkcsR0FBRyxFQUFHLElBRndCO0VBRzlCQyxhQUFhLEVBQUU7SUFDYkMsV0FBVyxFQUFFO0VBREE7QUFIZSxDQUFoQztBQVFBLGlFQUFlUiwrQ0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFncnlhbmNldi12Yy8uL2xpYi9oZWxwZXJzL2kxOG4udHM/YjVhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaTE4biBmcm9tICdpMThuZXh0JztcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHRyYW5zbGF0aW9ucyB9IGZyb20gJ0BsZXhpY29ucyc7XG5cbmNvbnN0IHJlc291cmNlcyA9IHRyYW5zbGF0aW9ucztcblxuaTE4bi51c2UoaW5pdFJlYWN0STE4bmV4dCkuaW5pdCh7XG4gIHJlc291cmNlcyxcbiAgbG5nOiBgZW5gLFxuICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgZXNjYXBlVmFsdWU6IGZhbHNlLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGkxOG47XG4iXSwibmFtZXMiOlsiaTE4biIsImluaXRSZWFjdEkxOG5leHQiLCJ0cmFuc2xhdGlvbnMiLCJyZXNvdXJjZXMiLCJ1c2UiLCJpbml0IiwibG5nIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/helpers/i18n.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _asserts_scss_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asserts/scss/global.scss */ \"./asserts/scss/global.scss\");\n/* harmony import */ var _asserts_scss_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_asserts_scss_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_helpers_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/helpers/i18n */ \"./lib/helpers/i18n.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_helpers_i18n__WEBPACK_IMPORTED_MODULE_3__]);\n_lib_helpers_i18n__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/comp001/Documents/BabgryancevM/MyProjects/my-cv/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// ** React Imports\n // ** Styles\n\n // ** Imports i18n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_i18next__WEBPACK_IMPORTED_MODULE_2__.I18nextProvider, {\n      i18n: _lib_helpers_i18n__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztBQUNBO0FBQ0E7OztBQUdBLFNBQVNHLEtBQVQsQ0FBZTtFQUFFQyxTQUFGO0VBQWFDO0FBQWIsQ0FBZixFQUE4QztFQUU1QyxvQkFDRSw4REFBQyx5REFBRDtJQUFBLHVCQUNFLDhEQUFDLDBEQUFEO01BQWlCLElBQUksRUFBRUgseURBQXZCO01BQUEsdUJBQ0EsOERBQUMsU0FBRCxvQkFBZUcsU0FBZjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQU9EOztBQUVELGlFQUFlRixLQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWdyeWFuY2V2LXZjLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKiBSZWFjdCBJbXBvcnRzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyAqKiBTdHlsZXNcbmltcG9ydCAnLi4vYXNzZXJ0cy9zY3NzL2dsb2JhbC5zY3NzJztcblxuLy8gKiogSW1wb3J0cyBpMThuXG5pbXBvcnQgeyBJMThuZXh0UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBpMThuIGZyb20gJy4uL2xpYi9oZWxwZXJzL2kxOG4nXG5cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBhbnkpIHtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgPEkxOG5leHRQcm92aWRlciBpMThuPXtpMThufT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvSTE4bmV4dFByb3ZpZGVyPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJMThuZXh0UHJvdmlkZXIiLCJpMThuIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./asserts/scss/global.scss":
/*!**********************************!*\
  !*** ./asserts/scss/global.scss ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();