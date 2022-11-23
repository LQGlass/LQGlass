import Link from "next/link";
import styles from "./TarjetaDescriptiva.module.scss";

const TarjetaDescriptivaPaquetes = ({image, nombreCategoria}) => {
  return (
    <Link href={`/grupo-paquetes/${nombreCategoria}`}>
      <dl className={styles.tarjetaDPaquetes}>
        <img src={image} alt="icono medico"/>
        <dt className={styles.tituloTarjeta}>{nombreCategoria}</dt>
        <Link href={`/${nombreCategoria}`}>Ver más</Link>
      </dl>
    </Link>
  );
};

export default TarjetaDescriptivaPaquetes;
