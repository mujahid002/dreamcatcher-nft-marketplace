/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/it-to-stream";
exports.ids = ["vendor-chunks/it-to-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/it-to-stream/node_modules/p-defer/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/it-to-stream/node_modules/p-defer/index.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nconst pDefer = () => {\n\tconst deferred = {};\n\n\tdeferred.promise = new Promise((resolve, reject) => {\n\t\tdeferred.resolve = resolve;\n\t\tdeferred.reject = reject;\n\t});\n\n\treturn deferred;\n};\n\nmodule.exports = pDefer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXQtdG8tc3RyZWFtL25vZGVfbW9kdWxlcy9wLWRlZmVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJlYW1jYXRjaGVyLW5mdC1tYXJrZXRwbGFjZS8uL25vZGVfbW9kdWxlcy9pdC10by1zdHJlYW0vbm9kZV9tb2R1bGVzL3AtZGVmZXIvaW5kZXguanM/MzAwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBEZWZlciA9ICgpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSB7fTtcblxuXHRkZWZlcnJlZC5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGRlZmVycmVkLnJlc29sdmUgPSByZXNvbHZlO1xuXHRcdGRlZmVycmVkLnJlamVjdCA9IHJlamVjdDtcblx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwRGVmZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/it-to-stream/node_modules/p-defer/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/it-to-stream/src/duplex.js":
/*!*************************************************!*\
  !*** ./node_modules/it-to-stream/src/duplex.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Readable, Writable, Duplex } = __webpack_require__(/*! stream */ \"stream\")\nconst getIterator = __webpack_require__(/*! get-iterator */ \"(ssr)/./node_modules/get-iterator/index.js\")\nconst Fifo = __webpack_require__(/*! p-fifo */ \"(ssr)/./node_modules/p-fifo/index.js\")\nconst { Buffer } = __webpack_require__(/*! buffer */ \"buffer\")\nconst END_CHUNK = Buffer.alloc(0)\n\nmodule.exports = function toDuplex (duplex, options) {\n  options = options || {}\n\n  let reading = false\n  const fifo = new Fifo()\n\n  duplex = {\n    sink: duplex.sink,\n    source: duplex.source ? getIterator(duplex.source) : null\n  }\n\n  let Stream = Duplex\n  if (!duplex.source) {\n    Stream = Writable\n  } else if (!duplex.sink) {\n    Stream = Readable\n  }\n\n  let readable\n  if (duplex.source) {\n    readable = {\n      async read (size) {\n        if (reading) return\n        reading = true\n\n        try {\n          while (true) {\n            const { value, done } = await duplex.source.next(size)\n            if (done) return this.push(null)\n            if (!this.push(value)) break\n          }\n        } catch (err) {\n          this.emit('error', err)\n        } finally {\n          reading = false\n        }\n      }\n    }\n  }\n\n  let writable\n  if (duplex.sink) {\n    writable = {\n      write (chunk, enc, cb) {\n        fifo.push(chunk).then(() => cb(), cb)\n      },\n      final (cb) {\n        fifo.push(END_CHUNK).then(() => cb(), cb)\n      }\n    }\n  }\n\n  Object.assign(options, readable, writable)\n\n  const stream = new Stream(options)\n\n  if (duplex.sink) {\n    duplex.sink({\n      [Symbol.asyncIterator] () {\n        return this\n      },\n      async next () {\n        const chunk = await fifo.shift()\n        return chunk === END_CHUNK ? { done: true } : { value: chunk }\n      },\n      async throw (err) {\n        stream.destroy(err)\n        return { done: true }\n      },\n      async return () {\n        stream.destroy()\n        return { done: true }\n      }\n    })\n  }\n\n  return stream\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXQtdG8tc3RyZWFtL3NyYy9kdXBsZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSw2QkFBNkIsRUFBRSxtQkFBTyxDQUFDLHNCQUFRO0FBQ3ZELG9CQUFvQixtQkFBTyxDQUFDLGdFQUFjO0FBQzFDLGFBQWEsbUJBQU8sQ0FBQyxvREFBUTtBQUM3QixRQUFRLFNBQVMsRUFBRSxtQkFBTyxDQUFDLHNCQUFRO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsdUNBQXVDLGFBQWEsSUFBSTtBQUN4RCxPQUFPO0FBQ1A7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixPQUFPO0FBQ1A7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJlYW1jYXRjaGVyLW5mdC1tYXJrZXRwbGFjZS8uL25vZGVfbW9kdWxlcy9pdC10by1zdHJlYW0vc3JjL2R1cGxleC5qcz8yZDRkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgUmVhZGFibGUsIFdyaXRhYmxlLCBEdXBsZXggfSA9IHJlcXVpcmUoJ3N0cmVhbScpXG5jb25zdCBnZXRJdGVyYXRvciA9IHJlcXVpcmUoJ2dldC1pdGVyYXRvcicpXG5jb25zdCBGaWZvID0gcmVxdWlyZSgncC1maWZvJylcbmNvbnN0IHsgQnVmZmVyIH0gPSByZXF1aXJlKCdidWZmZXInKVxuY29uc3QgRU5EX0NIVU5LID0gQnVmZmVyLmFsbG9jKDApXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9EdXBsZXggKGR1cGxleCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGxldCByZWFkaW5nID0gZmFsc2VcbiAgY29uc3QgZmlmbyA9IG5ldyBGaWZvKClcblxuICBkdXBsZXggPSB7XG4gICAgc2luazogZHVwbGV4LnNpbmssXG4gICAgc291cmNlOiBkdXBsZXguc291cmNlID8gZ2V0SXRlcmF0b3IoZHVwbGV4LnNvdXJjZSkgOiBudWxsXG4gIH1cblxuICBsZXQgU3RyZWFtID0gRHVwbGV4XG4gIGlmICghZHVwbGV4LnNvdXJjZSkge1xuICAgIFN0cmVhbSA9IFdyaXRhYmxlXG4gIH0gZWxzZSBpZiAoIWR1cGxleC5zaW5rKSB7XG4gICAgU3RyZWFtID0gUmVhZGFibGVcbiAgfVxuXG4gIGxldCByZWFkYWJsZVxuICBpZiAoZHVwbGV4LnNvdXJjZSkge1xuICAgIHJlYWRhYmxlID0ge1xuICAgICAgYXN5bmMgcmVhZCAoc2l6ZSkge1xuICAgICAgICBpZiAocmVhZGluZykgcmV0dXJuXG4gICAgICAgIHJlYWRpbmcgPSB0cnVlXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gYXdhaXQgZHVwbGV4LnNvdXJjZS5uZXh0KHNpemUpXG4gICAgICAgICAgICBpZiAoZG9uZSkgcmV0dXJuIHRoaXMucHVzaChudWxsKVxuICAgICAgICAgICAgaWYgKCF0aGlzLnB1c2godmFsdWUpKSBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycilcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICByZWFkaW5nID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCB3cml0YWJsZVxuICBpZiAoZHVwbGV4LnNpbmspIHtcbiAgICB3cml0YWJsZSA9IHtcbiAgICAgIHdyaXRlIChjaHVuaywgZW5jLCBjYikge1xuICAgICAgICBmaWZvLnB1c2goY2h1bmspLnRoZW4oKCkgPT4gY2IoKSwgY2IpXG4gICAgICB9LFxuICAgICAgZmluYWwgKGNiKSB7XG4gICAgICAgIGZpZm8ucHVzaChFTkRfQ0hVTkspLnRoZW4oKCkgPT4gY2IoKSwgY2IpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCByZWFkYWJsZSwgd3JpdGFibGUpXG5cbiAgY29uc3Qgc3RyZWFtID0gbmV3IFN0cmVhbShvcHRpb25zKVxuXG4gIGlmIChkdXBsZXguc2luaykge1xuICAgIGR1cGxleC5zaW5rKHtcbiAgICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gKCkge1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfSxcbiAgICAgIGFzeW5jIG5leHQgKCkge1xuICAgICAgICBjb25zdCBjaHVuayA9IGF3YWl0IGZpZm8uc2hpZnQoKVxuICAgICAgICByZXR1cm4gY2h1bmsgPT09IEVORF9DSFVOSyA/IHsgZG9uZTogdHJ1ZSB9IDogeyB2YWx1ZTogY2h1bmsgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIHRocm93IChlcnIpIHtcbiAgICAgICAgc3RyZWFtLmRlc3Ryb3koZXJyKVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyByZXR1cm4gKCkge1xuICAgICAgICBzdHJlYW0uZGVzdHJveSgpXG4gICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gc3RyZWFtXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/it-to-stream/src/duplex.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/it-to-stream/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/it-to-stream/src/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst toTransform = __webpack_require__(/*! ./transform */ \"(ssr)/./node_modules/it-to-stream/src/transform.js\")\nconst toDuplex = __webpack_require__(/*! ./duplex */ \"(ssr)/./node_modules/it-to-stream/src/duplex.js\")\n\nfunction toReadable (source, options) {\n  return toDuplex({ source }, options)\n}\n\nfunction toWritable (sink, options) {\n  return toDuplex({ sink }, options)\n}\n\nmodule.exports = toReadable\nmodule.exports.readable = toReadable\nmodule.exports.writable = toWritable\nmodule.exports.transform = toTransform\nmodule.exports.duplex = toDuplex\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXQtdG8tc3RyZWFtL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixvQkFBb0IsbUJBQU8sQ0FBQyx1RUFBYTtBQUN6QyxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBVTs7QUFFbkM7QUFDQSxvQkFBb0IsUUFBUTtBQUM1Qjs7QUFFQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJlYW1jYXRjaGVyLW5mdC1tYXJrZXRwbGFjZS8uL25vZGVfbW9kdWxlcy9pdC10by1zdHJlYW0vc3JjL2luZGV4LmpzPzc5ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHRvVHJhbnNmb3JtID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0nKVxuY29uc3QgdG9EdXBsZXggPSByZXF1aXJlKCcuL2R1cGxleCcpXG5cbmZ1bmN0aW9uIHRvUmVhZGFibGUgKHNvdXJjZSwgb3B0aW9ucykge1xuICByZXR1cm4gdG9EdXBsZXgoeyBzb3VyY2UgfSwgb3B0aW9ucylcbn1cblxuZnVuY3Rpb24gdG9Xcml0YWJsZSAoc2luaywgb3B0aW9ucykge1xuICByZXR1cm4gdG9EdXBsZXgoeyBzaW5rIH0sIG9wdGlvbnMpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9SZWFkYWJsZVxubW9kdWxlLmV4cG9ydHMucmVhZGFibGUgPSB0b1JlYWRhYmxlXG5tb2R1bGUuZXhwb3J0cy53cml0YWJsZSA9IHRvV3JpdGFibGVcbm1vZHVsZS5leHBvcnRzLnRyYW5zZm9ybSA9IHRvVHJhbnNmb3JtXG5tb2R1bGUuZXhwb3J0cy5kdXBsZXggPSB0b0R1cGxleFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/it-to-stream/src/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/it-to-stream/src/transform.js":
/*!****************************************************!*\
  !*** ./node_modules/it-to-stream/src/transform.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const toDuplex = __webpack_require__(/*! ./duplex */ \"(ssr)/./node_modules/it-to-stream/src/duplex.js\")\nconst defer = __webpack_require__(/*! p-defer */ \"(ssr)/./node_modules/it-to-stream/node_modules/p-defer/index.js\")\n\nmodule.exports = function toTransform (transform, options) {\n  const { promise, resolve } = defer()\n\n  const source = (async function * () {\n    const it = await promise\n    for await (const chunk of it) yield chunk\n  })()\n\n  return toDuplex({ sink: s => resolve(transform(s)), source }, options)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXQtdG8tc3RyZWFtL3NyYy90cmFuc2Zvcm0uanMiLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLG1CQUFPLENBQUMsaUVBQVU7QUFDbkMsY0FBYyxtQkFBTyxDQUFDLGdGQUFTOztBQUUvQjtBQUNBLFVBQVUsbUJBQW1COztBQUU3QjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILG9CQUFvQiwwQ0FBMEM7QUFDOUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmVhbWNhdGNoZXItbmZ0LW1hcmtldHBsYWNlLy4vbm9kZV9tb2R1bGVzL2l0LXRvLXN0cmVhbS9zcmMvdHJhbnNmb3JtLmpzPzc1ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9EdXBsZXggPSByZXF1aXJlKCcuL2R1cGxleCcpXG5jb25zdCBkZWZlciA9IHJlcXVpcmUoJ3AtZGVmZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvVHJhbnNmb3JtICh0cmFuc2Zvcm0sIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBwcm9taXNlLCByZXNvbHZlIH0gPSBkZWZlcigpXG5cbiAgY29uc3Qgc291cmNlID0gKGFzeW5jIGZ1bmN0aW9uICogKCkge1xuICAgIGNvbnN0IGl0ID0gYXdhaXQgcHJvbWlzZVxuICAgIGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgaXQpIHlpZWxkIGNodW5rXG4gIH0pKClcblxuICByZXR1cm4gdG9EdXBsZXgoeyBzaW5rOiBzID0+IHJlc29sdmUodHJhbnNmb3JtKHMpKSwgc291cmNlIH0sIG9wdGlvbnMpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/it-to-stream/src/transform.js\n");

/***/ })

};
;