import { useState, useEffect } from "react";
import styles from "./BurgerMenu.module.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import DropdownButton from "react-bootstrap/DropdownButton";
import LogButtons from "./LogButtons";

function BurgerMenu({ categorias, paquetes }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(false);
  }, []);

  return (
    <div div className={styles.burgerMenu}>
      <Button className="d-lg-none" onClick={handleShow}>
        Menu
      </Button>

      {show && (
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
                <li
                  onClick={() => {
                    handleClose();
                  }}
                  className={styles.linkNavDiv}
                >
                  Promociones
                </li>
              </Link>
              <Link href={"/sucursales"}>
                <li
                  onClick={() => {
                    handleClose();
                  }}
                  className={styles.linkNavDiv}
                >
                  Sucursales
                </li>
              </Link>
              <Link href={"/blog"}>
                <li
                  onClick={() => {
                    handleClose();
                  }}
                  className={styles.linkNavDiv}
                >
                  Blog
                </li>
              </Link>
              <Link href={"/nosotros"}>
                <li
                  onClick={() => {
                    handleClose();
                  }}
                  className={styles.linkNavDiv}
                >
                  Nosotros
                </li>
              </Link>
              <Link href={"/perfil"}>
                <li
                  onClick={() => {
                    handleClose();
                  }}
                  className={styles.linkNavDiv}
                >
                  Resultados
                </li>
              </Link>
              <Link href={"/perfil"}>
                <li
                  onClick={() => {
                    handleClose();
                  }}
                  className={styles.linkNavDiv}
                >
                  Factura
                </li>
              </Link>
            </div>
            <LogButtons />
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </div>
  );
}

export default BurgerMenu;
