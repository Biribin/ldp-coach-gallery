import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GradientBlock, ShapeGraphic, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Neobrutalist landing page (brief #17) — DEEP recompose.
 *
 * The old build rode the shared 8-section vertical arc: three near-identical
 * card grids (method / services / testimonials) and every block framed the same
 * way, so variety came only from fill color. This rework keeps ALL eight pieces
 * of content but gives each section genuinely different geometry drawn from the
 * neobrutalist vocabulary:
 *   - hero: asymmetric stacked slab + corner polygon bleed (signature)
 *   - marquee: hard-scrolling ticker band (signature motion moment)
 *   - intro: offset overlap — avatar plate crashing into a text slab
 *   - method: full-width numbered LEDGER rows w/ hairline-mortar seams (no grid)
 *   - services: offset diagonal poster STACK, alternating fills (no card grid)
 *   - benefits: dense 2-col struck-out list on the lime block
 *   - testimonials: ONE giant feature quote SLAB + stacked attribution tabs
 *   - cta / contact: stark blocks
 * The theme scope (`.theme-neobrutalist`) is applied by the route layout.
 */
export default function NeobrutalistPage() {
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

  // Marquee band content — reuse existing copy, no invented fields. Duplicated
  // once so the -50% keyframe loops seamlessly.
  const marqueeWords = benefits.items.map((b) => b.title);

  // Featured testimonial (the big slab) + the rest (stacked tabs).
  const [leadQuote, ...restQuotes] = testimonials.quotes;

  // Alternating saturated fills for the offset service stack.
  const serviceFills = [
    "bg-primary text-primary-foreground",
    "bg-accent text-accent-foreground",
    "bg-secondary text-secondary-foreground",
  ];

  // Method ledger rows rotate through the theme's own palette so consecutive
  // blocks don't repeat the same violet fill.
  const methodFills = [
    "bg-secondary text-secondary-foreground",
    "bg-primary text-primary-foreground",
    "bg-card text-foreground",
    "bg-accent text-accent-foreground",
  ];

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 sm:py-24">
      {/* 1. HERO — asymmetric stacked slab, oversized headline, corner bleed */}
      <section className="relative overflow-hidden border-4 border-foreground bg-card p-8 nb-shadow sm:p-14">
        <div className="pointer-events-none absolute -top-12 -right-12 hidden w-44 rotate-12 opacity-95 sm:block">
          <ShapeGraphic shape="polygon" color="var(--secondary)" secondaryColor="var(--accent)" />
        </div>
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <Badge variant="outline" className="mb-6 bg-accent text-accent-foreground">
              Zéro excuse / Zéro tendance
            </Badge>
            <h1 className="max-w-4xl text-foreground">{heroHeadline}</h1>
            <p className="mt-6 max-w-xl text-lg font-medium text-foreground/80">{heroSubcopy}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground">
                {cta.buttonLabel}
              </Button>
              <Button size="lg" variant="outline">
                {services.heading}
              </Button>
            </div>
          </div>
          {/* Vertical tagline slab — hard offset, its own tiny universe */}
          <div className="hidden self-stretch border-4 border-foreground bg-secondary p-5 text-secondary-foreground nb-shadow-left lg:flex lg:flex-col lg:justify-between">
            <span className="nb-numeral text-6xl">17</span>
            <p className="mt-6 text-sm font-bold uppercase leading-tight tracking-wide">
              {tagline}
            </p>
          </div>
        </div>
        <GradientBlock
          className="mt-14 border-4 border-foreground"
          variant="linear"
          from="var(--primary)"
          via="var(--secondary)"
          to="var(--accent)"
        />
      </section>

      {/* SIGNATURE — hard-scrolling brutalist marquee band */}
      <section
        aria-hidden="true"
        className="nb-reveal nb-marquee -mx-6 border-y-4 border-foreground bg-primary text-primary-foreground sm:-mx-10"
      >
        <div className="nb-marquee-track">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="nb-marquee-item">
              {word}
              <ShapeGraphic
                shape="triangle"
                className="inline-block h-6 w-6"
                color="var(--foreground)"
              />
            </span>
          ))}
        </div>
      </section>

      {/* 2. COACH INTRO — offset overlap: avatar plate crashing a text slab */}
      <section className="nb-reveal relative">
        <div className="relative z-10 border-4 border-foreground bg-card p-8 nb-shadow sm:p-12 sm:pl-40">
          <p className="mb-2 text-sm font-black uppercase tracking-widest text-foreground">
            {coachName}
          </p>
          <h2 className="mb-6">{intro.heading}</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {intro.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-foreground/85">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        {/* Avatar plate overlapping the top-left corner of the slab */}
        <div className="relative z-20 -mt-10 ml-4 w-fit border-4 border-foreground bg-accent p-1 nb-shadow-sm sm:absolute sm:top-10 sm:-left-6 sm:mt-0">
          <AvatarBlob
            name={coachName}
            size={128}
            color="var(--accent)"
            textColor="var(--foreground)"
          />
        </div>
      </section>

      {/* 3. METHOD — full-width numbered LEDGER rows, hairline-mortar seams */}
      <section className="nb-reveal">
        <h2 className="mb-8">{method.heading}</h2>
        <div className="border-4 border-foreground nb-shadow">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex flex-col gap-4 border-foreground p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8 [&:not(:last-child)]:border-b-4 ${methodFills[index % methodFills.length]}`}
            >
              <span className="nb-numeral shrink-0 text-6xl sm:w-32 sm:text-8xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 sm:flex sm:items-baseline sm:gap-8">
                <h3 className="mb-2 text-2xl sm:mb-0 sm:w-44 sm:shrink-0">{step.title}</h3>
                <p className="opacity-85 sm:flex-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES — offset diagonal poster STACK, alternating fills */}
      <section className="nb-reveal">
        <h2 className="mb-10">{services.heading}</h2>
        <div className="flex flex-col gap-8">
          {services.programs.map((program, index) => (
            <div
              key={program.name}
              className={`nb-press border-4 border-foreground p-6 nb-shadow sm:p-8 ${serviceFills[index % serviceFills.length]} ${
                index === 1 ? "sm:ml-16" : index === 2 ? "sm:ml-32" : ""
              }`}
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center border-4 border-foreground bg-background">
                    <ShapeGraphic
                      shape={index === 0 ? "circle" : index === 1 ? "triangle" : "rect"}
                      className="h-9 w-9"
                      color="var(--foreground)"
                    />
                  </span>
                  <div>
                    <h3 className="text-2xl">{program.name}</h3>
                    <p className="mt-1 max-w-md text-sm opacity-90">{program.description}</p>
                  </div>
                </div>
                <p className="nb-numeral shrink-0 whitespace-nowrap border-4 border-foreground bg-background px-4 py-2 text-xl text-foreground uppercase">
                  {program.priceLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BENEFITS — dense struck two-column list on a dark/near-black block */}
      <section className="nb-reveal border-4 border-foreground bg-foreground p-8 text-background nb-shadow sm:p-12">
        <h2 className="mb-10 text-background">{benefits.heading}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2">
          {benefits.items.map((item, index) => (
            <li
              key={item.title}
              className="flex items-start gap-4 border-background/40 py-5 [&:not(:last-child)]:border-b-4 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:odd:border-r-4 sm:odd:pr-8 sm:even:pl-8"
            >
              <span className="nb-numeral shrink-0 text-3xl text-background">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-1 text-lg text-background">{item.title}</h3>
                <p className="text-sm text-background/80">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. TESTIMONIALS — ONE feature SLAB + stacked attribution tabs (no grid) */}
      <section className="nb-reveal">
        <h2 className="mb-10">{testimonials.heading}</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          {/* The big quote slab */}
          <figure className="relative border-4 border-foreground bg-foreground p-8 text-background nb-shadow sm:p-12">
            <span
              aria-hidden="true"
              className="nb-numeral pointer-events-none absolute -top-6 left-6 text-8xl text-primary"
            >
              &ldquo;
            </span>
            <blockquote className="mt-6 text-2xl font-bold leading-tight sm:text-3xl">
              {leadQuote.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t-4 border-background/40 pt-6">
              <AvatarBlob name={leadQuote.name} size={52} />
              <span className="text-sm font-bold uppercase tracking-wide">
                {leadQuote.name} — {leadQuote.role}
              </span>
            </figcaption>
          </figure>
          {/* Stacked attribution tabs for the remaining quotes */}
          <div className="flex flex-col gap-6">
            {restQuotes.map((item, index) => (
              <figure
                key={item.name}
                className={`nb-press border-4 border-foreground p-6 nb-shadow-sm ${
                  index === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                <blockquote className="text-base font-bold leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs font-bold uppercase tracking-wide">
                  {item.name} / {item.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL-TO-ACTION — stark full block, centered demand */}
      <section className="nb-reveal border-4 border-foreground bg-primary p-10 text-center text-primary-foreground nb-shadow sm:p-16">
        <h2 className="mb-4">{cta.heading}</h2>
        <p className="mx-auto mb-8 max-w-xl text-lg font-medium">{cta.subcopy}</p>
        <Button size="lg" variant="secondary">
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. CONTACT / booking */}
      <section className="nb-reveal border-4 border-foreground bg-card p-8 nb-shadow sm:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="mb-3">{contact.heading}</h2>
            <p className="max-w-md text-foreground/80">{contact.subcopy}</p>
          </div>
          <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
        </div>
      </section>
    </main>
  );
}
