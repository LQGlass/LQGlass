exports.id = 252;
exports.ids = [252];
exports.modules = {

/***/ 5251:
/***/ ((module) => {

// Exports
module.exports = {
	"tarjetaD": "TarjetaDescriptiva_tarjetaD__f5jy5",
	"tituloTarjeta": "TarjetaDescriptiva_tituloTarjeta__avj9R",
	"tarjetaDPaquetes": "TarjetaDescriptiva_tarjetaDPaquetes__C64oH"
};


/***/ }),

/***/ 5109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5251);
/* harmony import */ var _TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const TarjetaDescriptiva = ({ image , nombreCategoria  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/${nombreCategoria}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
            className: (_TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tarjetaD),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: image,
                    alt: "icono medico"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                    className: (_TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tituloTarjeta),
                    children: nombreCategoria
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/${nombreCategoria}`,
                    children: "Ver m\xe1s"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TarjetaDescriptiva);


/***/ }),

/***/ 6307:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__]);
firebase_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAArltJj6v-5JXrNL-IMv0kkneN4wkNe9w",
    authDomain: "lqglasscms.firebaseapp.com",
    projectId: "lqglasscms",
    storageBucket: "lqglasscms.appspot.com",
    messagingSenderId: "88545366466",
    appId: "1:88545366466:web:9f498df615c169eebfc65b",
    measurementId: "G-P4BZ7JZCW7"
};
// Initialize Firebase
const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;