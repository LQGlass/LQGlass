import styles from "../styles/main.module.scss";

function CasillaBlog (props){
    return(
        <div className={styles.casillaBlog}>
        <h3 className={styles.tituloCasilla}>{props.titulo}</h3>
        <p className={styles.descripcionCasilla}> {props.descripcion} </p>
      </div>
    )
}

export default CasillaBlog;