"use strict";
(() => {
var exports = {};
exports.id = 406;
exports.ids = [406,835];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 2448:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(6328)/* ["default"] */ .Z);
const _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(1185));
const _stringDecoder = __webpack_require__(1576);
const userListSchema = new _mongoose.default.Schema({
    studentName: {
        type: String
    },
    studentId: {
        type: String
    },
    level: {
        type: String
    },
    status: {
        type: Boolean
    }
});
module.exports = _mongoose.default.models["userList"] || _mongoose.default.model("userList", userListSchema);


/***/ }),

/***/ 3572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4205);
/* harmony import */ var _model_userList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2448);
/* harmony import */ var _model_userList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_userList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_id___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(905);



(0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
const userLists = async (req, res)=>{
    const { method  } = req;
    switch(method){
        case "GET":
            try {
                const list = await _model_userList__WEBPACK_IMPORTED_MODULE_1___default().find({});
                res.status(200).json({
                    success: true,
                    data: list
                });
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        case "POST":
            try {
                const list = await _model_userList__WEBPACK_IMPORTED_MODULE_1___default().create(req.body);
                res.status(201).json({
                    success: true,
                    data: list
                });
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        default:
            res.status(400).json({
                success: false
            });
            break;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userLists);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [92,905], () => (__webpack_exec__(3572)));
module.exports = __webpack_exports__;

})();