import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

function DropdownMenu({titulo}){
  const [isPaquetes, setIsPaquetes] = useState(false);
  useEffect(() => {
    if(titulo === "Paquetes"){
      setIsPaquetes(true);
    }
  }, [])
  
  const paquetes = [
    "Check up",
    "Para El",
    "Para Ella",
    "Adulto Mayor",
    "Kids",
    "Perfiles"
  ]

  const categorias = [
    "Biología molecular",
    "COVID",
    "Coagulación",
    "Coprología",
    "Endocrinología (hormonas)",
    "Hematología",
    "Inmunología-serología",
    "Microbiología",
    "Parasitología",
    "Patología",
    "Pruebas especiales",
    "Química clínica-Bioquímica",
    "Toxicología",
    "Uroanálisis"
  ]
  const [isVisible, setIsVisible] = useState(false);
  return(
    <div className={styles.dropMenuWrapper} onMouseEnter={()=>setIsVisible(true)} onMouseLeave={()=>setIsVisible(false)}>
          <div className={styles.linkNavDiv}>{titulo}
          </div>
    {isVisible && <div className={styles.dropDownMenu}>
      <div className={styles.DropdownMenu}>
      <ul>
        {isPaquetes && paquetes.map(paquete=>{
          return(
            <Link href={`/grupo-paquetes/${paquete}`}><li>{paquete}</li></Link>
          )
        })}

        {!isPaquetes && categorias.map(categoria=>{
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