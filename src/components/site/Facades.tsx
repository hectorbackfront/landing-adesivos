import type { CSSProperties } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { WORKS } from "./data";
import { useSite } from "./context";
import { BTN, cx } from "./classes";
import { WORK_IMAGES } from "./Portfolio";
import { Picture, SectionIntro, WhatsButton } from "./ui";

const POINTS = [
  "Fachadas em ACM, com estrutura e instalação",
  "Letreiros e letras em relevo, com ou sem iluminação",
  "Sinalização comercial e industrial para lojas, empresas e indústrias",
];

export function Facades() {
  return (
    <section
      id="fachadas"
      aria-labelledby="fachadas-title"
      className="relative py-24 md:py-32"
    >
      <div className="container-site grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionIntro
            num="05"
            eyebrow="Fachadas e sinalização"
            id="fachadas-title"
            title={
              <>
                Sua marca,
                <br />
                vista de longe
              </>
            }
          >
            <p>
              Fachadas em ACM, letreiros e sinalização comercial e industrial:
              presença de dia e de noite, com estrutura, instalação e acabamento
              premium.
            </p>
          </SectionIntro>

          <ul className="mt-8 space-y-3.5">
            {POINTS.map((p, i) => (
              <li
                key={p}
                data-reveal=""
                style={{ "--d": `${120 + i * 80}ms` } as CSSProperties}
                className="flex items-start gap-3 text-foreground/90"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check
                    className="size-3.5"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div
            data-reveal=""
            style={{ "--d": "380ms" } as CSSProperties}
            className="mt-10 flex flex-wrap gap-3"
          >
            <WhatsButton msg="Olá! Quero um orçamento de fachada em ACM e sinalização.">
              Orçar fachada e sinalização
            </WhatsButton>
            <a href="#portfolio" className={cx(BTN.ghost, BTN.size.md)}>
              Ver portfólio
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <FacadeTile
            id="doisirmaos"
            delay={0}
            className="aspect-[3/4] lg:row-span-2 lg:aspect-auto lg:h-full"
          />
          <FacadeTile id="studiokarol" delay={90} className="aspect-[3/4]" />
          <FacadeTile
            id="fernandes"
            delay={180}
            className="col-span-2 aspect-video lg:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}

function FacadeTile({
  id,
  delay,
  className,
}: {
  id: string;
  delay: number;
  className: string;
}) {
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
      className={cx(
        "group relative block w-full overflow-hidden rounded-2xl bg-surface-2 text-left",
        className,
      )}
    >
      <Picture
        img={img}
        alt={work.alt}
        sizes="(min-width: 1024px) 30vw, 46vw"
        className="absolute inset-0"
        imgClassName="size-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
        style={{ objectPosition: work.pos }}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3.5 sm:p-4">
        <span className="min-w-0">
          <span className="eyebrow block text-[0.6rem] tracking-[0.18em] text-[oklch(0.78_0.14_25)] sm:text-[0.66rem]">
            {work.tag}
          </span>
          <span className="display-title mt-1 block text-lg text-white sm:text-xl">
            {work.title}
          </span>
        </span>
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/30 text-white transition-[background-color,border-color,rotate] duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-primary transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
      />
    </button>
  );
}
