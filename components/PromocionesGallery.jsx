import Image from "next/image";
import styles from "../pages/promociones.module.scss";
export default function PromocionesGallery({ urls }) {
  return (
    <>
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
    </>
  );
}
