import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import loginEmailPassword from "../functions/loginEmailPassword";
import styles from "./IniciarSesionForm.module.scss";

function InicarSesionForm() {
  const [Logged, setLogged] = useState(null);
  async function submitHandler(e) {
    e.preventDefault();
    const correo = document.getElementById("formCorreo").value;
    const contra = e.target.formContra.value;
    await loginEmailPassword (correo, contra);
  }
  return (
    <Container>
      <h1>Inicia sesión, por favor</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group id="formCorreo">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo" />
        </Form.Group>

        <Form.Group id="formContra">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  );
}

export default InicarSesionForm;

/* <div className={styles.crearCuentaForm}>
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
    </div> */
