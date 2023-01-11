import DireccionCasilla from "./DireccionCasilla";
import styles from "./DireccionesSeccion.module.scss";

function DireccionesSeccion() {
  const direccionNaucalpan =
    "Av. Adolfo López Mateos No. 22 Local G, Plaza Santa Cruz, Col. Santa Cruz del Monte, Naucalpan Estado de México";
  return (
    <section id={"sucursales"} className={styles.direccionesSeccion}>
      <div>
        <h2 className={styles.tituloDireccion}>
          Visitanos en nuestra sucursal
        </h2>
        <div className={styles.lineaSubrayado}></div>
      </div>
      <div className={styles.direccionWrapper}>
        <DireccionCasilla
          direccion={direccionNaucalpan}
          nombreDireccion={"Naucalpan"}
        />
      </div>
    </section>
  );
}

export default DireccionesSeccion;
