import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShapeGraphic, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Neo-Geo page (brief #02) — refined geometric patterns, mathematical rhythm,
 * precise color-blocked shapes. Renders the same eight-section arc as the
 * reference routes (hero → coach intro → method → services → benefits →
 * testimonials → CTA → contact), sourcing every line of copy from
 * `coachContent` and every visual from the offline placeholder primitives plus
 * inline SVG. The theme scope (`.theme-neo-geo`) is applied by the parent route
 * layout, not here.
 *
 * Composition intent vs. the other routes: structure through the GRID and
 * through interlocking flat color-blocked shapes, not through soft breathing
 * (japandi) or heavy black offset frames (neobrutalist). Sections are modular
 * blocks ruled by hairlines on a graph field; a strict four-color system
 * (cobalt / vermilion / amber / ink) energizes the order without breaking it;
 * the arc reads like an elegant proof descending toward a solved-equation CTA.
 */

const BLOCKS = [
  "var(--ng-cobalt)",
  "var(--ng-vermilion)",
  "var(--ng-amber)",
  "var(--ng-teal)",
] as const;

// Readable foreground for text sitting ON a saturated block. Cobalt / vermilion
// / teal are dark enough for a near-white cap; amber (lightness ~0.83) needs the
// ink foreground to clear AA. Keyed by index into BLOCKS.
const ON_BLOCK_TEXT = [
  "oklch(0.99 0.005 250)",
  "oklch(0.99 0.005 250)",
  "var(--ng-ink)",
  "oklch(0.99 0.005 250)",
] as const;

/** A tessellated color-blocked motif — pure inline SVG, no external assets. */
function TessellationMotif({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* interlocking quarter-circles + squares — a precise repeating cell */}
      <rect x="0" y="0" width="60" height="60" fill="var(--ng-cobalt)" />
      <path d="M60 0 A60 60 0 0 1 0 60 L0 0 Z" fill="var(--ng-amber)" />
      <rect x="60" y="60" width="60" height="60" fill="var(--ng-vermilion)" />
      <path
        d="M60 120 A60 60 0 0 1 120 60 L120 120 Z"
        fill="var(--ng-cobalt)"
      />
      <circle cx="60" cy="60" r="18" fill="var(--background)" />
      <circle
        cx="60"
        cy="60"
        r="18"
        fill="none"
        stroke="var(--ng-ink)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/** Two interlocking outlined rings + a filled square — the hero's engineered
 * centerpiece; rotates slowly under .ng-rotate. Inline SVG only. */
function InterlockRings({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="34"
        y="34"
        width="132"
        height="132"
        fill="none"
        stroke="var(--ng-ink)"
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="var(--ng-cobalt)"
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="100"
        r="52"
        fill="none"
        stroke="var(--ng-vermilion)"
        strokeWidth="2"
      />
      <rect x="76" y="76" width="48" height="48" fill="var(--ng-amber)" />
    </svg>
  );
}

export default function NeoGeoPage() {
  const {
    heroHeadline,
    heroSubcopy,
    coachName,
    tagline,
    intro,
    method,
    services,
    benefits,
    testimonials,
    cta,
    contact,
  } = coachContent;

  return (
    <main className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
      {/* 1. Hero — a striking, pattern-driven first impression */}
      <section className="relative overflow-hidden border-x border-[var(--ng-line-strong)]">
        <div className="ng-graph absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative grid grid-cols-1 gap-10 px-6 pb-16 pt-20 sm:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8 lg:pb-24 lg:pt-28">
          <div>
            <span className="ng-eyebrow ng-snap-in inline-block">
              Neo-Geo · Transformation structurée
            </span>
            <h1
              className="ng-snap-in mt-6 max-w-2xl text-foreground"
              style={{ animationDelay: "0.06s" }}
            >
              {heroHeadline}
            </h1>
            <p
              className="ng-snap-in mt-7 max-w-md text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: "0.12s" }}
            >
              {heroSubcopy}
            </p>
            <div
              className="ng-snap-in mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "0.18s" }}
            >
              <Button size="lg" className="px-8">
                {cta.buttonLabel}
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                {services.heading}
              </Button>
            </div>
            {/* Color-block legend — the four-color system, stated as a key */}
            <div
              className="ng-snap-in mt-14 flex items-center gap-0 border border-[var(--ng-line-strong)]"
              style={{ animationDelay: "0.24s" }}
            >
              {BLOCKS.map((c, i) => (
                <span
                  key={c}
                  aria-hidden="true"
                  className="h-9 flex-1 border-r border-[var(--ng-line-strong)] last:border-r-0"
                  style={{ background: c }}
                >
                  {i === 3 ? <span className="ng-hatch block h-full w-full" /> : null}
                </span>
              ))}
            </div>
          </div>
          {/* Interlocking engineered centerpiece */}
          <div
            className="ng-snap-in relative mx-auto aspect-square w-full max-w-sm"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="ng-dots absolute inset-4 opacity-60" aria-hidden="true" />
            <InterlockRings className="ng-rotate relative h-full w-full" />
          </div>
        </div>
      </section>

      {/* 2. Coach intro — the architect of a system */}
      <section className="grid grid-cols-1 border-x border-b border-[var(--ng-line-strong)] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative flex items-center justify-center border-b border-[var(--ng-line-strong)] bg-primary/5 p-10 lg:border-b-0 lg:border-r">
          <div className="ng-dots absolute inset-0 opacity-40" aria-hidden="true" />
          <AvatarBlob
            name={coachName}
            size={168}
            color="var(--ng-cobalt)"
            textColor="oklch(0.99 0.005 250)"
            className="relative ng-frame"
          />
        </div>
        <div className="ng-reveal p-8 sm:p-12">
          <div className="mb-8 flex items-center gap-4">
            <span className="ng-eyebrow">01 / L&apos;Architecte</span>
            <div className="ng-rule flex-1" />
          </div>
          <h2 className="max-w-xl">{intro.heading}</h2>
          <p className="mt-3 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-[0.18em] text-[var(--ng-vermilion)]">
            {coachName} — {tagline}
          </p>
          <div className="mt-8 grid gap-5">
            {intro.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-2xl leading-relaxed text-muted-foreground"
              >
                <span className="ng-index mr-3 align-baseline text-base text-[var(--ng-cobalt)]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Method — an elegant structure, an ordered proof */}
      <section className="border-x border-b border-[var(--ng-line-strong)] p-8 sm:p-12">
        <div className="mb-10 flex items-center gap-4">
          <span className="ng-eyebrow">02 / Le Système</span>
          <div className="ng-rule flex-1" />
        </div>
        <h2 className="mb-12 max-w-2xl">{method.heading}</h2>
        <div className="grid grid-cols-1 gap-px bg-[var(--ng-line-strong)] sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="ng-reveal group relative flex flex-col gap-5 bg-card p-7"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* index numeral + a color-blocked geometric marker per step */}
              <div className="flex items-start justify-between">
                <span
                  className="ng-index text-5xl"
                  style={{ color: BLOCKS[index % BLOCKS.length] }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <ShapeGraphic
                  shape={
                    (["rect", "circle", "triangle", "polygon"] as const)[
                      index % 4
                    ]
                  }
                  className="h-8 w-8"
                  color={BLOCKS[index % BLOCKS.length]}
                />
              </div>
              <div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mt-auto h-1 w-full"
                style={{ background: BLOCKS[index % BLOCKS.length] }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — clear geometric modules */}
      <section className="border-x border-b border-[var(--ng-line-strong)] p-8 sm:p-12">
        <div className="mb-10 flex items-center gap-4">
          <span className="ng-eyebrow">03 / Modules</span>
          <div className="ng-rule flex-1" />
        </div>
        <h2 className="mb-12 max-w-2xl">{services.heading}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.programs.map((program, index) => (
            <Card
              key={program.name}
              className="ng-reveal flex flex-col overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* color-blocked header band — precise, saturated, framed */}
              <div
                aria-hidden="true"
                className="relative h-24 border-b border-[var(--ng-line-strong)]"
                style={{ background: BLOCKS[index % BLOCKS.length] }}
              >
                <TessellationMotif className="absolute right-3 top-3 h-16 w-16 opacity-90" />
                {/* Numeral on a small framed plaque — predictable legibility on
                    every band hue, replacing the mix-blend-difference gamble. */}
                <span
                  className="ng-index absolute bottom-2 left-2 flex h-9 min-w-9 items-center justify-center border border-[var(--ng-ink)] bg-[var(--background)] px-2 text-2xl text-foreground"
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{program.name}</CardTitle>
                <CardDescription className="mt-2 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="ng-rule mb-4" />
                <p className="ng-index text-lg text-foreground">
                  {program.priceLabel}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. Benefits — logical outcomes, laid out on the grid */}
      <section className="border-x border-b border-[var(--ng-line-strong)] p-8 sm:p-12">
        <div className="mb-10 flex items-center gap-4">
          <span className="ng-eyebrow">04 / Résultats</span>
          <div className="ng-rule flex-1" />
        </div>
        <h2 className="mb-12 max-w-2xl">{benefits.heading}</h2>
        {/* Distinct from the method hairline-mortar grid: a divided coordinate
            ledger — each outcome a full-width row addressed by an index and a
            color axis-bar, read like results tabulated in sequence. */}
        <div className="border-t border-[var(--ng-line-strong)]">
          {benefits.items.map((item, index) => {
            const block = BLOCKS[index % BLOCKS.length];
            return (
              <div
                key={item.title}
                className="ng-reveal grid grid-cols-[auto_1fr] items-start gap-5 border-b border-[var(--ng-line-strong)] py-6 sm:grid-cols-[3.5rem_auto_1fr] sm:gap-8"
                style={{ animationDelay: `${index * 0.04}s` }}
              >
                <span
                  className="ng-index text-3xl leading-none sm:text-4xl"
                  style={{ color: block }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {/* color axis-bar + shape marker */}
                <div className="col-start-1 row-start-2 flex items-center gap-3 sm:col-start-2 sm:row-start-1">
                  <span
                    aria-hidden="true"
                    className="h-7 w-1.5"
                    style={{ background: block }}
                  />
                  <ShapeGraphic
                    shape={
                      (
                        ["circle", "rect", "triangle", "polygon", "line"] as const
                      )[index % 5]
                    }
                    className="h-6 w-6 shrink-0"
                    color={block}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h3 className="mb-1.5">{item.title}</h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Testimonials — credibility as verified data, plotted on the field.
          NOT a 3-card grid: a coordinate register where each quote is an entry
          anchored to a color-coded plot point on the graph, read like data
          samples on an axis rather than equal marketing cards. */}
      <section className="relative overflow-hidden border-x border-b border-[var(--ng-line-strong)] p-8 sm:p-12">
        <div className="ng-graph absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative">
          <div className="mb-10 flex items-center gap-4">
            <span className="ng-eyebrow">05 / Vérifié</span>
            <div className="ng-rule flex-1" />
          </div>
          <h2 className="mb-4 max-w-2xl">{testimonials.heading}</h2>
          <p className="ng-index mb-10 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Résultats représentés · n = {testimonials.quotes.length.toString().padStart(2, "0")}
          </p>
          {/* Register: a divided vertical stack, each row an offset "sample"
              carrying its own axis coordinate + plotted color point. */}
          <div className="border-t border-[var(--ng-line-strong)]">
            {testimonials.quotes.map((item, index) => {
              const block = BLOCKS[index % BLOCKS.length];
              return (
                <article
                  key={item.name}
                  className="ng-reveal grid grid-cols-1 gap-5 border-b border-[var(--ng-line-strong)] py-8 sm:grid-cols-[auto_1fr] sm:gap-8"
                  style={{ animationDelay: `${index * 0.04}s` }}
                >
                  {/* Coordinate + plotted point — the "data sample" address */}
                  <div className="flex items-center gap-4 sm:w-40 sm:flex-col sm:items-start sm:gap-3">
                    <span
                      className="ng-index text-4xl leading-none"
                      style={{ color: block }}
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="ng-plot"
                        style={{ background: block }}
                      />
                      <span className="ng-index text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        x{(index + 1).toString().padStart(2, "0")} · y
                        {(testimonials.quotes.length - index)
                          .toString()
                          .padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  {/* The quote itself — the sampled value */}
                  <div className="max-w-3xl">
                    <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                      <span
                        aria-hidden="true"
                        className="ng-index mr-2 align-baseline text-2xl"
                        style={{ color: block }}
                      >
                        &ldquo;
                      </span>
                      {item.quote}
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <AvatarBlob
                        name={item.name}
                        size={36}
                        color={block}
                        textColor={ON_BLOCK_TEXT[index % ON_BLOCK_TEXT.length]}
                        className="ng-frame"
                      />
                      <p className="font-[family-name:var(--font-heading)] text-sm font-bold">
                        {item.name}
                        <span className="ml-2 font-normal text-muted-foreground">
                          — {item.role}
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Call-to-action — lands with the crispness of a solved equation */}
      <section className="relative overflow-hidden border-x border-b border-[var(--ng-line-strong)] bg-[var(--ng-ink)] text-[var(--background)]">
        <div className="ng-graph absolute inset-0 opacity-[0.12]" aria-hidden="true" />
        <div className="relative grid grid-cols-1 items-center gap-10 p-10 sm:p-16 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="ng-reveal">
            <span className="ng-eyebrow text-[var(--ng-amber)]">
              06 / La Solution
            </span>
            <h2 className="mt-6 max-w-xl text-[var(--background)]">
              {cta.heading}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-[var(--background)]/70">
              {cta.subcopy}
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                className="bg-[var(--ng-amber)] px-9 text-[var(--ng-ink)] hover:bg-[var(--ng-amber)]"
              >
                {cta.buttonLabel}
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[220px]">
            <TessellationMotif className="ng-rotate-rev h-full w-full" />
          </div>
        </div>
      </section>

      {/* 8. Contact / booking */}
      <section className="grid grid-cols-1 border-x border-b border-[var(--ng-line-strong)] lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative border-b border-[var(--ng-line-strong)] p-8 sm:p-12 lg:border-b-0 lg:border-r">
          <div className="mb-8 flex items-center gap-4">
            <span className="ng-eyebrow">07 / Contact</span>
            <div className="ng-rule flex-1" />
          </div>
          <h2 className="max-w-sm">{contact.heading}</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
            {contact.subcopy}
          </p>
          <div className="ng-dots mt-10 h-24 w-full opacity-60" aria-hidden="true" />
        </div>
        <div className="p-8 sm:p-12">
          <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
        </div>
      </section>
    </main>
  );
}
