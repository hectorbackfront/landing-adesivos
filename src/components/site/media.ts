import logo160 from "@/assets/brand/logo-buiu-160.webp";
import logo240 from "@/assets/brand/logo-buiu-240.webp";
import logo469 from "@/assets/brand/logo-buiu-469.webp";
import utvMp4 from "@/assets/video/utv-wrap.mp4";
import utvWebm from "@/assets/video/utv-wrap.webm";
import printFlames from "@/assets/textures/print-flames.webp";

/**
 * Todas as imagens do site (AVIF + WebP em várias larguras).
 * Nome dos arquivos: <nome>-<largura>.<formato> ou só <nome>.<formato>
 * (para um trabalho novo basta soltar um .jpg/.webp em src/assets/works).
 */
const files = import.meta.glob<string>(
  "../../assets/{hero,works,video}/*.{avif,webp,jpg,jpeg,png}",
  { eager: true, import: "default" },
);

export type ImageSet = {
  avif: string;
  webp: string;
  /** fallback: maior WebP */
  src: string;
  w: number;
  h: number;
};

export function imageSet(
  dir: string,
  name: string,
  w: number,
  h: number,
): ImageSet {
  const re = new RegExp(
    `/${dir}/${name}(?:-(\\d+))?\\.(avif|webp|jpe?g|png)$`,
    "i",
  );
  const found: { width: number; fmt: string; url: string }[] = [];
  for (const [path, url] of Object.entries(files)) {
    const m = path.match(re);
    if (!m) continue;
    const fmt = (m[2] ?? "").toLowerCase();
    found.push({ width: m[1] ? Number(m[1]) : w, fmt, url });
  }
  found.sort((a, b) => a.width - b.width);
  const srcset = (fmt: string) =>
    found
      .filter((f) => f.fmt === fmt)
      .map((f) => `${f.url} ${f.width}w`)
      .join(", ");
  const webps = found.filter((f) => f.fmt === "webp");
  return {
    avif: srcset("avif"),
    webp: srcset("webp"),
    src: (webps[webps.length - 1] ?? found[found.length - 1])?.url ?? "",
    w,
    h,
  };
}

export const HERO_DESKTOP = imageSet("hero", "hero", 1600, 1104);
export const HERO_MOBILE = imageSet("hero", "hero-m", 800, 1104);
export const UTV_POSTER = imageSet("video", "utv-poster", 478, 850);

export const LOGO = {
  small: logo160,
  medium: logo240,
  large: logo469,
  /** header: ~80px no celular, ~100px no desktop */
  headerSrcSet: `${logo160} 160w, ${logo240} 240w`,
};
export const UTV_VIDEO = {
  webm: utvWebm,
  mp4: utvMp4,
  webmType: 'video/webm; codecs="av01.0.04M.08"',
  mp4Type: 'video/mp4; codecs="avc1.64001F"',
};
export const PRINT_TEXTURE = printFlames;
