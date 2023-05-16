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
exports.id = "pages/api/login/login";
exports.ids = ["pages/api/login/login"];
exports.modules = {

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireDefault;\n    }\n}));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3RwX3dlYi8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qcz9hZGExIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// import mongoose from \"mongoose\";\n// const connection={};\n// async function connect(){\n//   if(connection.isConnected){\n//     return;\n//   }\n//   const db = await mongoose.connect(process.env.MONGO_URI)\n//   connection.isConnected= db.connections[0].readyState;\n//   console.log(connection.isConnected);\n// }\n// export default connect;\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://otp:inamsaif@cluster0.jnbirzy.mongodb.net/\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n    console.log(connection.isConnected);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBbUM7QUFFbkMsdUJBQXVCO0FBRXZCLDRCQUE0QjtBQUM1QixnQ0FBZ0M7QUFDaEMsY0FBYztBQUNkLE1BQU07QUFDTiw2REFBNkQ7QUFFN0QsMERBQTBEO0FBQzFELHlDQUF5QztBQUN6QyxJQUFJO0FBRUosMEJBQTBCO0FBQ007QUFFaEMsTUFBTUMsYUFBYSxDQUFDO0FBRXBCLGVBQWVDLFlBQVk7SUFDdkIsSUFBSUQsV0FBV0UsV0FBVyxFQUFFO1FBQ3hCO0lBQ0osQ0FBQztJQUVELE1BQU1DLEtBQUssTUFBTUosdURBQWdCLENBQUNNLDBEQUFxQixFQUFFO1FBQ3JERyxpQkFBaUIsSUFBSTtRQUNyQkMsb0JBQW9CLElBQUk7SUFDNUI7SUFFQVQsV0FBV0UsV0FBVyxHQUFHQyxHQUFHTyxXQUFXLENBQUMsRUFBRSxDQUFDQyxVQUFVO0lBQ3JEQyxRQUFRQyxHQUFHLENBQUNiLFdBQVdFLFdBQVc7QUFDdEM7QUFFQSxpRUFBZUQsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL290cF93ZWIvLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuLy8gY29uc3QgY29ubmVjdGlvbj17fTtcblxuLy8gYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpe1xuLy8gICBpZihjb25uZWN0aW9uLmlzQ29ubmVjdGVkKXtcbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSlcblxuLy8gICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xuLy8gICBjb25zb2xlLmxvZyhjb25uZWN0aW9uLmlzQ29ubmVjdGVkKTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdDtcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCB7XG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG4gICAgY29uc29sZS5sb2coY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./model/schema.js":
/*!*************************!*\
  !*** ./model/schema.js ***!
  \*************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst userSchema = new _mongoose.default.Schema({\n    email: {\n        type: String,\n        required: [\n            true,\n            \"please add email\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"please add password\"\n        ]\n    },\n    remember: {\n        type: Boolean,\n        required: [\n            true,\n            \"please check it\"\n        ]\n    }\n});\nmodule.exports = _mongoose.default.models[\"User\"] || _mongoose.default.model(\"User\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9zY2hlbWEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7MkVBQXFCLDBCQUFVO0FBRS9CLE1BQU1BLGFBQWEsSUFBSUMsaUJBQVEsQ0FBQ0MsTUFBTSxDQUFDO0lBQ25DQyxPQUFNO1FBQ0ZDLE1BQUtDO1FBQ0xDLFVBQVM7WUFBQyxJQUFJO1lBQUU7U0FBbUI7UUFDbkNDLFFBQU8sSUFBSTtJQUNmO0lBQ0FDLFVBQVM7UUFDTEosTUFBS0M7UUFDTEMsVUFBUztZQUFDLElBQUk7WUFBRTtTQUFzQjtJQUMxQztJQUNBRyxVQUFTO1FBQ0xMLE1BQUtNO1FBQ0xKLFVBQVM7WUFBQyxJQUFJO1lBQUM7U0FBa0I7SUFFckM7QUFDSjtBQUVBSyxPQUFPQyxPQUFPLEdBQUdYLGlCQUFRLENBQUNZLE1BQU0sQ0FBQyxPQUFPLElBQUlaLGlCQUFRLENBQUNhLEtBQUssQ0FBQyxRQUFPZCIsInNvdXJjZXMiOlsid2VicGFjazovL290cF93ZWIvLi9tb2RlbC9zY2hlbWEuanM/YTY4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBlbWFpbDp7XG4gICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICByZXF1aXJlZDpbdHJ1ZSwgJ3BsZWFzZSBhZGQgZW1haWwnXSxcbiAgICAgICAgdW5pcXVlOnRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOntcbiAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOlt0cnVlLCAncGxlYXNlIGFkZCBwYXNzd29yZCddXG4gICAgfSxcbiAgICByZW1lbWJlcjp7XG4gICAgICAgIHR5cGU6Qm9vbGVhbixcbiAgICAgICAgcmVxdWlyZWQ6W3RydWUsJ3BsZWFzZSBjaGVjayBpdCddLFxuXG4gICAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHNbJ1VzZXInXSB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsdXNlclNjaGVtYSk7Il0sIm5hbWVzIjpbInVzZXJTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJyZW1lbWJlciIsIkJvb2xlYW4iLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./model/schema.js\n");

/***/ }),

/***/ "(api)/./pages/api/login/login.js":
/*!**********************************!*\
  !*** ./pages/api/login/login.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AdminAuth)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _model_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/schema */ \"(api)/./model/schema.js\");\n/* harmony import */ var _model_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_schema__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);\n\n\n// connect();\n// export default async (req, res) => {\n//     const { method } = req;\n//     switch (method) {\n//         //For Log in\n//         case 'GET':\n//             try {\n//                 const user = await User.find({});\n//                 res.status(200).json({ success: true, data: user })\n//             } catch (error) {\n//                 res.status(400).json({ success: false })\n//             }\n//             break;\n//             //for Registeration\n//         case 'POST':\n//             try {\n//                 const user = await User.create(req.body);\n//                 res.status(201).json({ success: true, data: user });\n//             } catch (error) {\n//                 res.status(400).json({ success: false })\n//             }\n//     }\n//     // const {email,password}=req.body\n//     // const user = await User.findOne({email,password})\n//     // if(!user)\n//     // {\n//     //     return res.json({status:'Not able to find the user'})\n//     // }\n//     // else{\n//     //     res.redirect('/dashboard')\n//     // }\n// }   \n// import clientPromise from '../../../lib/mongo/index'\n\n\n\nasync function AdminAuth(req, res) {\n    if (req.method === \"POST\") {\n        const client = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        // const db = client.db('test');\n        // const admin = db.collection('users');\n        const { email , password  } = req.body;\n        // const hashPassword = pbkdf2Sync(password,'f844b09ff50c',1000,64,'sha256').toString('hex')\n        const result = await _model_schema__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n            $and: [\n                {\n                    email: email\n                },\n                {\n                    password: password\n                }\n            ]\n        });\n        if (result) {\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n                email: email,\n                password: password\n            }, \"secretKey\");\n            (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.setCookie)(\"token\", token, {\n                req,\n                res,\n                maxAge: 60 * 60 * 24 * 1,\n                httpOnly: true\n            });\n            res.json({\n                success: true\n            });\n        } else res.json({\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4vbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNGO0FBRXpDLGFBQWE7QUFFYix1Q0FBdUM7QUFDdkMsOEJBQThCO0FBRTlCLHdCQUF3QjtBQUN4Qix1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQixvREFBb0Q7QUFDcEQsc0VBQXNFO0FBQ3RFLGdDQUFnQztBQUNoQywyREFBMkQ7QUFDM0QsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtBQUVyQixrQ0FBa0M7QUFDbEMsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQiw0REFBNEQ7QUFDNUQsdUVBQXVFO0FBQ3ZFLGdDQUFnQztBQUNoQywyREFBMkQ7QUFDM0QsZ0JBQWdCO0FBQ2hCLFFBQVE7QUFDUix5Q0FBeUM7QUFDekMsMkRBQTJEO0FBQzNELG1CQUFtQjtBQUNuQixXQUFXO0FBQ1gsbUVBQW1FO0FBQ25FLFdBQVc7QUFDWCxlQUFlO0FBQ2Ysd0NBQXdDO0FBQ3hDLFdBQVc7QUFDWCxPQUFPO0FBQ1AsdURBQXVEO0FBQ25CO0FBQ0w7QUFDUztBQUV6QixlQUFlSyxVQUFVQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUM1QyxJQUFHRCxJQUFJRSxNQUFNLEtBQUssUUFBTztRQUNyQixNQUFNQyxTQUFTLE1BQU1ULHdEQUFPQTtRQUM1QixnQ0FBZ0M7UUFDaEMsd0NBQXdDO1FBRXhDLE1BQU0sRUFBRVUsTUFBSyxFQUFHQyxTQUFRLEVBQUUsR0FBR0wsSUFBSU0sSUFBSTtRQUNyQyw0RkFBNEY7UUFFNUYsTUFBTUMsU0FBUyxNQUFNWiw0REFBWSxDQUFDO1lBQzlCYyxNQUFPO2dCQUNIO29CQUNJTCxPQUFRQTtnQkFDWjtnQkFDQTtvQkFDSUMsVUFBV0E7Z0JBQ2Y7YUFDSDtRQUNMO1FBQ0EsSUFBR0UsUUFBTztZQUNOLE1BQU1HLFFBQVFiLHdEQUFRLENBQUM7Z0JBQUVPLE9BQVFBO2dCQUFRQyxVQUFXQTtZQUFTLEdBQUU7WUFDL0RQLHVEQUFTQSxDQUFDLFNBQVFZLE9BQU07Z0JBQ3BCVjtnQkFDQUM7Z0JBQ0FXLFFBQVMsS0FBSyxLQUFLLEtBQUs7Z0JBQ3hCQyxVQUFXLElBQUk7WUFDbkI7WUFDQVosSUFBSWEsSUFBSSxDQUFDO2dCQUNMQyxTQUFVLElBQUk7WUFDbEI7UUFDSixPQUNLZCxJQUFJYSxJQUFJLENBQUM7WUFDVkMsU0FBVSxLQUFLO1FBQ25CO0lBQ0osQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdHBfd2ViLy4vcGFnZXMvYXBpL2xvZ2luL2xvZ2luLmpzP2M5NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi8uLi9tb2RlbC9zY2hlbWEnO1xuXG4vLyBjb25uZWN0KCk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuLy8gICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG5cbi8vICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuLy8gICAgICAgICAvL0ZvciBMb2cgaW5cbi8vICAgICAgICAgY2FzZSAnR0VUJzpcbi8vICAgICAgICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZCh7fSk7XG4vLyAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1c2VyIH0pXG4vLyAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSlcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICAgICAgICAvL2ZvciBSZWdpc3RlcmF0aW9uXG4vLyAgICAgICAgIGNhc2UgJ1BPU1QnOlxuLy8gICAgICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUocmVxLmJvZHkpO1xuLy8gICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXNlciB9KTtcbi8vICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICAvLyBjb25zdCB7ZW1haWwscGFzc3dvcmR9PXJlcS5ib2R5XG4vLyAgICAgLy8gY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ZW1haWwscGFzc3dvcmR9KVxuLy8gICAgIC8vIGlmKCF1c2VyKVxuLy8gICAgIC8vIHtcbi8vICAgICAvLyAgICAgcmV0dXJuIHJlcy5qc29uKHtzdGF0dXM6J05vdCBhYmxlIHRvIGZpbmQgdGhlIHVzZXInfSlcbi8vICAgICAvLyB9XG4vLyAgICAgLy8gZWxzZXtcbi8vICAgICAvLyAgICAgcmVzLnJlZGlyZWN0KCcvZGFzaGJvYXJkJylcbi8vICAgICAvLyB9XG4vLyB9ICAgXG4vLyBpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuLi8uLi8uLi9saWIvbW9uZ28vaW5kZXgnXG5pbXBvcnQgeyBwYmtkZjJTeW5jIH0gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gJ2Nvb2tpZXMtbmV4dCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gQWRtaW5BdXRoKHJlcSxyZXMpe1xuICAgIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3QoKTtcbiAgICAgICAgLy8gY29uc3QgZGIgPSBjbGllbnQuZGIoJ3Rlc3QnKTtcbiAgICAgICAgLy8gY29uc3QgYWRtaW4gPSBkYi5jb2xsZWN0aW9uKCd1c2VycycpO1xuXG4gICAgICAgIGNvbnN0IHsgZW1haWwgLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgICAgIC8vIGNvbnN0IGhhc2hQYXNzd29yZCA9IHBia2RmMlN5bmMocGFzc3dvcmQsJ2Y4NDRiMDlmZjUwYycsMTAwMCw2NCwnc2hhMjU2JykudG9TdHJpbmcoJ2hleCcpXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVXNlci5maW5kT25lKHtcbiAgICAgICAgICAgICRhbmQgOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbCA6IGVtYWlsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkIDogcGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgICAgIGlmKHJlc3VsdCl7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgZW1haWwgOiBlbWFpbCAsIHBhc3N3b3JkIDogcGFzc3dvcmQgfSwnc2VjcmV0S2V5JylcbiAgICAgICAgICAgIHNldENvb2tpZSgndG9rZW4nLHRva2VuLHtcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICAgcmVzLFxuICAgICAgICAgICAgICAgIG1heEFnZSA6IDYwICogNjAgKiAyNCAqIDEgLFxuICAgICAgICAgICAgICAgIGh0dHBPbmx5IDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzIDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJlcy5qc29uKHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgOiBmYWxzZVxuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiY29ubmVjdCIsIlVzZXIiLCJwYmtkZjJTeW5jIiwiand0Iiwic2V0Q29va2llIiwiQWRtaW5BdXRoIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY2xpZW50IiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJyZXN1bHQiLCJmaW5kT25lIiwiJGFuZCIsInRva2VuIiwic2lnbiIsIm1heEFnZSIsImh0dHBPbmx5IiwianNvbiIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login/login.js"));
module.exports = __webpack_exports__;

})();