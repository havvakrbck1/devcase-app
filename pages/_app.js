// pages/_app.js
import "../styles/globals.css";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.classList.add("dark"); // dark modu aktif et
  }, []);

  return <Component {...pageProps} />;
}
