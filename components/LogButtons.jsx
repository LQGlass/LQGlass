import Link from "next/link";
import styles from "./LogButton.module.scss";

const LogButtons = () => {
    return (
        <div className="logButtons">
            <Link href={"/iniciar-sesion"}><button className={styles.logIn}>Iniciar Sesion</button></Link>
        </div>
    )
}

export default LogButtons;