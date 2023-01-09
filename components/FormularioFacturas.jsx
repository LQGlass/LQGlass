import styles from "./FormularioFacturas.module.scss";

function FormularioFacturas() {
  return (
    <div className={styles.formularioFacturas}>
      <p>
        Rellena el formulario para poder enviar la factura <br /> a el correo
        electrónico con el que iniciaste sesion.
      </p>
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
          <input
            type="radio"
            id="fisica"
            name="razon-social"
            value="Persona Física"
          />
          <label htmlFor="fisica">Persona Fisica</label>
          <input
            className={styles.radio}
            type="radio"
            id="moral"
            name="razon-social"
            value="Persona Moral"
          />
          <label htmlFor="moral">Persona Moral</label>
        </div>

        <div className={styles.direccion}>
          <input
            type="text"
            name="calle"
            id="calle"
            placeholder="Calle y numero"
          />
          <input
            type="text"
            name="Colonia"
            id="Colonia"
            placeholder="Colonia"
          />
          <input
            type="text"
            name="codigopostal"
            id="codigopostal"
            placeholder="Código postal"
          />
          <input
            type="text"
            name="municipio"
            id="municipio"
            placeholder="Municipio/Delegación"
          />
        </div>
        <label for="cfdi">Uso de CFDI:</label>
        <select name="cfdi" id="cfdi">
          <option value="P01">Por definir</option>
          <option value="G01">Adquisición de mercancías</option>
          <option value="G03">Gastos en general</option>
          <option value="I01">Construcciones</option>
          <option value="I02">
            Mobiliario y equipo de oficina por inversiones
          </option>
          <option value="I03">Equipo de transporte</option>
          <option value="I04">Equipo de cómputo y accesorios</option>
          <option value="I05">
            Dados, troqueles, moldes, matrices y herramental
          </option>
          <option value="I06">Comunicaciones telefónicas</option>
          <option value="I07">Otra maquinaria y equipo</option>
          <option value="I08">
            Honorarios médicos, dentales y gastos hospitalarios
          </option>
          <option value="D01">
            Gasots médicos por incapacidad o discapacidad
          </option>
          <option value="D02">Gastos funerales</option>
          <option value="D04">Donativos</option>
          <option value="D05">
            Intereses reales efectivamente pagados por créditos hipotecarios{" "}
          </option>
          <option value="D06">Aportaciones voluntarias al SAR</option>
          <option value="D07">Primas por seguros de gastos médicos</option>
          <option value="D08">
            Gastos de transportación escolar obligatoria
          </option>
          <option value="D09">
            Depósitos en cuentas para el ahorro, primas que tengan como base
            planes de pensiones
          </option>
          <option value="D10">Pagos por servicios educativos</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioFacturas;
