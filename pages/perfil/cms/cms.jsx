import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomeCMS from "../../../components/CMSComponents/HomeCMS";
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
      {usuario ? <HomeCMS /> : <InicarSesionForm />}
    </Container>
  );
}

export default cms;
