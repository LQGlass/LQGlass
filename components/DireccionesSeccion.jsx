import styles from "./DireccionesSeccion.module.scss";

function DireccionesSeccion() {
  return (
    <section id={"sucursales"} className={styles.direccionesSeccion}>
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
          <a target={"_blank"} href="https://goo.gl/maps/uJBYXhB8yJGBTHVz7"><img className={styles.ubicacion} src="/images/ubicacion.png" width={600} alt="mapa" /></a>
      </div>
    </section>
  );
}

export default DireccionesSeccion;
