import styles from "./CasillaPaquete.module.scss";
import Link from "next/link";
import Image from "next/image";

function CasillaPaquete({
  nombre,
  descripcion,
  precio,
  incluye,
  indicaciones,
  procedimiento,
}) {
  const index = Math.floor(Math.random() * 10);
  return (
    <div className={styles.casillaAnalisis}>
      <div className={styles.imagenCasillaAnalisis}>
        <Image
          className={styles.imagenAnalisis}
          src={"/images/iconos-ui/resultados.png"}
          alt="icono de resultados"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.textosCasilla}>
        <dt>{nombre}</dt>
        {descripcion && (
          <dd>
            <strong>Descripcion:</strong> <br />
            {descripcion}
          </dd>
        )}
        {incluye && (
          <dd>
            <strong>Incluye: </strong>
            <ul>
              {incluye?.map(el => (
                <Link key={el} href={"/examenes/" + el}>
                  <li className={styles.incluyeEl}>{el}</li>
                </Link>
              ))}
            </ul>
          </dd>
        )}
        <dd>
          <strong>Indicaciones: </strong> <br />
          {indicaciones}
        </dd>
        <dd>
          <strong>Procedimiento: </strong> <br />
          {procedimiento}
        </dd>
      </div>
      <div className={styles.precios}>
        Precio: <br /> ${precio}
      </div>
    </div>
  );
}

export default CasillaPaquete;
