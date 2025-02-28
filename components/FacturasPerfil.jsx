import { useState, useEffect } from "react";
import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  collection,
  where,
  query,
  getDocs,
  updateDoc,
  orderBy,
  limit,
} from "firebase/firestore";
const storage = getStorage(firebaseApp);
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import firebaseApp from "../firebase/firebase";
const db = getFirestore(firebaseApp);
import styles from "./FacturasPerfil.module.scss";

export default function FacturasPerfil({ user }) {
  const [facturas, setFacturas] = useState();
  useEffect(() => {
    async function getData() {
      let facturasRecibidas = [];
      //funcion para llamar los datos desde firestore
      const collectionRef = query(
        collection(db, "facturas-solicitadas"),
        where("email", "==", user.email),
        orderBy("uploadDate"),
        limit(25)
      );
      //se genera un snapshor con todos los documentos
      const snapshot = await getDocs(collectionRef);
      //se mapea cada documento para hacer push de
      //sus datos en el array categorias
      snapshot.forEach(doc => {
        facturasRecibidas.unshift(doc.data());
      });
      setFacturas(facturasRecibidas);
    }
    getData();
  }, [user]);
  return (
    <>
      <h2>Facturas</h2>

      <p>
        <strong>
          En este lugar verás tus facturas cuando estén disponibles
        </strong>
      </p>
      <p>
        Recuerda que el correo con el que te registres debe ser el mismo que
        proporcionaste el dia de tus estudios.
      </p>
      <p>
        Y puedes ir a la seccion de formulario de facturacion en el menú para
        solicitar tus facturas.
      </p>
      <div className={styles.facturas}>
        <table>
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Fecha de subida</th>
              <th>Archivo PDF</th>
              <th>Archivo XML</th>
            </tr>
          </thead>
          <tbody>
            {facturas
              ? facturas.map(el => (
                  <tr key={el.ticket}>
                    <td>{el.ticket}</td>
                    <td>{el.uploadDate}</td>
                    <td>
                      {el.url ? <a href={el.url}>Ver</a> : "No disponible aún"}
                    </td>
                    <td>
                      {el.url2 ? (
                        <a href={el.url2}>Ver</a>
                      ) : (
                        "No disponible aún"
                      )}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
}
