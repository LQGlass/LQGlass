import Link from "next/link";
import styles from "./TarjetaDescriptiva.module.scss";

const TarjetaDescriptiva = ({image, nombreCategoria}) => {
  return (
    <Link href={`/${nombreCategoria}`}>
      <dl className={styles.tarjetaD}>
        <img src={image} alt="icono medico"/>
        <dt className={styles.tituloTarjeta}>{nombreCategoria}</dt>
        <Link href={`/${nombreCategoria}`}>Ver más</Link>
      </dl>
    </Link>
  );
};

export default TarjetaDescriptiva;
