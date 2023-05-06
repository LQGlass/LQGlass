import Link from "next/link";
import styles from "./TarjetaDescriptiva.module.scss";

const TarjetaDescriptiva = ({ imageCategorie, nombreCategoria }) => {
  return (
    <Link href={`/${nombreCategoria}`}>
      <dl className={styles.tarjetaD}>
        <img src={imageCategorie} alt="icono medico" />
        <dt className={styles.tituloTarjeta}>{nombreCategoria}</dt>
        <Link href={`/${nombreCategoria}`}>Ver más</Link>
      </dl>
    </Link>
  );
};

export default TarjetaDescriptiva;
