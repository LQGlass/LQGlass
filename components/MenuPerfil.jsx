import styles from "./MenuPerfil.module.scss";
import Link from "next/link";

function MenuPerfil() {
  return (
    <div className={styles.menuPerfil}>
      <Link href={"/perfil/datos"}>Datos de Perfil</Link>
      <Link href={"/resultados"}>Resultados</Link>
      <Link href={"/perfil/facturacion"}>Facturación</Link>
    </div>
  );
}

export default MenuPerfil;
