import Link from "next/link";
import LQGIcon from "./LQGIcon";

const Navbar = () => {
    return (
        
        <nav className="navBar">
               <LQGIcon/> 

        <ul>
            <li><Link className="linkNav" href={"/estudios"}>Estudios</Link></li>
            <li><Link className="linkNav" href={"/sucursales"}>Sucursales</Link></li>
            <li><Link className="linkNav" href={"/blog"}>Blog</Link></li>
            <li><Link className="linkNav" href={"/nosotros"}>Nosotros</Link></li>
            <li><Link className="linkNav" href={"/resultados"}>Resultados</Link></li>
        </ul>
    </nav>
        )
}


export default Navbar;