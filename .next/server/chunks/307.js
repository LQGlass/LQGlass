exports.id = 307;
exports.ids = [307];
exports.modules = {

/***/ 4755:
/***/ ((module) => {

// Exports
module.exports = {
	"casillaAnalisis": "CasillaPaquete_casillaAnalisis__99L1O",
	"textosCasilla": "CasillaPaquete_textosCasilla__EfiX8",
	"incluyeEl": "CasillaPaquete_incluyeEl___yIp0",
	"precios": "CasillaPaquete_precios__lkyLu"
};


/***/ }),

/***/ 3517:
/***/ ((module) => {

// Exports
module.exports = {
	"analisisSection": "_categorieId__analisisSection__hkbe0",
	"nameBox": "_categorieId__nameBox__2mdI_",
	"lineaSubrayado": "_categorieId__lineaSubrayado__1fTzN",
	"casillaAnalisis": "_categorieId__casillaAnalisis__J7_TX",
	"costoAntes": "_categorieId__costoAntes__vBDmr",
	"precios": "_categorieId__precios__dm_mY",
	"costoAhorro": "_categorieId__costoAhorro__nyF9p",
	"imagenCasillaAnalisis": "_categorieId__imagenCasillaAnalisis__2LQFt"
};


/***/ }),

/***/ 6887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CasillaPaquete_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4755);
/* harmony import */ var _CasillaPaquete_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CasillaPaquete_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



function CasillaPaquete({ nombre , descripcion , precio , incluye , indicaciones , procedimiento ,  }) {
    const index = Math.floor(Math.random() * 10);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_CasillaPaquete_module_scss__WEBPACK_IMPORTED_MODULE_2___default().casillaAnalisis),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CasillaPaquete_module_scss__WEBPACK_IMPORTED_MODULE_2___default().imagenCasillaAnalisis),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_CasillaPaquete_module_scss__WEBPACK_IMPORTED_MODULE_2___default().imagenAnalisis),
                    src: "/images/iconos-ui/resultados.png",
                    alt: "",
                    width: 200
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_CasillaPaquete_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textosCasilla),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                        children: nombre
                    }),
                    descripcion && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dd", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: "Descripcion:"
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            descripcion
                        ]
                    }),
                    incluye && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dd", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: "Incluye: "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                children: incluye?.map((el)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/examenes/" + el,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: (_CasillaPaquete_module_scss__WEBPACK_IMPORTED_MODULE_2___default().incluyeEl),
                                            children: el
                                        })
                                    }))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dd", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: "Indicaciones: "
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            indicaciones
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dd", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: "Procedimiento: "
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            procedimiento
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_CasillaPaquete_module_scss__WEBPACK_IMPORTED_MODULE_2___default().precios),
                children: [
                    "Precio: ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " $",
                    precio
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CasillaPaquete);


/***/ })

};
;