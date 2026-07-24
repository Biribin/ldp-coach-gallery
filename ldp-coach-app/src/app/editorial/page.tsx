import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GradientBlock, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Editorial page (brief #03) — a coaching feature story art-directed like a
 * print magazine. All eight sections of the shared arc are present and
 * reachable (hero → coach intro → method → services → benefits →
 * testimonials → CTA → contact), but the COMPOSITION deliberately breaks the
 * generic vertical card-grid recipe used by neighbouring routes:
 *
 *  - Masthead + dateline foot bracket the piece like a running head.
 *  - Hero is an asymmetric cover spread (headline well | duotone plate).
 *  - The profile is a genuine `column-count:2` justified article with a
 *    floated crimson drop cap AND a hanging marginalia rail (feature vs. note).
 *  - The method is a DEPARTMENT LEDGER — a running numbered list with hanging
 *    serif folios on baseline rules, not a card grid.
 *  - Services are a FEATURE WELL — one lead program blown up as the well's
 *    lead article, the other two run as a hairline index list beneath it
 *    (feature-vs-list contrast, not three identical cards).
 *  - Testimonials are the section's SIGNATURE: a newsprint "Letters to the
 *    Editor" column — genuine multi-column correspondence, each letter opening
 *    with a crimson serif initial and closing with a right-aligned signature.
 *    No cards, no single giant pull quote, no full-bleed band, no avatars.
 *  - Benefits are a ruled contents list; the CTA is a colophon end-statement
 *    on an ink band; contact is the reply card.
 *
 * Entrance motion is scroll-driven via `.ed-reveal` (defined in editorial.css,
 * guarded by @supports + prefers-reduced-motion; defaults to visible). The
 * theme scope (`.theme-editorial`) is applied by the parent route layout.
 */
export default function EditorialPage() {
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

  // Split the profile copy: first paragraph opens the article (drop cap),
  // the rest flow as multi-column body text.
  const [ledeParagraph, ...bodyParagraphs] = intro.paragraphs;

  // Feature-well split: the first program is the lead article, the remainder
  // run as a hairline index list beneath it.
  const [leadProgram, ...indexPrograms] = services.programs;

  return (
    <main className="mx-auto max-w-6xl px-6 pb-28 pt-10 sm:px-10 sm:pb-40 sm:pt-14">
      {/* Masthead — the running head of the publication */}
      <header className="ed-reveal flex items-baseline justify-between gap-4 pb-4">
        <span className="ed-serif text-xl font-black tracking-tight sm:text-2xl">
          LA&nbsp;VIE&nbsp;EN&nbsp;FORCE
        </span>
        <span className="ed-caption ed-hang hidden sm:inline">
          Numéro 03 · Le Portrait Coaching
        </span>
        <span className="ed-eyebrow ed-hang">Vol. I</span>
      </header>
      <div className="ed-rule-ink" />

      {/* 1. Hero — the cover / opening spread */}
      <section className="grid grid-cols-1 gap-10 pt-12 sm:pt-16 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
        <div className="ed-reveal flex flex-col justify-between">
          <div>
            <p className="ed-eyebrow mb-6">Le Portrait Coaching · {tagline}</p>
            <h1 className="mb-8">{heroHeadline}</h1>
            <p className="ed-serif max-w-2xl text-xl italic leading-snug text-foreground/80 sm:text-2xl">
              {heroSubcopy}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button size="lg" className="px-8">
              {cta.buttonLabel}
            </Button>
            <span className="ed-caption">
              Textes et coaching par {coachName}
            </span>
          </div>
        </div>
        {/* Full-bleed cover "photograph" — a print duotone wash */}
        <figure className="ed-reveal flex flex-col">
          <GradientBlock
            aspect="aspect-[3/4]"
            className="w-full"
            from="oklch(0.5 0.19 25)"
            via="oklch(0.4 0.09 30)"
            to="oklch(0.16 0.012 75)"
          />
          <figcaption className="ed-caption mt-3 border-t border-[var(--ed-rule)] pt-3">
            Fig. 1 — La force, bâtie pour durer. Photographié pour ce numéro.
          </figcaption>
        </figure>
      </section>

      {/* 2. Coach intro — the profile: a two-column article with a hanging
          marginalia rail (feature body vs. margin note) */}
      <section className="pt-28 sm:pt-36">
        <div className="ed-reveal mb-10 flex items-end justify-between gap-6 border-b border-[var(--ed-rule)] pb-4">
          <div className="flex items-baseline gap-5">
            <span className="ed-folio ed-hang text-5xl sm:text-6xl">01</span>
            <div>
              <p className="ed-eyebrow mb-1">Le Portrait</p>
              <h2 className="text-3xl sm:text-4xl">{intro.heading}</h2>
            </div>
          </div>
          <AvatarBlob
            name={coachName}
            size={92}
            color="var(--ed-red)"
            textColor="var(--primary-foreground)"
            className="hidden shrink-0 sm:block"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_15rem] lg:gap-14">
          <div className="ed-reveal-soft">
            <p className="ed-caption mb-6">Portrait de {coachName}</p>
            <div className="ed-body ed-columns ed-dropcap max-w-none">
              <p className="mb-5">{ledeParagraph}</p>
              {bodyParagraphs.map((paragraph, index) => (
                <p key={index} className="mb-5">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Marginalia rail — a hanging editor's note, distinct from body */}
          <aside className="ed-margin-note ed-reveal self-start pt-5 lg:mt-16">
            <p className="ed-eyebrow mb-3">Le Mot de la Rédaction</p>
            <p className="ed-serif text-lg italic leading-snug text-foreground/85">
              {tagline}
            </p>
            <p className="ed-caption mt-4">
              Dix ans de coaching, condensés en une méthode.
            </p>
          </aside>
        </div>
      </section>

      {/* 3. Method — a DEPARTMENT LEDGER: running numbered list, hanging serif
          folios on baseline rules (not a card grid) */}
      <section className="pt-28 sm:pt-36">
        <div className="ed-reveal mb-10 flex items-end gap-5 border-b border-[var(--ed-rule)] pb-4">
          <span className="ed-folio ed-hang text-5xl sm:text-6xl">02</span>
          <div>
            <p className="ed-eyebrow mb-1">La Méthode</p>
            <h2 className="text-3xl sm:text-4xl">{method.heading}</h2>
          </div>
        </div>
        <div>
          {method.steps.map((step, index) => (
            <article
              key={step.title}
              className="ed-ledger-row ed-reveal grid grid-cols-1 items-baseline gap-x-8 gap-y-2 py-7 sm:grid-cols-[4.5rem_minmax(0,14rem)_1fr]"
            >
              <span className="ed-folio ed-hang text-4xl leading-none sm:text-5xl">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="text-xl sm:text-2xl">{step.title}</h3>
              <p className="ed-body text-base">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Services — a FEATURE WELL: one lead program blown up, the rest a
          hairline index list beneath (feature-vs-list contrast) */}
      <section className="pt-28 sm:pt-36">
        <div className="ed-reveal mb-12 flex items-end gap-5 border-b border-[var(--ed-rule)] pb-4">
          <span className="ed-folio ed-hang text-5xl sm:text-6xl">03</span>
          <div>
            <p className="ed-eyebrow mb-1">Le Guide</p>
            <h2 className="text-3xl sm:text-4xl">{services.heading}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Lead feature program */}
          <article className="ed-well-lead ed-reveal pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <span className="ed-eyebrow">Le Programme Vedette · No. 01</span>
              <span className="ed-serif ed-hang text-lg font-bold text-[var(--ed-red)]">
                {leadProgram.priceLabel}
              </span>
            </div>
            <h3 className="mt-4 text-3xl leading-tight sm:text-4xl">
              {leadProgram.name}
            </h3>
            <p className="ed-body mt-5 max-w-prose text-lg leading-relaxed">
              {leadProgram.description}
            </p>
            <div className="mt-8">
              <Button size="lg" className="px-8">
                {cta.buttonLabel}
              </Button>
            </div>
          </article>

          {/* Secondary programs as a hairline index list */}
          <div className="ed-reveal-soft self-start">
            <p className="ed-eyebrow mb-4">Aussi dans ce Guide</p>
            {indexPrograms.map((program, index) => (
              <article
                key={program.name}
                className="ed-well-item flex items-baseline gap-5 py-6 first:border-t-[var(--ed-rule-strong)]"
              >
                <span className="ed-folio ed-hang text-2xl leading-none">
                  {(index + 2).toString().padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg">{program.name}</h3>
                    <span className="ed-serif ed-hang text-sm font-bold text-[var(--ed-red)]">
                      {program.priceLabel}
                    </span>
                  </div>
                  <p className="ed-body mt-2 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits — argued as a ruled contents list */}
      <section className="pt-28 sm:pt-36">
        <div className="ed-reveal mb-12 flex items-end gap-5 border-b border-[var(--ed-rule)] pb-4">
          <span className="ed-folio ed-hang text-5xl sm:text-6xl">04</span>
          <div>
            <p className="ed-eyebrow mb-1">Le Dossier</p>
            <h2 className="text-3xl sm:text-4xl">{benefits.heading}</h2>
          </div>
        </div>
        <div className="divide-y divide-[var(--ed-rule)]">
          {benefits.items.map((item, index) => (
            <div
              key={item.title}
              className="ed-reveal grid grid-cols-1 gap-x-8 gap-y-2 py-6 first:pt-0 sm:grid-cols-[3rem_1fr_2fr] sm:items-baseline"
            >
              <span className="ed-folio ed-hang text-2xl">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="text-xl">{item.title}</h3>
              <p className="ed-body text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — SIGNATURE: newsprint "Letters to the Editor" column.
          Genuine multi-column correspondence, crimson serif initial per letter,
          right-aligned signature. Not cards / not one pull quote / not a band. */}
      <section className="pt-28 sm:pt-36">
        <div className="ed-reveal mb-3 flex items-end gap-5 border-b border-[var(--ed-rule)] pb-4">
          <span className="ed-folio ed-hang text-5xl sm:text-6xl">05</span>
          <div>
            <p className="ed-eyebrow mb-1">Les Témoignages</p>
            <h2 className="text-3xl sm:text-4xl">{testimonials.heading}</h2>
          </div>
        </div>
        <p className="ed-caption mb-10">
          Courrier des lectrices · Dans leurs propres mots
        </p>

        <div className="ed-letters ed-reveal-soft">
          {testimonials.quotes.map((item) => (
            <figure key={item.name} className="ed-letter">
              <blockquote className="ed-letter-body">{item.quote}</blockquote>
              <figcaption className="ed-letter-sig">
                <strong>{item.name}</strong>
                <br />
                {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action — a colophon closing statement on an ink band */}
      <section className="ed-reveal ed-band mt-28 px-6 py-16 sm:mt-36 sm:px-14 sm:py-20">
        <p className="ed-eyebrow mb-6">En Conclusion</p>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="mb-6 max-w-2xl text-4xl text-[var(--ed-paper)] sm:text-5xl">
              {cta.heading}
              <span className="ed-endmark ml-3" aria-hidden="true" />
            </h2>
            <p className="ed-serif max-w-xl text-xl italic leading-snug text-[var(--ed-paper-muted)]">
              {cta.subcopy}
            </p>
          </div>
          <div className="flex lg:justify-end">
            <Button
              size="lg"
              variant="secondary"
              className="px-10 py-6 text-base"
            >
              {cta.buttonLabel}
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Contact — the reply card at the foot of the feature */}
      <section className="pt-24 sm:pt-32">
        <div className="ed-reveal mb-10 flex items-end gap-5 border-b border-[var(--ed-rule)] pb-4">
          <span className="ed-folio ed-hang text-5xl sm:text-6xl">06</span>
          <div>
            <p className="ed-eyebrow mb-1">Le Coupon-Réponse</p>
            <h2 className="text-3xl sm:text-4xl">{contact.heading}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1.15fr] sm:gap-16">
          <div>
            <p className="ed-body max-w-md text-base leading-relaxed">
              {contact.subcopy}
            </p>
            <Separator className="my-8 bg-[var(--ed-rule)]" />
            <p className="ed-caption">
              Coaching par {coachName} · En ligne et en personne
            </p>
          </div>
          <div className="sm:border-l sm:border-[var(--ed-rule)] sm:pl-16">
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
