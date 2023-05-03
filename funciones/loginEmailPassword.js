import firebaseApp from "../firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp);

//funcion para iniciar sesion con correo y contraseña, llamando "functions" de firebase
async function loginEmailPassword(email, password) {
  signInWithEmailAndPassword(auth, email, password);
}

export default loginEmailPassword;
