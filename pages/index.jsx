import CategoryIndex from "../components/CategoryIndex";
import Hero from "../components/Hero";
import InformesSeccion from "../components/InformesSeccion";
import Navbar from "../components/Navbar";
import DireccionesSeccion from "../components/DireccionesSeccion.jsx";
import BlogSeccion from "../components/BlogSeccion";
import Footer from "../components/Footer";
import WhatsappFloat from "../components/WhatsappFloat";
import firebaseApp from "../firebase/firebase";
import {
  getFirestore,
  collectionGroup,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
const db = getFirestore(firebaseApp);

function HomePage({
  categories,
  biologia,
  covid,
  coagulacion,
  coprologia,
  endocrinologia,
  hematologia,
  inmunologia,
  microbiologia,
  parasitologia,
  patologia,
  pruebasEspeciales,
  quimicaClinicaBioquimica,
  toxicologia,
  uroanalisis,
}) {
  return (
    <div>
      <Navbar />

      <WhatsappFloat />

      <Hero />

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
  /* let biologia = [];
  let covid = [];
  let coagulacion = [];
  let coprologia = [];
  let endocrinologia = [];
  let hematologia = [];
  let inmunologia = [];
  let microbiologia = [];
  let parasitologia = [];
  let patologia = [];
  let pruebasEspeciales = [];
  let quimicaClinicaBioquimica = [];
  let toxicologia = [];
  let uroanalisis = [];
  let sobrantes = []; */
  //se llama a todas las categorias con subcoleccion de examenes
  const collectionRef = collection(db, "categorias");
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  //se mapea cada documento para hacer push de
  //sus datos en el array categorias
  snapshot.forEach((doc) => {
    categories.push(doc.id)
   /* console.log(doc.data())
    switch (doc.data().categoria) {
      case "Biología molecular":
        biologia.push(doc.data());
        break;
      case "COVID":
        covid.push(doc.data());
        break;
      case "Coagulación":
        coagulacion.push(doc.data());
        break;
      case "Coprología":
        coprologia.push(doc.data());
        break;
      case "Endocrinología (hormonas)":
        endocrinologia.push(doc.data());
        break;
      case "Inmunología-serología":
        inmunologia.push(doc.data());
        break;
      case "Microbiología":
        microbiologia.push(doc.data());
        break;
      case "Parasitología":
        parasitologia.push(doc.data());
        break;
      case "Patología":
        patologia.push(doc.data());
        break;
      case "Pruebas especiales":
        pruebasEspeciales.push(doc.data());
        break;
      case "Química clínica-Bioquímica":
        quimicaClinicaBioquimica.push(doc.data());
        break;
      case "Toxicología":
        toxicologia.push(doc.data());
        break;
      case "Uroanálisis":
        uroanalisis.push(doc.data());
        break;
      case "Hematología":
        hematologia.push(doc.data());
        break;

      default:
        sobrantes.push(doc.data());
        break;
    } */
  });
  console.log(categories)

  return {
    //return the props as "categories"
    props: {
      categories,/* 
      biologia,
      covid,
      coagulacion,
      coprologia,
      endocrinologia,
      hematologia,
      inmunologia,
      microbiologia,
      parasitologia,
      patologia,
      pruebasEspeciales,
      quimicaClinicaBioquimica,
      toxicologia,
      uroanalisis, */
    },
  };
};

export default HomePage;
