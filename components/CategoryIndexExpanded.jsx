import styles from "./CategoryIndexExpanded.module.scss";
import TarjetaDescriptiva from "./TarjetaDescriptiva";
const CategoryIndexExpanded = ({ categories }) => {
  const renderTarjetas = (categorias) => {
    return categorias.map((categorie, index) => (
      <TarjetaDescriptiva
        key={index}
        image={"./images/medicalIcons/"+index+".png"}
        nombreCategoria={categorie ? categorie : "Cargando"}
        descripcion={categorie ? categorie : "Cargando"}
      />
    ));
  };
  return (
    <div className={styles.container}>
      <div className={styles.subtitulo}>
        <h2>Estudios clinicos para cuidar tu salud.</h2>
        <div className={styles.lineaSubrayado}></div>
      </div>
      <section className={styles.categoryIndex}>
        <div className={styles.gridTarjetas}>
          {categories && renderTarjetas(categories)}
          {!categories && <h2>Cargando...</h2>}
        </div>
      </section>
    </div>
  );
};

export default CategoryIndexExpanded;
