import Header from "./Header";
import styles from "../styles/main.module.scss";

const HeroText = (props)=>{

    return (
            <div className={styles.heroText}>
            <Header title = {props.title} />
            <p>{props.text}</p>

            </div>

    )
        
}

export default HeroText;