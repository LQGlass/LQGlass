import Header from "../components/Header"
import Navbar from "../components/Navbar"
import LogButtons from "../components/LogButtons"
import styles from "./resultados.module.scss";

const resultados = () => {
    return <div>
        <Navbar />
        <Header  title = "Resultados"/>
        <div className={styles.logButtons}>
        <LogButtons />
        <p>Inicie Sesión o cree una cuenta con el mismo correo que proporciono el dia de sus examenes clinicos.</p>
        </div>

        <div>
            <h3 className={styles.textResultados}>Aqui podrá ver sus resultados cuando esten listos</h3>
        </div>
    </div>
}

export default resultados;