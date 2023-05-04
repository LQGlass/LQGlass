import styles from "./TablaFacturas.module.scss";
export default function TablaFacturas({ data }) {
  return (
    <div className={styles.facturasWrapper}>
      <h3>Facturas solicitadas via web</h3>
      <div className={styles.facturas}>
        <table>
          <thead>
            <tr>
              <td>Ticket</td>
              <td>Email cliente</td>
              <td>Nombre</td>
              <td>Calle</td>
              <td>Colonia</td>
              <td>Código postal</td>
              <td>Municipio</td>
              <td>Regimen Fiscal</td>
              <td>Uso de CFDI</td>
              <td>Enviada</td>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map(el => {
                  return (
                    <tr key={el.ticket}>
                      <td>{el.ticket}</td>
                      <td>{el.email}</td>
                      <td>{el.name}</td>
                      <td>{el.calle}</td>
                      <td>{el.colonia}</td>
                      <td>{el.cpp}</td>
                      <td>{el.municipio}</td>
                      <td>{el.regimen}</td>
                      <td>{el.cfdi}</td>
                      <td>{el.send === false ? "No" : "Si"}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
