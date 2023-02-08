import styles from "../pages/perfiles.module.scss";
import CasillaAnalisisPerfil from "./CasillaAnalisisPerfil";
import Footer from "./Footer";
import { Fragment } from "react";
const PerfilesIndex = ({ perfiles }) => {
  console.log(perfiles);
  return (
    <Fragment>
      <div className={styles.analisisSection}>
        <div className={styles.nameBox}>
          <h1>Perfiles</h1>
          <div className={styles.lineaSubrayado}></div>
        </div>
        {perfiles.map(el => {
          return (
            <CasillaAnalisisPerfil
              nombre={el.Nombre}
              descripcion={el.Descripción}
              precio={el.Precio}
            />
          );
        })}
      </div>
      <Footer />
    </Fragment>
  );
};

export default PerfilesIndex;
