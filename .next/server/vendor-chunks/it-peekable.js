"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/it-peekable";
exports.ids = ["vendor-chunks/it-peekable"];
exports.modules = {

/***/ "(ssr)/./node_modules/it-peekable/dist/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/it-peekable/dist/src/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ peekableIterator)\n/* harmony export */ });\nfunction peekableIterator(iterable) {\n    // @ts-expect-error\n    const [iterator, symbol] = iterable[Symbol.asyncIterator] != null\n        // @ts-expect-error\n        ? [iterable[Symbol.asyncIterator](), Symbol.asyncIterator]\n        // @ts-expect-error\n        : [iterable[Symbol.iterator](), Symbol.iterator];\n    const queue = [];\n    // @ts-expect-error\n    return {\n        peek: () => {\n            return iterator.next();\n        },\n        push: (value) => {\n            queue.push(value);\n        },\n        next: () => {\n            if (queue.length > 0) {\n                return {\n                    done: false,\n                    value: queue.shift()\n                };\n            }\n            return iterator.next();\n        },\n        [symbol]() {\n            return this;\n        }\n    };\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXQtcGVla2FibGUvZGlzdC9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJlYW1jYXRjaGVyLW5mdC1tYXJrZXRwbGFjZS8uL25vZGVfbW9kdWxlcy9pdC1wZWVrYWJsZS9kaXN0L3NyYy9pbmRleC5qcz9mYTk4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBlZWthYmxlSXRlcmF0b3IoaXRlcmFibGUpIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY29uc3QgW2l0ZXJhdG9yLCBzeW1ib2xdID0gaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdICE9IG51bGxcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICA/IFtpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSwgU3ltYm9sLmFzeW5jSXRlcmF0b3JdXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgOiBbaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSgpLCBTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGNvbnN0IHF1ZXVlID0gW107XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHJldHVybiB7XG4gICAgICAgIHBlZWs6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHB1c2g6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcXVldWUucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBxdWV1ZS5zaGlmdCgpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIFtzeW1ib2xdKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/it-peekable/dist/src/index.js\n");

/***/ })

};
;