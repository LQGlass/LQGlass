exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 5403:
/***/ ((module) => {

// Exports
module.exports = {
	"tituloDireccion": "DireccionCasilla_tituloDireccion__pXv5f",
	"direccionCasilla": "DireccionCasilla_direccionCasilla__tlHjK",
	"ubicacion": "DireccionCasilla_ubicacion__i8iR5",
	"ubicacionImg": "DireccionCasilla_ubicacionImg__rbkDz",
	"casilla": "DireccionCasilla_casilla__FzY2d"
};


/***/ }),

/***/ 2977:
/***/ ((module) => {

// Exports
module.exports = {
	"subtitulo": "TituloDivisor_subtitulo__w0aDB",
	"lineaSubrayado": "TituloDivisor_lineaSubrayado__Ktm3X",
	"containImage": "TituloDivisor_containImage__HNefP",
	"titulo": "TituloDivisor_titulo__RaWpQ",
	"containSolid": "TituloDivisor_containSolid__3my8S"
};


/***/ }),

/***/ 9076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DireccionCasilla)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DireccionCasilla_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5403);
/* harmony import */ var _DireccionCasilla_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DireccionCasilla_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function DireccionCasilla({ nombreDireccion , direccion  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_DireccionCasilla_module_scss__WEBPACK_IMPORTED_MODULE_1___default().casilla),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_DireccionCasilla_module_scss__WEBPACK_IMPORTED_MODULE_1___default().direccionCasilla),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: nombreDireccion
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("address", {
                        children: direccion
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_DireccionCasilla_module_scss__WEBPACK_IMPORTED_MODULE_1___default().ubicacion),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    target: "_blank",
                    href: "https://goo.gl/maps/uJBYXhB8yJGBTHVz7",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_DireccionCasilla_module_scss__WEBPACK_IMPORTED_MODULE_1___default().ubicacionImg),
                        src: "/images/ubicacion.png",
                        width: 600,
                        alt: "mapa"
                    })
                })
            })
        ]
    });
};


/***/ })

};
;