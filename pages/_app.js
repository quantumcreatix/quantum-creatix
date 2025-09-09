import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quantum Creatix — Empowering Innovation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Quantum Creatix — Empowering Innovation, Inspiring Creativity"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
