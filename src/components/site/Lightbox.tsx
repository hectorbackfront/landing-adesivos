import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { WORKS, pad } from "./data";
import { UTV_POSTER, UTV_VIDEO } from "./media";
import { WORK_IMAGES } from "./Portfolio";
import { cx } from "./classes";
import { Picture, WhatsButton } from "./ui";

/**
 * Visualização em tela cheia do portfólio, com <dialog> nativo:
 * foco preso no modal, Esc fecha, setas navegam e dá pra arrastar no celular.
 */
export function Lightbox({
  index,
  onClose,
  onIndex,
}: {
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const start = useRef<{ x: number; y: number } | null>(null);
  const open = index !== null;
  const total = WORKS.length;
  const work = open ? WORKS[index] : undefined;

  const go = (dir: 1 | -1) => {
    if (index === null) return;
    onIndex((index + dir + total) % total);
  };

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.classList.add("is-locked");
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const handleClose = () => {
      document.documentElement.classList.remove("is-locked");
      onClose();
    };
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  const closeIfBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) ref.current?.close();
  };

  return (
    <dialog
      ref={ref}
      aria-label={work ? `${work.title} — ${work.tag}` : "Portfólio"}
      className="lightbox"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      onClick={closeIfBackdrop}
    >
      {work && index !== null && (
        <div className="flex h-full flex-col" onClick={closeIfBackdrop}>
          {/* topo */}
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
            <p className="label-cond text-sm tabular-nums text-foreground/80">
              {pad(index + 1)}
              <span className="text-muted-foreground"> / {pad(total)}</span>
            </p>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Fechar"
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-white/15"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          {/* mídia */}
          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-20"
            onClick={closeIfBackdrop}
            onPointerDown={(e) => {
              start.current = { x: e.clientX, y: e.clientY };
            }}
            onPointerUp={(e) => {
              const s = start.current;
              start.current = null;
              if (!s) return;
              const dx = e.clientX - s.x;
              const dy = e.clientY - s.y;
              if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) {
                go(dx < 0 ? 1 : -1);
              }
            }}
          >
            {work.video ? (
              <video
                key={work.id}
                controls
                autoPlay
                muted
                loop
                playsInline
                poster={UTV_POSTER.src}
                className="animate-in fade-in-0 zoom-in-95 max-h-full max-w-full rounded-xl bg-black duration-500"
              >
                <source src={UTV_VIDEO.webm} type={UTV_VIDEO.webmType} />
                <source src={UTV_VIDEO.mp4} type={UTV_VIDEO.mp4Type} />
              </video>
            ) : (
              <Picture
                key={work.id}
                img={WORK_IMAGES[work.id]!}
                alt={work.alt}
                sizes="(min-width: 1024px) 80vw, 100vw"
                loading="eager"
                className="contents"
                imgClassName="animate-in fade-in-0 zoom-in-95 max-h-full w-auto max-w-full select-none rounded-xl object-contain duration-500"
              />
            )}

            <NavButton
              dir={-1}
              onClick={() => go(-1)}
              className="left-2 md:left-4"
            />
            <NavButton
              dir={1}
              onClick={() => go(1)}
              className="right-2 md:right-4"
            />
          </div>

          {/* legenda */}
          <div className="container-site flex flex-col gap-4 py-4 sm:py-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-[0.7rem] text-red-text">{work.tag}</p>
              <p className="display-title mt-2 text-3xl sm:text-4xl">
                {work.title}
              </p>
              <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground sm:block">
                {work.text}
              </p>
            </div>
            <WhatsButton
              msg={`Olá! Vi o trabalho "${work.title}" (${work.tag}) no site e quero um projeto assim.`}
              className="w-full md:w-auto"
            >
              Quero um projeto assim
            </WhatsButton>
          </div>
        </div>
      )}
    </dialog>
  );
}

function NavButton({
  dir,
  onClick,
  className,
}: {
  dir: 1 | -1;
  onClick: () => void;
  className: string;
}) {
  const Icon = dir === 1 ? ChevronRight : ChevronLeft;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 1 ? "Próximo trabalho" : "Trabalho anterior"}
      className={cx(
        "absolute top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 backdrop-blur-md transition-colors hover:border-primary hover:bg-primary md:size-12",
        className,
      )}
    >
      <Icon className="size-6" aria-hidden="true" />
    </button>
  );
}
