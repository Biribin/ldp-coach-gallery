/**
 * Barrel for offline CSS/SVG placeholder primitives (SCAF-05, PAGE-06).
 * All imagery in the gallery flows through these three primitives — zero
 * image files, zero remote URLs, zero network requests.
 */

export { GradientBlock } from "./GradientBlock";
export type { GradientBlockProps, GradientBlockVariant } from "./GradientBlock";

export { ShapeGraphic } from "./ShapeGraphic";
export type { ShapeGraphicProps, ShapeGraphicShape } from "./ShapeGraphic";

export { AvatarBlob } from "./AvatarBlob";
export type { AvatarBlobProps } from "./AvatarBlob";
