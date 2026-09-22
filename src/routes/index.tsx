import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useMemo, useState } from "react";

import { Contact } from "@/components/site/Contact";
import { SiteContext, type SiteActions } from "@/components/site/context";
import {
  AREA,
  BRAND,
  EMPTY_QUOTE,
  INSTAGRAM_URL,
  SERVICES,
  SITE_URL,
  WHATS,
  WORKS,
  type QuoteState,
} from "@/components/site/data";
import { Faq } from "@/components/site/Faq";
import { FloatingWhats, Toast } from "@/components/site/Floating";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { prefersReducedMotion, useRevealAll } from "@/components/site/hooks";
import { Lightbox } from "@/components/site/Lightbox";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Quote } from "@/components/site/Quote";
import { Services } from "@/components/site/Services";
import { Showcase } from "@/components/site/Showcase";
import { Tapes } from "@/components/site/Tapes";
import { Wrap } from "@/components/site/Wrap";

const TITLE = "Buiu Adesivos | Envelopamento e Comunicação Visual";
const DESCRIPTION =
  "Especialista em envelopamento de carros, motos e frotas. Fachadas em ACM, letras em relevo, adesivos, papel de parede e insulfilm. Orçamento rápido pelo WhatsApp.";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      {
        property: "og:description",
        content:
          "Envelopamento de veículos e frotas, fachadas, letras em relevo e adesivos com acabamento profissional. Orçamento pelo WhatsApp.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Buiu Adesivos — Seu veículo. Sua marca. Seu estilo.",
      },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#empresa`,
          name: BRAND,
          description:
            "Especializada em envelopamento de veículos e comunicação visual.",
          url: `${SITE_URL}/`,
          image: OG_IMAGE,
          logo: `${SITE_URL}/icon-512.png`,
          telephone: `+${WHATS}`,
          areaServed: AREA,
          sameAs: [INSTAGRAM_URL],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: `+${WHATS}`,
            contactType: "customer service",
            availableLanguage: "Portuguese",
          },
          makesOffer: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.text,
            },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  const [quote, setQuote] = useState<QuoteState>(EMPTY_QUOTE);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useRevealAll();

  const actions = useMemo<SiteActions>(
    () => ({
      presetQuote: (patch) => {
        setQuote((q) => ({ ...q, ...patch }));
        requestAnimationFrame(() => {
          document.getElementById("orcamento")?.scrollIntoView({
            behavior: prefersReducedMotion() ? "auto" : "smooth",
            block: "start",
          });
        });
      },
      openWork: (id) => {
        const i = WORKS.findIndex((w) => w.id === id);
        if (i >= 0) setLightbox(i);
      },
      toast: (message) => setToastMsg(message),
    }),
    [],
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const clearToast = useCallback(() => setToastMsg(null), []);

  return (
    <SiteContext.Provider value={actions}>
      <div className="min-h-screen bg-background">
        <Header />
        <main id="conteudo">
          <Hero />
          <Tapes />
          <Wrap />
          <Portfolio />
          <Showcase />
          <Services />
          <Process />
          <Quote state={quote} setState={setQuote} />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <FloatingWhats />
        <Lightbox
          index={lightbox}
          onClose={closeLightbox}
          onIndex={setLightbox}
        />
        <Toast message={toastMsg} onDone={clearToast} />
      </div>
    </SiteContext.Provider>
  );
}
