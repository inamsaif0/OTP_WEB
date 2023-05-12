"use strict";
exports.id = 905;
exports.ids = [905];
exports.modules = {

/***/ 6862:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(6328)/* ["default"] */ .Z);
const _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(1185));
const uploadFileSchema = new _mongoose.default.Schema({
    teacher: {
        type: String
    },
    student: {
        type: String
    },
    level: {
        type: String
    },
    file: {
        type: String
    },
    fileType: {
        type: String
    },
    date: {
        type: String
    }
});
module.exports = _mongoose.default.models["uploadFile"] || _mongoose.default.model("uploadFile", uploadFileSchema);


/***/ }),

/***/ 905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4205);
/* harmony import */ var _model_contentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6862);
/* harmony import */ var _model_contentList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_contentList__WEBPACK_IMPORTED_MODULE_1__);


(0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
const contentOp = async (req, res)=>{
    const { query: { id  } , method  } = req;
    switch(method){
        case "GET":
            try {
                const list = await _model_contentList__WEBPACK_IMPORTED_MODULE_1___default().findbyId(id);
                if (!list) {
                    res.status(400).json({
                        success: false
                    });
                }
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
        case "PUT":
            try {
                const updateList = await _model_contentList__WEBPACK_IMPORTED_MODULE_1___default().findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
                if (!updateList) {
                    return res.status(400).json({
                        success: false
                    });
                }
                res.status(200).json({
                    success: true,
                    data: updateList
                });
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        case "DELETE":
            try {
                const deleteList = await _model_contentList__WEBPACK_IMPORTED_MODULE_1___default().deleteOne({
                    _id: id
                });
                if (!deleteList) {
                    res.status(400).json({
                        success: false
                    });
                }
                res.status(200).json({
                    success: true,
                    data: {}
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentOp);


/***/ })

};
;