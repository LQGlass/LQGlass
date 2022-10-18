import Link from "next/link";
import styles from "./TarjetaDescriptiva.module.scss";

const TarjetaDescriptiva = (props) => {
  return (
    <Link href={"/analisis"}>
      <dl className={styles.tarjetaD}>
        <img src={props.image} alt="icono medico"/>
        <dt className={styles.tituloTarjeta}>{props.nombreCategoria}</dt>
        <Link href={"/analisis"}>Ver más</Link>
      </dl>
    </Link>
  );
};

export default TarjetaDescriptiva;
