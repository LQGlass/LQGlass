import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./aviso-privacidad.module.scss";
export default function aviso() {
  return (
    <>
      <Head>
        <title>Aviso de privacidad</title>
      </Head>
      <Navbar />
      <div className={styles.privacidadContainer}>
        <h1>Aviso de privacidad</h1>
        <p>
          Laboratorios Químicos Glass, con domicilio en Av, Adolfo Lopez Mateos.
          22, Local G1. Col. Santa Cruz del Monte, Naucalpan, 53110 Estado de
          México, Méx.. y portal de internet{" "}
          <a href="https://laboratoriosquimicosglass.com/aviso-privacidad/">
            https://laboratoriosquimicosglass.com/aviso-privacidad/
          </a>
          , es el responsable del uso y protección de sus datos personales, y al
          respecto le informamos lo siguiente:
        </p>

        <p>
          <strong>¿Para qué fines utilizaremos sus datos personales?</strong>
        </p>
        <p>
          Los datos personales que recabamos de usted, los utilizaremos para las
          siguientes finalidades que son necesarias para el servicio que
          solicita:
        </p>
        <ul>
          <li>Respuesta a mensajes del formulario de contacto</li>
        </ul>

        <p>
          <strong>¿Qué datos personales utilizaremos para estos fines?</strong>
        </p>
        <p>
          Para llevar a cabo las finalidades descritas en el presente aviso de
          privacidad, utilizaremos los siguientes datos personales:
        </p>
        <ul>
          <li>Datos de identificación y contacto</li>
        </ul>

        <p>
          <strong>
            ¿Cómo puede acceder, rectificar o cancelar sus datos personales, u
            oponerse a su uso o ejercer la revocación de consentimiento?
          </strong>
        </p>
        <p>
          Usted tiene derecho a conocer qué datos personales tenemos de usted,
          para qué los utilizamos y las condiciones del uso que les damos
          (Acceso). Asimismo, es su derecho solicitar la corrección de su
          información personal en caso de que esté desactualizada, sea inexacta
          o incompleta (Rectificación); que la eliminemos de nuestros registros
          o bases de datos cuando considere que la misma no está siendo
          utilizada adecuadamente (Cancelación); así como oponerse al uso de sus
          datos personales para fines específicos (Oposición). Estos derechos se
          conocen como derechos ARCO.
        </p>

        <p>
          Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una
          petición vía correo electrónico a{" "}
          <a href="mailto:contacto@laboratoriosquimicosglass.com">
            contacto@laboratoriosquimicosglass.com
          </a>{" "}
          y deberá contener:
        </p>
        <ul>
          <li>Nombre completo del titular.</li>
          <li>Domicilio.</li>
          <li>Teléfono.</li>
          <li>Correo electrónico usado en este sitio web.</li>
          <li>Copia de una identificación oficial adjunta.</li>
          <li>Asunto «Derechos ARCO»</li>
          <li>
            Descripción del objeto del escrito, los cuales pueden ser de manera
            enunciativa más no limitativa los siguientes: Revocación del
            consentimiento para tratar sus datos personales; y/o Notificación
            del uso indebido del tratamiento de sus datos personales; y/o
            Ejercitar sus Derechos ARCO, con una descripción clara y precisa de
            los datos a Acceder, Rectificar, Cancelar o bien, Oponerse.
          </li>
        </ul>
        <p>
          En caso de Rectificación de datos personales, deberá indicar la
          modificación exacta y anexar la documentación soporte; es importante
          en caso de revocación del consentimiento, que tenga en cuenta que no
          en todos los casos podremos atender su solicitud o concluir el uso de
          forma inmediata, ya que es posible que por alguna obligación legal
          requiramos seguir tratando sus datos personales. Asimismo, usted
          deberá considerar que, para ciertos fines, la revocación de su
          consentimiento implicará que no le podamos seguir prestando el
          servicio que nos solicitó, o la conclusión de su relación con
          nosotros.
        </p>
        <p>
          CATÁLOGO FO-GLASS-5.4-001.2 Vigente desde: 01-10-2022 REV: 2 Página 11
          de 12
        </p>
        <p>¿En cuántos días le daremos respuesta a su solicitud? 5 días</p>
        <p>
          ¿Por qué medio le comunicaremos la respuesta a su solicitud? Al mismo
          correo electrónico de donde se envió la petición.
        </p>
        <p>El uso de tecnologías de rastreo en nuestro portal de internet</p>
        <p>
          Le informamos que en nuestra página de internet utilizamos cookies,
          web beacons u otras tecnologías, a través de las cuales es posible
          monitorear su comportamiento como usuario de internet, así como
          brindarle un mejor servicio y experiencia al navegar en nuestra
          página. Los datos personales que obtenemos de estas tecnologías de
          rastreo son los siguientes: Identificadores, nombre de usuario y
          contraseñas de sesión, teléfono.
        </p>
        <p>
          Estas cookies, web beacons y otras tecnologías pueden ser
          deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda
          de su navegador. Tenga en cuenta que, en caso de desactivar las
          cookies, es posible que no pueda acceder a ciertas funciones
          personalizadas en nuestro sitio web.
        </p>
        <p>¿Cómo puede conocer los cambios en este aviso de privacidad?</p>
        <p>
          El presente aviso de privacidad puede sufrir modificaciones, cambios o
          actualizaciones derivadas de nuevos requerimientos legales; de
          nuestras propias necesidades por los productos o servicios que
          ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro
          modelo de negocio, o por otras causas. Nos comprometemos a mantener
          actualizado este aviso de privacidad sobre los cambios que pueda
          sufrir y siempre podrá consultar las actualizaciones que existan en el
          sitio web{" "}
          <a href="https://laboratoriosquimicosglass.com/aviso-privacidad/">
            https://laboratoriosquimicosglass.com/aviso-privacidad/
          </a>
          .
        </p>
      </div>
      <Footer />
    </>
  );
}
