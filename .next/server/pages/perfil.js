(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 3858:
/***/ ((module) => {

// Exports
module.exports = {
	"formFolios": "DatosPerfil_formFolios__TVYnm",
	"foliosList": "DatosPerfil_foliosList___025n",
	"deleteBtn": "DatosPerfil_deleteBtn__fmVSx"
};


/***/ }),

/***/ 7698:
/***/ ((module) => {

// Exports
module.exports = {
	"facturas": "FacturasPerfil_facturas__R2WSZ"
};


/***/ }),

/***/ 8373:
/***/ ((module) => {

// Exports
module.exports = {
	"logComponent": "IniciarSesionForm_logComponent__7hiNA",
	"forget": "IniciarSesionForm_forget__nZP6A",
	"signButton": "IniciarSesionForm_signButton__sYRsQ"
};


/***/ }),

/***/ 3248:
/***/ ((module) => {

// Exports
module.exports = {
	"perfil": "MenuPerfil_perfil__CPmqg",
	"datosPerfil": "MenuPerfil_datosPerfil__GE5J2",
	"menuPerfil": "MenuPerfil_menuPerfil__7HAQF",
	"menuOptions": "MenuPerfil_menuOptions__L0Kxo",
	"navMenuPerfil": "MenuPerfil_navMenuPerfil__mBrug"
};


/***/ }),

/***/ 5283:
/***/ ((module) => {

// Exports
module.exports = {
	"upload": "ResultadosPerfil_upload__D_nfg",
	"customFileUpload": "ResultadosPerfil_customFileUpload__5g2R4"
};


/***/ }),

/***/ 5136:
/***/ ((module) => {

// Exports
module.exports = {
	"tabla": "TableDocuments_tabla__P3kow"
};


/***/ }),

/***/ 5254:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DatosPerfil)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6307);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DatosPerfil_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3858);
/* harmony import */ var _DatosPerfil_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DatosPerfil_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
//Componente para mostrar en pantalla los datos del usuario desde firestore
function DatosPerfil({ perfil  }) {
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: folio , 1: setFolio  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    //Se llama a la database firestore desde el hook para evitar que se renderize multiples veces
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        //funcion para llamar los datos desde firestore
        async function getData() {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "users", perfil.uid);
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);
            if (docSnap.exists) {
                console.log("Document data:", docSnap.data());
                //se actualiza el estado con la informacion obtenida.
                setUser(docSnap.data());
            } else {
                console.log("No such document!");
            }
        }
        getData();
    }, [
        perfil.uid,
        user.folio
    ]);
    const foliosHandler = (e)=>{
        e.preventDefault();
        console.log(folio);
        if (user.folios && user.folios.length >= 5) {
            alert("No se pueden usar mas de 5 folios a la vez, favor de eliminar uno");
        } else if (folio.length > 2) {
            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "users", perfil.uid);
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(userRef, {
                folios: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.arrayUnion)(folio)
            }).then(()=>{
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(userRef).then((docSnap)=>{
                    if (docSnap.exists) {
                        setUser((prevState)=>({
                                ...prevState,
                                folios: docSnap.data().folios
                            }));
                    }
                });
            });
            setFolio("");
        } else {
            alert("El folio debe ser un n\xfamero de m\xe1s de 3 digitos.");
        }
    };
    const deleteFolio = (folioToRemove)=>{
        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "users", perfil.uid);
        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(userRef, {
            folios: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.arrayRemove)(folioToRemove)
        }).then(()=>{
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(userRef).then((docSnap)=>{
                if (docSnap.exists) {
                    setUser((prevState)=>({
                            ...prevState,
                            folios: docSnap.data().folios
                        }));
                }
            });
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Datos del Perfil"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "datosWrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "Correo:"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: user && user.email
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "Nombre:"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: user && user.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "Apellidos:"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: user && user.last
                    }),
                    !user.doctor ? user && user.folios ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                        className: (_DatosPerfil_module_scss__WEBPACK_IMPORTED_MODULE_4___default().foliosList),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Folios:"
                                })
                            }),
                            user.folios.map((el)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        el,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_DatosPerfil_module_scss__WEBPACK_IMPORTED_MODULE_4___default().deleteBtn),
                                            onClick: ()=>deleteFolio(el),
                                            children: "X"
                                        })
                                    ]
                                }, el))
                        ]
                    }) : "No se han ingresado folios" : null
                ]
            }),
            !user.doctor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_DatosPerfil_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formFolios),
                onSubmit: foliosHandler,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "folios",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "Ingresar nuevo folio:"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "folios",
                        value: folio,
                        onChange: (e)=>setFolio(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_DatosPerfil_module_scss__WEBPACK_IMPORTED_MODULE_4___default().folioBtn),
                        children: "A\xf1adir"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FacturasPerfil)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6307);
/* harmony import */ var _FacturasPerfil_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7698);
/* harmony import */ var _FacturasPerfil_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FacturasPerfil_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);


const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);

function FacturasPerfil({ user  }) {
    const { 0: facturas , 1: setFacturas  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    console.log(user.email);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function getData() {
            let facturasRecibidas = [];
            //funcion para llamar los datos desde firestore
            const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, "facturas-solicitadas"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)("email", "==", user.email));
            //se genera un snapshor con todos los documentos
            const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(collectionRef);
            //se mapea cada documento para hacer push de
            //sus datos en el array categorias
            snapshot.forEach((doc)=>{
                facturasRecibidas.unshift(doc.data());
            });
            setFacturas(facturasRecibidas);
        }
        getData();
        console.log("Facturas", facturas);
    }, [
        user
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Facturas"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    children: "En este lugar ver\xe1s tus facturas cuando est\xe9n disponibles"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Recuerda que el correo con el que te registres debe ser el mismo que proporcionaste el dia de tus estudios."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Y puedes ir a la seccion de formulario de facturacion en el men\xfa para solicitar tus facturas."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_FacturasPerfil_module_scss__WEBPACK_IMPORTED_MODULE_5___default().facturas),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        children: "Ticket"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        children: "Fecha de subida"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        children: "Archivo"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            children: facturas ? facturas.map((el)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.ticket
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.uploadDate
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: el.url,
                                                children: "Ver"
                                            }) : "No disponible a\xfan"
                                        })
                                    ]
                                }, el.ticket)) : null
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IniciarSesionForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8373);
/* harmony import */ var _IniciarSesionForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_IniciarSesionForm_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6307);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);

const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getFirestore)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
function IniciarSesionForm() {
    const { 0: isRegistering , 1: setIsRegistering  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: Logged , 1: setLogged  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    async function registerUser(user, correo, name, lname) {
        if (!user || !user.uid) {
            console.error("User ID not found");
            return;
        }
        if (!name || !lname || !correo) {
            console.error("Invalid user information");
            return;
        }
        try {
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(db, "users", user.uid), {
                name: name,
                last: lname,
                id: user.uid,
                email: correo
            });
            console.log("Document written with ID: ", user.uid);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    function passwordRecoverHandler(e) {
        e.preventDefault();
        sendPasswordResetEmail(auth, email).then(()=>{
            // Password reset email sent!
            location.reload();
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
        // ..
        });
    }
    async function submitHandler(e) {
        e.preventDefault();
        const correo = document.getElementById("formCorreo").value;
        const contra = e.target.formContra.value;
        if (!correo || correo.trim() === "") {
            alert("Por favor ingresa tu correo.");
            return;
        }
        if (!contra || contra.trim() === "") {
            alert("Por favor ingresa tu contrase\xf1a.");
            return;
        }
        try {
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithEmailAndPassword)(auth, correo, contra);
            setLogged(true);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === "auth/user-not-found") {
                alert("No se encontr\xf3 un usuario con este correo electr\xf3nico.");
            } else if (errorCode === "auth/wrong-password") {
                alert("La contrase\xf1a ingresada es incorrecta.");
            } else {
                alert(errorMessage);
            }
            setLogged(false);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
        className: (_IniciarSesionForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logComponent),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: isRegistering ? "Registrate" : "Iniciar Sesi\xf3n"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form, {
                onSubmit: submitHandler,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                        controlId: "formCorreo",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                children: "Correo"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
                                type: "email",
                                placeholder: "Ingresa tu correo"
                            })
                        ]
                    }),
                    isRegistering === true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                controlId: "formName",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                        children: "Nombre"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
                                        type: "text",
                                        placeholder: "Nombre"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                controlId: "formLName",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                        children: "Apellidos"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
                                        type: "text",
                                        placeholder: "Apellidos"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                        controlId: "formContra",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                children: "Contrase\xf1a"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
                                type: "password",
                                placeholder: "Contrase\xf1a"
                            })
                        ]
                    }),
                    isRegistering === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                            controlId: "formContraDos",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                    children: "Repetir contrase\xf1a"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
                                    type: "password",
                                    placeholder: "Contrase\xf1a"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        className: (_IniciarSesionForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().signButton),
                        style: {
                            width: "300px",
                            display: "block"
                        },
                        type: "submit",
                        children: isRegistering ? "Registrate" : "Inicia Sesi\xf3n"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        onClick: ()=>setIsRegistering(!isRegistering),
                        variant: "secondary",
                        style: {
                            width: "300px",
                            display: "block"
                        },
                        children: isRegistering ? "\xbfYa tienes cuenta? Inicia Sesi\xf3n" : "\xbfNo tienes cuenta? Registrate"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_IniciarSesionForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().forget),
                        onClick: passwordRecoverHandler,
                        children: "\xbfOlvidaste la contrase\xf1a?"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IniciarSesionForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2035:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3248);
/* harmony import */ var _MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6307);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1492);
/* harmony import */ var _FormularioFacturas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4692);
/* harmony import */ var _DatosPerfil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5254);
/* harmony import */ var _ResultadosPerfil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9759);
/* harmony import */ var _FacturasPerfil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(415);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _FormularioFacturas__WEBPACK_IMPORTED_MODULE_5__, _DatosPerfil__WEBPACK_IMPORTED_MODULE_6__, _ResultadosPerfil__WEBPACK_IMPORTED_MODULE_7__, _FacturasPerfil__WEBPACK_IMPORTED_MODULE_8__]);
([_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _FormularioFacturas__WEBPACK_IMPORTED_MODULE_5__, _DatosPerfil__WEBPACK_IMPORTED_MODULE_6__, _ResultadosPerfil__WEBPACK_IMPORTED_MODULE_7__, _FacturasPerfil__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Importa el archivo de estilos de este componente


// Importa la función useState de React

// Importa la configuración de Firebase

// Importa las funciones getAuth y signOut de la biblioteca de Firebase


// Importa los componentes FormularioFacturas, DatosPerfil y ResultadosPerfil




const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
// Obtiene el objeto de autenticación de Firebase
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
// Declara la función MenuPerfil
function MenuPerfil({ data  }) {
    // Establece el estado inicial de los componentes a mostrar
    const { 0: dataProfile , 1: setDataProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: resultsProfile , 1: setResultsProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: facturationProfile , 1: setFacturationProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: facturasProfile , 1: setFacturasProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isDoctor , 1: setIsDoctor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //funcion para llamar los datos desde firestore
        async function getData() {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(db, "users", data.uid);
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);
            if (docSnap.exists) {
                console.log("Document data:", docSnap.data());
                //se actualiza el estado con la informacion obtenida.
                setUser(docSnap.data());
                setIsDoctor(docSnap.data().doctor);
            } else {
                console.log("No such document!");
            }
        }
        getData();
    }, [
        data.uid
    ]);
    console.log(isDoctor);
    // Renderiza el menú y los componentes seleccionados
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9___default().perfil),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuPerfil),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuOptions),
                            onClick: ()=>{
                                setDataProfile(true);
                                setResultsProfile(false);
                                setFacturationProfile(false);
                                setFacturasProfile(false);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "./images/iconos-ui/corazon-pc.png",
                                    width: 50,
                                    height: 50,
                                    alt: ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Datos del Perfil"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuOptions),
                            onClick: ()=>{
                                setDataProfile(false);
                                setResultsProfile(true);
                                setFacturationProfile(false);
                                setFacturasProfile(false);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "./images/iconos-ui/resultados.png",
                                    width: 50,
                                    height: 50,
                                    alt: ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: isDoctor ? "Subir Resultados" : "Resultados"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuOptions),
                            onClick: ()=>{
                                setDataProfile(false);
                                setResultsProfile(false);
                                setFacturationProfile(true);
                                setFacturasProfile(false);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "./images/iconos-ui/solicitar-facturas.png",
                                    width: 50,
                                    height: 50,
                                    alt: ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: isDoctor ? "Subir factura" : "Solicitar factura"
                                })
                            ]
                        }),
                        !isDoctor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuOptions),
                                onClick: ()=>{
                                    setDataProfile(false);
                                    setResultsProfile(false);
                                    setFacturationProfile(false);
                                    setFacturasProfile(true);
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "./images/iconos-ui/facturacion.png",
                                        width: 50,
                                        height: 50,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Facturas"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9___default().datosPerfil),
                        children: [
                            dataProfile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DatosPerfil__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                perfil: data
                            }),
                            resultsProfile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ResultadosPerfil__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                perfil: user
                            }),
                            facturationProfile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormularioFacturas__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                user: user
                            }),
                            facturasProfile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FacturasPerfil__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                user: user
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPerfil);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8255:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MisResultados)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TableDocuments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8702);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6307);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
function MisResultados({ folios , user  }) {
    const { 0: resultados , 1: setresultados  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function getData() {
            let resultados = [];
            //funcion para llamar los datos desde firestore
            folios.forEach(async (element)=>{
                const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(db, "resultados"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("folio", "==", element), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("email", "==", user.email));
                //se genera un snapshor con todos los documentos
                const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(collectionRef);
                //se mapea cada documento para hacer push de
                //sus datos en el array categorias
                snapshot.forEach((doc)=>{
                    resultados.unshift(doc.data());
                });
            });
            setresultados(resultados);
        }
        getData();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Mis Resultados"
            }),
            resultados && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TableDocuments__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                documents: resultados
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9759:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ResultadosPerfil)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6307);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
/* harmony import */ var _ResultadosPerfil_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5283);
/* harmony import */ var _ResultadosPerfil_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ResultadosPerfil_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1492);
/* harmony import */ var _TableDocuments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8702);
/* harmony import */ var _MisResultados__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8255);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _MisResultados__WEBPACK_IMPORTED_MODULE_6__]);
([_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _MisResultados__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);



const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
function ResultadosPerfil({ perfil  }) {
    const { 0: file , 1: setFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: pdfArr , 1: setPdfArr  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const d = new Date();
    const month = d.toLocaleString("es-US", {
        month: "long"
    });
    const year = d.getFullYear();
    const monthNum = d.getMonth();
    console.log(pdfArr);
    console.log(perfil);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function getData() {
            let resultados = [];
            //funcion para llamar los datos desde firestore
            const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, "resultados"));
            //se genera un snapshor con todos los documentos
            const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(collectionRef);
            //se mapea cada documento para hacer push de
            //sus datos en el array categorias
            snapshot.forEach((doc)=>{
                resultados.push(doc.data());
            });
            setPdfArr(resultados);
        }
        getData();
    }, []);
    const uploadFile = async (document1, folio)=>{
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `resultados/${year}/${month}/${folio}`);
        await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(storageRef, document1).then((snapshot)=>{
            console.log(snapshot);
        });
        const url = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(storageRef).then((url)=>{
            console.log(url);
            return url;
        });
        return url;
    };
    const submitHandler = async (e)=>{
        e.preventDefault();
        let folio = e.target.folio.value;
        let email = e.target.email.value;
        let size = file.size;
        if (folio < 3 || email == "") {
            alert("Ingrese un folio mayor a 3 digitos y un correo valido");
            return;
        }
        if (size > 1000000) {
            alert("El tama\xf1o del archivo debe ser menor a 1 MB");
            return;
        }
        console.log(folio);
        console.log(file);
        if (file) {
            const uri = await uploadFile(file, folio);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(db, "resultados", year + "-" + monthNum + "-" + folio), {
                name: file.name,
                folio: folio,
                email: email,
                subido: perfil.name + " " + perfil.last,
                url: uri,
                uploadDate: d.getDate() + "/" + monthNum + "/" + year
            }).then(setPdfArr((prevState)=>[
                    {
                        name: file.name,
                        folio: folio,
                        email: email,
                        subido: perfil.name + " " + perfil.last,
                        url: uri,
                        uploadDate: d.getDate() + "/" + monthNum + "/" + year
                    },
                    ...prevState, 
                ]));
        }
        document.getElementById("fileInput").value = "";
        e.target.folio.value = "";
        e.target.email.value = "";
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: perfil.doctor ? "Subir resultados" : "Resultados"
            }),
            !perfil.doctor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "En este lugar ver\xe1s tus resultados cuando est\xe9n disponibles"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Recuerda que el correo con el que te registres debe ser el mismo que proporcionaste el dia de tus estudios."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Y puedes ir a la seccion de datos de perfil para agregar tus folios."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MisResultados__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        folios: perfil.folios,
                        user: perfil
                    })
                ]
            }),
            perfil.doctor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: (_ResultadosPerfil_module_scss__WEBPACK_IMPORTED_MODULE_7___default().upload),
                        onSubmit: submitHandler,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                for: "fileInput",
                                className: (_ResultadosPerfil_module_scss__WEBPACK_IMPORTED_MODULE_7___default().customFileUpload),
                                children: "Seleccionar Archivo PDF"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "fileInput",
                                type: "file",
                                onChange: (e)=>setFile(e.target.files[0])
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Si el archivo es mayor a 1 MB se recomienda comprimirlo en el siguiente enlace ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        href: "https://www.ilovepdf.com/es/comprimir_pdf",
                                        children: "Comprimir"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "folio",
                                children: "Folio:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "folio",
                                type: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "email",
                                children: "Correo del cliente:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "email",
                                type: "email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                children: "Subir"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TableDocuments__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            documents: pdfArr
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TableDocuments)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TableDocuments_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5136);
/* harmony import */ var _TableDocuments_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TableDocuments_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function TableDocuments({ documents  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_TableDocuments_module_scss__WEBPACK_IMPORTED_MODULE_1___default().tabla),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        children: "folio"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        children: "Subido por"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        children: "Email cliente"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        children: "Fecha de subida"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        children: "Archivo"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: documents && documents.map((el)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: el.folio
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: el.subido
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: el.email
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: el.uploadDate
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            target: "_blank",
                                            href: el.url,
                                            children: "Ver"
                                        })
                                    })
                                ]
                            }))
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 2647:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3248);
/* harmony import */ var _components_MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_IniciarSesionForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9225);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6307);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(401);
/* harmony import */ var _components_MenuPerfil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2035);
/* harmony import */ var _components_LQGIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8995);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6124);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_IniciarSesionForm__WEBPACK_IMPORTED_MODULE_2__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__, _components_MenuPerfil__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__]);
([_components_IniciarSesionForm__WEBPACK_IMPORTED_MODULE_2__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__, _components_MenuPerfil__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);

const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getFirestore)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
function perfil() {
    const { 0: usuario , 1: setUsuario  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(auth, (usuarioFirebase)=>{
        if (usuarioFirebase) {
            setUsuario(usuarioFirebase);
        } else {
            setUsuario(null);
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: (_components_MenuPerfil_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navMenuPerfil),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LQGIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    usuario && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(auth),
                        children: "Cerrar Sesi\xf3n"
                    })
                ]
            }),
            usuario ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MenuPerfil__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                data: usuario
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_IniciarSesionForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (perfil);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,684,124,692], () => (__webpack_exec__(2647)));
module.exports = __webpack_exports__;

})();