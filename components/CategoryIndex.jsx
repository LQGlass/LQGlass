import Button from "./Button";
import styles from "./CategoryIndex.module.scss";
import TarjetaDescriptiva from "./TarjetaDescriptiva";
import TituloDivisor from "./TituloDivisor";

const CategoryIndex = ({ contenido }) => {
  //function for the creation of the description blocks for the category section
  const renderTarjetas = categories => {
    return categories.map((categorie, index) => (
      <TarjetaDescriptiva
        key={index}
        image={"/images/iconos-categoria/" + categorie + ".png"}
        nombreCategoria={categorie ? categorie : "Cargando"}
        descripcion={categorie ? categorie : "Cargando"}
      />
    ));
  };
  return (
    <>
      <section id={"categorias"} className={styles.categoryIndex}>
        <TituloDivisor titulo="Categorias de estudio." />
        <div className={styles.gridTarjetas}>
          {renderTarjetas(contenido.slice(0, 6))}
        </div>
        <div className={styles.botonCategorias}>
          <Button url="/estudios" class="boton-examenes" content="Ver todas" />
        </div>
      </section>
    </>
  );
};

export default CategoryIndex;
