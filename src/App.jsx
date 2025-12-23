import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Trust from "./components/Trust.jsx";
import Team from "./components/Team.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // Aviso de configuração do cline via variável de ambiente (não expõe chave)
  React.useEffect(() => {
    const apiKey =
      (typeof import.meta !== "undefined" &&
        import.meta.env &&
        import.meta.env.VITE_CLINE_API_KEY) ||
      (typeof process !== "undefined" &&
        process.env &&
        process.env.VITE_CLINE_API_KEY);
    if (!apiKey) {
      console.warn(
        "[cline] Variável de ambiente VITE_CLINE_API_KEY não definida. " +
          'Configure e instale com: npx -y @21st-dev/cli@latest install cline --api-key "$VITE_CLINE_API_KEY"'
      );
    }
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section id="inicio" aria-label="Início">
          <Hero />
        </section>

        {/* Serviços */}
        <section
          id="servicos"
          aria-label="Nossas Especialidades"
          className="py-16"
        >
          <div className="container mx-auto px-4">
            <Services />
          </div>
        </section>

        {/* Diferenciais / Confiança */}
        <section
          id="sobre"
          aria-label="Sobre a Clínica"
          className="py-16 bg-brivvaBg"
        >
          <div className="container mx-auto px-4">
            <Trust />
          </div>
        </section>

        {/* Equipe */}
        <section id="equipe" aria-label="Nossa Equipe" className="py-16">
          <div className="container mx-auto px-4">
            <Team />
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" aria-label="Depoimentos" className="py-16">
          <div className="container mx-auto px-4">
            <Testimonials />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-label="Perguntas Frequentes" className="py-16">
          <div className="container mx-auto px-4">
            <FAQ />
          </div>
        </section>

        {/* Contato */}
        <section
          id="contato"
          aria-label="Contato"
          className="py-16 bg-brivvaBg"
        >
          <div className="container mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
