import styles from "../styles/main.module.scss";
import HeroImg from "./HeroImg.jsx"

function Header({title}){
    return (
        <div className={styles.hero}>
            <h1>{title ? title : "Default title"}</h1>
        </div>
    );

}

export default Header;