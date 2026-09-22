import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Copy,
  Instagram,
  MapPin,
  Phone,
} from "lucide-react";
import { AREA, INSTAGRAM, INSTAGRAM_URL, PHONE_DISPLAY, WHATS } from "./data";
import { useSite } from "./context";
import { HERO_DESKTOP } from "./media";
import { BTN, cx } from "./classes";
import { Picture, WhatsButton } from "./ui";

export function Contact() {
  const { toast } = useSite();

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_DISPLAY);
      toast("Número copiado!");
    } catch {
      toast(PHONE_DISPLAY);
    }
  };

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="grain clip-box relative isolate py-24 md:py-36"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Picture
          img={HERO_DESKTOP}
          alt=""
          sizes="100vw"
          className="absolute inset-0"
          imgClassName="size-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>
      <div
        aria-hidden="true"
        className="absolute -right-40 top-0 -z-10 hidden h-full w-[28rem] -skew-x-[18deg] bg-gradient-to-b from-primary/25 to-primary/5 lg:block"
      />

      <div className="container-site relative z-10 grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7" data-reveal="">
          <p className="eyebrow flex items-center gap-3 text-red-text">
            <span className="font-display text-base tracking-normal text-foreground">
              08
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-primary" />
            Contato
          </p>
          <h2
            id="contato-title"
            className="display-title mt-6 text-[3.1rem] text-foreground sm:text-7xl lg:text-[5.5rem]"
          >
            Vamos falar sobre o{" "}
            <span className="text-primary">seu projeto</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Atendimento direto pelo WhatsApp. Envie fotos e as medidas
            aproximadas para receber o orçamento mais rápido.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WhatsButton
              size="lg"
              msg="Olá! Vim pelo site da Buiu Adesivos e quero um orçamento."
            >
              Falar no WhatsApp
            </WhatsButton>
            <a href="#orcamento" className={cx(BTN.ghost, BTN.size.lg)}>
              Montar meu orçamento
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <ul className="space-y-3 lg:col-span-5">
          <ContactCard
            icon={<Phone className="size-5" aria-hidden="true" />}
            label="Telefone / WhatsApp"
            value={PHONE_DISPLAY}
            href={`tel:+${WHATS}`}
            action={
              <button
                type="button"
                onClick={copyPhone}
                aria-label="Copiar número"
                className="relative z-10 grid size-10 place-items-center rounded-full border border-white/15 text-foreground/80 transition-colors hover:border-white/40 hover:text-foreground"
              >
                <Copy className="size-4" aria-hidden="true" />
              </button>
            }
          />
          <ContactCard
            icon={<Instagram className="size-5" aria-hidden="true" />}
            label="Instagram"
            value={`@${INSTAGRAM}`}
            href={INSTAGRAM_URL}
            external
          />
          <ContactCard
            icon={<MapPin className="size-5" aria-hidden="true" />}
            label="Atendimento"
            value={AREA}
          />
          <ContactCard
            icon={<Clock className="size-5" aria-hidden="true" />}
            label="Horário"
            value="Confirme pelo WhatsApp"
          />
        </ul>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external = false,
  action,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string | undefined;
  external?: boolean | undefined;
  action?: ReactNode;
}) {
  const body = (
    <>
      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-red-text transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="label-cond block text-[0.7rem] tracking-[0.22em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-lg font-semibold text-foreground">
          {value}
        </span>
      </span>
    </>
  );

  return (
    <li
      data-reveal=""
      className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/80 p-4 backdrop-blur-md transition-colors duration-300 hover:border-white/25 sm:p-5"
    >
      {href ? (
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="flex min-w-0 flex-1 items-center gap-4 after:absolute after:inset-0 after:rounded-2xl"
        >
          {body}
        </a>
      ) : (
        <span className="flex min-w-0 flex-1 items-center gap-4">{body}</span>
      )}
      {action}
      {href && !action && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      )}
    </li>
  );
}
