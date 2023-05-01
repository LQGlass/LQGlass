import { useState } from "react";
import styles from "./InformesSeccion.module.scss";
import Image from "next/image";

function InformesSeccion() {
  // Declare state variables to store form input values
  const [nombre, setNombre] = useState("");
  const [estudio, setEstudio] = useState("");
  const [email, setEmail] = useState("");

  // Define function to handle form submission
  const handleSubmit = async event => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Create object with form data to send to Mailchimp
    const data = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: nombre,
        ESTUDIO: estudio,
      },
    };

    // Send form data to Mailchimp API using fetch
    const response = await fetch("/api/mailchimp", {
      method: "POST",
      body: JSON.stringify(data),
    });

    // Handle response from Mailchimp API
    if (response.ok) {
      // Show success message and clear form input values
      alert("Thank you for requesting information!");
      setNombre("");
      setEstudio("");
      setEmail("");
    } else {
      // Show error message
      alert("An error has occurred. Please try again later.");
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
