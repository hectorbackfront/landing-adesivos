import { useCallback, useMemo, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowUpRight, Check, Play, Plus } from "lucide-react";
import { AREA, INSTAGRAM, WORKS, wa } from "./data";
import { SiteContext, useSite, type SiteActions } from "./context";
import { BTN, cx } from "./classes";
import { FloatingWhats, Toast } from "./Floating";
import { useRevealAll } from "./hooks";
import { Lightbox } from "./Lightbox";
import { LOGO } from "./media";
import { WORK_IMAGES } from "./Portfolio";
import { Picture, SectionIntro, WhatsButton } from "./ui";

export const ACM_FAQ = [
  {
    q: "O que é fachada em ACM?",
    a: "ACM (Aluminum Composite Material) é um painel formado por duas chapas de alumínio com um núcleo entre elas. É leve, resistente ao sol e à chuva e mantém o acabamento liso por muito tempo — por isso é muito usado em fachadas de lojas, clínicas, indústrias e prédios comerciais.",
  },
  {
    q: "Dá para revestir a fachada que eu já tenho?",
    a: "Na maioria dos casos, sim. O revestimento em ACM é fixado sobre uma estrutura própria e cobre a parede antiga, renovando o visual sem obra pesada. Mandando fotos e as medidas pelo WhatsApp, a gente confirma o que é possível.",
  },
  {
    q: "A fachada pode ter letreiro e iluminação?",
    a: "Pode. Letras em relevo, logotipo e letreiro luminoso entram no mesmo projeto, para a marca aparecer com presença de dia e de noite.",
  },
  {
    q: "Vocês fazem a instalação?",
    a: "Sim. Cuidamos do projeto, da fabricação, da estrutura e da instalação, com acabamento revisado antes da entrega.",
  },
  {
    q: "Atendem em quais cidades?",
    a: `Atendemos ${AREA}. Confirme a sua cidade pelo WhatsApp.`,
  },
] as const;

const BENEFITS = [
  {
    title: "Visual moderno e limpo",
    text: "Painéis lisos, em várias cores e acabamentos, que deixam a fachada com cara de loja nova.",
  },
  {
    title: "Resistente ao tempo",
    text: "Material próprio para área externa, com boa resistência a sol e chuva.",
  },
  {
    title: "Renova sem obra pesada",
    text: "O revestimento cobre a parede existente, sem quebrar nem refazer a estrutura do imóvel.",
  },
  {
    title: "Marca em destaque",
    text: "Logotipo, letras em relevo e letreiro no mesmo projeto, com ou sem iluminação.",
  },
];

const STEPS = [
  {
    title: "Você manda fotos e medidas",
    text: "Pelo WhatsApp, com as fotos da fachada e as medidas aproximadas.",
  },
  {
    title: "Projeto e orçamento",
    text: "Definimos o layout, as cores e o letreiro, e você recebe o orçamento.",
  },
  {
    title: "Fabricação",
    text: "Painéis, estrutura e letras produzidos sob medida.",
  },
  {
    title: "Instalação",
    text: "Instalação completa e conferência do acabamento antes da entrega.",
  },
];

const GALLERY = [
  "piracaia",
  "doisirmaos",
  "studiokarol",
  "fernandes",
  "cabiderosa",
  "mycar",
];

const MSG = "Olá! Vim pela página de fachada em ACM e quero um orçamento.";

export function AcmPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useRevealAll();

  const actions = useMemo<SiteActions>(
    () => ({
      presetQuote: () => {},
      openWork: (id) => {
        const i = WORKS.findIndex((w) => w.id === id);
        if (i >= 0) setLightbox(i);
      },
      toast: (message) => setToastMsg(message),
    }),
    [],
  );
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const clearToast = useCallback(() => setToastMsg(null), []);

  return (
    <SiteContext.Provider value={actions}>
      <div className="min-h-screen bg-background">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="container-site flex h-16 items-center justify-between gap-4">
            <a href="/" aria-label="Buiu Adesivos — página inicial">
              <img
                src={LOGO.medium}
                srcSet={LOGO.headerSrcSet}
                sizes="77px"
                alt="Buiu Adesivos"
                width={240}
                height={125}
                className="h-10 w-auto"
              />
            </a>
            <div className="flex items-center gap-2">
              <a
                href="/"
                className="hidden items-center gap-2 px-3 label-cond text-[0.8rem] tracking-[0.16em] text-foreground/70 transition-colors hover:text-foreground sm:inline-flex"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Site completo
              </a>
              <WhatsButton msg={MSG} size="sm">
                Orçamento
              </WhatsButton>
            </div>
          </div>
        </header>

        <main id="conteudo">
          <section
            aria-labelledby="acm-title"
            className="grain clip-box relative isolate pb-20 pt-32 md:pb-28 md:pt-44"
          >
            <div className="container-site">
              <p className="fade-up eyebrow flex items-center gap-3 text-steel">
                <span aria-hidden="true" className="h-0.5 w-10 bg-primary" />
                {AREA}
              </p>
              <h1
                id="acm-title"
                className="display-title fade-up mt-6 max-w-5xl text-[clamp(2.8rem,10vw,6.5rem)] !leading-[0.98] text-foreground"
              >
                Fachada em ACM
                <br />
                <span className="text-chrome">e revestimento</span>
              </h1>
              <p className="fade-up mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
                A Buiu Adesivos oferece projeto, fabricação e instalação de
                fachadas em ACM, com letreiro e letras em relevo, para lojas,
                clínicas, indústrias e prédios comerciais em {AREA}.
              </p>
              <div className="fade-up mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsButton msg={MSG} size="lg" className="w-full sm:w-auto">
                  Orçar minha fachada
                </WhatsButton>
                <a
                  href="#trabalhos"
                  className={cx(BTN.ghost, BTN.size.lg, "w-full sm:w-auto")}
                >
                  Ver fachadas prontas
                </a>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="porque-title"
            className="border-y border-border bg-surface/50 py-24 md:py-32"
          >
            <div className="container-site">
              <SectionIntro
                num="01"
                eyebrow="Por que ACM"
                id="porque-title"
                title={
                  <>
                    Uma fachada que
                    <br />
                    valoriza o negócio
                  </>
                }
              />
              <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {BENEFITS.map((b, i) => (
                  <li
                    key={b.title}
                    data-reveal=""
                    style={{ "--d": `${i * 80}ms` } as CSSProperties}
                    className="rounded-2xl border border-border bg-background/60 p-6"
                  >
                    <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check
                        className="size-4"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {b.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="trabalhos"
            aria-labelledby="trabalhos-title"
            className="py-24 md:py-32"
          >
            <div className="container-site">
              <SectionIntro
                num="02"
                eyebrow="Trabalhos reais"
                id="trabalhos-title"
                title={
                  <>
                    Fachadas e
                    <br />
                    letreiros prontos
                  </>
                }
              />
              <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                {GALLERY.map((id, i) => (
                  <GalleryTile key={id} id={id} delay={i * 70} />
                ))}
              </div>
            </div>
          </section>

          <section
            aria-labelledby="como-title"
            className="border-y border-border bg-surface/50 py-24 md:py-32"
          >
            <div className="container-site">
              <SectionIntro
                num="03"
                eyebrow="Como funciona"
                id="como-title"
                title={
                  <>
                    Do orçamento
                    <br />à instalação
                  </>
                }
              />
              <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {STEPS.map((s, i) => (
                  <li
                    key={s.title}
                    data-reveal=""
                    style={{ "--d": `${i * 80}ms` } as CSSProperties}
                    className="border-t border-white/15 pt-5"
                  >
                    <span className="font-display text-4xl text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            aria-labelledby="acm-duvidas-title"
            className="py-24 md:py-32"
          >
            <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionIntro
                  num="04"
                  eyebrow="Dúvidas"
                  id="acm-duvidas-title"
                  title="Perguntas sobre fachada em ACM"
                />
              </div>
              <div className="border-t border-border lg:col-span-7">
                {ACM_FAQ.map((f, i) => (
                  <details
                    key={f.q}
                    name="faq"
                    open={i === 0}
                    className="faq-item group border-b border-border"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-6 text-left">
                      <span className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
                        {f.q}
                      </span>
                      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 text-foreground transition-[rotate,background-color,border-color] duration-500 group-open:rotate-[135deg] group-open:border-primary group-open:bg-primary">
                        <Plus className="size-4" aria-hidden="true" />
                      </span>
                    </summary>
                    <p className="max-w-2xl pb-7 pr-14 leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section
            id="orcamento"
            aria-labelledby="acm-cta-title"
            className="border-t border-border bg-surface/50 py-24 text-center md:py-32"
          >
            <div className="container-site" data-reveal="">
              <h2
                id="acm-cta-title"
                className="display-title mx-auto max-w-3xl text-[2.5rem] !leading-[1.1] text-foreground sm:text-6xl"
              >
                Vamos renovar a fachada do seu negócio?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:text-lg">
                Mande uma foto da fachada e as medidas pelo WhatsApp e receba o
                orçamento.
              </p>
              <WhatsButton msg={MSG} size="lg" className="mt-8">
                Chamar no WhatsApp
              </WhatsButton>
            </div>
          </section>
        </main>

        <footer className="border-t border-border">
          <div className="container-site flex flex-col gap-3 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Buiu Adesivos · Atendimento em {AREA}{" "}
              · @{INSTAGRAM}
            </p>
            <a
              href={wa("Olá! Vim pelo site da Buiu Adesivos.")}
              className="hover:text-foreground"
            >
              WhatsApp
            </a>
            <a href="/" className="hover:text-foreground">
              Voltar ao site completo
            </a>
          </div>
        </footer>

        <FloatingWhats />
        <Lightbox
          index={lightbox}
          onClose={closeLightbox}
          onIndex={setLightbox}
        />
        <Toast message={toastMsg} onDone={clearToast} />
      </div>
    </SiteContext.Provider>
  );
}

function GalleryTile({ id, delay }: { id: string; delay: number }) {
  const { openWork } = useSite();
  const work = WORKS.find((w) => w.id === id);
  const img = WORK_IMAGES[id];
  if (!work || !img) return null;

  return (
    <button
      type="button"
      onClick={() => openWork(id)}
      data-reveal=""
      style={{ "--d": `${delay}ms` } as CSSProperties}
      aria-label={`${work.title} — ${work.tag}. Ver em tela cheia`}
      className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-2 text-left"
    >
      <Picture
        img={img}
        alt={work.alt}
        sizes="(min-width: 1024px) 30vw, 46vw"
        className="absolute inset-0"
        imgClassName="size-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.06]"
        style={{ objectPosition: work.pos }}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      {work.video && (
        <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/55 py-1 pl-1 pr-2.5 label-cond text-[0.62rem] tracking-[0.16em] backdrop-blur-md">
          <span className="grid size-5 place-items-center rounded-full bg-primary">
            <Play className="ml-px size-2.5 fill-current" aria-hidden="true" />
          </span>
          Vídeo
        </span>
      )}
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3.5 sm:p-4">
        <span className="min-w-0">
          <span className="eyebrow block text-[0.6rem] tracking-[0.18em] text-[oklch(0.78_0.14_25)]">
            {work.tag}
          </span>
          <span className="display-title mt-1 block text-lg text-white sm:text-xl">
            {work.title}
          </span>
        </span>
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/30 text-white">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}
