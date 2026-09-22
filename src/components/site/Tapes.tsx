import type { CSSProperties } from "react";
import { SERVICES, WORKS } from "./data";
import { cx } from "./classes";

/**
 * Duas "fitas" de vinil cruzadas em movimento: serviços (vermelha) e clientes
 * do portfólio (branca). Decorativo — o conteúdo real está nas seções.
 */
export function Tapes() {
  const services = SERVICES.map((s) => s.title);
  const clients = WORKS.filter((w) => !w.video).map((w) => w.title);

  return (
    <div
      aria-hidden="true"
      className="clip-box relative h-48 sm:h-52 lg:h-60"
    >
      <Tape
        items={clients}
        reverse
        duration="70s"
        className="top-[34%] -rotate-[3deg] bg-[oklch(0.95_0.003_285)] text-background sm:top-1/2 sm:rotate-[2.5deg]"
        markClass="bg-primary"
      />
      <Tape
        items={services}
        duration="55s"
        className="top-[66%] rotate-[2.5deg] bg-primary text-primary-foreground shadow-[0_24px_50px_-18px_rgb(0_0_0/0.9)] sm:top-1/2 sm:-rotate-[3deg]"
        markClass="bg-background/70"
      />
    </div>
  );
}

function Tape({
  items,
  reverse = false,
  duration,
  className,
  markClass,
}: {
  items: string[];
  reverse?: boolean;
  duration: string;
  className: string;
  markClass: string;
}) {
  // metade = lista repetida 2x, garante faixa sem buracos em telas largas
  const half = [...items, ...items];
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {half.map((t, i) => (
        <span
          key={`${key}-${i}`}
          className="flex items-center gap-6 whitespace-nowrap px-6 font-display text-[1.35rem] uppercase leading-none tracking-wide sm:text-[1.9rem] lg:text-[2.2rem]"
        >
          {t}
          <span className="flex gap-1">
            <span
              className={cx("h-[0.7em] w-1.5 -skew-x-[24deg]", markClass)}
            />
            <span
              className={cx(
                "h-[0.7em] w-1.5 -skew-x-[24deg] opacity-60",
                markClass,
              )}
            />
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cx(
        "absolute left-[-10%] w-[120%] -translate-y-1/2 py-3.5 sm:py-4",
        className,
      )}
    >
      <div
        className={cx("marquee-track flex w-max", reverse && "marquee-reverse")}
        style={{ "--marquee-duration": duration } as CSSProperties}
      >
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
