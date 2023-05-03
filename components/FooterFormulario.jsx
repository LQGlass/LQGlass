import { useState } from "react";
import emailjs from "emailjs-com";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "..//utils//emailjs";
export default function FooterFormulario() {
  const [informes, setinformes] = useState(false);
  const informesHandler = () => {
    setinformes(!informes);
  };
  // Define function to handle form submission
  const handleSubmit = async event => {
    const butonSubmit = document.getElementById("botonEnviar");
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = informes
      ? document.getElementById("queja").value
      : document.getElementById("estudio").value;
    const form = document.getElementById("form");

    var templateParams = {
      name: name,
      message: message,
      email: email,
    };
    //enviar email
    try {
      emailjs
        .send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_USER_ID
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      // limpiar los valores de los inputs
      form.reset();
      botonSubmit.textContent = "Enviado";
      //cambia el color de el boton a verde y lo deshabilita
      botonSubmit.disabled = true;
      botonSubmit.style.backgroundColor = "#4CAF50";
      errorMessage.textContent = "";
    } catch (error) {
      console.error("Hubo un error al enviar el formulario: ", error);
      errorMessage.textContent = "Error intente mas tarde";
      form.reset();
    }
  };
  return (
    <>
      <div>
        <select
          name="informes"
          onChange={informesHandler}
          id="informes"
          defaultValue={"value2"}
        >
          <option value="value1">Quejas</option>
          <option value="value2">Informes</option>
        </select>
        <form id="form" onSubmit={handleSubmit}>
          <input id="name" placeholder="Nombre" type="text" />
          <input id="email" placeholder="Email" type="email" />
          {!informes && (
            <input id="estudio" placeholder="Estudio" type="text" />
          )}
          {informes && <input id="queja" placeholder="Queja" type="text" />}
          <button id="botonEnviar" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
