import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GradientBlock, ShapeGraphic, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Material page (brief #24) — Google-inspired card surfaces, subtle
 * elevation, bold yet systematic color, purposeful motion. Renders the same
 * eight-section arc as the reference routes (hero -> coach intro -> method ->
 * services -> benefits -> testimonials -> CTA -> contact), sourcing every
 * line of copy from `coachContent` and every image from the offline CSS/SVG
 * placeholder primitives. The theme scope (`.theme-material`) is applied by
 * the parent route layout, not here.
 *
 * Composition intent: depth and structure over decoration. The hero opens on
 * an asymmetric bento grid of cards at different elevations (not a centered
 * title over a box) — the page's thesis stated immediately. The method
 * section rises as a literal staircase of increasing elevation, echoing
 * "structured steps." Section rhythm varies deliberately: dense bento grid,
 * airy stacked staircase, elevated card grid, icon-row list, horizontal
 * proof-card row, a single oversized pill FAB moment, then a tonal contact
 * panel — no layout repeats twice.
 */
export default function MaterialPage() {
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
    <main className="mx-auto flex max-w-6xl flex-col gap-28 px-6 py-20 sm:gap-36 sm:px-10 sm:py-28">
      {/* 1. Hero — asymmetric bento grid of elevated cards, the thesis stated up front */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-6 sm:grid-rows-[auto_auto]">
        <div className="md-rise md-elevation-2 col-span-1 flex flex-col justify-between rounded-[28px] bg-[var(--md-primary)] p-8 text-[var(--primary-foreground)] sm:col-span-4 sm:row-span-2 sm:p-12">
          <span className="md-eyebrow bg-white/15 text-white">
            {coachName}
          </span>
          <div>
            <h1 className="mt-8 max-w-xl text-[var(--primary-foreground)]">
              {heroHeadline}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--primary-foreground)]/85">
              {heroSubcopy}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="md-fab-pulse bg-[var(--md-tertiary)] px-8 text-[var(--accent-foreground)] hover:bg-[var(--md-tertiary)]"
              >
                {cta.buttonLabel}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent px-8 text-[var(--primary-foreground)] hover:bg-white/10 hover:text-[var(--primary-foreground)]"
              >
                {services.heading}
              </Button>
            </div>
          </div>
        </div>

        {/* Two smaller elevated cards stack beside the hero — dense vs airy contrast */}
        <div
          className="md-rise md-elevation-1 col-span-1 flex flex-col justify-center gap-2 rounded-[20px] bg-[var(--md-tertiary-container)] p-6 sm:col-span-2"
          style={{ animationDelay: "0.08s" }}
        >
          <ShapeGraphic shape="circle" className="mb-2 h-9 w-9" color="var(--md-tertiary)" />
          <p className="text-sm font-semibold text-[var(--md-ink)]">
            Méthode en {method.steps.length} étapes
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {method.heading} — évaluer, construire, ajuster, pérenniser.
          </p>
        </div>
        <div
          className="md-rise md-elevation-1 col-span-1 overflow-hidden rounded-[20px] sm:col-span-2"
          style={{ animationDelay: "0.16s" }}
        >
          <GradientBlock
            aspect="aspect-[4/3]"
            variant="radial"
            from="var(--md-primary-container)"
            to="var(--md-tertiary-container)"
            className="h-full"
          />
        </div>
      </section>

      {/* 2. Coach intro — presented on a clear elevated surface */}
      <section className="md-reveal grid grid-cols-1 items-start gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
        <div className="md-elevation-2 rounded-[24px] bg-[var(--md-primary-container)] p-6">
          <AvatarBlob
            name={coachName}
            size={104}
            color="var(--md-primary)"
            textColor="var(--primary-foreground)"
          />
        </div>
        <div>
          <span className="md-eyebrow">{intro.heading}</span>
          <h2 className="mb-6 mt-5">{coachName}</h2>
          <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
            {intro.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="rounded-2xl bg-[var(--md-surface-dim)] p-5 text-sm leading-relaxed text-foreground/80"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Method — a rising staircase: each step sits higher, with deeper elevation */}
      <section className="md-reveal">
        <span className="md-eyebrow">Étapes structurées</span>
        <h2 className="mb-16 mt-5">{method.heading}</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col rounded-[20px] bg-card p-6"
              style={{
                boxShadow: `var(--md-elevation-${index + 1})`,
                transform: `translateY(${(method.steps.length - 1 - index) * 14}px)`,
              }}
            >
              <span
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--md-primary)] text-sm font-bold text-[var(--primary-foreground)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {index + 1}
              </span>
              <h3 className="mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — elevated card grid, distinct priority per card */}
      <section className="md-reveal">
        <span className="md-eyebrow">{services.heading}</span>
        <h2 className="mb-14 mt-5">Des programmes adaptés à votre vie</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.programs.map((program, index) => (
            <Card
              key={program.name}
              className={index === 0 ? "md-card-featured" : ""}
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--md-tertiary-container)]">
                  <ShapeGraphic
                    shape={index === 0 ? "polygon" : index === 1 ? "rect" : "circle"}
                    className="h-6 w-6"
                    color="var(--md-tertiary)"
                  />
                </div>
                <CardTitle className="text-xl">{program.name}</CardTitle>
                <CardDescription className="mt-3 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p
                  className="text-lg font-semibold text-[var(--md-primary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {program.priceLabel}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. Benefits — quiet icon-row list, no card repetition */}
      <section className="md-reveal rounded-[28px] bg-[var(--md-surface-dim)] px-6 py-14 sm:px-14 sm:py-16">
        <span className="md-eyebrow">{benefits.heading}</span>
        <h2 className="mb-12 mt-5 max-w-lg">Pourquoi elles restent fidèles au programme</h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {benefits.items.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="md-elevation-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--md-success-container)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--md-success)]" />
              </span>
              <div>
                <h3 className="mb-1">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — horizontal proof-card row, tangible proof cards */}
      <section className="md-reveal">
        <span className="md-eyebrow">{testimonials.heading}</span>
        <h2 className="mb-14 mt-5">Des résultats, dans leurs mots</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.quotes.map((item, index) => (
            <Card key={item.name} className={index === 1 ? "sm:-translate-y-4" : ""}>
              <CardContent className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <AvatarBlob
                    name={item.name}
                    size={44}
                    color={index % 2 === 0 ? "var(--md-primary)" : "var(--md-tertiary)"}
                    textColor="var(--primary-foreground)"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-foreground/85">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action — one oversized pill FAB moment, the recurring signature */}
      <section className="flex flex-col items-center rounded-[28px] bg-[var(--md-primary)] px-8 py-20 text-center sm:px-16">
        <span className="md-eyebrow bg-white/15 text-white">Prête quand vous l&apos;êtes</span>
        <h2 className="mx-auto mt-6 max-w-xl text-[var(--primary-foreground)]">
          {cta.heading}
        </h2>
        <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-[var(--primary-foreground)]/80">
          {cta.subcopy}
        </p>
        <Button
          size="lg"
          className="md-fab-pulse h-16 rounded-full bg-[var(--md-tertiary)] px-12 text-base text-[var(--accent-foreground)] hover:bg-[var(--md-tertiary)]"
        >
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact / booking — tonal panel, filled fields */}
      <section className="md-reveal grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-16">
        <div>
          <span className="md-eyebrow">{contact.heading}</span>
          <h2 className="mb-6 mt-5">Construisons votre plan</h2>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            {contact.subcopy}
          </p>
        </div>
        <div className="md-elevation-1 rounded-[24px] bg-card p-8 sm:p-10">
          <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
        </div>
      </section>
    </main>
  );
}
