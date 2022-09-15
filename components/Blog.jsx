import CasillaBlog from "./CasillaBlog";
import styles from "../styles/main.module.scss";

function crearEntrada(entrada) {
  return (
    <CasillaBlog
      key={entrada.id}
      titulo={entrada.title}
      descripcion={entrada.body}
    />
  );
}

function Blog(props) {
  return (
    <div className={styles.blogHome}>
      <h2>Estudios clinicos para cuidar tu salud.</h2>
      <div className={styles.blogHomeWrapper}>
        <CasillaBlog
          key={1}
          titulo={"Hola"}
          descripcion={"Hola esta es la descripcion"}
        />
      </div>
    </div>
  );
}

export default Blog;
