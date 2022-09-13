import Button from "./Button"
import styles from "../styles/main.module.scss";

const LogButtons = () => {
    return (
        <div className="logButtons">
            <Button class = {styles.logIn} content = "Crear cuenta" />
            <Button class = {styles.signIn} content = "Iniciar Sesión" />
        </div>
    )
}

export default LogButtons;