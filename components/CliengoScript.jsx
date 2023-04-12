import { useEffect } from "react";
function CliengoScript() {
  useEffect(() => {
    // Crea el elemento script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s.cliengo.com/weboptimizer/6436f4869de955002520ad9f/6436f9789de955002520b046.js?platform=onboarding_modular";

    // Inserta el elemento script en el DOM
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }, []); // Solo ejecuta el efecto una vez al montar el componente

  return null; // El componente no renderiza ningún elemento
}

export default CliengoScript;
