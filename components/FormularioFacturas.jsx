import styles from "./FormularioFacturas.module.scss";

function FormularioFacturas() {
  return (
    <div className={styles.formularioFacturas}>
    <p>Rellena el formulario para poder enviar la factura <br /> a el correo electrónico con el que iniciaste sesion.</p>
      <form action="/perfil">
        <input type="text" name="rfc" id="rfc" placeholder="RFC" />
        <input type="text" name="name" id="name" placeholder="Nombre" />
        <input
          type="text"
          name="apellidos"
          id="apellidos"
          placeholder="Apellidos"
        />
        <div className="radio">
        <input type="radio" id="fisica" name="razon-social" value="Persona Física" />
        <label htmlFor="fisica">Persona Fisica</label>
        <input type="radio" id="moral" name="razon-social" value="Persona Moral" />
        <label htmlFor="moral">Persona Moral</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioFacturas;
