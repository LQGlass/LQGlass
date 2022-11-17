import firebaseApp from "../../../firebase/firebase"
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ProcedimientoIndividual from "../../../components/ProcedimientoIndividual";
import { useRouter } from "next/router";
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

export default function examenDetalles({ studio }) {
  const router = useRouter();
  const examenName = router.query.procedimientoId;
  console.log(studio);
  return (
    <div>
      <Navbar />
      {studio ? (
        <ProcedimientoIndividual

          examen= {studio[0]}
        />
      ) : (
        <h2>Cargando...</h2>
      )}
      <Footer/>
    </div>
  );
}

export async function getStaticPaths() {
  let examenes = [];
  const collectionRef = query(collectionGroup(db, "examenes"));
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    examenes.push(doc.data());
  });
  return {
    fallback: true,
    paths: examenes.map((examen) => ({
      params: { procedimientoId: examen.nombre },
    })),
  };
}

export async function getStaticProps(context) {
  let studio = [];
  const examenName = context.params.procedimientoId;
  //se llama a todas las categorias con subcoleccion de examenes
  const collectionRef = query(
    collectionGroup(db, "examenes"),
    where("nombre", "==", examenName)
  );
  //se genera un snapshor con todos los documentos
  const snapshot = await getDocs(collectionRef);
  //se mapea cada documento para hacer push de
  //sus datos en el array categorias
  await snapshot.forEach((doc) => {
    studio.push(doc.data());
  });

  return {
    props: {
      studio,
    },
  };
}
