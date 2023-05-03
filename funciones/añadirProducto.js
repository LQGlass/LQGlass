import firebaseApp from "../firebase/firebase";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

//funcion para añadir producto por primera vez a firestore y crea un ID automatico

function quitarComillasDobles(str) {
  return str.replace(/"/g, "");
}

function añadirProducto(infoProducto) {
  const docRef = doc(
    collection(
      db,
      "categorias",
      quitarComillasDobles(infoProducto.categoria),
      "examenes"
    )
  );
  //se toma el ID generado automaticamente y se le pasa al objeto a guardar en firestore
  const producto = {
    ...infoProducto,
    id: docRef.id,
    nombre: quitarComillasDobles(infoProducto.nombre),
  };
  setDoc(docRef, producto);
}

/* funcion que tambien sirve para añadir productos pero en este caso pasa el ID, 
entonces aqui se utiliza tambien para
actualizar un producto ya existente recogiendo su ID */

function actualizarProducto(infoProducto) {
  const docRef = doc(
    collection(
      db,
      "categorias",
      quitarComillasDobles(infoProducto.categoria),
      "examenes"
    ),
    infoProducto.id
  );
  const producto = {
    ...infoProducto,
    nombre: quitarComillasDobles(infoProducto.nombre),
  };
  setDoc(docRef, producto);
}

export { añadirProducto, actualizarProducto };
