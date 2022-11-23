import styles from "../styles/main.module.scss";
import Image from "next/image";

const HeroImg=(props)=>{
    return (
        <div className={styles.heroImg}>
            <img className={styles.heroImg}
                src={props.src}
                alt={props.alt}
            />
        </div>
    )
}


export default HeroImg;