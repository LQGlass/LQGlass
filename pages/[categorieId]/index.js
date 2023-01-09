import { Fragment } from "react";
import CasillaAnalisis from "../../components/CasillaAnalisis";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import firebaseApp from "../../firebase/firebase";
import {
  getFirestore,
  collectionGroup,
  collection,
  getDocs,
  query,
  orderBy,
  where,
  limit,
} from "firebase/firestore";
const db = getFirestore(firebaseApp);

function analisis(props) {
  const router = useRouter();
  const categorieName = router.query.categorieId;
  return (
    <Fragment>
      <Navbar />
      <div className={styles.analisisSection}>
        <div className={styles.nameBox}>
          <h1>{categorieName}</h1>
          <div className={styles.lineaSubrayado}></div>
        </div>
        {props.studies.map(el => {
          return (
            <CasillaAnalisis
              nombre={el.nombre}
              descripcion={el.descripcion}
              precio={el.precio}
            />
          );
        })}
      </div>
      <Footer />
    </Fragment>
  );
}

export async function getStaticPaths() {
  let categories = [];
  const collectionRef = collection(db, "categorias");
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  //se mapea cada documento para hacer push de
  //sus datos en el array categorias
  snapshot.forEach(doc => {
    categories.push(doc.data());
  });
  return {
    fallback: false,
    paths: categories.map(categorie => ({
      params: { categorieId: categorie.nombre },
    })),
  };
}

export const getStaticProps = async context => {
  let studies = [];
  const categorieName = context.params.categorieId;
  //se llama a todas las categorias con subcoleccion de examenes
  const collectionRef = query(
    collectionGroup(db, "examenes"),
    limit(5),
    where("categoria", "==", categorieName)
  );
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  //se mapea cada documento para hacer push de
  //sus datos en el array categorias
  snapshot.forEach(doc => {
    studies.push(doc.data());
  });

  return {
    props: {
      studies,
    },
  };
};
export default analisis;
