exports.id = 631;
exports.ids = [631];
exports.modules = {

/***/ 4742:
/***/ ((module) => {

// Exports
module.exports = {
	"burger-menu": "BurgerMenu_burger-menu__09_Da",
	"btn": "BurgerMenu_btn__tjF_X",
	"menu": "BurgerMenu_menu__VHqjQ",
	"linkNavDiv": "BurgerMenu_linkNavDiv__7uHUj",
	"linksMenu": "BurgerMenu_linksMenu__M3tZi"
};


/***/ }),

/***/ 6526:
/***/ ((module) => {

// Exports
module.exports = {
	"logIn": "LogButton_logIn__TT_Ry",
	"signIn": "LogButton_signIn__lQClr",
	"logButtons": "LogButton_logButtons__On7K2"
};


/***/ }),

/***/ 1029:
/***/ ((module) => {

// Exports
module.exports = {
	"cintilla": "Navbar_cintilla__fIMxV",
	"tituloCintilla": "Navbar_tituloCintilla__JBhHe",
	"idiomas": "Navbar_idiomas___XDTq",
	"flag": "Navbar_flag__21KM0",
	"nav": "Navbar_nav__nF_Ic",
	"linkNavDiv": "Navbar_linkNavDiv__mMzBD",
	"logo": "Navbar_logo__SneI_",
	"separador": "Navbar_separador__1REt6",
	"dropMenuWrapper": "Navbar_dropMenuWrapper__8wwJ7",
	"dropDownMenu": "Navbar_dropDownMenu__2y8MP",
	"menu": "Navbar_menu__EmUVg",
	"subtitulo": "Navbar_subtitulo__Zwhxk",
	"logButtons": "Navbar_logButtons__fH206"
};


/***/ }),

/***/ 1046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6780);
/* harmony import */ var _BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4742);
/* harmony import */ var _BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6865);
/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8582);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8789);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LogButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2459);










function ResponsiveExample({ categorias , paquetes  }) {
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        div: true,
        className: (_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().btn),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: "d-lg-none",
                onClick: handleShow,
                children: "Menu"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_4___default()), {
                className: (_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuLateral),
                show: show,
                onHide: handleClose,
                responsive: "lg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_4___default().Header), {
                        closeButton: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_4___default().Title), {
                            children: "Menu"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_4___default().Body), {
                        className: "d-lg-none",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menu),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                            children: "Inicio"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        variant: "dark",
                                        id: "dropdown-basic-button",
                                        title: "Categorias",
                                        size: "lg",
                                        children: categorias && categorias.map((categoria)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: `//${categoria}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: handleClose,
                                                    className: (_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linksMenu),
                                                    children: categoria
                                                })
                                            }, categoria);
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        variant: "dark",
                                        id: "dropdown-basic-button",
                                        title: "Paquetes",
                                        size: "lg",
                                        children: paquetes && paquetes.map((paquete)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: `/grupo-paquetes/${paquete}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: handleClose,
                                                    className: (_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linksMenu),
                                                    children: paquete
                                                })
                                            }, paquete);
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/promociones",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                            children: "Promociones"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/sucursales",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                            children: "Sucursales"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/blog",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/nosotros",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                            children: "Nosotros"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/perfil",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                            children: "Resultados"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/perfil",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                            children: "Factura"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogButtons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveExample);


/***/ }),

/***/ 6780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1029);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function DropdownMenu({ titulo , packs , categories  }) {
    const { 0: isPaquetes , 1: setIsPaquetes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isVisible , 1: setIsVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (titulo === "Paquetes") {
            setIsPaquetes(true);
        }
    }, []);
    const paquetes = packs ? [
        ...packs
    ] : [
        "No hay paquetes disponibles"
    ];
    const categorias = categories ? [
        ...categories
    ] : [
        "No hay categorias disponibles"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dropMenuWrapper),
        onMouseEnter: ()=>setIsVisible(true),
        onMouseLeave: ()=>setIsVisible(false),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().linkNavDiv),
                children: titulo
            }),
            isVisible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dropDownMenu),
                children: [
                    !isPaquetes && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().subtitulo),
                        children: "Categorias"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().DropdownMenu),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            children: [
                                isPaquetes && paquetes.map((paquete)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `/grupo-paquetes/${paquete}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: paquete
                                        })
                                    }, paquete);
                                }),
                                isPaquetes && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/perfiles`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Perfiles"
                                    })
                                }),
                                !isPaquetes && categorias.map((categoria)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `//${categoria}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: categoria
                                        })
                                    }, categoria);
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownMenu);


/***/ }),

/***/ 2459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LogButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6526);
/* harmony import */ var _LogButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LogButton_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const LogButtons = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "logButtons",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/perfil",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_LogButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().logIn),
                children: "Iniciar Sesion"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogButtons);


/***/ }),

/***/ 5631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LQGIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8995);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1029);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LogButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2459);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6780);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6307);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1492);
/* harmony import */ var _BurgerMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1046);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__]);
([_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getFirestore)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
function Navbar() {
    const paquetes = [
        "Para El",
        "Para Ella",
        "Kids",
        "Check up",
        "Adulto Mayor"
    ];
    const categories = [
        "Biolog\xeda molecular",
        "COVID",
        "Coagulaci\xf3n",
        "Coprolog\xeda",
        "Endocrinolog\xeda (hormonas)",
        "Hematolog\xeda",
        "Inmunolog\xeda-serolog\xeda",
        "Microbiolog\xeda",
        "Parasitolog\xeda",
        "Patolog\xeda",
        "Pruebas especiales",
        "Qu\xedmica cl\xednica-Bioqu\xedmica",
        "Toxicolog\xeda",
        "Uroan\xe1lisis", 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().cintilla),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tituloCintilla),
                        children: "CDMX y Area Metropolitana | Haz tu cita : 55 4672 2581 \xf3 55 5562 5267"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().idiomas),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().flag),
                                src: "/images/flags/mexico.png",
                                alt: "bandera de m\xe9xico"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().flag),
                                src: "/images/flags/united-states.png",
                                alt: "bandera de estados unidos"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().nav),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LQGIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BurgerMenu__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        categorias: categories,
                        paquetes: paquetes
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menu),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropdownMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                categorias: categories,
                                titulo: "Estudios"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().separador),
                                    children: "|"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropdownMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                titulo: "Paquetes",
                                packs: paquetes
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().separador),
                                    children: "|"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/promociones",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                    children: "Promociones"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().separador),
                                    children: "|"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/sucursales",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                    children: "Sucursales"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().separador),
                                    children: "|"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/blog",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().separador),
                                    children: "|"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/nosotros",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                    children: "Nosotros"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().separador),
                                    children: "|"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/perfil",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                    children: "Resultados"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().separador),
                                    children: "|"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/perfil",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkNavDiv),
                                    children: "Factura"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().logButtons),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogButtons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;