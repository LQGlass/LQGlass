import styles from "./crear-cuenta.module.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CrearCuentaForm from "../components/CrearCuentaForm";

function IniciarSesion (){
return (
    <div className={styles.crearCuentaSection}>
      <Navbar />
      <CrearCuentaForm/>
      <Footer />
    </div>
)
}

export default IniciarSesion;