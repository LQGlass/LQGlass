import firebaseApp from "../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

//funcion para cerrar sesion utilizando "functions" de firebase

export default function cerrarSesion() {
  signOut(auth);
}
