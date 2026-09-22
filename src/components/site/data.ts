import {
  Bike,
  Building2,
  Car,
  Flag,
  Layers,
  MessageCircle,
  Paintbrush,
  PanelTop,
  Ruler,
  ShieldCheck,
  Sparkles,
  Sticker,
  Sun,
  Truck,
  Type,
  Undo2,
  Wallpaper,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Contato                                                             */
/* ------------------------------------------------------------------ */
export const SITE_URL = "https://buiu-adesivos.vercel.app";
export const BRAND = "Buiu Adesivos";
export const PHONE_DISPLAY = "(11) 93362-0802";
export const WHATS = "5511933620802";
export const INSTAGRAM = "buiuadesivos";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM}/`;
export const AREA = "São Paulo e região";

export const wa = (msg: string) =>
  `https://wa.me/${WHATS}?text=${encodeURIComponent(msg)}`;

export const pad = (n: number) => String(n).padStart(2, "0");

export const NAV = [
  { id: "envelopamento", label: "Envelopamento" },
  { id: "portfolio", label: "Portfólio" },
  { id: "servicos", label: "Serviços" },
  { id: "processo", label: "Processo" },
  { id: "contato", label: "Contato" },
] as const;

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export const HERO_AREAS = [
  {
    icon: Car,
    title: "Veículos",
    text: "Carros, motos e frotas",
    href: "#envelopamento",
  },
  {
    icon: Building2,
    title: "Empresas",
    text: "Fachadas e identidade visual",
    href: "#servicos",
  },
  {
    icon: Wallpaper,
    title: "Ambientes",
    text: "Papel de parede e películas",
    href: "#servicos",
  },
];

export const HERO_PROOF = [
  "Orçamento rápido pelo WhatsApp",
  "Acabamento revisado peça por peça",
  "Trabalhos reais no portfólio",
];

/* ------------------------------------------------------------------ */
/* Envelopamento                                                       */
/* ------------------------------------------------------------------ */
export const WRAP_TYPES = [
  {
    icon: Car,
    title: "Troca de cor completa",
    text: "O veículo inteiro com cor e acabamento novos, preservando a pintura original por baixo.",
  },
  {
    icon: Layers,
    title: "Parcial e detalhes",
    text: "Teto, capô, retrovisores, colunas e detalhes em preto fosco para mudar o visual.",
  },
  {
    icon: Truck,
    title: "Frotas e comerciais",
    text: "Sua marca rodando pela cidade, padronizada em carros, vans e caminhões.",
  },
  {
    icon: Bike,
    title: "Motos",
    text: "Tanque, carenagens e detalhes com recortes precisos e acabamento limpo.",
  },
  {
    icon: Paintbrush,
    title: "Arte personalizada",
    text: "Estampas exclusivas impressas e aplicadas peça por peça — como o UTV do vídeo.",
  },
];

export type FinishId =
  "fosco" | "brilho" | "cetim" | "metalico" | "carbono" | "impresso";

export const FINISHES: {
  id: FinishId;
  name: string;
  sample: string;
  text: string;
}[] = [
  {
    id: "fosco",
    name: "Fosco",
    sample: "Preto fosco",
    text: "Visual sóbrio e esportivo, sem reflexo.",
  },
  {
    id: "brilho",
    name: "Brilho",
    sample: "Vermelho brilho",
    text: "Reflexo intenso, com cara de pintura nova.",
  },
  {
    id: "cetim",
    name: "Cetim",
    sample: "Grafite cetim",
    text: "O meio-termo elegante entre o fosco e o brilho.",
  },
  {
    id: "metalico",
    name: "Metálico",
    sample: "Prata metálico",
    text: "Partículas que acendem quando a luz bate.",
  },
  {
    id: "carbono",
    name: "Carbono",
    sample: "Fibra de carbono",
    text: "Textura esportiva para capô, teto e detalhes.",
  },
  {
    id: "impresso",
    name: "Impresso",
    sample: "Arte personalizada",
    text: "Estampa exclusiva, do jeito que você imaginar.",
  },
];

export const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Protege a pintura original",
    text: "A película cobre e preserva o acabamento de fábrica do veículo.",
  },
  {
    icon: Sparkles,
    title: "Sem emendas visíveis",
    text: "Recortes planejados e finalização revisada peça por peça.",
  },
  {
    icon: Truck,
    title: "Frotas padronizadas",
    text: "A mesma identidade, aplicada igual em todos os veículos.",
  },
  {
    icon: Undo2,
    title: "Dá pra mudar de ideia",
    text: "Com a remoção correta, a película sai e a pintura fica preservada.",
  },
];

/* ------------------------------------------------------------------ */
/* Portfólio                                                           */
/* ------------------------------------------------------------------ */
export type Work = {
  id: string;
  title: string;
  tag: string;
  alt: string;
  text: string;
  /** nome base dos arquivos em src/assets/works (ou video/) */
  image: string;
  w: number;
  h: number;
  /** enquadramento quando a foto é recortada no grid */
  pos: string;
  /** classes de tamanho no grid (sm: 2 colunas, lg: 4 colunas) */
  span: string;
  video?: boolean;
};

export const WORKS: Work[] = [
  {
    id: "alfalooks",
    title: "Alfa Look's",
    tag: "Envelopamento de frota",
    alt: "Baú de caminhão envelopado com a identidade visual da Alfa Look's, com QR Code e telefone",
    text: "Baú do caminhão envelopado de ponta a ponta com a identidade da marca, QR Code e contatos: a frota vira mídia rodando pela cidade.",
    image: "alfalooks",
    w: 1600,
    h: 900,
    pos: "38% 55%",
    span: "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-1",
  },
  {
    id: "utv",
    title: "UTV off-road",
    tag: "Envelopamento personalizado",
    alt: "UTV off-road envelopado com arte personalizada de chamas e caveira",
    text: "Envelopamento completo com arte personalizada impressa — chamas e caveira aplicadas peça por peça em todo o veículo.",
    image: "utv-cover",
    w: 478,
    h: 850,
    pos: "50% 50%",
    span: "sm:row-span-2 lg:row-span-2",
    video: true,
  },
  {
    id: "studiokarol",
    title: "Studio Karol",
    tag: "Fachada luminosa",
    alt: "Fachada do Studio Karol com letreiro e logotipo iluminados ao anoitecer",
    text: "Fachada com letreiro e logotipo iluminados: a marca aparece com presença de dia e de noite.",
    image: "studiokarol",
    w: 1200,
    h: 1600,
    pos: "50% 42%",
    span: "sm:row-span-2 lg:row-span-2",
  },
  {
    id: "cabiderosa",
    title: "Cabide Rosa",
    tag: "Letras em relevo",
    alt: "Fachada da loja Cabide Rosa com letras douradas iluminadas",
    text: "Letras em relevo douradas com iluminação, destacando a marca na fachada da loja.",
    image: "cabiderosa",
    w: 1080,
    h: 875,
    pos: "50% 30%",
    span: "",
  },
  {
    id: "divaferrari",
    title: "Diva Ferrari",
    tag: "Papel de parede e adesivos",
    alt: "Consultório odontológico infantil decorado com papel de parede e adesivos de ursinhos",
    text: "Papel de parede impresso e adesivos personalizados que transformam o consultório em um ambiente lúdico para as crianças.",
    image: "divaferrari",
    w: 1200,
    h: 900,
    pos: "60% 45%",
    span: "",
  },
  {
    id: "doisirmaos",
    title: "Dois Irmãos Madeireira",
    tag: "Fachada e letreiro",
    alt: "Fachada da Dois Irmãos Madeireira com letreiro em grande formato sobre chapa metálica preta",
    text: "Letreiro de fachada em grande formato, com logotipo e contatos em destaque — leitura fácil para quem passa na rua.",
    image: "doisirmaos",
    w: 900,
    h: 1600,
    pos: "50% 40%",
    span: "sm:row-span-2 lg:row-span-2",
  },
  {
    id: "fernandes",
    title: "Fernandes Veículos",
    tag: "Fachada e letreiro",
    alt: "Fachada da Fernandes Veículos com letreiro e comunicação visual",
    text: "Fachada com letreiro e comunicação visual completa para a loja de veículos.",
    image: "fernandes",
    w: 1200,
    h: 675,
    pos: "50% 22%",
    span: "lg:col-span-2",
  },
  {
    id: "mycar",
    title: "MyCar Autopeças",
    tag: "Letras em relevo",
    alt: "Fachada da MyCar Autopeças com letras em relevo iluminadas à noite",
    text: "Letras em relevo com iluminação na fachada: a marca aparece com destaque, mesmo à noite.",
    image: "mycar",
    w: 1080,
    h: 1512,
    pos: "50% 30%",
    span: "sm:row-span-2 lg:row-span-2",
  },
];

/* ------------------------------------------------------------------ */
/* Serviços                                                            */
/* ------------------------------------------------------------------ */
export type ServiceId =
  | "envelopamento"
  | "fachada-acm"
  | "letras-relevo"
  | "adesivos"
  | "papel-parede"
  | "placas-toldos"
  | "faixas"
  | "insulfilm";

export const SERVICES: {
  id: ServiceId;
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    id: "envelopamento",
    icon: Car,
    title: "Envelopamento",
    text: "Troca de cor, detalhes e envelopamento comercial de carros, motos e frotas.",
  },
  {
    id: "fachada-acm",
    icon: Building2,
    title: "Fachadas em ACM",
    text: "Fachadas modernas em ACM com estrutura, instalação e acabamento premium.",
  },
  {
    id: "letras-relevo",
    icon: Type,
    title: "Letras em relevo",
    text: "Letras caixa e em relevo, com ou sem iluminação, que dão volume à sua marca.",
  },
  {
    id: "adesivos",
    icon: Sticker,
    title: "Adesivos",
    text: "Adesivos recortados, vitrines, sinalização interna e identidade de frota.",
  },
  {
    id: "papel-parede",
    icon: Wallpaper,
    title: "Papel de parede",
    text: "Impressão personalizada para salas comerciais, lojas e ambientes residenciais.",
  },
  {
    id: "placas-toldos",
    icon: PanelTop,
    title: "Placas e toldos",
    text: "Comunicação visual externa com acabamento resistente ao tempo.",
  },
  {
    id: "faixas",
    icon: Flag,
    title: "Faixas e banners",
    text: "Faixas e banners para eventos, promoções e sinalização temporária.",
  },
  {
    id: "insulfilm",
    icon: Sun,
    title: "Insulfilm",
    text: "Aplicação residencial e comercial para conforto térmico e privacidade.",
  },
];

/* ------------------------------------------------------------------ */
/* Processo                                                            */
/* ------------------------------------------------------------------ */
export const STEPS = [
  {
    icon: MessageCircle,
    title: "Conversa no WhatsApp",
    text: "Você conta o que precisa e envia fotos do veículo ou do espaço.",
  },
  {
    icon: Ruler,
    title: "Orçamento e material",
    text: "Definimos acabamento, cor e o material ideal para o seu projeto.",
  },
  {
    icon: Paintbrush,
    title: "Aplicação",
    text: "Preparação da superfície e aplicação feita por equipe especializada.",
  },
  {
    icon: BadgeCheck,
    title: "Entrega revisada",
    text: "Conferência final do acabamento antes de entregar para você.",
  },
];

/* ------------------------------------------------------------------ */
/* Orçamento                                                           */
/* ------------------------------------------------------------------ */
export type QuoteServiceId = ServiceId | "outro";

export type QuoteState = {
  service: QuoteServiceId | null;
  vehicle: string | null;
  wrapType: string | null;
  finish: FinishId | "indeciso" | null;
  model: string;
  size: string;
  name: string;
  city: string;
  notes: string;
};

export const EMPTY_QUOTE: QuoteState = {
  service: null,
  vehicle: null,
  wrapType: null,
  finish: null,
  model: "",
  size: "",
  name: "",
  city: "",
  notes: "",
};

export const QUOTE_SERVICES: { id: QuoteServiceId; label: string }[] = [
  { id: "envelopamento", label: "Envelopamento de veículo" },
  { id: "fachada-acm", label: "Fachada em ACM" },
  { id: "letras-relevo", label: "Letras em relevo" },
  { id: "adesivos", label: "Adesivos" },
  { id: "papel-parede", label: "Papel de parede" },
  { id: "placas-toldos", label: "Placas e toldos" },
  { id: "faixas", label: "Faixas e banners" },
  { id: "insulfilm", label: "Insulfilm" },
  { id: "outro", label: "Outro" },
];

export const VEHICLES = [
  "Carro",
  "Moto",
  "Caminhão / baú",
  "Van / utilitário",
  "Frota (vários)",
  "Outro",
].map((v) => ({ id: v, label: v }));

export const WRAP_KINDS = [
  "Troca de cor completa",
  "Parcial / detalhes",
  "Adesivação comercial",
  "Arte personalizada",
].map((v) => ({ id: v, label: v }));

export const QUOTE_FINISHES: { id: FinishId | "indeciso"; label: string }[] = [
  ...FINISHES.map((f) => ({ id: f.id, label: f.name })),
  { id: "indeciso", label: "Ainda não sei" },
];

export function buildQuoteMessage(q: QuoteState) {
  const service = QUOTE_SERVICES.find((s) => s.id === q.service);
  const clean = (s: string) => s.trim().replace(/\s+/g, " ");
  const lines = ["Olá, Buiu Adesivos! Vim pelo site e quero um orçamento."];
  const details: string[] = [];

  if (service) details.push(`*Serviço:* ${service.label}`);

  if (q.service === "envelopamento") {
    const model = clean(q.model);
    const vehicle = [q.vehicle, model].filter(Boolean).join(" — ");
    if (vehicle) details.push(`*Veículo:* ${vehicle}`);
    if (q.wrapType) details.push(`*Tipo:* ${q.wrapType}`);
    const finish = QUOTE_FINISHES.find((f) => f.id === q.finish);
    if (finish) details.push(`*Acabamento:* ${finish.label}`);
  } else if (q.service && clean(q.size)) {
    details.push(`*Medidas aprox.:* ${clean(q.size)}`);
  }

  if (clean(q.city)) details.push(`*Cidade:* ${clean(q.city)}`);
  if (q.notes.trim()) details.push(`*Detalhes:* ${q.notes.trim()}`);

  if (details.length) lines.push("", ...details);

  const name = clean(q.name);
  lines.push(
    "",
    name
      ? `Meu nome é ${name}. Posso mandar as fotos por aqui.`
      : "Posso mandar as fotos por aqui.",
  );
  return lines.join("\n");
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export const FAQ = [
  {
    q: "Quanto tempo leva um envelopamento?",
    a: "Depende do tamanho da peça e do tipo de acabamento. Envelopamentos parciais costumam ficar prontos em menos tempo que a troca de cor completa — passamos o prazo exato junto do orçamento.",
  },
  {
    q: "O envelopamento danifica a pintura?",
    a: "Não. A película é aplicada sobre a pintura original e, quando removida corretamente, preserva o acabamento de fábrica.",
  },
  {
    q: "Quanto tempo dura a película?",
    a: "Depende do material escolhido, da exposição ao sol e dos cuidados no dia a dia. No orçamento a gente indica a película certa para o seu uso.",
  },
  {
    q: "Como cuidar do veículo envelopado?",
    a: "Prefira lavagem manual com shampoo neutro e evite jato de alta pressão direto nas bordas da película. Ficou alguma dúvida? É só chamar no WhatsApp.",
  },
  {
    q: "Vocês atendem frotas de empresas?",
    a: "Sim. Fazemos identidade visual de frotas, com padronização de todos os veículos e planejamento da aplicação.",
  },
  {
    q: "Fazem fachada e letreiro?",
    a: "Sim. Fazemos fachadas em ACM, letras em relevo (com ou sem iluminação), placas e toldos, com estrutura e instalação.",
  },
  {
    q: "Quais cidades vocês atendem?",
    a: `Atendemos ${AREA}. Confirme a sua cidade pelo WhatsApp.`,
  },
  {
    q: "Como faço um orçamento?",
    a: `Chame no WhatsApp ${PHONE_DISPLAY} ou monte sua mensagem aqui no site. Envie fotos e as medidas aproximadas para agilizar.`,
  },
];
