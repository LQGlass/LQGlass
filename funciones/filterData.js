import firebaseApp from "../firebase/config";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  collectionGroup,
  limit
} from "firebase/firestore";
const db = getFirestore(firebaseApp);

export async function filterData(stringSearch) {
  const docsFiltered = [];
  const collectionRef = query(collectionGroup(db, "examenes"));
  const queryNombre = query(collectionRef, where("nombre", "==", stringSearch), limit(5));
  const queryCategoria = query(
    collectionRef,
    where("categoria", "==", stringSearch)
  );
  console.log(queryNombre, queryCategoria)

  const arraySnapshots = await Promise.all([
    getDocs(queryNombre),
    getDocs(queryCategoria),
  ]);

  arraySnapshots.forEach((snapshot) => {
    snapshot.forEach((doc) => {
      docsFiltered.push(doc.data());
    });
  });
  console.log(docsFiltered);
  return docsFiltered;
}
