import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import styles from "./BurgerMenu.module.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import LogButtons from "./LogButtons";

function ResponsiveExample({ categorias, paquetes }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div div className={styles.btn}>
      <Button className="d-lg-none" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas
        className={styles.menuLateral}
        show={show}
        onHide={handleClose}
        responsive="lg"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-lg-none">
          <div className={styles.menu}>
            <Link href={"/"}>
              <div className={styles.linkNavDiv}>Inicio</div>
            </Link>
            <DropdownButton
              variant="dark"
              id="dropdown-basic-button"
              title="Categorias"
              size="lg"
            >
              {categorias &&
                categorias.map(categoria => {
                  return (
                    <Link key={categoria} href={`//${categoria}`}>
                      <li onClick={handleClose} className={styles.linksMenu}>
                        {categoria}
                      </li>
                    </Link>
                  );
                })}
            </DropdownButton>
            <DropdownButton
              variant="dark"
              id="dropdown-basic-button"
              title="Paquetes"
              size="lg"
            >
              {paquetes &&
                paquetes.map(paquete => {
                  return (
                    <Link key={paquete} href={`/grupo-paquetes/${paquete}`}>
                      <li onClick={handleClose} className={styles.linksMenu}>
                        {paquete}
                      </li>
                    </Link>
                  );
                })}
            </DropdownButton>
            <Link href={"/promociones"}>
              <div className={styles.linkNavDiv}>Promociones</div>
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
            <Link href={"/perfil"}>
              <div className={styles.linkNavDiv}>Resultados</div>
            </Link>
            <Link href={"/perfil"}>
              <div className={styles.linkNavDiv}>Factura</div>
            </Link>
          </div>
          <LogButtons />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ResponsiveExample;
