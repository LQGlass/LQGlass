import CategoryIndex from "../components/CategoryIndex";
import Hero from "../components/Hero";
import InformesSeccion from "../components/InformesSeccion";
import Navbar from "../components/Navbar";
import DireccionesSeccion from "../components/DireccionesSeccion.jsx";
import BlogSeccion from "../components/BlogSeccion";
import Footer from "../components/Footer";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import WhatsappFloat from "../components/WhatsappFloat";


function HomePage(categories) {
  
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
  let categories = [];

  const querySnapshot = await getDocs(collection(db, "categories"));
  
  querySnapshot.forEach((doc) => {
    categories.push(doc.data());
  });

  return {
    //return the props as "categories"
    props: {
      categories,
    },
  };
};

export default HomePage;
