"use strict";
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
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
exports.modules = {

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ "(api)/./pages/api/logout/index.js":
/*!***********************************!*\
  !*** ./pages/api/logout/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ logout)\n/* harmony export */ });\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction logout(req, res) {\n    if (req.method === \"GET\") {\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)(\"token\", {\n            req,\n            res\n        });\n        res.json({\n            success: true\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9nb3V0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1RDtBQUV4QyxTQUFTRSxPQUFPQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUNuQyxJQUFHRCxJQUFJRSxNQUFNLEtBQUssT0FBTTtRQUNwQkwsMERBQVlBLENBQUMsU0FBUTtZQUFDRztZQUFJQztRQUFHO1FBQzdCQSxJQUFJRSxJQUFJLENBQUM7WUFDTEMsU0FBVSxJQUFJO1FBQ2xCO0lBQ0osQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdHBfd2ViLy4vcGFnZXMvYXBpL2xvZ291dC9pbmRleC5qcz83NTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlbGV0ZUNvb2tpZSwgaGFzQ29va2llIH0gZnJvbSBcImNvb2tpZXMtbmV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nb3V0KHJlcSxyZXMpe1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ0dFVCcpe1xyXG4gICAgICAgIGRlbGV0ZUNvb2tpZSgndG9rZW4nLHtyZXEscmVzfSlcclxuICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJkZWxldGVDb29raWUiLCJoYXNDb29raWUiLCJsb2dvdXQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJqc29uIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/logout/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/logout/index.js"));
module.exports = __webpack_exports__;

})();