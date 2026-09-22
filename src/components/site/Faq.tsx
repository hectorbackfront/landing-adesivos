import { Plus } from "lucide-react";
import { FAQ } from "./data";
import { SectionIntro, WhatsButton } from "./ui";

export function Faq() {
  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-title"
      className="relative border-y border-border bg-surface/50 py-24 md:py-32"
    >
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionIntro
              num="07"
              eyebrow="Dúvidas"
              id="duvidas-title"
              title="Perguntas frequentes"
            >
              <p>
                Não encontrou o que queria saber? Chama no WhatsApp que a gente
                responde rapidinho.
              </p>
            </SectionIntro>
            <WhatsButton
              className="mt-8"
              variant="ghost"
              msg="Olá! Tenho uma dúvida sobre os serviços da Buiu Adesivos."
            >
              Tirar uma dúvida
            </WhatsButton>
          </div>
        </div>

        <div className="border-t border-border lg:col-span-7">
          {FAQ.map((f, i) => (
            <details
              key={f.q}
              name="faq"
              open={i === 0}
              className="faq-item group border-b border-border"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-6 text-left">
                <span className="text-lg font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-foreground/80 sm:text-xl">
                  {f.q}
                </span>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 text-foreground transition-[rotate,background-color,border-color] duration-500 ease-[var(--ease-out-expo)] group-open:rotate-[135deg] group-open:border-primary group-open:bg-primary">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 pr-14 leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
