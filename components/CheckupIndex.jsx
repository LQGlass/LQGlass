import styles from "./CategoryIndex.module.scss";
import TarjetaDescriptivaPaquetes from "./TarjetaDescriptivaPaquetes";
import TituloDivisor from "./TituloDivisor";
import Link from "next/link";
import styles2 from "./TarjetaDescriptiva.module.scss";

const CheckupIndex = ({ contenido }) => {
  //function for the creation of the description blocks for the category section
  const renderTarjetas = paquetes => {
    return paquetes.map((paquete, index) => (
      <TarjetaDescriptivaPaquetes
        key={index}
        image={"./images/medicalImages/" + paquete + ".jpg"}
        nombreCategoria={paquete ? paquete : "Cargando"}
        descripcion={paquete ? paquete : "Cargando"}
      />
    ));
  };
  return (
    <section id="paquetes" className={styles.checkupIndex}>
      <TituloDivisor titulo="Estudios clinicos para cuidar tu salud." />
      <div className={styles.gridTarjetas}>
        {renderTarjetas(contenido)}
        <Link href={`/perfiles`}>
          <dl className={styles2.tarjetaDPaquetes}>
            <img
              src={"./images/medicalImages/Perfiles.jpg"}
              alt="icono medico"
              width={100}
            />
            <dt className={styles2.tituloTarjeta}>Perfiles</dt>
            <Link href={`/perfiles`}>Ver más</Link>
          </dl>
        </Link>
      </div>
    </section>
  );
};

export default CheckupIndex;
