import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styles from "./nosotros.module.scss";
import Image from "next/image";
import Footer from "../components/Footer";
import TituloHeader from "../components/TituloHeader";

const promociones = () => {
  return (
    <div>
      <Navbar />
      <TituloHeader titulo="Promociones" />

      <div className={styles.nosotros}>
        <div className={styles.textoNosotros}>
          <h2>Promociones proximamente</h2>
        </div>
        <div className={styles.imagenNosotros}>
          <Image src="/images/logo.png" width={600} height={250} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default promociones;
