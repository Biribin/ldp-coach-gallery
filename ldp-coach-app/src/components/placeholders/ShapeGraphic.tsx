import { cn } from "@/lib/utils";

export type ShapeGraphicShape = "circle" | "rect" | "triangle" | "polygon" | "line";

export type ShapeGraphicProps = {
  className?: string;
  shape?: ShapeGraphicShape;
  /** Primary fill/stroke color (CSS color value). */
  color?: string;
  /** Secondary color used for polygon/triangle accent variants. */
  secondaryColor?: string;
  /** SVG viewBox size (square). Defaults to 100. */
  size?: number;
};

/**
 * Offline imagery primitive: inline <svg> geometric shapes.
 * Pure inline SVG markup — no external <image>/href to remote assets.
 */
export function ShapeGraphic({
  className,
  shape = "circle",
  color = "var(--primary)",
  secondaryColor = "var(--accent)",
  size = 100,
}: ShapeGraphicProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {shape === "circle" && (
        <circle cx={size / 2} cy={size / 2} r={size / 2.4} fill={color} />
      )}
      {shape === "rect" && (
        <rect
          x={size * 0.1}
          y={size * 0.1}
          width={size * 0.8}
          height={size * 0.8}
          fill={color}
        />
      )}
      {shape === "triangle" && (
        <polygon
          points={`${size / 2},${size * 0.08} ${size * 0.92},${size * 0.92} ${size * 0.08},${size * 0.92}`}
          fill={color}
        />
      )}
      {shape === "polygon" && (
        <>
          <polygon
            points={`${size * 0.5},${size * 0.02} ${size * 0.98},${size * 0.38} ${size * 0.8},${size * 0.96} ${size * 0.2},${size * 0.96} ${size * 0.02},${size * 0.38}`}
            fill={color}
          />
          <circle cx={size * 0.5} cy={size * 0.5} r={size * 0.12} fill={secondaryColor} />
        </>
      )}
      {shape === "line" && (
        <line
          x1={size * 0.05}
          y1={size * 0.95}
          x2={size * 0.95}
          y2={size * 0.05}
          stroke={color}
          strokeWidth={size * 0.06}
        />
      )}
    </svg>
  );
}
