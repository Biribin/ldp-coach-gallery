import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

const TONE_STEPS = [
  "var(--mono-100)",
  "var(--mono-200)",
  "var(--mono-400)",
  "var(--mono-600)",
  "var(--mono-800)",
  "var(--mono-950)",
];

function StepDots() {
  return (
    <span className="mono-step-dots" aria-hidden="true">
      {TONE_STEPS.map((tone, i) => (
        <span key={i} style={{ background: tone }} />
      ))}
    </span>
  );
}

/**
 * Monochromatic page (brief #16) — one hue, explored across its full tonal
 * range. Renders the same eight-section arc as the reference routes (hero →
 * coach intro → method → services → benefits → testimonials → CTA →
 * contact), sourcing every line of copy from `coachContent` and every image
 * from the offline CSS/SVG placeholder primitives (no gradient imagery here —
 * a second "color" trick would undercut the brief, so depth comes only from
 * the six flat tonal bands and the ruler/step-dot device). The theme scope
 * (`.theme-monochromatic`) is applied by the parent route layout.
 *
 * Composition intent: the page literally descends through its own tonal
 * scale as you scroll — hero opens on the palest tint, benefits breaks the
 * grid with a full-bleed sweep across all six steps at once, CTA lands on
 * the deepest shade — so the scrolling experience itself performs "a single
 * hue explored fully," distinct from japandi's warm neutrals or any other
 * page's use of color as decoration.
 */
export default function MonochromaticPage() {
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
      {/* 1. Hero — thesis: the tonal ruler IS the image, asymmetric scale */}
      <section className="mono-band-100 grid grid-cols-1 gap-10 px-6 pb-24 pt-20 sm:grid-cols-[1fr_auto] sm:gap-16 sm:px-10 sm:pb-32 sm:pt-28 lg:px-16">
        <div className="max-w-3xl">
          <span className="mono-eyebrow mono-rise">{coachName}</span>
          <h1 className="mono-rise mt-8" style={{ animationDelay: "0.08s" }}>
            {heroHeadline}
          </h1>
          <p
            className="mono-rise mt-9 max-w-lg text-lg leading-relaxed text-[var(--mono-600)]"
            style={{ animationDelay: "0.16s" }}
          >
            {heroSubcopy}
          </p>
          <div
            className="mono-rise mt-11 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "0.24s" }}
          >
            <Button size="lg" className="px-8">
              {cta.buttonLabel}
            </Button>
            <StepDots />
          </div>
        </div>
        {/* Signature element: a vertical tonal ruler — the whole hue, in order */}
        <div
          className="mono-rise h-56 w-14 self-stretch sm:h-auto sm:w-20"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="mono-ruler h-full">
            {TONE_STEPS.map((tone, i) => (
              <span
                key={i}
                style={{ background: tone, animationDelay: `${0.4 + i * 0.08}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Coach intro — mid-light band, tonal portrait */}
      <section className="mono-band-200 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
          <AvatarBlob
            name={coachName}
            size={124}
            color="var(--mono-800)"
            textColor="var(--mono-100)"
          />
          <div className="sm:border-l sm:border-[var(--mono-400)] sm:pl-16">
            <span className="mono-eyebrow">01</span>
            <h2 className="mb-8 mt-4">{intro.heading}</h2>
            <div className="flex max-w-xl flex-col gap-5">
              {intro.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-[var(--mono-800)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Method — dense stacked sequence, numerals stepping through tone */}
      <section className="mono-band-100 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <span className="mono-eyebrow">02</span>
          <h2 className="mb-14 mt-4 max-w-xl">{method.heading}</h2>
          <div className="mono-rule mb-2" />
          {method.steps.map((step, index) => (
            <div key={step.title}>
              <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-[7rem_1fr] sm:gap-10">
                <span
                  className="text-6xl italic leading-none tabular-nums"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: TONE_STEPS[2 + index] ?? "var(--mono-950)",
                  }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2 not-italic">{step.title}</h3>
                  <p className="max-w-prose leading-relaxed text-[var(--mono-600)]">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="mono-rule" />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services — deep band, cards as inset tonal panels */}
      <section className="mono-band-800 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <span className="mono-eyebrow">03</span>
          <h2 className="mb-14 mt-4 max-w-xl">{services.heading}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
            {services.programs.map((program, index) => (
              <div
                key={program.name}
                className="flex flex-col gap-5 border p-8"
                style={{
                  borderColor: "var(--mono-600)",
                  background:
                    index === 1 ? "var(--mono-950)" : "transparent",
                }}
              >
                <span
                  className="h-1.5 w-10"
                  style={{ background: TONE_STEPS[2 + index] }}
                  aria-hidden="true"
                />
                <h3 className="text-xl">{program.name}</h3>
                <p className="leading-relaxed text-[var(--mono-400)]">
                  {program.description}
                </p>
                <p
                  className="mt-auto pt-4 text-lg italic"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {program.priceLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits — the ONE place the grid breaks: full-bleed diagonal
          sweep across all six tonal steps at once, behind an inset panel
          that keeps every word on a single flat, legible tone. */}
      <section className="mono-spectrum-band px-6 py-28 sm:px-10 sm:py-36 lg:px-16">
        <div
          className="mx-auto max-w-5xl border p-8 sm:p-14"
          style={{ background: "var(--mono-100)", borderColor: "var(--mono-400)" }}
        >
          <span className="mono-eyebrow">04</span>
          <h2 className="mb-16 mt-4 max-w-xl">{benefits.heading}</h2>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.items.map((item, index) => (
              <div key={item.title} className="flex flex-col gap-2">
                <span
                  className="text-xs font-semibold tabular-nums"
                  style={{ color: TONE_STEPS[2 + (index % 4)] }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p className="leading-relaxed text-[var(--mono-600)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials — deepest band, quotes as inset light-tone cards */}
      <section className="mono-band-950 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <span className="mono-eyebrow">05</span>
          <h2 className="mb-14 mt-4 max-w-xl">{testimonials.heading}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.quotes.map((item) => (
              <Card
                key={item.name}
                className="border-[var(--mono-600)]"
                style={{ background: "var(--mono-800)" }}
              >
                <CardContent className="flex flex-col gap-5">
                  <span
                    aria-hidden="true"
                    className="text-4xl italic leading-none text-[var(--mono-400)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="text-lg italic leading-relaxed text-[var(--mono-100)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.quote}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <AvatarBlob
                      name={item.name}
                      size={38}
                      color="var(--mono-600)"
                      textColor="var(--mono-100)"
                    />
                    <div>
                      <p className="text-sm font-medium not-italic text-[var(--mono-100)]">
                        {item.name}
                      </p>
                      <p className="text-xs not-italic text-[var(--mono-400)]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA — set apart by tone: the palest possible field on the page */}
      <section className="mono-band-100 px-6 py-28 text-center sm:px-10 sm:py-36 lg:px-16">
        <span className="mono-eyebrow">06</span>
        <h2 className="mx-auto mb-6 mt-5 max-w-xl">{cta.heading}</h2>
        <p className="mx-auto mb-10 max-w-md leading-relaxed text-[var(--mono-600)]">
          {cta.subcopy}
        </p>
        <div className="flex flex-col items-center gap-8">
          <Button size="lg" className="px-10">
            {cta.buttonLabel}
          </Button>
          <StepDots />
        </div>
      </section>

      {/* 8. Contact — deepest shade, form fields as the lightest tone on it */}
      <section className="mono-band-950 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-[1fr_1.1fr] sm:gap-16">
          <div>
            <span className="mono-eyebrow">07</span>
            <h2 className="mb-6 mt-4">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-[var(--mono-400)]">
              {contact.subcopy}
            </p>
          </div>
          <div className="sm:border-l sm:border-[var(--mono-800)] sm:pl-16">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
