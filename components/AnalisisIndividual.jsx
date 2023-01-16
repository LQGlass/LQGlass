import styles from "./AnalisisIndividual.module.scss";
import Link from "next/link";

export default function AnalisisIndividual({ examen }) {
  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <div>
          <img width={50} src={"../images/iconos-categoria/" + examen.categoria + ".png"} alt="" />
        </div>
        <div>
          <p>{examen.categoria}</p>
          <h1 className={styles.nombreAnalisis}>{examen.nombre}</h1>
        </div>
      </div>
      <div className={styles.wrapperAnalisis}>
        <div className={styles.descripcionAnalisis}>
          <div>
            <img className={styles.iconoDescripcion} width={100} src={"../images/iconos-categoria/" + examen.categoria + ".png"} alt="" />
          </div>
          <div className={styles.descripcion}>
            <p>
              <strong>
                Descripción: <br /> <br />
              </strong>
              {examen.descripcion}
            </p>
            <p>
              <strong>
                Indicaciones: <br /> <br />
              </strong>
              {examen.indicaciones}
            </p>
          </div>
          <div className={styles.precio}>
            <p>
              Precio: <br />
            </p>
            <p>${examen.precio} MXN</p>
          </div>
        </div>
        <Link href={"/procedimiento/" + examen.nombre}>
          <div className={styles.indicaciones}>Ver procedimiento</div>
        </Link>
      </div>
    </div>
  );
}
