import Button from "./Button"
import styles from "./LogButton.module.scss";

const LogButtons = () => {
    return (
        <div className="logButtons">
            <Button class = {styles.logIn} url="/crear-cuenta" content = "Crear cuenta" />
            <Button class = {styles.signIn} url="/iniciar-sesion" content = "Iniciar Sesión" />
        </div>
    )
}

export default LogButtons;