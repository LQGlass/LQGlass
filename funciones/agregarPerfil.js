import firebaseApp from "../firebase/config";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

//funcion para añadir producto por primera vez a firestore y crea un ID automatico

function agregarPerfil(infoProducto) {
  const docRef = doc(collection(db, "perfiles"));
  //se toma el ID generado automaticamente y se le pasa al objeto a guardar en firestore
  setDoc(docRef, { ...infoProducto, id: docRef.id });
}

/* funcion que tambien sirve para añadir productos pero en este caso pasa el ID, 
entonces aqui se utiliza tambien para
actualizar un producto ya existente recogiendo su ID */

function actualizarPerfil(infoProducto) {
  const docRef = doc(collection(db, "perfiles"), infoProducto.id);
  setDoc(docRef, infoProducto);
}

export { agregarPerfil, actualizarPerfil };
