import styles from "../pages/analisis.module.scss";

function CasillaAnalisis() {
  return (
    <div className={styles.casillaAnalisis}>
      <div className={styles.textosCasilla}>
        <dt>Nombre de Estudio</dt>
        <dd>
          Recomendaciones para el usuario: <br /> <br />
          Adipisicing in labore elit officia nisi mollit.
        </dd>
      </div>
      <div className={styles.precios}>
        <p className={styles.costoAntes}>Antes a: $5.000</p>
        <p className={styles.costoAhora}>Costo: $5.000</p>
        <p className={styles.costoAhorro}>Ahorra: $5.000</p>
      </div>
    </div>
  );
}

export default CasillaAnalisis;
