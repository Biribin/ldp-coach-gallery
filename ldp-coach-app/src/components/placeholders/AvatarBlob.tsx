import { cn } from "@/lib/utils";

export type AvatarBlobProps = {
  className?: string;
  /** Name used to derive displayed initials. */
  name: string;
  /** Primary background color (CSS color value). */
  color?: string;
  /** Text color for the initials. */
  textColor?: string;
  /** Size in pixels (square). Defaults to 64. */
  size?: number;
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase();
}

/**
 * Offline person stand-in: a CSS/SVG-only avatar blob showing initials.
 * Used wherever a "coach photo" or "client photo" would go, since real
 * photos are out of scope for this project. Zero network requests.
 */
export function AvatarBlob({
  className,
  name,
  color = "var(--primary)",
  textColor = "var(--primary-foreground)",
  size = 64,
}: AvatarBlobProps) {
  const initials = getInitials(name);

  return (
    <svg
      aria-hidden="true"
      role="img"
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{name}</title>
      <circle cx="50" cy="50" r="48" fill={color} />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        fontSize="34"
        fontWeight="700"
        fontFamily="var(--font-sans, sans-serif)"
      >
        {initials}
      </text>
    </svg>
  );
}
