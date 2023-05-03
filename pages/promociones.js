import Navbar from "../components/Navbar";
import styles from "./promociones.module.scss";
import Image from "next/image";
import Footer from "../components/Footer";
import TituloHeader from "../components/TituloHeader";
import firebaseApp from "../firebase/firebase";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
const storage = getStorage(firebaseApp);

const promociones = ({ urls }) => {
  return (
    <section className={styles.promocionesSeccion}>
      <Navbar />
      <TituloHeader clase={true} titulo="Promociones" />
      {/* Wrapper para contener las imágenes de las promociones */}
      <div className={styles.promocionesWrapper}>
        {/* Se hace un map para recorrer el arreglo de las urls de las promociones */}
        {urls.map((url, index) => (
          <div key={index}>
            {/* Se utiliza el componente Image de Next.js para mostrar cada imagen */}
            <Image
              src={url}
              width={320}
              height={320}
              alt={`Promoción ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

// Función para obtener las urls de las imágenes de las promociones
export async function getStaticProps() {
  const urls = [];
  const storage = getStorage(firebaseApp); // Se inicializa Firebase Storage
  const storageRef = ref(storage, "imagenespromo/"); // Se obtiene la referencia del directorio de las imágenes de las promociones
  const listResult = await listAll(storageRef); // Se obtienen todos los archivos del directorio
  // Se recorre el arreglo de archivos y se obtiene la url de descarga de cada uno de ellos
  for (const item of listResult.items) {
    const downloadURL = await getDownloadURL(item);
    urls.push(downloadURL);
  }
  // Se retorna un objeto con las urls de las imágenes
  return {
    props: { urls },
    revalidate: 3600,
  };
}

export default promociones;
