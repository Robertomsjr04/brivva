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
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-sm mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.484279766938!2d-48.61868462447998!3d-27.136894476513816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b1e0c2f0f8a9%3A0x6b8f8f8f8f8f8f8f!2sR.%20272%2C%20275%20-%20Meia%20Praia%2C%20Itapema%20-%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1709666666666!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica Brivva"
            ></iframe>
          </div>
          <div className="text-sm text-brivvaText">
            <div>
              <strong>Endereço:</strong> Rua 272, nº 275, Sala 8 - Meia Praia,
              Itapema - SC
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
