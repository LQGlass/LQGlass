import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styles from "./nosotros.module.scss";
import Image from "next/image";
import Footer from "../components/Footer";

const nosotros = () => {
  return (
    <div>
      <Navbar />
      <Header title="Nosotros" />

      <div className={styles.nosotros}>
        <div className={styles.imagenNosotros}>
          <Image src="/images/logo.png" width={600} height={250} />
        </div>
        <div className={styles.textoNosotros}>
          <h2>Laboratorios Quimicos Glass</h2>
          <p>
            Aplicamos los procedimientos recomendados por la Organización
            Mundial de la Salud y las normativas mexicanas aplicables en la toma
            de muestra. <br /> <br />
            Para el análisis de las muestras se ocupan los procedimientos
            documentados en nuestro sistema de gestión de calidad conforme lo
            establece la norma internacional ISO 15189. En el caso de análisis
            que se requieran realizar en otros laboratorios se comunica a
            nuestros clientes tal hecho en el entendido de que los laboratorios
            contratados son supervisados en su calidad y confiabilidad analítica
            y que Laboratorios Químicos Glass permanece como responsable directo
            de los resultados analíticos proporcionados.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default nosotros;
