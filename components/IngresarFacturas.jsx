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
} from "firebase/firestore";
const storage = getStorage(firebaseApp);
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import firebaseApp from "../firebase/firebase";
import TablaFacturas from "./TablaFacturas";
const db = getFirestore(firebaseApp);
import styles from "./IngresarFacturas.module.scss";

export default function IngresarFacturas() {
  const d = new Date();
  const month = d.toLocaleString("es-US", { month: "long" });
  const year = d.getFullYear();
  const monthNum = d.getMonth();
  const [solicitadas, setSolicitadas] = useState(null);
  const [sending, setSending] = useState(false);
  const [file, setFile] = useState(null);
  console.log(solicitadas);
  useEffect(() => {
    async function getData() {
      let facturasSolicitadas = [];
      //funcion para llamar los datos desde firestore
      const collectionRef = query(
        collection(db, "facturas-solicitadas"),
        where("send", "==", false)
      );
      //se genera un snapshor con todos los documentos
      const snapshot = await getDocs(collectionRef);
      //se mapea cada documento para hacer push de
      //sus datos en el array categorias
      snapshot.forEach(doc => {
        facturasSolicitadas.unshift(doc.data());
      });
      setSolicitadas(facturasSolicitadas);
    }
    getData();
  }, [sending]);

  const uploadFile = async (document, id) => {
    const storageRef = ref(storage, `facturas/${year}/${month}/${id}`);
    await uploadBytes(storageRef, document).then(snapshot => {
      console.log(snapshot);
    });
    const url = await getDownloadURL(storageRef).then(url => {
      console.log(url);
      return url;
    });
    return url;
  };

  const submitHandler = async e => {
    e.preventDefault();
    let ticket = e.target.ticket.value;
    let email = e.target.email.value;
    let size = file.size;
    let facturaSolicitada = null;
    let facturaId = null;
    const q = query(
      collection(db, "facturas-solicitadas"),
      where("ticket", "==", ticket)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      facturaId = doc.id;
      facturaSolicitada = doc.data();
    });
    if (ticket < 3 || email == "") {
      alert("Ingrese un ticket mayor a 3 digitos y un correo valido");
      return;
    }
    if (size > 1000000) {
      alert("El tamaño del archivo debe ser menor a 1 MB");
      return;
    }
    console.log(ticket);
    console.log(file);
    console.log("Documento", facturaSolicitada, facturaId);
    if (file) {
      const uri = await uploadFile(file, facturaId);
      await updateDoc(doc(db, `facturas-solicitadas/${facturaId}`), {
        send: true,
        url: uri,
        uploadDate: d.getDate() + "/" + monthNum + "/" + year,
      });
      setSending(!sending);
    }
    document.getElementById("fileInput").value = "";
    e.target.ticket.value = "";
    e.target.email.value = "";
  };
  return (
    <>
      <div>
        <form className={styles.facturasInput} onSubmit={submitHandler}>
          <label for="fileInput" className={styles.customFileUpload}>
            Seleccionar Factura
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={e => setFile(e.target.files[0])}
          />
          <label htmlFor="email">Email cliente</label>
          <input type="email" placeholder="Email cliente" id="email" />
          <label htmlFor="ticket">Ticket</label>
          <input type="text" placeholder="Numero de ticket" id="ticket" />
          <button>Enviar</button>
        </form>
      </div>

      <TablaFacturas data={solicitadas} />
    </>
  );
}
