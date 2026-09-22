import type { CSSProperties, ReactNode } from "react";
import { BTN, cx } from "./classes";
import { wa } from "./data";
import type { ImageSet } from "./media";

/** Ícone oficial do WhatsApp (Simple Icons, CC0) */
export function WhatsIcon({ className }: { className?: string | undefined }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

type PictureProps = {
  img: ImageSet;
  alt: string;
  sizes: string;
  className?: string | undefined;
  imgClassName?: string | undefined;
  style?: CSSProperties | undefined;
  loading?: "lazy" | "eager" | undefined;
  priority?: boolean | undefined;
};

export function Picture({
  img,
  alt,
  sizes,
  className,
  imgClassName,
  style,
  loading = "lazy",
  priority = false,
}: PictureProps) {
  return (
    <picture className={className}>
      {img.avif && <source type="image/avif" srcSet={img.avif} sizes={sizes} />}
      {img.webp && <source type="image/webp" srcSet={img.webp} sizes={sizes} />}
      <img
        src={img.src}
        alt={alt}
        width={img.w}
        height={img.h}
        loading={priority ? "eager" : loading}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
        className={imgClassName}
        style={style}
      />
    </picture>
  );
}

export function WhatsButton({
  msg,
  children,
  size = "md",
  variant = "primary",
  className,
}: {
  msg: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | undefined;
  variant?: "primary" | "ghost" | undefined;
  className?: string | undefined;
}) {
  return (
    <a
      href={wa(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(BTN[variant], BTN.size[size], className)}
    >
      <WhatsIcon className="size-[1.15em] shrink-0 transition-transform duration-300 motion-safe:group-hover/btn:-rotate-8 motion-safe:group-hover/btn:scale-110" />
      {children}
    </a>
  );
}

/** Cabeçalho de seção: número + rótulo + título */
export function SectionIntro({
  num,
  eyebrow,
  title,
  id,
  className,
  children,
}: {
  num: string;
  eyebrow: string;
  title: ReactNode;
  id: string;
  className?: string | undefined;
  children?: ReactNode;
}) {
  return (
    <div className={cx("max-w-3xl", className)} data-reveal="">
      <p className="eyebrow flex items-center gap-3 text-red-text">
        <span className="font-display text-base tracking-normal text-foreground">
          {num}
        </span>
        <span aria-hidden="true" className="h-px w-8 bg-primary" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="display-title mt-5 text-[2.75rem] !leading-[1.18] text-foreground sm:text-6xl lg:text-7xl"
      >
        {title}
      </h2>
      {children && (
        <div className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {children}
        </div>
      )}
    </div>
  );
}
