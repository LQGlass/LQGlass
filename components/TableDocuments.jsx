import styles from "./TableDocuments.module.scss";
export default function TableDocuments({ documents }) {
  return (
    <>
      <div className={styles.tabla}>
        <table>
          <th>folio</th>
          <th>Subido por</th>
          <th>Email cliente</th>
          <th>Fecha de subida</th>
          <th>Archivo</th>
          <tbody>
            {documents &&
              documents.map(el => (
                <tr key={el.folio}>
                  <td>{el.folio}</td>
                  <td>{el.subido}</td>
                  <td>{el.email}</td>
                  <td>{el.uploadDate}</td>
                  <td>
                    <a target={"_blank"} href={el.url}>
                      Ver
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
