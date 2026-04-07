"use client";

import Image from "next/image";

/** Served from /public — avoids remote image optimizer / CORS issues */
const LOGO_SRC = "/tnc-logo.png";

type LogoProps = {
  size?: "sm" | "md";
  className?: string;
  priority?: boolean;
  /** Subtle pad so a dark mark reads on white/light UI */
  contrastPad?: boolean;
  /** Show “TNC Track” next to the mark */
  showWordmark?: boolean;
  /** Styling for the wordmark text */
  variant?: "nav" | "footer";
};

const sizeMap = {
  sm: "h-9 w-9 min-h-9 min-w-9",
  md: "h-11 w-11 min-h-11 min-w-11",
} as const;

export default function Logo({
  size = "sm",
  className = "",
  priority,
  contrastPad = true,
  showWordmark = true,
  variant = "nav",
}: LogoProps) {
  const box = sizeMap[size];
  const img = (
    <Image
      src={LOGO_SRC}
      alt=""
      width={782}
      height={782}
      className={`${box} object-contain object-center`}
      priority={priority}
      sizes={size === "md" ? "44px" : "36px"}
    />
  );

  const mark = contrastPad ? (
    <span className="inline-flex shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-1 shadow-sm">
      {img}
    </span>
  ) : (
    <span className="inline-flex shrink-0">{img}</span>
  );

  const textSize = size === "md" ? "text-2xl" : "text-xl";
  const wordmark =
    variant === "footer" ? (
      <span className={`font-bold text-slate-900 ${textSize}`}>
        TNC <span className="text-primary">Track</span>
      </span>
    ) : (
      <span className={`font-bold text-foreground ${textSize}`}>
        TNC <span className="text-primary">Track</span>
      </span>
    );

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {mark}
      {showWordmark && wordmark}
    </span>
  );
}
