import React from "react";
import { motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Separator } from "./ui/separator.jsx";

const badges = [
  { label: "Profissionais Certificados" },
  { label: "Tecnologia de Ponta" },
  { label: "Atendimento Humanizado" },
];

export default function Trust() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-brivvaPrimary">
            Confiança e Excelência
          </h2>
          <p className="mt-3 text-brivvaText">
            Na BRIVVA, unimos experiência clínica com tecnologia para oferecer
            tratamentos previsíveis, confortáveis e com resultados de alto
            impacto.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {badges.map((b) => (
              <Badge key={b.label}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {b.label}
              </Badge>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardTitle>Sobre a Clínica</CardTitle>
            <Separator />
            <CardDescription>
              Atendimento acolhedor, processos seguros e foco no bem-estar do
              paciente. Nossa equipe é formada por especialistas com atuação em
              Implantes, Ortodontia, Estética e Clínica Geral.
            </CardDescription>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
