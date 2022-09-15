import styles from "../styles/main.module.scss";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

const Hero = ()=>{
    return(
        <div className={`${styles.hero} ${styles.container}`}>
            <HeroText
            title= "Al cuidado de tu salud."
            text ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
            />
            <HeroImg
                src="/images/logo.png"
                alt="logo"
                width="640"
                height="260"
            />
        
        </div>
    )
}

export default Hero;