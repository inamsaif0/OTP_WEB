"use strict";
(() => {
var exports = {};
exports.id = 668;
exports.ids = [668,835];
exports.modules = {

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5678:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(6328)/* ["default"] */ .Z);
const _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(1185));
const userSchema = new _mongoose.default.Schema({
    email: {
        type: String,
        required: [
            true,
            "please add email"
        ],
        unique: true
    },
    password: {
        type: String,
        required: [
            true,
            "please add password"
        ]
    },
    remember: {
        type: Boolean,
        required: [
            true,
            "please check it"
        ]
    }
});
module.exports = _mongoose.default.models["User"] || _mongoose.default.model("User", userSchema);


/***/ }),

/***/ 7431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdminAuth)
});

// EXTERNAL MODULE: ./lib/mongodb.js
var mongodb = __webpack_require__(4205);
// EXTERNAL MODULE: ./model/schema.js
var schema = __webpack_require__(5678);
var schema_default = /*#__PURE__*/__webpack_require__.n(schema);
;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(8982);
;// CONCATENATED MODULE: ./pages/api/login/login.js


// connect();
// export default async (req, res) => {
//     const { method } = req;
//     switch (method) {
//         //For Log in
//         case 'GET':
//             try {
//                 const user = await User.find({});
//                 res.status(200).json({ success: true, data: user })
//             } catch (error) {
//                 res.status(400).json({ success: false })
//             }
//             break;
//             //for Registeration
//         case 'POST':
//             try {
//                 const user = await User.create(req.body);
//                 res.status(201).json({ success: true, data: user });
//             } catch (error) {
//                 res.status(400).json({ success: false })
//             }
//     }
//     // const {email,password}=req.body
//     // const user = await User.findOne({email,password})
//     // if(!user)
//     // {
//     //     return res.json({status:'Not able to find the user'})
//     // }
//     // else{
//     //     res.redirect('/dashboard')
//     // }
// }   
// import clientPromise from '../../../lib/mongo/index'



async function AdminAuth(req, res) {
    if (req.method === "POST") {
        const client = await (0,mongodb/* default */.Z)();
        // const db = client.db('test');
        // const admin = db.collection('users');
        const { email , password  } = req.body;
        // const hashPassword = pbkdf2Sync(password,'f844b09ff50c',1000,64,'sha256').toString('hex')
        const result = await schema_default().findOne({
            $and: [
                {
                    email: email
                },
                {
                    password: password
                }
            ]
        });
        if (result) {
            const token = external_jsonwebtoken_default().sign({
                email: email,
                password: password
            }, "secretKey");
            (0,external_cookies_next_.setCookie)("token", token, {
                req,
                res,
                maxAge: 60 * 60 * 24 * 1,
                httpOnly: true
            });
            res.json({
                success: true
            });
        } else res.json({
            success: false
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [92], () => (__webpack_exec__(7431)));
module.exports = __webpack_exports__;

})();