import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Lenis from "@studio-freight/lenis";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const lenis = new Lenis({ smooth: true });
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const href = link.getAttribute("href");
  if (!href) return;
  e.preventDefault();
  lenis.scrollTo(href, { offset: -64 });
});

function injectJsonLd() {
  const name = import.meta.env.VITE_CLINIC_NAME || "BRIVVA Odontologia";
  const description =
    import.meta.env.VITE_CLINIC_DESCRIPTION ||
    "Clínica odontológica: Implantes, Ortodontia, Estética Dental e Clínica Geral.";
  const url = import.meta.env.VITE_SITE_URL || "https://brivva.com.br/";
  const telephone = import.meta.env.VITE_TELEPHONE || "(xx) xxxxx-xxxx";
  const streetAddress =
    import.meta.env.VITE_ADDRESS_STREET || "Rua 272, nº 275, Sala 8 - Segunda Avenida";
  const addressLocality = import.meta.env.VITE_ADDRESS_LOCALITY || "Itapema";
  const addressRegion = import.meta.env.VITE_ADDRESS_REGION || "SC";
  const postalCode = import.meta.env.VITE_POSTAL_CODE || "00000-000";
  const image = import.meta.env.VITE_OG_IMAGE || `${url}og-image.jpg`;
  const json = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name,
    description,
    url,
    telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry: "BR",
    },
    image,
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(json);
  document.head.appendChild(script);
}

injectJsonLd();
