import { Fragment } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import styles from "../../[categorieId]/index.module.scss";
import { useRouter } from "next/router";
import firebaseApp from "../../../firebase/firebase";
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
import CasillaPaquete from "../../../components/CasillaPaquete";
const db = getFirestore(firebaseApp);

function analisis(props) {
  const router = useRouter();
  const grupoName = router.query.grupoPaquetesId;
  return (
    <Fragment>
      <Navbar />
      <div className={styles.analisisSection}>
        <div className={styles.nameBox}>
          <h1>{grupoName}</h1>
          <div className={styles.lineaSubrayado}></div>
        </div>
        {props.paquetes.map(el => {
          return (
            <CasillaPaquete
              nombre={el.nombre}
              descripcion={el.descripcion}
              precio={el.precio}
              incluye={el.incluye}
              indicaciones={el.indicaciones}
              procedimiento={el.procedimiento}
            />
          );
        })}
      </div>
      <Footer />
    </Fragment>
  );
}

export async function getStaticPaths() {
  let grupoPaquetes = [];
  const collectionRef = collection(db, "grupo-paquetes");
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  //se mapea cada documento para hacer push de
  //sus datos en el array grupo-paquetes
  snapshot.forEach(doc => {
    grupoPaquetes.push(doc.data());
  });
  return {
    fallback: false,
    paths: grupoPaquetes.map(grupoP => ({
      params: { grupoPaquetesId: grupoP.nombre },
    })),
  };
}

export const getStaticProps = async context => {
  let paquetes = [];
  const grupoName = context.params.grupoPaquetesId;
  //se llama a todas las grupo-paquetes con subcoleccion de examenes
  const collectionRef = query(
    collectionGroup(db, "paquetes"),
    where("grupo-paquetes", "==", grupoName)
  );
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  //se mapea cada documento para hacer push de
  //sus datos en el array grupo-paquetes
  snapshot.forEach(doc => {
    paquetes.push(doc.data());
  });

  return {
    props: {
      paquetes,
    },
  };
};
export default analisis;
