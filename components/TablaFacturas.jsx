import styles from "./TablaFacturas.module.scss";
export default function TablaFacturas({ data }) {
  return (
    <div className={styles.facturasWrapper}>
      <h3>Facturas solicitadas via web</h3>
      <div className={styles.facturas}>
        <table>
          <th>Ticket</th>
          <th>Email cliente</th>
          <th>Nombre</th>
          <th>Calle</th>
          <th>Colonia</th>
          <th>Código postal</th>
          <th>Municipio</th>
          <th>Regimen Fiscal</th>
          <th>Uso de CFDI</th>
          <th>Enviada</th>
          <tbody>
            {data
              ? data.map(el => {
                  return (
                    <tr>
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
