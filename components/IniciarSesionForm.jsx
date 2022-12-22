import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import styles from "./IniciarSesionForm.module.scss";
import FirebaseApp from "../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(FirebaseApp);
import Footer from "./Footer";

function IniciarSesionForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [Logged, setLogged] = useState(null);
  async function submitHandler(e) {
    e.preventDefault();
    const correo = document.getElementById("formCorreo").value;
    const contra = e.target.formContra.value;
    if (isRegistering) {
      const usuario = createUserWithEmailAndPassword(auth, correo, contra);
    } else {
      signInWithEmailAndPassword(auth, correo, contra);
    }
  }
  return (
    <Container className={styles.logComponent}>
      <h1>{isRegistering ? "Registrate" : "Iniciar Sesión"}</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formCorreo">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo" />
        </Form.Group>

        <Form.Group controlId="formContra">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        {/*  {
          isRegister === false && <>
          <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group controlId="formContraDos">
          <Form.Label>Repetir contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group></>
        } */}
        <Button
        className={styles.signButton}
          style={{ width: "300px", display: "block" }}
          type="submit"
        >
          {isRegistering ? "Registrate" : "Inicia Sesión"}
        </Button>
        <Button
          onClick={() => setIsRegistering(!isRegistering)}
          variant="secondary"
          style={{ width: "300px", display: "block" }}
        >
          {isRegistering
            ? "¿Ya tienes cuenta? Inicia Sesión"
            : "¿No tienes cuenta? Registrate"}
        </Button>
      </Form>
    </Container>
  );
}

export default IniciarSesionForm;
