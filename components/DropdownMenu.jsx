import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

function DropdownMenu({ titulo, packs, categories }) {
  const [isPaquetes, setIsPaquetes] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (packs) {
      setIsPaquetes(true);
    } else {
      setIsPaquetes(false);
    }
  }, []);

  const paquetes = packs ? [...packs] : ["No hay paquetes disponibles"];

  const categorias = categories
    ? [...categories]
    : ["No hay categorias disponibles"];
  return (
    <div
      className={styles.dropMenuWrapper}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className={styles.linkNavDiv}>{titulo}</div>
      {isVisible && (
        <div className={styles.dropDownMenu}>
          {!isPaquetes && <h3 className={styles.subtitulo}>Categorias</h3>}
          <div className={styles.DropdownMenu}>
            <ul>
              {isPaquetes &&
                paquetes.map(paquete => {
                  return (
                    <Link key={paquete} href={`/grupo-paquetes/${paquete}`}>
                      <li>{paquete}</li>
                    </Link>
                  );
                })}
              {isPaquetes && (
                <Link href={`/perfiles`}>
                  <li>Perfiles</li>
                </Link>
              )}

              {!isPaquetes &&
                categorias.map(categoria => {
                  return (
                    <Link key={categoria} href={`/${categoria}`}>
                      <li>{categoria}</li>
                    </Link>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
