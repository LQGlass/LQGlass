import styles from "./Hero.module.scss";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

const Hero = ()=>{
    return(
        <div className={`${styles.hero} ${styles.container}`}>
        
            <HeroText
            title= "Al cuidado de tu salud."
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