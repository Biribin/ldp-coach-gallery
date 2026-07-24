import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GradientBlock, ShapeGraphic, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Metropolitan page (brief #25) — urban sophistication, cultural depth.
 * Renders the same eight-section arc as the reference routes (hero → coach
 * intro → method → services → benefits → testimonials → CTA → contact),
 * sourcing every line of copy from `coachContent` and every image from the
 * offline CSS/SVG placeholder primitives. The theme scope
 * (`.theme-metropolitan`) is applied by the parent route layout, not here.
 *
 * Composition intent: a vertical brass "avenue line" runs the spine of the
 * page like a street dividing cultural districts — cross-street ticks mark
 * where a section begins. Rhythm alternates full-bleed ink-dark blocks
 * against contained panels; the services section breaks the grid into an
 * uneven-height "skyline" row instead of matching cards.
 */
export default function MetropolitanPage() {
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

  return (
    <main className="flex flex-col">
      {/* 1. Hero — thesis: an oversized, asymmetric skyline headline, not a
          centered box. Type dominates; imagery is a slim vertical strip. */}
      <section className="relative overflow-hidden border-b border-[var(--met-line)] px-6 pt-20 pb-16 sm:px-12 sm:pt-28 sm:pb-24 lg:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-8">
          <div>
            <span className="met-district met-rise">{coachName}</span>
            <h1 className="met-rise mt-8 max-w-4xl" style={{ animationDelay: "0.08s" }}>
              {heroHeadline}
            </h1>
            <p
              className="met-rise mt-9 max-w-lg text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: "0.16s" }}
            >
              {heroSubcopy}
            </p>
            <div
              className="met-rise mt-11 flex flex-wrap gap-4"
              style={{ animationDelay: "0.24s" }}
            >
              <Button size="lg" className="px-8">
                {cta.buttonLabel}
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                {services.heading}
              </Button>
            </div>
          </div>
          <div className="met-rise hidden lg:block" style={{ animationDelay: "0.3s" }}>
            <GradientBlock
              aspect="aspect-[3/5]"
              variant="linear"
              angle={165}
              from="var(--met-bordeaux-deep)"
              via="oklch(0.24 0.03 264)"
              to="var(--background)"
            />
          </div>
        </div>
      </section>

      {/* 2. Coach intro — the avenue line begins here and runs the page. */}
      <section className="relative border-b border-[var(--met-line)] px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="met-avenue left-6 sm:left-12 lg:left-20" />
        <div className="met-reveal mx-auto max-w-7xl pl-8 sm:pl-14">
          <span className="met-district">District 01 — La Coach</span>
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
            <AvatarBlob
              name={coachName}
              size={148}
              color="var(--met-bordeaux)"
              textColor="var(--foreground)"
              className="ring-1 ring-[var(--met-line)]"
            />
            <div>
              <h2 className="max-w-2xl">{intro.heading}</h2>
              <p className="met-serif-accent mt-5 text-lg text-[var(--met-brass)]">
                {coachName}
              </p>
              <div className="mt-8 flex max-w-2xl flex-col gap-5">
                {intro.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-foreground/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Method — a horizontal strip of four steps sharing one top baseline
          (numerals, titles and body all start aligned across the row). */}
      <section className="relative border-b border-[var(--met-line)] bg-[var(--met-surface-raised)] px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="met-avenue left-6 sm:left-12 lg:left-20" />
        <div className="met-reveal mx-auto max-w-7xl pl-8 sm:pl-14">
          <span className="met-district">District 02 — La Méthode</span>
          <h2 className="mt-10 max-w-2xl">{method.heading}</h2>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-[var(--met-line)] bg-[var(--met-line)] sm:grid-cols-4">
            {method.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 bg-[var(--background)] px-6 py-10 sm:py-14"
              >
                <span className="met-serif-accent text-5xl leading-none text-[var(--met-brass)]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services / programs — breaks the grid: one wide feature block
          beside two stacked blocks, not three matching cards. */}
      <section className="relative border-b border-[var(--met-line)] px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="met-avenue left-6 sm:left-12 lg:left-20" />
        <div className="met-reveal mx-auto max-w-7xl pl-8 sm:pl-14">
          <span className="met-district">District 03 — Programmes</span>
          <h2 className="mt-10 max-w-2xl">{services.heading}</h2>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.programs.map((program, index) => (
              <Card
                key={program.name}
                className={index === 0 ? "lg:col-span-2" : undefined}
              >
                <CardHeader className={index === 0 ? "lg:pr-24" : undefined}>
                  <ShapeGraphic
                    shape={index === 0 ? "polygon" : index === 1 ? "triangle" : "rect"}
                    className="mb-8 h-12 w-12"
                    color="var(--met-brass)"
                    secondaryColor="var(--met-bordeaux)"
                  />
                  <CardTitle className="text-2xl">{program.name}</CardTitle>
                  <CardDescription className="mt-4 leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="met-hairline mb-5" />
                  <p className="met-serif-accent text-xl text-[var(--met-brass)]">
                    {program.priceLabel}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits — a dense two-column ledger, no cards, quieter rhythm. */}
      <section className="relative border-b border-[var(--met-line)] bg-[var(--met-surface-raised)] px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="met-avenue left-6 sm:left-12 lg:left-20" />
        <div className="met-reveal mx-auto max-w-7xl pl-8 sm:pl-14">
          <span className="met-district">District 04 — Pourquoi elles restent</span>
          <h2 className="mt-10 max-w-2xl">{benefits.heading}</h2>
          <div className="mt-16 divide-y divide-[var(--met-line)] border-y border-[var(--met-line)]">
            {benefits.items.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-3 py-7 sm:grid-cols-[3rem_1fr_2fr] sm:items-baseline sm:gap-8"
              >
                <span className="met-serif-accent text-sm text-[var(--met-brass)]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-lg">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials — the "district gallery wall": one large featured
          placard beside two stacked placards, keeping the avenue spine so the
          street stays continuous through the section. Bordeaux plaques with a
          brass top-rule read as cultural-district signage, not a card grid. */}
      <section className="relative border-b border-[var(--met-line)] bg-[var(--met-bordeaux-deep)] px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="met-avenue left-6 sm:left-12 lg:left-20" />
        <div className="met-reveal mx-auto max-w-7xl pl-8 sm:pl-14">
          <span className="met-district">District 05 — Résultats clients</span>
          <h2 className="mt-10 max-w-2xl">{testimonials.heading}</h2>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_1fr]">
            {testimonials.quotes.slice(0, 1).map((item, index) => (
              <figure key={item.name} className="met-placard met-placard-lead">
                <div className="flex items-baseline justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="met-serif-accent text-7xl leading-none text-[var(--met-brass)]"
                  >
                    &ldquo;
                  </span>
                  <span className="met-placard-index text-2xl">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <blockquote className="text-xl leading-relaxed text-foreground/95 sm:text-2xl">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-[var(--met-brass)]/20 pt-6">
                  <AvatarBlob
                    name={item.name}
                    size={44}
                    color="var(--met-brass)"
                    textColor="var(--met-bordeaux-deep)"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-foreground/60">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
            <div className="flex flex-col gap-6">
              {testimonials.quotes.slice(1).map((item, index) => (
                <figure key={item.name} className="met-placard flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <blockquote className="leading-relaxed text-foreground/90">
                      {item.quote}
                    </blockquote>
                    <span className="met-placard-index shrink-0 text-lg">
                      {(index + 2).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <figcaption className="mt-auto flex items-center gap-3 border-t border-[var(--met-brass)]/20 pt-5">
                    <AvatarBlob
                      name={item.name}
                      size={36}
                      color="var(--met-brass)"
                      textColor="var(--met-bordeaux-deep)"
                    />
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-foreground/60">{item.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call-to-action — stark brass-on-ink block, no card framing. */}
      <section className="border-b border-[var(--met-line)] bg-[var(--met-brass)] px-6 py-20 text-center sm:px-12 sm:py-28 lg:px-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-[var(--met-bordeaux-deep)]">{cta.heading}</h2>
          <p className="mt-5 leading-relaxed text-[var(--met-bordeaux-deep)]/80">
            {cta.subcopy}
          </p>
          <Button
            size="lg"
            className="mt-10 border border-[var(--met-bordeaux-deep)] bg-[var(--met-bordeaux-deep)] px-8 text-[var(--met-brass)] hover:bg-[var(--met-bordeaux-deep)]/85"
          >
            {cta.buttonLabel}
          </Button>
        </div>
      </section>

      {/* 8. Contact / booking */}
      <section className="relative px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="met-avenue left-6 sm:left-12 lg:left-20" />
        <div className="met-reveal mx-auto max-w-7xl pl-8 sm:pl-14">
          <span className="met-district">District 06 — Contact</span>
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <h2 className="max-w-md">{contact.heading}</h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                {contact.subcopy}
              </p>
            </div>
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
