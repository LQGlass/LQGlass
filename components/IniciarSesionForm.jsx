import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import styles from "./IniciarSesionForm.module.scss";
import firebaseApp from "../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(firebaseApp);
import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

function IniciarSesionForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [Logged, setLogged] = useState(null);

  async function registerUser(user, correo, name, lname) {
    if (!user || !user.uid) {
      console.error("User ID not found");
      return;
    }
    if (!name || !lname || !correo) {
      console.error("Invalid user information");
      return;
    }

    try {
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        last: lname,
        id: user.uid,
        email: correo,
      });

      console.log("Document written with ID: ", user.uid);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function passwordRecoverHandler(e) {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        location.reload();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  async function submitHandler(e) {
    e.preventDefault();
    const correo = document.getElementById("formCorreo").value;
    const contra = e.target.formContra.value;

    if (!correo || correo.trim() === "") {
      alert("Por favor ingresa tu correo.");
      return;
    }

    if (!contra || contra.trim() === "") {
      alert("Por favor ingresa tu contraseña.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, correo, contra);
      setLogged(true);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === "auth/user-not-found") {
        alert("No se encontró un usuario con este correo electrónico.");
      } else if (errorCode === "auth/wrong-password") {
        alert("La contraseña ingresada es incorrecta.");
      } else {
        alert(errorMessage);
      }

      setLogged(false);
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
        {isRegistering === true && (
          <>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group controlId="formLName">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Apellidos" />
            </Form.Group>
          </>
        )}
        <Form.Group controlId="formContra">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        {isRegistering === true && (
          <>
            <Form.Group controlId="formContraDos">
              <Form.Label>Repetir contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
          </>
        )}
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
        <p className={styles.forget} onClick={passwordRecoverHandler}>
          ¿Olvidaste la contraseña?
        </p>
      </Form>
    </Container>
  );
}

export default IniciarSesionForm;
