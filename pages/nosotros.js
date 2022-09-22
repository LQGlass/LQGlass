import Header from "../components/Header"
import Navbar from "../components/Navbar"
import styles from "./nosotros.module.scss"
import Image from "next/image"
import Footer from "../components/Footer"

const nosotros = () => {
    return <div>
        <Navbar />
        <Header  title = "Nosotros"/>

        <div className={styles.nosotros}>
            <div className={styles.imagenNosotros}>
                <Image src="/images/logo.png" width={600} height={250} />
            </div>
            <div className={styles.textoNosotros}>
                <h2>Laboratorios Quimicos Glass</h2>
                <p>
                    Minim Lorem eu occaecat commodo. Sunt Lorem cillum quis tempor sint reprehenderit deserunt fugiat dolor proident. Laboris deserunt in nisi officia fugiat ut nulla reprehenderit. Cillum cillum proident qui veniam adipisicing non voluptate Lorem laboris velit aute elit. Cupidatat nisi ex officia ex sit. Anim cupidatat fugiat commodo consequat et nostrud mollit velit dolor adipisicing magna. Pariatur id ut in nulla eu ea adipisicing proident nulla ut.
                </p>
            </div>
        </div>
        <Footer />
        
    </div>
}

export default nosotros;