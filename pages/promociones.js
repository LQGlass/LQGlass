import Navbar from "../components/Navbar";
import styles from "./promociones.module.scss";
import Image from "next/image";
import Footer from "../components/Footer";
import TituloHeader from "../components/TituloHeader";

const promociones = () => {
  return (
    <section className={styles.promocionesSeccion}>
      <Navbar />

      <TituloHeader clase={true} titulo="Promociones" />
      <div className={styles.promocionesWrapper}>
        <div>
          <Image
            src={"/images/Promociones/promo6.jpg"}
            width={320}
            height={320}
            alt={"Promocion"}
          />
        </div>
        <div>
          <Image
            src={"/images/Promociones/promo5.jpg"}
            width={320}
            height={320}
            alt={"Promocion"}
          />
        </div>
        <div>
          <Image
            src={"/images/Promociones/promo4.jpg"}
            width={320}
            height={320}
            alt={"Promocion"}
          />
        </div>
        <div>
          <Image
            src={"/images/Promociones/promo3.jpg"}
            width={320}
            height={320}
            alt={"Promocion"}
          />
        </div>
        <div>
          <Image
            src={"/images/Promociones/promo2.jpg"}
            width={320}
            height={320}
            alt={"Promocion"}
          />
        </div>
        <div>
          <Image
            src={"/images/Promociones/promo1.jpg"}
            width={320}
            height={320}
            alt={"Promocion"}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default promociones;
