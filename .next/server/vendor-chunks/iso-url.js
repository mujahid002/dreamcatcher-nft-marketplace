"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/iso-url";
exports.ids = ["vendor-chunks/iso-url"];
exports.modules = {

/***/ "(ssr)/./node_modules/iso-url/index.js":
/*!***************************************!*\
  !*** ./node_modules/iso-url/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst {\n  URLWithLegacySupport,\n  format,\n  URLSearchParams,\n  defaultBase\n} = __webpack_require__(/*! ./src/url */ \"(ssr)/./node_modules/iso-url/src/url.js\")\nconst relative = __webpack_require__(/*! ./src/relative */ \"(ssr)/./node_modules/iso-url/src/relative.js\")\n\nmodule.exports = {\n  URL: URLWithLegacySupport,\n  URLSearchParams,\n  format,\n  relative,\n  defaultBase\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXNvLXVybC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxFQUFFLG1CQUFPLENBQUMsMERBQVc7QUFDdkIsaUJBQWlCLG1CQUFPLENBQUMsb0VBQWdCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RyZWFtY2F0Y2hlci1uZnQtbWFya2V0cGxhY2UvLi9ub2RlX21vZHVsZXMvaXNvLXVybC9pbmRleC5qcz8xZTRiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7XG4gIFVSTFdpdGhMZWdhY3lTdXBwb3J0LFxuICBmb3JtYXQsXG4gIFVSTFNlYXJjaFBhcmFtcyxcbiAgZGVmYXVsdEJhc2Vcbn0gPSByZXF1aXJlKCcuL3NyYy91cmwnKVxuY29uc3QgcmVsYXRpdmUgPSByZXF1aXJlKCcuL3NyYy9yZWxhdGl2ZScpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBVUkw6IFVSTFdpdGhMZWdhY3lTdXBwb3J0LFxuICBVUkxTZWFyY2hQYXJhbXMsXG4gIGZvcm1hdCxcbiAgcmVsYXRpdmUsXG4gIGRlZmF1bHRCYXNlXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/iso-url/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/iso-url/src/relative.js":
/*!**********************************************!*\
  !*** ./node_modules/iso-url/src/relative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst { URLWithLegacySupport, format } = __webpack_require__(/*! ./url */ \"(ssr)/./node_modules/iso-url/src/url.js\")\n\n/**\n * @param {string | undefined} url\n * @param {any} [location]\n * @param {any} [protocolMap]\n * @param {any} [defaultProtocol]\n */\nmodule.exports = (url, location = {}, protocolMap = {}, defaultProtocol) => {\n  let protocol = location.protocol\n    ? location.protocol.replace(':', '')\n    : 'http'\n\n  // Check protocol map\n  protocol = (protocolMap[protocol] || defaultProtocol || protocol) + ':'\n  let urlParsed\n\n  try {\n    urlParsed = new URLWithLegacySupport(url)\n  } catch (err) {\n    urlParsed = {}\n  }\n\n  const base = Object.assign({}, location, {\n    protocol: protocol || urlParsed.protocol,\n    host: location.host || urlParsed.host\n  })\n\n  return new URLWithLegacySupport(url, format(base)).toString()\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXNvLXVybC9zcmMvcmVsYXRpdmUuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosUUFBUSwrQkFBK0IsRUFBRSxtQkFBTyxDQUFDLHNEQUFPOztBQUV4RDtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCO0FBQ0Esb0NBQW9DLGtCQUFrQjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RyZWFtY2F0Y2hlci1uZnQtbWFya2V0cGxhY2UvLi9ub2RlX21vZHVsZXMvaXNvLXVybC9zcmMvcmVsYXRpdmUuanM/NDYyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgeyBVUkxXaXRoTGVnYWN5U3VwcG9ydCwgZm9ybWF0IH0gPSByZXF1aXJlKCcuL3VybCcpXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWR9IHVybFxuICogQHBhcmFtIHthbnl9IFtsb2NhdGlvbl1cbiAqIEBwYXJhbSB7YW55fSBbcHJvdG9jb2xNYXBdXG4gKiBAcGFyYW0ge2FueX0gW2RlZmF1bHRQcm90b2NvbF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAodXJsLCBsb2NhdGlvbiA9IHt9LCBwcm90b2NvbE1hcCA9IHt9LCBkZWZhdWx0UHJvdG9jb2wpID0+IHtcbiAgbGV0IHByb3RvY29sID0gbG9jYXRpb24ucHJvdG9jb2xcbiAgICA/IGxvY2F0aW9uLnByb3RvY29sLnJlcGxhY2UoJzonLCAnJylcbiAgICA6ICdodHRwJ1xuXG4gIC8vIENoZWNrIHByb3RvY29sIG1hcFxuICBwcm90b2NvbCA9IChwcm90b2NvbE1hcFtwcm90b2NvbF0gfHwgZGVmYXVsdFByb3RvY29sIHx8IHByb3RvY29sKSArICc6J1xuICBsZXQgdXJsUGFyc2VkXG5cbiAgdHJ5IHtcbiAgICB1cmxQYXJzZWQgPSBuZXcgVVJMV2l0aExlZ2FjeVN1cHBvcnQodXJsKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB1cmxQYXJzZWQgPSB7fVxuICB9XG5cbiAgY29uc3QgYmFzZSA9IE9iamVjdC5hc3NpZ24oe30sIGxvY2F0aW9uLCB7XG4gICAgcHJvdG9jb2w6IHByb3RvY29sIHx8IHVybFBhcnNlZC5wcm90b2NvbCxcbiAgICBob3N0OiBsb2NhdGlvbi5ob3N0IHx8IHVybFBhcnNlZC5ob3N0XG4gIH0pXG5cbiAgcmV0dXJuIG5ldyBVUkxXaXRoTGVnYWN5U3VwcG9ydCh1cmwsIGZvcm1hdChiYXNlKSkudG9TdHJpbmcoKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/iso-url/src/relative.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/iso-url/src/url.js":
/*!*****************************************!*\
  !*** ./node_modules/iso-url/src/url.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst { URL, URLSearchParams, format } = __webpack_require__(/*! url */ \"url\")\n\n// https://github.com/nodejs/node/issues/12682\nconst defaultBase = 'http://localhost'\n\nclass URLWithLegacySupport extends URL {\n  constructor (url = '', base = defaultBase) {\n    super(url, base)\n    this.path = this.pathname + this.search\n    this.auth =\n            this.username && this.password\n              ? this.username + ':' + this.password\n              : null\n    this.query =\n            this.search && this.search.startsWith('?')\n              ? this.search.slice(1)\n              : null\n  }\n\n  format () {\n    return this.toString()\n  }\n}\n\nmodule.exports = {\n  URLWithLegacySupport,\n  URLSearchParams,\n  format,\n  defaultBase\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXNvLXVybC9zcmMvdXJsLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaLFFBQVEsK0JBQStCLEVBQUUsbUJBQU8sQ0FBQyxnQkFBSzs7QUFFdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmVhbWNhdGNoZXItbmZ0LW1hcmtldHBsYWNlLy4vbm9kZV9tb2R1bGVzL2lzby11cmwvc3JjL3VybC5qcz9lMzBkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IFVSTCwgVVJMU2VhcmNoUGFyYW1zLCBmb3JtYXQgfSA9IHJlcXVpcmUoJ3VybCcpXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvMTI2ODJcbmNvbnN0IGRlZmF1bHRCYXNlID0gJ2h0dHA6Ly9sb2NhbGhvc3QnXG5cbmNsYXNzIFVSTFdpdGhMZWdhY3lTdXBwb3J0IGV4dGVuZHMgVVJMIHtcbiAgY29uc3RydWN0b3IgKHVybCA9ICcnLCBiYXNlID0gZGVmYXVsdEJhc2UpIHtcbiAgICBzdXBlcih1cmwsIGJhc2UpXG4gICAgdGhpcy5wYXRoID0gdGhpcy5wYXRobmFtZSArIHRoaXMuc2VhcmNoXG4gICAgdGhpcy5hdXRoID1cbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgJiYgdGhpcy5wYXNzd29yZFxuICAgICAgICAgICAgICA/IHRoaXMudXNlcm5hbWUgKyAnOicgKyB0aGlzLnBhc3N3b3JkXG4gICAgICAgICAgICAgIDogbnVsbFxuICAgIHRoaXMucXVlcnkgPVxuICAgICAgICAgICAgdGhpcy5zZWFyY2ggJiYgdGhpcy5zZWFyY2guc3RhcnRzV2l0aCgnPycpXG4gICAgICAgICAgICAgID8gdGhpcy5zZWFyY2guc2xpY2UoMSlcbiAgICAgICAgICAgICAgOiBudWxsXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgVVJMV2l0aExlZ2FjeVN1cHBvcnQsXG4gIFVSTFNlYXJjaFBhcmFtcyxcbiAgZm9ybWF0LFxuICBkZWZhdWx0QmFzZVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/iso-url/src/url.js\n");

/***/ })

};
;