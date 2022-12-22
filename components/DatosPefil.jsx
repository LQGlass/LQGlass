export default function DatosPerfil({ perfil }) {
  return (
    <>
      <h2>Datos del Perfil</h2>
      <ul>
        <li>Correo: <br /> {perfil.email}</li>
      </ul>
    </>
  );
}
