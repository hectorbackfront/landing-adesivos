import { useEffect, useState } from "react";
import { wa } from "./data";
import { cx } from "./classes";
import { WhatsIcon } from "./ui";

/**
 * Botão flutuante do WhatsApp: aparece depois do topo e some quando o
 * montador de orçamento ou o contato estão na tela (lá já tem botão grande).
 */
export function FloatingWhats() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let pastHero = false;
    const covering = new Set<Element>();
    const update = () => setShow(pastHero && covering.size === 0);

    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.6;
      update();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) covering.add(e.target);
            else covering.delete(e.target);
          }
          update();
        },
        { threshold: 0.2 },
      );
      ["orcamento", "contato"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) io?.observe(el);
      });
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return (
    <a
      href={wa("Olá! Vim pelo site e quero um orçamento da Buiu Adesivos.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      inert={!show}
      className={cx(
        "fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-whats py-3.5 pl-3.5 pr-3.5 text-white shadow-[0_16px_40px_-12px_rgb(0_0_0/0.8)] transition-[translate,opacity,scale] duration-500 ease-[var(--ease-out-expo)] hover:scale-105 sm:bottom-6 sm:right-6 sm:pr-5",
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-24 opacity-0",
      )}
    >
      <span
        aria-hidden="true"
        className="pulse-ring absolute inset-0 -z-10 rounded-full bg-whats"
      />
      <WhatsIcon className="size-7" />
      <span className="hidden label-cond text-sm tracking-[0.14em] sm:inline">
        WhatsApp
      </span>
    </a>
  );
}

/** Aviso rápido (ex.: "Número copiado!") */
export function Toast({
  message,
  onDone,
}: {
  message: string | null;
  onDone: () => void;
}) {
  useEffect(() => {
    if (!message) return;
    const t = window.setTimeout(onDone, 2200);
    return () => window.clearTimeout(t);
  }, [message, onDone]);

  return (
    <div role="status" aria-live="polite" className="pointer-events-none">
      {message && (
        <p className="toast-in fixed bottom-24 left-1/2 z-[60] rounded-full border border-white/15 bg-surface-2/95 px-5 py-3 text-sm font-semibold text-foreground shadow-2xl backdrop-blur-md">
          {message}
        </p>
      )}
    </div>
  );
}
