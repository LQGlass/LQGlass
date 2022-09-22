import ButtonOutline from "./ButtonOutline";
import styles from "../styles/main.module.scss";
import TarjetaDescriptiva from "./TarjetaDescriptiva"


const CategoryIndex = () => {
    return (
        
        
        <section className={styles.categoryIndex}>
            <div>
                <h2>Estudios clinicos para cuidar tu salud.</h2>
            </div>
            <div className={styles.gridTarjetas}>
                <TarjetaDescriptiva nombreCategoria="Categoria" descripcion="Sunt dolor eu cillum ea. Do minim ullamco nulla sint velit velit eiusmod dolor nisi voluptate mollit eiusmod non. Ad occaecat elit adipisicing incididunt quis. Sunt aute consectetur quis anim nulla amet ut id."/>
                <TarjetaDescriptiva nombreCategoria="Categoria" descripcion="Sunt dolor eu cillum ea. Do minim ullamco nulla sint velit velit eiusmod dolor nisi voluptate mollit eiusmod non. Ad occaecat elit adipisicing incididunt quis. Sunt aute consectetur quis anim nulla amet ut id."/>
                <TarjetaDescriptiva nombreCategoria="Categoria" descripcion="Sunt dolor eu cillum ea. Do minim ullamco nulla sint velit velit eiusmod dolor nisi voluptate mollit eiusmod non. Ad occaecat elit adipisicing incididunt quis. Sunt aute consectetur quis anim nulla amet ut id."/>
                <TarjetaDescriptiva nombreCategoria="Categoria" descripcion="Sunt dolor eu cillum ea. Do minim ullamco nulla sint velit velit eiusmod dolor nisi voluptate mollit eiusmod non. Ad occaecat elit adipisicing incididunt quis. Sunt aute consectetur quis anim nulla amet ut id."/>
                <TarjetaDescriptiva nombreCategoria="Categoria" descripcion="Sunt dolor eu cillum ea. Do minim ullamco nulla sint velit velit eiusmod dolor nisi voluptate mollit eiusmod non. Ad occaecat elit adipisicing incididunt quis. Sunt aute consectetur quis anim nulla amet ut id."/>
                <TarjetaDescriptiva nombreCategoria="Categoria" descripcion="Sunt dolor eu cillum ea. Do minim ullamco nulla sint velit velit eiusmod dolor nisi voluptate mollit eiusmod non. Ad occaecat elit adipisicing incididunt quis. Sunt aute consectetur quis anim nulla amet ut id."/>
            </div>

            <ButtonOutline url="/estudios" content="Ver todas" />
        </section>

    );
}

export default CategoryIndex;