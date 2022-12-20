import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import InicarSesionForm from "../../../components/IniciarSesionForm";
import firebaseApp from "../../../firebase/firebase";
import {getAuth, onAuthStateChanged} from "firebase/auth";
const auth = getAuth(firebaseApp);

function cms() {
  const [usuario, setUsuario] = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  })
  return (
    <Container fluid>
      <hr />
      {usuario ? <h2>Informacion personal de usuario</h2> : <InicarSesionForm />}
    </Container>
  );
}

export default cms;
