import "../styles/global.css";
import Layout from "../components/Layout/Layout";
import { useState, useEffect } from "react";
import Router from "next/router";
import Loader from "../components/Loader/Loader";
import { ToastContainer } from "react-toastify";

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true); // Початковий стан - true

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    handleComplete();

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <>
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

export default App;
