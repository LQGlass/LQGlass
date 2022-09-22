import Link from "next/link";
import styles from "./TarjetaDescriptiva.module.scss";

const TarjetaDescriptiva = (props) => {

    return (

    
    <dl className={styles.tarjetaD}>
        <dt className={styles.tituloTarjeta}>{props.nombreCategoria}</dt>
        <dd className={styles.contenidoTarjeta}>{props.descripcion}</dd>
        <Link href={"/detalles"}>Ver más</Link>
    </dl>



    )
}

export default TarjetaDescriptiva;