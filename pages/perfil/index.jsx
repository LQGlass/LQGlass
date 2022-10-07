import { Fragment } from "react";
import Footer from "../../components/Footer";
import MenuPerfil from "../../components/MenuPerfil";
import Navbar from "../../components/Navbar";

function perfil() {
  return (
    <Fragment>
      <Navbar />

      <MenuPerfil/>

      <Footer />
    </Fragment>
  );
}

export default perfil;
