exports.id = 932;
exports.ids = [932];
exports.modules = {

/***/ 1235:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "main_container__H2cvg",
	"navBar": "main_navBar__1qEhX",
	"header": "main_header__gWkvH",
	"navLinks": "main_navLinks__bsuIT",
	"logo": "main_logo__0ACoN",
	"logButtons": "main_logButtons__GEiRs",
	"signIn": "main_signIn__NqAcf",
	"hero": "main_hero__5U1W4",
	"blogHome": "main_blogHome__NBBSU",
	"blogHomeWrapper": "main_blogHomeWrapper__pNfpL",
	"vermas": "main_vermas__XxtOg"
};


/***/ }),

/***/ 1932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1235);
/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Header({ title  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_1___default().hero),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: title ? title : "Default title"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: (_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_1___default().wave),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1440 320",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#071d49",
                    "fill-opacity": "1",
                    d: "M0,224L60,229.3C120,235,240,245,360,208C480,171,600,85,720,85.3C840,85,960,171,1080,186.7C1200,203,1320,149,1380,122.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                })
            }),
            "        "
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;