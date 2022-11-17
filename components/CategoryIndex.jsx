import Button from "./Button";
import styles from "./CategoryIndex.module.scss";
import TarjetaDescriptiva from "./TarjetaDescriptiva";

const CategoryIndex = ({contenido}) => {
  //function for the creation of the description blocks for the category section
  const renderTarjetas = (categories) => {
    return categories.map((categorie, index) => (
      <TarjetaDescriptiva
        key={index}
        image={"./images/medicalIcons/"+index+".png"}
        nombreCategoria={categorie ? categorie : "Cargando"}
        descripcion={categorie ? categorie : "Cargando"}
      />
    ));
  };
  return (
    
    <section className={styles.categoryIndex}>
      <div className={styles.subtitulo}>
        <h2>Estudios clinicos para cuidar tu salud.</h2>
        <div className={styles.lineaSubrayado}></div>
      </div>
      <div className={styles.gridTarjetas}>
        {renderTarjetas(contenido.slice(0,6))}
      </div>

      <Button url="/estudios" content="Ver todas" />
    </section>
  );
};

export default CategoryIndex;
