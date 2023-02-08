import Navbar from "../components/Navbar";
import styles from "./sucursales.module.scss";
import Footer from "../components/Footer";
import TituloHeader from "../components/TituloHeader";
import DireccionCasilla from "../components/DireccionCasilla";

const sucursales = () => {
  return (
    <>
      <Navbar />
      <section id={styles.sucursales}>
        <TituloHeader clase={true} titulo="Sucursales" />
        <div className={styles.casillaWrapper}>
          <DireccionCasilla
            nombreDireccion={"Naucalpan"}
            direccion={
              "Av. Adolfo López Mateos No. 22 Local G, Plaza Santa Cruz, Col. Santa Cruz del Monte, Naucalpan estado de México,"
            }
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default sucursales;
