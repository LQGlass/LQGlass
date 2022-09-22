import styles from "./Footer.module.scss";
import LQGIcon from "./LQGIcon";
import Link from "next/link";

function Footer(){
    return(
        <section className={styles.footer}>
        <div>
          <div>
            <LQGIcon/>
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
            <Link href={"/resultados"}>Resultados</Link>
        </div>
        <div className={styles.footerPagina}>
          <h4>Cuenta</h4>

          <Link href={"/perfil"}>Perfil</Link>
            <Link href={"/resultados"}>Mis Resultados</Link> 
            <Link href={"/facturas"}>Facturas</Link>
            <Link href={"/legal"}>Legal</Link>
            <Link href={"/politica-privacidad"}>Politica de Privacidad</Link>
        </div>
        <div>
          <h4>Informes</h4>
          <form>
            <input placeholder="Nombre" type="text" />
            <input placeholder="Email" type="email" />
            <input placeholder="Estudio" type="text" />
            <button>Enviar</button>
          </form>
        </div>
      </section>
    )
}

export default Footer;