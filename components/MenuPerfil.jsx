// Importa el archivo de estilos de este componente
import styles from "./MenuPerfil.module.scss";
// Importa la función useState de React
import { useState } from "react";
// Importa la configuración de Firebase
import firebaseApp from "../firebase/firebase";
// Importa las funciones getAuth y signOut de la biblioteca de Firebase
import { getAuth, signOut } from "firebase/auth";
// Importa los componentes FormularioFacturas, DatosPerfil y ResultadosPerfil
import FormularioFacturas from "./FormularioFacturas";
import DatosPerfil from "./DatosPerfil";
import ResultadosPerfil from "./ResultadosPerfil";
import FacturasPerfil from "./FacturasPerfil";

// Obtiene el objeto de autenticación de Firebase
const auth = getAuth(firebaseApp);

// Declara la función MenuPerfil
function MenuPerfil({ data }) {
  // Establece el estado inicial de los componentes a mostrar
  const [dataProfile, setDataProfile] = useState(true);
  const [resultsProfile, setResultsProfile] = useState(false);
  const [facturationProfile, setFacturationProfile] = useState(false);
  const [facturasProfile, setFacturasProfile] = useState(false);

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
            <p>Resultados</p>
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
            <p>Solicitar factura</p>
          </div>
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
        </div>
        <div>
          <div className={styles.datosPerfil}>
            {dataProfile && <DatosPerfil perfil={data} />}
            {resultsProfile && <ResultadosPerfil />}
            {facturationProfile && <FormularioFacturas />}
            {facturasProfile && <FacturasPerfil />}
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPerfil;
