import "../i18n";
import "../styles/global.css";
import Layout from "../components/Layout/Layout";
import { useState, useEffect } from "react";
import Router from "next/router";
import Loader from "../components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage && storedLanguage !== Router.locale) {
      Router.replace(Router.asPath, Router.asPath, { locale: storedLanguage });
    }

    handleComplete();

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <>
      <Head>
        {/* фавикон */}
        <link rel="icon" href="/favicon1.png" />
      </Head>
      {/* Google Analytics */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `,
        }}
      />
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          <ToastContainer position="top-right" autoClose={3000} />
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default appWithTranslation(App);
