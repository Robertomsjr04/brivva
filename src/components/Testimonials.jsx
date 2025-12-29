import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mariana",
    text: "Equipe super atenciosa e resultado impecável! Recomendo a BRIVVA.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos",
    text: "Ortodontia com acompanhamento excelente. Muito satisfeito com o atendimento.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Luciana",
    text: "Clareamento deixou meu sorriso incrível. Profissionais de confiança!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ricardo",
    text: "Fiz meus implantes aqui e o processo foi muito tranquilo. Recomendo!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Fernanda",
    text: "Atendimento maravilhoso desde a recepção até o consultório.",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
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
                <div className="card">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={`Foto de ${t.name}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-brivvaPrimary">
                        {t.name}
                      </div>
                      <Stars />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-brivvaText">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
