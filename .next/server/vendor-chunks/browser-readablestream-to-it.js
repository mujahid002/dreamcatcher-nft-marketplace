"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/browser-readablestream-to-it";
exports.ids = ["vendor-chunks/browser-readablestream-to-it"];
exports.modules = {

/***/ "(ssr)/./node_modules/browser-readablestream-to-it/dist/src/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/browser-readablestream-to-it/dist/src/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ browserReadableStreamToIt)\n/* harmony export */ });\n/**\n * Turns a browser readable stream into an async iterable. Async iteration over\n * returned iterable will lock give stream, preventing any other consumer from\n * acquiring a reader. The lock will be released if iteration loop is broken. To\n * prevent stream cancelling optional `{ preventCancel: true }` could be passed\n * as a second argument.\n */\nasync function* browserReadableStreamToIt(stream, options = {}) {\n    const reader = stream.getReader();\n    try {\n        while (true) {\n            const result = await reader.read();\n            if (result.done) {\n                return;\n            }\n            yield result.value;\n        }\n    }\n    finally {\n        if (options.preventCancel !== true) {\n            await reader.cancel();\n        }\n        reader.releaseLock();\n    }\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZWFkYWJsZXN0cmVhbS10by1pdC9kaXN0L3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMscUJBQXFCO0FBQzlEO0FBQ0E7QUFDZSw4REFBOEQ7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJlYW1jYXRjaGVyLW5mdC1tYXJrZXRwbGFjZS8uL25vZGVfbW9kdWxlcy9icm93c2VyLXJlYWRhYmxlc3RyZWFtLXRvLWl0L2Rpc3Qvc3JjL2luZGV4LmpzPzMxMDciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUdXJucyBhIGJyb3dzZXIgcmVhZGFibGUgc3RyZWFtIGludG8gYW4gYXN5bmMgaXRlcmFibGUuIEFzeW5jIGl0ZXJhdGlvbiBvdmVyXG4gKiByZXR1cm5lZCBpdGVyYWJsZSB3aWxsIGxvY2sgZ2l2ZSBzdHJlYW0sIHByZXZlbnRpbmcgYW55IG90aGVyIGNvbnN1bWVyIGZyb21cbiAqIGFjcXVpcmluZyBhIHJlYWRlci4gVGhlIGxvY2sgd2lsbCBiZSByZWxlYXNlZCBpZiBpdGVyYXRpb24gbG9vcCBpcyBicm9rZW4uIFRvXG4gKiBwcmV2ZW50IHN0cmVhbSBjYW5jZWxsaW5nIG9wdGlvbmFsIGB7IHByZXZlbnRDYW5jZWw6IHRydWUgfWAgY291bGQgYmUgcGFzc2VkXG4gKiBhcyBhIHNlY29uZCBhcmd1bWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24qIGJyb3dzZXJSZWFkYWJsZVN0cmVhbVRvSXQoc3RyZWFtLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0uZ2V0UmVhZGVyKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5aWVsZCByZXN1bHQudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGlmIChvcHRpb25zLnByZXZlbnRDYW5jZWwgIT09IHRydWUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlYWRlci5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIucmVsZWFzZUxvY2soKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/browser-readablestream-to-it/dist/src/index.js\n");

/***/ })

};
;