import Link from "next/link";

export default function AdminPanel() {
  return (
    <>
      <p>
        <Link href="/panel-admin">Ir a panel de administrador</Link>
      </p>
      <p>
        <Link href="/manual-usuario">Manual de usuario</Link>
      </p>
    </>
  );
}
