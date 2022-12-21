import LQGIcon from "./LQGIcon";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import LogButtons from "./LogButtons";
import { Fragment } from "react";
import DropDownMenu from "./DropdownMenu";
import firebaseApp from "../firebase/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

function Navbar({ paquetes, categories }) {
  return (
    <Fragment>
      <div className={styles.cintilla}>
        <div className={styles.tituloCintilla}>
          CDMX y Area Metropolitana | Haz tu cita : 5539847270
        </div>
        <div className={styles.idiomas}>
          <img
            className={styles.flag}
            src="/images/flags/mexico.png"
            alt="bandera de méxico"
          />
          <img
            className={styles.flag}
            src="/images/flags/united-states.png"
            alt="bandera de estados unidos"
          />
          <img
            className={styles.flag}
            src="/images/flags/china.png"
            alt="bandera de china"
          />
        </div>
      </div>
      <nav className={styles.nav}>
        <LQGIcon />
        <DropDownMenu categorias={categories} titulo={"Estudios"} />
        <DropDownMenu titulo={"Paquetes"} packs={paquetes} />
        <Link href={"/promociones"}>
          <div className={styles.linkNavDiv}>Promociones</div>
        </Link>
        <Link href={"/sucursales"}>
          <div className={styles.linkNavDiv}>Sucursales</div>
        </Link>
        <Link href={"/blog"}>
          <div className={styles.linkNavDiv}>Blog</div>
        </Link>
        <Link href={"/nosotros"}>
          <div className={styles.linkNavDiv}>Nosotros</div>
        </Link>
        <Link href={"/resultados"}>
          <div className={styles.linkNavDiv}>Resultados</div>
        </Link>
        <Link href={"/perfil/facturacion"}>
          <div className={styles.linkNavDiv}>Factura</div>
        </Link>
        <LogButtons />
      </nav>
    </Fragment>
  );
}

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
  snapshot.forEach((doc) => {
    categories.push(doc.id);
  });
  snapshot2.forEach((doc) => {
    paquetes.push(doc.id);
  });

  console.log("Hola la funcion esta corriendo");

  return {
    //return the props as "categories"
    props: {
      categories,
      paquetes,
    },
  };
};

export default Navbar;
