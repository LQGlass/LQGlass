import styles from "../styles/main.module.scss";
import Image from "next/image";

const HeroImg=(props)=>{
    return (
        <div className={styles.heroImg}>
            <Image
                src={props.src}
                alt={props.alt}
                width={props.width}
                height={props.height}
            />
        </div>
    )
}


export default HeroImg;