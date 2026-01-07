import React from "react";
import heroImg from "../assets/images/dr-cassio.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-white to-brivvaBg py-20 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brivvaSecondary/20 blur-3xl" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-brivvaAccent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brivvaPrimary/10 text-brivvaPrimary font-medium text-sm">
              ✨ Odontologia de Excelência
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brivvaPrimary leading-tight">
              Clínica Odontológica Especializada em{" "}
              <span className="text-gradient">Itapema</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brivvaText/80 leading-relaxed max-w-lg">
              Tecnologia avançada, conforto e um atendimento humanizado para
              transformar sua saúde bucal e autoestima.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="btn-primary text-center">
                Agende sua Avaliação
              </a>
              <a href="#servicos" className="btn-secondary text-center">
                Conheça Nossos Tratamentos
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-brivvaText/60">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500"
                  >
                    User
                  </div>
                ))}
              </div>
              <p>+500 sorrisos transformados</p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={heroImg}
                alt="Ambiente clínico acolhedor da BRIVVA"
                width="600"
                height="400"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative dots/pattern behind image */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-brivvaSecondary/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-hero-pattern opacity-20" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
