import { useEffect } from "react";
function CliengoScript() {
  useEffect(() => {
    // Crea el elemento script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s.cliengo.com/weboptimizer/63bc916f1d90ab002ac34a95/63bc91721d90ab002ac34a9c.js?platform=dashboard";

    // Inserta el elemento script en el DOM
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }, []); // Solo ejecuta el efecto una vez al montar el componente

  return null; // El componente no renderiza ningún elemento
}

export default CliengoScript;
