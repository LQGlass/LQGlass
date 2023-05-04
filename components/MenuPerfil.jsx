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
import Image from "next/image";
import AdminPanel from "./AdminPanel";
const db = getFirestore(firebaseApp);

// Declara la función MenuPerfil
function MenuPerfil({ data }) {
  // Establece el estado inicial de los componentes a mostrar
  const [dataProfile, setDataProfile] = useState(true);
  const [resultsProfile, setResultsProfile] = useState(false);
  const [facturationProfile, setFacturationProfile] = useState(false);
  const [facturasProfile, setFacturasProfile] = useState(false);
  const [adminPanel, setAdminPanel] = useState(false);
  const [user, setUser] = useState(null);
  const [isDoctor, setIsDoctor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    //funcion para llamar los datos desde firestore
    async function getData() {
      const docRef = doc(db, "users", data.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists) {
        //se actualiza el estado con la informacion obtenida.
        setUser(docSnap.data());
        setIsDoctor(docSnap.data().doctor);
        setIsAdmin(docSnap.data().admin);
      }
    }

    getData();
  }, [data.uid]);

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
              if (!isDoctor) {
                setFacturasProfile(false);
              }
              if (isAdmin) {
                setAdminPanel(false);
              }
            }}
          >
            <Image
              src="/images/iconos-ui/corazon-pc.png"
              width={50}
              height={50}
              alt="icono"
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
              if (!isDoctor) {
                setFacturasProfile(false);
              }
              if (isAdmin) {
                setAdminPanel(false);
              }
            }}
          >
            <Image
              src="/images/iconos-ui/resultados.png"
              width={50}
              height={50}
              alt="icono"
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
              if (!isDoctor) {
                setFacturasProfile(false);
              }
              if (isAdmin) {
                setAdminPanel(false);
              }
            }}
          >
            <Image
              src="/images/iconos-ui/solicitar-facturas.png"
              width={50}
              height={50}
              alt="icono"
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
                  if (!isDoctor) {
                    setFacturasProfile(true);
                  }
                  if (isAdmin) {
                    setAdminPanel(false);
                  }
                }}
              >
                <Image
                  src="/images/iconos-ui/facturacion.png"
                  width={50}
                  height={50}
                  alt="icono"
                />
                <p>Facturas</p>
              </div>
            </>
          )}
          {isAdmin && (
            <>
              <div
                className={styles.menuOptions}
                onClick={() => {
                  setDataProfile(false);
                  setResultsProfile(false);
                  setFacturationProfile(false);
                  if (!isDoctor) {
                    setFacturasProfile(false);
                  }
                  if (isAdmin) {
                    setAdminPanel(true);
                  }
                }}
              >
                <Image
                  src="/images/iconos-ui/facturacion.png"
                  width={50}
                  height={50}
                  alt="icono"
                />
                <p>Panel Admin</p>
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
            {adminPanel && <AdminPanel />}
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPerfil;
