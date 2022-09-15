import Blog from "../components/Blog";
import Header from "../components/Header";
import Navbar from "../components/Navbar";



  //Get Method

function HomePage() {
  return (
    <div>
      <Navbar />

      <Header title="Al cuidado de tu salud" />

      <Blog />
    </div>
  );
    
}

export default HomePage;
