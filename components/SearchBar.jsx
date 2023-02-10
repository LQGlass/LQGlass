import styles from "./SearchBar.module.scss";
import Router from "next/router";
import { useState } from "react";

export default function SearchBar({ contenido, placeholder }) {
  const [query, setquery] = useState("");

  const handleSubmit = () => {
    const matchingObjects = contenido.filter(
      object => object.toLowerCase() === query.toLowerCase()
    );
    Router.push(`/examenes/${matchingObjects[0]}`);
  };
  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={e => setquery(e.target.value)}
        />
        <button className={styles.enterButton} onClick={handleSubmit}>
          Buscar
        </button>
      </div>
    </>
  );
}
