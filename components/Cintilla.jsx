import styles from "./Cintilla.module.scss";
export default function Cintilla() {
  return (
    <>
      <div className={styles.cintilla}>
        <div className={styles.tituloCintilla}>
          CDMX y Area Metropolitana | Haz tu cita : 55 4672 2581 ó 55 5562 5267
        </div>
        <div className={styles.idiomas}>
          <img
            className={styles.flag}
            src="/images/flags/mexico.png"
            alt="bandera de méxico"
          />
          <img
            className={styles.flag}
            src="/images/flags/united-states.png"
            alt="bandera de estados unidos"
          />
        </div>
      </div>
    </>
  );
}
