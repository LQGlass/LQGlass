import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogSeccionExpanded from "../components/BlogSeccionExpanded";
import Head from "next/head";
import TituloHeader from "../components/TituloHeader";

const blog = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar />
      <TituloHeader titulo="Blog" />
      <BlogSeccionExpanded />
      <Footer />
    </div>
  );
};

export default blog;
