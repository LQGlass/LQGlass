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
          titulo={"Titulo Nota"}
          descripcion={"Lorem ullamco amet excepteur aute nisi sunt sit laborum qui ex proident cillum nulla amet. Sit ut minim amet Lorem exercitation ad tempor proident ut. Magna minim consectetur cupidatat minim. Aliqua fugiat reprehenderit in est."}
        />
      </div>
    </div>
  );
}

export default Blog;
