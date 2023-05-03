import styles from "./Footer.module.scss";
import Link from "next/link";
import { useState } from "react";
import FooterFormulario from ".//FooterFormulario";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <section className={styles.footer}>
      <div>
        <div>
          <Link href={"/"}>
            <img src="../images/logo-invert.png" width={200} alt="Logo" />
          </Link>
        </div>
        <div>
          <p>©️ Copyright {year}</p>
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
        <Link href={"/aviso-privacidad"}>Politica de Privacidad</Link>
      </div>
      <FooterFormulario />
    </section>
  );
}

export default Footer;
