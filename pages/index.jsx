import CategoryIndex from "../components/CategoryIndex";
import Hero from "../components/Hero";
import InformesSeccion from "../components/InformesSeccion";
import Navbar from "../components/Navbar";
import DireccionesSeccion from "../components/DireccionesSeccion.jsx";
import BlogSeccion from "../components/BlogSeccion";
import Footer from "../components/Footer";
import "../firebase";

//Get Method

function HomePage() {
  return (
    <div>
      <Navbar />

      <Hero />

      <CategoryIndex />

      <InformesSeccion />

      <DireccionesSeccion />

      <BlogSeccion />

      <Footer />

    </div>
  );
}

export default HomePage;
