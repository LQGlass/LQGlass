import { useState } from "react";
import styles from "./InformesSeccion.module.scss";
import Image from "next/image";
import emailjs from "emailjs-com";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "..//utils//emailjs";

function InformesSeccion() {
  // Declare state variables to store form input values
  const [nombre, setNombre] = useState("");
  const [estudio, setEstudio] = useState("");
  const [email, setEmail] = useState("");

  // Define function to handle form submission
  const handleSubmit = async event => {
    const errorMessage = document.getElementById("errorMessage");
    const butonSubmit = document.getElementById("botonSubmit");
    event.preventDefault();

    var templateParams = {
      name: nombre,
      message: estudio,
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
      // Clear form input values
      setNombre("");
      setEstudio("");
      setEmail("");
      botonSubmit.textContent = "Enviado";
      //cambia el color de el boton a verde y lo deshabilita
      botonSubmit.disabled = true;
      botonSubmit.style.backgroundColor = "#4CAF50";
      errorMessage.textContent = "";
    } catch (error) {
      console.error("Hubo un error al enviar el formulario: ", error);
      errorMessage.textContent = "Error intente mas tarde";
      setNombre("");
      setEstudio("");
      setEmail("");
    }
  };

  // Render form and mailbox image
  return (
    <section className={styles.informesSeccion}>
      <div className={styles.informesWrapper}>
        <div className={styles.imagenCorreo}>
          <Image
            width={250}
            height={250}
            src="/images/mailbox.png"
            alt="Imagen de correo"
          />
        </div>
        <div>
          <div>
            <h2>Pide informes sobre el estudio que buscas</h2>
          </div>
          <div>
            <form className={styles.informes} onSubmit={handleSubmit}>
              <input
                placeholder="Nombre"
                type="text"
                value={nombre}
                onChange={event => setNombre(event.target.value)}
              />
              <input
                placeholder="Estudio"
                type="text"
                value={estudio}
                onChange={event => setEstudio(event.target.value)}
              />
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <button id="botonSubmit" className={styles.submit} type="submit">
                Enviar
              </button>
            </form>
            <p id="errorMessage" className={styles.errorMessage}></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformesSeccion;
