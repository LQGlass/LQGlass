import { useState } from "react";
import styles from "./InformesSeccion.module.scss";
import Image from "next/image";

//mailchimp key: 5da28080676561ecab2b69b8b1da9b72-us12

function InformesSeccion() {
  // Declare state variables to store form input values
  const [nombre, setNombre] = useState("");
  const [estudio, setEstudio] = useState("");
  const [email, setEmail] = useState("");

  // Define function to handle form submission
  const handleSubmit = async event => {
    // Prevent default form submission behavior
    event.preventDefault();
    console.log(nombre, estudio, email);
    try {
      //send data form to mailchimp
      await fetch(
        `https://us12.api.mailchimp.com/3.0/lists/4e50c83e86/members`,
        {
          method: "POST",
          body: JSON.stringify({
            email_address: email,
            status: "subscribed",
            merge_fields: {
              FNAME: nombre,
              LNAME: estudio,
            },
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "apikey 5da28080676561ecab2b69b8b1da9b72-us12",
          },
        }
      );
      // Clear form input values
      setNombre("");
      setEstudio("");
      setEmail("");
    } catch (error) {
      console.error("Hubo un error al enviar el formulario: ", error);
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
              <button className={styles.submit} type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformesSeccion;
