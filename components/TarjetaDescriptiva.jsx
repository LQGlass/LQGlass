import styles from "../styles/main.module.scss";

const TarjetaDescriptiva = (props) => {

    return (

    
    <dl className={styles.tarjetaD}>
        <dt className={styles.tituloTarjeta}>{props.nombreCategoria}</dt>
        <dd className={styles.contenidoTarjeta}>{props.descripcion}</dd>
    </dl>



    )
}

export default TarjetaDescriptiva;