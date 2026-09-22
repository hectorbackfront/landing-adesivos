import { createContext, useContext } from "react";
import type { QuoteState } from "./data";

export type SiteActions = {
  /** pré-preenche o montador de orçamento e rola até ele */
  presetQuote: (patch: Partial<QuoteState>) => void;
  /** abre um trabalho do portfólio em tela cheia */
  openWork: (id: string) => void;
  toast: (message: string) => void;
};

export const SiteContext = createContext<SiteActions | null>(null);

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite precisa estar dentro de <SiteContext>");
  return ctx;
}
