import "../styles/global.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
