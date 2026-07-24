import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Corporate Professional page (brief #09) — trust-building, established,
 * refined. Every line of copy comes from `coachContent`; every image is a
 * CSS/SVG placeholder primitive. The theme scope
 * (`.theme-corporate-professional`) is applied by the parent route layout.
 *
 * COMPOSITION (reworked away from the shared 8-section card-grid arc): the
 * page is staged as an official DOSSIER. Sections open with a numbered
 * "clause" file tab, and each section uses a DISTINCT geometry so none
 * repeats a card grid:
 *   - Hero: asymmetric masthead + a content-bearing credential aside
 *     (not a decorative gradient block).
 *   - SIGNATURE: a full-bleed navy "letterhead certification banner" with
 *     the coach name and tabular credential figures — the one bold moment.
 *   - Intro: asymmetric portrait + bio with a hairline byline.
 *   - Method: a horizontal numbered PROCESS RAIL joined by a connector spine
 *     (not four identical cells).
 *   - Services: a divided RATE LEDGER (numbered rows, right-aligned prices).
 *   - Benefits: a numbered WARRANTY CHECKLIST (divided rows, no cards).
 *   - Testimonials: an asymmetric CASE FILE — one large featured statement
 *     beside a stacked register of the remaining clients (NOT a 3-card grid).
 *   - CTA: a bordered assurance panel.
 *   - Contact: asymmetric intake card.
 * Below-hero sections reveal on scroll via CSS scroll-driven animation.
 */
export default function CorporateProfessionalPage() {
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

  const credentials = [
    { value: "10+", label: "Ans d'expérience" },
    { value: "480", label: "Clientes coachées" },
    { value: "96%", label: "Programmes menés à terme" },
  ];

  const [featuredQuote, ...supportingQuotes] = testimonials.quotes;

  return (
    <main className="flex flex-col">
      {/* 1. HERO — asymmetric masthead + content-bearing credential aside */}
      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 pb-16 pt-20 sm:grid-cols-[1.35fr_1fr] sm:gap-16 sm:px-10 sm:pb-24 sm:pt-28">
        <div>
          <span className="cp-rise cp-eyebrow block">Cabinet de coaching depuis</span>
          <h1 className="cp-rise mt-8 max-w-2xl" style={{ animationDelay: "0.08s" }}>
            {heroHeadline}
          </h1>
          <p
            className="cp-rise mt-8 max-w-lg text-lg leading-relaxed text-foreground/75"
            style={{ animationDelay: "0.16s" }}
          >
            {heroSubcopy}
          </p>
          <div className="cp-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.24s" }}>
            <Button size="lg" className="cp-cta px-8">
              {cta.buttonLabel}
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              {services.heading}
            </Button>
          </div>
        </div>

        {/* Content-bearing aside — the coach's standing, not filler decoration */}
        <aside
          className="cp-rise self-stretch"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex h-full flex-col justify-between rounded-[var(--radius)] border border-[var(--cp-line)] bg-card p-8 shadow-[var(--cp-shadow-card)]">
            <div>
              <span className="cp-eyebrow">Profil du cabinet</span>
              <p className="cp-serif mt-6 text-2xl leading-snug text-primary">
                {tagline}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 border-t border-[var(--cp-line)] pt-6">
              <AvatarBlob
                name={coachName}
                size={52}
                color="var(--primary)"
                textColor="var(--primary-foreground)"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">{coachName}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Coach principale &amp; Fondatrice
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* SIGNATURE: full-bleed navy letterhead certification banner */}
      <section className="cp-banner cp-rise" style={{ animationDelay: "0.36s" }}>
        <div className="cp-rule-draw cp-banner-rule" />
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-14">
            <div className="max-w-xs">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/60">
                Cabinet certifié
              </span>
              <p className="cp-serif mt-3 text-xl leading-snug text-primary-foreground">
                Une décennie de résultats de coaching mesurés et fiables.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
              {credentials.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index === 0
                      ? "flex items-baseline gap-4 sm:flex-col sm:items-start sm:gap-2"
                      : "flex items-baseline gap-4 sm:flex-col sm:items-start sm:gap-2 sm:border-l sm:border-[var(--cp-line-onnavy)] sm:pl-6"
                  }
                >
                  <dd className="cp-serif cp-tabular text-4xl font-semibold text-primary-foreground sm:text-5xl">
                    {stat.value}
                  </dd>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/60">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="cp-banner-rule" />
      </section>

      {/* Contained document body from here down */}
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        {/* 2. INTRO — asymmetric portrait + bio, hairline byline */}
        <section className="cp-reveal mt-24 sm:mt-32">
          <div className="cp-clause mb-10">
            <span className="cp-clause-no">01</span>
            <span className="cp-clause-label">À propos</span>
            <span className="cp-clause-line" />
          </div>
          <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
            <AvatarBlob
              name={coachName}
              size={132}
              color="var(--primary)"
              textColor="var(--primary-foreground)"
              className="ring-1 ring-[var(--cp-line)]"
            />
            <div>
              <h2 className="mb-4">{intro.heading}</h2>
              <p className="mb-8 border-b border-[var(--cp-line)] pb-6 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--cp-cobalt)]">
                {coachName} — Coach principale
              </p>
              <div className="flex max-w-2xl flex-col gap-5">
                {intro.paragraphs.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-foreground/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. METHOD — horizontal numbered process rail joined by a connector */}
        <section className="cp-reveal mt-24 sm:mt-32">
          <div className="cp-clause mb-10">
            <span className="cp-clause-no">02</span>
            <span className="cp-clause-label">La Méthode</span>
            <span className="cp-clause-line" />
          </div>
          <h2 className="mb-14 max-w-xl">{method.heading}</h2>
          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
            {method.steps.map((step, index) => (
              <li key={step.title} className="cp-node">
                {/* Connector spine + node marker (row layout draws the thread) */}
                <div className="flex items-center gap-3">
                  <span className="cp-node-dot" />
                  <span className="hidden h-px flex-1 bg-[var(--cp-line)] sm:block" />
                </div>
                <span className="cp-serif cp-tabular mt-5 block text-3xl font-semibold text-[var(--cp-cobalt)]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="mt-3">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* 4. SERVICES — divided rate ledger, numbered rows + right prices */}
        <section className="cp-reveal mt-24 sm:mt-32">
          <div className="cp-clause mb-10">
            <span className="cp-clause-no">03</span>
            <span className="cp-clause-label">Programmes</span>
            <span className="cp-clause-line" />
          </div>
          <h2 className="mb-14 max-w-xl">{services.heading}</h2>
          <div className="flex flex-col divide-y divide-[var(--cp-line)] border-y border-[var(--cp-line)]">
            {services.programs.map((program, index) => (
              <div
                key={program.name}
                className="grid grid-cols-1 items-baseline gap-6 py-8 sm:grid-cols-[3rem_1fr_auto] sm:gap-10"
              >
                <span className="cp-serif cp-tabular hidden text-2xl font-semibold text-muted-foreground sm:block">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2">{program.name}</h3>
                  <p className="max-w-xl leading-relaxed text-foreground/70">
                    {program.description}
                  </p>
                </div>
                <p className="cp-serif text-lg font-semibold text-primary sm:text-right">
                  {program.priceLabel}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. BENEFITS — numbered warranty checklist (divided rows, no cards) */}
        <section className="cp-reveal mt-24 sm:mt-32">
          <div className="cp-clause mb-10">
            <span className="cp-clause-no">04</span>
            <span className="cp-clause-label">Résultats fiables</span>
            <span className="cp-clause-line" />
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_1.6fr] sm:gap-16">
            <h2 className="max-w-sm">{benefits.heading}</h2>
            <ul className="flex flex-col divide-y divide-[var(--cp-line)] border-t border-[var(--cp-line)]">
              {benefits.items.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[2.5rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[2.5rem_16rem_1fr] sm:gap-8"
                >
                  <span className="cp-warrant-no text-lg">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-base">{item.title}</h3>
                  <p className="col-span-2 leading-relaxed text-foreground/70 sm:col-span-1">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* 6. TESTIMONIALS — asymmetric CASE FILE: one featured statement +
          a stacked client register (deliberately NOT a 3-card grid) */}
      <section className="cp-reveal cp-banner mt-24 sm:mt-32">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <div className="cp-clause mb-12">
            <span className="cp-clause-no" style={{ borderColor: "var(--cp-line-onnavy)", color: "var(--cp-cobalt-foreground)" }}>
              05
            </span>
            <span className="cp-clause-label" style={{ color: "var(--primary-foreground)" }}>
              Résultats clients
            </span>
            <span className="cp-clause-line" style={{ background: "var(--cp-line-onnavy)" }} />
          </div>
          <h2 className="mb-14 max-w-xl text-primary-foreground">
            {testimonials.heading}
          </h2>
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-[1.5fr_1fr] sm:gap-16">
            {/* Featured statement */}
            <figure className="flex flex-col">
              <span className="cp-serif text-6xl leading-none text-[var(--cp-cobalt)]" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="cp-serif -mt-4 text-2xl leading-relaxed text-primary-foreground sm:text-3xl">
                {featuredQuote.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-[var(--cp-line-onnavy)] pt-6">
                <AvatarBlob
                  name={featuredQuote.name}
                  size={44}
                  color="var(--cp-cobalt)"
                  textColor="var(--cp-cobalt-foreground)"
                />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    {featuredQuote.name}
                  </p>
                  <p className="text-xs text-primary-foreground/60">{featuredQuote.role}</p>
                </div>
              </figcaption>
            </figure>

            {/* Supporting client register — stacked, divided rows */}
            <div className="flex flex-col divide-y divide-[var(--cp-line-onnavy)] border-t border-[var(--cp-line-onnavy)] sm:border-l sm:border-t-0 sm:pl-10">
              {supportingQuotes.map((item) => (
                <div key={item.name} className="flex flex-col gap-3 py-6 first:pt-0 sm:first:pt-6">
                  <p className="text-base leading-relaxed text-primary-foreground/90">
                    {item.quote}
                  </p>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-primary-foreground/60">
                    <span className="font-semibold text-[var(--cp-cobalt-foreground)]">
                      {item.name}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        {/* 7. CTA — bordered assurance panel */}
        <section className="cp-reveal mt-24 rounded-[var(--radius)] border border-[var(--cp-line)] bg-card px-8 py-16 text-center shadow-[var(--cp-shadow-card)] sm:mt-32 sm:px-16 sm:py-20">
          <span className="cp-eyebrow">06 — Prochaine étape</span>
          <h2 className="mx-auto mt-6 max-w-xl">{cta.heading}</h2>
          <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-foreground/70">
            {cta.subcopy}
          </p>
          <Button size="lg" className="cp-cta px-8">
            {cta.buttonLabel}
          </Button>
        </section>

        {/* 8. CONTACT — asymmetric intake */}
        <section className="cp-reveal mb-24 mt-24 sm:mb-32 sm:mt-32">
          <div className="cp-clause mb-10">
            <span className="cp-clause-no">07</span>
            <span className="cp-clause-label">Contact</span>
            <span className="cp-clause-line" />
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-16">
            <div>
              <h2 className="mb-6">{contact.heading}</h2>
              <p className="max-w-md leading-relaxed text-foreground/70">
                {contact.subcopy}
              </p>
              <Separator className="my-8 max-w-md bg-[var(--cp-line)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Réponse sous 1 jour ouvré
              </p>
            </div>
            <div className="rounded-[var(--radius)] border border-[var(--cp-line)] bg-card p-8 shadow-[var(--cp-shadow-card)] sm:p-10">
              <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
