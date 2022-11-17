import styles from "./DireccionesSeccion.module.scss";

function DireccionesSeccion() {
  return (
    <section className={styles.direccionesSeccion}>
      <div>
        <h2 className={styles.tituloDireccion}>Visitanos en nuestra sucursal</h2>
        <div className={styles.lineaSubrayado}></div>
      </div>
      <div className={styles.direccionWrapper}>
        <div className={styles.direccionCasilla}>
          <h2>Naucalpan</h2>
          <address>
            Av. Adolfo López Mateos No. 22 Local G, Plaza Santa Cruz, Col. Santa
            Cruz del Monte, Naucalpan estado de México,
          </address>
        </div>
          <img src="/images/ubicacion.png" width={300} alt="mapa" />
      </div>
    </section>
  );
}

export default DireccionesSeccion;
