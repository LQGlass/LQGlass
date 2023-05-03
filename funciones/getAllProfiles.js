import firebaseApp from "../firebase/config";
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

export default async function getAllProfiles() {
  //se declara un array vacio para almacenar los datos
  const perfiles = [];
  //se llama a todas las perfiles con subcoleccion de examenes
  const collectionRef = query(collectionGroup(db, "perfiles"));
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  //se mapea cada documento para hacer push de
  //sus datos en el array perfiles
  snapshot.forEach((doc) => {
    perfiles.push(doc.data());
  });
  return perfiles;
}
