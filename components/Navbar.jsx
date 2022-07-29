import LQGIcon from "./LQGIcon";
import LogButtons from "./LogButtons";
import Link from "next/link";

const Navbar = () => {
    return (

        <div>
            <header className="container" >
                
               <LQGIcon/> 
        
        <nav className="nav">

        <ul className="navLinks">
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
        </ul>
    </nav>

    <LogButtons />
            </header>
        </div>
        )
}


export default Navbar;