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
/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1235);
/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HeroImg_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6436);



function Header({ title  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().hero),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            children: title ? title : "Default title"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 6436:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);



const HeroImg = (props)=>{
    return /*#__PURE__*/ _jsx("div", {
        className: styles.heroImg,
        children: /*#__PURE__*/ _jsx("img", {
            className: styles.heroImg,
            src: props.src,
            alt: props.alt
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (HeroImg)));


/***/ })

};
;