"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/perfiles",{

/***/ "./components/PerfilesIndex.jsx":
/*!**************************************!*\
  !*** ./components/PerfilesIndex.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CategoryIndexExpanded_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CategoryIndexExpanded.module.scss */ \"./components/CategoryIndexExpanded.module.scss\");\n/* harmony import */ var _CategoryIndexExpanded_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CategoryIndexExpanded_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var _CasillaPaquete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CasillaPaquete */ \"./components/CasillaPaquete.jsx\");\n/* harmony import */ var _CasillaAnalisis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CasillaAnalisis */ \"./components/CasillaAnalisis.jsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar PerfilesIndex = function(param) {\n    var perfiles = param.perfiles;\n    console.log(perfiles);\n    var renderTarjetas = function(perfiles) {\n        return perfiles.map(function(perfil, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CasillaPaquete__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                image: \"./images/iconos-categoria/Coagulaci\\xf3n.png\",\n                nombreCategoria: perfil ? perfil.Nombre : \"Cargando\",\n                descripcion: perfil ? perfil.Descripcion : \"Cargando\"\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\PerfilesIndex.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\PerfilesIndex.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CategoryIndexExpanded_module_scss__WEBPACK_IMPORTED_MODULE_6___default().analisisSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CategoryIndexExpanded_module_scss__WEBPACK_IMPORTED_MODULE_6___default().nameBox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"perfiles\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\PerfilesIndex.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_CategoryIndexExpanded_module_scss__WEBPACK_IMPORTED_MODULE_6___default().lineaSubrayado)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\PerfilesIndex.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\PerfilesIndex.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    perfiles.map(function(el) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CasillaAnalisis__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            nombre: el.nombre,\n                            descripcion: el.descripcion,\n                            precio: el.precio,\n                            categoria: el.categoria\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\PerfilesIndex.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\PerfilesIndex.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\PerfilesIndex.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yerif\\\\Documents\\\\ProyectosCode\\\\laboratoriosglass\\\\LQGlass\\\\components\\\\PerfilesIndex.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_c = PerfilesIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PerfilesIndex);\nvar _c;\n$RefreshReg$(_c, \"PerfilesIndex\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BlcmZpbGVzSW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlEO0FBQzNCO0FBQ2dCO0FBQ0U7QUFDbEI7QUFDRztBQUNqQyxJQUFNTSxhQUFhLEdBQUcsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTtJQUMvQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLElBQU1HLGNBQWMsR0FBR0gsU0FBQUEsUUFBUSxFQUFJO1FBQ2pDLE9BQU9BLFFBQVEsQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLE1BQU0sRUFBRUMsS0FBSztpQ0FDaEMsOERBQUNYLHVEQUFjO2dCQUViWSxLQUFLLEVBQUUsOENBQTJDO2dCQUNsREMsZUFBZSxFQUFFSCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0ksTUFBTSxHQUFHLFVBQVU7Z0JBQ3BEQyxXQUFXLEVBQUVMLE1BQU0sR0FBR0EsTUFBTSxDQUFDTSxXQUFXLEdBQUcsVUFBVTtlQUhoREwsS0FBSzs7OztxQkFJVjtTQUNILENBQUMsQ0FBQztLQUNKO0lBQ0QscUJBQ0UsOERBQUNSLDJDQUFROzswQkFDUCw4REFBQ0osK0NBQU07Ozs7cUJBQUc7MEJBQ1YsOERBQUNrQixLQUFHO2dCQUFDQyxTQUFTLEVBQUVwQiwyRkFBc0I7O2tDQUNwQyw4REFBQ21CLEtBQUc7d0JBQUNDLFNBQVMsRUFBRXBCLG1GQUFjOzswQ0FDNUIsOERBQUN1QixJQUFFOzBDQUFDLFVBQVE7Ozs7O3FDQUFLOzBDQUNqQiw4REFBQ0osS0FBRztnQ0FBQ0MsU0FBUyxFQUFFcEIsMEZBQXFCOzs7OztxQ0FBUTs7Ozs7OzZCQUN6QztvQkFDTE8sUUFBUSxDQUFDSSxHQUFHLENBQUNjLFNBQUFBLEVBQUUsRUFBSTt3QkFDbEIscUJBQ0UsOERBQUN0Qix3REFBZTs0QkFDZHVCLE1BQU0sRUFBRUQsRUFBRSxDQUFDQyxNQUFNOzRCQUNqQlQsV0FBVyxFQUFFUSxFQUFFLENBQUNSLFdBQVc7NEJBQzNCVSxNQUFNLEVBQUVGLEVBQUUsQ0FBQ0UsTUFBTTs0QkFDakJDLFNBQVMsRUFBRUgsRUFBRSxDQUFDRyxTQUFTOzs7OztpQ0FDdkIsQ0FDRjtxQkFDSCxDQUFDOzs7Ozs7cUJBQ0U7MEJBQ04sOERBQUN4QiwrQ0FBTTs7OztxQkFBRzs7Ozs7O2FBQ0QsQ0FDWDtDQUNIO0FBbENLRSxLQUFBQSxhQUFhO0FBb0NuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGVyZmlsZXNJbmRleC5qc3g/M2EyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhdGVnb3J5SW5kZXhFeHBhbmRlZC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgQ2FzaWxsYVBhcXVldGUgZnJvbSBcIi4vQ2FzaWxsYVBhcXVldGVcIjtcclxuaW1wb3J0IENhc2lsbGFBbmFsaXNpcyBmcm9tIFwiLi9DYXNpbGxhQW5hbGlzaXNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgUGVyZmlsZXNJbmRleCA9ICh7IHBlcmZpbGVzIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhwZXJmaWxlcyk7XHJcbiAgY29uc3QgcmVuZGVyVGFyamV0YXMgPSBwZXJmaWxlcyA9PiB7XHJcbiAgICByZXR1cm4gcGVyZmlsZXMubWFwKChwZXJmaWwsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxDYXNpbGxhUGFxdWV0ZVxyXG4gICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgaW1hZ2U9e1wiLi9pbWFnZXMvaWNvbm9zLWNhdGVnb3JpYS9Db2FndWxhY2nDs24ucG5nXCJ9XHJcbiAgICAgICAgbm9tYnJlQ2F0ZWdvcmlhPXtwZXJmaWwgPyBwZXJmaWwuTm9tYnJlIDogXCJDYXJnYW5kb1wifVxyXG4gICAgICAgIGRlc2NyaXBjaW9uPXtwZXJmaWwgPyBwZXJmaWwuRGVzY3JpcGNpb24gOiBcIkNhcmdhbmRvXCJ9XHJcbiAgICAgIC8+XHJcbiAgICApKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbmFsaXNpc1NlY3Rpb259PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZUJveH0+XHJcbiAgICAgICAgICA8aDE+cGVyZmlsZXM8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lYVN1YnJheWFkb30+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3BlcmZpbGVzLm1hcChlbCA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q2FzaWxsYUFuYWxpc2lzXHJcbiAgICAgICAgICAgICAgbm9tYnJlPXtlbC5ub21icmV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcGNpb249e2VsLmRlc2NyaXBjaW9ufVxyXG4gICAgICAgICAgICAgIHByZWNpbz17ZWwucHJlY2lvfVxyXG4gICAgICAgICAgICAgIGNhdGVnb3JpYT17ZWwuY2F0ZWdvcmlhfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcmZpbGVzSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJOYXZiYXIiLCJDYXNpbGxhUGFxdWV0ZSIsIkNhc2lsbGFBbmFsaXNpcyIsIkZvb3RlciIsIkZyYWdtZW50IiwiUGVyZmlsZXNJbmRleCIsInBlcmZpbGVzIiwiY29uc29sZSIsImxvZyIsInJlbmRlclRhcmpldGFzIiwibWFwIiwicGVyZmlsIiwiaW5kZXgiLCJpbWFnZSIsIm5vbWJyZUNhdGVnb3JpYSIsIk5vbWJyZSIsImRlc2NyaXBjaW9uIiwiRGVzY3JpcGNpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJhbmFsaXNpc1NlY3Rpb24iLCJuYW1lQm94IiwiaDEiLCJsaW5lYVN1YnJheWFkbyIsImVsIiwibm9tYnJlIiwicHJlY2lvIiwiY2F0ZWdvcmlhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PerfilesIndex.jsx\n"));

/***/ })

});