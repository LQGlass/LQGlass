import {
  getFirestore,
  doc,
  getDoc,
  collection,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import firebaseApp from "../firebase/firebase";
import { useState, useEffect } from "react";
import styles from "./DatosPerfil.module.scss";
const db = getFirestore(firebaseApp);
//Componente para mostrar en pantalla los datos del usuario desde firestore
export default function DatosPerfil({ perfil }) {
  const [user, setUser] = useState("");
  const [folio, setFolio] = useState("");
  //Se llama a la database firestore desde el hook para evitar que se renderize multiples veces
  useEffect(() => {
    //funcion para llamar los datos desde firestore
    async function getData() {
      const docRef = doc(db, "users", perfil.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists) {
        console.log("Document data:", docSnap.data());
        //se actualiza el estado con la informacion obtenida.
        setUser(docSnap.data());
      } else {
        console.log("No such document!");
      }
    }

    getData();
  }, [perfil.uid, user.folio]);

  const foliosHandler = e => {
    e.preventDefault();
    console.log(folio);
    if (user.folios && user.folios.length >= 5) {
      alert(
        "No se pueden usar mas de 5 folios a la vez, favor de eliminar uno"
      );
    } else if (folio.length > 2) {
      const userRef = doc(db, "users", perfil.uid);
      updateDoc(userRef, {
        folios: arrayUnion(folio),
      }).then(() => {
        getDoc(userRef).then(docSnap => {
          if (docSnap.exists) {
            setUser(prevState => ({
              ...prevState,
              folios: docSnap.data().folios,
            }));
          }
        });
      });
      setFolio("");
    } else {
      alert("El folio debe ser un número de más de 3 digitos.");
    }
  };

  const deleteFolio = folioToRemove => {
    const userRef = doc(db, "users", perfil.uid);
    updateDoc(userRef, {
      folios: arrayRemove(folioToRemove),
    }).then(() => {
      getDoc(userRef).then(docSnap => {
        if (docSnap.exists) {
          setUser(prevState => ({
            ...prevState,
            folios: docSnap.data().folios,
          }));
        }
      });
    });
  };
  return (
    <>
      <h2>Datos del Perfil</h2>
      <div className="datosWrapper">
        <p>
          <strong>Correo:</strong>
        </p>
        <p>{user && user.email}</p>
        <p>
          <strong>Nombre:</strong>
        </p>
        <p>{user && user.name}</p>
        <p>
          <strong>Apellidos:</strong>
        </p>
        <p>{user && user.last}</p>
        {!user.doctor ? (
          user && user.folios ? (
            <ol className={styles.foliosList}>
              <p>
                <strong>Folios:</strong>
              </p>
              {user.folios.map(el => (
                <li key={el}>
                  {el}
                  <button
                    className={styles.deleteBtn}
                    onClick={() => deleteFolio(el)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ol>
          ) : (
            "No se han ingresado folios"
          )
        ) : null}
      </div>
      {!user.doctor && (
        <form className={styles.formFolios} onSubmit={foliosHandler}>
          <label htmlFor="folios">
            <strong>Ingresar nuevo folio:</strong>
          </label>
          <input
            type="text"
            name="folios"
            value={folio}
            onChange={e => setFolio(e.target.value)}
          />
          <button type="submit" className={styles.folioBtn}>
            Añadir
          </button>
        </form>
      )}
    </>
  );
}
