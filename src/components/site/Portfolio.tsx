import { useRef, useState, type CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Instagram, Play } from "lucide-react";
import { INSTAGRAM, INSTAGRAM_URL, WORKS, pad, wa, type Work } from "./data";
import { useSite } from "./context";
import { imageSet, type ImageSet } from "./media";
import { cx } from "./classes";
import { Picture, SectionIntro } from "./ui";

export const WORK_IMAGES: Record<string, ImageSet> = Object.fromEntries(
  WORKS.map((w) => [
    w.id,
    imageSet(w.video ? "video" : "works", w.image, w.w, w.h),
  ]),
);

export function Portfolio() {
  const { openWork } = useSite();
  const scroller = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);
  const total = WORKS.length + 1;

  // contador do carrossel (só no celular)
  const onScroll = () => {
    const el = scroller.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    const step = first.offsetWidth + 12;
    setSlide(Math.min(total - 1, Math.round(el.scrollLeft / step)));
  };

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="relative border-y border-border bg-surface/50 py-24 md:py-32"
    >
      <div className="container-site">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            num="02"
            eyebrow="Portfólio"
            id="portfolio-title"
            title={
              <>
                Trabalhos reais,
                <br />
                feitos pela Buiu
              </>
            }
          />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-border py-2 pl-2 pr-5 transition-colors hover:border-foreground/40 md:self-auto"
          >
            <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white">
              <Instagram className="size-5" aria-hidden="true" />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-xs text-muted-foreground">
                Mais trabalhos no Instagram
              </span>
              <span className="label-cond text-sm tracking-[0.1em]">
                @{INSTAGRAM}
              </span>
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div
          ref={scroller}
          onScroll={onScroll}
          className="work-grid no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:auto-rows-[13rem] sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 md:auto-rows-[15rem] lg:auto-rows-[15.5rem] lg:grid-cols-4"
        >
          {WORKS.map((w, i) => (
            <WorkTile
              key={w.id}
              work={w}
              index={i}
              onOpen={() => openWork(w.id)}
            />
          ))}

          <a
            href={wa(
              "Olá! Vi o portfólio no site e quero fazer um projeto com a Buiu.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal=""
            className="stripes group relative flex aspect-[4/5] w-[78vw] max-w-[21rem] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground sm:aspect-auto sm:w-auto sm:max-w-none lg:col-span-2 lg:p-8"
          >
            <span className="eyebrow text-white/80">Próximo projeto</span>
            <span className="display-title text-[2.6rem] lg:text-5xl">
              O seu pode ser
              <br />o próximo
            </span>
            <span className="inline-flex items-center gap-2 label-cond text-sm">
              Pedir orçamento
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </a>
        </div>

        {/* contador do carrossel no celular */}
        <div
          className="mt-6 flex items-center gap-4 sm:hidden"
          aria-hidden="true"
        >
          <span className="label-cond w-14 text-sm tabular-nums">
            {pad(slide + 1)}
            <span className="text-muted-foreground"> / {pad(total)}</span>
          </span>
          <span className="h-0.5 flex-1 overflow-hidden rounded-full bg-border">
            <span
              className="block h-full bg-primary transition-[width] duration-300"
              style={{ width: `${((slide + 1) / total) * 100}%` }}
            />
          </span>
          <span className="text-xs text-muted-foreground">Arraste</span>
        </div>
      </div>
    </section>
  );
}

function WorkTile({
  work,
  index,
  onOpen,
}: {
  work: Work;
  index: number;
  onOpen: () => void;
}) {
  const img = WORK_IMAGES[work.id];
  if (!img) return null;
  return (
    <button
      type="button"
      onClick={onOpen}
      data-reveal=""
      style={{ "--d": `${(index % 4) * 70}ms` } as CSSProperties}
      aria-label={`${work.title} — ${work.tag}. Ver em tela cheia`}
      className={cx(
        "group relative aspect-[4/5] w-[78vw] max-w-[21rem] shrink-0 snap-start overflow-hidden rounded-2xl bg-surface-2 text-left sm:aspect-auto sm:w-auto sm:max-w-none",
        work.span,
      )}
    >
      <Picture
        img={img}
        alt={work.alt}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 80vw"
        className="absolute inset-0"
        imgClassName="size-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
        style={{ objectPosition: work.pos }}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
      {/* reflexo que atravessa no hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-full w-2/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:translate-x-[260%]"
      />

      {work.video && (
        <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/55 py-1.5 pl-1.5 pr-3 label-cond text-[0.68rem] tracking-[0.16em] backdrop-blur-md">
          <span className="grid size-6 place-items-center rounded-full bg-primary">
            <Play className="ml-px size-3 fill-current" aria-hidden="true" />
          </span>
          Vídeo
        </span>
      )}

      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <span>
          <span className="eyebrow block text-[0.66rem] tracking-[0.2em] text-[oklch(0.78_0.14_25)]">
            {work.tag}
          </span>
          <span className="display-title mt-1.5 block text-[1.65rem] text-white lg:text-2xl xl:text-[1.75rem]">
            {work.title}
          </span>
        </span>
        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/30 text-white transition-[background-color,border-color,rotate] duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary">
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
