import styles from "./CrearCuentaForm.module.scss";

function InicarSesionForm() {
  return (
    <div className={styles.crearCuentaForm}>
      <form action="/perfil" type="submit">
        <input type="email" name="email" id="email" placeholder="Correo" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default InicarSesionForm;
