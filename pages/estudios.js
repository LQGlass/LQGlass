import CategoryIndexExpanded from "../components/CategoryIndexExpanded";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import firebaseApp from "../firebase/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

const estudios = ({ categories }) => {
  return (
    <div>
      <Head>
        <title>Categorias</title>
      </Head>
      <Navbar />
      <CategoryIndexExpanded categories={categories} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  //se declara un array vacio para almacenar los datos
  let categories = [];
  //se llama a todas las categorias con subcoleccion de examenes
  const collectionRef = collection(db, "categorias");
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  //se mapea cada documento para hacer push de
  //sus datos en el array categorias
  snapshot.forEach(doc => {
    categories.push(doc.id);
  });

  return {
    //return the props as "categories"
    props: {
      categories,
    },
  };
}

export default estudios;
