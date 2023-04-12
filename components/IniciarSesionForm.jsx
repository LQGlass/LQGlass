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
import {
  validateEmail,
  validatePassword,
  validateRegister,
} from "../utils/validators";

function IniciarSesionForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [Logged, setLogged] = useState(null);
  const [errorStatus, setErrorStatus] = useState("");

  async function registerUser(
    user,
    correo,
    name,
    lname,
    password,
    confirmPassword
  ) {
    if (!user || !user.uid) {
      console.error("User ID not found");
      return;
    }

    const validationErrors = validateRegister(
      name,
      lname,
      correo,
      password,
      confirmPassword
    );

    if (Object.keys(validationErrors).length > 0) {
      console.error("Invalid user information: ", validationErrors);
      return;
    }

    try {
      const formattedName =
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      const formattedLname =
        lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
      const formattedCorreo = correo.toLowerCase();

      await setDoc(doc(db, "users", user.uid), {
        name: formattedName,
        last: formattedLname,
        id: user.uid,
        email: formattedCorreo,
      });
      setLogged(true);
      return {
        name: formattedName,
        last: formattedLname,
        id: user.uid,
        email: formattedCorreo,
      };
    } catch (e) {
      console.error("Error adding document: ", e);
      setErrorStatus(
        "Error al registrar el usuario, verifique la información o intente mas tarde."
      );
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    const correo = document.getElementById("formCorreo").value;
    const contra = e.target.formContra.value;

    if (!validateEmail(correo)) {
      setErrorStatus("Por favor ingresa un correo electrónico válido.");
      return;
    }

    if (!validatePassword(contra)) {
      setErrorStatus("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (isRegistering) {
      const name = e.target.formName.value;
      const lname = e.target.formLName.value;

      if (!name || !lname) {
        setErrorStatus("Por favor ingresa tu nombre y apellido.");
        return;
      }

      if (contra !== e.target.formContraDos.value) {
        setErrorStatus("Las contraseñas no coinciden.");
        return;
      }

      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          correo,
          contra
        );
        await registerUser(
          user,
          correo,
          name,
          lname,
          contra,
          e.target.formContraDos.value
        );
        await sendEmailVerification(user);
        setLogged(true);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        setLogged(false);
        if (
          errorMessage === "User ID not found" ||
          errorMessage === "Invalid user information" ||
          errorMessage === "Error adding document"
        ) {
          return;
        }
        if (errorCode === "auth/user-not-found") {
          setErrorStatus(
            "No se encontró un usuario con este correo electrónico."
          );
        } else if (errorCode === "auth/wrong-password") {
          setErrorStatus("La contraseña ingresada es incorrecta.");
        } else if (errorCode === "auth/too-many-requests") {
          setErrorStatus(
            "El acceso a esta cuenta ha sido temporalmente bloqueado debido a varios intentos fallidos. Ingrese mas tarde."
          );
        } else if (errorCode === "auth/email-already-in-use") {
          setErrorStatus("El email ya ha sido ocupado anteriormente");
        } else {
          setErrorStatus(errorMessage);
        }
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contra);
        setLogged(true);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/user-not-found") {
          setErrorStatus(
            "No se encontró un usuario con este correo electrónico."
          );
        } else if (errorCode === "auth/wrong-password") {
          setErrorStatus("La contraseña ingresada es incorrecta.");
        } else if (errorCode === "auth/too-many-requests") {
          setErrorStatus(
            "El acceso a esta cuenta ha sido temporalmente bloqueado debido a varios intentos fallidos. Ingrese mas tarde."
          );
        } else if (errorCode === "auth/email-already-in-use") {
          setErrorStatus("El email ya ha sido ocupado anteriormente");
        } else {
          setErrorStatus(errorMessage);
        }

        setLogged(false);
      }
    }
  }

  //Recovery password function
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

  return (
    <Container className={styles.logComponent}>
      <h1>{isRegistering ? "Registrate" : "Iniciar Sesión"}</h1>
      <p className={styles.errorMessageText}>{errorStatus}</p>
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
