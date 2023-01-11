import styles from "./DireccionCasilla.module.scss";
export default function DireccionCasilla({ nombreDireccion, direccion }) {
  return (
    <div>
      <div className={styles.direccionCasilla}>
        <h2>{nombreDireccion}</h2>
        <address>{direccion}</address>
      </div>
      <div className={styles.ubicacion}>
        <a target={"_blank"} href="https://goo.gl/maps/uJBYXhB8yJGBTHVz7">
          <img
            className={styles.ubicacionImg}
            src="/images/ubicacion.png"
            width={600}
            alt="mapa"
          />
        </a>
      </div>
    </div>
  );
}
