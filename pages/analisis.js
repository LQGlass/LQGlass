import { Fragment } from "react";
import CasillaAnalisis from "../components/CasillaAnalisis";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "./analisis.module.scss";


function analisis(){
    return(
        <Fragment>
        <Navbar/>
        <div className={styles.analisisSection}>
        <h1>Nombre de la categoria</h1>
            <div className={styles.analisisWrapper}>
                <CasillaAnalisis />
                <CasillaAnalisis />
                <CasillaAnalisis />
                <CasillaAnalisis />
                <CasillaAnalisis />
                <CasillaAnalisis />
                <CasillaAnalisis />
                <CasillaAnalisis />
                <CasillaAnalisis />
            </div>
        </div>
        <Footer />

        </Fragment>

    )
}

export default analisis;