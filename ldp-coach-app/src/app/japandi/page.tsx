import { Button } from "@/components/ui/button";
import { AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Japandi page (brief #01) — Japanese restraint × Scandinavian warmth.
 *
 * REWORK — composition over recolor. The old build rode the shared eight-
 * section vertical arc with two identical 3-up card grids (services +
 * testimonials). This version keeps every piece of content but gives each
 * section its own geometry drawn from Japandi's own vocabulary:
 *
 *   1. Hero        — asymmetric type-left / rock-garden-right split (signature).
 *   2. Coach intro — reversed asymmetric: bio-left / framed avatar-right.
 *   3. Method      — numbered hairline divide-y sequence (a considered list).
 *   4. Services    — a stacked "shokunin ledger": full-width hairline rows
 *                    with serif numerals + right-aligned serif prices. NOT cards.
 *   5. Benefits    — a tatami alternating-panel strip, clay/sage woven tones.
 *   6. Testimonials— ONE featured pull-quote on a stone band + two quiet
 *                    footnote sources beneath. NOT a 3-card grid.
 *   7. CTA         — asymmetric invitation panel, off-centre.
 *   8. Contact     — asymmetric heading / underline-field form split.
 *
 * The single warm-clay accent still does most emotional work; a muted sage
 * (the brief's second permitted whisper) now lives in the rock garden, the
 * tatami panels, and the benefits eyebrow — no longer mono-accent.
 *
 * Motion: hero rises once on load; every below-hero section reveals on
 * scroll via CSS scroll-driven animation (jp-reveal), guarded and
 * reduced-motion-safe. Theme scope (`.theme-japandi`) is applied by layout.
 */
export default function JapandiPage() {
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

  const [featuredQuote, ...restQuotes] = testimonials.quotes;

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-28 px-6 py-24 sm:gap-40 sm:px-10 sm:py-36">
      {/* 1. Hero — asymmetric: exhaled type left, still rock garden right */}
      <section className="grid grid-cols-1 items-center gap-14 pt-6 sm:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <span
            aria-hidden="true"
            className="jp-rise block h-1.5 w-1.5 rounded-full bg-[var(--jp-clay)]"
          />
          <h1
            className="jp-rise mt-10 max-w-2xl"
            style={{ animationDelay: "0.1s" }}
          >
            {heroHeadline}
          </h1>
          <p
            className="jp-rise mt-8 max-w-xl text-lg leading-relaxed text-foreground/70"
            style={{ animationDelay: "0.2s" }}
          >
            {heroSubcopy}
          </p>
          <div
            className="jp-rise mt-12 flex flex-wrap gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" className="px-8">
              {cta.buttonLabel}
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              {services.heading}
            </Button>
          </div>
        </div>
        {/* Signature: a raked rock garden (karesansui) — the one bold moment */}
        <div
          className="jp-rise relative mx-auto w-full max-w-sm"
          style={{ animationDelay: "0.35s" }}
        >
          <div className="jp-garden">
            <span aria-hidden="true" className="jp-garden-pebble" />
          </div>
          <p className="mt-6 max-w-[16rem] text-sm leading-relaxed text-[var(--jp-ink-soft)]">
            <span className="jp-seal" aria-hidden="true" />{" "}
            <span className="align-middle">{coachContent.tagline}</span>
          </p>
        </div>
      </section>

      {/* 2. Coach intro — reversed asymmetry: bio left, framed avatar right */}
      <section className="jp-reveal">
        <div className="mb-12 flex items-center gap-4">
          <span className="jp-eyebrow">01</span>
          <div className="h-px flex-1 bg-[var(--jp-line)]" />
        </div>
        <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-[1fr_auto] sm:gap-16">
          <div className="sm:pr-16">
            <h2 className="mb-4 max-w-md">{intro.heading}</h2>
            <p className="mb-8 text-sm font-medium tracking-wide text-[var(--jp-clay)]">
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
          <div className="order-first sm:order-none">
            <AvatarBlob
              name={coachName}
              size={152}
              color="var(--jp-stone)"
              textColor="var(--foreground)"
              className="ring-1 ring-[var(--jp-line)]"
            />
          </div>
        </div>
      </section>

      {/* 3. Method — a considered philosophy, an ordered hairline sequence */}
      <section className="jp-reveal">
        <div className="mb-12 flex items-center gap-4">
          <span className="jp-eyebrow">02</span>
          <div className="h-px flex-1 bg-[var(--jp-line)]" />
        </div>
        <h2 className="mb-14 max-w-md">{method.heading}</h2>
        <div className="divide-y divide-[var(--jp-line)]">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="grid grid-cols-1 gap-6 py-12 first:pt-0 sm:grid-cols-[11rem_1fr] sm:gap-12"
            >
              <div className="flex items-baseline gap-5">
                <span className="jp-serif text-5xl leading-none tabular-nums text-[var(--jp-clay)]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
              </div>
              <p className="max-w-prose leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services — a stacked "shokunin ledger" (NOT a card grid) */}
      <section className="jp-reveal">
        <div className="mb-12 flex items-center gap-4">
          <span className="jp-eyebrow">03</span>
          <div className="h-px flex-1 bg-[var(--jp-line)]" />
        </div>
        <h2 className="mb-14 max-w-md">{services.heading}</h2>
        <div className="border-t border-[var(--jp-line)]">
          {services.programs.map((program, index) => (
            <div
              key={program.name}
              className="jp-ledger-row grid grid-cols-1 items-baseline gap-4 border-b border-[var(--jp-line)] px-2 py-9 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-8 sm:py-11"
            >
              <span
                aria-hidden="true"
                className="jp-serif text-2xl leading-none tabular-nums text-[var(--jp-sage)]"
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div className="max-w-xl">
                <h3 className="mb-2">{program.name}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {program.description}
                </p>
              </div>
              <p className="jp-serif whitespace-nowrap text-lg font-medium text-[var(--jp-clay)] sm:text-right">
                {program.priceLabel}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Benefits — tatami alternating-panel strip (clay/sage woven tones) */}
      <section className="jp-reveal">
        <div className="mb-12 flex items-center gap-4">
          <span className="jp-eyebrow jp-eyebrow-sage">04</span>
          <div className="h-px flex-1 bg-[var(--jp-line)]" />
        </div>
        <h2 className="mb-14 max-w-md">{benefits.heading}</h2>
        <div className="flex flex-col gap-4">
          {benefits.items.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-start gap-5 p-7 sm:gap-7 sm:p-9 ${
                index % 2 === 0 ? "jp-tatami" : "jp-tatami jp-tatami-alt"
              } ${index % 2 === 0 ? "sm:mr-16" : "sm:ml-16"}`}
            >
              <span
                aria-hidden="true"
                className="jp-serif mt-1 text-2xl leading-none tabular-nums text-[var(--jp-sage)]"
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — ONE featured pull-quote + quiet footnote sources */}
      <section className="jp-reveal">
        <div className="mb-12 flex items-center gap-4">
          <span className="jp-eyebrow">05</span>
          <div className="h-px flex-1 bg-[var(--jp-line)]" />
        </div>
        <h2 className="mb-14 max-w-md">{testimonials.heading}</h2>
        <figure className="rounded-2xl bg-[var(--jp-stone)] px-8 py-14 shadow-[var(--jp-shadow-soft)] sm:px-16 sm:py-20">
          <span
            aria-hidden="true"
            className="jp-serif block text-6xl leading-none text-[var(--jp-clay)]"
          >
            &ldquo;
          </span>
          <blockquote className="jp-serif mt-4 max-w-3xl text-2xl leading-relaxed text-foreground/90 sm:text-3xl">
            {featuredQuote.quote}
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <AvatarBlob
              name={featuredQuote.name}
              size={44}
              color="var(--jp-clay)"
              textColor="var(--primary-foreground)"
            />
            <span className="text-sm">
              <span className="font-medium">{featuredQuote.name}</span>
              <span className="text-muted-foreground">
                {" "}
                &middot; {featuredQuote.role}
              </span>
            </span>
          </figcaption>
        </figure>
        <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 sm:pl-4">
          {restQuotes.map((item) => (
            <div
              key={item.name}
              className="border-l border-[var(--jp-line)] pl-6"
            >
              <p className="text-sm leading-relaxed text-foreground/75">
                {item.quote}
              </p>
              <p className="mt-3 text-xs tracking-wide text-muted-foreground">
                <span className="font-medium text-foreground/80">
                  {item.name}
                </span>{" "}
                &middot; {item.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action — an off-centre invitation, never a push */}
      <section className="jp-reveal">
        <div className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-[var(--jp-line)] bg-secondary/60 px-8 py-16 shadow-[var(--jp-shadow-soft)] sm:grid-cols-[1.4fr_1fr] sm:gap-16 sm:px-16 sm:py-20">
          <div>
            <span className="jp-eyebrow">06</span>
            <h2 className="mt-6 max-w-md">{cta.heading}</h2>
            <p className="mt-5 max-w-md leading-relaxed text-foreground/70">
              {cta.subcopy}
            </p>
          </div>
          <div className="sm:justify-self-end">
            <Button size="lg" className="px-8">
              {cta.buttonLabel}
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Contact / booking — asymmetric heading / underline-field form */}
      <section className="jp-reveal">
        <div className="mb-12 flex items-center gap-4">
          <span className="jp-eyebrow">07</span>
          <div className="h-px flex-1 bg-[var(--jp-line)]" />
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1.1fr] sm:gap-16">
          <div>
            <h2 className="mb-6 max-w-sm">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-foreground/70">
              {contact.subcopy}
            </p>
          </div>
          <div className="sm:border-l sm:border-[var(--jp-line)] sm:pl-16">
            <ContactForm
              fields={contact.fields}
              submitLabel={contact.submitLabel}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
