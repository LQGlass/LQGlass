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
        image={"./images/medicalIcons/" + index + ".png"}
        nombreCategoria={categorie ? categorie : "Cargando"}
        descripcion={categorie ? categorie : "Cargando"}
      />
    ));
  };
  return (
    <section className={styles.categoryIndex}>
      <TituloDivisor titulo="Categorias de estudio." />
      <div className={styles.gridTarjetas}>
        {renderTarjetas(contenido.slice(0, 6))}
      </div>

      <Button url="/estudios" content="Ver todas" />
    </section>
  );
};

export default CategoryIndex;
