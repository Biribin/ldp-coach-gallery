import { Button } from "@/components/ui/button";
import { GradientBlock, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Scandinavian page (brief #11) — hygge warmth, natural materials, cozy
 * minimalism. Every line of copy comes from `coachContent`; every image is a
 * CSS/SVG placeholder primitive. The theme scope (`.theme-scandinavian`) is
 * applied by the parent route layout, not here.
 *
 * REWORKED COMPOSITION — the earlier version rode the shared 8-section arc as
 * three separate card grids (method / testimonials / benefits). This version
 * gives each section its own geometry:
 *   - Hero: asymmetric type block + off-center wood panel with a pinned label.
 *   - Intro: full-bleed honey-wood "plank" band, avatar + text.
 *   - Method: SIGNATURE — a "hearth-stone shelf" where a braided rail threads
 *     horizontally through four connected stones (not four detached cards).
 *   - Services: asymmetric 2 + 1 cluster (a lead program + two smaller ones)
 *     rendered as plain warm panels, no shadcn Card grid.
 *   - Benefits: a wool "checklist ledger" of banded rows with berry ticks,
 *     alternating warmth — not a flat 3-col dot grid.
 *   - Testimonials: ANTI-CONVERGENCE — a "guestbook" of one large feature
 *     quote beside two small stacked stitched entries, asymmetric; NOT a
 *     3-card grid.
 *   - CTA: full-bleed forest band, centered invitation.
 *   - Contact: copy + braid beside a wool-filled form.
 * Below-hero sections carry `sc-reveal` for gentle scroll-driven entrances.
 */
export default function ScandinavianPage() {
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

  const [featureQuote, ...sideQuotes] = testimonials.quotes;

  return (
    <main className="flex flex-col">
      {/* 1. Hero — an asymmetric, warm-lit thesis, not a centered box */}
      <section className="px-6 pb-20 pt-16 sm:px-10 sm:pt-24 lg:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="sc-eyebrow sc-rise">
              Coaching en ligne et en présentiel
            </span>
            <h1
              className="sc-rise mt-6 max-w-2xl"
              style={{ animationDelay: "0.1s" }}
            >
              {heroHeadline}
            </h1>
            <p
              className="sc-rise mt-7 max-w-lg text-lg leading-relaxed text-foreground/75"
              style={{ animationDelay: "0.2s" }}
            >
              {heroSubcopy}
            </p>
            <div
              className="sc-rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.3s" }}
            >
              <Button size="lg" className="px-8">
                {cta.buttonLabel}
              </Button>
              <span className="sc-braid sc-braid-sm w-24" aria-hidden="true" />
            </div>
          </div>
          {/* Off-center "wood grain" panel — deliberate scale contrast against the type block */}
          <div className="sc-rise relative" style={{ animationDelay: "0.15s" }}>
            <GradientBlock
              aspect="aspect-[4/5]"
              className="rounded-[28px]"
              from="var(--sc-wood)"
              via="#d99a6c"
              to="var(--sc-wool)"
              angle={155}
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-[var(--card)] p-4 shadow-[var(--sc-shadow-lift)] sm:block">
              <p
                className="text-sm font-semibold text-[var(--sc-forest)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Un coaching pour la durée, tout en chaleur
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <span className="sc-braid" aria-hidden="true" />
      </div>

      {/* 2. Coach intro — full-bleed wood band, intimate & warm */}
      <section className="sc-plank sc-reveal mt-16 px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 sm:grid-cols-[auto_1fr] sm:gap-16">
          <AvatarBlob
            name={coachName}
            size={140}
            color="var(--sc-cream)"
            textColor="var(--sc-wood)"
            className="ring-4 ring-[var(--sc-wool)]/40"
          />
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sc-cream)]">
              01 — À propos
            </span>
            <h2 className="mb-4 mt-4 text-[var(--primary-foreground)]">
              {intro.heading}
            </h2>
            <p className="mb-8 text-sm font-semibold tracking-wide text-[var(--sc-wool)]">
              {coachName}
            </p>
            <div className="flex max-w-2xl flex-col gap-5">
              {intro.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-relaxed text-[var(--primary-foreground)]/85"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Method — SIGNATURE: a hearth-stone shelf; a braided rail threads
          through four connected stones rather than four detached cards. */}
      <section className="sc-reveal px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="sc-eyebrow">02 — La Méthode</span>
          <h2 className="mb-12 mt-4 max-w-xl">{method.heading}</h2>
          <div className="sc-shelf grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {method.steps.map((step, index) => (
              <div key={step.title} className="sc-stone p-6 pt-5">
                <span className="sc-stone-num">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="mb-2 mt-6">{step.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services — asymmetric two-plus-one cluster on plain warm panels */}
      <section className="sc-reveal px-6 pb-20 sm:px-10 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <span className="sc-eyebrow">03 — Programmes</span>
          <h2 className="mb-12 mt-4">{services.heading}</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
            {/* Lead program — a wide featured plank */}
            <article className="flex flex-col justify-between rounded-[20px] border border-border bg-[var(--card)] p-8 shadow-[var(--sc-shadow-soft)] sm:p-10">
              <div>
                <span className="sc-tag mb-6">Le plus populaire</span>
                <h3 className="text-2xl">{services.programs[0].name}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-foreground/75">
                  {services.programs[0].description}
                </p>
              </div>
              <div className="mt-8">
                <span className="sc-braid sc-braid-sm mb-5 block w-20" aria-hidden="true" />
                <p className="text-2xl font-semibold text-[var(--sc-wood)]">
                  {services.programs[0].priceLabel}
                </p>
              </div>
            </article>
            {/* Two smaller programs, stacked */}
            <div className="flex flex-col gap-6">
              {services.programs.slice(1).map((program) => (
                <article
                  key={program.name}
                  className="rounded-[20px] border border-border bg-[var(--sc-wool)]/50 p-6"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg">{program.name}</h3>
                    <p className="shrink-0 text-sm font-semibold text-[var(--sc-wood-deep)]">
                      {program.priceLabel}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {program.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Benefits — a wool "checklist ledger" of banded rows, not a flat
          dot grid; berry ticks + alternating warm banding for coziness. */}
      <section className="sc-reveal bg-[var(--sc-wool)] px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <span className="sc-eyebrow">04 — Pourquoi elles restent</span>
          <h2 className="mb-10 mt-4">{benefits.heading}</h2>
          <ul className="overflow-hidden rounded-[20px] border border-[var(--sc-wood)]/20">
            {benefits.items.map((item, index) => (
              <li
                key={item.title}
                className="flex items-start gap-5 border-b border-[var(--sc-wood)]/15 px-6 py-6 last:border-b-0 sm:px-8"
                style={{
                  background:
                    index % 2 === 0
                      ? "var(--sc-cream)"
                      : "var(--sc-wool-warm)",
                }}
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm text-[var(--sc-cream)]"
                  style={{ background: "var(--sc-berry)" }}
                >
                  &#10003;
                </span>
                <div className="sm:flex sm:items-baseline sm:gap-4">
                  <h3 className="text-lg sm:w-64 sm:shrink-0">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/70 sm:mt-0">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Testimonials — ANTI-CONVERGENCE "guestbook": one large feature
          quote beside two small stacked stitched entries. Not a 3-card grid. */}
      <section className="sc-reveal px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="sc-eyebrow">05 — Résultats clients</span>
          <h2 className="mb-12 mt-4 max-w-xl">{testimonials.heading}</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Feature quote — hand-warm, oversized, with a sewn wool tag */}
            <figure className="relative rounded-[24px] bg-[var(--sc-forest)] p-8 text-[var(--sc-cream)] shadow-[var(--sc-shadow-lift)] sm:p-12">
              <span className="sc-tag mb-8">Cliente, {featureQuote.role}</span>
              <blockquote
                className="text-2xl leading-relaxed sm:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                &ldquo;{featureQuote.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <AvatarBlob
                  name={featureQuote.name}
                  size={48}
                  color="var(--sc-cream)"
                  textColor="var(--sc-forest)"
                />
                <span className="text-sm font-semibold tracking-wide">
                  {featureQuote.name}
                </span>
              </figcaption>
            </figure>
            {/* Two smaller stitched "guestbook" entries, stacked */}
            <div className="flex flex-col justify-center gap-10">
              {sideQuotes.map((item) => (
                <figure key={item.name} className="sc-entry">
                  <blockquote
                    className="text-lg leading-relaxed text-foreground/85"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <AvatarBlob
                      name={item.name}
                      size={38}
                      color="var(--sc-wood)"
                      textColor="var(--sc-cream)"
                    />
                    <span>
                      <span className="block text-sm font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {item.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA — full-bleed forest band, a friendly invitation home */}
      <section className="sc-reveal bg-[var(--sc-forest)] px-6 py-20 text-center sm:px-10 sm:py-24">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sc-wool)]">
          06 — Prête ?
        </span>
        <h2 className="mx-auto mt-6 max-w-xl text-[var(--sc-cream)]">
          {cta.heading}
        </h2>
        <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-[var(--sc-cream)]/80">
          {cta.subcopy}
        </p>
        <Button
          size="lg"
          className="bg-[var(--sc-cream)] px-8 text-[var(--sc-charcoal)] hover:bg-[var(--sc-wool)]"
        >
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact / booking */}
      <section className="sc-reveal px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-16">
          <div>
            <span className="sc-eyebrow">07 — Contact</span>
            <h2 className="mb-6 mt-4">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-foreground/70">
              {contact.subcopy}
            </p>
            <span className="sc-braid mt-10 block max-w-xs" aria-hidden="true" />
          </div>
          <div className="rounded-[28px] border border-border bg-[var(--card)] p-8 shadow-[var(--sc-shadow-soft)] sm:p-10">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
