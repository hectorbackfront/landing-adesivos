# Buiu Adesivos — site

Landing page da **Buiu Adesivos** (envelopamento e comunicação visual).
No ar em https://buiu-adesivos.vercel.app

## Onde editar

| O quê                                                | Arquivo                                             |
| ---------------------------------------------------- | --------------------------------------------------- |
| Telefone, WhatsApp, Instagram, endereço do site      | `src/components/site/data.ts` (topo do arquivo)     |
| Textos de serviços, portfólio, processo e FAQ        | `src/components/site/data.ts`                       |
| Layout de cada seção                                 | `src/components/site/*.tsx` (uma seção por arquivo) |
| Cores, fontes e animações                            | `src/styles.css`                                    |
| Imagem que aparece ao compartilhar o link (WhatsApp) | `public/og-image.jpg` (1200 × 630)                  |

### Colocar um trabalho novo no portfólio

1. Salve a foto em `src/assets/works/` com um nome simples, ex.: `padaria-central.jpg`
   (ou gere versões otimizadas `padaria-central-480.webp`, `-800.webp`… como as que já estão lá).
2. Em `src/components/site/data.ts`, adicione um item na lista `WORKS` com `image: "padaria-central"`,
   título, categoria (`tag`), descrição e o tamanho original da foto (`w` e `h`).

### Trocar o domínio

Se o site ganhar domínio próprio, troque `SITE_URL` em `src/components/site/data.ts`
e o endereço em `public/sitemap.xml` e `public/robots.txt`.

## Rodar localmente

```sh
bun install   # ou npm i
bun run dev   # ou npm run dev
```

## Feito com

- TanStack Start + React
- TypeScript
- Tailwind CSS
- Fontes self-hosted (Anton, Barlow, Barlow Condensed)

---

Projeto conectado ao [Lovable](https://lovable.dev): alterações feitas lá entram direto neste repositório
e vice-versa.
