/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/stream-to-it";
exports.ids = ["vendor-chunks/stream-to-it"];
exports.modules = {

/***/ "(ssr)/./node_modules/stream-to-it/source.js":
/*!*********************************************!*\
  !*** ./node_modules/stream-to-it/source.js ***!
  \*********************************************/
/***/ ((module) => {

eval("module.exports = readable => {\n  // Node.js stream\n  if (readable[Symbol.asyncIterator]) return readable\n\n  // Browser ReadableStream\n  if (readable.getReader) {\n    return (async function * () {\n      const reader = readable.getReader()\n\n      try {\n        while (true) {\n          const { done, value } = await reader.read()\n          if (done) return\n          yield value\n        }\n      } finally {\n        reader.releaseLock()\n      }\n    })()\n  }\n\n  throw new Error('unknown stream')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RyZWFtLXRvLWl0L3NvdXJjZS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmVhbWNhdGNoZXItbmZ0LW1hcmtldHBsYWNlLy4vbm9kZV9tb2R1bGVzL3N0cmVhbS10by1pdC9zb3VyY2UuanM/ODI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlYWRhYmxlID0+IHtcbiAgLy8gTm9kZS5qcyBzdHJlYW1cbiAgaWYgKHJlYWRhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSkgcmV0dXJuIHJlYWRhYmxlXG5cbiAgLy8gQnJvd3NlciBSZWFkYWJsZVN0cmVhbVxuICBpZiAocmVhZGFibGUuZ2V0UmVhZGVyKSB7XG4gICAgcmV0dXJuIChhc3luYyBmdW5jdGlvbiAqICgpIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IHJlYWRhYmxlLmdldFJlYWRlcigpXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKVxuICAgICAgICAgIGlmIChkb25lKSByZXR1cm5cbiAgICAgICAgICB5aWVsZCB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICByZWFkZXIucmVsZWFzZUxvY2soKVxuICAgICAgfVxuICAgIH0pKClcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcigndW5rbm93biBzdHJlYW0nKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/stream-to-it/source.js\n");

/***/ })

};
;