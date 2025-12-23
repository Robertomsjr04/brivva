import React from "react";
import logo from "../../[CBrivva]/IMG_5185.png";
import { Button } from "../components/ui/button.jsx";
import { Sheet, SheetTrigger, SheetContent } from "../components/ui/sheet.jsx";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo BRIVVA"
            className="w-9 h-9 object-contain"
          />
          <span className="sr-only">BRIVVA Odontologia Especializada</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#equipe">Equipe</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button as="a" href="#contato" variant="primary">
            Agendar Consulta
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Button variant="ghost" aria-label="Abrir menu">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <nav className="mt-4 flex flex-col gap-4 text-sm">
            <a href="#inicio" onClick={() => setOpen(false)}>
              Início
            </a>
            <a href="#servicos" onClick={() => setOpen(false)}>
              Serviços
            </a>
            <a href="#sobre" onClick={() => setOpen(false)}>
              Sobre
            </a>
            <a href="#equipe" onClick={() => setOpen(false)}>
              Equipe
            </a>
            <a href="#contato" onClick={() => setOpen(false)}>
              Contato
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
