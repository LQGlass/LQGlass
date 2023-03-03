// Importa el archivo de estilos de este componente
import styles from "./MenuPerfil.module.scss";
// Importa la función useState de React
import { useState, useEffect } from "react";
// Importa la configuración de Firebase
import firebaseApp from "../firebase/firebase";
// Importa las funciones getAuth y signOut de la biblioteca de Firebase
import { getAuth, signOut } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
// Importa los componentes FormularioFacturas, DatosPerfil y ResultadosPerfil
import FormularioFacturas from "./FormularioFacturas";
import DatosPerfil from "./DatosPerfil";
import ResultadosPerfil from "./ResultadosPerfil";
import FacturasPerfil from "./FacturasPerfil";
const db = getFirestore(firebaseApp);

// Obtiene el objeto de autenticación de Firebase
const auth = getAuth(firebaseApp);

// Declara la función MenuPerfil
function MenuPerfil({ data }) {
  // Establece el estado inicial de los componentes a mostrar
  const [dataProfile, setDataProfile] = useState(true);
  const [resultsProfile, setResultsProfile] = useState(false);
  const [facturationProfile, setFacturationProfile] = useState(false);
  const [facturasProfile, setFacturasProfile] = useState(false);
  const [user, setUser] = useState(null);
  const [isDoctor, setIsDoctor] = useState(false);
  useEffect(() => {
    //funcion para llamar los datos desde firestore
    async function getData() {
      const docRef = doc(db, "users", data.uid);
      const docSnap = await getDoc(docRef);

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
  }, [data.uid]);

  console.log(isDoctor);

  // Renderiza el menú y los componentes seleccionados
  return (
    <>
      <div className={styles.perfil}>
        <div className={styles.menuPerfil}>
          {/* Muestra el componente DatosPerfil cuando se hace clic en este botón */}
          <div
            className={styles.menuOptions}
            onClick={() => {
              setDataProfile(true);
              setResultsProfile(false);
              setFacturationProfile(false);
              setFacturasProfile(false);
            }}
          >
            <img
              src="./images/iconos-ui/corazon-pc.png"
              width={50}
              height={50}
              alt=""
            />
            <p>Datos del Perfil</p>
          </div>
          {/* Muestra el componente ResultadosPerfil cuando se hace clic en este botón */}
          <div
            className={styles.menuOptions}
            onClick={() => {
              setDataProfile(false);
              setResultsProfile(true);
              setFacturationProfile(false);
              setFacturasProfile(false);
            }}
          >
            <img
              src="./images/iconos-ui/resultados.png"
              width={50}
              height={50}
              alt=""
            />
            <p>{isDoctor ? "Subir Resultados" : "Resultados"}</p>
          </div>
          <div
            className={styles.menuOptions}
            onClick={() => {
              setDataProfile(false);
              setResultsProfile(false);
              setFacturationProfile(true);
              setFacturasProfile(false);
            }}
          >
            <img
              src="./images/iconos-ui/solicitar-facturas.png"
              width={50}
              height={50}
              alt=""
            />
            <p>{isDoctor ? "Subir factura" : "Solicitar factura"}</p>
          </div>
          {!isDoctor && (
            <>
              <div
                className={styles.menuOptions}
                onClick={() => {
                  setDataProfile(false);
                  setResultsProfile(false);
                  setFacturationProfile(false);
                  setFacturasProfile(true);
                }}
              >
                <img
                  src="./images/iconos-ui/facturacion.png"
                  width={50}
                  height={50}
                  alt=""
                />
                <p>Facturas</p>
              </div>
            </>
          )}
        </div>
        <div>
          <div className={styles.datosPerfil}>
            {dataProfile && <DatosPerfil perfil={data} />}
            {resultsProfile && <ResultadosPerfil perfil={user} />}
            {facturationProfile && <FormularioFacturas user={user} />}
            {facturasProfile && <FacturasPerfil user={user} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPerfil;
