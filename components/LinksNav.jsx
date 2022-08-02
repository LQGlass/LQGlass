import styles from "../styles/main.module.scss";
import Link from "next/link";

const LinksNav = ()=>{
    return(<ul className={styles.navLinks}>
        <li>
            <Link href="/estudios">
                <a>Estudios</a>
            </Link>
        </li>
        <li>
        <Link href="/sucursales">
                <a>Sucursales</a>
            </Link>
        </li>
        <li><Link href="/blog">
                <a>Blog</a>
            </Link></li>
        <li><Link href="/nosotros">
                <a>Nosotros</a>
            </Link></li>
        <li><Link href="/resultados">
                <a>Resultados</a>
            </Link></li>
    </ul>)
    
}

export default LinksNav;