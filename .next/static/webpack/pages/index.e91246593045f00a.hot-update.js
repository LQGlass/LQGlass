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

/***/ "./components/CategoryIndex.jsx":
/*!**************************************!*\
  !*** ./components/CategoryIndex.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_Principal_HD_Documentos_Code_LQGlass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Principal_HD_Documentos_Code_LQGlass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Principal_HD_Documentos_Code_LQGlass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/main.module.scss */ \"./styles/main.module.scss\");\n/* harmony import */ var _styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _tarjetaDescriptiva__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tarjetaDescriptiva */ \"./components/tarjetaDescriptiva.jsx\");\n\n\nvar _this = undefined;\n\n\n\n\nfunction getStaticProps() {\n    return _getStaticProps.apply(this, arguments);\n}\nfunction _getStaticProps() {\n    _getStaticProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(D_Principal_HD_Documentos_Code_LQGlass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var tarjetasResponse;\n        return D_Principal_HD_Documentos_Code_LQGlass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetcher)(\"\".concat(\"http://localhost:1337/api\", \"/categorias-de-estudios\"));\n                case 2:\n                    tarjetasResponse = _ctx.sent;\n                    console.log(tarjetasResponse);\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            tarjetas: tarjetasResponse\n                        }\n                    });\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getStaticProps.apply(this, arguments);\n}\nvar CategoryIndex = function(param) {\n    var tarjetas = param.tarjetas;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: (_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().categoryIndex),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"Estudios clinicos para cuidar tu salud.\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Principal HD\\\\Documentos\\\\Code\\\\LQGlass\\\\components\\\\CategoryIndex.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Principal HD\\\\Documentos\\\\Code\\\\LQGlass\\\\components\\\\CategoryIndex.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().gridTarjetas),\n                children: tarjetas.map(function(tarjeta) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: tarjeta.Descripcion\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Principal HD\\\\Documentos\\\\Code\\\\LQGlass\\\\components\\\\CategoryIndex.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, _this)\n                    }, tarjeta.Categoria, false, {\n                        fileName: \"D:\\\\Principal HD\\\\Documentos\\\\Code\\\\LQGlass\\\\components\\\\CategoryIndex.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Principal HD\\\\Documentos\\\\Code\\\\LQGlass\\\\components\\\\CategoryIndex.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Principal HD\\\\Documentos\\\\Code\\\\LQGlass\\\\components\\\\CategoryIndex.jsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this);\n};\n_c = CategoryIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryIndex);\nvar _c;\n$RefreshReg$(_c, \"CategoryIndex\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5SW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFxQztBQUNXO0FBQ007QUFFL0MsU0FBZUcsY0FBYztXQUFkQSxlQUFjO0NBU25DO1NBVHFCQSxlQUFjO0lBQWRBLGVBQWMsR0FBN0IseVBBQStCO1lBQzVCQyxnQkFBZ0I7Ozs7OzJCQUFTSixpREFBTyxDQUFDLEVBQUMsQ0FBcUMsTUFBdUIsQ0FBMURLLDJCQUFrQyxFQUFDLHlCQUF1QixDQUFDLENBQUM7O29CQUFoR0QsZ0JBQWdCLFlBQWdGO29CQUN0R0ksT0FBTyxDQUFDQyxHQUFHLENBQUNMLGdCQUFnQixDQUFDLENBQUM7aURBQ3ZCO3dCQUNITSxLQUFLLEVBQUU7NEJBQ0hDLFFBQVEsRUFBR1AsZ0JBQWdCO3lCQUM5QjtxQkFDSjs7Ozs7O0tBRUo7V0FUcUJELGVBQWM7O0FBYXBDLElBQU1TLGFBQWEsR0FBRyxnQkFBZ0I7UUFBZEQsUUFBUSxTQUFSQSxRQUFRO0lBQzVCLHFCQUdJLDhEQUFDRSxTQUFPO1FBQUNDLFNBQVMsRUFBRWIsK0VBQW9COzswQkFDcEMsOERBQUNlLEtBQUc7MEJBQ0EsNEVBQUNDLElBQUU7OEJBQUMseUNBQXVDOzs7Ozt5QkFBSzs7Ozs7cUJBQzlDOzBCQUNOLDhEQUFDRCxLQUFHO2dCQUFDRixTQUFTLEVBQUViLDhFQUFtQjswQkFHbkNVLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDQyxTQUFBQSxPQUFPO3lDQUNwQiw4REFBQ0osS0FBRztrQ0FDQSw0RUFBQ0ssSUFBRTtzQ0FBRUQsT0FBTyxDQUFDRSxXQUFXOzs7OztpQ0FBTTt1QkFEdkJGLE9BQU8sQ0FBQ0csU0FBUzs7Ozs2QkFHdEI7aUJBQ04sQ0FBQzs7Ozs7cUJBS0s7Ozs7OzthQUNBLENBRVo7Q0FDTDtBQXpCS1gsS0FBQUEsYUFBYTtBQTJCbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhdGVnb3J5SW5kZXguanN4P2UwZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuLi9saWIvYXBpXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9tYWluLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBUYXJqZXRhRGVzY3JpcHRpdmEgZnJvbSBcIi4vdGFyamV0YURlc2NyaXB0aXZhXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAgIGNvbnN0IHRhcmpldGFzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaGVyKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9VUkx9L2NhdGVnb3JpYXMtZGUtZXN0dWRpb3NgKTtcclxuICAgIGNvbnNvbGUubG9nKHRhcmpldGFzUmVzcG9uc2UpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0YXJqZXRhcyA6IHRhcmpldGFzUmVzcG9uc2UsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IENhdGVnb3J5SW5kZXggPSAoe3RhcmpldGFzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeUluZGV4fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj5Fc3R1ZGlvcyBjbGluaWNvcyBwYXJhIGN1aWRhciB0dSBzYWx1ZC48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkVGFyamV0YXN9PlxyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgICAge3RhcmpldGFzLm1hcCh0YXJqZXRhID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9IHt0YXJqZXRhLkNhdGVnb3JpYX0+XHJcbiAgICAgICAgICAgICAgICA8aDM+e3RhcmpldGEuRGVzY3JpcGNpb259PC9oMz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeUluZGV4OyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwic3R5bGVzIiwiVGFyamV0YURlc2NyaXB0aXZhIiwiZ2V0U3RhdGljUHJvcHMiLCJ0YXJqZXRhc1Jlc3BvbnNlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9VUkwiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJ0YXJqZXRhcyIsIkNhdGVnb3J5SW5kZXgiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiY2F0ZWdvcnlJbmRleCIsImRpdiIsImgyIiwiZ3JpZFRhcmpldGFzIiwibWFwIiwidGFyamV0YSIsImgzIiwiRGVzY3JpcGNpb24iLCJDYXRlZ29yaWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CategoryIndex.jsx\n"));

/***/ })

});