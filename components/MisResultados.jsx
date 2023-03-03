import { useState, useEffect } from "react";
import TableDocuments from "./TableDocuments";
import {
  where,
  getFirestore,
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import firebaseApp from "../firebase/firebase";
const db = getFirestore(firebaseApp);

export default function MisResultados({ folios, user }) {
  const [resultados, setresultados] = useState(null);
  useEffect(() => {
    async function getData() {
      let resultados = [];
      //funcion para llamar los datos desde firestore
      folios.forEach(async element => {
        const collectionRef = query(
          collection(db, "resultados"),
          where("folio", "==", element),
          where("email", "==", user.email)
        );
        //se genera un snapshor con todos los documentos
        const snapshot = await getDocs(collectionRef);
        //se mapea cada documento para hacer push de
        //sus datos en el array categorias
        snapshot.forEach(doc => {
          resultados.unshift(doc.data());
        });
      });
      setresultados(resultados);
    }
    getData();
  }, []);
  return (
    <>
      <h3>Mis Resultados</h3>
      {resultados && <TableDocuments documents={resultados} />}
    </>
  );
}
