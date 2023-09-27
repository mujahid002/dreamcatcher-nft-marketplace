/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-iterator";
exports.ids = ["vendor-chunks/get-iterator"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-iterator/index.js":
/*!********************************************!*\
  !*** ./node_modules/get-iterator/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("// If the passed object is an (async) iterable, then get the iterator\n// If it's probably an iterator already (i.e. has next function) return it\n// else throw\nmodule.exports = function getIterator (obj) {\n  if (obj) {\n    if (typeof obj[Symbol.iterator] === 'function') {\n      return obj[Symbol.iterator]()\n    }\n    if (typeof obj[Symbol.asyncIterator] === 'function') {\n      return obj[Symbol.asyncIterator]()\n    }\n    if (typeof obj.next === 'function') {\n      return obj // probably an iterator\n    }\n  }\n  throw new Error('argument is not an iterator or iterable')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LWl0ZXJhdG9yL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmVhbWNhdGNoZXItbmZ0LW1hcmtldHBsYWNlLy4vbm9kZV9tb2R1bGVzL2dldC1pdGVyYXRvci9pbmRleC5qcz8xYWM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIElmIHRoZSBwYXNzZWQgb2JqZWN0IGlzIGFuIChhc3luYykgaXRlcmFibGUsIHRoZW4gZ2V0IHRoZSBpdGVyYXRvclxuLy8gSWYgaXQncyBwcm9iYWJseSBhbiBpdGVyYXRvciBhbHJlYWR5IChpLmUuIGhhcyBuZXh0IGZ1bmN0aW9uKSByZXR1cm4gaXRcbi8vIGVsc2UgdGhyb3dcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0SXRlcmF0b3IgKG9iaikge1xuICBpZiAob2JqKSB7XG4gICAgaWYgKHR5cGVvZiBvYmpbU3ltYm9sLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG9ialtTeW1ib2wuaXRlcmF0b3JdKClcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmpbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gb2JqW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpXG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqLm5leHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBvYmogLy8gcHJvYmFibHkgYW4gaXRlcmF0b3JcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdhcmd1bWVudCBpcyBub3QgYW4gaXRlcmF0b3Igb3IgaXRlcmFibGUnKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-iterator/index.js\n");

/***/ })

};
;