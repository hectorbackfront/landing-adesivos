import { createFileRoute } from "@tanstack/react-router";

import { AcmPage, ACM_FAQ } from "@/components/site/AcmPage";
import { BRAND, SITE_URL } from "@/components/site/data";

const URL = `${SITE_URL}/fachada-em-acm`;
const TITLE =
  "Fachada em ACM e Revestimento em Piracaia e região | Buiu Adesivos";
const DESCRIPTION =
  "A Buiu Adesivos oferece projeto, fabricação e instalação de fachada em ACM e revestimento, com letreiro e letras em relevo, em Piracaia e região. Peça seu orçamento pelo WhatsApp.";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const Route = createFileRoute("/fachada-em-acm")({
  component: AcmPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Fachada em ACM e revestimento",
            serviceType: "Fachada em ACM",
            provider: { "@id": `${SITE_URL}/#empresa`, name: BRAND },
            areaServed: { "@type": "City", name: "Piracaia" },
            url: URL,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: ACM_FAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]),
      },
    ],
  }),
});
