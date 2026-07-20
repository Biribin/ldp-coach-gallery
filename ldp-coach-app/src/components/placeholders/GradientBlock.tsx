import { cn } from "@/lib/utils";

export type GradientBlockVariant = "linear" | "radial" | "conic";

export type GradientBlockProps = {
  className?: string;
  /** CSS color/gradient-stop for the gradient start. */
  from?: string;
  /** CSS color/gradient-stop for the gradient middle (optional). */
  via?: string;
  /** CSS color/gradient-stop for the gradient end. */
  to?: string;
  /** Gradient shape. Defaults to "linear". */
  variant?: GradientBlockVariant;
  /** Angle for linear gradients (degrees). Defaults to 135. */
  angle?: number;
  /** Optional aspect-ratio utility class override, e.g. "aspect-square". */
  aspect?: string;
};

/**
 * Offline imagery primitive: a <div> whose "image" is a pure CSS gradient.
 * Zero network requests, zero image files, zero remote URLs.
 */
export function GradientBlock({
  className,
  from = "var(--primary)",
  via,
  to = "var(--accent)",
  variant = "linear",
  angle = 135,
  aspect = "aspect-video",
}: GradientBlockProps) {
  const stops = via ? `${from}, ${via}, ${to}` : `${from}, ${to}`;
  const backgroundImage =
    variant === "radial"
      ? `radial-gradient(circle, ${stops})`
      : variant === "conic"
        ? `conic-gradient(from ${angle}deg, ${stops})`
        : `linear-gradient(${angle}deg, ${stops})`;

  return (
    <div
      aria-hidden="true"
      className={cn(aspect, "w-full rounded-none", className)}
      style={{ backgroundImage }}
    />
  );
}
