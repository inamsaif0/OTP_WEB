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
exports.id = "pages/api/levels";
exports.ids = ["pages/api/levels"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireDefault;\n    }\n}));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3RwX3dlYi8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qcz9kNzI5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// import mongoose from \"mongoose\";\n// const connection={};\n// async function connect(){\n//   if(connection.isConnected){\n//     return;\n//   }\n//   const db = await mongoose.connect(process.env.MONGO_URI)\n//   connection.isConnected= db.connections[0].readyState;\n//   console.log(connection.isConnected);\n// }\n// export default connect;\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://otp:inamsaif@cluster0.jnbirzy.mongodb.net/\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n    console.log(connection.isConnected);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBbUM7QUFFbkMsdUJBQXVCO0FBRXZCLDRCQUE0QjtBQUM1QixnQ0FBZ0M7QUFDaEMsY0FBYztBQUNkLE1BQU07QUFDTiw2REFBNkQ7QUFFN0QsMERBQTBEO0FBQzFELHlDQUF5QztBQUN6QyxJQUFJO0FBRUosMEJBQTBCO0FBQ007QUFFaEMsTUFBTUMsYUFBYSxDQUFDO0FBRXBCLGVBQWVDLFlBQVk7SUFDdkIsSUFBSUQsV0FBV0UsV0FBVyxFQUFFO1FBQ3hCO0lBQ0osQ0FBQztJQUVELE1BQU1DLEtBQUssTUFBTUosdURBQWdCLENBQUNNLDBEQUFxQixFQUFFO1FBQ3JERyxpQkFBaUIsSUFBSTtRQUNyQkMsb0JBQW9CLElBQUk7SUFDNUI7SUFFQVQsV0FBV0UsV0FBVyxHQUFHQyxHQUFHTyxXQUFXLENBQUMsRUFBRSxDQUFDQyxVQUFVO0lBQ3JEQyxRQUFRQyxHQUFHLENBQUNiLFdBQVdFLFdBQVc7QUFDdEM7QUFFQSxpRUFBZUQsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL290cF93ZWIvLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuLy8gY29uc3QgY29ubmVjdGlvbj17fTtcblxuLy8gYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpe1xuLy8gICBpZihjb25uZWN0aW9uLmlzQ29ubmVjdGVkKXtcbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSlcblxuLy8gICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xuLy8gICBjb25zb2xlLmxvZyhjb25uZWN0aW9uLmlzQ29ubmVjdGVkKTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdDtcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCB7XG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG4gICAgY29uc29sZS5sb2coY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./model/levels.js":
/*!*************************!*\
  !*** ./model/levels.js ***!
  \*************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst levels = new _mongoose.default.Schema({\n    level: {\n        type: String\n    }\n});\nmodule.exports = _mongoose.default.models[\"levels\"] || _mongoose.default.model(\"levels\", levels);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9sZXZlbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7MkVBQXFCLDBCQUFVO0FBRS9CLE1BQU1BLFNBQVMsSUFBSUMsaUJBQVEsQ0FBQ0MsTUFBTSxDQUFDO0lBRS9CQyxPQUNBO1FBQ0lDLE1BQUtDO0lBQ1Q7QUFDSjtBQUNBQyxPQUFPQyxPQUFPLEdBQUdOLGlCQUFRLENBQUNPLE1BQU0sQ0FBQyxTQUFTLElBQUlQLGlCQUFRLENBQUNRLEtBQUssQ0FBQyxVQUFTVCIsInNvdXJjZXMiOlsid2VicGFjazovL290cF93ZWIvLi9tb2RlbC9sZXZlbHMuanM/MGZlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGxldmVscyA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgXG4gICAgbGV2ZWw6XG4gICAge1xuICAgICAgICB0eXBlOlN0cmluZywgXG4gICAgfVxufSlcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzWydsZXZlbHMnXSB8fCBtb25nb29zZS5tb2RlbCgnbGV2ZWxzJyxsZXZlbHMpOyJdLCJuYW1lcyI6WyJsZXZlbHMiLCJtb25nb29zZSIsIlNjaGVtYSIsImxldmVsIiwidHlwZSIsIlN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./model/levels.js\n");

/***/ }),

/***/ "(api)/./pages/api/levels/index.js":
/*!***********************************!*\
  !*** ./pages/api/levels/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _model_levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/levels */ \"(api)/./model/levels.js\");\n/* harmony import */ var _model_levels__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_levels__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import multer from 'multer';\n(0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// const upload  = multer({\n//     storage: multer.diskStorage({\n//         destination: function (req, file, cb){\n//             cb(null, path.join(process.cwd(), \"public\", \"upload\"));\n//         },\n//         filename: function (req, file, cb){\n//             cb(null, new Date().getTime() + \"=\" + file.originalname);\n//         },\n//     }),\n// });\nconst content = async (req, res)=>{\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                const list = await _model_levels__WEBPACK_IMPORTED_MODULE_1___default().find({});\n                res.status(200).json({\n                    success: true,\n                    data: list\n                });\n            } catch (error) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                const list = await _model_levels__WEBPACK_IMPORTED_MODULE_1___default().create(req.body);\n                res.status(201).json({\n                    success: true,\n                    data: list\n                });\n            } catch (error) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false\n            });\n            break;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGV2ZWxzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEM7QUFDQTtBQUMxQywrQkFBK0I7QUFFL0JBLHdEQUFPQTtBQUVQLDJCQUEyQjtBQUMzQixvQ0FBb0M7QUFDcEMsaURBQWlEO0FBQ2pELHNFQUFzRTtBQUN0RSxhQUFhO0FBQ2IsOENBQThDO0FBQzlDLHdFQUF3RTtBQUN4RSxhQUFhO0FBQ2IsVUFBVTtBQUNWLE1BQU07QUFDTixNQUFNRSxVQUFVLE9BQU9DLEtBQUtDLE1BQVE7SUFDaEMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFFbkIsT0FBT0U7UUFDSCxLQUFLO1lBQ0QsSUFBRztnQkFDQyxNQUFNQyxPQUFPLE1BQU1MLHlEQUFXLENBQUMsQ0FBQztnQkFDaENHLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUNDLFNBQVMsSUFBSTtvQkFBRUMsTUFBTUw7Z0JBQUk7WUFDbkQsRUFBRSxPQUFNTSxPQUFNO2dCQUNWUixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFDQyxTQUFTLEtBQUs7Z0JBQUE7WUFDeEM7WUFDQSxLQUFNO1FBRVYsS0FBSztZQUNELElBQUk7Z0JBQ0EsTUFBTUosT0FBTyxNQUFNTCwyREFBYSxDQUFDRSxJQUFJVyxJQUFJO2dCQUN6Q1YsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUyxJQUFJO29CQUFFQyxNQUFNTDtnQkFBSTtZQUNwRCxFQUNBLE9BQU9NLE9BQU07Z0JBRVRSLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUNDLFNBQVEsS0FBSztnQkFBQTtZQUN2QztZQUNBLEtBQU07UUFDVjtZQUNJTixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFDQyxTQUFRLEtBQUs7WUFBQTtZQUNuQyxLQUFNO0lBR2Q7QUFDSjtBQUVBLGlFQUFlUixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3RwX3dlYi8uL3BhZ2VzL2FwaS9sZXZlbHMvaW5kZXguanM/YTE1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdCBmcm9tICcuLi8uLi8uLi9saWIvbW9uZ29kYidcbmltcG9ydCBsZXZlbHMgZnJvbSAnLi4vLi4vLi4vbW9kZWwvbGV2ZWxzJ1xuLy8gaW1wb3J0IG11bHRlciBmcm9tICdtdWx0ZXInO1xuXG5jb25uZWN0KCk7XG5cbi8vIGNvbnN0IHVwbG9hZCAgPSBtdWx0ZXIoe1xuLy8gICAgIHN0b3JhZ2U6IG11bHRlci5kaXNrU3RvcmFnZSh7XG4vLyAgICAgICAgIGRlc3RpbmF0aW9uOiBmdW5jdGlvbiAocmVxLCBmaWxlLCBjYil7XG4vLyAgICAgICAgICAgICBjYihudWxsLCBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwdWJsaWNcIiwgXCJ1cGxvYWRcIikpO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBmaWxlbmFtZTogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2Ipe1xuLy8gICAgICAgICAgICAgY2IobnVsbCwgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBcIj1cIiArIGZpbGUub3JpZ2luYWxuYW1lKTtcbi8vICAgICAgICAgfSxcbi8vICAgICB9KSxcbi8vIH0pO1xuY29uc3QgY29udGVudCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG5cbiAgICBzd2l0Y2gobWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGxldmVscy5maW5kKHt9KTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2VzczogdHJ1ZSwgZGF0YTogbGlzdH0pXG4gICAgICAgICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczogZmFsc2V9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUE9TVCc6XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBsZXZlbHMuY3JlYXRlKHJlcS5ib2R5KTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGxpc3R9KVxuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcil7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6ZmFsc2V9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQ7Il0sIm5hbWVzIjpbImNvbm5lY3QiLCJsZXZlbHMiLCJjb250ZW50IiwicmVxIiwicmVzIiwibWV0aG9kIiwibGlzdCIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImNyZWF0ZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/levels/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/levels/index.js"));
module.exports = __webpack_exports__;

})();