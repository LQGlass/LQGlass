import styles from "./InformesSeccion.module.scss";
import Image from "next/image";

function InformesSeccion (){
    return(
        <section className={styles.informesSeccion}>
        <div className={styles.informesWrapper}>
          <div className={styles.imagenCorreo}>
            <Image width={250} height={250} src="/images/mailbox.png" />
          </div>
          <div>
            <div>
              <h2>
                Pide informes sobre el estudio que buscas
              </h2>
            </div>
            <div>
              <form className={styles.informes}>

                <input placeholder="Nombre" type="text" />
                <input placeholder="Estudio" type="text" />
                <input placeholder="Email" type="email" />
                <button className={styles.submit} type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default InformesSeccion;