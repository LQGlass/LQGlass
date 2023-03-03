import styles from "./FormularioFacturas.module.scss";
import { useState, useEffect } from "react";
import {
  doc,
  setDoc,
  getFirestore,
  collection,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import firebaseApp from "../firebase/firebase";
import IngresarFacturas from "./IngresarFacturas";
const db = getFirestore(firebaseApp);

function FormularioFacturas({ user }) {
  const d = new Date();
  const month = d.toLocaleString("es-US", { month: "long" });
  const year = d.getFullYear();
  const monthNum = d.getMonth();
  const [solicitadas, setSolicitadas] = useState(null);
  const [ticket, setticket] = useState(null);
  const isDoctor = user.doctor;
  console.log(solicitadas);
  useEffect(() => {
    async function getData() {
      let facturasSolicitadas = [];
      //funcion para llamar los datos desde firestore
      const collectionRef = query(
        collection(db, "facturas-solicitadas"),
        where("email", "==", user.email)
      );
      //se genera un snapshor con todos los documentos
      const snapshot = await getDocs(collectionRef);
      //se mapea cada documento para hacer push de
      //sus datos en el array categorias
      snapshot.forEach(doc => {
        facturasSolicitadas.unshift(doc.data());
      });
      setSolicitadas(facturasSolicitadas);
    }
    getData();
  }, [ticket]);

  async function submitHandler(e) {
    e.preventDefault();
    let ticket = e.target.ticket.value;
    let rfc = e.target.rfc.value;
    let name = e.target.name.value;
    let calle = e.target.calle.value;
    let colonia = e.target.Colonia.value;
    let cpp = e.target.codigopostal.value;
    let municipio = e.target.municipio.value;
    let regimenValue = document.getElementById("regimen");
    let regimen = regimenValue.options[regimenValue.selectedIndex].text;
    let cfdiValue = document.getElementById("cfdi");
    let cfdi = cfdiValue.options[cfdiValue.selectedIndex].text;
    let email = user.email;
    const tieneTicket = solicitadas.some(
      solicitada => solicitada.ticket === ticket
    );
    console.log(tieneTicket);
    console.log(rfc, name, calle, colonia, cpp, municipio, regimen, cfdi);
    if (
      ticket.trim().length === 0 ||
      rfc.trim().length === 0 ||
      name.trim().length === 0 ||
      calle.trim().length === 0 ||
      colonia.trim().length === 0 ||
      cpp.trim().length === 0 ||
      municipio.trim().length === 0 ||
      !regimen.trim() ||
      !cfdi.trim() ||
      email.trim().length === 0
    ) {
      alert("Debe llenar todos los espacios solicitados");
      return;
    }
    if (tieneTicket) {
      alert(
        "Este ticket ya fue ingresado anteriormente, revise en su bandeja de facturas."
      );
      return;
    } else {
      console.log("No incluye");
      await setDoc(
        doc(db, "facturas-solicitadas", year + "-" + monthNum + "-" + ticket),
        {
          ticket: ticket,
          rfc: rfc,
          name: name,
          calle: calle,
          colonia: colonia,
          cpp: cpp,
          municipio: municipio,
          regimen: regimen,
          cfdi: cfdi,
          email: email,
          send: false,
        }
      ).then(() => {
        ticket = "";
        rfc = "";
        name = "";
        calle = "";
        colonia = "";
        cpp = "";
        municipio = "";
        regimen = "";
        cfdi = "";
        email = "";
      });
      setticket(ticket);
    }
  }
  return (
    <>
      {isDoctor && (
        <>
          <h2>Subir Facturas</h2>
          <IngresarFacturas />
        </>
      )}
      {!isDoctor && (
        <div className={styles.formularioFacturas}>
          <div>
            <p>
              Rellena el formulario para poder enviar la factura <br /> a el
              correo electrónico con el que iniciaste sesion.
            </p>
            <p>
              <strong>Facturas solicitadas:</strong>
            </p>
            {solicitadas ? (
              solicitadas.map(el => <p>Ticket: {el.ticket}</p>)
            ) : (
              <p>No se han solicitado facturas aún.</p>
            )}
          </div>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="ticket"
              id="ticket"
              placeholder="Número de ticket"
            />
            <input type="text" name="rfc" id="rfc" placeholder="RFC" />
            <input type="text" name="name" id="name" placeholder="Nombre" />
            <input
              type="text"
              name="apellidos"
              id="apellidos"
              placeholder="Apellidos"
            />
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
            <label for="regimen">Régimen Fiscal</label>
            <select name="regimen" id="regimen">
              <option value="0">Por definir</option>
              <option value="605">
                Sueldos y Salarios e Ingresos Asimilados a Salarios
              </option>
              <option value="612">
                Personas Físicas con Actividades Empresariales y Profesionales
              </option>
              <option value="616">Sin obligaciones fiscales </option>
              <option value="611">
                Ingresos por Dividendos (socios y accionistas)
              </option>
              <option value="621">Incorporación Fiscal</option>
              <option value="629">
                De los Regímenes Fiscales Preferentes y de las Empresas
                Multinacionales
              </option>
              <option value="630">
                Enajenación de acciones en bolsa de valores{" "}
              </option>
              <option value="601">General de Ley Personas Morales </option>
              <option value="603">
                Personas Morales con Fines no Lucrativos{" "}
              </option>
              <option value="620">
                Sociedades Cooperativas de Producción que optan por Diferir sus
                Ingresos{" "}
              </option>
              <option value="623">Opcional para Grupos de Sociedades </option>
              <option value="624">Coordinados </option>
              <option value="628">Hidrocarburos </option>
            </select>
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
      )}
    </>
  );
}

export default FormularioFacturas;
