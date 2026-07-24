import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBlock, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * A hand-drawn-feeling wave used to blend two sections into one another
 * instead of a hard rectangular cut — the brief's "sections that blend and
 * morph into one another." Pure inline SVG, no external asset.
 */
function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`of-wave-divider h-16 w-full sm:h-24 ${flip ? "rotate-180" : ""}`}
    >
      <path
        d="M0,64 C240,120 480,8 720,48 C960,88 1200,32 1440,72 L1440,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Organic/Fluid page (brief #22) — flowing blob shapes, natural curves,
 * biomorphic layouts. Renders the same eight-section arc as the reference
 * routes (hero -> coach intro -> method -> services -> benefits ->
 * testimonials -> CTA -> contact), sourcing every line of copy from
 * `coachContent` and every image from the offline CSS/SVG placeholder
 * primitives. The theme scope (`.theme-organic-fluid`) is applied by the
 * parent route layout, not here.
 *
 * Composition intent: nothing here is a straight-edged box. The hero is an
 * asymmetric collision of a giant morphing blob and off-axis type; every
 * section boundary is a wave, not a line; cards carry organic asymmetric
 * radii instead of uniform rounding; the method steps sit inside a single
 * flowing river shape rather than a repeated card grid, so section rhythm
 * genuinely varies (full-bleed blob vs. contained grid vs. dense list vs.
 * airy single column).
 */
export default function OrganicFluidPage() {
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
      {/* 1. Hero — a thesis: the blob IS the opening statement, type spills off-axis */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28">
        <div
          aria-hidden="true"
          className="of-blob pointer-events-none absolute -right-24 -top-32 h-[26rem] w-[26rem] bg-[var(--of-ochre)] opacity-40 blur-2xl sm:-right-16 sm:-top-40 sm:h-[36rem] sm:w-[36rem]"
        />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="of-rise">
            <h1 className="max-w-2xl">
              {heroHeadline.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={i % 3 === 1 ? "of-serif-accent text-[var(--of-clay)]" : ""}
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground/75">
              {heroSubcopy}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="px-9">
                {cta.buttonLabel}
              </Button>
              <Button size="lg" variant="outline" className="px-9">
                {services.heading}
              </Button>
            </div>
          </div>
          <div
            className="of-rise relative mx-auto aspect-square w-full max-w-sm"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="of-blob-slow absolute inset-0 bg-[var(--of-sage)]/50" />
            <div className="of-blob absolute inset-6 overflow-hidden shadow-[var(--of-shadow-lift)]">
              <GradientBlock
                aspect="aspect-square"
                variant="radial"
                from="var(--of-clay)"
                via="var(--of-ochre)"
                to="var(--of-sage)"
                className="h-full rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* 2. Coach intro — an off-grid pairing, avatar overlapping the text column */}
      <section className="bg-[var(--of-sand-deep)] px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-[minmax(0,20rem)_1fr] sm:gap-0">
          <div className="relative mx-auto -mb-10 sm:mx-0 sm:mb-0 sm:self-end">
            <div className="of-blob absolute -inset-4 bg-[var(--of-clay)]/25" />
            <AvatarBlob
              name={coachName}
              size={176}
              color="var(--of-clay)"
              textColor="var(--primary-foreground)"
              className="relative"
            />
          </div>
          <div className="sm:pl-14">
            <span className="of-eyebrow">{intro.heading}</span>
            <p className="mt-4 text-sm font-bold tracking-wide text-foreground">
              {coachName}
            </p>
            <div className="mt-6 flex max-w-xl flex-col gap-5">
              {intro.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-foreground/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Method — a single flowing river of steps, not a card grid */}
      <section className="relative px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center">{method.heading}</h2>
          <div className="relative mt-16 flex flex-col gap-16">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-[var(--of-clay)] via-[var(--of-sage)] to-[var(--of-ochre)] opacity-30 sm:block"
            />
            {method.steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex flex-col items-center gap-4 text-center sm:w-[70%] ${
                  index % 2 === 0 ? "sm:self-start sm:items-start sm:text-left" : "sm:self-end sm:items-end sm:text-right"
                }`}
              >
                <span className="of-serif-accent text-6xl leading-none text-[var(--of-clay)]/70">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p className="max-w-sm leading-relaxed text-foreground/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* 4. Services / programs — three organic panels, dense and full-bleed */}
      <section className="bg-[var(--of-moss)] px-6 py-24 text-[var(--of-sand)] sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-lg text-[var(--of-sand)]">{services.heading}</h2>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {services.programs.map((program, index) => (
              <div
                key={program.name}
                className="flex flex-col gap-4 bg-[var(--of-sand)]/10 p-8 backdrop-blur-sm"
                style={{
                  borderRadius:
                    index % 2 === 0
                      ? "48px 24px 48px 24px / 32px 48px 24px 48px"
                      : "24px 48px 24px 48px / 48px 24px 48px 24px",
                }}
              >
                <h3 className="text-[var(--of-sand)]">{program.name}</h3>
                <p className="flex-1 leading-relaxed text-[var(--of-sand)]/75">
                  {program.description}
                </p>
                <p className="of-serif-accent text-xl text-[var(--of-ochre)]">
                  {program.priceLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits — airy, loosely scattered, generous whitespace */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center">{benefits.heading}</h2>
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
            {benefits.items.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-start gap-5 ${index % 2 === 1 ? "sm:mt-10" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center bg-[var(--of-sage)]/35 text-lg font-bold text-[var(--of-moss)]"
                  style={{ borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%" }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="max-w-xs leading-relaxed text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* 6. Testimonials — dense, contained, three flowing panels */}
      <section className="bg-[var(--of-sand-deep)] px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-center">{testimonials.heading}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.quotes.map((item) => (
              <Card key={item.name}>
                <CardContent className="flex flex-col gap-5">
                  <span
                    aria-hidden="true"
                    className="of-serif-accent text-5xl leading-none text-[var(--of-clay)]"
                  >
                    &ldquo;
                  </span>
                  <p className="leading-relaxed text-foreground/85">{item.quote}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <AvatarBlob
                      name={item.name}
                      size={44}
                      color="var(--of-sage)"
                      textColor="var(--of-moss)"
                    />
                    <div>
                      <p className="text-sm font-bold">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call-to-action — a single centered blob-framed statement */}
      <section className="relative overflow-hidden px-6 py-28 text-center sm:px-10 sm:py-36">
        <div
          aria-hidden="true"
          className="of-blob-slow pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 bg-[var(--of-clay)]/12"
        />
        <div className="relative mx-auto max-w-xl">
          <h2 className="mx-auto">{cta.heading}</h2>
          <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-foreground/70">
            {cta.subcopy}
          </p>
          <Button size="lg" className="px-10">
            {cta.buttonLabel}
          </Button>
        </div>
      </section>

      <WaveDivider flip />

      {/* 8. Contact / booking — form as its own soft surface */}
      <section className="bg-[var(--of-sand-deep)] px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-16">
          <div>
            <h2 className="mb-6">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-foreground/70">
              {contact.subcopy}
            </p>
          </div>
          <div
            className="bg-card p-8 shadow-[var(--of-shadow-soft)] sm:p-10"
            style={{ borderRadius: "40px 56px 40px 56px / 48px 40px 56px 40px" }}
          >
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
