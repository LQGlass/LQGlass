import styles from "./Footer.module.scss";
import LQGIcon from "./LQGIcon";
import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [informes, setinformes] = useState(false);
  const informesHandler=()=>{
    setinformes(!informes)
  }
  return (
    <section className={styles.footer}>
      <div>
        <div>
          <Link href={"/"}><img src="../images/logo-invert.png" width={200} alt="Logo" /></Link>
        </div>
        <div>
          <p>Copyrigth 2022</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
      <div className={styles.footerPagina}>
        <h4>Página</h4>
        <Link href={"/estudios"}>Estudios</Link>
        <Link href={"/sucursales"}>Sucursales</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/nosotros"}>Nosotros</Link>
        <Link href={"/perfil"}>Resultados</Link>
      </div>
      <div className={styles.footerPagina}>
        <h4>Cuenta</h4>

        <Link href={"/perfil"}>Perfil</Link>
        <Link href={"/perfil"}>Mis Resultados</Link>
        <Link href={"/perfil"}>Facturas</Link>
        <Link href={"/legal"}>Legal</Link>
        <Link href={"/politica-privacidad"}>Politica de Privacidad</Link>
      </div>
      <div>
        <select name="informes" onChange={informesHandler} id="informes" defaultValue={"value2"}>
          <option value="value1">Quejas</option>
          <option value="value2">
            Informes
          </option>
        </select>
        <form>
          <input placeholder="Nombre" type="text" />
          <input placeholder="Email" type="email" />
          {!informes && <input placeholder="Estudio" type="text" />}
          {informes && <input placeholder="Queja" type="text" />}
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Footer;
