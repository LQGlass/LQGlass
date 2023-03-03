exports.id = 631;
exports.ids = [631];
exports.modules = {

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
	"subtitulo": "Navbar_subtitulo__Zwhxk"
};


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




function DropdownMenu({ titulo  }) {
    const { 0: isPaquetes , 1: setIsPaquetes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (titulo === "Paquetes") {
            setIsPaquetes(true);
        }
    }, []);
    const paquetes = [
        "Check up",
        "Para El",
        "Para Ella",
        "Adulto Mayor",
        "Kids"
    ];
    const categorias = [
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
    const { 0: isVisible , 1: setIsVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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
                                    });
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
                                    });
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
/* unused harmony export getStaticProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LQGIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8995);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1029);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LogButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2459);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6780);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6307);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__]);
([_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getFirestore)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
function Navbar({ paquetes , categories  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cintilla),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tituloCintilla),
                        children: "CDMX y Area Metropolitana | Haz tu cita : 5539847270"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().idiomas),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().flag),
                                src: "/images/flags/mexico.png",
                                alt: "bandera de m\xe9xico"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().flag),
                                src: "/images/flags/united-states.png",
                                alt: "bandera de estados unidos"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().nav),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LQGIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropdownMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        categorias: categories,
                        titulo: "Estudios"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().separador),
                            children: "|"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropdownMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        titulo: "Paquetes",
                        packs: paquetes
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().separador),
                            children: "|"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/promociones",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkNavDiv),
                            children: "Promociones"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().separador),
                            children: "|"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/sucursales",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkNavDiv),
                            children: "Sucursales"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().separador),
                            children: "|"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/blog",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkNavDiv),
                            children: "Blog"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().separador),
                            children: "|"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/nosotros",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkNavDiv),
                            children: "Nosotros"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().separador),
                            children: "|"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/perfil",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkNavDiv),
                            children: "Resultados"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().separador),
                            children: "|"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/perfil",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkNavDiv),
                            children: "Factura"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogButtons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}
const getStaticProps = async ()=>{
    //se declara un array vacio para almacenar los datos
    let categories = [];
    let paquetes = [];
    //se llama a todas las categorias con subcoleccion de examenes
    const collectionRef = collection(db, "categorias");
    const collectionRef2 = collection(db, "grupo-paquetes");
    //se genera un snapshor con todos los documentos
    const snapshot = await getDocs(collectionRef);
    const snapshot2 = await getDocs(collectionRef2);
    //se mapea cada documento para hacer push de
    //sus datos en el array categorias
    snapshot.forEach((doc)=>{
        categories.push(doc.id);
    });
    snapshot2.forEach((doc)=>{
        paquetes.push(doc.id);
    });
    console.log("Hola la funcion esta corriendo");
    return {
        //return the props as "categories"
        props: {
            categories,
            paquetes
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;