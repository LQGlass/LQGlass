import PerfilesIndex from "../components/PerfilesIndex";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import firebaseApp from "../firebase/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

const estudios = ({ perfiles }) => {
  return (
    <div>
      <Head>
        <title>Perfiles</title>
      </Head>
      <Navbar />
      <PerfilesIndex perfiles={perfiles} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  //se declara un array vacio para almacenar los datos
  let perfiles = [];
  //se llama a todas las categorias con subcoleccion de examenes
  const collectionRef = collection(db, "perfiles");
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  //se mapea cada documento para hacer push de
  //sus datos en el array categorias
  snapshot.forEach(doc => {
    perfiles.push(doc.data());
  });

  return {
    //return the props as "perfiles"
    props: {
      perfiles,
    },
  };
}

export default estudios;
