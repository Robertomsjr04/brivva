import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brivvaPrimary text-white mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-lg font-semibold">BRIVVA Odontologia</div>
            <p className="mt-2 text-sm opacity-90">
              Especializada em implantes, ortodontia e estética dental.
            </p>
            <div className="mt-4 text-sm opacity-90">
              <p>Rua 272, nº 275, Sala 8</p>
              <p>Meia Praia, Itapema - SC</p>
            </div>
          </div>
          <div>
            <div className="font-semibold">Links</div>
            <ul className="mt-2 text-sm space-y-1">
              <li>
                <a href="#inicio" className="hover:underline">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:underline">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:underline">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:underline">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Horários</div>
            <p className="mt-2 text-sm">Seg a Sex: 9h às 18h</p>
            <p className="text-sm">Sáb: 9h às 13h</p>
          </div>
        </div>
        <div className="mt-8 text-xs opacity-80">
          © {new Date().getFullYear()} BRIVVA Odontologia. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
