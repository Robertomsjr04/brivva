import React from "react";
import { motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import d1 from "../../[CBrivva]/PHOTO-2025-12-02-18-13-50.jpg";
import d2 from "../../[CBrivva]/PHOTO-2025-12-02-18-13-51.jpg";
import d3 from "../../[CBrivva]/PHOTO-2025-12-02-18-13-50 2.jpg";
import dCassio from "../../[CBrivva]/PHOTO-2025-12-02-18-14-24.jpg";

const doctors = [
  {
    name: "Dr. Wagner",
    role: "Implantes / Prótese / Lente de Porcelana",
    photo: d1,
  },
  { name: "Dra. Vitória", role: "Clínico Geral / Estética", photo: d2 },
  { name: "Dra. Silvia", role: "Ortodontia (Aparelho)", photo: d3 },
  {
    name: "Dr. Cassio",
    role: "Responsável Técnico / Endodontista e Radiologista",
    photo: dCassio,
  },
];

export default function Team() {
  return (
    <div id="equipe" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brivvaPrimary">Nossa Equipe</h2>
        <p className="mt-2 text-brivvaText">
          Conheça os especialistas que cuidam do seu sorriso.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col items-center text-center py-8 hover:border-brivvaPrimary/30">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brivvaPrimary to-brivvaSecondary blur-md opacity-20 transform scale-110"></div>
                  <img
                    src={d.photo}
                    alt={`Foto de ${d.name}`}
                    width="128"
                    height="128"
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-xl mb-1">{d.name}</CardTitle>
                <CardDescription className="text-brivvaSecondary font-medium">
                  {d.role}
                </CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Button as="a" href="#contato" variant="primary">
            Agendar com a Equipe
          </Button>
        </div>
      </div>
    </div>
  );
}
