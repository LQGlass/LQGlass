import styles from "../pages/[categorieId]/index.module.scss";
import CasillaPaquete from "./CasillaPaquete";
import Footer from "./Footer";
import { Fragment } from "react";

const PerfilesIndex = ({ perfiles }) => {
  return (
    <Fragment>
      <div className={styles.analisisSection}>
        <div className={styles.nameBox}>
          <h1>Perfiles</h1>
          <div className={styles.lineaSubrayado}></div>
        </div>
        {perfiles.map((perfil, index) => {
          return (
            <CasillaPaquete
              key={index}
              nombre={perfil.Nombre}
              descripcion={perfil.Descripcion}
              precio={perfil.Precio}
              indicaciones={perfil.Indicaciones}
              procedimiento={perfil.Procedimiento}
            />
          );
        })}
      </div>
      <Footer />
    </Fragment>
  );
};

export default PerfilesIndex;
