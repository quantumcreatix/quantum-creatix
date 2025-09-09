import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Quantum Creatix — Empowering Innovation, Inspiring Creativity
        </title>

        {/* Basic Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Quantum Creatix — Empowering Innovation, Inspiring Creativity"
        />
        <meta
          name="keywords"
          content="Quantum Creatix, Innovation, Creativity, Tech, Design, Development, AI, Future"
        />
        <meta name="author" content="Quantum Creatix Team" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph for Facebook, LinkedIn, etc. */}
        <meta
          property="og:title"
          content="Quantum Creatix — Empowering Innovation, Inspiring Creativity"
        />
        <meta
          property="og:description"
          content="Explore cutting-edge innovation and creative solutions with Quantum Creatix."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quantumcreatix.netlify.app" />
        <meta
          property="og:image"
          content="https://quantumcreatix.netlify.app/logo.jpg"
        />
        <meta property="og:site_name" content="Quantum Creatix" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quantum Creatix — Empowering Innovation, Inspiring Creativity"
        />
        <meta
          name="twitter:description"
          content="Explore cutting-edge innovation and creative solutions with Quantum Creatix."
        />
        <meta
          name="twitter:image"
          content="https://quantumcreatix.netlify.app/logo.jpg"
        />
        <meta name="twitter:site" content="@QuantumCreatix" />
        <meta name="twitter:creator" content="@QuantumCreatix" />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.jpg" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}

        {/* Canonical URL */}
        <link rel="canonical" href="https://quantumcreatix.netlify.app" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
