exports.id = 449;
exports.ids = [449];
exports.modules = {

/***/ 5716:
/***/ ((module) => {

// Exports
module.exports = {
	"blogSeccion": "BlogSeccion_blogSeccion___t6QN",
	"blogWrapper": "BlogSeccion_blogWrapper__qKWND",
	"container": "BlogSeccion_container__xaARc"
};


/***/ }),

/***/ 8688:
/***/ ((module) => {

// Exports
module.exports = {
	"casillaBlog": "CasillaBlog_casillaBlog__qRu6i"
};


/***/ }),

/***/ 1960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CasillaBlog_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8688);
/* harmony import */ var _CasillaBlog_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CasillaBlog_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);



function CasillaBlog(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_CasillaBlog_module_scss__WEBPACK_IMPORTED_MODULE_2___default().casillaBlog),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/images/microscopio.jpg",
                width: 350,
                height: 250
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_CasillaBlog_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tituloCasilla),
                children: props.titulo
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_CasillaBlog_module_scss__WEBPACK_IMPORTED_MODULE_2___default().descripcionCasilla),
                children: [
                    " ",
                    props.descripcion,
                    " "
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CasillaBlog);


/***/ })

};
;