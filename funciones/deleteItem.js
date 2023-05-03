import firebaseApp from "../firebase/firebase";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

//funcion para borrarItems utilizando "functions" de firebase

export default async function deleteItem(item) {
  const collectionRef = collection(
    db,
    "categorias",
    item.categoria,
    "examenes"
  );
  const docuRef = doc(collectionRef, item.id);
  const deleted = await deleteDoc(docuRef);
  return deleted;
}
