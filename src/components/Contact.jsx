import React from "react";
import clinicPhoto from "../../[CBrivva]/IMG_5186.png";
import { Input } from "./ui/input.jsx";
import { Textarea } from "./ui/textarea.jsx";
import { Button } from "./ui/button.jsx";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog.jsx";

export default function Contact() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 className="text-3xl font-bold text-brivvaPrimary">
          Entre em Contato
        </h2>
        <p className="mt-2 text-brivvaText">
          Agende sua avaliação ou tire suas dúvidas.
        </p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-brivvaText">
              Nome
            </label>
            <Input type="text" className="mt-1" placeholder="Seu nome" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brivvaText">
              Telefone/WhatsApp
            </label>
            <Input type="tel" className="mt-1" placeholder="(xx) xxxxx-xxxx" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brivvaText">
              Mensagem
            </label>
            <Textarea
              className="mt-1"
              placeholder="Conte-nos como podemos ajudar"
            />
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <Button type="button">Agendar Agora</Button>
            </DialogTrigger>
            <DialogContent>
              <div className="text-center">
                <div className="text-lg font-semibold text-brivvaPrimary">
                  Solicitação enviada
                </div>
                <p className="mt-2 text-sm text-brivvaText">
                  Em breve entraremos em contato para confirmar sua avaliação.
                </p>
                <div className="mt-4">
                  <Button variant="secondary" onClick={() => setOpen(false)}>
                    Fechar
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </form>
      </div>
      <div className="space-y-4">
        <img
          src={clinicPhoto}
          alt="Consultório BRIVVA"
          className="w-full rounded-lg shadow-sm object-cover"
        />
        <div className="card">
          <div className="text-sm text-brivvaText">
            <div>
              <strong>Endereço:</strong> Rua 272, nº 275, Sala 8 - Segunda Avenida, Itapema - SC
            </div>
            <div>
              <strong>Telefone:</strong> (xx) xxxxx-xxxx
            </div>
            <div>
              <strong>WhatsApp:</strong> (xx) xxxxx-xxxx
            </div>
            <div className="mt-3">
              <Button
                as="a"
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="inline-block"
              >
                Chamar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
