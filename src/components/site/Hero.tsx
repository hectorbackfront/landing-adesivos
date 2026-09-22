import { useRef, useState, type CSSProperties } from "react";
import { ArrowRight, Check, Play } from "lucide-react";
import { HERO_AREAS, HERO_PROOF } from "./data";
import { useSite } from "./context";
import { HERO_DESKTOP, HERO_MOBILE, UTV_POSTER, UTV_VIDEO } from "./media";
import { BTN, cx } from "./classes";
import { Picture, WhatsButton } from "./ui";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="grain clip-box relative isolate flex min-h-[100svh] flex-col justify-end pt-24"
    >
      {/* Foto + camadas de leitura (mobile: foto no topo dissolvendo no preto) */}
      <div className="hero-parallax absolute inset-x-0 top-0 -z-10 h-[72svh] md:inset-0 md:h-auto">
        <picture>
          <source
            media="(max-width: 767px)"
            type="image/avif"
            srcSet={HERO_MOBILE.avif}
            sizes="100vw"
          />
          <source
            media="(max-width: 767px)"
            type="image/webp"
            srcSet={HERO_MOBILE.webp}
            sizes="100vw"
          />
          <source type="image/avif" srcSet={HERO_DESKTOP.avif} sizes="100vw" />
          <source type="image/webp" srcSet={HERO_DESKTOP.webp} sizes="100vw" />
          <img
            src={HERO_DESKTOP.src}
            alt="Aplicação de película preta fosca em carro esportivo"
            width={HERO_DESKTOP.w}
            height={HERO_DESKTOP.h}
            fetchPriority="high"
            decoding="async"
            className="settle size-full object-cover object-[50%_35%] md:object-[60%_center]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/90 to-transparent" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-background/90 via-background/45 to-transparent md:block" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_35%,transparent_40%,var(--background)_120%)]" />
      </div>

      <div className="container-site relative z-10 pb-8 md:pb-10">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div>
            <p
              style={d(0)}
              className="fade-up eyebrow flex items-center gap-3 text-steel [text-shadow:0_1px_16px_rgb(0_0_0/0.8)]"
            >
              <span aria-hidden="true" className="h-0.5 w-10 bg-primary" />
              Especializado em envelopamento
            </p>

            <h1
              id="hero-title"
              className="display-title mt-6 !leading-[0.92] text-[clamp(3.2rem,15vw,5.25rem)] text-foreground sm:text-8xl lg:text-[clamp(5.25rem,min(10.5vw,15.5vh),9.5rem)]"
            >
              <span className="line-mask">
                <span className="line-inner" style={d(80)}>
                  Seu veículo.
                </span>
              </span>
              <span className="line-mask">
                <span className="line-inner text-chrome" style={d(190)}>
                  Sua marca.
                </span>
              </span>
              <span className="line-mask">
                <span className="line-inner" style={d(300)}>
                  <span className="text-sheen">Seu estilo.</span>
                </span>
              </span>
            </h1>

            <p
              style={d(450)}
              className="fade-up mt-6 max-w-xl text-base leading-relaxed text-foreground/80 [text-shadow:0_1px_16px_rgb(0_0_0/0.8)] md:text-lg"
            >
              Envelopamento de carros, motos e frotas, fachadas em ACM, letras
              em relevo e adesivos — com acabamento de quem é especialista.
            </p>

            <div
              style={d(560)}
              className="fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <WhatsButton
                msg="Olá! Vim pelo site e quero um orçamento de envelopamento."
                size="lg"
                className="w-full sm:w-auto"
              >
                Orçamento no WhatsApp
              </WhatsButton>
              <a
                href="#portfolio"
                className={cx(BTN.ghost, BTN.size.lg, "w-full sm:w-auto")}
              >
                Ver trabalhos
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 motion-safe:group-hover/btn:translate-x-1"
                />
              </a>
            </div>

            <ul
              style={d(660)}
              className="fade-up mt-7 flex flex-col gap-2 text-sm text-foreground/75 sm:flex-row sm:flex-wrap sm:gap-x-6"
            >
              {HERO_PROOF.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-primary/20 text-red-text">
                    <Check
                      className="size-3"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <ReelCard />
        </div>

        <div
          style={d(760)}
          className="fade-up mt-10 grid grid-cols-3 border-t border-white/12 md:mt-14 lg:grid-cols-[1fr_1fr_1fr_auto]"
        >
          {HERO_AREAS.map((a, i) => (
            <a
              key={a.title}
              href={a.href}
              className={cx(
                "group relative pb-1 pt-4 pr-3 md:pt-5",
                i > 0 && "pl-3 md:pl-6",
              )}
            >
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 h-0.5 w-8 bg-primary transition-[width] duration-500 ease-[var(--ease-out-expo)] group-hover:w-full"
              />
              <span className="flex items-center gap-2 label-cond text-[0.72rem] tracking-[0.2em] text-steel md:text-[0.8rem]">
                <a.icon
                  aria-hidden="true"
                  className="hidden size-4 text-red-text sm:block"
                />
                {a.title}
              </span>
              <span className="mt-1.5 block text-xs leading-snug text-muted-foreground md:text-sm">
                {a.text}
              </span>
            </a>
          ))}
          <a
            href="#envelopamento"
            aria-label="Rolar para o conteúdo"
            className="hidden items-center gap-3 self-center pl-6 label-cond text-[0.72rem] tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground lg:flex"
          >
            Role
            <span className="relative h-10 w-px overflow-hidden bg-white/15">
              <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-primary" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/** Cartão com o vídeo real (desktop). Carrega o vídeo só quando o mouse passa. */
function ReelCard() {
  const { openWork } = useSite();
  const [preview, setPreview] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <button
      type="button"
      onClick={() => openWork("utv")}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setPreview(true);
      }}
      onPointerLeave={() => {
        videoRef.current?.pause();
        setPreview(false);
      }}
      style={d(820)}
      aria-label="Assistir ao vídeo do envelopamento personalizado em tela cheia"
      className="fade-up group relative hidden aspect-[9/16] w-[13.5rem] overflow-hidden rounded-2xl border border-white/15 bg-surface text-left shadow-[0_40px_80px_-30px_rgb(0_0_0/0.95)] transition-[translate,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-white/35 lg:block xl:w-[15rem]"
    >
      <Picture
        img={UTV_POSTER}
        alt=""
        sizes="240px"
        className="absolute inset-0"
        imgClassName="size-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-105"
      />
      {preview && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
        >
          <source src={UTV_VIDEO.webm} type={UTV_VIDEO.webmType} />
          <source src={UTV_VIDEO.mp4} type={UTV_VIDEO.mp4Type} />
        </video>
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />
      <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 label-cond text-[0.65rem] tracking-[0.18em] backdrop-blur-md">
        <span className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse" />
        Trabalho real
      </span>
      <span className="absolute inset-x-4 bottom-4">
        <span className="flex items-center gap-2.5">
          <span className="relative grid size-11 place-items-center rounded-full bg-primary text-primary-foreground">
            <span className="pulse-ring absolute inset-0 rounded-full bg-primary" />
            <Play
              className="relative ml-0.5 size-4 fill-current"
              aria-hidden="true"
            />
          </span>
          <span className="label-cond text-xs tracking-[0.2em] text-foreground/85">
            Assista
          </span>
        </span>
        <span className="display-title mt-3 block text-xl leading-none">
          Envelopamento
          <br />
          personalizado
        </span>
      </span>
    </button>
  );
}
