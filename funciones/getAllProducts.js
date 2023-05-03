import firebaseApp from "../firebase/firebase";
import {
  getFirestore,
  collectionGroup,
  getDocs,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";
const db = getFirestore(firebaseApp);

//funcion para obtener todos los productos de las subcolecciones utilizando "functions de firebase"

export default async function getAllProducts() {
  //se declara un array vacio para almacenar los datos
  const categorias = [];
  //se llama a todas las categorias con subcoleccion de examenes
  const collectionRef = query(collectionGroup(db, "examenes"));
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  //se mapea cada documento para hacer push de
  //sus datos en el array categorias
  snapshot.forEach(doc => {
    categorias.push(doc.data());
  });
  return categorias;
}
