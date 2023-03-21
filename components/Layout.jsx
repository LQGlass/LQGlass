import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, navbarLanguage }) {
  return (
    <>
      <Navbar navbarLanguage={navbarLanguage} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
