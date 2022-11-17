import firebaseApp from "../firebase/firebase"
import { query, getDocs, collectionGroup, limit } from "firebase/firestore";

//NextJS function to get the static props from the firestore database
let categories = [];

async function getStaticProps () {
    //se declara un array vacio para almacenar los datos
    //se llama a todas las categorias con subcoleccion de examenes
    const collectionRef = query(collectionGroup(db, "examenes"), limit(5));
    //se genera un snapshor con todos los documentos
    const snapshot = await getDocs(collectionRef);
    //se mapea cada documento para hacer push de 
    //sus datos en el array categorias
    snapshot.forEach((doc) => {
      categories.push(doc.data());
    });

  return {
    //return the props as "categories"
    props: {
      categories,
    },
  };
};

getStaticProps()

export default categories;