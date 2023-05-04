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
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID_FACTURAS,
  EMAILJS_USER_ID,
} from "../utils/emailjs";
import emailjs from "emailjs-com";

export default function IngresarFacturas() {
  const d = new Date();
  const month = d.toLocaleString("es-US", { month: "long" });
  const year = d.getFullYear();
  const monthNum = d.getMonth();
  const [solicitadas, setSolicitadas] = useState(null);
  const [sending, setSending] = useState(false);
  const [file, setFile] = useState(null);
  const [secondFile, setSecondFile] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [secondFileSize, setSecondFileSize] = useState(null);
  const [errorStatus, seterrorStatus] = useState("");
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

  // Handler function for when the PDF file input changes
  const pdfFileChangeHandler = e => {
    if (!e.target.files[0]) return; // If there's no file, return
    setFile(e.target.files[0]); // Set the selected file to state
    setFileSize(e.target.files[0].size); // Set the file size to state
  };

  // Handler function for when the XML file input changes
  const xmlFileChangeHandler = e => {
    if (!e.target.files[0]) return; // If there's no file, return
    setSecondFile(e.target.files[0]); // Set the selected file to state
    setSecondFileSize(e.target.files[0].size); // Set the file size to state
  };

  // Function to upload a file to Firebase Storage and return its download URL
  const uploadFile = async (document, id, fileType) => {
    const storageRef = ref(
      storage,
      `facturas/${year}/${month}/${id}.${fileType}`
    );
    await uploadBytes(storageRef, document);
    const url = await getDownloadURL(storageRef).then(url => {
      return url;
    });
    return url;
  };

  const sendEmail = async (email, urlPdf, urlXml) => {
    try {
      const templateParams = {
        email: email,
        pdf_url: urlPdf,
        xml_url: urlXml,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_FACTURAS,
        templateParams,
        EMAILJS_USER_ID
      );

      console.log("Correo electrónico enviado!", response.text);
    } catch (error) {
      console.error("Error al enviar correo electrónico:", error);
    }
  };

  // Submit handler function for the form
  const submitHandler = async e => {
    e.preventDefault(); // Prevent the form from submitting normally
    let ticket = e.target.ticket.value; // Get the value of the ticket input
    let email = e.target.email.value; // Get the value of the email input
    let facturaSolicitada = null;
    let facturaId = null;

    try {
      // Check if the ticket and email inputs are valid
      if (ticket.length < 3 || !/\d+/.test(ticket) || email === "") {
        seterrorStatus(
          "Ingrese un ticket válido (mínimo 3 dígitos) y un correo válido"
        );
        return;
      }

      // Check if both files have been selected
      if (file === null || secondFile === null) {
        seterrorStatus("Debes subir dos archivos");
        return;
      }

      // Check if the file sizes are within the limit
      if (fileSize > 1000000 || secondFileSize > 1000000) {
        seterrorStatus("Los archivos deben ser menores a 1MB cada uno");
        return;
      }

      if (!file) {
        seterrorStatus("No haz subido archivo");
        return;
      } else {
        // Query the database for the factura with the matching ticket number
        const q = query(
          collection(db, "facturas-solicitadas"),
          where("ticket", "==", ticket)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          facturaId = doc.id; // Set the ID of the factura
          facturaSolicitada = doc.data(); // Set the factura data to state
          console.log(facturaId, facturaSolicitada);
        });
        // Upload the PDF and XML files to Firebase Storage and get their download URLs
        const uri = await uploadFile(file, facturaId, "pdf");
        const uri2 = await uploadFile(secondFile, facturaId, "xml");
        console.log(uri);
        // Update the factura document with the download URLs and the upload date
        await updateDoc(doc(db, `facturas-solicitadas/${facturaId}`), {
          send: true,
          url: uri,
          url2: uri2,
          uploadDate: d.getDate() + "/" + monthNum + "/" + year,
        });
        // Set the sending state to true to re-render the component
        setSending(!sending);
        // Send the email with the download URLs
        await sendEmail(email, uri, uri2);
      }
      // Reset the form and state
      fileInput.value = "";
      setFile("");
      seterrorStatus("Enviado con éxito");
      e.target.ticket.value = "";
      e.target.email.value = "";
    } catch (error) {
      console.error(error);
      seterrorStatus(
        "La factura de este ticket no ha sido pedida por ningun usuario aún o el ticket no coincide."
      );
    }
  };

  return (
    <>
      <div>
        <form className={styles.facturasInput} onSubmit={submitHandler}>
          <label htmlFor="fileInput" className={styles.customFileUpload}>
            Seleccionar PDF
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={pdfFileChangeHandler}
            accept="application/pdf"
          />
          <label htmlFor="xmlInput" className={styles.customFileUpload}>
            Seleccionar XML
          </label>
          <input
            type="file"
            id="xmlInput"
            onChange={xmlFileChangeHandler}
            accept="text/xml"
          />
          <p id="errorMessage">{errorStatus}</p>
          <label htmlFor="email">Email cliente</label>
          <input
            type="email"
            placeholder="Email cliente"
            id="email"
            pattern="[a-z0-9._%+\-]+@(?:[a-z0-9\-]+\.)+[a-z]{2,}"
            required
          />

          <label htmlFor="ticket">Ticket</label>
          <input
            type="text"
            placeholder="Numero de ticket (mínimo 3 caracteres)"
            id="ticket"
            pattern="[\w\d]{3,}"
            required
          />

          <button>Enviar</button>
        </form>
      </div>

      <TablaFacturas data={solicitadas} />
    </>
  );
}
