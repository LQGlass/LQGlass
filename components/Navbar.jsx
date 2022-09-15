import LQGIcon from "./LQGIcon";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        
        <nav className={styles.header}>
               <LQGIcon/> 

        <div className="navlinks">
            <Link className="linkNav" href={"/estudios"}>Estudios</Link>
            <Link className="linkNav" href={"/sucursales"}>Sucursales</Link>
            <Link className="linkNav" href={"/blog"}>Blog</Link>
            <Link className="linkNav" href={"/nosotros"}>Nosotros</Link>
            <Link className="linkNav" href={"/resultados"}>Resultados</Link>
        </div>
    </nav>
        )
}


export default Navbar;