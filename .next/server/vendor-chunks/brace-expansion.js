/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/brace-expansion";
exports.ids = ["vendor-chunks/brace-expansion"];
exports.modules = {

/***/ "(ssr)/./node_modules/brace-expansion/index.js":
/*!***********************************************!*\
  !*** ./node_modules/brace-expansion/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var concatMap = __webpack_require__(/*! concat-map */ \"(ssr)/./node_modules/concat-map/index.js\");\nvar balanced = __webpack_require__(/*! balanced-match */ \"(ssr)/./node_modules/balanced-match/index.js\");\n\nmodule.exports = expandTop;\n\nvar escSlash = '\\0SLASH'+Math.random()+'\\0';\nvar escOpen = '\\0OPEN'+Math.random()+'\\0';\nvar escClose = '\\0CLOSE'+Math.random()+'\\0';\nvar escComma = '\\0COMMA'+Math.random()+'\\0';\nvar escPeriod = '\\0PERIOD'+Math.random()+'\\0';\n\nfunction numeric(str) {\n  return parseInt(str, 10) == str\n    ? parseInt(str, 10)\n    : str.charCodeAt(0);\n}\n\nfunction escapeBraces(str) {\n  return str.split('\\\\\\\\').join(escSlash)\n            .split('\\\\{').join(escOpen)\n            .split('\\\\}').join(escClose)\n            .split('\\\\,').join(escComma)\n            .split('\\\\.').join(escPeriod);\n}\n\nfunction unescapeBraces(str) {\n  return str.split(escSlash).join('\\\\')\n            .split(escOpen).join('{')\n            .split(escClose).join('}')\n            .split(escComma).join(',')\n            .split(escPeriod).join('.');\n}\n\n\n// Basically just str.split(\",\"), but handling cases\n// where we have nested braced sections, which should be\n// treated as individual members, like {a,{b,c},d}\nfunction parseCommaParts(str) {\n  if (!str)\n    return [''];\n\n  var parts = [];\n  var m = balanced('{', '}', str);\n\n  if (!m)\n    return str.split(',');\n\n  var pre = m.pre;\n  var body = m.body;\n  var post = m.post;\n  var p = pre.split(',');\n\n  p[p.length-1] += '{' + body + '}';\n  var postParts = parseCommaParts(post);\n  if (post.length) {\n    p[p.length-1] += postParts.shift();\n    p.push.apply(p, postParts);\n  }\n\n  parts.push.apply(parts, p);\n\n  return parts;\n}\n\nfunction expandTop(str) {\n  if (!str)\n    return [];\n\n  // I don't know why Bash 4.3 does this, but it does.\n  // Anything starting with {} will have the first two bytes preserved\n  // but *only* at the top level, so {},a}b will not expand to anything,\n  // but a{},b}c will be expanded to [a}c,abc].\n  // One could argue that this is a bug in Bash, but since the goal of\n  // this module is to match Bash's rules, we escape a leading {}\n  if (str.substr(0, 2) === '{}') {\n    str = '\\\\{\\\\}' + str.substr(2);\n  }\n\n  return expand(escapeBraces(str), true).map(unescapeBraces);\n}\n\nfunction identity(e) {\n  return e;\n}\n\nfunction embrace(str) {\n  return '{' + str + '}';\n}\nfunction isPadded(el) {\n  return /^-?0\\d/.test(el);\n}\n\nfunction lte(i, y) {\n  return i <= y;\n}\nfunction gte(i, y) {\n  return i >= y;\n}\n\nfunction expand(str, isTop) {\n  var expansions = [];\n\n  var m = balanced('{', '}', str);\n  if (!m || /\\$$/.test(m.pre)) return [str];\n\n  var isNumericSequence = /^-?\\d+\\.\\.-?\\d+(?:\\.\\.-?\\d+)?$/.test(m.body);\n  var isAlphaSequence = /^[a-zA-Z]\\.\\.[a-zA-Z](?:\\.\\.-?\\d+)?$/.test(m.body);\n  var isSequence = isNumericSequence || isAlphaSequence;\n  var isOptions = m.body.indexOf(',') >= 0;\n  if (!isSequence && !isOptions) {\n    // {a},b}\n    if (m.post.match(/,.*\\}/)) {\n      str = m.pre + '{' + m.body + escClose + m.post;\n      return expand(str);\n    }\n    return [str];\n  }\n\n  var n;\n  if (isSequence) {\n    n = m.body.split(/\\.\\./);\n  } else {\n    n = parseCommaParts(m.body);\n    if (n.length === 1) {\n      // x{{a,b}}y ==> x{a}y x{b}y\n      n = expand(n[0], false).map(embrace);\n      if (n.length === 1) {\n        var post = m.post.length\n          ? expand(m.post, false)\n          : [''];\n        return post.map(function(p) {\n          return m.pre + n[0] + p;\n        });\n      }\n    }\n  }\n\n  // at this point, n is the parts, and we know it's not a comma set\n  // with a single entry.\n\n  // no need to expand pre, since it is guaranteed to be free of brace-sets\n  var pre = m.pre;\n  var post = m.post.length\n    ? expand(m.post, false)\n    : [''];\n\n  var N;\n\n  if (isSequence) {\n    var x = numeric(n[0]);\n    var y = numeric(n[1]);\n    var width = Math.max(n[0].length, n[1].length)\n    var incr = n.length == 3\n      ? Math.abs(numeric(n[2]))\n      : 1;\n    var test = lte;\n    var reverse = y < x;\n    if (reverse) {\n      incr *= -1;\n      test = gte;\n    }\n    var pad = n.some(isPadded);\n\n    N = [];\n\n    for (var i = x; test(i, y); i += incr) {\n      var c;\n      if (isAlphaSequence) {\n        c = String.fromCharCode(i);\n        if (c === '\\\\')\n          c = '';\n      } else {\n        c = String(i);\n        if (pad) {\n          var need = width - c.length;\n          if (need > 0) {\n            var z = new Array(need + 1).join('0');\n            if (i < 0)\n              c = '-' + z + c.slice(1);\n            else\n              c = z + c;\n          }\n        }\n      }\n      N.push(c);\n    }\n  } else {\n    N = concatMap(n, function(el) { return expand(el, false) });\n  }\n\n  for (var j = 0; j < N.length; j++) {\n    for (var k = 0; k < post.length; k++) {\n      var expansion = pre + N[j] + post[k];\n      if (!isTop || isSequence || expansion)\n        expansions.push(expansion);\n    }\n  }\n\n  return expansions;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnJhY2UtZXhwYW5zaW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixtQkFBTyxDQUFDLDREQUFZO0FBQ3BDLGVBQWUsbUJBQU8sQ0FBQyxvRUFBZ0I7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esd0NBQXdDLEdBQUcsSUFBSTtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsS0FBSzs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CLHVDQUF1QyxHQUFHO0FBQzFDLFlBQVksR0FBRyx5QkFBeUI7QUFDeEM7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixjQUFjLEdBQUc7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFlBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCLEtBQUs7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsRUFBRTtBQUNWLDJCQUEyQjtBQUMzQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxZQUFZLEtBQUssUUFBUSxFQUFFLElBQUksRUFBRTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG9DQUFvQywwQkFBMEI7QUFDOUQ7O0FBRUEsa0JBQWtCLGNBQWM7QUFDaEMsb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmVhbWNhdGNoZXItbmZ0LW1hcmtldHBsYWNlLy4vbm9kZV9tb2R1bGVzL2JyYWNlLWV4cGFuc2lvbi9pbmRleC5qcz82ZGYzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjb25jYXRNYXAgPSByZXF1aXJlKCdjb25jYXQtbWFwJyk7XG52YXIgYmFsYW5jZWQgPSByZXF1aXJlKCdiYWxhbmNlZC1tYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cGFuZFRvcDtcblxudmFyIGVzY1NsYXNoID0gJ1xcMFNMQVNIJytNYXRoLnJhbmRvbSgpKydcXDAnO1xudmFyIGVzY09wZW4gPSAnXFwwT1BFTicrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NDbG9zZSA9ICdcXDBDTE9TRScrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NDb21tYSA9ICdcXDBDT01NQScrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NQZXJpb2QgPSAnXFwwUEVSSU9EJytNYXRoLnJhbmRvbSgpKydcXDAnO1xuXG5mdW5jdGlvbiBudW1lcmljKHN0cikge1xuICByZXR1cm4gcGFyc2VJbnQoc3RyLCAxMCkgPT0gc3RyXG4gICAgPyBwYXJzZUludChzdHIsIDEwKVxuICAgIDogc3RyLmNoYXJDb2RlQXQoMCk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUJyYWNlcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgnXFxcXFxcXFwnKS5qb2luKGVzY1NsYXNoKVxuICAgICAgICAgICAgLnNwbGl0KCdcXFxceycpLmpvaW4oZXNjT3BlbilcbiAgICAgICAgICAgIC5zcGxpdCgnXFxcXH0nKS5qb2luKGVzY0Nsb3NlKVxuICAgICAgICAgICAgLnNwbGl0KCdcXFxcLCcpLmpvaW4oZXNjQ29tbWEpXG4gICAgICAgICAgICAuc3BsaXQoJ1xcXFwuJykuam9pbihlc2NQZXJpb2QpO1xufVxuXG5mdW5jdGlvbiB1bmVzY2FwZUJyYWNlcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdChlc2NTbGFzaCkuam9pbignXFxcXCcpXG4gICAgICAgICAgICAuc3BsaXQoZXNjT3Blbikuam9pbigneycpXG4gICAgICAgICAgICAuc3BsaXQoZXNjQ2xvc2UpLmpvaW4oJ30nKVxuICAgICAgICAgICAgLnNwbGl0KGVzY0NvbW1hKS5qb2luKCcsJylcbiAgICAgICAgICAgIC5zcGxpdChlc2NQZXJpb2QpLmpvaW4oJy4nKTtcbn1cblxuXG4vLyBCYXNpY2FsbHkganVzdCBzdHIuc3BsaXQoXCIsXCIpLCBidXQgaGFuZGxpbmcgY2FzZXNcbi8vIHdoZXJlIHdlIGhhdmUgbmVzdGVkIGJyYWNlZCBzZWN0aW9ucywgd2hpY2ggc2hvdWxkIGJlXG4vLyB0cmVhdGVkIGFzIGluZGl2aWR1YWwgbWVtYmVycywgbGlrZSB7YSx7YixjfSxkfVxuZnVuY3Rpb24gcGFyc2VDb21tYVBhcnRzKHN0cikge1xuICBpZiAoIXN0cilcbiAgICByZXR1cm4gWycnXTtcblxuICB2YXIgcGFydHMgPSBbXTtcbiAgdmFyIG0gPSBiYWxhbmNlZCgneycsICd9Jywgc3RyKTtcblxuICBpZiAoIW0pXG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnLCcpO1xuXG4gIHZhciBwcmUgPSBtLnByZTtcbiAgdmFyIGJvZHkgPSBtLmJvZHk7XG4gIHZhciBwb3N0ID0gbS5wb3N0O1xuICB2YXIgcCA9IHByZS5zcGxpdCgnLCcpO1xuXG4gIHBbcC5sZW5ndGgtMV0gKz0gJ3snICsgYm9keSArICd9JztcbiAgdmFyIHBvc3RQYXJ0cyA9IHBhcnNlQ29tbWFQYXJ0cyhwb3N0KTtcbiAgaWYgKHBvc3QubGVuZ3RoKSB7XG4gICAgcFtwLmxlbmd0aC0xXSArPSBwb3N0UGFydHMuc2hpZnQoKTtcbiAgICBwLnB1c2guYXBwbHkocCwgcG9zdFBhcnRzKTtcbiAgfVxuXG4gIHBhcnRzLnB1c2guYXBwbHkocGFydHMsIHApO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZnVuY3Rpb24gZXhwYW5kVG9wKHN0cikge1xuICBpZiAoIXN0cilcbiAgICByZXR1cm4gW107XG5cbiAgLy8gSSBkb24ndCBrbm93IHdoeSBCYXNoIDQuMyBkb2VzIHRoaXMsIGJ1dCBpdCBkb2VzLlxuICAvLyBBbnl0aGluZyBzdGFydGluZyB3aXRoIHt9IHdpbGwgaGF2ZSB0aGUgZmlyc3QgdHdvIGJ5dGVzIHByZXNlcnZlZFxuICAvLyBidXQgKm9ubHkqIGF0IHRoZSB0b3AgbGV2ZWwsIHNvIHt9LGF9YiB3aWxsIG5vdCBleHBhbmQgdG8gYW55dGhpbmcsXG4gIC8vIGJ1dCBhe30sYn1jIHdpbGwgYmUgZXhwYW5kZWQgdG8gW2F9YyxhYmNdLlxuICAvLyBPbmUgY291bGQgYXJndWUgdGhhdCB0aGlzIGlzIGEgYnVnIGluIEJhc2gsIGJ1dCBzaW5jZSB0aGUgZ29hbCBvZlxuICAvLyB0aGlzIG1vZHVsZSBpcyB0byBtYXRjaCBCYXNoJ3MgcnVsZXMsIHdlIGVzY2FwZSBhIGxlYWRpbmcge31cbiAgaWYgKHN0ci5zdWJzdHIoMCwgMikgPT09ICd7fScpIHtcbiAgICBzdHIgPSAnXFxcXHtcXFxcfScgKyBzdHIuc3Vic3RyKDIpO1xuICB9XG5cbiAgcmV0dXJuIGV4cGFuZChlc2NhcGVCcmFjZXMoc3RyKSwgdHJ1ZSkubWFwKHVuZXNjYXBlQnJhY2VzKTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkoZSkge1xuICByZXR1cm4gZTtcbn1cblxuZnVuY3Rpb24gZW1icmFjZShzdHIpIHtcbiAgcmV0dXJuICd7JyArIHN0ciArICd9Jztcbn1cbmZ1bmN0aW9uIGlzUGFkZGVkKGVsKSB7XG4gIHJldHVybiAvXi0/MFxcZC8udGVzdChlbCk7XG59XG5cbmZ1bmN0aW9uIGx0ZShpLCB5KSB7XG4gIHJldHVybiBpIDw9IHk7XG59XG5mdW5jdGlvbiBndGUoaSwgeSkge1xuICByZXR1cm4gaSA+PSB5O1xufVxuXG5mdW5jdGlvbiBleHBhbmQoc3RyLCBpc1RvcCkge1xuICB2YXIgZXhwYW5zaW9ucyA9IFtdO1xuXG4gIHZhciBtID0gYmFsYW5jZWQoJ3snLCAnfScsIHN0cik7XG4gIGlmICghbSB8fCAvXFwkJC8udGVzdChtLnByZSkpIHJldHVybiBbc3RyXTtcblxuICB2YXIgaXNOdW1lcmljU2VxdWVuY2UgPSAvXi0/XFxkK1xcLlxcLi0/XFxkKyg/OlxcLlxcLi0/XFxkKyk/JC8udGVzdChtLmJvZHkpO1xuICB2YXIgaXNBbHBoYVNlcXVlbmNlID0gL15bYS16QS1aXVxcLlxcLlthLXpBLVpdKD86XFwuXFwuLT9cXGQrKT8kLy50ZXN0KG0uYm9keSk7XG4gIHZhciBpc1NlcXVlbmNlID0gaXNOdW1lcmljU2VxdWVuY2UgfHwgaXNBbHBoYVNlcXVlbmNlO1xuICB2YXIgaXNPcHRpb25zID0gbS5ib2R5LmluZGV4T2YoJywnKSA+PSAwO1xuICBpZiAoIWlzU2VxdWVuY2UgJiYgIWlzT3B0aW9ucykge1xuICAgIC8vIHthfSxifVxuICAgIGlmIChtLnBvc3QubWF0Y2goLywuKlxcfS8pKSB7XG4gICAgICBzdHIgPSBtLnByZSArICd7JyArIG0uYm9keSArIGVzY0Nsb3NlICsgbS5wb3N0O1xuICAgICAgcmV0dXJuIGV4cGFuZChzdHIpO1xuICAgIH1cbiAgICByZXR1cm4gW3N0cl07XG4gIH1cblxuICB2YXIgbjtcbiAgaWYgKGlzU2VxdWVuY2UpIHtcbiAgICBuID0gbS5ib2R5LnNwbGl0KC9cXC5cXC4vKTtcbiAgfSBlbHNlIHtcbiAgICBuID0gcGFyc2VDb21tYVBhcnRzKG0uYm9keSk7XG4gICAgaWYgKG4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyB4e3thLGJ9fXkgPT0+IHh7YX15IHh7Yn15XG4gICAgICBuID0gZXhwYW5kKG5bMF0sIGZhbHNlKS5tYXAoZW1icmFjZSk7XG4gICAgICBpZiAobi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdmFyIHBvc3QgPSBtLnBvc3QubGVuZ3RoXG4gICAgICAgICAgPyBleHBhbmQobS5wb3N0LCBmYWxzZSlcbiAgICAgICAgICA6IFsnJ107XG4gICAgICAgIHJldHVybiBwb3N0Lm1hcChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgcmV0dXJuIG0ucHJlICsgblswXSArIHA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGF0IHRoaXMgcG9pbnQsIG4gaXMgdGhlIHBhcnRzLCBhbmQgd2Uga25vdyBpdCdzIG5vdCBhIGNvbW1hIHNldFxuICAvLyB3aXRoIGEgc2luZ2xlIGVudHJ5LlxuXG4gIC8vIG5vIG5lZWQgdG8gZXhwYW5kIHByZSwgc2luY2UgaXQgaXMgZ3VhcmFudGVlZCB0byBiZSBmcmVlIG9mIGJyYWNlLXNldHNcbiAgdmFyIHByZSA9IG0ucHJlO1xuICB2YXIgcG9zdCA9IG0ucG9zdC5sZW5ndGhcbiAgICA/IGV4cGFuZChtLnBvc3QsIGZhbHNlKVxuICAgIDogWycnXTtcblxuICB2YXIgTjtcblxuICBpZiAoaXNTZXF1ZW5jZSkge1xuICAgIHZhciB4ID0gbnVtZXJpYyhuWzBdKTtcbiAgICB2YXIgeSA9IG51bWVyaWMoblsxXSk7XG4gICAgdmFyIHdpZHRoID0gTWF0aC5tYXgoblswXS5sZW5ndGgsIG5bMV0ubGVuZ3RoKVxuICAgIHZhciBpbmNyID0gbi5sZW5ndGggPT0gM1xuICAgICAgPyBNYXRoLmFicyhudW1lcmljKG5bMl0pKVxuICAgICAgOiAxO1xuICAgIHZhciB0ZXN0ID0gbHRlO1xuICAgIHZhciByZXZlcnNlID0geSA8IHg7XG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIGluY3IgKj0gLTE7XG4gICAgICB0ZXN0ID0gZ3RlO1xuICAgIH1cbiAgICB2YXIgcGFkID0gbi5zb21lKGlzUGFkZGVkKTtcblxuICAgIE4gPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSB4OyB0ZXN0KGksIHkpOyBpICs9IGluY3IpIHtcbiAgICAgIHZhciBjO1xuICAgICAgaWYgKGlzQWxwaGFTZXF1ZW5jZSkge1xuICAgICAgICBjID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKTtcbiAgICAgICAgaWYgKGMgPT09ICdcXFxcJylcbiAgICAgICAgICBjID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjID0gU3RyaW5nKGkpO1xuICAgICAgICBpZiAocGFkKSB7XG4gICAgICAgICAgdmFyIG5lZWQgPSB3aWR0aCAtIGMubGVuZ3RoO1xuICAgICAgICAgIGlmIChuZWVkID4gMCkge1xuICAgICAgICAgICAgdmFyIHogPSBuZXcgQXJyYXkobmVlZCArIDEpLmpvaW4oJzAnKTtcbiAgICAgICAgICAgIGlmIChpIDwgMClcbiAgICAgICAgICAgICAgYyA9ICctJyArIHogKyBjLnNsaWNlKDEpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBjID0geiArIGM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBOLnB1c2goYyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIE4gPSBjb25jYXRNYXAobiwgZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGV4cGFuZChlbCwgZmFsc2UpIH0pO1xuICB9XG5cbiAgZm9yICh2YXIgaiA9IDA7IGogPCBOLmxlbmd0aDsgaisrKSB7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBwb3N0Lmxlbmd0aDsgaysrKSB7XG4gICAgICB2YXIgZXhwYW5zaW9uID0gcHJlICsgTltqXSArIHBvc3Rba107XG4gICAgICBpZiAoIWlzVG9wIHx8IGlzU2VxdWVuY2UgfHwgZXhwYW5zaW9uKVxuICAgICAgICBleHBhbnNpb25zLnB1c2goZXhwYW5zaW9uKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXhwYW5zaW9ucztcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/brace-expansion/index.js\n");

/***/ })

};
;