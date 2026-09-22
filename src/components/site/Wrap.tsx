import { useRef, useState, type CSSProperties } from "react";
import { ArrowRight, Hand } from "lucide-react";
import { BENEFITS, FINISHES, WRAP_TYPES, pad, type FinishId } from "./data";
import { useSite } from "./context";
import { PRINT_TEXTURE } from "./media";
import { BTN, cx } from "./classes";
import { SectionIntro, WhatsButton } from "./ui";

export function Wrap() {
  return (
    <section
      id="envelopamento"
      aria-labelledby="envelopamento-title"
      className="relative py-24 md:py-32"
    >
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <SectionIntro
              num="01"
              eyebrow="Nossa especialidade"
              id="envelopamento-title"
              title={
                <>
                  Envelopamento
                  <br />
                  feito para durar
                </>
              }
            >
              <p>
                Troca de cor completa, envelopamento parcial, detalhes em preto
                fosco, teto, capô e comunicação visual de frota. A preparação da
                superfície é a parte mais importante do serviço — e é onde a
                gente não abre mão do cuidado.
              </p>
            </SectionIntro>
            <div data-reveal="" style={{ "--d": "120ms" } as CSSProperties}>
              <WhatsButton
                className="mt-9"
                msg="Olá! Quero envelopar meu veículo. Pode me passar um orçamento?"
              >
                Quero envelopar meu veículo
              </WhatsButton>
            </div>
          </div>

          <ol className="border-t border-border lg:col-span-7">
            {WRAP_TYPES.map((t, i) => (
              <li
                key={t.title}
                data-reveal=""
                style={{ "--d": `${i * 70}ms` } as CSSProperties}
                className="group relative border-b border-border"
              >
                <div className="grid grid-cols-[3.25rem_1fr] items-start gap-x-4 py-6 transition-[padding] duration-500 ease-[var(--ease-out-expo)] sm:grid-cols-[4.5rem_1fr_auto] sm:items-center sm:py-7 md:group-hover:pl-4">
                  <span className="display-title text-outline text-[2.6rem] transition-colors duration-500 group-hover:text-primary group-hover:[-webkit-text-stroke-color:transparent] sm:text-5xl">
                    {pad(i + 1)}
                  </span>
                  <div>
                    <h3 className="display-title text-[1.6rem] text-foreground sm:text-3xl">
                      {t.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                      {t.text}
                    </p>
                  </div>
                  <t.icon
                    aria-hidden="true"
                    className="hidden size-7 text-foreground/25 transition-colors duration-500 group-hover:text-red-text sm:block"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-1px] left-0 h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
                />
              </li>
            ))}
          </ol>
        </div>

        <Finishes />

        <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <li
              key={b.title}
              data-reveal=""
              style={{ "--d": `${i * 80}ms` } as CSSProperties}
              className="group bg-background p-4 transition-colors duration-500 hover:bg-surface sm:p-6 lg:p-8"
            >
              <span className="grid size-11 place-items-center rounded-full border border-border text-red-text transition-[border-color,background-color,color] duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <b.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 label-cond text-[0.95rem] leading-snug tracking-[0.08em] text-foreground sm:mt-5 sm:text-[1.05rem]">
                {b.title}
              </h3>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground sm:text-sm">
                {b.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Cartela de acabamentos                                              */
/* ------------------------------------------------------------------ */
const TILT = [
  "lg:-rotate-3",
  "lg:rotate-2",
  "lg:-rotate-1",
  "lg:rotate-3",
  "lg:-rotate-2",
  "lg:rotate-1",
];

function Finishes() {
  const { presetQuote } = useSite();
  const [selected, setSelected] = useState<FinishId>("fosco");
  const current = FINISHES.find((f) => f.id === selected) ?? FINISHES[0]!;

  return (
    <div
      data-reveal=""
      className="clip-box relative mt-24 rounded-3xl border border-border bg-surface p-5 sm:p-8 lg:mt-32 lg:p-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary/15 blur-3xl"
      />
      <div className="relative flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-red-text">Cartela de acabamentos</p>
          <h3 className="display-title mt-4 text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Escolha o seu acabamento
          </h3>
        </div>
        <p className="flex max-w-xs items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
          <Hand
            className="mt-0.5 size-4 shrink-0 text-red-text"
            aria-hidden="true"
          />
          Passe o mouse (ou o dedo) nas amostras e veja como cada película reage
          à luz.
        </p>
      </div>

      <div
        role="radiogroup"
        aria-label="Acabamentos de película"
        className="no-scrollbar relative -mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-6 pt-3 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-6 lg:gap-6"
      >
        {FINISHES.map((f, i) => (
          <Swatch
            key={f.id}
            id={f.id}
            name={f.name}
            code={`BA-${pad(i + 1)}`}
            tilt={TILT[i] ?? ""}
            selected={selected === f.id}
            onSelect={() => setSelected(f.id)}
          />
        ))}
      </div>

      <div className="relative mt-4 flex flex-col gap-5 border-t border-border pt-7 md:flex-row md:items-center md:justify-between">
        <div aria-live="polite">
          <p className="display-title text-3xl text-foreground">
            {current.name}{" "}
            <span className="text-muted-foreground/70">· {current.sample}</span>
          </p>
          <p className="mt-2 text-muted-foreground">{current.text}</p>
        </div>
        <button
          type="button"
          onClick={() =>
            presetQuote({ service: "envelopamento", finish: current.id })
          }
          className={cx(BTN.primary, BTN.size.md, "shrink-0")}
        >
          Quero esse acabamento
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 motion-safe:group-hover/btn:translate-x-1"
          />
        </button>
      </div>
      <p className="relative mt-5 text-xs text-muted-foreground/80">
        Amostras ilustrativas. Cores, marcas e acabamentos disponíveis sob
        consulta no orçamento.
      </p>
    </div>
  );
}

function Swatch({
  id,
  name,
  code,
  tilt,
  selected,
  onSelect,
}: {
  id: FinishId;
  name: string;
  code: string;
  tilt: string;
  selected: boolean;
  onSelect: () => void;
}) {
  const finishRef = useRef<HTMLSpanElement>(null);

  const track = (e: React.PointerEvent) => {
    const el = finishRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${Math.max(-20, Math.min(120, x))}%`);
    el.style.setProperty("--my", `${Math.max(-20, Math.min(120, y))}%`);
  };

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      aria-label={`${name}`}
      onClick={onSelect}
      onPointerEnter={(e) => {
        finishRef.current?.classList.add("is-tracking");
        track(e);
      }}
      onPointerMove={track}
      onPointerLeave={() => {
        const el = finishRef.current;
        if (!el) return;
        el.classList.remove("is-tracking");
        el.style.removeProperty("--mx");
        el.style.removeProperty("--my");
      }}
      className={cx(
        "group relative w-[9.25rem] shrink-0 snap-start rounded-2xl bg-[oklch(0.96_0.003_90)] p-2 text-left text-[oklch(0.2_0.004_285)] shadow-[0_18px_40px_-18px_rgb(0_0_0/0.9)] transition-[translate,rotate,box-shadow] duration-500 ease-[var(--ease-out-expo)] sm:w-auto",
        selected
          ? "-translate-y-2 rotate-0 shadow-[0_28px_50px_-18px_rgb(0_0_0/0.95)] ring-2 ring-primary ring-offset-4 ring-offset-surface lg:rotate-0"
          : cx("hover:-translate-y-2 lg:hover:rotate-0", tilt),
      )}
    >
      <span
        ref={finishRef}
        className={cx("finish block aspect-[4/5] rounded-xl", `finish-${id}`)}
        style={
          id === "impresso"
            ? { backgroundImage: `url(${PRINT_TEXTURE})` }
            : undefined
        }
      >
        {/* furo da cartela */}
        <span className="absolute left-2.5 top-2.5 z-10 size-3.5 rounded-full bg-[oklch(0.96_0.003_90)] shadow-[inset_0_1px_3px_rgb(0_0_0/0.55)]" />
      </span>
      <span className="flex items-center justify-between gap-2 px-1 pb-0.5 pt-2.5">
        <span className="label-cond text-[0.85rem] tracking-[0.1em]">
          {name}
        </span>
        <span className="font-cond text-[0.7rem] font-semibold text-[oklch(0.55_0.004_285)]">
          {code}
        </span>
      </span>
    </button>
  );
}
