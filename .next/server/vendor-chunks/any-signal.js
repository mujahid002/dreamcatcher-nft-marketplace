/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/any-signal";
exports.ids = ["vendor-chunks/any-signal"];
exports.modules = {

/***/ "(ssr)/./node_modules/any-signal/index.js":
/*!******************************************!*\
  !*** ./node_modules/any-signal/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Takes an array of AbortSignals and returns a single signal.\n * If any signals are aborted, the returned signal will be aborted.\n * @param {Array<AbortSignal>} signals\n * @returns {AbortSignal}\n */\nfunction anySignal (signals) {\n  const controller = new globalThis.AbortController()\n\n  function onAbort () {\n    controller.abort()\n\n    for (const signal of signals) {\n      if (!signal || !signal.removeEventListener) continue\n      signal.removeEventListener('abort', onAbort)\n    }\n  }\n\n  for (const signal of signals) {\n    if (!signal || !signal.addEventListener) continue\n    if (signal.aborted) {\n      onAbort()\n      break\n    }\n    signal.addEventListener('abort', onAbort)\n  }\n\n  return controller.signal\n}\n\nmodule.exports = anySignal\nmodule.exports.anySignal = anySignal\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYW55LXNpZ25hbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmVhbWNhdGNoZXItbmZ0LW1hcmtldHBsYWNlLy4vbm9kZV9tb2R1bGVzL2FueS1zaWduYWwvaW5kZXguanM/MjRhMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRha2VzIGFuIGFycmF5IG9mIEFib3J0U2lnbmFscyBhbmQgcmV0dXJucyBhIHNpbmdsZSBzaWduYWwuXG4gKiBJZiBhbnkgc2lnbmFscyBhcmUgYWJvcnRlZCwgdGhlIHJldHVybmVkIHNpZ25hbCB3aWxsIGJlIGFib3J0ZWQuXG4gKiBAcGFyYW0ge0FycmF5PEFib3J0U2lnbmFsPn0gc2lnbmFsc1xuICogQHJldHVybnMge0Fib3J0U2lnbmFsfVxuICovXG5mdW5jdGlvbiBhbnlTaWduYWwgKHNpZ25hbHMpIHtcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBnbG9iYWxUaGlzLkFib3J0Q29udHJvbGxlcigpXG5cbiAgZnVuY3Rpb24gb25BYm9ydCAoKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpXG5cbiAgICBmb3IgKGNvbnN0IHNpZ25hbCBvZiBzaWduYWxzKSB7XG4gICAgICBpZiAoIXNpZ25hbCB8fCAhc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIGNvbnRpbnVlXG4gICAgICBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkFib3J0KVxuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3Qgc2lnbmFsIG9mIHNpZ25hbHMpIHtcbiAgICBpZiAoIXNpZ25hbCB8fCAhc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIpIGNvbnRpbnVlXG4gICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICBvbkFib3J0KClcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQWJvcnQpXG4gIH1cblxuICByZXR1cm4gY29udHJvbGxlci5zaWduYWxcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhbnlTaWduYWxcbm1vZHVsZS5leHBvcnRzLmFueVNpZ25hbCA9IGFueVNpZ25hbFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/any-signal/index.js\n");

/***/ })

};
;