import clsx from "clsx";

// clsx direto (e não tailwind-merge) para não pesar o bundle
export const cx = clsx;

const BTN_BASE =
  "group/btn relative isolate inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full label-cond transition-[translate,background-color,border-color,box-shadow,color] duration-300 ease-[var(--ease-snap)] motion-safe:active:translate-y-px";

export const BTN = {
  primary: cx(
    BTN_BASE,
    "bg-primary text-primary-foreground shadow-[0_14px_34px_-14px] shadow-primary/70 hover:bg-[oklch(0.6_0.235_27.5)] hover:shadow-[0_18px_40px_-12px] hover:shadow-primary/80 motion-safe:hover:-translate-y-0.5",
    // brilho que atravessa o botão, como película pegando a luz
    "before:absolute before:inset-y-0 before:-left-1/2 before:-z-10 before:w-1/3 before:-skew-x-12 before:bg-white/25 before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-[420%] motion-reduce:before:hidden",
  ),
  ghost: cx(
    BTN_BASE,
    "border border-white/20 bg-white/[0.04] text-foreground backdrop-blur-sm hover:border-white/45 hover:bg-white/10 motion-safe:hover:-translate-y-0.5",
  ),
  size: {
    sm: "min-h-10 px-4 text-[0.8rem]",
    md: "min-h-12 px-6 text-[0.9rem]",
    lg: "min-h-14 px-7 text-base",
  },
};
