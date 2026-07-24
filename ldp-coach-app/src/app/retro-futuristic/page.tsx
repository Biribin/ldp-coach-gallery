import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShapeGraphic, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Retro-futuristic page (brief #08) — 80s vision of the future, refined
 * nostalgia. Renders the same eight-section arc as the reference routes
 * (hero → coach intro → method → services → benefits → testimonials → CTA →
 * contact), sourcing every line of copy from `coachContent` and every visual
 * from the offline placeholder primitives. The theme scope
 * (`.theme-retro-futuristic`) is applied by the parent route layout.
 *
 * Signature device: `.rf-horizon` + `.rf-sun` — a chrome sun sinking behind a
 * perspective grid floor, anchoring the hero and echoed as the CTA's closing
 * horizon. Section rhythm deliberately varies: full-bleed horizon hero,
 * bordered intro grid, numbered stacked method, three-card services, dense
 * icon-led benefit grid, quote cards, full-bleed horizon CTA, boxed contact
 * console.
 */
export default function RetroFuturisticPage() {
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
      {/* 1. Hero — full-bleed horizon + chrome sun, the signature moment.
          Content is anchored near the top (justify-start + a modest top pad) so
          the headline sits high and there's no large empty band above it. */}
      <section className="rf-horizon relative flex min-h-[82vh] flex-col justify-start overflow-hidden px-6 pb-24 pt-16 sm:px-10 sm:pt-20">
        <div aria-hidden="true" className="rf-sun" />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <span className="rf-eyebrow rf-rise block">Coaching / Transformation</span>
          <h1 className="rf-rise mt-6 max-w-4xl" style={{ animationDelay: "0.1s" }}>
            {heroHeadline}
          </h1>
          <p
            className="rf-rise mt-8 max-w-xl text-lg leading-relaxed text-foreground/80"
            style={{ animationDelay: "0.2s" }}
          >
            {heroSubcopy}
          </p>
          <div className="rf-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="px-8">
              {cta.buttonLabel}
            </Button>
            <Button size="lg" variant="outline" className="rf-btn-outline px-8">
              {services.heading}
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-28 px-6 py-24 sm:gap-36 sm:px-10 sm:py-32">
        {/* 2. Coach intro — bordered chrome panel, asymmetric */}
        <section>
          <div className="rf-reveal mb-12 flex items-center gap-4">
            <span className="rf-eyebrow rf-eyebrow--magenta">01 / La Coach</span>
            <div className="rf-rule flex-1" />
          </div>
          <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
            <div className="relative w-fit rounded-full shadow-[var(--rf-glow-magenta)]">
              <AvatarBlob
                name={coachName}
                size={140}
                color="var(--rf-magenta)"
                textColor="oklch(0.13 0.03 320)"
                className="ring-2 ring-[var(--rf-cyan)]"
              />
            </div>
            <div className="border-l border-[var(--rf-hairline)] pl-10 sm:pl-16">
              <h2 className="mb-4">{intro.heading}</h2>
              <p className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-[var(--rf-cyan)]">
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
          </div>
        </section>

        {/* 3. Method — numbered stacked sequence, chrome-gradient numerals */}
        <section>
          <div className="rf-reveal mb-12 flex items-center gap-4">
            <span className="rf-eyebrow">02 / La Méthode</span>
            <div className="rf-rule flex-1" />
          </div>
          <h2 className="mb-14">{method.heading}</h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--rf-hairline)] bg-[var(--rf-hairline)] sm:grid-cols-2">
            {method.steps.map((step, index) => (
              <div key={step.title} className="flex gap-6 bg-[var(--rf-night)] p-8">
                <span className="rf-num text-5xl leading-none">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2 text-foreground">{step.title}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-foreground/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Services / programs — three chrome cards */}
        <section>
          <div className="rf-reveal mb-12 flex items-center gap-4">
            <span className="rf-eyebrow rf-eyebrow--magenta">03 / Programmes</span>
            <div className="rf-rule flex-1" />
          </div>
          <h2 className="mb-14">{services.heading}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
            {services.programs.map((program, index) => (
              <Card key={program.name} className="text-left">
                <CardHeader>
                  <ShapeGraphic
                    shape={index === 0 ? "triangle" : index === 1 ? "polygon" : "circle"}
                    className="mb-6 h-10 w-10"
                    color="var(--rf-magenta)"
                    secondaryColor="var(--rf-cyan)"
                  />
                  <CardTitle className="text-xl">{program.name}</CardTitle>
                  <CardDescription className="mt-3 leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="rf-rule mb-5" />
                  <p
                    className="text-lg font-bold uppercase tracking-wide text-[var(--rf-gold)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {program.priceLabel}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. Benefits — dense icon-led grid */}
        <section>
          <div className="rf-reveal mb-12 flex items-center gap-4">
            <span className="rf-eyebrow">04 / Pourquoi elles restent</span>
            <div className="rf-rule flex-1" />
          </div>
          <h2 className="mb-14">{benefits.heading}</h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius)] border border-[var(--rf-hairline)] bg-[var(--rf-night-deep)] p-6"
              >
                <span
                  aria-hidden="true"
                  className="mb-4 block h-1.5 w-8 rounded-full bg-[var(--rf-cyan)]"
                  style={{ boxShadow: "var(--rf-glow-cyan)" }}
                />
                <h3 className="mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 6. Testimonials — full-bleed "signal log": each result is a scanline
          transmission row with a glowing channel index + chrome callsign,
          not a card grid. Distinct synthwave broadcast-readout treatment. */}
      <section className="rf-log">
        <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 sm:py-28">
          <div className="rf-reveal mb-12 flex flex-wrap items-center gap-4">
            <span className="rf-eyebrow rf-eyebrow--magenta">05 / Résultats</span>
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-foreground/60" style={{ fontFamily: "var(--font-heading)" }}>
              <span aria-hidden="true" className="rf-live" />
              Signal en direct
            </span>
            <div className="rf-rule flex-1" />
          </div>
          <h2 className="mb-14">{testimonials.heading}</h2>
          <div className="border-t border-[var(--rf-hairline)]">
            {testimonials.quotes.map((item, index) => (
              <article
                key={item.name}
                className="rf-signal rf-reveal grid grid-cols-1 gap-6 py-9 sm:grid-cols-[6.5rem_1fr] sm:gap-10 sm:py-11"
              >
                <div className="flex flex-col gap-3 sm:items-start">
                  <AvatarBlob
                    name={item.name}
                    size={44}
                    color="var(--rf-cyan)"
                    textColor="oklch(0.13 0.03 320)"
                  />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
                    <span
                      aria-hidden="true"
                      className="mr-1 align-baseline text-[var(--rf-magenta)]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      &ldquo;
                    </span>
                    {item.quote}
                  </p>
                  <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span
                      className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--rf-cyan)]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.name}
                    </span>
                    <span aria-hidden="true" className="text-foreground/30">
                      &mdash;
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {item.role}
                    </span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call-to-action — full-bleed horizon, closing echo of the hero */}
      <section className="rf-horizon relative flex min-h-[68vh] flex-col items-center justify-start overflow-hidden px-6 pb-24 pt-20 text-center sm:px-10 sm:pt-24">
        <div aria-hidden="true" className="rf-sun" style={{ bottom: "-10%" }} />
        <div className="relative z-10 mx-auto max-w-xl">
          <span className="rf-eyebrow">06 / Commencer</span>
          {/* Heading + subcopy sit ABOVE the sun (content anchored to the top of
              the band); the button falls lower, landing over the sun. */}
          <h2 className="mx-auto mt-6">{cta.heading}</h2>
          <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-foreground/80">
            {cta.subcopy}
          </p>
          <Button size="lg" className="px-8">
            {cta.buttonLabel}
          </Button>
        </div>
      </section>

      {/* 8. Contact / booking — boxed console */}
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <section>
          <div className="mb-12 flex items-center gap-4">
            <span className="rf-eyebrow rf-eyebrow--magenta">07 / Transmettre</span>
            <div className="rf-rule flex-1" />
          </div>
          <div className="grid grid-cols-1 gap-12 rounded-[var(--radius)] border border-[var(--rf-hairline)] bg-[var(--rf-night-deep)] p-8 sm:grid-cols-[1fr_1.1fr] sm:gap-16 sm:p-14">
            <div>
              <h2 className="mb-6">{contact.heading}</h2>
              <p className="max-w-md leading-relaxed text-foreground/75">{contact.subcopy}</p>
              <div className="mt-8">
                <Badge
                  variant="outline"
                  className="border-[var(--rf-cyan)] bg-transparent text-[var(--rf-cyan)]"
                >
                  En ligne et en présentiel
                </Badge>
              </div>
            </div>
            <div>
              <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
