import styles from "../pages/[categorieId]/index.module.scss";
import CasillaPaquete from "./CasillaPaquete";
import Footer from "./Footer";
import { Fragment } from "react";
import SearchBar from "./SearchBar";
const PerfilesIndex = ({ perfiles }) => {
  return (
    <Fragment>
      <div className={styles.analisisSection}>
        <div className={styles.nameBox}>
          <h1>Perfiles</h1>
          <div className={styles.lineaSubrayado}></div>
        </div>
        <SearchBar contenido={perfiles} placeholder="Buscar perfil" />
        {perfiles.map((el, index) => {
          return (
            <CasillaPaquete
              key={index}
              nombre={el.Nombre}
              descripcion={el.Descripcion}
              precio={el.Precio}
              indicaciones={el.Indicaciones}
              procedimiento={el.Procedimiento}
            />
          );
        })}
      </div>
      <Footer />
    </Fragment>
  );
};

export default PerfilesIndex;

{
  /* <Fragment>
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
</Fragment> */
}
