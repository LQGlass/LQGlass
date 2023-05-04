import DashboardHome from "./DashboardHome";
import { useState, useEffect } from "react";
import styles from "..//pages//panel-admin.module.scss";
import { getFirestore, doc, getDoc } from "firebase/firestore";
//se importa firebase y las utilidades que vamos a usar
import firebaseApp from "../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
export default function PanelAdministrator() {
  const [usuario, setUsuario] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const authListener = onAuthStateChanged(auth, usuarioFirebase => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
        console.log(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    return () => {
      authListener();
    };
  }, []);

  useEffect(() => {
    async function getData() {
      const docRef = doc(db, "users", usuario.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists) {
        setIsAdmin(docSnap.data().admin);
      }
    }

    if (usuario) {
      getData();
    }
  }, [usuario]);
  return (
    <>
      <div className={styles.dashboard}>
        <div>
          <h1>Panel de administrador</h1>
        </div>
        {!usuario ? (
          <h2>Verificando...</h2>
        ) : isAdmin ? (
          <DashboardHome usuario={usuario} />
        ) : (
          <h2>Accede con una cuenta de administrador</h2>
        )}
      </div>
    </>
  );
}
