import styles from "./Cintilla.module.scss";
import LanguageSelector from "./LanguageSelector";
export default function Cintilla() {
  return (
    <>
      <div className={styles.cintilla}>
        <div className={styles.tituloCintilla}>
          CDMX y Area Metropolitana | Haz tu cita : 55 4672 2581 ó 55 5562 5267
        </div>
        <LanguageSelector />
      </div>
    </>
  );
}
