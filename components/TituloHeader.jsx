import styles from "./TituloDivisor.module.scss";
export default function TituloHeader({ titulo, clase }) {
  return (
    <div className={clase ? styles.containSolid : styles.containImage}>
      <div className={styles.titulo}>
        <h2>{titulo}</h2>
        <div className={styles.lineaSubrayado}></div>
      </div>
    </div>
  );
}
