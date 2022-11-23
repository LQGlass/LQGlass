import styles from "../pages/[categorieId]/index.module.scss";
import Link from "next/link";

function CasillaAnalisis({nombre, descripcion, precio}) {
  const index= Math.floor(Math.random()*10)
  return (
    <Link href={"/examenes/"+nombre}>
      <div className={styles.casillaAnalisis}>
      <div className={styles.imagenCasillaAnalisis}>
        <img className={styles.imagenAnalisis} src={"/images/medicalIcons/"+index+".png"} alt="" width={200} />
      </div>
      <div className={styles.textosCasilla}>
        <dt>{nombre}</dt>
        <dd>
        <strong>Descripcion:</strong> <br />
          {descripcion}
        </dd>
      </div>
      <div className={styles.precios}>
        Precio: <br /> ${precio}
      </div>
    </div>
    </Link>
  );
}

export default CasillaAnalisis;
