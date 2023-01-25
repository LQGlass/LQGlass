import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../components/MenuPerfil.module.scss";
import { useState } from "react";
import IniciarSesionForm from "../../components/IniciarSesionForm";
import firebaseApp from "../../firebase/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import MenuPerfil from "../../components/MenuPerfil";
import LQGIcon from "../../components/LQGIcon";
import Footer from "../../components/Footer";
const auth = getAuth(firebaseApp);
import { getFirestore, doc, getDoc, where } from "firebase/firestore";
const db = getFirestore(firebaseApp);

function perfil() {
  const [usuario, setUsuario] = useState(null);
  onAuthStateChanged(auth, usuarioFirebase => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <>
      <nav className={styles.navMenuPerfil}>
        <LQGIcon />
        {usuario && (
          <button onClick={() => signOut(auth)}>Cerrar Sesión</button>
        )}
      </nav>
      {usuario ? <MenuPerfil data={usuario} /> : <IniciarSesionForm />}
      <Footer />
    </>
  );
}

export default perfil;
