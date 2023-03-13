exports.id = 314;
exports.ids = [314];
exports.modules = {

/***/ 284:
/***/ ((module) => {

// Exports
module.exports = {
	"searchBar": "SearchBar_searchBar__v7wsX",
	"enterButton": "SearchBar_enterButton__9Fsnc"
};


/***/ }),

/***/ 3314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(284);
/* harmony import */ var _SearchBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function SearchBar({ contenido , placeholder  }) {
    const { 0: query , 1: setquery  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handleSubmit = ()=>{
        const matchingObjects = contenido.filter((object)=>object.toLowerCase() === query.toLowerCase());
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push(`/examenes/${matchingObjects[0]}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_SearchBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().searchBar),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    placeholder: placeholder,
                    onChange: (e)=>setquery(e.target.value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_SearchBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().enterButton),
                    onClick: handleSubmit,
                    children: "Buscar"
                })
            ]
        })
    });
};


/***/ })

};
;