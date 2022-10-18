
import styles from "./LQGIcon.module.scss";
import Link from "next/link";


const LQGIcon = () =>{



    return(
        <Link href="/">
            <img className={styles.logo}src="/images\logo.png" />
        </Link>
    
        ) 
}
    



export default LQGIcon;