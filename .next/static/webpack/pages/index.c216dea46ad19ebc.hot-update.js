"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CheckupIndex.jsx":
/*!*************************************!*\
  !*** ./components/CheckupIndex.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryIndex.module.scss */ \"./components/CategoryIndex.module.scss\");\n/* harmony import */ var _CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TarjetaDescriptivaPaquetes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TarjetaDescriptivaPaquetes */ \"./components/TarjetaDescriptivaPaquetes.jsx\");\n/* harmony import */ var _TituloDivisor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TituloDivisor */ \"./components/TituloDivisor.jsx\");\nvar _this = undefined;\n\n\n\n\nvar CheckupIndex = function(param) {\n    var contenido = param.contenido;\n    //function for the creation of the description blocks for the category section\n    var renderTarjetas = function(paquetes) {\n        return paquetes.map(function(paquete, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TarjetaDescriptivaPaquetes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                image: \"./images/medicalImages/\" + paquete + \".jpg\",\n                nombreCategoria: paquete ? paquete : \"Cargando\",\n                descripcion: paquete ? paquete : \"Cargando\"\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"paquetes\",\n        className: (_CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkupIndex),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TituloDivisor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                titulo: \"Estudios clinicos para cuidar tu salud.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().gridTarjetas),\n                children: [\n                    renderTarjetas(contenido),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TarjetaDescriptivaPaquetes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        image: \"./images/medicalImages/Perfiles.jpg\",\n                        nombreCategoria: \"Perfiles\",\n                        descripcion: \"Perfiles\"\n                    }, \"Perfiles\", false, {\n                        fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_c = CheckupIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckupIndex);\nvar _c;\n$RefreshReg$(_c, \"CheckupIndex\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoZWNrdXBJbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFpRDtBQUNxQjtBQUMxQjtBQUU1QyxJQUFNRyxZQUFZLEdBQUcsZ0JBQW1CO1FBQWhCQyxTQUFTLFNBQVRBLFNBQVM7SUFDL0IsOEVBQThFO0lBQzlFLElBQU1DLGNBQWMsR0FBR0MsU0FBQUEsUUFBUSxFQUFJO1FBQ2pDLE9BQU9BLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsS0FBSztpQ0FDakMsOERBQUNSLG1FQUEwQjtnQkFFekJTLEtBQUssRUFBRSx5QkFBeUIsR0FBR0YsT0FBTyxHQUFHLE1BQU07Z0JBQ25ERyxlQUFlLEVBQUVILE9BQU8sR0FBR0EsT0FBTyxHQUFHLFVBQVU7Z0JBQy9DSSxXQUFXLEVBQUVKLE9BQU8sR0FBR0EsT0FBTyxHQUFHLFVBQVU7ZUFIdENDLEtBQUs7Ozs7cUJBSVY7U0FDSCxDQUFDLENBQUM7S0FDSjtJQUNELHFCQUNFLDhEQUFDSSxTQUFPO1FBQUNDLEVBQUUsRUFBQyxVQUFVO1FBQUNDLFNBQVMsRUFBRWYsZ0ZBQW1COzswQkFDbkQsOERBQUNFLHNEQUFhO2dCQUFDZSxNQUFNLEVBQUMseUNBQXlDOzs7OztxQkFBRzswQkFDbEUsOERBQUNDLEtBQUc7Z0JBQUNILFNBQVMsRUFBRWYsZ0ZBQW1COztvQkFDaENLLGNBQWMsQ0FBQ0QsU0FBUyxDQUFDO29CQUFFLEdBQUc7a0NBQy9CLDhEQUFDSCxtRUFBMEI7d0JBRXpCUyxLQUFLLEVBQUUscUNBQXFDO3dCQUM1Q0MsZUFBZSxFQUFDLFVBQVU7d0JBQzFCQyxXQUFXLEVBQUMsVUFBVTt1QkFIbEIsVUFBVTs7Ozs2QkFJZDs7Ozs7O3FCQUNFOzs7Ozs7YUFDRSxDQUNWO0NBQ0g7QUExQktULEtBQUFBLFlBQVk7QUE0QmxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja3VwSW5kZXguanN4PzQ2ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXRlZ29yeUluZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBUYXJqZXRhRGVzY3JpcHRpdmFQYXF1ZXRlcyBmcm9tIFwiLi9UYXJqZXRhRGVzY3JpcHRpdmFQYXF1ZXRlc1wiO1xyXG5pbXBvcnQgVGl0dWxvRGl2aXNvciBmcm9tIFwiLi9UaXR1bG9EaXZpc29yXCI7XHJcblxyXG5jb25zdCBDaGVja3VwSW5kZXggPSAoeyBjb250ZW5pZG8gfSkgPT4ge1xyXG4gIC8vZnVuY3Rpb24gZm9yIHRoZSBjcmVhdGlvbiBvZiB0aGUgZGVzY3JpcHRpb24gYmxvY2tzIGZvciB0aGUgY2F0ZWdvcnkgc2VjdGlvblxyXG4gIGNvbnN0IHJlbmRlclRhcmpldGFzID0gcGFxdWV0ZXMgPT4ge1xyXG4gICAgcmV0dXJuIHBhcXVldGVzLm1hcCgocGFxdWV0ZSwgaW5kZXgpID0+IChcclxuICAgICAgPFRhcmpldGFEZXNjcmlwdGl2YVBhcXVldGVzXHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBpbWFnZT17XCIuL2ltYWdlcy9tZWRpY2FsSW1hZ2VzL1wiICsgcGFxdWV0ZSArIFwiLmpwZ1wifVxyXG4gICAgICAgIG5vbWJyZUNhdGVnb3JpYT17cGFxdWV0ZSA/IHBhcXVldGUgOiBcIkNhcmdhbmRvXCJ9XHJcbiAgICAgICAgZGVzY3JpcGNpb249e3BhcXVldGUgPyBwYXF1ZXRlIDogXCJDYXJnYW5kb1wifVxyXG4gICAgICAvPlxyXG4gICAgKSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJwYXF1ZXRlc1wiIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrdXBJbmRleH0+XHJcbiAgICAgIDxUaXR1bG9EaXZpc29yIHRpdHVsbz1cIkVzdHVkaW9zIGNsaW5pY29zIHBhcmEgY3VpZGFyIHR1IHNhbHVkLlwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZFRhcmpldGFzfT5cclxuICAgICAgICB7cmVuZGVyVGFyamV0YXMoY29udGVuaWRvKX17XCIgXCJ9XHJcbiAgICAgICAgPFRhcmpldGFEZXNjcmlwdGl2YVBhcXVldGVzXHJcbiAgICAgICAgICBrZXk9XCJQZXJmaWxlc1wiXHJcbiAgICAgICAgICBpbWFnZT17XCIuL2ltYWdlcy9tZWRpY2FsSW1hZ2VzL1BlcmZpbGVzLmpwZ1wifVxyXG4gICAgICAgICAgbm9tYnJlQ2F0ZWdvcmlhPVwiUGVyZmlsZXNcIlxyXG4gICAgICAgICAgZGVzY3JpcGNpb249XCJQZXJmaWxlc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrdXBJbmRleDtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlRhcmpldGFEZXNjcmlwdGl2YVBhcXVldGVzIiwiVGl0dWxvRGl2aXNvciIsIkNoZWNrdXBJbmRleCIsImNvbnRlbmlkbyIsInJlbmRlclRhcmpldGFzIiwicGFxdWV0ZXMiLCJtYXAiLCJwYXF1ZXRlIiwiaW5kZXgiLCJpbWFnZSIsIm5vbWJyZUNhdGVnb3JpYSIsImRlc2NyaXBjaW9uIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiY2hlY2t1cEluZGV4IiwidGl0dWxvIiwiZGl2IiwiZ3JpZFRhcmpldGFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CheckupIndex.jsx\n"));

/***/ })

});