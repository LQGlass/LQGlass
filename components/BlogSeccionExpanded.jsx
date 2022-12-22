import styles from "./BlogSeccion.module.scss";
import ButtonOutline from "./ButtonOutline";
import CasillaBlog from "./CasillaBlog";

function BlogSeccion (){
    return(
        <section className={styles.blogSeccion}>
        <div className={styles.blogWrapper}>
          <CasillaBlog titulo="Titulo de la Nota" descripcion="Consequat duis tempor fugiat sunt voluptate sit consequat do. Sint qui irure voluptate ad dolore ipsum duis incididunt. Aliquip ullamco consequat tempor veniam velit do irure. " />
          <CasillaBlog titulo="Titulo de la Nota" descripcion="Consequat duis tempor fugiat sunt voluptate sit consequat do. Sint qui irure voluptate ad dolore ipsum duis incididunt. Aliquip ullamco consequat tempor veniam velit do irure. " />
          <CasillaBlog titulo="Titulo de la Nota" descripcion="Consequat duis tempor fugiat sunt voluptate sit consequat do. Sint qui irure voluptate ad dolore ipsum duis incididunt. Aliquip ullamco consequat tempor veniam velit do irure. " />
        </div>
      </section>
    )
}


export default BlogSeccion;