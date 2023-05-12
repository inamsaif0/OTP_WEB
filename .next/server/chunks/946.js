"use strict";
exports.id = 946;
exports.ids = [946];
exports.modules = {

/***/ 3946:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8330);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8464);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_7__]);
axios__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Login = ({ handleChange  })=>{
    //STYLING
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [Datas, setDatas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // console.log('Data:', Datas);
    const paperStyle = {
        padding: 20,
        height: "auto",
        width: 300,
        margin: "0 auto",
        marginTop: "5rem",
        borderRadius: "15px 15px 15px 15px"
    };
    const avatarStyle = {
        backgroundColor: "#1bbd7e"
    };
    const btnstyle = {
        margin: "8px 0"
    };
    //STATE
    const initialValues = {
        username: "",
        password: "",
        remember: false
    };
    //VALIDATION 
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
        username: yup__WEBPACK_IMPORTED_MODULE_5__.string().email("please enter valid email").required("Required"),
        password: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("Required")
    });
    //FUNCTION TO LOGIN
    const onSubmit = (values, props)=>{
        console.log(values);
        setTimeout(()=>{
            props.resetForm();
            props.setSubmitting(false);
        }, 2000);
    };
    // const router = useRouter()
    const [iemail, setiEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [ipassword, setiPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const login = async ()=>{
        const response = await axios__WEBPACK_IMPORTED_MODULE_7__["default"].post("http://localhost:3000/api/login/login", {
            email: "inam@gmail.com",
            password: "inam12345"
        });
        console.log(response);
        if (response.data.success) {
            console.log(response);
            router.replace("/users/userList");
        } else setError(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        router.prefetch("/users/userList");
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
            style: paperStyle,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    align: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Admin Login"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
                    initialValues: initialValues,
                    onSubmit: onSubmit,
                    validationSchema: validationSchema,
                    children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                gap: "1rem",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                                        as: _mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField,
                                        label: "Username",
                                        name: "username",
                                        placeholder: "Enter username",
                                        fullWidth: true,
                                        required: true,
                                        helperText: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
                                            name: "username"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                                        as: _mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField,
                                        label: "Password",
                                        name: "password",
                                        placeholder: "Enter password",
                                        type: "password",
                                        fullWidth: true,
                                        required: true,
                                        helperText: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
                                            name: "password"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                                        as: _mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel,
                                        name: "remember",
                                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            color: "primary"
                                        }),
                                        label: "Remember me"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        type: "submit",
                                        color: "primary",
                                        variant: "contained",
                                        disabled: props.isSubmitting,
                                        style: btnstyle,
                                        fullWidth: true,
                                        onClick: login,
                                        children: [
                                            props.isSubmitting ? "Loading" : "Log in",
                                            "  "
                                        ]
                                    })
                                ]
                            })
                        })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;