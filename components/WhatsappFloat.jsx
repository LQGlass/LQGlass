import Link from "next/link";
import styles from "./WhatsappFloat.module.scss";
import Image from "next/image";

function WhatsappFloat() {
  return (
    <Link
      href={
        "https://api.whatsapp.com/send?phone=5215546722581&text=Hola%2C%20estoy%20interesado%20en%20el%20estudio%3A"
      }
    >
      <div className={styles.whatsappFloat}>
        <Image
          src="/images/whatsapp.png"
          alt="icono de whatsapp"
          width={100}
          height={100}
        />
      </div>
    </Link>
  );
}

export default WhatsappFloat;
