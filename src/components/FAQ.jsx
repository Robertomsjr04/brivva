import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion.jsx";

const faqs = [
  {
    q: "Como funciona a avaliação?",
    a: "A avaliação inclui anamnese, exame clínico e, quando necessário, exames complementares para um plano personalizado.",
  },
  {
    q: "Aceitam planos odontológicos?",
    a: "Entre em contato para verificar sua cobertura. Oferecemos opções flexíveis de pagamento.",
  },
  {
    q: "Quanto tempo dura um tratamento ortodôntico?",
    a: "A duração varia conforme cada caso. Em média, de 12 a 24 meses com acompanhamento regular.",
  },
  {
    q: "Como agendar minha consulta?",
    a: "Use o botão de agendamento ou fale pelo WhatsApp. Retornaremos rapidamente para confirmar.",
  },
];

export default function FAQ() {
  return (
    <div id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brivvaPrimary">
          Perguntas Frequentes
        </h2>
        <p className="mt-2 text-brivvaText">
          Tire suas dúvidas sobre avaliação, tratamentos e agendamentos.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <Accordion type="single" collapsible>
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
