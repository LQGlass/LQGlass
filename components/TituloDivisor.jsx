import styles from "./TituloDivisor.module.scss";
export default function TituloDivisor({ titulo }) {
  return (
    <div className={styles.subtitulo}>
      <h2>{titulo}</h2>
      <div className={styles.lineaSubrayado}></div>
    </div>
  );
}
