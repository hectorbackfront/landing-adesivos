import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Check, Maximize2, Pause, Play } from "lucide-react";
import { useSite } from "./context";
import { prefersReducedMotion } from "./hooks";
import { UTV_POSTER, UTV_VIDEO } from "./media";
import { Picture, SectionIntro, WhatsButton } from "./ui";

const POINTS = [
  "Estampa exclusiva, impressa sob medida",
  "Aplicação peça por peça, em todo o veículo",
  "Acabamento revisado antes da entrega",
];

export function Showcase() {
  return (
    <section
      id="em-acao"
      aria-labelledby="em-acao-title"
      className="clip-box relative isolate py-24 md:py-32"
    >
      {/* luz ambiente tirada do próprio vídeo */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Picture
          img={UTV_POSTER}
          alt=""
          sizes="50vw"
          className="absolute inset-0"
          imgClassName="size-full scale-125 object-cover opacity-35 blur-[90px] saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      </div>
      <p
        aria-hidden="true"
        className="text-outline pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[34vw] uppercase leading-none opacity-40 lg:text-[24vw]"
      >
        Em ação
      </p>

      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionIntro
            num="03"
            eyebrow="Em ação"
            id="em-acao-title"
            title="Veja o envelopamento de perto"
          >
            <p>
              Um envelopamento completo em veículo off-road, com estampa
              personalizada. Repare no acabamento nas curvas, nas bordas e nos
              recortes.
            </p>
          </SectionIntro>
          <ul className="mt-8 space-y-3.5">
            {POINTS.map((p, i) => (
              <li
                key={p}
                data-reveal=""
                style={{ "--d": `${120 + i * 80}ms` } as CSSProperties}
                className="flex items-center gap-3 text-foreground/90"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
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
          <div data-reveal="" style={{ "--d": "380ms" } as CSSProperties}>
            <WhatsButton
              className="mt-10"
              msg="Olá! Vi o vídeo no site e quero um envelopamento como esse."
            >
              Quero um projeto assim
            </WhatsButton>
          </div>
        </div>

        <VideoPlayer />
      </div>
    </section>
  );
}

/** Vídeo mudo em loop: só toca quando está visível e respeita movimento reduzido. */
function VideoPlayer() {
  const { openWork } = useSite();
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          if (!userPaused.current && !prefersReducedMotion())
            video.play().catch(() => {});
        } else video.pause();
      },
      { threshold: 0.4 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  // barra de progresso suave enquanto toca
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const tick = () => {
      const v = videoRef.current;
      const bar = barRef.current;
      if (v && bar && v.duration)
        bar.style.scale = `${v.currentTime / v.duration} 1`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  return (
    <div
      data-reveal=""
      className="relative mx-auto w-full max-w-[19rem] sm:max-w-[22rem]"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/20 blur-3xl"
      />
      <div className="relative aspect-[478/850] overflow-hidden rounded-[1.75rem] border border-white/15 bg-black shadow-[0_50px_90px_-35px_rgb(0_0_0/0.95)]">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster={UTV_POSTER.src}
          aria-label="Vídeo: UTV off-road envelopado com estampa de chamas e caveira"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="size-full object-cover"
        >
          <source src={UTV_VIDEO.webm} type={UTV_VIDEO.webmType} />
          <source src={UTV_VIDEO.mp4} type={UTV_VIDEO.mp4Type} />
        </video>

        <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 label-cond text-[0.68rem] tracking-[0.18em] backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse" />
          Trabalho real
        </span>

        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-16">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
            className="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-colors hover:bg-white/25"
          >
            {playing ? (
              <Pause className="size-4 fill-current" aria-hidden="true" />
            ) : (
              <Play className="ml-0.5 size-4 fill-current" aria-hidden="true" />
            )}
          </button>
          <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
            <span
              ref={barRef}
              className="block h-full origin-left scale-x-0 rounded-full bg-primary"
            />
          </span>
          <button
            type="button"
            onClick={() => {
              videoRef.current?.pause();
              openWork("utv");
            }}
            aria-label="Ver vídeo em tela cheia"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-colors hover:bg-white/25"
          >
            <Maximize2 className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
