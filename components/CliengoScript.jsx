import { useEffect } from "react";
function CliengoScript() {
  useEffect(() => {
    // Crea el elemento script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s.cliengo.com/weboptimizer/645593b311c8270032736ae2/645593b511c8270032736ae5.js?platform=dashboard";

    // Inserta el elemento script en el DOM
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }, []); // Solo ejecuta el efecto una vez al montar el componente

  return null; // El componente no renderiza ningún elemento
}

export default CliengoScript;
