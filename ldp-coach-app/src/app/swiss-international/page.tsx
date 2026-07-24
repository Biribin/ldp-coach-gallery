import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBlock, ShapeGraphic, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Swiss/International page (brief #21) — rigorous 12-column grid, ultra-clean
 * grotesque typography, systematic red/black/white discipline. Renders the
 * same eight-section arc as the japandi reference (hero → coach intro →
 * method → services → benefits → testimonials → CTA → contact), sourcing
 * every line of copy from `coachContent` and every image from the offline
 * CSS/SVG placeholder primitives. The theme scope
 * (`.theme-swiss-international`) is applied by the parent route layout, not
 * here.
 *
 * Composition intent vs. every other route: the grid itself is the content.
 * A visible 12-column scaffold with printed coordinate numerals runs behind
 * the hero; column position is load-bearing throughout (asymmetric spans,
 * not centered blocks); the Method section breaks into oversized red
 * tabular numerals; the Programs section is a dense information register
 * (rows, not cards) — the one section that most sharply departs from the
 * card-grid pattern used everywhere else in the gallery.
 */
function GridCoords({ count = 13 }: { count?: number }) {
  return (
    <div className="ch-grid-lines" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

export default function SwissInternationalPage() {
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
    <main className="mx-auto flex max-w-[100rem] flex-col">
      {/* 1. Hero — the grid exposed as the design itself. Full-bleed, asymmetric. */}
      <section className="relative border-b-2 border-(--ch-ink) px-4 pb-16 pt-10 sm:px-8 sm:pt-16">
        <div className="ch-grid relative">
          <GridCoords />
          <div className="col-span-12 mb-10 flex items-center justify-between border-b border-border pb-4">
            <span className="ch-eyebrow">Swiss / International</span>
            <span className="ch-coord hidden sm:inline">01&ndash;08</span>
          </div>

          <div className="ch-snap col-span-12 sm:col-span-8">
            <h1 className="max-w-4xl">{heroHeadline}</h1>
          </div>

          <div
            className="ch-snap col-span-12 mt-8 flex flex-col justify-between gap-8 sm:col-span-4 sm:mt-0 sm:border-l sm:border-border sm:pl-8"
            style={{ animationDelay: "0.08s" }}
          >
            <p className="text-base leading-relaxed text-foreground/75">
              {heroSubcopy}
            </p>
            <div className="flex flex-col gap-3">
              <Button size="lg" className="w-full">
                {cta.buttonLabel}
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                {services.heading}
              </Button>
            </div>
          </div>

          <div
            className="ch-snap col-span-12 mt-14"
            style={{ animationDelay: "0.12s" }}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="ch-coord">Fig. 01 — Program Field</span>
              <span className="ch-coord">12 / 12</span>
            </div>
            <GradientBlock
              aspect="aspect-[16/5]"
              variant="linear"
              angle={90}
              from="var(--ch-ink)"
              via="oklch(0.3 0 0)"
              to="var(--ch-red)"
            />
          </div>
        </div>
      </section>

      {/* 2. Coach intro — objective clarity, asymmetric grid split */}
      <section className="border-b border-border px-4 py-20 sm:px-8">
        <div className="ch-grid">
          <div className="col-span-12 mb-10 flex items-center gap-4 sm:col-span-3">
            <span className="ch-eyebrow">02</span>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Profile
            </span>
          </div>
          <div className="col-span-12 sm:col-span-9">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-[8rem_1fr] sm:gap-12">
              <AvatarBlob
                name={coachName}
                size={112}
                color="var(--ch-ink)"
                textColor="oklch(1 0 0)"
              />
              <div>
                <h2 className="mb-2">{intro.heading}</h2>
                <p className="mb-8 text-sm font-semibold uppercase tracking-[0.12em] text-(--ch-red)">
                  {coachName}
                </p>
                <div className="grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
                  {intro.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm leading-relaxed text-foreground/80"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Method — the signature break: oversized red tabular numerals,
          a strict 4-column numbered register, full-bleed dense rhythm. */}
      <section className="border-b-2 border-(--ch-ink) bg-(--ch-ink) px-4 py-20 text-white sm:px-8">
        <div className="ch-grid">
          <div className="col-span-12 mb-14 flex items-center justify-between border-b border-white/20 pb-6">
            <div className="flex items-center gap-4">
              <span className="ch-eyebrow">03</span>
              <h2 className="text-white">{method.heading}</h2>
            </div>
            <span className="ch-coord hidden sm:inline">04 Steps</span>
          </div>

          <div className="col-span-12 grid grid-cols-1 gap-0 sm:grid-cols-4">
            {method.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 border-t border-white/20 py-8 pr-6 sm:border-l sm:border-t-0 sm:pl-6 sm:first:border-l-0"
              >
                <span className="ch-num text-6xl sm:text-7xl">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services / programs — a dense information register (rows, not
          cards), the section that most sharply breaks the gallery's default
          card layout. */}
      <section className="border-b border-border px-4 py-20 sm:px-8">
        <div className="ch-grid">
          <div className="col-span-12 mb-10 flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-4">
              <span className="ch-eyebrow">04</span>
              <h2>{services.heading}</h2>
            </div>
            <span className="ch-coord hidden sm:inline">
              {services.programs.length.toString().padStart(2, "0")} Entries
            </span>
          </div>

          <div className="col-span-12">
            <div className="hidden border-b border-border pb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:grid sm:grid-cols-[3rem_1fr_16rem_10rem]">
              <span>No.</span>
              <span>Program</span>
              <span>Detail</span>
              <span className="text-right">Rate</span>
            </div>
            {services.programs.map((program, index) => (
              <div
                key={program.name}
                className="ch-row grid grid-cols-1 gap-3 py-6 sm:grid-cols-[3rem_1fr_16rem_10rem] sm:items-center sm:gap-6"
              >
                <span className="ch-coord">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-lg font-bold">{program.name}</span>
                <span className="text-sm leading-relaxed text-foreground/70">
                  {program.description}
                </span>
                <span className="text-right text-base font-bold tabular-nums text-(--ch-red)">
                  {program.priceLabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits — clarity stated plainly, a strict 3-column grid of
          marked entries with coordinate labels instead of card frames. */}
      <section className="border-b border-border px-4 py-20 sm:px-8">
        <div className="ch-grid">
          <div className="col-span-12 mb-12 flex items-center gap-4">
            <span className="ch-eyebrow">05</span>
            <h2>{benefits.heading}</h2>
          </div>
          <div className="col-span-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
            {benefits.items.map((item, index) => (
              <div key={item.title} className="border-t-2 border-(--ch-ink) pt-4">
                <span className="ch-coord">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="mb-2 mt-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials — organized proof, three columns with a bold red
          quotation rule as the only decorative device. */}
      <section className="border-b border-border px-4 py-20 sm:px-8">
        <div className="ch-grid">
          <div className="col-span-12 mb-12 flex items-center gap-4">
            <span className="ch-eyebrow">06</span>
            <h2>{testimonials.heading}</h2>
          </div>
          <div className="col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.quotes.map((item) => (
              <Card key={item.name} className="flex flex-col justify-between">
                <CardContent className="flex flex-col gap-6">
                  <span
                    aria-hidden="true"
                    className="ch-rule-thick w-8 bg-(--ch-red)"
                  />
                  <p className="text-base leading-relaxed text-foreground/85">
                    {item.quote}
                  </p>
                  <div className="mt-2 flex items-center gap-3 border-t border-border pt-4">
                    <AvatarBlob
                      name={item.name}
                      size={36}
                      color="var(--ch-ink)"
                      textColor="oklch(1 0 0)"
                    />
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call-to-action — deliberate precision, full-bleed red field */}
      <section className="border-b-2 border-(--ch-ink) bg-(--ch-red) px-4 py-24 text-white sm:px-8">
        <div className="ch-grid">
          <div className="col-span-12 sm:col-span-2">
            <span className="ch-eyebrow text-white/80">07</span>
          </div>
          <div className="col-span-12 sm:col-span-10">
            <h2 className="max-w-2xl text-white">{cta.heading}</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/85">
              {cta.subcopy}
            </p>
            <Button
              size="lg"
              className="mt-10 bg-white text-(--ch-red) hover:bg-white/90"
            >
              {cta.buttonLabel}
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Contact / booking — a numbered field register */}
      <section className="px-4 py-20 sm:px-8">
        <div className="ch-grid">
          <div className="col-span-12 mb-12 flex items-center gap-4">
            <span className="ch-eyebrow">08</span>
            <h2>{contact.heading}</h2>
          </div>
          <div className="col-span-12 sm:col-span-5">
            <p className="max-w-sm text-sm leading-relaxed text-foreground/70">
              {contact.subcopy}
            </p>
            <div className="mt-10 hidden sm:block">
              <ShapeGraphic shape="rect" color="var(--ch-ink)" className="h-24 w-24" />
            </div>
          </div>
          <div className="col-span-12 mt-10 sm:col-span-7 sm:mt-0 sm:border-l sm:border-border sm:pl-12">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
