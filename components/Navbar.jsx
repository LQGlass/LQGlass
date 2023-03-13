import LQGIcon from "./LQGIcon";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import LogButtons from "./LogButtons";
import { Fragment } from "react";
import DropDownMenu from "./DropdownMenu";
import firebaseApp from "../firebase/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import BurgerMenu from "./BurgerMenu";
const db = getFirestore(firebaseApp);

function Navbar({ paquetes, categories }) {
  console.log("Data en componente: ", paquetes, categories);
  return (
    <Fragment>
      <div className={styles.cintilla}>
        <div className={styles.tituloCintilla}>
          CDMX y Area Metropolitana | Haz tu cita : 55 4672 2581 ó 55 5562 5267
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
        </div>
      </div>
      <nav className={styles.nav}>
        <LQGIcon />
        <BurgerMenu categories={categories} paquetes={paquetes} />
        <div className={styles.menu}>
          <DropDownMenu categories={categories} titulo={"Estudios"} />
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <DropDownMenu titulo={"Paquetes"} packs={paquetes} />
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <Link href={"/promociones"}>
            <div className={styles.linkNavDiv}>Promociones</div>
          </Link>
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <Link href={"/sucursales"}>
            <div className={styles.linkNavDiv}>Sucursales</div>
          </Link>
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <Link href={"/blog"}>
            <div className={styles.linkNavDiv}>Blog</div>
          </Link>
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <Link href={"/nosotros"}>
            <div className={styles.linkNavDiv}>Nosotros</div>
          </Link>
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <Link href={"/perfil"}>
            <div className={styles.linkNavDiv}>Resultados</div>
          </Link>
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <Link href={"/perfil"}>
            <div className={styles.linkNavDiv}>Factura</div>
          </Link>
        </div>

        <div className={styles.logButtons}>
          <LogButtons />
        </div>
      </nav>
    </Fragment>
  );
}

export const getStaticProps = async () => {
  // Obtiene todas las categorías con subcolecciones de exámenes
  const collectionRef = collection(db, "categorias");
  const collectionRef2 = collection(db, "grupo-paquetes");

  // Genera un snapshot con todos los documentos de cada colección
  const [categoriesSnapshot, paquetesSnapshot] = await Promise.all([
    getDocs(collectionRef),
    getDocs(collectionRef2),
  ]);

  // Mapea cada documento para hacer push de sus datos en el array de categorías o paquetes
  const data = {
    navbarData: {
      categories: categoriesSnapshot.docs.map(doc => doc.id),
      paquetes: paquetesSnapshot.docs.map(doc => doc.id),
    },
  };

  console.log("Datos: ", data);

  return { props: { ...data }, revalidate: 10 };
};

export default Navbar;
