import Navbar from "../components/Navbar";
import styles from "./nosotros.module.scss";
import Footer from "../components/Footer";
import TituloHeader from "../components/TituloHeader";

const nosotros = () => {
  return (
    <>
      <Navbar />
      <div className={styles.section}>
        <TituloHeader clase={true} titulo="Nosotros" />

        <div className={styles.nosotros}>
          <div className={styles.block}>
            <div className={styles.texto}>
              <div>
                <h2>Laboratorios Químicos Glass</h2>
                <p className={styles.slogan}>
                  &ldquo;Al cuidado de tu salud&rdquo;
                </p>
              </div>
              <h3>¿Quiénes somos?</h3>
              <p>
                Laboratorios Químicos GLASS está conformado por un grupo de
                profesionales unidos por un mismo objetivo, brindarte la mejor
                atención en temas de salud, cuidando tu bienestar y de quienes
                te importan, capacitándonos constantemente para llevar a ti el
                mejor de los servicios en análisis clínicos y pruebas par COVID.
              </p>
            </div>
            <div className={styles.imagen}>
              <img src="/images/imagenes-nosotros/quienes-somos.jpg" />
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.imagen}>
              <img src="/images/imagenes-nosotros/mision-vision.jpg" />
            </div>

            <div className={styles.azul}>
              <h2>Misión Visión</h2>
              <div>
                <h3>Misión</h3>
                <p>
                  Laboratorios Químicos GLASS está conformado por un grupo de
                  profesionales unidos por un mismo objetivo, brindarte la mejor
                  atención en temas de salud, cuidando tu bienestar y de quienes
                  te importan, capacitándonos constantemente para llevar a ti el
                  mejor de los servicios en análisis clínicos y pruebas par
                  COVID.
                </p>
              </div>
              <div>
                <h3>Visión</h3>
                <p>
                  Laboratorios Químicos GLASS está conformado por un grupo de
                  profesionales unidos por un mismo objetivo, brindarte la mejor
                  atención en temas de salud, cuidando tu bienestar y de quienes
                  te importan, capacitándonos constantemente para llevar a ti el
                  mejor de los servicios en análisis clínicos y pruebas par
                  COVID.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.texto}>
              <h2>Valores</h2>
              <div className={styles.valores}>
                <div className={styles.valor}>Compromiso</div>
                <div className={styles.valor}>Calidad</div>
                <div className={styles.valor}>Responsabilidad</div>
                <div className={styles.valor}>Puntualidad</div>
              </div>
            </div>
            <div className={styles.imagen}>
              <img src="/images/imagenes-nosotros/valores.jpg" />
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.imagen}>
              <img src="/images/imagenes-nosotros/que-hace.jpg" />
            </div>

            <div className={styles.azul}>
              <h2>¿Qué hace Laboratorios Químicos Glass</h2>
              <p>
                Es una empresa dedicada recolectar y analiza muestras biológicas
                humanas, que contribuyen al estudio, prevención e investigación
                de los diferentes parámetros de salud.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default nosotros;

{
  /* 
<div className={styles.block}>
  <div className={styles.imagen}>
    <img src="/images/nosotros.jpg" />
  </div>
  <div className={styles.azul}>
    <div className={styles.text}>
      <h2>¿Que hace Laboratorios Quimicos Glass</h2>
      <p>
        Es una empresa dedicada recolectar y analiza muestras biológicas
        humanas, que contribuyen al estudio, prevención e investigación
        de los diferentes parámetros de salud.
      </p>
    </div>
  </div>
</div> */
}
