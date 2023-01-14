import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogSeccionExpanded from "../components/BlogSeccionExpanded";
import Head from "next/head";
const blog = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar />
      <BlogSeccionExpanded />
      <Footer />
    </div>
  );
};

export default blog;
