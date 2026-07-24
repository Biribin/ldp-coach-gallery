import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
 * Kinetic page (brief #12) — motion-driven athletic energy, controlled not
 * chaotic. Keeps the full eight-part content arc (hero -> coach intro ->
 * method -> services -> benefits -> testimonials -> CTA -> contact) sourcing
 * every line of copy from `coachContent` and every image from the offline
 * CSS/SVG placeholder primitives. The theme scope (`.theme-kinetic`) is
 * applied by the parent route layout, not here.
 *
 * COMPOSITION (rework): no two sections share the same recipe.
 *   hero        — asymmetric diagonal split, load-surge (above the fold)
 *   intro       — off-axis portrait + a running "velocity readout" strip
 *   method       — dark diagonal band, horizontal lap track, one-shot sweep
 *   services     — asymmetric 1-feature + 2-stacked split (NOT a 3-card grid)
 *   benefits     — full-bleed track-band numbered VELOCITY LEDGER (rhythm break)
 *   testimonials — continuous velocity REEL marquee (signature, NOT 3 cards)
 *   cta          — full-bleed reverse-slant cobalt
 *   contact      — asymmetric 2-col
 * Below-hero entrances reveal on scroll (see kinetic.css), so momentum builds
 * as you descend rather than firing all at once on load.
 */
export default function KineticPage() {
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

  const [featuredProgram, ...restPrograms] = services.programs;
  // The reel is two IDENTICAL halves so it can translate exactly -50% and loop
  // seamlessly. Each half repeats the (short) quote set enough times that one
  // half alone is wider than any viewport — otherwise on ultra-wide/fullscreen
  // screens the whole reel is narrower than the lane and leaves an empty gap on
  // the right (the reported bug).
  const reelHalf = [
    ...testimonials.quotes,
    ...testimonials.quotes,
    ...testimonials.quotes,
  ];
  const reelQuotes = [...reelHalf, ...reelHalf];

  return (
    <main className="flex flex-col overflow-x-clip">
      {/* 1. Hero — asymmetric diagonal thesis, not a centered title */}
      <section className="relative grid grid-cols-1 gap-10 px-6 pb-20 pt-16 sm:px-10 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4 lg:pb-28">
        <div className="relative z-10">
          <span className="kin-eyebrow kin-surge block">Coaching / En mouvement</span>
          <h1
            className="kin-surge mt-6 max-w-2xl text-foreground"
            style={{ animationDelay: "0.08s" }}
          >
            {heroHeadline}
          </h1>
          <p
            className="kin-surge mt-8 max-w-md text-lg leading-relaxed text-foreground/75"
            style={{ animationDelay: "0.16s" }}
          >
            {heroSubcopy}
          </p>
          <div
            className="kin-surge mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <Button size="lg" className="bg-[var(--kin-cobalt)] px-8 text-primary-foreground">
              {cta.buttonLabel}
            </Button>
            <Button size="lg" variant="outline" className="border-2 px-8">
              {services.heading}
            </Button>
          </div>
        </div>
        {/* Diagonal-cut visual block breaking out of the grid on the right */}
        <div
          className="kin-slant kin-surge relative min-h-[16rem] lg:-mr-10 lg:min-h-0"
          style={{ animationDelay: "0.3s" }}
        >
          <GradientBlock
            aspect="aspect-square"
            className="h-full"
            variant="linear"
            angle={125}
            from="var(--kin-cobalt)"
            via="var(--kin-ink)"
            to="var(--kin-coral)"
          />
        </div>
      </section>

      {/* 2. Coach intro — charged introduction, off-center portrait + a running
          velocity readout strip that echoes the page's momentum thesis */}
      <section className="border-t-2 border-foreground/10 px-6 py-20 sm:px-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="kin-numeral text-3xl">01</span>
          <div className="h-0.5 flex-1 bg-foreground/10" />
        </div>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="kin-surge-scroll order-2 lg:order-1">
            <h2 className="mb-4">{intro.heading}</h2>
            <p className="mb-8 text-sm font-bold uppercase tracking-widest text-[var(--kin-coral)]">
              {coachName}
            </p>
            <div className="flex max-w-xl flex-col gap-5">
              {intro.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-foreground/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <AvatarBlob
            name={coachName}
            size={148}
            color="var(--kin-cobalt)"
            textColor="var(--kin-chalk)"
            className="kin-rise order-1 -rotate-3 lg:order-2"
          />
        </div>
        {/* Velocity readout: the coach's positioning line set as a tracked,
            forward-leaning strip — reinforces "always in motion" without a
            second card grid. */}
        <div className="kin-rise mt-14 flex items-center gap-5 border-t-2 border-foreground/10 pt-8">
          <ShapeGraphic
            shape="line"
            className="h-8 w-8 shrink-0 -rotate-45"
            color="var(--kin-cobalt)"
          />
          <p className="kin-numeral text-xl leading-tight text-foreground sm:text-2xl">
            {tagline}
          </p>
        </div>
      </section>

      {/* 3. Method — diagonal-clipped full-bleed band, horizontal lap track,
          the signature one-shot lane sweep */}
      <section className="kin-slant kin-track -my-6 bg-[var(--kin-ink)] px-6 py-24 text-[var(--kin-chalk)] sm:px-10 sm:py-32">
        <div className="mb-14 flex items-center gap-4">
          <span className="kin-eyebrow text-[var(--kin-lime)]">02 — Le Système</span>
          <div className="h-0.5 flex-1 bg-white/15" />
        </div>
        <h2 className="mb-16 text-[var(--kin-chalk)]">{method.heading}</h2>
        {/* Lap track: steps read left-to-right as a single sequence, each
            hanging off a shared lime baseline rather than sitting in isolated
            equal cards. */}
        <div className="relative">
          {/* Connector rail: centered on the diamond markers' row. The markers
              sit in an h-14 items-center row (height 3.5rem → vertical center at
              1.75rem); the numeral is set leading-none so its box doesn't push
              the row taller. top-7 (1.75rem) places the 2px rail on the diamond
              centers. */}
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[var(--kin-lime)]/30 lg:block" />
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {method.steps.map((step, index) => (
              <div
                key={step.title}
                className="kin-rise relative"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="mb-5 flex h-14 items-center gap-4">
                  <span className="kin-numeral text-5xl leading-none text-[var(--kin-lime)]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="relative z-10 hidden h-3 w-3 rotate-45 bg-[var(--kin-lime)] lg:block" />
                </div>
                <h3 className="text-[var(--kin-chalk)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services / programs — asymmetric feature split: one lead program
          taking the field, the rest stacked as momentum entries beside it.
          Deliberately NOT the equal 3-card grid the audit flagged. */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mb-12 flex items-center gap-4">
          <span className="kin-numeral text-3xl">03</span>
          <div className="h-0.5 flex-1 bg-foreground/10" />
        </div>
        <h2 className="mb-14">{services.heading}</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_1fr]">
          {/* Lead program — enlarged feature block */}
          <Card className="kin-rise flex flex-col justify-between">
            <CardHeader>
              <span className="kin-numeral text-6xl text-[var(--kin-coral)]">01</span>
              <ShapeGraphic
                shape="polygon"
                className="mt-4 h-16 w-16"
                color="var(--kin-cobalt)"
                secondaryColor="var(--kin-coral)"
              />
              <CardTitle className="mt-6 text-3xl">{featuredProgram.name}</CardTitle>
              <CardDescription className="mt-4 max-w-md text-base leading-relaxed">
                {featuredProgram.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Separator className="mb-5" />
              <p className="kin-numeral text-2xl">{featuredProgram.priceLabel}</p>
            </CardContent>
          </Card>
          {/* Supporting programs — stacked momentum entries */}
          <div className="flex flex-col gap-8">
            {restPrograms.map((program, index) => (
              <Card
                key={program.name}
                className="kin-rise flex-1"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="kin-numeral text-3xl text-[var(--kin-coral)]">
                        {(index + 2).toString().padStart(2, "0")}
                      </span>
                      <CardTitle className="mt-2 text-xl">{program.name}</CardTitle>
                    </div>
                    <ShapeGraphic
                      shape={index === 0 ? "triangle" : "rect"}
                      className="h-10 w-10 shrink-0"
                      color="var(--kin-cobalt)"
                    />
                  </div>
                  <CardDescription className="mt-3 leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4" />
                  <p className="kin-numeral text-lg">{program.priceLabel}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits — full-bleed track-band VELOCITY LEDGER: numbered divided
          rows with ghost lane-numerals and forward markers. A true rhythm
          break (deep band, not the near-chalk accent the audit flagged) and a
          different geometry from every other section. */}
      <section className="kin-slant-reverse -my-4 bg-[var(--kin-track-band)] px-6 py-24 text-[var(--kin-chalk)] sm:px-10 sm:py-28">
        <div className="mb-12 flex items-center gap-4">
          <span className="kin-eyebrow text-[var(--kin-lime)]">04 — Les Résultats</span>
          <div className="h-0.5 flex-1 bg-white/15" />
        </div>
        <h2 className="mb-12 text-[var(--kin-chalk)]">{benefits.heading}</h2>
        <div className="border-t border-white/15">
          {benefits.items.map((item, index) => (
            <div
              key={item.title}
              className="kin-ledger-row kin-rise grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 border-b border-white/15 py-7 sm:grid-cols-[5rem_1.1fr_2fr] sm:gap-x-10"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="kin-ledger-num text-4xl sm:text-5xl">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="text-[var(--kin-chalk)]">{item.title}</h3>
              <p className="col-span-2 max-w-xl text-sm leading-relaxed text-white/70 sm:col-span-1 sm:col-start-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — continuous VELOCITY REEL: proof scrolling by on a
          controlled lane, the page never fully stops moving. The signature
          anti-3-card treatment. Hover pauses the reel in place (no jump). */}
      <section className="overflow-hidden py-24">
        <div className="mb-12 flex items-center gap-4 px-6 sm:px-10">
          <span className="kin-numeral text-3xl">05</span>
          <div className="h-0.5 flex-1 bg-foreground/10" />
        </div>
        <h2 className="mb-14 px-6 sm:px-10">{testimonials.heading}</h2>
        <div className="kin-reel-mask">
          <div className="kin-reel gap-6">
            {reelQuotes.map((item, index) => (
              <figure
                key={index}
                aria-hidden={index >= testimonials.quotes.length ? true : undefined}
                className="flex w-[19rem] shrink-0 flex-col gap-5 border-l-2 border-[var(--kin-cobalt)] bg-card px-7 py-8 sm:w-[24rem]"
              >
                <span className="kin-numeral text-5xl leading-none text-[var(--kin-coral)]">
                  &ldquo;
                </span>
                <blockquote className="text-base leading-relaxed text-foreground/85">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-2">
                  <AvatarBlob
                    name={item.name}
                    size={40}
                    color="var(--kin-cobalt)"
                    textColor="var(--kin-chalk)"
                  />
                  <div>
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call-to-action — full-bleed slant, lands with athletic power */}
      <section className="kin-slant -my-4 bg-[var(--kin-cobalt)] px-6 py-24 text-center text-primary-foreground sm:px-10 sm:py-32">
        <span className="kin-eyebrow text-[var(--kin-lime)]">06 — C&apos;est parti</span>
        <h2 className="mx-auto mt-6 max-w-2xl text-primary-foreground">{cta.heading}</h2>
        <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-primary-foreground/85">
          {cta.subcopy}
        </p>
        <Button size="lg" variant="secondary" className="px-10">
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact / booking */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mb-12 flex items-center gap-4">
          <span className="kin-numeral text-3xl">07</span>
          <div className="h-0.5 flex-1 bg-foreground/10" />
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="kin-surge-scroll">
            <h2 className="mb-6">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-foreground/70">
              {contact.subcopy}
            </p>
          </div>
          <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
        </div>
      </section>
    </main>
  );
}
