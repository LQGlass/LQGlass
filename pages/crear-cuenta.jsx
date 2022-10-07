import Navbar from "../components/Navbar";
import styles from "./crear-cuenta.module.scss";
import Header from "../components/Header";
import CrearCuentaForm from "../components/CrearCuentaForm";
import Footer from "../components/Footer";

function crearCuenta() {
  return (
    <div className={styles.crearCuentaSection}>
      <Navbar />
      <Header title="Crear Cuenta" />
      <CrearCuentaForm />
      <Footer />
    </div>
  );
}

export default crearCuenta;
