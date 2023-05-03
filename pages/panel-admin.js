import Head from "next/head";
import { useState } from "react";
import DashboardHome from "../components/DashboardHome";
import Login from "../components/componentsPanel/Login";
import styles from "./panel-admin.module.scss";
//se importa firebase y las utilidades que vamos a usar
import firebaseApp from "../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function panelAdmin() {
  const [usuario, setusuario] = useState(null);

  onAuthStateChanged(auth, usuarioFirebase => {
    if (usuarioFirebase) {
      setusuario(usuarioFirebase);
    } else {
      setusuario(null);
    }
  });
  return (
    <>
      <Head>
        <title>Panel</title>
      </Head>
      <div className={styles.dashboard}>
        <div>
          <h1>Panel de administrador</h1>
        </div>
        {usuario ? <DashboardHome usuario={usuario} /> : <Login />}
      </div>
    </>
  );
}

export default panelAdmin;
