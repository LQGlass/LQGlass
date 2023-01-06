import styles from "./BlogSeccion.module.scss";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";
import CasillaBlog from "./CasillaBlog";
import TituloDivisor from "./TituloDivisor";

function BlogSeccion() {
  return (
    <>
      <section className={styles.blogSeccion}>
        <TituloDivisor titulo="Blog" />
        <div className={styles.container}>
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

          <ButtonOutline url="/blog" content="Ver más" />
        </div>
      </section>
    </>
  );
}

export default BlogSeccion;
