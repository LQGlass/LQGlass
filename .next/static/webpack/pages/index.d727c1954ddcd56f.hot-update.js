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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CategoryIndex.module.scss */ \"./components/CategoryIndex.module.scss\");\n/* harmony import */ var _CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TarjetaDescriptivaPaquetes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TarjetaDescriptivaPaquetes */ \"./components/TarjetaDescriptivaPaquetes.jsx\");\n/* harmony import */ var _TituloDivisor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TituloDivisor */ \"./components/TituloDivisor.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TarjetaDescriptiva.module.scss */ \"./components/TarjetaDescriptiva.module.scss\");\n/* harmony import */ var _TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar CheckupIndex = function(param) {\n    var contenido = param.contenido;\n    //function for the creation of the description blocks for the category section\n    var renderTarjetas = function(paquetes) {\n        return paquetes.map(function(paquete, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TarjetaDescriptivaPaquetes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                image: \"./images/medicalImages/\" + paquete + \".jpg\",\n                nombreCategoria: paquete ? paquete : \"Cargando\",\n                descripcion: paquete ? paquete : \"Cargando\"\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"paquetes\",\n        className: (_CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_4___default().checkupIndex),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TituloDivisor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                titulo: \"Estudios clinicos para cuidar tu salud.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_4___default().gridTarjetas),\n                children: [\n                    renderTarjetas(contenido),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/perfiles\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                            className: (_TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tarjetaDPaquetes),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/medicalImages/Perfiles.jpg\",\n                                    alt: \"icono medico\",\n                                    width: 100\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                    className: (_TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tituloTarjeta),\n                                    children: \"Perfiles\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/perfiles\",\n                                    children: \"Ver m\\xe1s\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_c = CheckupIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckupIndex);\nvar _c;\n$RefreshReg$(_c, \"CheckupIndex\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoZWNrdXBJbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUQ7QUFDcUI7QUFDMUI7QUFDZjtBQUMwQjtBQUV2RCxJQUFNSyxZQUFZLEdBQUcsZ0JBQW1CO1FBQWhCQyxTQUFTLFNBQVRBLFNBQVM7SUFDL0IsOEVBQThFO0lBQzlFLElBQU1DLGNBQWMsR0FBR0MsU0FBQUEsUUFBUSxFQUFJO1FBQ2pDLE9BQU9BLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsS0FBSztpQ0FDakMsOERBQUNWLG1FQUEwQjtnQkFFekJXLEtBQUssRUFBRSx5QkFBeUIsR0FBR0YsT0FBTyxHQUFHLE1BQU07Z0JBQ25ERyxlQUFlLEVBQUVILE9BQU8sR0FBR0EsT0FBTyxHQUFHLFVBQVU7Z0JBQy9DSSxXQUFXLEVBQUVKLE9BQU8sR0FBR0EsT0FBTyxHQUFHLFVBQVU7ZUFIdENDLEtBQUs7Ozs7cUJBSVY7U0FDSCxDQUFDLENBQUM7S0FDSjtJQUNELHFCQUNFLDhEQUFDSSxTQUFPO1FBQUNDLEVBQUUsRUFBQyxVQUFVO1FBQUNDLFNBQVMsRUFBRWpCLGdGQUFtQjs7MEJBQ25ELDhEQUFDRSxzREFBYTtnQkFBQ2lCLE1BQU0sRUFBQyx5Q0FBeUM7Ozs7O3FCQUFHOzBCQUNsRSw4REFBQ0MsS0FBRztnQkFBQ0gsU0FBUyxFQUFFakIsZ0ZBQW1COztvQkFDaENPLGNBQWMsQ0FBQ0QsU0FBUyxDQUFDO2tDQUMxQiw4REFBQ0gsa0RBQUk7d0JBQUNtQixJQUFJLEVBQUcsV0FBUztrQ0FDcEIsNEVBQUNDLElBQUU7NEJBQUNOLFNBQVMsRUFBRWIseUZBQXdCOzs4Q0FDckMsOERBQUNxQixLQUFHO29DQUNGQyxHQUFHLEVBQUUscUNBQXFDO29DQUMxQ0MsR0FBRyxFQUFDLGNBQWM7b0NBQ2xCQyxLQUFLLEVBQUUsR0FBRzs7Ozs7eUNBQ1Y7OENBQ0YsOERBQUNDLElBQUU7b0NBQUNaLFNBQVMsRUFBRWIsc0ZBQXFCOzhDQUFFLFVBQVE7Ozs7O3lDQUFLOzhDQUNuRCw4REFBQ0Qsa0RBQUk7b0NBQUNtQixJQUFJLEVBQUcsV0FBUzs4Q0FBRyxZQUFPOzs7Ozt5Q0FBTzs7Ozs7O2lDQUNwQzs7Ozs7NkJBQ0E7Ozs7OztxQkFDSDs7Ozs7O2FBQ0UsQ0FDVjtDQUNIO0FBL0JLakIsS0FBQUEsWUFBWTtBQWlDbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoZWNrdXBJbmRleC5qc3g/NDZlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhdGVnb3J5SW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFRhcmpldGFEZXNjcmlwdGl2YVBhcXVldGVzIGZyb20gXCIuL1RhcmpldGFEZXNjcmlwdGl2YVBhcXVldGVzXCI7XHJcbmltcG9ydCBUaXR1bG9EaXZpc29yIGZyb20gXCIuL1RpdHVsb0Rpdmlzb3JcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzMiBmcm9tIFwiLi9UYXJqZXRhRGVzY3JpcHRpdmEubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IENoZWNrdXBJbmRleCA9ICh7IGNvbnRlbmlkbyB9KSA9PiB7XHJcbiAgLy9mdW5jdGlvbiBmb3IgdGhlIGNyZWF0aW9uIG9mIHRoZSBkZXNjcmlwdGlvbiBibG9ja3MgZm9yIHRoZSBjYXRlZ29yeSBzZWN0aW9uXHJcbiAgY29uc3QgcmVuZGVyVGFyamV0YXMgPSBwYXF1ZXRlcyA9PiB7XHJcbiAgICByZXR1cm4gcGFxdWV0ZXMubWFwKChwYXF1ZXRlLCBpbmRleCkgPT4gKFxyXG4gICAgICA8VGFyamV0YURlc2NyaXB0aXZhUGFxdWV0ZXNcclxuICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgIGltYWdlPXtcIi4vaW1hZ2VzL21lZGljYWxJbWFnZXMvXCIgKyBwYXF1ZXRlICsgXCIuanBnXCJ9XHJcbiAgICAgICAgbm9tYnJlQ2F0ZWdvcmlhPXtwYXF1ZXRlID8gcGFxdWV0ZSA6IFwiQ2FyZ2FuZG9cIn1cclxuICAgICAgICBkZXNjcmlwY2lvbj17cGFxdWV0ZSA/IHBhcXVldGUgOiBcIkNhcmdhbmRvXCJ9XHJcbiAgICAgIC8+XHJcbiAgICApKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInBhcXVldGVzXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2t1cEluZGV4fT5cclxuICAgICAgPFRpdHVsb0Rpdmlzb3IgdGl0dWxvPVwiRXN0dWRpb3MgY2xpbmljb3MgcGFyYSBjdWlkYXIgdHUgc2FsdWQuXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkVGFyamV0YXN9PlxyXG4gICAgICAgIHtyZW5kZXJUYXJqZXRhcyhjb250ZW5pZG8pfVxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcGVyZmlsZXNgfT5cclxuICAgICAgICAgIDxkbCBjbGFzc05hbWU9e3N0eWxlczIudGFyamV0YURQYXF1ZXRlc30+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e1wiLi9pbWFnZXMvbWVkaWNhbEltYWdlcy9QZXJmaWxlcy5qcGdcIn1cclxuICAgICAgICAgICAgICBhbHQ9XCJpY29ubyBtZWRpY29cIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9e3N0eWxlczIudGl0dWxvVGFyamV0YX0+UGVyZmlsZXM8L2R0PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3BlcmZpbGVzYH0+VmVyIG3DoXM8L0xpbms+XHJcbiAgICAgICAgICA8L2RsPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrdXBJbmRleDtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlRhcmpldGFEZXNjcmlwdGl2YVBhcXVldGVzIiwiVGl0dWxvRGl2aXNvciIsIkxpbmsiLCJzdHlsZXMyIiwiQ2hlY2t1cEluZGV4IiwiY29udGVuaWRvIiwicmVuZGVyVGFyamV0YXMiLCJwYXF1ZXRlcyIsIm1hcCIsInBhcXVldGUiLCJpbmRleCIsImltYWdlIiwibm9tYnJlQ2F0ZWdvcmlhIiwiZGVzY3JpcGNpb24iLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJjaGVja3VwSW5kZXgiLCJ0aXR1bG8iLCJkaXYiLCJncmlkVGFyamV0YXMiLCJocmVmIiwiZGwiLCJ0YXJqZXRhRFBhcXVldGVzIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJkdCIsInRpdHVsb1RhcmpldGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CheckupIndex.jsx\n"));

/***/ })

});