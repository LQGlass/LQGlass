import Header from "../components/Header"
import Navbar from "../components/Navbar"
import styles from "./sucursales.module.scss";
import Footer from "../components/Footer";

const sucursales = () => {
    return <div className={styles.sucursales}>
        <Navbar />
        <Header  title = "Sucursales"/>
        <section id={styles.sucursales}>
        <div className={styles.sucursal}>
            <h4>Direccion 1</h4>
            <address>Av test, direccion prueba, 543</address>
        </div>
        <div className={styles.sucursal}>
            <h4>Direccion 2</h4>
            <address>Av test, direccion prueba, 543</address>
        </div>
        <div className={styles.sucursal}>
            <h4>Direccion 3</h4>
            <address>Av test, direccion prueba, 543</address>
        </div>
        </section>

        <Footer />

    </div>
}

export default sucursales;