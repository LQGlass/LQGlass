import styles from "./BlogSeccion.module.scss";
import CasillaBlog from "./CasillaBlog";
import TituloHeader from "./TituloHeader";

function BlogSeccion() {
  return (
    <section className={styles.blogSeccion}>
      <TituloHeader clase={true} titulo="Blog" />
      <div className={styles.blogWrapper}>
        <CasillaBlog
          titulo="Titulo de la Nota"
          descripcion="Consequat duis tempor fugiat sunt voluptate sit consequat do. Sint qui irure voluptate ad dolore ipsum duis incididunt. Aliquip ullamco consequat tempor veniam velit do irure. "
        />
        <CasillaBlog
          titulo="Titulo de la Nota"
          descripcion="Consequat duis tempor fugiat sunt voluptate sit consequat do. Sint qui irure voluptate ad dolore ipsum duis incididunt. Aliquip ullamco consequat tempor veniam velit do irure. "
        />
        <CasillaBlog
          titulo="Titulo de la Nota"
          descripcion="Consequat duis tempor fugiat sunt voluptate sit consequat do. Sint qui irure voluptate ad dolore ipsum duis incididunt. Aliquip ullamco consequat tempor veniam velit do irure. "
        />
      </div>
    </section>
  );
}

export default BlogSeccion;
