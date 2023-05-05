import Link from "next/link";
import styles from "./CasillaBlog.module.scss";
import Image from "next/image";
function CasillaBlog(props) {
  return (
    <Link href={props.link}>
      <div className={styles.casillaBlog}>
        <Image alt="imagen de blog" src={props.url} width={350} height={250} />
        <h3 className={styles.tituloCasilla}>{props.titulo}</h3>
        <p className={styles.descripcionCasilla}> {props.descripcion} </p>
      </div>
    </Link>
  );
}

export default CasillaBlog;
