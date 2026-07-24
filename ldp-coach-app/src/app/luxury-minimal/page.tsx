import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBlock, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Luxury Minimal page (brief #19) — elite restraint, expensed as scarcity.
 * Renders the same eight-section arc as the reference routes (hero → coach
 * intro → method → services → benefits → testimonials → CTA → contact),
 * sourcing every line of copy from `coachContent` and every image from the
 * offline CSS/SVG placeholder primitives. The theme scope
 * (`.theme-luxury-minimal`) is applied by the parent route layout.
 *
 * Composition intent: a single hairline "spine" runs the full page as the
 * signature device — one literal thread of continuity standing in for the
 * ornament this style refuses. The hero is asymmetric (oversized italic
 * serif offset hard-left, not centered). Services breaks from a repeated
 * card grid into a numbered ledger. Color — the one bronze accent — is
 * spent only a handful of times across the entire page.
 */
export default function LuxuryMinimalPage() {
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
    <main className="lm-spine lm-spine-animated mx-auto flex max-w-6xl flex-col gap-32 px-8 py-28 sm:gap-48 sm:px-16 sm:py-40">
      {/* 1. Hero — a thesis, not a centered title: oversized italic serif
          offset hard-left, deliberate asymmetry against generous void. */}
      <section className="grid grid-cols-1 gap-12 pl-8 sm:grid-cols-[1.3fr_0.7fr] sm:gap-8 sm:pl-16">
        <div>
          <span className="lm-eyebrow lm-rise block">
            Coaching Privé — Est.
          </span>
          <h1
            className="lm-rise mt-8 max-w-3xl"
            style={{ animationDelay: "0.15s" }}
          >
            {heroHeadline}
          </h1>
        </div>
        <div
          className="lm-rise flex flex-col justify-end gap-8 sm:pb-3"
          style={{ animationDelay: "0.35s" }}
        >
          <p className="max-w-xs text-base font-light leading-relaxed text-foreground/70">
            {heroSubcopy}
          </p>
          <Button size="lg" className="w-fit">
            {cta.buttonLabel}
          </Button>
        </div>
      </section>

      {/* 2. Coach intro — understated, elite guide. Avatar set apart in
          negative space rather than beside the copy. */}
      <section className="lm-reveal grid grid-cols-1 gap-14 pl-8 sm:grid-cols-[0.9fr_1.6fr] sm:gap-24 sm:pl-16">
        <div className="flex flex-col items-start gap-6">
          <AvatarBlob
            name={coachName}
            size={104}
            color="var(--lm-stone-deep)"
            textColor="var(--foreground)"
          />
          <span className="lm-eyebrow">{coachName}</span>
        </div>
        <div>
          <h2 className="mb-10">{intro.heading}</h2>
          <div className="flex max-w-xl flex-col gap-6">
            {intro.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base font-light leading-relaxed text-foreground/75"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Method — a refined signature. Steps are set as tall vertical
          columns (numeral stacked ABOVE title, hairline capping each), so the
          rhythm reads as a column set, deliberately unlike the horizontal
          invoice rows the Services ledger uses. */}
      <section className="lm-reveal pl-8 sm:pl-16">
        <h2 className="mb-16 max-w-lg">{method.heading}</h2>
        <div className="grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col gap-5 border-b border-border pt-8 pb-12 sm:pr-10"
            >
              <span className="lm-serif text-5xl font-light italic leading-none text-[var(--lm-bronze)]">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-sm font-light leading-relaxed text-foreground/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services — a ledger, not a card grid: the one place the page
          breaks its own column rhythm, prices set right-aligned like a
          private invoice. */}
      <section className="lm-reveal pl-8 sm:pl-16">
        <h2 className="mb-16 max-w-lg">{services.heading}</h2>
        <div className="border-t border-border">
          {services.programs.map((program) => (
            <div
              key={program.name}
              className="grid grid-cols-1 gap-3 border-b border-border py-10 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
            >
              <div>
                <h3 className="mb-3">{program.name}</h3>
                <p className="max-w-md text-sm font-light leading-relaxed text-foreground/70">
                  {program.description}
                </p>
              </div>
              <p className="lm-serif shrink-0 text-xl italic text-foreground/85 sm:text-right">
                {program.priceLabel}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Benefits — implied through quality, stated once each, no icons. */}
      <section className="lm-reveal pl-8 sm:pl-16">
        <h2 className="mb-16 max-w-lg">{benefits.heading}</h2>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2">
          {benefits.items.map((item) => (
            <div key={item.title}>
              <h3 className="mb-3">{item.title}</h3>
              <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — a "maison register" of quiet prestige: the first
          voice set as an oversized display-serif pull-quote, the remaining
          voices kept as hairline-divided register entries with scarce bronze
          Roman numerals. No cards, no avatars, no band — a private ledger of
          clientele rather than a review wall. */}
      <section className="lm-reveal pl-8 sm:pl-16">
        <span className="lm-eyebrow mb-14 block">{testimonials.heading}</span>
        {testimonials.quotes.length > 0 ? (
          <figure className="max-w-4xl border-t border-border pt-12">
            <blockquote className="lm-feature-quote max-w-3xl">
              &ldquo;{testimonials.quotes[0].quote}&rdquo;
            </blockquote>
            <figcaption className="mt-10 flex items-baseline gap-4">
              <span className="lm-index text-lg">I</span>
              <span>
                <span className="text-sm font-normal">
                  {testimonials.quotes[0].name}
                </span>
                <span className="ml-3 text-sm font-light text-muted-foreground">
                  {testimonials.quotes[0].role}
                </span>
              </span>
            </figcaption>
          </figure>
        ) : null}
        <div className="mt-16 grid max-w-4xl grid-cols-1 border-t border-border sm:grid-cols-2">
          {testimonials.quotes.slice(1).map((item, index) => (
            <figure
              key={item.name}
              className="flex flex-col gap-6 border-b border-border py-12 sm:odd:border-r sm:odd:pr-14 sm:even:pl-14"
            >
              <blockquote className="lm-serif text-lg italic leading-snug text-foreground/90">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-baseline gap-4">
                <span className="lm-index text-base">
                  {index === 0 ? "II" : "III"}
                </span>
                <span>
                  <span className="text-sm font-normal">{item.name}</span>
                  <span className="ml-3 text-sm font-light text-muted-foreground">
                    {item.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action — access to something rare, framed with a single
          restrained gradient wash rather than a loud panel. */}
      <section className="lm-reveal relative overflow-hidden border border-border px-8 py-20 pl-8 text-center sm:px-20 sm:py-28 sm:pl-20">
        <GradientBlock
          className="absolute inset-0 -z-10 opacity-[0.14]"
          variant="radial"
          from="var(--lm-bronze)"
          to="transparent"
          aspect="aspect-auto h-full"
        />
        <h2 className="mx-auto max-w-xl">{cta.heading}</h2>
        <p className="mx-auto mb-12 mt-6 max-w-sm text-base font-light leading-relaxed text-foreground/70">
          {cta.subcopy}
        </p>
        <Button size="lg" className="mx-auto w-fit">
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact — a private request, not a public form. */}
      <section className="lm-reveal grid grid-cols-1 gap-14 pl-8 sm:grid-cols-[0.9fr_1.6fr] sm:gap-24 sm:pl-16">
        <div>
          <h2 className="mb-6">{contact.heading}</h2>
          <p className="max-w-sm text-base font-light leading-relaxed text-foreground/70">
            {contact.subcopy}
          </p>
        </div>
        <Card className="border-border bg-card">
          <CardContent className="pt-2">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
