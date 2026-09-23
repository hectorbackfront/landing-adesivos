import type { CSSProperties } from "react";
import { STEPS, pad } from "./data";
import { SectionIntro } from "./ui";

export function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-title"
      className="relative py-24 md:py-32"
    >
      <div className="container-site">
        <SectionIntro
          num="06"
          eyebrow="Como funciona"
          id="processo-title"
          title="Do primeiro contato à entrega"
        />

        <ol
          data-reveal=""
          className="process relative mt-14 grid gap-10 lg:mt-20 lg:grid-cols-4 lg:gap-8"
        >
          {/* trilho + preenchimento animado */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[1.6rem] top-0 w-px bg-border lg:bottom-auto lg:left-0 lg:right-0 lg:top-[1.55rem] lg:h-0.5 lg:w-auto"
          />
          <span
            aria-hidden="true"
            className="process-fill absolute bottom-0 left-[1.6rem] top-0 w-0.5 -translate-x-px origin-top bg-gradient-to-b from-primary to-primary/25 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[1.55rem] lg:h-0.5 lg:w-auto lg:translate-x-0 lg:origin-left lg:bg-gradient-to-r"
          />
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="process-step relative pl-20 lg:pl-0 lg:pt-20"
              style={{ "--d": `${250 + i * 180}ms` } as CSSProperties}
            >
              <span className="absolute left-0 top-0 grid size-[3.2rem] place-items-center rounded-full border border-border bg-background text-red-text shadow-[0_0_0_6px_var(--background)]">
                <s.icon className="size-5" aria-hidden="true" />
              </span>
              <p className="label-cond text-xs tracking-[0.22em] text-muted-foreground">
                Passo {pad(i + 1)}
              </p>
              <h3 className="display-title mt-2 text-[1.75rem] text-foreground lg:text-3xl">
                {s.title}
              </h3>
              <p className="mt-2.5 max-w-md leading-relaxed text-muted-foreground lg:max-w-xs">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
