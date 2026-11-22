import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Google Analytics 4. The Measurement ID comes from the VITE_GA_ID build
// variable (set as a GitHub repo variable), so local dev sends no hits.
const GA_ID = import.meta.env.VITE_GA_ID;
if (GA_ID && /^G-[A-Z0-9]+$/.test(GA_ID)) {
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
