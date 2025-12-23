import React from "react";
import { motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "./ui/card.jsx";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip.jsx";

const services = [
  {
    title: "Implantes Dentários",
    desc: "Reposição segura e estética de dentes ausentes com tecnologia avançada.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2c3.866 0 7 3.134 7 7 0 4.418-4 9-7 13-3-4-7-8.582-7-13 0-3.866 3.134-7 7-7Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Estética Dental",
    desc: "Facetas de porcelana, facetas de resina e clareamento para um sorriso radiante.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3l3 6 6 1-4.5 4.5L17 21l-5-3-5 3 1.5-6.5L4 10l6-1 2-6Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Ortodontia",
    desc: "Correção do alinhamento dentário com aparelhos modernos.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12h16M8 8l-2 8M16 8l2 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Endodontia",
    desc: "Tratamento de canal realizado com precisão e conforto para salvar seu dente.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 12L12 16L16 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8V16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Prótese e Reabilitação",
    desc: "Devolvendo função e estética com próteses fixas e removíveis de alta qualidade.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Clínica Geral",
    desc: "Restaurações, extrações e profilaxia (limpeza) para manter sua saúde bucal.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 8v8M8 12h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brivvaPrimary">
          Nossas Especialidades
        </h2>
        <p className="mt-4 text-lg text-brivvaText/80 max-w-2xl mx-auto">
          Atendimento completo com foco em qualidade, tecnologia e o seu
          conforto em cada detalhe.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="h-full flex flex-col items-center text-center hover:border-brivvaSecondary/30 group cursor-default">
                    <div className="mb-4 p-4 rounded-full bg-brivvaSecondary/10 text-brivvaSecondary group-hover:bg-brivvaPrimary group-hover:text-white transition-colors duration-300">
                      {React.cloneElement(service.icon, {
                        className: "w-8 h-8",
                        strokeWidth: 1.5,
                        stroke: "currentColor", // Allow icon to inherit color
                      })}
                    </div>
                    <CardTitle className="mb-2">{service.title}</CardTitle>
                    <CardDescription>{service.desc}</CardDescription>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Saiba mais sobre {service.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
