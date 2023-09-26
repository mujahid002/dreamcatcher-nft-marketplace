"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/blob-to-it";
exports.ids = ["vendor-chunks/blob-to-it"];
exports.modules = {

/***/ "(ssr)/./node_modules/blob-to-it/dist/src/index.js":
/*!***************************************************!*\
  !*** ./node_modules/blob-to-it/dist/src/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ blobToIt)\n/* harmony export */ });\n/* harmony import */ var browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-readablestream-to-it */ \"(ssr)/./node_modules/browser-readablestream-to-it/dist/src/index.js\");\n/* eslint-env browser */\n\nfunction blobToIt(blob) {\n    if (typeof blob.stream === 'function') {\n        return (0,browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(blob.stream());\n    }\n    // firefox < 69 does not support blob.stream()\n    // @ts-expect-error - response.body is optional, but in practice it's a stream.\n    return (0,browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Response(blob).body);\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYmxvYi10by1pdC9kaXN0L3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ3FFO0FBQ3REO0FBQ2Y7QUFDQSxlQUFlLHdFQUF5QjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxXQUFXLHdFQUF5QjtBQUNwQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJlYW1jYXRjaGVyLW5mdC1tYXJrZXRwbGFjZS8uL25vZGVfbW9kdWxlcy9ibG9iLXRvLWl0L2Rpc3Qvc3JjL2luZGV4LmpzPzdhOTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5pbXBvcnQgYnJvd3NlclJlYWRhYmxlU3RyZWFtVG9JdCBmcm9tICdicm93c2VyLXJlYWRhYmxlc3RyZWFtLXRvLWl0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJsb2JUb0l0KGJsb2IpIHtcbiAgICBpZiAodHlwZW9mIGJsb2Iuc3RyZWFtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBicm93c2VyUmVhZGFibGVTdHJlYW1Ub0l0KGJsb2Iuc3RyZWFtKCkpO1xuICAgIH1cbiAgICAvLyBmaXJlZm94IDwgNjkgZG9lcyBub3Qgc3VwcG9ydCBibG9iLnN0cmVhbSgpXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJlc3BvbnNlLmJvZHkgaXMgb3B0aW9uYWwsIGJ1dCBpbiBwcmFjdGljZSBpdCdzIGEgc3RyZWFtLlxuICAgIHJldHVybiBicm93c2VyUmVhZGFibGVTdHJlYW1Ub0l0KG5ldyBSZXNwb25zZShibG9iKS5ib2R5KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/blob-to-it/dist/src/index.js\n");

/***/ })

};
;