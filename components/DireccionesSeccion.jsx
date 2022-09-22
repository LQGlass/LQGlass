import styles from "./DireccionesSeccion.module.scss";

function DireccionesSeccion (){
    return(
        <section className={styles.direccionesSeccion}>
        <div>
          <h2>
            Visitanos en nuestras sucursales
          </h2>
        </div>
        <div className={styles.direccionWrapper}>
          <div className={styles.direccionCasilla}>
            <h2>Dirección 1</h2>
            <address>Av. Prueva, Test 545</address>
          </div>
          <div className={styles.direccionCasilla}>
            <h2>Dirección 2</h2>
            <address>Av. Prueva, Test 545</address>
          </div>
          <div className={styles.direccionCasilla}>
           <h2>Dirección 3</h2>
           <address>Av. Prueva, Test 545</address>
          </div>
        </div>
      </section>
    )
}

export default DireccionesSeccion;