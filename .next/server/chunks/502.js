exports.id = 502;
exports.ids = [502];
exports.modules = {

/***/ 7994:
/***/ ((module) => {

// Exports
module.exports = {
	"signInWrapper": "CrearCuentaForm_signInWrapper__NP7n4",
	"crearCuentaForm": "CrearCuentaForm_crearCuentaForm__XQoLU",
	"botonSecundario": "CrearCuentaForm_botonSecundario__OYFGf"
};


/***/ }),

/***/ 7439:
/***/ ((module) => {

// Exports
module.exports = {
	"crearCuentaSection": "crear-cuenta_crearCuentaSection__7Z87u"
};


/***/ }),

/***/ 8055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CrearCuentaForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7994);
/* harmony import */ var _CrearCuentaForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CrearCuentaForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function CrearCuentaForm() {
    const { 0: crear , 1: setcrear  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const submitHandler = (e)=>{
        e.preventDefault();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_CrearCuentaForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().signInWrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Inicia Sesion"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CrearCuentaForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().crearCuentaForm),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: submitHandler,
                    type: "submit",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "email",
                            name: "email",
                            id: "email",
                            placeholder: "Correo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "email",
                            children: "*\xdatiliza el mismo correo proporcionado el d\xeda de tus examenes."
                        }),
                        crear && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    name: "name",
                                    id: "name",
                                    placeholder: "Nombre"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    name: "apellidos",
                                    id: "apellidos",
                                    placeholder: "Apellidos"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "password",
                            name: "password",
                            id: "password",
                            placeholder: "Contrase\xf1a"
                        }),
                        crear && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            children: "Crear Cuenta"
                        }),
                        !crear && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            children: "Iniciar Sesi\xf3n"
                        }),
                        crear ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "\xbfYa tienes cuenta? Inicia Sesion"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_CrearCuentaForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().botonSecundario),
                                    onClick: ()=>setcrear(!crear),
                                    children: "Inicia sesion"
                                }),
                                " "
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "No tienes cuenta aun?"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_CrearCuentaForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().botonSecundario),
                                    onClick: ()=>setcrear(!crear),
                                    children: "Crear cuenta"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrearCuentaForm);


/***/ })

};
;