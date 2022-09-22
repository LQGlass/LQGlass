import LQGIcon from "./LQGIcon";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import LogButtons from "./LogButtons";

const Navbar = () => {
    return (
        
        <nav className={styles.nav}>
               <LQGIcon/> 

        
            <Link href={"/estudios"}>Estudios</Link>
            <Link href={"/sucursales"}>Sucursales</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/nosotros"}>Nosotros</Link>
            <Link href={"/resultados"}>Resultados</Link>
            <LogButtons />

    </nav>
        )
}


export default Navbar;