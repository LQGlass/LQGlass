(() => {
var exports = {};
exports.id = 20;
exports.ids = [20];
exports.modules = {

/***/ 4815:
/***/ ((module) => {

// Exports
module.exports = {
	"formularioFacturas": "FormularioFacturas_formularioFacturas__J5OKf",
	"direccion": "FormularioFacturas_direccion__pssCm"
};


/***/ }),

/***/ 3023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ perfil_facturacion)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__(6124);
// EXTERNAL MODULE: ./components/FormularioFacturas.module.scss
var FormularioFacturas_module = __webpack_require__(4815);
var FormularioFacturas_module_default = /*#__PURE__*/__webpack_require__.n(FormularioFacturas_module);
;// CONCATENATED MODULE: ./components/FormularioFacturas.jsx


function FormularioFacturas() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (FormularioFacturas_module_default()).formularioFacturas,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Rellena el formulario para poder enviar la factura ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " a el correo electr\xf3nico con el que iniciaste sesion."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                action: "/perfil",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        name: "rfc",
                        id: "rfc",
                        placeholder: "RFC"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        name: "name",
                        id: "name",
                        placeholder: "Nombre"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        name: "apellidos",
                        id: "apellidos",
                        placeholder: "Apellidos"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "radio",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                id: "fisica",
                                name: "razon-social",
                                value: "Persona F\xedsica"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "fisica",
                                children: "Persona Fisica"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                id: "moral",
                                name: "razon-social",
                                value: "Persona Moral"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "moral",
                                children: "Persona Moral"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (FormularioFacturas_module_default()).direccion,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "calle",
                                id: "calle",
                                placeholder: "Calle y numero"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "Colonia",
                                id: "Colonia",
                                placeholder: "Colonia"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "codigopostal",
                                id: "codigopostal",
                                placeholder: "C\xf3digo postal"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "municipio",
                                id: "municipio",
                                placeholder: "Municipio/Delegaci\xf3n"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        name: "cfdi",
                        id: "cfdi",
                        placeholder: "Uso de CFDI"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        children: "Enviar"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_FormularioFacturas = (FormularioFacturas);

// EXTERNAL MODULE: ./components/Navbar.jsx + 1 modules
var Navbar = __webpack_require__(7102);
;// CONCATENATED MODULE: ./pages/perfil/facturacion.jsx





function facturacion() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_FormularioFacturas, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
}
/* harmony default export */ const perfil_facturacion = (facturacion);


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,102,124], () => (__webpack_exec__(3023)));
module.exports = __webpack_exports__;

})();