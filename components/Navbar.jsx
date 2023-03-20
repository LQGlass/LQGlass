import LQGIcon from "./LQGIcon";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import LogButtons from "./LogButtons";
import DropDownMenu from "./DropdownMenu";
import firebaseApp from "../firebase/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import BurgerMenu from "./BurgerMenu";
const db = getFirestore(firebaseApp);

export default function Navbar({ navbarLanguage }) {
  const paquetes = ["Para El", "Para Ella", "Kids", "Check up", "Adulto Mayor"];
  const categories = [
    "Biología molecular",
    "COVID",
    "Coagulación",
    "Coprología",
    "Endocrinología (hormonas)",
    "Hematología",
    "Inmunología-serología",
    "Microbiología",
    "Parasitología",
    "Patología",
    "Pruebas especiales",
    "Química clínica-Bioquímica",
    "Toxicología",
    "Uroanálisis",
  ];
  return (
    <>
      <nav className={styles.nav}>
        <LQGIcon />
        <BurgerMenu categorias={categories} paquetes={paquetes} />
        <div className={styles.menu}>
          <DropDownMenu
            categories={categories}
            titulo={navbarLanguage.estudios}
          />
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <DropDownMenu titulo={navbarLanguage.paquetes} packs={paquetes} />
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <Link href={"/promociones"}>
            <div className={styles.linkNavDiv}>
              {navbarLanguage.promociones}
            </div>
          </Link>
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <Link href={"/sucursales"}>
            <div className={styles.linkNavDiv}>{navbarLanguage.sucursales}</div>
          </Link>
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <Link href={"/blog"}>
            <div className={styles.linkNavDiv}>{navbarLanguage.blog}</div>
          </Link>
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <Link href={"/nosotros"}>
            <div className={styles.linkNavDiv}>{navbarLanguage.nosotros}</div>
          </Link>
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <Link href={"/perfil"}>
            <div className={styles.linkNavDiv}>{navbarLanguage.resultados}</div>
          </Link>
          <div>
            <p className={styles.separador}>|</p>
          </div>
          <Link href={"/perfil"}>
            <div className={styles.linkNavDiv}>{navbarLanguage.facturas}</div>
          </Link>
        </div>

        <div className={styles.logButtons}>
          <LogButtons />
        </div>
      </nav>
    </>
  );
}
