import { Fragment } from "react";
import Footer from "../../components/Footer";
import FormularioFacturas from "../../components/FormularioFacturas";
import Navbar from "../../components/Navbar";

function facturacion() {
  return (
    <Fragment>
      <Navbar />
      <FormularioFacturas />
      <Footer />
    </Fragment>
  );
}

export default facturacion;
