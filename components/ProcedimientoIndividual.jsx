import styles from "./AnalisisIndividual.module.scss";
import Link from "next/link";

export default function ProcedimientoIndividual({ examen }) {
  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <p>{examen.categoria}</p>
        <h1 className={styles.nombreAnalisis}>{examen.nombre}</h1>
      </div>
      <div className={styles.wrapperAnalisis}>
        <div className={styles.descripcionProcedimiento}>
          <div className={styles.descripcion}>
            <p>
              <strong>
                Procedimiento: <br /> <br />
              </strong>
              {examen.procedimiento}
            </p>
          </div>
        </div>
        <Link href={"/examenes/" + examen.nombre}>
          <div className={styles.indicaciones}>Ver descripcion</div>
        </Link>
      </div>
    </div>
  );
}
