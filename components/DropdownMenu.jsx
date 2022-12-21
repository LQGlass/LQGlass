import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

function DropdownMenu({packs, categorias, titulo}){
  const [isVisible, setIsVisible] = useState(false);
  return(
    <div className={styles.dropMenuWrapper} onMouseEnter={()=>setIsVisible(true)} onMouseLeave={()=>setIsVisible(false)}>
          <div className={styles.linkNavDiv}>{titulo}
          </div>
    {isVisible && <div className={styles.dropDownMenu}>
      <div className={styles.DropdownMenu}>
      <ul>
        {packs && paquetes.map(paquete=>{
          return(
            <Link href={`/grupo-paquetes/${paquete}`}><li>{paquete}</li></Link>
          )
        })}

        {categorias && categorias.map(categoria=>{
          return(
            <Link href={`//${categoria}`}><li>{categoria}</li></Link>
          )
        })}
      </ul>
      </div>
    </div>}
    </div>
  )
}

export default DropdownMenu;