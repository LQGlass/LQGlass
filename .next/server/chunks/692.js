exports.id = 692;
exports.ids = [692];
exports.modules = {

/***/ 4815:
/***/ ((module) => {

// Exports
module.exports = {
	"formularioFacturas": "FormularioFacturas_formularioFacturas__J5OKf",
	"direccion": "FormularioFacturas_direccion__pssCm",
	"radio": "FormularioFacturas_radio__ElBHc"
};


/***/ }),

/***/ 4692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormularioFacturas_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4815);
/* harmony import */ var _FormularioFacturas_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FormularioFacturas_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function FormularioFacturas() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_FormularioFacturas_module_scss__WEBPACK_IMPORTED_MODULE_1___default().formularioFacturas),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Rellena el formulario para poder enviar la factura ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " a el correo electr\xf3nico con el que iniciaste sesion."
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                action: "/perfil",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "rfc",
                        id: "rfc",
                        placeholder: "RFC"
                    }),
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
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "radio",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "radio",
                                id: "fisica",
                                name: "razon-social",
                                value: "Persona F\xedsica"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "fisica",
                                children: "Persona Fisica"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: (_FormularioFacturas_module_scss__WEBPACK_IMPORTED_MODULE_1___default().radio),
                                type: "radio",
                                id: "moral",
                                name: "razon-social",
                                value: "Persona Moral"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "moral",
                                children: "Persona Moral"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_FormularioFacturas_module_scss__WEBPACK_IMPORTED_MODULE_1___default().direccion),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "calle",
                                id: "calle",
                                placeholder: "Calle y numero"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "Colonia",
                                id: "Colonia",
                                placeholder: "Colonia"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "codigopostal",
                                id: "codigopostal",
                                placeholder: "C\xf3digo postal"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "municipio",
                                id: "municipio",
                                placeholder: "Municipio/Delegaci\xf3n"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "cfdi",
                        id: "cfdi",
                        placeholder: "Uso de CFDI"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        children: "Enviar"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormularioFacturas);


/***/ })

};
;