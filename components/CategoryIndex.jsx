import ButtonOutline from "./ButtonOutline";
import styles from "./CategoryIndex.module.scss";
import TarjetaDescriptiva from "./TarjetaDescriptiva";

const CategoryIndex = (props) => {
  //function for the creation of the description blocks for the category section
  const renderTarjetas = (categories) => {
    return categories.map((categorie) => (
      <TarjetaDescriptiva
        key={categorie.title}
        image={"./images/medicalIcons/medical-history.png"}
        nombreCategoria={categorie ? categorie.title : "Cargando"}
        descripcion={categorie ? categorie.description : "Cargando"}
      />
    ));
  };
  return (
    <section className={styles.categoryIndex}>
      <div>
        <h2>Estudios clinicos para cuidar tu salud.</h2>
      </div>
      <div className={styles.gridTarjetas}>
        {renderTarjetas(props.contenido.categories)}
      </div>

      <ButtonOutline url="/estudios" content="Ver todas" />
    </section>
  );
};

export default CategoryIndex;
