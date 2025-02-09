import styles from "./SearchBar.module.scss";
import Router from "next/router";
import { useState } from "react";

export default function SearchBar({ contenido, placeholder }) {
  const [query, setQuery] = useState("");
  const [matchingObjects, setMatchingObjects] = useState([]);

  //busca en el contenido de la base de datos
  const handleQueryChange = e => {
    //guarda el valor del input en minúsculas
    const value = e.target.value.toLowerCase();
    setQuery(value);

    //si el valor es mayor a 0, busca en la base de datos
    if (value.length > 0) {
      const matches = contenido
        .filter(object => object.toLowerCase().includes(value))
        .slice(0, 5);
      setMatchingObjects(matches);
    } else {
      setMatchingObjects([]);
    }
  };

  //redirecciona a la página del objeto seleccionado
  const handleObjectClick = object => {
    Router.push(`/examenes/${object}`);
    setMatchingObjects([]);
    setQuery("");
  };

  //redirecciona a la página del objeto seleccionado
  const handleSubmit = () => {
    if (matchingObjects.length === 1) {
      Router.push(`/examenes/${matchingObjects[0]}`);
    } else if (matchingObjects.length > 1) {
      // Mostrar una lista de resultados para que el usuario seleccione
      console.log("Se encontraron varios resultados:", matchingObjects);
      Router.push(`/examenes/${matchingObjects[0]}`);
    } else {
      console.log("No se encontraron resultados para la búsqueda:", query);
      document.getElementById("searchBar").placeholder =
        "No se encontraron resultados";
    }
  };

  return (
    <>
      <div className={styles.searchBar}>
        <input
          id="searchBar"
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleQueryChange}
        />
      </div>
      {/* si hay resultados, muestra la lista de resultados */}
      {matchingObjects.length > 0 && (
        <div className={styles.autocomplete}>
          {matchingObjects.map((object, i) => (
            <div
              className={styles.enlaceExamen}
              key={i}
              onClick={() => handleObjectClick(object)}
            >
              {object}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
