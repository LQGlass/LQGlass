import styles from "../styles/main.module.scss";
import Image from "next/image";
function CasillaBlog (props){
    return(
        <div className={styles.casillaBlog}>
        <Image  src="/images/microscopio.jpg" width={350} height={250} />
        <h3 className={styles.tituloCasilla}>{props.titulo}</h3>
        <p className={styles.descripcionCasilla}> {props.descripcion} </p>
      </div>
    )
}

export default CasillaBlog;