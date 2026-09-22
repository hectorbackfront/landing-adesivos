import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Instagram, Menu, Phone, X } from "lucide-react";
import {
  INSTAGRAM,
  INSTAGRAM_URL,
  NAV,
  PHONE_DISPLAY,
  WHATS,
  pad,
} from "./data";
import { useScrolled, useScrollSpy } from "./hooks";
import { LOGO } from "./media";
import { cx } from "./classes";
import { WhatsButton } from "./ui";

const NAV_IDS = NAV.map((n) => n.id);

export function Header() {
  const scrolled = useScrolled(16);
  const active = useScrollSpy(NAV_IDS);
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

  // barra de progresso da leitura (escreve direto no style, sem re-render)
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const bar = progressRef.current;
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const done = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      bar.style.scale = `${done} 1`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // menu mobile: Esc fecha e trava a rolagem do fundo
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.documentElement.classList.add("is-locked");
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.documentElement.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[70] rounded-full bg-primary px-5 py-3 label-cond text-sm text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>

      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 motion-reduce:transition-none",
          solid
            ? "border-border bg-background/80 backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="container-site relative flex h-16 items-center justify-between gap-4 lg:grid lg:h-[4.5rem] lg:grid-cols-[1fr_auto_1fr]">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center justify-self-start rounded-sm"
          >
            <img
              src={LOGO.medium}
              srcSet={LOGO.headerSrcSet}
              sizes="(min-width: 1024px) 100px, 77px"
              alt="Buiu Adesivos — especializado em envelopamento"
              width={240}
              height={125}
              className={cx(
                "h-10 w-auto transition-[height] duration-500 motion-reduce:transition-none",
                scrolled ? "lg:h-11" : "lg:h-[3.25rem]",
              )}
            />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-2">
              {NAV.map((n) => {
                const isActive = active === n.id;
                return (
                  <li key={n.id}>
                    <a
                      href={`#${n.id}`}
                      aria-current={isActive ? "location" : undefined}
                      className={cx(
                        "relative block rounded-full px-3.5 py-2 label-cond text-[0.8rem] tracking-[0.16em] transition-colors duration-300 xl:px-4",
                        isActive
                          ? "text-foreground"
                          : "text-foreground/65 hover:text-foreground",
                      )}
                    >
                      {n.label}
                      <span
                        aria-hidden="true"
                        className={cx(
                          "absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left bg-primary transition-transform duration-500 ease-[var(--ease-out-expo)] xl:inset-x-4",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <WhatsButton
              msg="Olá! Vim pelo site e gostaria de um orçamento."
              size="sm"
              className="px-3.5 sm:px-5"
            >
              Orçamento
            </WhatsButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="relative inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-foreground transition-colors hover:bg-white/10 lg:hidden"
            >
              <Menu
                className={cx(
                  "absolute size-5 transition-[opacity,rotate] duration-300 motion-reduce:transition-none",
                  open && "rotate-90 opacity-0",
                )}
              />
              <X
                className={cx(
                  "absolute size-5 transition-[opacity,rotate] duration-300 motion-reduce:transition-none",
                  !open && "-rotate-90 opacity-0",
                )}
              />
            </button>
          </div>
        </div>
        <span
          ref={progressRef}
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-px h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary to-[oklch(0.7_0.2_30)]"
        />
      </header>

      {/* Menu mobile em tela cheia */}
      <div
        id="menu-mobile"
        inert={!open}
        className={cx(
          "fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background/95 backdrop-blur-2xl transition-[opacity,visibility] duration-400 motion-reduce:transition-none lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Menu mobile" className="container-site pt-24">
          <ul>
            {NAV.map((n, i) => (
              <li
                key={n.id}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                className={cx(
                  "border-b border-border transition-[opacity,translate] duration-500 ease-[var(--ease-out-expo)] motion-reduce:transition-none",
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0",
                )}
              >
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-5 py-4"
                >
                  <span className="label-cond w-6 text-sm text-red-text">
                    {pad(i + 1)}
                  </span>
                  <span className="display-title text-[2.6rem] text-foreground transition-colors group-active:text-primary">
                    {n.label}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-auto size-6 text-foreground/40"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          style={{ transitionDelay: open ? "380ms" : "0ms" }}
          className={cx(
            "container-site mt-auto space-y-3 pb-8 pt-10 transition-opacity duration-500 motion-reduce:transition-none",
            open ? "opacity-100" : "opacity-0",
          )}
        >
          <WhatsButton
            msg="Olá! Vim pelo site e gostaria de um orçamento."
            size="lg"
            className="w-full"
          >
            Orçamento no WhatsApp
          </WhatsButton>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:+${WHATS}`}
              className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-border text-sm font-semibold"
            >
              <Phone className="size-4 text-red-text" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-border text-sm font-semibold"
            >
              <Instagram className="size-4 text-red-text" aria-hidden="true" />@
              {INSTAGRAM}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
