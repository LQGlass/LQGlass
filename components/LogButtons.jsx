import Button from "./Button"

const LogButtons = () => {
    return (
        <div className="logButtons">
            <Button class = "signIn" content = "Iniciar Sesión" />
            <Button class = "logIn" content = "Crear cuenta" />
        </div>
    )
}

export default LogButtons;