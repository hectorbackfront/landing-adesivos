import {
  useId,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { Camera, RotateCcw } from "lucide-react";
import {
  EMPTY_QUOTE,
  PHONE_DISPLAY,
  QUOTE_FINISHES,
  QUOTE_SERVICES,
  VEHICLES,
  WRAP_KINDS,
  buildQuoteMessage,
  wa,
  type QuoteState,
} from "./data";
import { LOGO } from "./media";
import { BTN, cx } from "./classes";
import { SectionIntro, WhatsIcon } from "./ui";

export function Quote({
  state,
  setState,
}: {
  state: QuoteState;
  setState: Dispatch<SetStateAction<QuoteState>>;
}) {
  const set = (patch: Partial<QuoteState>) =>
    setState((s) => ({ ...s, ...patch }));
  const message = buildQuoteMessage(state);
  const isWrap = state.service === "envelopamento";
  const touched = JSON.stringify(state) !== JSON.stringify(EMPTY_QUOTE);
  let step = 1;

  return (
    <section
      id="orcamento"
      aria-labelledby="orcamento-title"
      className="clip-x relative py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 size-[30rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="container-site relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionIntro
            num="06"
            eyebrow="Orçamento"
            id="orcamento-title"
            title="Monte seu orçamento em 1 minuto"
          >
            <p>
              Toque nas opções, confira a mensagem e envie direto no WhatsApp.
              Depois é só mandar as fotos.
            </p>
          </SectionIntro>

          <form
            className="mt-10 space-y-9"
            onSubmit={(e) => e.preventDefault()}
            aria-describedby="orcamento-ajuda"
          >
            <p id="orcamento-ajuda" className="sr-only">
              As opções montam uma mensagem de orçamento que abre no WhatsApp.
              Nada é enviado sem a sua confirmação.
            </p>

            <Chips
              legend={`${step++}. O que você precisa?`}
              name="servico"
              options={QUOTE_SERVICES}
              value={state.service}
              onChange={(v) => set({ service: v })}
            />

            {isWrap && (
              <div className="animate-in fade-in-0 slide-in-from-top-2 space-y-9 duration-500">
                <Chips
                  legend={`${step++}. Qual veículo?`}
                  name="veiculo"
                  options={VEHICLES}
                  value={state.vehicle}
                  onChange={(v) => set({ vehicle: v })}
                />
                <Field
                  label="Modelo e ano (opcional)"
                  placeholder="Ex.: Onix 2022, CG 160, baú do VW Delivery"
                  value={state.model}
                  onChange={(v) => set({ model: v })}
                />
                <Chips
                  legend={`${step++}. Tipo de envelopamento`}
                  name="tipo"
                  options={WRAP_KINDS}
                  value={state.wrapType}
                  onChange={(v) => set({ wrapType: v })}
                />
                <Chips
                  legend={`${step++}. Acabamento`}
                  name="acabamento"
                  options={QUOTE_FINISHES}
                  value={state.finish}
                  onChange={(v) => set({ finish: v })}
                />
              </div>
            )}

            {state.service && !isWrap && (
              <div className="animate-in fade-in-0 slide-in-from-top-2 duration-500">
                <Field
                  label={`${step++}. Medidas aproximadas (opcional)`}
                  placeholder="Ex.: fachada de 6 x 1,5 m, vitrine de 2 x 2 m"
                  value={state.size}
                  onChange={(v) => set({ size: v })}
                />
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Seu nome"
                placeholder="Como podemos te chamar?"
                autoComplete="given-name"
                value={state.name}
                onChange={(v) => set({ name: v })}
              />
              <Field
                label="Cidade"
                placeholder="Onde vai ser o serviço?"
                autoComplete="address-level2"
                value={state.city}
                onChange={(v) => set({ city: v })}
              />
            </div>
            <Field
              label="Algo mais? (opcional)"
              placeholder="Cor desejada, prazo, detalhes da arte..."
              value={state.notes}
              onChange={(v) => set({ notes: v })}
              textarea
            />
          </form>
        </div>

        {/* Prévia da mensagem */}
        <aside className="lg:col-span-5" aria-label="Prévia da mensagem">
          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b141a] shadow-[0_40px_80px_-40px_rgb(0_0_0/0.9)]">
              <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3">
                <span className="grid size-10 place-items-center overflow-hidden rounded-full bg-black ring-1 ring-white/10">
                  <img
                    src={LOGO.small}
                    alt=""
                    width={160}
                    height={84}
                    loading="lazy"
                    className="w-9"
                  />
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block truncate font-semibold text-[#e9edef]">
                    Buiu Adesivos
                  </span>
                  <span className="block text-xs text-[#8696a0]">
                    {PHONE_DISPLAY}
                  </span>
                </span>
                <WhatsIcon className="size-6 text-[#25d366]" />
              </div>
              <div
                className="relative min-h-[17rem] p-4 sm:p-5"
                style={{
                  backgroundImage:
                    "radial-gradient(rgb(255 255 255 / 0.035) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              >
                <p className="mx-auto mb-4 w-fit rounded-md bg-[#182229] px-2.5 py-1 text-[0.7rem] uppercase tracking-wider text-[#8696a0]">
                  Prévia da sua mensagem
                </p>
                <div className="relative ml-auto max-w-[92%] rounded-xl rounded-tr-sm bg-[#005c4b] px-3.5 py-2.5 text-[0.93rem] leading-relaxed text-[#e9edef] shadow-md">
                  <WhatsFormatted text={message} />
                  <span className="absolute -right-1.5 top-0 size-3 bg-[#005c4b] [clip-path:polygon(0_0,100%_0,0_100%)]" />
                </div>
              </div>
            </div>

            <a
              href={wa(message)}
              target="_blank"
              rel="noopener noreferrer"
              className={cx(BTN.primary, BTN.size.lg, "mt-4 w-full")}
            >
              <WhatsIcon className="size-5" />
              Enviar no WhatsApp
            </a>
            <div className="mt-4 flex items-start justify-between gap-4 text-xs leading-relaxed text-muted-foreground">
              <p className="flex items-start gap-2">
                <Camera
                  className="mt-0.5 size-4 shrink-0 text-red-text"
                  aria-hidden="true"
                />
                Abre o WhatsApp com a mensagem pronta. Nada é enviado sem você
                confirmar — aproveite e anexe as fotos.
              </p>
              {touched && (
                <button
                  type="button"
                  onClick={() => setState(EMPTY_QUOTE)}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-1 font-semibold text-foreground/70 transition-colors hover:text-foreground"
                >
                  <RotateCcw className="size-3.5" aria-hidden="true" />
                  Limpar
                </button>
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

/** Mostra *negrito* como o WhatsApp mostra */
function WhatsFormatted({ text }: { text: string }) {
  return (
    <span className="whitespace-pre-wrap break-words">
      {text.split(/(\*[^*\n]+\*)/g).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") && part.length > 2 ? (
          <strong key={i} className="font-bold">
            {part.slice(1, -1)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}

function Chips<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: { id: T; label: string }[];
  value: T | null;
  onChange: (value: T) => void;
}) {
  return (
    <fieldset>
      <legend className="label-cond text-[0.95rem] tracking-[0.1em] text-foreground">
        {legend}
      </legend>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o.id} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={o.id}
              checked={value === o.id}
              onChange={() => onChange(o.id)}
              className="peer sr-only"
            />
            <span className="inline-flex min-h-11 select-none items-center rounded-full border border-white/12 bg-surface px-4 text-[0.92rem] font-medium text-foreground/85 transition-[background-color,border-color,color,box-shadow] duration-200 hover:border-white/35 hover:text-foreground peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:shadow-[0_10px_24px_-12px] peer-checked:shadow-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ring">
              {o.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  autoComplete,
  textarea = false,
}: {
  label: ReactNode;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string | undefined;
  autoComplete?: string | undefined;
  textarea?: boolean | undefined;
}) {
  const id = useId();
  const cls =
    "mt-3 w-full rounded-xl border border-white/12 bg-surface px-4 text-base text-foreground placeholder:text-muted-foreground/60 transition-[border-color,box-shadow] duration-200 hover:border-white/25 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20";
  return (
    <div>
      <label
        htmlFor={id}
        className="label-cond text-[0.95rem] tracking-[0.1em] text-foreground"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={3}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={cx(cls, "resize-y py-3")}
        />
      ) : (
        <input
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          className={cx(cls, "h-12")}
        />
      )}
    </div>
  );
}
