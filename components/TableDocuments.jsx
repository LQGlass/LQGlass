import styles from "./TableDocuments.module.scss";

export default function TableDocuments({ documents }) {
  return (
    <div className={styles.tabla}>
      <table>
        <thead>
          <tr>
            <th>Folio</th>
            <th>Subido por</th>
            <th>Fecha de subida</th>
            <th>Archivo</th>
          </tr>
        </thead>
        <tbody>
          {documents &&
            documents.map(el => (
              <tr key={el.folio}>
                <td>{el.folio}</td>
                <td>{el.subido}</td>
                <td>{el.uploadDate}</td>
                <td>
                  <a href={el.url} target="_blank" rel="noreferrer">
                    Ver
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
