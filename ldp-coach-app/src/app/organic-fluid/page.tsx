import { Button } from "@/components/ui/button";
import { GradientBlock, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * A hand-drawn-feeling wave used to blend two sections into one another
 * instead of a hard rectangular cut — the brief's "sections that blend and
 * morph into one another." Pure inline SVG, no external asset.
 *
 * `tone` sets the wave's fill via the --of-wave-tone custom property so the
 * wave carries the color of the section it flows INTO — the two neighbours
 * genuinely merge across the seam instead of a mismatched band appearing.
 */
function WaveDivider({
  flip = false,
  tone,
}: {
  flip?: boolean;
  tone?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`of-wave-divider h-16 w-full sm:h-24 ${flip ? "rotate-180" : ""}`}
      style={tone ? { ["--of-wave-tone" as string]: tone } : undefined}
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
 * biomorphic layouts, sections that morph into one another. Every line of
 * copy comes from `coachContent`; every image is an offline CSS/SVG
 * placeholder primitive. The theme scope (`.theme-organic-fluid`) is applied
 * by the parent route layout.
 *
 * Composition intent — no two sections share a recipe, and NOTHING is a
 * straight-edged card grid:
 *  - hero: asymmetric collision of a giant morphing blob and off-axis type;
 *  - intro: off-grid avatar overlapping a text column;
 *  - method: a single flowing river of steps zig-zagging down a gradient spine
 *    (visible on mobile AND desktop);
 *  - services: an asymmetric "stream" — one large lead panel, two trailing
 *    eddies at different offsets (NOT three equal panels);
 *  - benefits: airy scattered pairs with organic number badges;
 *  - testimonials: an overlapping "tidepool" of quote plates — one large lead
 *    quote with two offset satellites at different depths (NOT a 3-card grid);
 *  - cta: a single centered blob-framed statement;
 *  - contact: a soft organic-radius form surface.
 * Section boundaries are waves tinted to their destination, and below-hero
 * sections rise into view with a scroll-driven reveal (of-flow-in).
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

  const heroWords = heroHeadline.split(" ");

  return (
    <main className="flex flex-col">
      {/* 1. Hero — the blob IS the opening statement, type spills off-axis */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28">
        <div
          aria-hidden="true"
          className="of-blob pointer-events-none absolute -right-24 -top-32 h-[26rem] w-[26rem] bg-[var(--of-ochre)] opacity-40 blur-2xl sm:-right-16 sm:-top-40 sm:h-[36rem] sm:w-[36rem]"
        />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="of-rise">
            <h1 className="max-w-2xl">
              {heroWords.map((word, i) => (
                <span
                  key={`${word}-${i}`}
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

      <WaveDivider tone="var(--of-sand-deep)" />

      {/* 2. Coach intro — an off-grid pairing, avatar overlapping the text column */}
      <section className="bg-[var(--of-sand-deep)] px-6 py-20 sm:px-10 sm:py-28">
        <div className="of-flow-in mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-[minmax(0,20rem)_1fr] sm:gap-0">
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

      {/* 3. Method — a single flowing river of steps down a gradient spine.
          The spine is anchored to the left edge on mobile and centered on
          desktop, so the connecting "river" reads at every width. */}
      <section className="relative px-6 py-24 sm:px-10 sm:py-32">
        <div className="of-flow-in mx-auto max-w-3xl">
          <h2 className="text-center">{method.heading}</h2>
          <div className="relative mt-16 flex flex-col gap-14 sm:gap-16">
            <div
              aria-hidden="true"
              className="absolute left-[10px] top-0 h-full w-1 rounded-full bg-gradient-to-b from-[var(--of-clay)] via-[var(--of-sage)] to-[var(--of-ochre)] opacity-40 sm:left-1/2 sm:-translate-x-1/2 sm:opacity-30"
            />
            {method.steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex flex-col gap-3 pl-10 sm:w-[70%] sm:gap-4 sm:pl-0 ${
                  index % 2 === 0
                    ? "sm:items-start sm:self-start sm:text-left"
                    : "sm:items-end sm:self-end sm:text-right"
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

      {/* Wave flows into the dark moss services band — tinted moss so the two
          sections merge across the seam instead of showing a stray band. */}
      <WaveDivider flip tone="var(--of-moss)" />

      {/* 4. Services / programs — an asymmetric "stream", not three equal panels:
          one large lead current, two trailing eddies offset at different depths. */}
      <section className="bg-[var(--of-moss)] px-6 py-24 text-[var(--of-sand)] sm:px-10 sm:py-28">
        <div className="of-flow-in mx-auto max-w-6xl">
          <h2 className="max-w-lg text-[var(--of-sand)]">{services.heading}</h2>
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
            {/* Lead current — the flagship program, given the most water */}
            {services.programs.slice(0, 1).map((program) => (
              <div
                key={program.name}
                className="of-plate of-stream-lead flex flex-col gap-6 bg-[var(--of-sand)]/12 p-9 backdrop-blur-sm sm:p-12"
              >
                <span className="of-eyebrow text-[var(--of-ochre)]">
                  {String(1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl text-[var(--of-sand)] sm:text-3xl">
                  {program.name}
                </h3>
                <p className="max-w-md flex-1 text-lg leading-relaxed text-[var(--of-sand)]/80">
                  {program.description}
                </p>
                <p className="of-serif-accent text-2xl text-[var(--of-ochre)]">
                  {program.priceLabel}
                </p>
              </div>
            ))}
            {/* Two trailing eddies, vertically offset so they read as flow */}
            <div className="flex flex-col gap-8">
              {services.programs.slice(1).map((program, index) => (
                <div
                  key={program.name}
                  className={`of-plate bg-[var(--of-sand)]/10 p-7 backdrop-blur-sm sm:p-8 ${
                    index === 0 ? "of-stream-a lg:ml-8" : "of-stream-b lg:mr-6"
                  }`}
                >
                  <span className="of-eyebrow text-[var(--of-ochre)]">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[var(--of-sand)]">{program.name}</h3>
                  <p className="mt-3 leading-relaxed text-[var(--of-sand)]/75">
                    {program.description}
                  </p>
                  <p className="of-serif-accent mt-4 text-xl text-[var(--of-ochre)]">
                    {program.priceLabel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Benefits — airy, loosely scattered, generous whitespace */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="of-flow-in mx-auto max-w-5xl">
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

      <WaveDivider tone="var(--of-sand-deep)" />

      {/* 6. Testimonials — an overlapping "tidepool" of quote plates, NOT a
          3-card grid: one large lead quote with two offset satellites at
          different depths, plates gently overlapping like water pooling. */}
      <section className="bg-[var(--of-sand-deep)] px-6 py-24 sm:px-10 sm:py-32">
        <div className="of-flow-in mx-auto max-w-5xl">
          <h2 className="mb-16 max-w-lg">{testimonials.heading}</h2>
          {testimonials.quotes.length > 0 && (
            <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-[1.4fr_1fr] sm:gap-6">
              {/* Lead quote — the deepest pool, oversized */}
              <figure className="of-plate of-plate-lead relative z-10 p-9 sm:p-14">
                <span
                  aria-hidden="true"
                  className="of-serif-accent block text-7xl leading-none text-[var(--of-clay)] sm:text-8xl"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-4 text-xl leading-relaxed text-foreground sm:text-2xl">
                  {testimonials.quotes[0].quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <AvatarBlob
                    name={testimonials.quotes[0].name}
                    size={52}
                    color="var(--of-clay)"
                    textColor="var(--primary-foreground)"
                  />
                  <div>
                    <p className="font-bold">{testimonials.quotes[0].name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials.quotes[0].role}
                    </p>
                  </div>
                </figcaption>
              </figure>

              {/* Two satellite quotes in the right column, stacked and aligned
                  to the TOP of the lead plate so they sit "en face" of the big
                  quote rather than cascading far below it. */}
              <div className="relative z-20 flex flex-col gap-6">
                {testimonials.quotes.slice(1).map((item, index) => (
                  <figure
                    key={item.name}
                    className={`of-plate p-7 sm:p-8 ${
                      index === 0 ? "of-plate-a" : "of-plate-b"
                    }`}
                  >
                    <blockquote className="leading-relaxed text-foreground/90">
                      <span
                        aria-hidden="true"
                        className="of-serif-accent mr-1 text-2xl text-[var(--of-clay)]"
                      >
                        &ldquo;
                      </span>
                      {item.quote}
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <AvatarBlob
                        name={item.name}
                        size={40}
                        color="var(--of-sage)"
                        textColor="var(--of-moss)"
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
          )}
        </div>
      </section>

      {/* 7. Call-to-action — a single centered blob-framed statement */}
      <section className="relative overflow-hidden px-6 py-28 text-center sm:px-10 sm:py-36">
        <div
          aria-hidden="true"
          className="of-blob-slow pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 bg-[var(--of-clay)]/12"
        />
        <div className="of-flow-in relative mx-auto max-w-xl">
          <h2 className="mx-auto">{cta.heading}</h2>
          <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-foreground/70">
            {cta.subcopy}
          </p>
          <Button size="lg" className="px-10">
            {cta.buttonLabel}
          </Button>
        </div>
      </section>

      <WaveDivider flip tone="var(--of-sand-deep)" />

      {/* 8. Contact / booking — form as its own soft surface */}
      <section className="bg-[var(--of-sand-deep)] px-6 py-24 sm:px-10 sm:py-28">
        <div className="of-flow-in mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-16">
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
