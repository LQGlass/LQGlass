/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\pages\\\\_app.jsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n};\nconst getStaticProps = async ()=>{\n    let posts = [];\n    try {\n        // await the promise\n        const querySnapshot = await firebase.firestore().collection(\"categories\").get();\n        // \"then\" part after the await\n        querySnapshot.forEach(function(doc) {\n            console.log(doc.data().title);\n            console.log(doc.data().pid);\n            posts.push({\n                title: doc.data().title,\n                description: doc.data().description\n            });\n        });\n        console.log(posts);\n    } catch (error) {\n        // catch part using try/catch\n        console.log(\"Error getting documents: \", error);\n    // return something else here, or an empty props, or throw an exception or whatever \n    }\n    return {\n        props: {\n            posts\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUVmLFNBQVNBLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3RELHFCQUFPLDhEQUFDRCxTQUFTO1FBQUUsR0FBR0MsU0FBUzs7Ozs7WUFBSSxDQUFDO0NBQ3JDO0FBR00sTUFBTUMsY0FBYyxHQUFHLFVBQVk7SUFDeEMsSUFBSUMsS0FBSyxHQUFHLEVBQUU7SUFDZCxJQUNBO1FBQ0Usb0JBQW9CO1FBQ3BCLE1BQU1DLGFBQWEsR0FBRyxNQUFNQyxRQUFRLENBQ2pDQyxTQUFTLEVBQUUsQ0FDWEMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUN4QkMsR0FBRyxFQUFFO1FBRVIsOEJBQThCO1FBQzlCSixhQUFhLENBQUNLLE9BQU8sQ0FBQyxTQUFVQyxHQUFHLEVBQUU7WUFDbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLElBQUksRUFBRSxDQUFDQyxLQUFLLENBQUM7WUFDN0JILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLElBQUksRUFBRSxDQUFDRSxHQUFHLENBQUM7WUFDM0JaLEtBQUssQ0FBQ2EsSUFBSSxDQUFDO2dCQUNURixLQUFLLEVBQUVKLEdBQUcsQ0FBQ0csSUFBSSxFQUFFLENBQUNDLEtBQUs7Z0JBQ3ZCRyxXQUFXLEVBQUVQLEdBQUcsQ0FBQ0csSUFBSSxFQUFFLENBQUNJLFdBQVc7YUFDcEMsQ0FBQztTQUNILENBQUM7UUFDRk4sT0FBTyxDQUFDQyxHQUFHLENBQUNULEtBQUssQ0FBQztLQUNuQixDQUFDLE9BQU1lLEtBQUssRUFBRTtRQUNYLDZCQUE2QjtRQUM3QlAsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEVBQUVNLEtBQUssQ0FBQztJQUMvQyxvRkFBb0Y7S0FDdkY7SUFFRCxPQUFPO1FBQ0hDLEtBQUssRUFBRTtZQUNMaEIsS0FBSztTQUNOO0tBQ0o7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xxZ2xhc3MvLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgcG9zdHMgPSBbXVxyXG4gIHRyeSBcclxuICB7XHJcbiAgICAvLyBhd2FpdCB0aGUgcHJvbWlzZVxyXG4gICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAuY29sbGVjdGlvbignY2F0ZWdvcmllcycpXHJcbiAgICAgIC5nZXQoKTtcclxuICBcclxuICAgIC8vIFwidGhlblwiIHBhcnQgYWZ0ZXIgdGhlIGF3YWl0XHJcbiAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG4gICAgICBjb25zb2xlLmxvZyhkb2MuZGF0YSgpLnRpdGxlKVxyXG4gICAgICBjb25zb2xlLmxvZyhkb2MuZGF0YSgpLnBpZClcclxuICAgICAgcG9zdHMucHVzaCh7XHJcbiAgICAgICAgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRvYy5kYXRhKCkuZGVzY3JpcHRpb24sXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2cocG9zdHMpXHJcbiAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAvLyBjYXRjaCBwYXJ0IHVzaW5nIHRyeS9jYXRjaFxyXG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZ2V0dGluZyBkb2N1bWVudHM6ICcsIGVycm9yKVxyXG4gICAgICAvLyByZXR1cm4gc29tZXRoaW5nIGVsc2UgaGVyZSwgb3IgYW4gZW1wdHkgcHJvcHMsIG9yIHRocm93IGFuIGV4Y2VwdGlvbiBvciB3aGF0ZXZlciBcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcG9zdHNcclxuICAgICAgfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldFN0YXRpY1Byb3BzIiwicG9zdHMiLCJxdWVyeVNuYXBzaG90IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwiZm9yRWFjaCIsImRvYyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidGl0bGUiLCJwaWQiLCJwdXNoIiwiZGVzY3JpcHRpb24iLCJlcnJvciIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();