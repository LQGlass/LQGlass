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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CategoryIndex.module.scss */ \"./components/CategoryIndex.module.scss\");\n/* harmony import */ var _CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _TarjetaDescriptivaPaquetes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TarjetaDescriptivaPaquetes */ \"./components/TarjetaDescriptivaPaquetes.jsx\");\n/* harmony import */ var _TituloDivisor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TituloDivisor */ \"./components/TituloDivisor.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TarjetaDescriptiva.module.scss */ \"./components/TarjetaDescriptiva.module.scss\");\n/* harmony import */ var _TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchBar */ \"./components/SearchBar.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar CheckupIndex = function(param) {\n    var contenido = param.contenido, examenes = param.examenes;\n    //function for the creation of the description blocks for the category section\n    var renderTarjetas = function(paquetes) {\n        return paquetes.map(function(paquete, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TarjetaDescriptivaPaquetes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                image: \"./images/medicalImages/\" + paquete + \".jpg\",\n                nombreCategoria: paquete ? paquete : \"Cargando\",\n                descripcion: paquete ? paquete : \"Cargando\"\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"paquetes\",\n        className: (_CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_5___default().checkupIndex),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TituloDivisor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                titulo: \"Estudios clinicos para cuidar tu salud.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                contenido: examenes\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CategoryIndex_module_scss__WEBPACK_IMPORTED_MODULE_5___default().gridTarjetas),\n                children: [\n                    renderTarjetas(contenido),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/perfiles\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                            className: (_TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tarjetaDPaquetes),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./images/medicalImages/Perfiles.jpg\",\n                                    alt: \"icono medico\",\n                                    width: 100\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                    className: (_TarjetaDescriptiva_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tituloTarjeta),\n                                    children: \"Perfiles\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/perfiles\",\n                                    children: \"Ver m\\xe1s\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\CheckupIndex.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_c = CheckupIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckupIndex);\nvar _c;\n$RefreshReg$(_c, \"CheckupIndex\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoZWNrdXBJbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlEO0FBQ3FCO0FBQzFCO0FBQ2Y7QUFDMEI7QUFDbkI7QUFDcEMsSUFBTU0sWUFBWSxHQUFHLGdCQUE2QjtRQUExQkMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtJQUN6Qyw4RUFBOEU7SUFDOUUsSUFBTUMsY0FBYyxHQUFHQyxTQUFBQSxRQUFRLEVBQUk7UUFDakMsT0FBT0EsUUFBUSxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsT0FBTyxFQUFFQyxLQUFLO2lDQUNqQyw4REFBQ1osbUVBQTBCO2dCQUV6QmEsS0FBSyxFQUFFLHlCQUF5QixHQUFHRixPQUFPLEdBQUcsTUFBTTtnQkFDbkRHLGVBQWUsRUFBRUgsT0FBTyxHQUFHQSxPQUFPLEdBQUcsVUFBVTtnQkFDL0NJLFdBQVcsRUFBRUosT0FBTyxHQUFHQSxPQUFPLEdBQUcsVUFBVTtlQUh0Q0MsS0FBSzs7OztxQkFJVjtTQUNILENBQUMsQ0FBQztLQUNKO0lBQ0QscUJBQ0UsOERBQUNJLFNBQU87UUFBQ0MsRUFBRSxFQUFDLFVBQVU7UUFBQ0MsU0FBUyxFQUFFbkIsZ0ZBQW1COzswQkFDbkQsOERBQUNFLHNEQUFhO2dCQUFDbUIsTUFBTSxFQUFDLHlDQUF5Qzs7Ozs7cUJBQUc7MEJBRWxFLDhEQUFDaEIsa0RBQVM7Z0JBQUNFLFNBQVMsRUFBRUMsUUFBUTs7Ozs7cUJBQUk7MEJBQ2xDLDhEQUFDYyxLQUFHO2dCQUFDSCxTQUFTLEVBQUVuQixnRkFBbUI7O29CQUNoQ1MsY0FBYyxDQUFDRixTQUFTLENBQUM7a0NBQzFCLDhEQUFDSixrREFBSTt3QkFBQ3FCLElBQUksRUFBRyxXQUFTO2tDQUNwQiw0RUFBQ0MsSUFBRTs0QkFBQ04sU0FBUyxFQUFFZix5RkFBd0I7OzhDQUNyQyw4REFBQ3VCLEtBQUc7b0NBQ0ZDLEdBQUcsRUFBRSxxQ0FBcUM7b0NBQzFDQyxHQUFHLEVBQUMsY0FBYztvQ0FDbEJDLEtBQUssRUFBRSxHQUFHOzs7Ozt5Q0FDVjs4Q0FDRiw4REFBQ0MsSUFBRTtvQ0FBQ1osU0FBUyxFQUFFZixzRkFBcUI7OENBQUUsVUFBUTs7Ozs7eUNBQUs7OENBQ25ELDhEQUFDRCxrREFBSTtvQ0FBQ3FCLElBQUksRUFBRyxXQUFTOzhDQUFHLFlBQU87Ozs7O3lDQUFPOzs7Ozs7aUNBQ3BDOzs7Ozs2QkFDQTs7Ozs7O3FCQUNIOzs7Ozs7YUFDRSxDQUNWO0NBQ0g7QUFqQ0tsQixLQUFBQSxZQUFZO0FBbUNsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hlY2t1cEluZGV4LmpzeD80NmVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2F0ZWdvcnlJbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgVGFyamV0YURlc2NyaXB0aXZhUGFxdWV0ZXMgZnJvbSBcIi4vVGFyamV0YURlc2NyaXB0aXZhUGFxdWV0ZXNcIjtcclxuaW1wb3J0IFRpdHVsb0Rpdmlzb3IgZnJvbSBcIi4vVGl0dWxvRGl2aXNvclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMyIGZyb20gXCIuL1RhcmpldGFEZXNjcmlwdGl2YS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhclwiO1xyXG5jb25zdCBDaGVja3VwSW5kZXggPSAoeyBjb250ZW5pZG8sIGV4YW1lbmVzIH0pID0+IHtcclxuICAvL2Z1bmN0aW9uIGZvciB0aGUgY3JlYXRpb24gb2YgdGhlIGRlc2NyaXB0aW9uIGJsb2NrcyBmb3IgdGhlIGNhdGVnb3J5IHNlY3Rpb25cclxuICBjb25zdCByZW5kZXJUYXJqZXRhcyA9IHBhcXVldGVzID0+IHtcclxuICAgIHJldHVybiBwYXF1ZXRlcy5tYXAoKHBhcXVldGUsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxUYXJqZXRhRGVzY3JpcHRpdmFQYXF1ZXRlc1xyXG4gICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgaW1hZ2U9e1wiLi9pbWFnZXMvbWVkaWNhbEltYWdlcy9cIiArIHBhcXVldGUgKyBcIi5qcGdcIn1cclxuICAgICAgICBub21icmVDYXRlZ29yaWE9e3BhcXVldGUgPyBwYXF1ZXRlIDogXCJDYXJnYW5kb1wifVxyXG4gICAgICAgIGRlc2NyaXBjaW9uPXtwYXF1ZXRlID8gcGFxdWV0ZSA6IFwiQ2FyZ2FuZG9cIn1cclxuICAgICAgLz5cclxuICAgICkpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwicGFxdWV0ZXNcIiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja3VwSW5kZXh9PlxyXG4gICAgICA8VGl0dWxvRGl2aXNvciB0aXR1bG89XCJFc3R1ZGlvcyBjbGluaWNvcyBwYXJhIGN1aWRhciB0dSBzYWx1ZC5cIiAvPlxyXG5cclxuICAgICAgPFNlYXJjaEJhciBjb250ZW5pZG89e2V4YW1lbmVzfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRUYXJqZXRhc30+XHJcbiAgICAgICAge3JlbmRlclRhcmpldGFzKGNvbnRlbmlkbyl9XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wZXJmaWxlc2B9PlxyXG4gICAgICAgICAgPGRsIGNsYXNzTmFtZT17c3R5bGVzMi50YXJqZXRhRFBhcXVldGVzfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17XCIuL2ltYWdlcy9tZWRpY2FsSW1hZ2VzL1BlcmZpbGVzLmpwZ1wifVxyXG4gICAgICAgICAgICAgIGFsdD1cImljb25vIG1lZGljb1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT17c3R5bGVzMi50aXR1bG9UYXJqZXRhfT5QZXJmaWxlczwvZHQ+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGVyZmlsZXNgfT5WZXIgbcOhczwvTGluaz5cclxuICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2t1cEluZGV4O1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiVGFyamV0YURlc2NyaXB0aXZhUGFxdWV0ZXMiLCJUaXR1bG9EaXZpc29yIiwiTGluayIsInN0eWxlczIiLCJTZWFyY2hCYXIiLCJDaGVja3VwSW5kZXgiLCJjb250ZW5pZG8iLCJleGFtZW5lcyIsInJlbmRlclRhcmpldGFzIiwicGFxdWV0ZXMiLCJtYXAiLCJwYXF1ZXRlIiwiaW5kZXgiLCJpbWFnZSIsIm5vbWJyZUNhdGVnb3JpYSIsImRlc2NyaXBjaW9uIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiY2hlY2t1cEluZGV4IiwidGl0dWxvIiwiZGl2IiwiZ3JpZFRhcmpldGFzIiwiaHJlZiIsImRsIiwidGFyamV0YURQYXF1ZXRlcyIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiZHQiLCJ0aXR1bG9UYXJqZXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CheckupIndex.jsx\n"));

/***/ })

});