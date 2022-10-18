import LQGIcon from "./LQGIcon";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import LogButtons from "./LogButtons";
import { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <div className={styles.cintilla}>
        <div className={styles.tituloCintilla}>
          <p> <br /> Haz tu cita : 5539847270</p>
          <img
            className={styles.iconoWhatsapp}
            src="/images/whatsapp.png"
            alt="icono whatsapp"
          />
        </div>
        <div className={styles.idiomas}>
          <img
            className={styles.flag}
            src="/images/flags/mexico.png"
            alt="bandera de méxico"
          />
          <img
            className={styles.flag}
            src="/images/flags/united-states.png"
            alt="bandera de estados unidos"
          />
          <img
            className={styles.flag}
            src="/images/flags/china.png"
            alt="bandera de china"
          />
        </div>
      </div>
      <nav className={styles.nav}>
        <LQGIcon />

        <Link href={"/estudios"}>
          <div className={styles.linkNavDiv}>Estudios</div>
        </Link>
        <Link href={"/sucursales"}>
          <div className={styles.linkNavDiv}>Sucursales</div>
        </Link>
        <Link href={"/blog"}>
          <div className={styles.linkNavDiv}>Blog</div>
        </Link>
        <Link href={"/nosotros"}>
          <div className={styles.linkNavDiv}>Nosotros</div>
        </Link>
        <Link href={"/resultados"}>
          <div className={styles.linkNavDiv}>Resultados</div>
        </Link>
        <Link href={"/promociones"}>
          <div className={styles.linkNavDiv}>Promociones</div>
        </Link>
        <Link href={"/perfil/facturacion"}>
          <div className={styles.linkNavDiv}>Factura</div>
        </Link>
        <Link href={"/check-ups"}>
          <div className={styles.linkNavDiv}>Check Ups</div>
        </Link>
        <LogButtons />
      </nav>
    </Fragment>
  );
};

export default Navbar;
