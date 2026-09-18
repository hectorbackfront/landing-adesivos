import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Car,
  Building2,
  Wallpaper,
  Sun,
  Flag,
  Sticker,
  Type,
  PanelTop,
  MessageCircle,
  Instagram,
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import logo from "@/assets/buiu-mark.png.asset.json";
import heroWrap from "@/assets/hero-wrap.jpg";
import portEnvelopamento from "@/assets/port-envelopamento.jpg";
import portFrota from "@/assets/port-frota.jpg";
import portMoto from "@/assets/port-moto.jpg";
import portFachada from "@/assets/port-fachada.jpg";
import portPapel from "@/assets/port-papel.jpg";
import portInsufilm from "@/assets/port-insufilm.jpg";

const PHONE_DISPLAY = "(11) 93362-0802";
const WHATS = "5511933620802";
const INSTAGRAM = "buiuadesivos";

const wa = (msg: string) =>
  `https://wa.me/${WHATS}?text=${encodeURIComponent(msg)}`;

const NAV = [
  { label: "Envelopamento", href: "#envelopamento" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

const SERVICES = [
  {
    icon: Car,
    title: "Envelopamento",
    text: "Troca de cor, detalhes e envelopamento comercial de carros, motos e frotas.",
  },
  {
    icon: Wallpaper,
    title: "Papel de parede",
    text: "Impressão personalizada para salas comerciais, lojas e ambientes residenciais.",
  },
  {
    icon: PanelTop,
    title: "Placas e toldos",
    text: "Comunicação visual externa com acabamento resistente ao tempo.",
  },
  {
    icon: Flag,
    title: "Faixas",
    text: "Faixas e banners para eventos, promoções e sinalização temporária.",
  },
  {
    icon: Sticker,
    title: "Adesivos",
    text: "Adesivos recortados, vitrines, sinalização interna e identidade de frota.",
  },
  {
    icon: Building2,
    title: "Fachadas em ACM",
    text: "Fachadas modernas em ACM com estrutura, instalação e acabamento premium.",
  },
  {
    icon: Type,
    title: "Letras em relevo",
    text: "Letras caixa e relevo que dão volume e presença à sua marca.",
  },
  {
    icon: Sun,
    title: "Insulfilm",
    text: "Aplicação residencial e comercial para conforto térmico e privacidade.",
  },
];

const PORTFOLIO = [
  { img: portEnvelopamento, title: "Troca de cor", tag: "Envelopamento", w: 1008, h: 1200 },
  { img: portFrota, title: "Frota comercial", tag: "Envelopamento", w: 1008, h: 1200 },
  { img: portMoto, title: "Moto esportiva", tag: "Envelopamento", w: 1008, h: 1200 },
  { img: portFachada, title: "Fachada em ACM", tag: "Comunicação visual", w: 1008, h: 1200 },
  { img: portPapel, title: "Papel de parede", tag: "Ambientes", w: 1008, h: 1200 },
  { img: portInsufilm, title: "Insulfilm", tag: "Películas", w: 1008, h: 1200 },
];

const STEPS = [
  { n: "01", t: "Conversa no WhatsApp", d: "Você conta o que precisa e envia fotos do veículo ou do espaço." },
  { n: "02", t: "Orçamento e material", d: "Definimos acabamento, cor e material adequado para o seu projeto." },
  { n: "03", t: "Aplicação", d: "Preparação da superfície e aplicação feita por equipe especializada." },
  { n: "04", t: "Entrega revisada", d: "Conferência final de acabamento antes de você retirar." },
];

const FAQ = [
  {
    q: "Quanto tempo leva um envelopamento?",
    a: "Depende do tamanho da peça e do tipo de acabamento. Envelopamentos parciais costumam ficar prontos em menos tempo que a troca de cor completa — passamos o prazo exato junto do orçamento.",
  },
  {
    q: "O envelopamento danifica a pintura?",
    a: "Não. A película é aplicada sobre a pintura original e, quando removida corretamente, preserva o acabamento de fábrica.",
  },
  {
    q: "Vocês atendem frotas de empresas?",
    a: "Sim. Fazemos identidade visual de frotas, com padronização de todos os veículos e planejamento de aplicação.",
  },
  {
    q: "Como faço um orçamento?",
    a: `Fale com a gente pelo WhatsApp ${PHONE_DISPLAY}. Envie fotos e a medida aproximada para agilizar.`,
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Buiu Adesivos | Envelopamento e Comunicação Visual" },
      {
        name: "description",
        content:
          "Buiu Adesivos: especializada em envelopamento de veículos, frotas, fachadas em ACM, papel de parede, adesivos, letras em relevo e insulfilm. Orçamento pelo WhatsApp.",
      },
      { property: "og:title", content: "Buiu Adesivos | Envelopamento e Comunicação Visual" },
      {
        property: "og:description",
        content:
          "Envelopamento de veículos e frotas, fachadas em ACM, adesivos e insulfilm com acabamento premium. Orçamento rápido pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Buiu Adesivos",
          description:
            "Especializada em envelopamento de veículos e comunicação visual.",
          telephone: `+55${WHATS.slice(2)}`,
          areaServed: "São Paulo",
          sameAs: [`https://instagram.com/${INSTAGRAM}`],
        }),
      },
    ],
  }),
});

function WhatsButton({
  msg,
  children,
  className = "",
}: {
  msg: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={wa(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex shrink-0 items-center">
            <img
              src={logo.url}
              alt="Buiu Adesivos - especializado em envelopamento"
              className="h-10 w-auto md:h-12"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={wa("Olá! Vim pelo site e gostaria de um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 bg-primary px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground sm:inline-flex"
            >
              <MessageCircle className="size-4" />
              Orçamento
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
              className="inline-flex size-10 items-center justify-center border border-border text-foreground lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-5 pb-5 pt-2 lg:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 text-sm font-semibold uppercase tracking-widest text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate flex min-h-[92vh] items-end overflow-hidden pt-20">
        <img
          src={heroWrap}
          alt="Aplicação de película em carro esportivo preto"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/30" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-16 md:pb-24">
          <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-primary bg-background/60 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-steel">
            Especializado em envelopamento
          </p>
          <h1 className="display-title max-w-4xl text-5xl text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Seu veículo e sua marca
            <span className="text-primary"> com acabamento de outro nível</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Envelopamento de carros, motos e frotas, fachadas em ACM, adesivos,
            letras em relevo e insulfilm. Aplicação feita por equipe
            especializada, com material selecionado para cada projeto.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsButton msg="Olá! Quero um orçamento de envelopamento.">
              <MessageCircle className="size-5" />
              Orçamento no WhatsApp
            </WhatsButton>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
            >
              Ver portfólio
              <ArrowRight className="size-4" />
            </a>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              ["Veículos", "Carros, motos e frotas"],
              ["Empresas", "Fachadas e identidade"],
              ["Ambientes", "Papel de parede e películas"],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="display-title text-lg text-primary md:text-xl">{t}</dt>
                <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Envelopamento */}
      <section id="envelopamento" className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
              Nossa especialidade
            </span>
            <h2 className="display-title mt-4 text-4xl text-foreground md:text-5xl">
              Envelopamento feito para durar
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              Trabalhamos com troca de cor completa, envelopamento parcial,
              detalhes em preto fosco, teto, capô e comunicação visual de frota.
              A preparação da superfície é a parte mais importante do serviço — e
              é onde não abrimos mão do cuidado.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                [ShieldCheck, "Proteção da pintura original", "A película preserva o acabamento de fábrica do veículo."],
                [Sparkles, "Acabamento sem emendas visíveis", "Recortes planejados e finalização revisada peça por peça."],
                [Truck, "Frotas padronizadas", "Aplicação em série com a mesma identidade em todos os veículos."],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof ShieldCheck;
                return (
                  <li key={t as string} className="flex gap-4">
                    <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center bg-primary/15 text-primary">
                      <I className="size-5" />
                    </span>
                    <div>
                      <p className="font-bold uppercase tracking-wide text-foreground">{t as string}</p>
                      <p className="text-sm text-muted-foreground">{d as string}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <WhatsButton
              className="mt-9"
              msg="Olá! Quero envelopar meu veículo. Pode me passar o orçamento?"
            >
              <MessageCircle className="size-5" />
              Quero envelopar meu veículo
            </WhatsButton>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={portEnvelopamento}
              alt="Película sendo aplicada no capô de um carro"
              loading="lazy"
              width={1008}
              height={1200}
              className="col-span-2 h-64 w-full object-cover md:h-80"
            />
            <img
              src={portMoto}
              alt="Moto esportiva envelopada em preto e vermelho"
              loading="lazy"
              width={1008}
              height={1200}
              className="h-52 w-full object-cover md:h-64"
            />
            <img
              src={portFrota}
              alt="Van branca preparada para envelopamento de frota"
              loading="lazy"
              width={1008}
              height={1200}
              className="h-52 w-full object-cover md:h-64"
            />
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
                Portfólio
              </span>
              <h2 className="display-title mt-4 text-4xl text-foreground md:text-5xl">
                O que fazemos na prática
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Imagens de referência dos serviços que aplicamos. Chame no WhatsApp
              para ver fotos de trabalhos recentes.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO.map((p) => (
              <figure key={p.title} className="group relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={p.w}
                  height={p.h}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 border-l-4 border-primary p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                    {p.tag}
                  </p>
                  <p className="display-title text-xl text-foreground">{p.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            Serviços
          </span>
          <h2 className="display-title mt-4 max-w-2xl text-4xl text-foreground md:text-5xl">
            Comunicação visual completa
          </h2>

          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-surface p-7 transition-colors hover:bg-accent">
                <s.icon className="size-7 text-primary" />
                <h3 className="display-title mt-5 text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            Como funciona
          </span>
          <h2 className="display-title mt-4 text-4xl text-foreground md:text-5xl">
            Do primeiro contato à entrega
          </h2>

          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="border-t-2 border-primary pt-5">
                <p className="display-title text-4xl text-primary">{s.n}</p>
                <p className="mt-3 font-bold uppercase tracking-wide text-foreground">{s.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="display-title text-4xl text-foreground md:text-5xl">Dúvidas frequentes</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {FAQ.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setFaq(faq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-bold uppercase tracking-wide text-foreground">{f.q}</span>
                  <span className="text-primary">{faq === i ? "−" : "+"}</span>
                </button>
                {faq === i && (
                  <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="relative isolate overflow-hidden py-20 md:py-28">
        <img
          src={heroWrap}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-background/80" />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <h2 className="display-title text-4xl text-foreground md:text-6xl">
              Vamos falar sobre o seu projeto
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground md:text-lg">
              Atendimento direto pelo WhatsApp. Envie fotos e as medidas
              aproximadas para receber o orçamento mais rápido.
            </p>
            <WhatsButton className="mt-8" msg="Olá! Vim pelo site da Buiu Adesivos e quero um orçamento.">
              <MessageCircle className="size-5" />
              Falar no WhatsApp
            </WhatsButton>
          </div>

          <ul className="space-y-4 self-start">
            <li>
              <a
                href={`tel:+${WHATS}`}
                className="flex items-center gap-4 border border-border bg-surface p-5 transition-colors hover:bg-accent"
              >
                <Phone className="size-5 text-primary" />
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    Telefone / WhatsApp
                  </span>
                  <span className="display-title text-xl text-foreground">{PHONE_DISPLAY}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${INSTAGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-border bg-surface p-5 transition-colors hover:bg-accent"
              >
                <Instagram className="size-5 text-primary" />
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    Instagram
                  </span>
                  <span className="display-title text-xl text-foreground">@{INSTAGRAM}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4 border border-border bg-surface p-5">
              <MapPin className="size-5 text-primary" />
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  Atendimento
                </span>
                <span className="text-foreground">São Paulo e região</span>
              </span>
            </li>
            <li className="flex items-center gap-4 border border-border bg-surface p-5">
              <Clock className="size-5 text-primary" />
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  Horário
                </span>
                <span className="text-foreground">
                  Confirme o horário de atendimento pelo WhatsApp
                </span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:text-left">
          <img src={logo.url} alt="Buiu Adesivos" className="h-12 w-auto" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Buiu Adesivos — Especializado em envelopamento.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={wa("Olá! Quero um orçamento da Buiu Adesivos.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whats px-5 py-4 font-bold uppercase tracking-widest text-background shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
        <span className="hidden text-xs sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
