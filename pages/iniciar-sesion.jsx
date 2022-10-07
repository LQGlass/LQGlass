import styles from "./crear-cuenta.module.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IniciarSesionForm from "../components/IniciarSesionForm";

function IniciarSesion (){
return (
    <div className={styles.crearCuentaSection}>
      <Navbar />
      <Header title="Iniciar Sesión" />
      <IniciarSesionForm />
      <Footer />
    </div>
)
}

export default IniciarSesion;