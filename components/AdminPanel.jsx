import Link from "next/link";

export default function AdminPanel() {
  return (
    <>
      <p>
        <Link href="/panel-admin">Ir a panel de administrador</Link>
      </p>
      <p>
        <Link href="https://firebasestorage.googleapis.com/v0/b/lqglasscms.appspot.com/o/manuales%2FManualenviodocumentos_compressed.pdf?alt=media&token=193b6494-4abb-41ed-a234-90a8355612a4">
          Manual para subir resultados y facturas.
        </Link>
      </p>
    </>
  );
}
