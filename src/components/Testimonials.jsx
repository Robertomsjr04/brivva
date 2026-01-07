import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mariana",
    text: "Equipe super atenciosa e resultado impecável! Recomendo a BRIVVA.",
  },
  {
    name: "Carlos",
    text: "Ortodontia com acompanhamento excelente. Muito satisfeito com o atendimento.",
  },
  {
    name: "Luciana",
    text: "Clareamento deixou meu sorriso incrível. Profissionais de confiança!",
  },
  {
    name: "Ricardo",
    text: "Fiz meus implantes aqui e o processo foi muito tranquilo. Recomendo!",
  },
  {
    name: "Fernanda",
    text: "Atendimento maravilhoso desde a recepção até o consultório.",
  },
];

function Stars() {
  return (
    <div className="flex text-brivvaPrimary">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#155184"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-0.5"
        >
          <path d="M12 3l3 6 6 1-4.5 4.5L17 21l-5-3-5 3 1.5-6.5L4 10l6-1 2-6Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  return (
    <div>
      <h2 className="text-3xl font-bold text-brivvaPrimary">Depoimentos</h2>
      <p className="mt-2 text-brivvaText">
        Pacientes satisfeitos com seus novos sorrisos.
      </p>
      <div className="mt-8">
        <div className="flex justify-end gap-2 mb-4">
          <Button
            variant="secondary"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="secondary"
            onClick={() => emblaApi && emblaApi.scrollNext()}
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(33.333%-16px)]"
              >
                <div className="card h-full p-6 flex flex-col">
                  <div className="mb-4">
                    <div className="font-bold text-lg text-brivvaPrimary mb-1">
                      {t.name}
                    </div>
                    <Stars />
                  </div>
                  <p className="text-brivvaText leading-relaxed">"{t.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
