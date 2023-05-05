import { useState, useEffect } from "react";
import firebaseApp from "../firebase/firebase";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import styles from "./ResultadosPerfil.module.scss";
const storage = getStorage(firebaseApp);
import {
  doc,
  setDoc,
  getFirestore,
  collection,
  query,
  getDocs,
  limit,
  orderBy,
} from "firebase/firestore";
import TableDocuments from "./TableDocuments";
import MisResultados from "./MisResultados";
const db = getFirestore(firebaseApp);
export default function ResultadosPerfil({ perfil }) {
  const [file, setFile] = useState();
  const [pdfArr, setPdfArr] = useState();
  const d = new Date();
  const month = d.toLocaleString("es-US", { month: "long" });
  const year = d.getFullYear();
  const monthNum = d.getMonth();
  useEffect(() => {
    async function getData() {
      let resultados = [];
      //funcion para llamar los datos desde firestore
      const collectionRef = query(
        collection(db, "resultados"),
        orderBy("uploadDate"),
        limit(25)
      );
      //se genera un snapshor con todos los documentos
      const snapshot = await getDocs(collectionRef);
      //se mapea cada documento para hacer push de
      //sus datos en el array categorias
      snapshot.forEach(doc => {
        resultados.push(doc.data());
      });
      setPdfArr(resultados);
    }
    getData();
  }, []);

  const uploadFile = async (document, folio) => {
    const storageRef = ref(storage, `resultados/${year}/${month}/${folio}`);
    await uploadBytes(storageRef, document);
    const url = await getDownloadURL(storageRef).then(url => {
      return url;
    });
    return url;
  };

  const submitHandler = async e => {
    e.preventDefault();
    let folio = e.target.folio.value;
    let email = e.target.email.value;
    let size = file.size;
    if (folio < 3 || email == "") {
      alert("Ingrese un folio mayor a 3 digitos y un correo valido");
      return;
    }
    if (size > 1000000) {
      alert("El tamaño del archivo debe ser menor a 1 MB");
      return;
    }
    if (file) {
      const uri = await uploadFile(file, folio);
      await setDoc(doc(db, "resultados", year + "-" + monthNum + "-" + folio), {
        name: file.name,
        folio: folio,
        email: email,
        subido: perfil.name + " " + perfil.last,
        url: uri,
        uploadDate: d.getDate() + "/" + monthNum + "/" + year,
      }).then(
        setPdfArr(prevState => [
          {
            name: file.name,
            folio: folio,
            email: email,
            subido: perfil.name + " " + perfil.last,
            url: uri,
            uploadDate: d.getDate() + "/" + monthNum + "/" + year,
          },
          ...prevState,
        ])
      );
    }
    document.getElementById("fileInput").value = "";
    e.target.folio.value = "";
    e.target.email.value = "";
  };

  return (
    <>
      <h2>{perfil && perfil.doctor ? "Subir resultados" : "Resultados"}</h2>

      {!perfil?.doctor && (
        <div>
          <p>
            <strong>
              En este lugar verás tus resultados cuando estén disponibles
            </strong>
          </p>
          <p>
            Recuerda que el correo con el que te registres debe ser el mismo que
            proporcionaste el dia de tus estudios.
          </p>
          <p>
            Y puedes ir a la seccion de datos de perfil para agregar tus folios.
          </p>
          <MisResultados folios={perfil?.folios} user={perfil} />
        </div>
      )}

      {perfil?.doctor && (
        <div>
          <form className={styles.upload} onSubmit={submitHandler}>
            <label for="fileInput" className={styles.customFileUpload}>
              Seleccionar Archivo PDF
            </label>
            <input
              id="fileInput"
              type="file"
              onChange={e => setFile(e.target.files[0])}
              required
              accept="application/pdf"
            />
            <p>
              Si el archivo es mayor a 1 MB se recomienda comprimirlo en el
              siguiente enlace <br />
              <a
                target={"_blank"}
                href="https://www.ilovepdf.com/es/comprimir_pdf"
              >
                Comprimir
              </a>
            </p>
            <label htmlFor="email">Email cliente:</label>
            <input
              placeholder="Email cliente"
              required
              name="email"
              type="email"
            />
            <label htmlFor="folio">Folio:</label>
            <input
              placeholder="Folio (minimo 3 digitos)"
              required
              name="folio"
              type="text"
            />
            <button>Subir</button>
          </form>
          <div>
            <hr />
            <h3>Resultados ya enviados:</h3>
            <TableDocuments documents={pdfArr} />
          </div>
        </div>
      )}
    </>
  );
}
