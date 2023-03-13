import styles from "./DireccionCasilla.module.scss";
export default function DireccionCasilla({ nombreDireccion, direccion }) {
  return (
    <div className={styles.casilla}>
      <div className={styles.direccionCasilla}>
        <h2>{nombreDireccion}</h2>
        <address>{direccion}</address>
      </div>
      <div className={styles.ubicacion}>
        <a target={"_blank"} href="https://goo.gl/maps/uJBYXhB8yJGBTHVz7">
          <img
            className={styles.ubicacionImg}
            src="/images/ubicacion.png"
            alt="mapa"
          />
        </a>
      </div>
    </div>
  );
}
