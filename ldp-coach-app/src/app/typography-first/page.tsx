import { Button } from "@/components/ui/button";
import { GradientBlock } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Typography First page (brief #23) — type as the hero. Composition intent:
 * scale and weight of the words themselves carry the entire hierarchy and
 * emotional arc. No photography surrogate does the talking; where the
 * japandi/other routes reach for a GradientBlock "image", this page instead
 * reaches for oversized type, ghost-stroked numerals, and one coral fill
 * doing the work an image would elsewhere. The eight-section arc (hero →
 * coach intro → method → services → benefits → testimonials → CTA →
 * contact) is preserved but each section breaks rhythm differently: hero is
 * asymmetric full-bleed type, method is a dense stacked list, services is a
 * tight 3-col grid, testimonials is a single oversized quote at a time.
 */
export default function TypographyFirstPage() {
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

  const heroWords = heroHeadline.split(". ").filter(Boolean);

  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero — the thesis: type at full scale, asymmetric, not centered */}
      <section className="px-6 pb-24 pt-20 sm:px-10 sm:pt-28 lg:px-16">
        <div className="tf-label tf-slam">{coachName} / Coaching</div>
        <h1 className="tf-slam mt-6 max-w-[18ch]" style={{ animationDelay: "0.08s" }}>
          {heroWords.map((word, i) => (
            <span
              key={i}
              className={i === 0 ? "tf-shout block" : "block text-foreground"}
            >
              {word}
              {i < heroWords.length - 1 ? "." : ""}
            </span>
          ))}
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p
            className="tf-slam max-w-md text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "0.16s" }}
          >
            {heroSubcopy}
          </p>
          <div className="tf-slam flex flex-wrap gap-4" style={{ animationDelay: "0.22s" }}>
            <Button size="lg" className="bg-[var(--tf-coral)] px-8 text-[var(--tf-ink)] hover:bg-[var(--tf-ochre)]">
              {cta.buttonLabel}
            </Button>
          </div>
        </div>
      </section>

      <hr className="tf-rule mx-6 sm:mx-10 lg:mx-16" />

      {/* 2. Coach intro — her voice comes through the type, no portrait needed */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="tf-reveal">
            <span className="tf-label">02 / La Coach</span>
            <h2 className="mt-6 text-[var(--tf-ochre)]">Voici {coachName.split(" ")[0]}</h2>
          </div>
          <div className="tf-reveal flex flex-col gap-8">
            {intro.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-3xl"
                    : "max-w-xl text-base leading-relaxed text-muted-foreground"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Method — expressed as clear stacked statements, dense rhythm */}
      <section className="bg-[var(--tf-paper)] px-6 py-24 text-[var(--tf-ink)] sm:px-10 lg:px-16">
        <span className="tf-label tf-reveal text-[var(--tf-coral)]">03 / {method.heading}</span>
        <h2 className="tf-reveal mt-6 mb-16 max-w-[16ch]">Quatre étapes. Une trajectoire.</h2>
        <div className="grid grid-cols-1 border-t border-[var(--tf-ink)]/15 sm:grid-cols-2">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="tf-reveal flex flex-col gap-3 border-b border-[var(--tf-ink)]/15 py-10 sm:odd:border-r sm:odd:pr-10 sm:even:pl-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-bold tabular-nums text-[var(--tf-coral)]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="tf-display text-3xl normal-case">{step.title}</h3>
              </div>
              <p className="max-w-md text-base leading-relaxed text-[var(--tf-ink)]/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — a typographic price ledger: each program is
          an oversized display line, not a card. Program name reads at poster
          scale, description sits as a quiet column, price lands as a coral
          figure hard-right — type carries the whole section. */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <span className="tf-label tf-reveal">04 / {services.heading}</span>
        <h2 className="tf-reveal mt-6 mb-16 max-w-2xl">Choisissez votre format.</h2>
        <div className="flex flex-col">
          {services.programs.map((program, index) => (
            <article
              key={program.name}
              className="tf-service-row tf-reveal grid grid-cols-1 items-baseline gap-4 py-8 sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:py-10"
            >
              <span className="tf-service-index text-sm">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="tf-service-name tf-reveal-word">{program.name}</h3>
                <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
              </div>
              <p className="tf-service-price sm:text-right">{program.priceLabel}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Benefits — powerful short phrases, huge scale, airy stack */}
      <section className="bg-[var(--tf-ink)] px-6 py-28 sm:px-10 lg:px-16">
        <span className="tf-label tf-reveal">05 / {benefits.heading}</span>
        <ul className="relative mt-10 flex flex-col">
          {benefits.items.map((item, index) => (
            <li
              key={item.title}
              className="tf-reveal flex flex-col gap-2 border-t border-[var(--tf-line)] py-8 last:border-b sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <h3 className="text-3xl normal-case sm:text-4xl">{item.title}</h3>
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <span className="hidden font-mono text-xs text-[var(--tf-ochre)] sm:block">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. Testimonials — one oversized quoted word at a time, editorial */}
      <section className="px-6 py-28 sm:px-10 lg:px-16">
        <span className="tf-label tf-reveal">06 / {testimonials.heading}</span>
        <div className="mt-14 flex flex-col gap-20">
          {testimonials.quotes.map((item) => (
            <figure key={item.name} className="tf-reveal max-w-4xl">
              <blockquote>
                <p className="text-3xl font-medium leading-tight text-foreground sm:text-5xl">
                  <span className="tf-shout mr-2 text-5xl leading-none sm:text-7xl">&ldquo;</span>
                  {item.quote}
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-[var(--tf-coral)]" aria-hidden="true" />
                <span className="font-bold text-foreground">{item.name}</span>
                <span>&mdash; {item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action — the commanding closing line, full-bleed coral */}
      <section className="bg-[var(--tf-coral)] px-6 py-28 text-[var(--tf-ink)] sm:px-10 lg:px-16">
        <span className="tf-label tf-reveal text-[var(--tf-ink)]/70">07 / Commencer</span>
        <h2 className="tf-reveal mt-6 max-w-4xl text-[var(--tf-ink)]">{cta.heading}</h2>
        <p className="tf-reveal mt-8 max-w-lg text-lg leading-relaxed text-[var(--tf-ink)]/80">
          {cta.subcopy}
        </p>
        <Button
          size="lg"
          className="tf-reveal mt-10 bg-[var(--tf-ink)] px-8 text-[var(--tf-paper)] hover:bg-[var(--tf-ink)]/85"
        >
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact — the form itself reads as one more typographic block */}
      <section className="px-6 py-28 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="tf-reveal">
            <span className="tf-label">08 / Contact</span>
            <h2 className="mt-6 max-w-md">{contact.heading}</h2>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">
              {contact.subcopy}
            </p>
            <div className="mt-10 hidden sm:block">
              <GradientBlock
                aspect="aspect-[3/1]"
                className="rounded-sm opacity-80"
                from="var(--tf-coral)"
                via="var(--tf-ochre)"
                to="var(--tf-ink)"
                variant="linear"
                angle={95}
              />
            </div>
          </div>
          <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
        </div>
      </section>
    </main>
  );
}
