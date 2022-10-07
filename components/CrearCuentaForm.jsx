import styles from "./CrearCuentaForm.module.scss";

function CrearCuentaForm() {
  return (
    <div className={styles.crearCuentaForm}>
      <form action="/" type="submit">
        <input type="email" name="email" id="email" placeholder="Correo" />
        <label htmlFor="email">*Útiliza el mismo correo proporcionado el día de tus examenes.</label>
        <input type="text" name="name" id="name" placeholder="Nombre" />
        <input
          type="text"
          name="apellidos"
          id="apellidos"
          placeholder="Apellidos"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
        />
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
}

export default CrearCuentaForm;
