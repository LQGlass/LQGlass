import styles from "./BlogSeccion.module.scss";
import CasillaBlog from "./CasillaBlog";
import TituloHeader from "./TituloHeader";

function BlogSeccion() {
  return (
    <section className={styles.blogSeccion}>
      <TituloHeader clase={true} titulo="Blog" />
      <div className={styles.blogWrapper}>
        <CasillaBlog
          titulo="Análisis de laboratorio: clave en la prevención de enfermedades"
          descripcion="Los análisis de laboratorio son una herramienta esencial en la prevención de enfermedades en todas las edades. Los análisis de sangre, orina, heces, entre otros, son útiles para detectar enfermedades tempranamente, lo que permite un tratamiento oportuno y eficaz. "
          urlImagenBlog="/images/blog/blog.jpg"
          link="/blog/articulo1"
        />
        <CasillaBlog
          titulo="La importancia de los análisis preventivos en la detección temprana de enfermedades"
          descripcion="Los análisis preventivos son herramientas esenciales para la detección temprana de enfermedades. A menudo, las personas acuden al médico solo cuando experimentan síntomas, pero los análisis preventivos pueden ayudar a identificar problemas de salud antes de que se manifiesten. "
          urlImagenBlog="/images/blog/blog1.jpg"
          link="/blog/articulo2"
        />
        <CasillaBlog
          titulo="Los análisis de laboratorio más solicitados para la prevención de enfermedades crónicas"
          descripcion="Los análisis de laboratorio son una herramienta esencial para la prevención de enfermedades crónicas. Muchas enfermedades crónicas pueden ser prevenidas o controladas tempranamente a través de la detección de biomarcadores específicos en los análisis de laboratorio."
          urlImagenBlog="/images/blog/blog2.jpg"
          link="/blog/articulo3"
        />
      </div>
    </section>
  );
}

export default BlogSeccion;
