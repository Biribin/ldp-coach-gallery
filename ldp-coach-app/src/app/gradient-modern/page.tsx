import { Button } from "@/components/ui/button";
import { GradientBlock, ShapeGraphic, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Gradient Modern page (brief #06) — color as atmosphere, not accent.
 *
 * REWORKED COMPOSITION. The prior version rode the shared 8-section vertical
 * arc: an identical "pill + full-width hairline" header opened six sections
 * and method/services/testimonials were near-interchangeable card grids. That
 * leaned on color, not geometry. This rebuild keeps every line of copy from
 * `coachContent` and every image as an offline CSS/SVG placeholder, but gives
 * each section a genuinely different geometry so no two repeat one recipe:
 *
 *   1 Hero        asymmetric split + breathing conic orb w/ glow blooms
 *   2 Intro       halo avatar overlapping a soft gradient panel, offset text
 *   3 Method      OFFSET STEP LADDER on a vertical gradient spine (no cards)
 *   4 Services    FEATURE + STACKED LIST split (1 large panel, 2 compact rows)
 *   5 Benefits    full-bleed gradient BAND: 1 solid feature tile + offset list
 *   6 Testimonials PRISM CASCADE — frameless quotes threaded on a spectrum
 *                  rail, depth-staggered (no card grid, no full-bleed band)
 *   7 CTA         the signature: full coral→violet panel where color IS the UI
 *   8 Contact     asymmetric copy | glowing-field form split
 *
 * Motion: hero rises on load; every lower section reveals on scroll via a
 * guarded animation-timeline (final visible state by default, disabled under
 * reduced-motion). Section headers vary instead of cloning one divider bar.
 */
export default function GradientModernPage() {
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

  // Style a single emphasis word ("Transformez") in the shared headline with the
  // spectrum clip — the copy itself is unchanged, only its treatment shifts.
  const [beforeTransform, afterTransform] = heroHeadline.split("Transformez");

  const [featureBenefit, ...restBenefits] = benefits.items;
  const [featureProgram, ...restPrograms] = services.programs;

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-28 px-6 py-24 sm:gap-40 sm:px-10 sm:py-32">
      {/* 1. Hero — a vibrant, immersive gradient opening (asymmetric) */}
      <section className="grid grid-cols-1 items-center gap-14 pt-6 sm:grid-cols-[1.05fr_0.95fr] sm:gap-16 sm:pt-10">
        <div>
          <span className="gm-eyebrow gm-rise">Force contemporaine</span>
          <h1 className="gm-rise mt-6 max-w-xl" style={{ animationDelay: "0.08s" }}>
            {beforeTransform}
            <span className="gm-grad-text">Transformez</span>
            {afterTransform}
          </h1>
          <p
            className="gm-rise mt-6 max-w-md text-lg leading-relaxed text-foreground/75"
            style={{ animationDelay: "0.16s" }}
          >
            {heroSubcopy}
          </p>
          <div
            className="gm-rise mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <Button size="lg" className="gm-grad-btn px-8">
              {cta.buttonLabel}
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              {services.heading}
            </Button>
          </div>
        </div>

        {/* Ambient "image" surrogate — a breathing multi-stop gradient orb with
         * soft glow blooms. Pure CSS via the GradientBlock primitive; the
         * .gm-breathe class slowly shifts its spectrum like light. */}
        <div className="gm-rise relative" style={{ animationDelay: "0.2s" }}>
          <GradientBlock
            aspect="aspect-square"
            variant="conic"
            from="oklch(0.7 0.17 38)"
            via="oklch(0.6 0.2 18)"
            to="oklch(0.58 0.2 320)"
            angle={210}
            className="gm-breathe rounded-[2rem] shadow-[var(--gm-shadow-lift)]"
          />
          {/* Glow blooms layered over the orb — decorative, no text */}
          <GradientBlock
            aspect="aspect-square"
            variant="radial"
            from="oklch(0.95 0.12 70 / 0.55)"
            to="oklch(0.95 0.12 70 / 0)"
            className="pointer-events-none absolute -left-6 -top-6 h-1/2 w-1/2 rounded-full blur-2xl"
          />
          <GradientBlock
            aspect="aspect-square"
            variant="radial"
            from="oklch(0.8 0.16 320 / 0.5)"
            to="oklch(0.8 0.16 320 / 0)"
            className="pointer-events-none absolute -bottom-8 -right-6 h-1/2 w-1/2 rounded-full blur-2xl"
          />
        </div>
      </section>

      {/* 2. Coach intro — halo avatar overlapping a soft gradient panel */}
      <section className="gm-reveal">
        <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-[0.85fr_1.15fr] sm:gap-16">
          {/* Avatar sits on a soft gradient panel, breaking its top edge */}
          <div className="relative mx-auto w-full max-w-xs sm:mx-0">
            <GradientBlock
              aspect="aspect-[4/5]"
              variant="linear"
              angle={150}
              from="oklch(0.82 0.11 60 / 0.85)"
              via="oklch(0.74 0.14 350 / 0.8)"
              to="oklch(0.66 0.15 300 / 0.82)"
              className="rounded-[2rem] shadow-[var(--gm-shadow-lift)]"
            />
            <div className="absolute inset-x-0 bottom-0 flex translate-y-8 justify-center">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-full blur-md"
                  style={{
                    background:
                      "conic-gradient(from 140deg, var(--gm-coral), var(--gm-rose), var(--gm-violet), var(--gm-indigo), var(--gm-coral))",
                  }}
                />
                <AvatarBlob
                  name={coachName}
                  size={132}
                  color="var(--card)"
                  textColor="var(--gm-ink)"
                  className="ring-4 ring-[var(--card)]"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 sm:pt-0">
            <span className="gm-pill mb-6">01 · À propos de la coach</span>
            <h2 className="mb-3">{intro.heading}</h2>
            <p className="gm-eyebrow mb-7">{tagline}</p>
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

      {/* 3. Method — offset step ladder on a vertical gradient spine */}
      <section className="gm-reveal">
        <div className="mb-12 flex flex-col gap-3 sm:max-w-xl">
          <span className="gm-index">
            <span className="gm-index-num">02</span>
            <span className="gm-index-label">la méthode</span>
          </span>
          <span aria-hidden="true" className="gm-tick" />
          <h2 className="mt-2">{method.heading}</h2>
        </div>
        <div className="gm-ladder flex flex-col gap-10 sm:gap-12">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="gm-step sm:max-w-2xl"
              // Alternating indent — the ladder shifts right on odd steps so
              // the four moves cascade rather than stack in a plain column.
              style={{ marginLeft: index % 2 === 1 ? "clamp(0px, 6vw, 5rem)" : "0" }}
            >
              <span aria-hidden="true" className="gm-node" />
              <span aria-hidden="true" className="gm-step-num gm-grad-text">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-2xl">{step.title}</h3>
              <p className="max-w-md leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — feature panel + compact stacked rows */}
      <section className="gm-reveal">
        <div className="mb-12 flex flex-col gap-3 sm:max-w-xl">
          <span className="gm-index">
            <span className="gm-index-num">03</span>
            <span className="gm-index-label">Programmes</span>
          </span>
          <span aria-hidden="true" className="gm-tick" />
          <h2 className="mt-2">{services.heading}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* Featured program — a large panel with a full gradient face */}
          <article className="relative flex flex-col overflow-hidden rounded-[2rem] border border-[color-mix(in_oklch,var(--gm-rose)_18%,var(--border))] bg-[var(--card)] p-8 shadow-[var(--gm-shadow-lift)] sm:p-10">
            <GradientBlock
              aspect="aspect-[16/6]"
              variant="linear"
              angle={120}
              from="oklch(0.7 0.17 38)"
              via="oklch(0.6 0.2 18)"
              to="oklch(0.58 0.2 320)"
              className="gm-breathe mb-8 rounded-2xl"
            />
            <span className="gm-eyebrow mb-3">Le plus populaire</span>
            <h3 className="text-3xl">{featureProgram.name}</h3>
            <p className="mt-4 max-w-md leading-relaxed text-foreground/75">
              {featureProgram.description}
            </p>
            <div className="mt-auto flex items-end justify-between pt-8">
              <p className="gm-grad-text text-2xl font-bold">
                {featureProgram.priceLabel}
              </p>
              <Button className="gm-grad-btn px-6">{cta.buttonLabel}</Button>
            </div>
          </article>

          {/* Remaining programs — compact stacked rows, not a matching grid */}
          <div className="flex flex-col gap-6">
            {restPrograms.map((program, index) => (
              <article
                key={program.name}
                className="flex flex-1 flex-col rounded-[1.6rem] border border-[color-mix(in_oklch,var(--gm-rose)_14%,var(--border))] bg-[oklch(1_0_0_/_0.55)] p-6 shadow-[var(--gm-shadow-soft)] backdrop-blur-sm sm:p-7"
              >
                <div className="mb-4 flex items-center gap-3">
                  <ShapeGraphic
                    shape={index === 0 ? "circle" : "polygon"}
                    className="h-8 w-8 shrink-0"
                    color="var(--gm-rose)"
                    secondaryColor="var(--gm-violet)"
                  />
                  <h3 className="text-xl">{program.name}</h3>
                </div>
                <p className="leading-relaxed text-foreground/70">
                  {program.description}
                </p>
                <p className="gm-grad-text mt-5 text-lg font-semibold">
                  {program.priceLabel}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits — full-bleed gradient band, 1 feature tile + offset list */}
      <section className="gm-reveal">
        <div className="gm-band p-8 sm:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <span className="gm-index mb-3">
                <span className="gm-index-num">04</span>
                <span className="gm-index-label">Pourquoi elles restent</span>
              </span>
              <h2 className="mb-6 mt-3">{benefits.heading}</h2>
              {/* Feature benefit — a solid gradient tile with white text */}
              <div className="gm-feature p-6 sm:p-7">
                <h3 className="text-2xl">{featureBenefit.title}</h3>
                <p className="mt-3 leading-relaxed text-white/90">
                  {featureBenefit.description}
                </p>
              </div>
            </div>

            {/* Remaining benefits — an offset divided list, dot-led */}
            <ul className="flex flex-col justify-center gap-6">
              {restBenefits.map((item, index) => (
                <li key={item.title}>
                  {index > 0 && (
                    <div
                      aria-hidden="true"
                      className="mb-6 h-px w-full bg-[color-mix(in_oklch,var(--gm-rose)_20%,transparent)]"
                    />
                  )}
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="gm-dot mt-1.5 shrink-0"
                    />
                    <div>
                      <h3 className="mb-1 text-lg">{item.title}</h3>
                      <p className="leading-relaxed text-foreground/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Testimonials — prism cascade on a vertical spectrum rail */}
      <section className="gm-reveal">
        <div className="mb-12 flex flex-col gap-3 sm:max-w-xl">
          <span className="gm-index">
            <span className="gm-index-num">05</span>
            <span className="gm-index-label">Résultats clients</span>
          </span>
          <span aria-hidden="true" className="gm-tick" />
          <h2 className="mt-2">{testimonials.heading}</h2>
        </div>
        <div className="flex flex-col gap-10 sm:gap-12">
          {testimonials.quotes.map((item, index) => (
            <div
              key={item.name}
              // Depth stagger: each quote steps deeper toward the twilight end,
              // offset right + gently shrinking, like refraction.
              style={{
                marginLeft: `clamp(0px, ${index * 4}vw, ${index * 3}rem)`,
                maxWidth: `${40 - index * 3}rem`,
              }}
            >
              <div className="gm-refract p-7 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="gm-grad-text text-5xl font-bold leading-none"
                  >
                    &ldquo;
                  </span>
                  <AvatarBlob
                    name={item.name}
                    size={44}
                    color="var(--secondary)"
                    textColor="var(--gm-ink)"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[var(--gm-ink)]">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-foreground/85">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action — the signature gradient moment: the panel IS color */}
      <section
        className="gm-reveal relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-20"
        style={{
          background:
            "linear-gradient(125deg, var(--gm-coral), var(--gm-rose) 42%, var(--gm-magenta) 62%, var(--gm-violet) 85%, var(--gm-indigo))",
        }}
      >
        {/* Soft light bloom over the gradient panel — depth through glow */}
        <GradientBlock
          aspect="aspect-square"
          variant="radial"
          from="oklch(1 0 0 / 0.35)"
          to="oklch(1 0 0 / 0)"
          className="pointer-events-none absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full blur-2xl"
        />
        <div className="relative">
          <span
            className="text-xs font-bold uppercase tracking-[0.24em]"
            style={{ color: "oklch(0.99 0.01 68)" }}
          >
            06 · Votre prochaine étape
          </span>
          <h2
            className="mx-auto mt-6 max-w-xl"
            style={{ color: "oklch(0.99 0.01 68)" }}
          >
            {cta.heading}
          </h2>
          <p
            className="mx-auto mb-10 mt-5 max-w-md leading-relaxed"
            style={{ color: "oklch(0.99 0.01 68 / 0.88)" }}
          >
            {cta.subcopy}
          </p>
          <Button
            size="lg"
            className="px-8"
            style={{
              backgroundColor: "oklch(0.99 0.01 68)",
              color: "var(--gm-rose)",
            }}
          >
            {cta.buttonLabel}
          </Button>
        </div>
      </section>

      {/* 8. Contact / booking */}
      <section className="gm-reveal">
        <div className="mb-10 flex flex-col gap-3">
          <span className="gm-index">
            <span className="gm-index-num">07</span>
            <span className="gm-index-label">Contact</span>
          </span>
          <span aria-hidden="true" className="gm-tick" />
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1.1fr] sm:gap-16">
          <div>
            <h2 className="mb-6">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-foreground/75">
              {contact.subcopy}
            </p>
          </div>
          <div className="sm:border-l sm:border-[var(--border)] sm:pl-16">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
