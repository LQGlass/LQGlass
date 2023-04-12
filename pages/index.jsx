import CategoryIndex from "../components/CategoryIndex";
import Hero from "../components/Hero";
import InformesSeccion from "../components/InformesSeccion";
import Navbar from "../components/Navbar";
import DireccionesSeccion from "../components/DireccionesSeccion.jsx";
import BlogSeccion from "../components/BlogSeccion";
import Footer from "../components/Footer";
import CheckupIndex from "../components/CheckupIndex";
import firebaseApp from "../firebase/firebase";
import Head from "next/head";
import {
  getFirestore,
  collection,
  getDocs,
  collectionGroup,
} from "firebase/firestore";
import CliengoScript from "../components/CliengoScript";
import Cintilla from "../components/Cintilla";
const db = getFirestore(firebaseApp);

function HomePage({ categories, paquetes, examenes, navbarLanguage }) {
  return (
    <>
      <Cintilla />
      <Navbar navbarLanguage={navbarLanguage} />
      <Head>
        <title>Laboratorios Quimicos Glass</title>
        <meta
          name="description"
          content="Laboratorio de estudios médicos en Lomas Verdes, Estado de México."
        />
      </Head>
      <Hero />
      <CheckupIndex contenido={paquetes} examenes={examenes} />
      <CategoryIndex contenido={categories} />
      <InformesSeccion />
      <DireccionesSeccion />
      <BlogSeccion />
      <CliengoScript />
      <Footer />
    </>
  );
}

//NextJS function to get the static props from the firestore database

export const getStaticProps = async ({ locale }) => {
  //se declara un array vacio para almacenar los datos
  let categories = [];
  let paquetes = [];
  let examenes = [];
  const response = await import(`../public/locales/${locale}.json`);
  //se llama a todas las categorias con subcoleccion de examenes
  const collectionRef = collection(db, "categorias");
  const collectionRef2 = collection(db, "grupo-paquetes");
  const collectionRef3 = collectionGroup(db, "examenes");
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  const snapshot2 = await getDocs(collectionRef2);
  const snapshot3 = await getDocs(collectionRef3);
  //se mapea cada documento para hacer push de
  //sus datos en el array categorias
  snapshot.forEach(doc => {
    categories.push(doc.id);
  });
  snapshot2.forEach(doc => {
    paquetes.push(doc.id);
  });
  snapshot3.forEach(doc => {
    examenes.push(doc.data().nombre);
  });
  return {
    //return the props as "categories"
    props: {
      categories,
      paquetes,
      examenes,
      navbarLanguage: response.default.nav,
    },
  };
};

export default HomePage;
