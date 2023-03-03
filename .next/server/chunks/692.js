exports.id = 692;
exports.ids = [692];
exports.modules = {

/***/ 4815:
/***/ ((module) => {

// Exports
module.exports = {
	"formularioFacturas": "FormularioFacturas_formularioFacturas__J5OKf",
	"direccion": "FormularioFacturas_direccion__pssCm",
	"radio": "FormularioFacturas_radio__ElBHc"
};


/***/ }),

/***/ 277:
/***/ ((module) => {

// Exports
module.exports = {
	"facturasInput": "IngresarFacturas_facturasInput__mER15",
	"customFileUpload": "IngresarFacturas_customFileUpload__87D1y"
};


/***/ }),

/***/ 8401:
/***/ ((module) => {

// Exports
module.exports = {
	"facturasWrapper": "TablaFacturas_facturasWrapper__FTX9c",
	"facturas": "TablaFacturas_facturas___zflG"
};


/***/ }),

/***/ 4692:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormularioFacturas_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4815);
/* harmony import */ var _FormularioFacturas_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FormularioFacturas_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6307);
/* harmony import */ var _IngresarFacturas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__, _IngresarFacturas__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__, _IngresarFacturas__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
function FormularioFacturas({ user  }) {
    const d = new Date();
    const month = d.toLocaleString("es-US", {
        month: "long"
    });
    const year = d.getFullYear();
    const monthNum = d.getMonth();
    const { 0: solicitadas , 1: setSolicitadas  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: ticket , 1: setticket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const isDoctor = user.doctor;
    console.log(solicitadas);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function getData() {
            let facturasSolicitadas = [];
            //funcion para llamar los datos desde firestore
            const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, "facturas-solicitadas"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)("email", "==", user.email));
            //se genera un snapshor con todos los documentos
            const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(collectionRef);
            //se mapea cada documento para hacer push de
            //sus datos en el array categorias
            snapshot.forEach((doc)=>{
                facturasSolicitadas.unshift(doc.data());
            });
            setSolicitadas(facturasSolicitadas);
        }
        getData();
    }, [
        ticket
    ]);
    async function submitHandler(e) {
        e.preventDefault();
        let ticket = e.target.ticket.value;
        let rfc = e.target.rfc.value;
        let name = e.target.name.value;
        let calle = e.target.calle.value;
        let colonia = e.target.Colonia.value;
        let cpp = e.target.codigopostal.value;
        let municipio = e.target.municipio.value;
        let regimenValue = document.getElementById("regimen");
        let regimen = regimenValue.options[regimenValue.selectedIndex].text;
        let cfdiValue = document.getElementById("cfdi");
        let cfdi = cfdiValue.options[cfdiValue.selectedIndex].text;
        let email = user.email;
        const tieneTicket = solicitadas.some((solicitada)=>solicitada.ticket === ticket);
        console.log(tieneTicket);
        console.log(rfc, name, calle, colonia, cpp, municipio, regimen, cfdi);
        if (ticket.trim().length === 0 || rfc.trim().length === 0 || name.trim().length === 0 || calle.trim().length === 0 || colonia.trim().length === 0 || cpp.trim().length === 0 || municipio.trim().length === 0 || !regimen.trim() || !cfdi.trim() || email.trim().length === 0) {
            alert("Debe llenar todos los espacios solicitados");
            return;
        }
        if (tieneTicket) {
            alert("Este ticket ya fue ingresado anteriormente, revise en su bandeja de facturas.");
            return;
        } else {
            console.log("No incluye");
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, "facturas-solicitadas", year + "-" + monthNum + "-" + ticket), {
                ticket: ticket,
                rfc: rfc,
                name: name,
                calle: calle,
                colonia: colonia,
                cpp: cpp,
                municipio: municipio,
                regimen: regimen,
                cfdi: cfdi,
                email: email,
                send: false
            }).then(()=>{
                ticket = "";
                rfc = "";
                name = "";
                calle = "";
                colonia = "";
                cpp = "";
                municipio = "";
                regimen = "";
                cfdi = "";
                email = "";
            });
            setticket(ticket);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isDoctor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Subir Facturas"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IngresarFacturas__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            }),
            !isDoctor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_FormularioFacturas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formularioFacturas),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Rellena el formulario para poder enviar la factura ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " a el correo electr\xf3nico con el que iniciaste sesion."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Facturas solicitadas:"
                                })
                            }),
                            solicitadas ? solicitadas.map((el)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Ticket: ",
                                        el.ticket
                                    ]
                                })) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "No se han solicitado facturas a\xfan."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: submitHandler,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "ticket",
                                id: "ticket",
                                placeholder: "N\xfamero de ticket"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "rfc",
                                id: "rfc",
                                placeholder: "RFC"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "name",
                                id: "name",
                                placeholder: "Nombre"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "apellidos",
                                id: "apellidos",
                                placeholder: "Apellidos"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_FormularioFacturas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().direccion),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "calle",
                                        id: "calle",
                                        placeholder: "Calle y numero"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "Colonia",
                                        id: "Colonia",
                                        placeholder: "Colonia"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "codigopostal",
                                        id: "codigopostal",
                                        placeholder: "C\xf3digo postal"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "municipio",
                                        id: "municipio",
                                        placeholder: "Municipio/Delegaci\xf3n"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                for: "regimen",
                                children: "R\xe9gimen Fiscal"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                name: "regimen",
                                id: "regimen",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "0",
                                        children: "Por definir"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "605",
                                        children: "Sueldos y Salarios e Ingresos Asimilados a Salarios"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "612",
                                        children: "Personas F\xedsicas con Actividades Empresariales y Profesionales"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "616",
                                        children: "Sin obligaciones fiscales "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "611",
                                        children: "Ingresos por Dividendos (socios y accionistas)"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "621",
                                        children: "Incorporaci\xf3n Fiscal"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "629",
                                        children: "De los Reg\xedmenes Fiscales Preferentes y de las Empresas Multinacionales"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                        value: "630",
                                        children: [
                                            "Enajenaci\xf3n de acciones en bolsa de valores",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "601",
                                        children: "General de Ley Personas Morales "
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                        value: "603",
                                        children: [
                                            "Personas Morales con Fines no Lucrativos",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                        value: "620",
                                        children: [
                                            "Sociedades Cooperativas de Producci\xf3n que optan por Diferir sus Ingresos",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "623",
                                        children: "Opcional para Grupos de Sociedades "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "624",
                                        children: "Coordinados "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "628",
                                        children: "Hidrocarburos "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                for: "cfdi",
                                children: "Uso de CFDI:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                name: "cfdi",
                                id: "cfdi",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "P01",
                                        children: "Por definir"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "G01",
                                        children: "Adquisici\xf3n de mercanc\xedas"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "G03",
                                        children: "Gastos en general"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "I01",
                                        children: "Construcciones"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "I02",
                                        children: "Mobiliario y equipo de oficina por inversiones"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "I03",
                                        children: "Equipo de transporte"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "I04",
                                        children: "Equipo de c\xf3mputo y accesorios"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "I05",
                                        children: "Dados, troqueles, moldes, matrices y herramental"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "I06",
                                        children: "Comunicaciones telef\xf3nicas"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "I07",
                                        children: "Otra maquinaria y equipo"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "I08",
                                        children: "Honorarios m\xe9dicos, dentales y gastos hospitalarios"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "D01",
                                        children: "Gasots m\xe9dicos por incapacidad o discapacidad"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "D02",
                                        children: "Gastos funerales"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "D04",
                                        children: "Donativos"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                        value: "D05",
                                        children: [
                                            "Intereses reales efectivamente pagados por cr\xe9ditos hipotecarios",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "D06",
                                        children: "Aportaciones voluntarias al SAR"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "D07",
                                        children: "Primas por seguros de gastos m\xe9dicos"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "D08",
                                        children: "Gastos de transportaci\xf3n escolar obligatoria"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "D09",
                                        children: "Dep\xf3sitos en cuentas para el ahorro, primas que tengan como base planes de pensiones"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "D10",
                                        children: "Pagos por servicios educativos"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                children: "Enviar"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormularioFacturas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IngresarFacturas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6307);
/* harmony import */ var _TablaFacturas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5636);
/* harmony import */ var _IngresarFacturas_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(277);
/* harmony import */ var _IngresarFacturas_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_IngresarFacturas_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);



const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);

function IngresarFacturas() {
    const d = new Date();
    const month = d.toLocaleString("es-US", {
        month: "long"
    });
    const year = d.getFullYear();
    const monthNum = d.getMonth();
    const { 0: solicitadas , 1: setSolicitadas  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: sending , 1: setSending  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: file , 1: setFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    console.log(solicitadas);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function getData() {
            let facturasSolicitadas = [];
            //funcion para llamar los datos desde firestore
            const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, "facturas-solicitadas"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)("send", "==", false));
            //se genera un snapshor con todos los documentos
            const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(collectionRef);
            //se mapea cada documento para hacer push de
            //sus datos en el array categorias
            snapshot.forEach((doc)=>{
                facturasSolicitadas.unshift(doc.data());
            });
            setSolicitadas(facturasSolicitadas);
        }
        getData();
    }, [
        sending
    ]);
    const uploadFile = async (document1, id)=>{
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `facturas/${year}/${month}/${id}`);
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
        let ticket = e.target.ticket.value;
        let email = e.target.email.value;
        let size = file.size;
        let facturaSolicitada = null;
        let facturaId = null;
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, "facturas-solicitadas"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)("ticket", "==", ticket));
        const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q);
        querySnapshot.forEach((doc)=>{
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            facturaId = doc.id;
            facturaSolicitada = doc.data();
        });
        if (ticket < 3 || email == "") {
            alert("Ingrese un ticket mayor a 3 digitos y un correo valido");
            return;
        }
        if (size > 1000000) {
            alert("El tama\xf1o del archivo debe ser menor a 1 MB");
            return;
        }
        console.log(ticket);
        console.log(file);
        console.log("Documento", facturaSolicitada, facturaId);
        if (file) {
            const uri = await uploadFile(file, facturaId);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, `facturas-solicitadas/${facturaId}`), {
                send: true,
                url: uri,
                uploadDate: d.getDate() + "/" + monthNum + "/" + year
            });
            setSending(!sending);
        }
        document.getElementById("fileInput").value = "";
        e.target.ticket.value = "";
        e.target.email.value = "";
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    className: (_IngresarFacturas_module_scss__WEBPACK_IMPORTED_MODULE_6___default().facturasInput),
                    onSubmit: submitHandler,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            for: "fileInput",
                            className: (_IngresarFacturas_module_scss__WEBPACK_IMPORTED_MODULE_6___default().customFileUpload),
                            children: "Seleccionar Factura"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "file",
                            id: "fileInput",
                            onChange: (e)=>setFile(e.target.files[0])
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "email",
                            children: "Email cliente"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "email",
                            placeholder: "Email cliente",
                            id: "email"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "ticket",
                            children: "Ticket"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Numero de ticket",
                            id: "ticket"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            children: "Enviar"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TablaFacturas__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                data: solicitadas
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TablaFacturas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TablaFacturas_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8401);
/* harmony import */ var _TablaFacturas_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TablaFacturas_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function TablaFacturas({ data  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_TablaFacturas_module_scss__WEBPACK_IMPORTED_MODULE_1___default().facturasWrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Facturas solicitadas via web"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_TablaFacturas_module_scss__WEBPACK_IMPORTED_MODULE_1___default().facturas),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Ticket"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Email cliente"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Nombre"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Calle"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Colonia"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "C\xf3digo postal"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Municipio"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Regimen Fiscal"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Uso de CFDI"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Enviada"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            children: data ? data.map((el)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.ticket
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.email
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.calle
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.colonia
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.cpp
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.municipio
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.regimen
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.cfdi
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: el.send === false ? "No" : "Si"
                                        })
                                    ]
                                });
                            }) : null
                        })
                    ]
                })
            })
        ]
    });
};


/***/ })

};
;