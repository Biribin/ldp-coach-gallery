import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShapeGraphic, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Flat page (brief #14) — zero depth, bold solid colors, simple iconography,
 * crisp cheerful clarity. Copy is sourced entirely from `coachContent`; the
 * theme scope (`.theme-flat`) is applied by the parent route layout.
 *
 * DEEP RECOMPOSE — the previous version rode the shared 8-section arc with
 * three near-identical card grids (services / benefits / testimonials). This
 * version keeps the "color IS the section boundary" idea but gives every
 * section its OWN geometry so nothing repeats a card-grid recipe:
 *   - hero        : asymmetric thesis + a contained flat "sticker" shape stack
 *   - intro       : 2-col, paragraphs as a numbered flat ledger (not cards)
 *   - method      : the SIGNATURE flat-dial track — a connected horizontal strip
 *   - services    : full-width flat "price tag" rows, one featured & doubled
 *   - benefits    : two-column white flat-pill checklist (dials sized correctly)
 *   - testimonials: ONE oversized featured quote + two quiet tag rows (no grid)
 *   - cta         : centered green block
 *   - contact     : asymmetric 2-col heading + bordered form
 * Below-hero sections carry a scroll-driven `flat-reveal` entrance.
 */
export default function FlatPage() {
  const {
    heroHeadline,
    heroSubcopy,
    coachName,
    intro,
    method,
    services,
    benefits,
    testimonials,
    cta,
    contact,
  } = coachContent;

  const benefitIcons: Array<"circle" | "rect" | "triangle" | "polygon"> = [
    "circle",
    "rect",
    "triangle",
    "polygon",
    "circle",
  ];

  const serviceColors = [
    "var(--flat-blue)",
    "var(--flat-coral)",
    "var(--flat-green)",
  ];

  const [featuredQuote, ...restQuotes] = testimonials.quotes;

  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero — asymmetric thesis, contained flat sticker cluster */}
      <section className="relative overflow-hidden bg-[var(--flat-blue)] px-6 pt-20 pb-24 text-white sm:px-10 sm:pt-28 sm:pb-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="flat-pop flat-eyebrow inline-block rounded-full border-2 border-white px-4 py-1.5">
              Coaching en ligne et en présentiel
            </span>
            <h1
              className="flat-pop mt-8 max-w-2xl text-white"
              style={{ animationDelay: "0.08s" }}
            >
              {heroHeadline}
            </h1>
          </div>
          <p
            className="flat-pop max-w-sm text-lg leading-relaxed text-white/90 lg:mb-2 lg:justify-self-end lg:text-right"
            style={{ animationDelay: "0.18s" }}
          >
            {heroSubcopy}
          </p>
        </div>

        <div
          className="flat-pop mx-auto mt-14 flex max-w-6xl flex-wrap items-center gap-4"
          style={{ animationDelay: "0.26s" }}
        >
          <Button
            size="lg"
            className="bg-[var(--flat-coral)] px-8 text-white hover:bg-[var(--flat-coral)]/90"
          >
            {cta.buttonLabel}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent px-8 text-white hover:bg-white hover:text-[var(--flat-blue)]"
          >
            {services.heading}
          </Button>
        </div>

        {/* Flat sticker cluster — solid shapes, no gradient, kept INSIDE the
            block (overflow-hidden) so it no longer crowds the next seam. */}
        <div
          className="flat-pop pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/4 opacity-90 lg:block"
          style={{ animationDelay: "0.34s" }}
          aria-hidden="true"
        >
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-5">
              <ShapeGraphic shape="circle" color="var(--flat-yellow)" className="h-20 w-20" />
              <ShapeGraphic shape="rect" color="var(--flat-green)" className="h-16 w-16" />
            </div>
            <ShapeGraphic shape="triangle" color="var(--flat-coral)" className="h-32 w-32" />
          </div>
        </div>
      </section>

      {/* 2. Coach intro — flat yellow block; bio as a numbered ledger, not cards */}
      <section className="flat-reveal bg-[var(--flat-yellow)] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16">
          <div className="flex flex-col items-start gap-5">
            <AvatarBlob
              name={coachName}
              size={148}
              color="var(--flat-ink)"
              textColor="var(--flat-yellow)"
              className="rounded-full"
            />
            <span className="flat-chip bg-[var(--flat-ink)] px-4 py-1.5 text-sm text-[var(--flat-yellow)]">
              {coachName}
            </span>
          </div>
          <div>
            <h2 className="mb-8 max-w-xl text-[var(--flat-ink)]">{intro.heading}</h2>
            <ol className="flex flex-col">
              {intro.paragraphs.map((paragraph, index) => (
                <li
                  key={paragraph.slice(0, 24)}
                  className="flex items-start gap-5 border-t-2 border-[var(--flat-ink)] py-6 last:border-b-2"
                >
                  <span className="font-[family-name:var(--font-fredoka)] text-2xl font-bold leading-none text-[var(--flat-blue-ink)]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="max-w-2xl text-base leading-relaxed text-[var(--flat-ink)]">
                    {paragraph}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 3. Method — ink block; the SIGNATURE flat-dial track (connected strip) */}
      <section className="flat-reveal bg-[var(--flat-ink)] px-6 py-20 text-white sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-white">{method.heading}</h2>
          <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* the connecting track line the dials sit on (lg only) */}
            <div
              className="pointer-events-none absolute left-8 right-8 top-8 hidden h-0.5 -translate-y-1/2 bg-white/25 lg:block"
              aria-hidden="true"
            />
            {method.steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-start gap-5">
                <span
                  className="flat-dial bg-[var(--flat-yellow)] text-[var(--flat-ink)]"
                  style={{ borderColor: "white" }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services / programs — paper block; full-width flat "price tag" rows.
          First program is FEATURED (doubled height, its own color fill); the
          rest are quiet ledger rows. No card grid. */}
      <section className="flat-reveal bg-[var(--flat-paper)] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-[var(--flat-ink)]">{services.heading}</h2>
          <ul className="flex flex-col gap-5">
            {services.programs.map((program, index) => {
              const featured = index === 0;
              const color = serviceColors[index % serviceColors.length];
              return (
                <li
                  key={program.name}
                  className={
                    featured
                      ? "rounded-[var(--radius)] border-2 border-[var(--flat-ink)] p-8 text-white sm:p-10"
                      : "flex flex-col gap-4 rounded-[var(--radius)] border-2 border-[var(--flat-ink)] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                  }
                  style={featured ? { backgroundColor: color } : undefined}
                >
                  {featured ? (
                    <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_auto]">
                      <div className="flex flex-col gap-4">
                        <ShapeGraphic shape="rect" color="white" className="h-10 w-10" />
                        <h3 className="text-white">{program.name}</h3>
                        <p className="max-w-xl text-base leading-relaxed text-white/90">
                          {program.description}
                        </p>
                      </div>
                      <span className="flat-chip bg-white px-6 py-2.5 text-lg text-[var(--flat-ink)]">
                        {program.priceLabel}
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-start gap-5">
                        <span
                          className="flat-chip h-11 w-11 shrink-0 text-white"
                          style={{ backgroundColor: color }}
                          aria-hidden="true"
                        >
                          <ShapeGraphic
                            shape={(["circle", "triangle"] as const)[index % 2]}
                            color="white"
                            className="h-5 w-5"
                          />
                        </span>
                        <div>
                          <h3 className="mb-1 text-[var(--flat-ink)]">{program.name}</h3>
                          <p className="max-w-2xl text-sm leading-relaxed text-[var(--flat-ink)]/80">
                            {program.description}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 text-lg font-extrabold text-[var(--flat-ink)]">
                        {program.priceLabel}
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 5. Benefits — coral block; two-column white flat-pill checklist */}
      <section className="flat-reveal bg-[var(--flat-coral)] px-6 py-20 text-white sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-white">{benefits.heading}</h2>
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
            {benefits.items.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 border-t-2 border-white/30 pt-6"
              >
                <span
                  className="flat-dial bg-white text-[var(--flat-coral)]"
                  style={{ "--flat-dial-size": "3rem", borderColor: "white" } as React.CSSProperties}
                >
                  <ShapeGraphic
                    shape={benefitIcons[index % benefitIcons.length]}
                    color="var(--flat-coral)"
                    className="h-6 w-6"
                  />
                </span>
                <div>
                  <h3 className="mb-1 text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/85">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials — blue block; ONE oversized featured quote + two quiet
          tag rows. Deliberately NOT a 3-card grid. */}
      <section className="flat-reveal bg-[var(--flat-blue)] px-6 py-20 text-white sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-white">{testimonials.heading}</h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-stretch">
            {/* Featured quote — big flat quotation glyph, solid paper plate */}
            <figure className="flex flex-col rounded-[var(--radius)] border-2 border-white bg-[var(--flat-paper)] p-8 sm:p-10">
              <span
                className="flat-quote-mark text-[var(--flat-coral)]"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="-mt-4 text-xl leading-relaxed text-[var(--flat-ink)] sm:text-2xl">
                {featuredQuote.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <AvatarBlob
                  name={featuredQuote.name}
                  size={48}
                  color="var(--flat-blue)"
                  textColor="var(--flat-paper)"
                />
                <div>
                  <p className="text-sm font-extrabold text-[var(--flat-ink)]">
                    {featuredQuote.name}
                  </p>
                  <p className="text-xs text-[var(--flat-ink)]/60">
                    {featuredQuote.role}
                  </p>
                </div>
              </figcaption>
            </figure>

            {/* Two quiet tag rows — quotes as flat labeled strips */}
            <div className="flex flex-col gap-5">
              {restQuotes.map((item) => (
                <figure
                  key={item.name}
                  className="flex flex-1 flex-col gap-4 rounded-[var(--radius)] border-2 border-white/50 p-6"
                >
                  <Badge className="w-fit bg-[var(--flat-yellow)] text-[var(--flat-ink)]">
                    Cliente vérifiée
                  </Badge>
                  <blockquote className="text-base leading-relaxed text-white">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-2 text-sm">
                    <span className="font-extrabold text-white">{item.name}</span>
                    <span className="text-white/60">/ {item.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call-to-action — green block, easy and inviting */}
      <section className="flat-reveal bg-[var(--flat-green)] px-6 py-24 text-center text-white sm:px-10 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-white">{cta.heading}</h2>
          <p className="mx-auto mt-5 mb-10 max-w-md leading-relaxed text-white/90">
            {cta.subcopy}
          </p>
          <Button
            size="lg"
            className="bg-[var(--flat-ink)] px-10 text-white hover:bg-[var(--flat-ink)]/85"
          >
            {cta.buttonLabel}
          </Button>
        </div>
      </section>

      {/* 8. Contact / booking — paper block, plain and clear */}
      <section className="flat-reveal bg-[var(--flat-paper)] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="mb-6 text-[var(--flat-ink)]">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-muted-foreground">
              {contact.subcopy}
            </p>
          </div>
          <div className="rounded-[var(--radius)] border-2 border-[var(--flat-ink)] bg-white p-8">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
