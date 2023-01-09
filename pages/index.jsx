import CategoryIndex from "../components/CategoryIndex";
import Hero from "../components/Hero";
import InformesSeccion from "../components/InformesSeccion";
import Navbar from "../components/Navbar";
import DireccionesSeccion from "../components/DireccionesSeccion.jsx";
import BlogSeccion from "../components/BlogSeccion";
import Footer from "../components/Footer";
import WhatsappFloat from "../components/WhatsappFloat";
import CheckupIndex from "../components/CheckupIndex";
import firebaseApp from "../firebase/firebase";
import Head from "next/head";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import CliengoScript from "../components/CliengoScript";
const db = getFirestore(firebaseApp);

function HomePage({ categories, paquetes }) {
  return (
    <div>
      <Head>
        <title>Laboratorios Quimicos Glass</title>
      </Head>
      <Navbar />
      <WhatsappFloat />
      <CliengoScript/>
      <Hero />
      <CheckupIndex contenido={paquetes} />
      <CategoryIndex contenido={categories} />
      <InformesSeccion />
      <DireccionesSeccion />
      <BlogSeccion />
      <Footer />
    </div>
  );
}

//NextJS function to get the static props from the firestore database

export const getStaticProps = async () => {
  //se declara un array vacio para almacenar los datos
  let categories = [];
  let paquetes = [];
  //se llama a todas las categorias con subcoleccion de examenes
  const collectionRef = collection(db, "categorias");
  const collectionRef2 = collection(db, "grupo-paquetes");
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  const snapshot2 = await getDocs(collectionRef2);
  //se mapea cada documento para hacer push de
  //sus datos en el array categorias
  snapshot.forEach(doc => {
    categories.push(doc.id);
  });
  snapshot2.forEach(doc => {
    paquetes.push(doc.id);
  });
  return {
    //return the props as "categories"
    props: {
      categories,
      paquetes,
    },
  };
};

export default HomePage;
