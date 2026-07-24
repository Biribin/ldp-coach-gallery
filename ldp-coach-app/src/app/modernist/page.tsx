import { Button } from "@/components/ui/button";
import { AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Modernist page (brief #18) — mid-century clean lines, functional beauty,
 * timeless proportion. Sources every line of copy from `coachContent` and
 * every image from the offline placeholder primitives. The theme scope
 * (`.theme-modernist`) is applied by the parent route layout, not here.
 *
 * DEEP RECOMPOSE — the point of this page is COMPOSITION, not color:
 *
 *  • Signature (one loud gesture): the hero is a real "specimen cabinet" — a
 *    mid-century modular storage wall of UNEQUAL cells (Eames/Nelson units):
 *    a wood panel, a teal-tint field, a stat cell, a peg. Nothing else on the
 *    page shouts, so the cabinet reads.
 *  • The "shelf datum" hairline-with-pegs is demoted to quiet section joinery.
 *  • A running catalog index (Fig. 01 … Fig. 07) threads the sections like a
 *    furniture-catalog specimen list.
 *  • Every section has genuinely different geometry: cabinet (hero) → offset
 *    editorial 4/8 (intro) → horizontal numbered datum-band (method) → uneven
 *    feature-plus-ledger 5/7 (services) → hairline pegboard modules
 *    (benefits) → asymmetric numbered specimen ledger, one lead quote + two
 *    stacked (testimonials, NOT a 3-card grid) → flat walnut band (CTA) →
 *    offset form (contact). No two sections repeat a card-grid recipe.
 *  • Motion: hero rises on load; every below-hero section reveals on scroll
 *    via CSS scroll-driven timelines (no JS), disabled under reduced-motion.
 */
export default function ModernistPage() {
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

  const [leadTestimonial, ...restTestimonials] = testimonials.quotes;

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 sm:gap-32 sm:px-10 sm:py-24">
      {/* 1. Hero — the SIGNATURE. Asymmetric split: a thesis headline hard
          against the left, a real modular "specimen cabinet" anchoring the
          right. The cabinet is the one loud object on the page. */}
      <section className="grid grid-cols-1 items-center gap-12 pt-2 sm:grid-cols-12 sm:gap-10 sm:pt-6">
        <div className="mo-rise sm:col-span-6 lg:col-span-6">
          <span className="mo-eyebrow">Le coaching, pensé avec soin</span>
          <h1 className="mt-6 max-w-xl">{heroHeadline}</h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground/75">
            {heroSubcopy}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="px-8">
              {cta.buttonLabel}
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Découvrir la méthode
            </Button>
          </div>
        </div>

        {/* The specimen cabinet: unequal modular cells, hairline mullions,
            one wood panel, one teal field, one stat cell, one peg. */}
        <div
          className="mo-rise sm:col-span-6 lg:col-span-6"
          style={{ animationDelay: "0.15s" }}
        >
          <div
            className="mo-cabinet aspect-[4/5]"
            style={{ gridTemplateColumns: "1.35fr 1fr", gridTemplateRows: "1.6fr 1fr" }}
            aria-hidden="true"
          >
            {/* tall wood cabinet door with a peg */}
            <div className="mo-cell mo-cell--wood row-span-2">
              <span className="mo-peg" style={{ top: "50%", right: "12px" }} />
            </div>
            {/* teal-tint open shelf, holds the tagline as a specimen label */}
            <div className="mo-cell mo-cell--teal flex items-end p-5">
              <p className="mo-serif text-sm leading-snug text-[var(--mo-walnut-deep)]">
                {coachContent.tagline}
              </p>
            </div>
            {/* stat drawer, tabular figure — quiet functional detail */}
            <div className="mo-cell flex flex-col justify-center gap-1 p-5">
              <span className="mo-serif text-4xl leading-none tabular-nums text-[var(--mo-teal)]">
                10+
              </span>
              <span className="mo-index">Ans de coaching</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Coach intro — offset editorial 4/8. Text runs wide under a shelf
          datum; the avatar sits inline as a small credential mark. */}
      <section className="mo-reveal">
        <div className="mb-10 flex items-center gap-6">
          <span className="mo-index shrink-0">Fig. 01</span>
          <div className="mo-shelf" />
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-12">
          <div className="sm:col-span-4">
            <h2>{intro.heading}</h2>
            <div className="mt-6 flex items-center gap-3">
              <AvatarBlob
                name={coachName}
                size={44}
                color="var(--mo-walnut)"
                textColor="var(--mo-paper)"
              />
              <p className="text-sm font-semibold tracking-wide text-[var(--mo-teal)]">
                {coachName}
              </p>
            </div>
          </div>
          <div className="flex max-w-2xl flex-col gap-5 sm:col-span-8">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-foreground/80">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Method — a HORIZONTAL numbered datum-band: four steps read left to
          right across a single ruled register, each cell topped by an
          oversized serif numeral. Distinct geometry from the vertical ledgers
          elsewhere. */}
      <section className="mo-reveal">
        <div className="mb-10 flex items-center gap-6">
          <span className="mo-index shrink-0">Fig. 02</span>
          <div className="mo-shelf" />
        </div>
        <h2 className="mb-10 max-w-lg">{method.heading}</h2>
        <div className="grid grid-cols-1 gap-px border border-[var(--mo-line)] bg-[var(--mo-line)] sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((step, index) => (
            <div key={step.title} className="bg-background px-6 py-8">
              <span className="mo-serif block text-5xl leading-none tabular-nums text-[var(--mo-teal)]">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="mb-2 mt-6">{step.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — the uneven 5/7 split: the lead program gets
          a full feature panel, the remaining two stack as a compact ledger. */}
      <section className="mo-reveal">
        <div className="mb-10 flex items-center gap-6">
          <span className="mo-index shrink-0">Fig. 03</span>
          <div className="mo-shelf" />
        </div>
        <h2 className="mb-10">{services.heading}</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-12">
          {/* lead program: a full walnut-framed feature block */}
          <div className="flex flex-col justify-between border-2 border-[var(--mo-ink-line)] bg-card p-8 sm:col-span-5">
            <div>
              <span className="mo-index">Programme phare</span>
              <h3 className="mt-4 text-2xl">{services.programs[0].name}</h3>
              <p className="mt-4 leading-relaxed text-foreground/75">
                {services.programs[0].description}
              </p>
            </div>
            <div className="mt-8">
              <div className="mo-shelf mb-5" />
              <p className="mo-serif text-2xl font-medium text-[var(--mo-teal)]">
                {services.programs[0].priceLabel}
              </p>
            </div>
          </div>
          {/* supporting programs: compact divided ledger */}
          <div className="flex flex-col divide-y divide-[var(--mo-line)] border-y border-[var(--mo-line)] sm:col-span-7">
            {services.programs.slice(1).map((program) => (
              <div
                key={program.name}
                className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="mb-2">{program.name}</h3>
                  <p className="max-w-md leading-relaxed text-foreground/70">
                    {program.description}
                  </p>
                </div>
                <p className="mo-serif shrink-0 text-lg font-medium text-[var(--mo-teal)]">
                  {program.priceLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits — the pegboard: the cabinet's modular logic reused as a
          light, de-carded hairline grid of modules, one teal tick each. */}
      <section className="mo-reveal">
        <div className="mb-10 flex items-center gap-6">
          <span className="mo-index shrink-0">Fig. 04</span>
          <div className="mo-shelf" />
        </div>
        <h2 className="mb-10">{benefits.heading}</h2>
        <div className="mo-pegboard grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item) => (
            <div key={item.title} className="mo-module p-7">
              <div className="mb-4 h-1.5 w-8 rounded-[1px] bg-[var(--mo-teal)]" />
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — a numbered specimen ledger, NOT a 3-card grid: one
          large lead quote gets an asymmetric feature row, the remaining two
          stack as compact ledger entries beneath. */}
      <section className="mo-reveal">
        <div className="mb-10 flex items-center gap-6">
          <span className="mo-index shrink-0">Fig. 05</span>
          <div className="mo-shelf" />
        </div>
        <h2 className="mb-10">{testimonials.heading}</h2>

        {/* lead quote — the specimen, oversized serif with a big index numeral */}
        <div className="grid grid-cols-1 gap-6 border-t-2 border-[var(--mo-ink-line)] pt-8 sm:grid-cols-12 sm:gap-8">
          <div className="sm:col-span-2">
            <span className="mo-serif text-6xl leading-none tabular-nums text-[var(--mo-teal)]">
              01
            </span>
          </div>
          <div className="sm:col-span-10">
            <p className="mo-serif text-2xl leading-snug text-foreground sm:text-[1.75rem]">
              &ldquo;{leadTestimonial.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <AvatarBlob
                name={leadTestimonial.name}
                size={40}
                color="var(--mo-walnut)"
                textColor="var(--mo-paper)"
              />
              <div>
                <p className="text-sm font-semibold">{leadTestimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {leadTestimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* supporting quotes — compact numbered ledger rows */}
        <div className="mt-4 flex flex-col divide-y divide-[var(--mo-line)] border-y border-[var(--mo-line)]">
          {restTestimonials.map((item, index) => (
            <div
              key={item.name}
              className="grid grid-cols-1 gap-4 py-7 sm:grid-cols-12 sm:gap-8"
            >
              <div className="sm:col-span-2">
                <span className="mo-serif text-3xl leading-none tabular-nums text-[var(--mo-teal)]">
                  {(index + 2).toString().padStart(2, "0")}
                </span>
              </div>
              <p className="mo-serif text-lg leading-relaxed text-foreground/85 sm:col-span-7">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="sm:col-span-3">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action — flat deep-walnut band, decisive, no gradient glow. */}
      <section className="mo-reveal border-2 border-[var(--mo-ink-line)] bg-[var(--mo-walnut-deep)] px-8 py-16 text-center sm:px-16 sm:py-20">
        <h2 className="mx-auto max-w-xl text-[var(--mo-paper)]">{cta.heading}</h2>
        <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-[var(--mo-paper)]/75">
          {cta.subcopy}
        </p>
        <Button size="lg" className="px-8">
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact / booking — offset 4/8 form. */}
      <section className="mo-reveal">
        <div className="mb-10 flex items-center gap-6">
          <span className="mo-index shrink-0">Fig. 06</span>
          <div className="mo-shelf" />
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-12 sm:gap-16">
          <div className="sm:col-span-4">
            <h2 className="mb-6">{contact.heading}</h2>
            <p className="max-w-sm leading-relaxed text-foreground/70">
              {contact.subcopy}
            </p>
          </div>
          <div className="sm:col-span-8">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
