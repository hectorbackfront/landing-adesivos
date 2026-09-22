import { ArrowUp, Instagram, Phone } from "lucide-react";
import {
  AREA,
  INSTAGRAM,
  INSTAGRAM_URL,
  NAV,
  PHONE_DISPLAY,
  SERVICES,
  WHATS,
  wa,
} from "./data";
import { LOGO } from "./media";
import { WhatsIcon } from "./ui";

export function Footer() {
  return (
    <footer className="clip-box relative border-t border-border bg-surface/60">
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-5">
          <img
            src={LOGO.large}
            alt="Buiu Adesivos — especializado em envelopamento"
            width={469}
            height={245}
            loading="lazy"
            decoding="async"
            className="h-20 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Envelopamento de veículos e comunicação visual com acabamento
            profissional. Atendimento em {AREA}.
          </p>
          <div className="mt-6 flex gap-2">
            <a
              href={wa("Olá! Vim pelo site da Buiu Adesivos.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid size-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-whats hover:bg-whats"
            >
              <WhatsIcon className="size-5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-primary hover:bg-primary"
            >
              <Instagram className="size-5" aria-hidden="true" />
            </a>
            <a
              href={`tel:+${WHATS}`}
              aria-label={`Ligar para ${PHONE_DISPLAY}`}
              className="grid size-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <Phone className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Rodapé" className="lg:col-span-3">
          <p className="label-cond text-xs tracking-[0.22em] text-muted-foreground">
            Navegação
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="text-foreground/85 transition-colors hover:text-red-text"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#orcamento"
                className="text-foreground/85 transition-colors hover:text-red-text"
              >
                Montar orçamento
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="label-cond text-xs tracking-[0.22em] text-muted-foreground">
            Serviços
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-foreground/85">
            {SERVICES.map((s) => (
              <li key={s.id}>{s.title}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-site flex flex-col gap-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Buiu Adesivos · Especializado em
            envelopamento · @{INSTAGRAM}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 label-cond tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
          >
            Voltar ao topo
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="text-outline pointer-events-none select-none whitespace-nowrap px-4 pb-2 text-center font-display text-[17vw] uppercase leading-[0.8] opacity-60"
      >
        Buiu Adesivos
      </p>
    </footer>
  );
}
