import LQGIcon from "./LQGIcon";
import LogButtons from "./LogButtons";
import Link from "next/link";
import styles from "../styles/main.module.scss";
import LinksNav from "./LinksNav";

const Navbar = () => {
    return (

        <header className={styles.header} >
                
            <LQGIcon/> 
            <LinksNav />
            <LogButtons />
        </header>
        )
}


export default Navbar;