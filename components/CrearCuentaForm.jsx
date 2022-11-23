import styles from "./CrearCuentaForm.module.scss";
import { useState } from "react";
function CrearCuentaForm() {
  const [crear, setcrear] = useState(false);
  const submitHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <div className={styles.signInWrapper}>
    <h2>Inicia Sesion</h2>
    <div className={styles.crearCuentaForm}>
      <form onSubmit={submitHandler} type="submit">
        <input type="email" name="email" id="email" placeholder="Correo" />
        <label htmlFor="email">
          *Útiliza el mismo correo proporcionado el día de tus examenes.
        </label>
        {crear && (
          <>
            <input type="text" name="name" id="name" placeholder="Nombre" />
            <input
              type="text"
              name="apellidos"
              id="apellidos"
              placeholder="Apellidos"
            />
          </>
        )}
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
        />

        {crear && <button type="submit">Crear Cuenta</button>}
        {!crear && <button type="submit">Iniciar Sesión</button>}
        {crear ? (
          <>
            <p>¿Ya tienes cuenta? Inicia Sesion</p>{" "}
            <button className={styles.botonSecundario} onClick={() => setcrear(!crear)}>Inicia sesion</button>{" "}
          </>
        ) : (
          <>
            <p>No tienes cuenta aun?</p>{" "}
            <button className={styles.botonSecundario} onClick={() => setcrear(!crear)}>Crear cuenta</button>
          </>
        )}
      </form>
    </div></div>
  );
}

export default CrearCuentaForm;
