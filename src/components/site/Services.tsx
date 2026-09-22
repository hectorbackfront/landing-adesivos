import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICES, pad } from "./data";
import { useSite } from "./context";
import { HERO_DESKTOP } from "./media";
import { BTN, cx } from "./classes";
import { Picture, SectionIntro, WhatsButton } from "./ui";

export function Services() {
  const { presetQuote } = useSite();
  const [featured, ...others] = SERVICES;
  if (!featured) return null;

  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="relative border-y border-border bg-surface/50 py-24 md:py-32"
    >
      <div className="container-site">
        <SectionIntro
          num="04"
          eyebrow="Serviços"
          id="servicos-title"
          title="Comunicação visual completa"
        >
          <p>
            Do carro à fachada: tudo o que a sua marca precisa para ser vista,
            com o mesmo cuidado no acabamento.
          </p>
        </SectionIntro>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {/* Destaque: envelopamento */}
          <li
            data-reveal=""
            className="group relative isolate min-h-[24rem] overflow-hidden rounded-2xl border border-border sm:col-span-2 lg:row-span-2 lg:min-h-0"
          >
            <Picture
              img={HERO_DESKTOP}
              alt=""
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="absolute inset-0 -z-10"
              imgClassName="size-full object-cover object-[35%_center] transition-transform duration-[1.6s] ease-[var(--ease-out-expo)] group-hover:scale-105"
            />
            <span className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 to-black/10" />
            <div className="flex h-full flex-col justify-end p-6 sm:p-8 lg:p-10">
              <span className="eyebrow inline-flex w-fit items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[0.7rem] text-primary-foreground">
                Especialidade da casa
              </span>
              <h3 className="display-title mt-5 text-5xl text-white lg:text-6xl">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-md text-white/80">{featured.text}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => presetQuote({ service: featured.id })}
                  className={cx(BTN.primary, BTN.size.md)}
                >
                  Orçar envelopamento
                  <ArrowRight aria-hidden="true" className="size-4" />
                </button>
                <a href="#envelopamento" className={cx(BTN.ghost, BTN.size.md)}>
                  Ver detalhes
                </a>
              </div>
            </div>
          </li>

          {others.map((s, i) => (
            <li
              key={s.id}
              data-reveal=""
              style={{ "--d": `${(i % 4) * 70}ms` } as CSSProperties}
              className="group relative isolate overflow-hidden rounded-2xl border border-border bg-background transition-colors duration-500 hover:border-primary"
            >
              {/* película vermelha "aplicada" no hover */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 origin-left scale-x-0 bg-primary transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100 motion-reduce:transition-none"
              />
              <div className="flex h-full items-start gap-4 p-5 sm:flex-col sm:gap-0 sm:p-6 lg:p-7">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/12 text-red-text transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                  <s.icon className="size-6" aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className="text-outline absolute right-5 top-4 hidden font-display text-4xl transition-colors duration-500 group-hover:[-webkit-text-stroke-color:rgb(255_255_255/0.45)] sm:block"
                >
                  {pad(i + 2)}
                </span>
                <div className="min-w-0 flex-1 sm:mt-8 sm:flex sm:w-full sm:flex-1 sm:flex-col">
                  <h3 className="display-title text-2xl text-foreground sm:text-[1.7rem]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/85">
                    {s.text}
                  </p>
                  <button
                    type="button"
                    onClick={() => presetQuote({ service: s.id })}
                    className="mt-4 inline-flex items-center gap-2 label-cond text-[0.8rem] text-red-text transition-colors duration-500 after:absolute after:inset-0 group-hover:text-white sm:mt-auto sm:pt-6"
                  >
                    Orçar {s.title.toLowerCase()}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </li>
          ))}

          <li
            data-reveal=""
            style={{ "--d": "210ms" } as CSSProperties}
            className="stripes flex flex-col justify-between gap-6 rounded-2xl border border-dashed border-white/20 p-6 lg:p-7"
          >
            <div>
              <p className="display-title text-[1.7rem] text-foreground">
                Não achou o que procura?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Conta pra gente a sua ideia — a gente encontra a melhor solução.
              </p>
            </div>
            <WhatsButton
              msg="Olá! Tenho um projeto de comunicação visual e queria conversar."
              size="sm"
              variant="ghost"
              className="w-fit"
            >
              Falar no WhatsApp
            </WhatsButton>
          </li>
        </ul>
      </div>
    </section>
  );
}
