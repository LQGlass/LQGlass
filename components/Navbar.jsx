import LQGIcon from "./LQGIcon";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import LogButtons from "./LogButtons";
import { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav className={styles.nav}>
        <LQGIcon />

        <Link href={"/estudios"}>Estudios</Link>
        <Link href={"/sucursales"}>Sucursales</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/nosotros"}>Nosotros</Link>
        <Link href={"/resultados"}>Resultados</Link>
        <LogButtons />
      </nav>
    </Fragment>
  );
};

export default Navbar;
