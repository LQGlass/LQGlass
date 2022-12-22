import styles from "./MenuPerfil.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer"
import { useState } from "react";
import firebaseApp from "../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import FormularioFacturas from "./FormularioFacturas";
import DatosPerfil from "./DatosPefil";
import ResultadosPerfil from "./ResultadosPerfil";
const auth = getAuth(firebaseApp);
function MenuPerfil({data}) {
  const [dataProfile, setDataProfile] = useState(true);
  const [resultsProfile, setResultsProfile] = useState(false);
  const [facturationProfile, setFacturationProfile] = useState(false);
  return (
    <>
    <div className={styles.perfil}>
    <div className={styles.menuPerfil}>
      <div className={styles.menuOptions} onClick={()=>{
        setDataProfile(true);
        setResultsProfile(false);
        setFacturationProfile(false);
      }}> Datos del Perfil</div>
      <div className={styles.menuOptions} onClick={()=>{
        setDataProfile(false);
        setResultsProfile(true);
        setFacturationProfile(false);
      }}> Resultados</div>
      <div className={styles.menuOptions} onClick={()=>{
        setDataProfile(false);
        setResultsProfile(false);
        setFacturationProfile(true);
      }}> Facturacion</div>
      <button onClick={()=>signOut(auth)}>Cerrar Sesión</button>
    </div>
    <div>
      <div className={styles.datosPerfil}>
        {
          dataProfile && <DatosPerfil perfil={data} />
        }
        {
          resultsProfile && <ResultadosPerfil />
        }
        {
          facturationProfile && <FormularioFacturas />
        }
      </div>
    </div>
    </div>
    </>
  );
}

export default MenuPerfil;
