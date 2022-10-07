import Link from "next/link";
import styles from "./WhatsappFloat.module.scss";
import Image from "next/image";

function WhatsappFloat(){
    return(

        <Link href={"https://whatsapp.com"}>
        <div className={styles.whatsappFloat}>
            <Image src="/images/whatsapp.png" alt="icono de whatsapp" width={100} height={100}/>
        </div>

        </Link>
    )
}

export default WhatsappFloat;