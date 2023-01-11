import styles from "./TituloDivisor.module.scss";
export default function TituloHeader({ titulo }) {
  return (
    <div className={styles.containImage}>
      <div className={styles.titulo}>
        <h2>{titulo}</h2>
        <div className={styles.lineaSubrayado}></div>
      </div>
    </div>
  );
}
