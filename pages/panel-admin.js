import Head from "next/head";
import { getFirestore, doc, getDoc } from "firebase/firestore";
//se importa firebase y las utilidades que vamos a usar
import firebaseApp from "../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PanelAdministrator from "../components/PanelAdministrator";
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export default function panelAdmin() {
  return (
    <>
      <Head>
        <title>Panel</title>
      </Head>
      <PanelAdministrator />
    </>
  );
}
