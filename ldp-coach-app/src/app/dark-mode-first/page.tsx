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
 * Dark Mode First page (brief #04) — designed dark-first, never a light page
 * inverted. Renders the shared eight-section arc (hero -> coach intro ->
 * method -> services -> benefits -> testimonials -> CTA -> contact), sourcing
 * copy from `coachContent` and imagery from the offline placeholder
 * primitives. The theme scope (`.theme-dark-mode-first`) is applied by the
 * parent route layout, not here.
 *
 * Composition intent: content emerges from shadow rather than sitting on a
 * flat dark background. Depth reads through tonal elevation steps
 * (surface-1 -> surface-4) and soft glow, never a drop shadow. The signature
 * "power line" gauge — a vertical meter that fills like an oscilloscope
 * output — runs beside the Method section, making "intensity held under
 * control" literal. The hero is asymmetric: an oversized condensed headline
 * overlapping a lit gradient field, not a centered title in a box.
 */
export default function DarkModeFirstPage() {
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
    <main className="mx-auto flex max-w-6xl flex-col gap-32 px-6 py-20 sm:gap-48 sm:px-10 sm:py-28">
      {/* 1. Hero — a thesis: asymmetric scale, headline overlapping a lit field */}
      <section className="relative pt-4 sm:pt-8">
        <div className="dmf-eyebrow dmf-emerge mb-8">Après les heures / 01</div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-end lg:gap-4">
          <h1
            className="dmf-emerge relative z-10 -mb-4 lg:-mb-10"
            style={{ animationDelay: "0.08s" }}
          >
            {heroHeadline}
          </h1>
          <div
            className="dmf-emerge relative order-first lg:order-none lg:translate-y-6"
            style={{ animationDelay: "0.2s" }}
          >
            <GradientBlock
              aspect="aspect-[4/3]"
              className="rounded-sm"
              variant="radial"
              from="oklch(0.72 0.15 55 / 0.85)"
              via="oklch(0.3 0.05 45 / 0.6)"
              to="oklch(0.16 0.012 260)"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-[var(--dmf-line)]"
            />
          </div>
        </div>
        <p
          className="dmf-emerge relative z-10 mt-10 max-w-xl text-lg leading-relaxed text-[var(--dmf-text-dim)]"
          style={{ animationDelay: "0.32s" }}
        >
          {heroSubcopy}
        </p>
        <div
          className="dmf-emerge relative z-10 mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "0.42s" }}
        >
          <Button size="lg" className="px-8">
            {cta.buttonLabel}
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            {services.heading}
          </Button>
        </div>
      </section>

      {/* 2. Coach intro — lit like a portrait, dense left column vs airy right */}
      <section>
        <div className="mb-12 flex items-center gap-4">
          <span className="dmf-eyebrow">Portrait / 02</span>
          <div className="dmf-line flex-1" />
        </div>
        <div className="dmf-reveal grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
          <div className="relative">
            <AvatarBlob
              name={coachName}
              size={148}
              color="var(--dmf-surface-3)"
              textColor="var(--dmf-copper)"
              className="ring-1 ring-[var(--dmf-line-strong)]"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-full opacity-60 blur-2xl"
              style={{ background: "var(--dmf-copper-dim)" }}
            />
          </div>
          <div className="sm:border-l sm:border-[var(--dmf-line)] sm:pl-16">
            <h2 className="mb-6">{intro.heading}</h2>
            <p className="dmf-eyebrow mb-8" style={{ color: "var(--dmf-copper)" }}>
              {coachName}
            </p>
            <div className="flex max-w-xl flex-col gap-5">
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-[var(--dmf-text-dim)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Method — the grid-breaking section: diagonal cascade + power-line gauge */}
      <section>
        <div className="mb-16 flex items-center gap-4">
          <span className="dmf-eyebrow">Le Système / 03</span>
          <div className="dmf-line flex-1" />
        </div>
        <h2 className="mb-16">{method.heading}</h2>
        <div className="flex gap-6 sm:gap-10">
          <div
            className="dmf-power-line hidden shrink-0 sm:block"
            style={{ ["--dmf-fill" as string]: "78%" }}
            aria-hidden="true"
          />
          <div className="flex-1 space-y-10 sm:space-y-16">
            {method.steps.map((step, index) => (
              <div
                key={step.title}
                className="dmf-reveal grid grid-cols-1 gap-4 sm:grid-cols-[6rem_1fr] sm:gap-10"
                style={{
                  marginLeft: `${index * 6}%`,
                  maxWidth: `${100 - index * 5}%`,
                }}
              >
                <span className="dmf-serif-num text-6xl leading-none tabular-nums sm:text-7xl">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div className="border-b border-[var(--dmf-line)] pb-10 sm:border-b-0 sm:pb-0">
                  <h3 className="mb-3 text-foreground">{step.title}</h3>
                  <p className="max-w-prose leading-relaxed text-[var(--dmf-text-dim)]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services / programs — distinct glowing offerings on raised panels */}
      <section>
        <div className="mb-12 flex items-center gap-4">
          <span className="dmf-eyebrow">Offres / 04</span>
          <div className="dmf-line flex-1" />
        </div>
        <h2 className="mb-14">{services.heading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {services.programs.map((program, index) => (
            <Card
              key={program.name}
              className="dmf-reveal flex flex-col"
              style={{
                background:
                  index === 1 ? "var(--dmf-surface-3)" : "var(--dmf-surface-2)",
              }}
            >
              <CardHeader>
                <ShapeGraphic
                  shape={index === 0 ? "triangle" : index === 1 ? "polygon" : "rect"}
                  className="mb-6 h-10 w-10"
                  color="var(--dmf-copper)"
                  secondaryColor="var(--dmf-cold)"
                />
                <CardTitle className="text-xl uppercase tracking-wide">
                  {program.name}
                </CardTitle>
                <CardDescription className="mt-3 leading-relaxed text-[var(--dmf-text-dim)]">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="dmf-line mb-5" />
                <p
                  className="text-lg font-semibold tracking-wide"
                  style={{ color: "var(--dmf-copper)" }}
                >
                  {program.priceLabel}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. Benefits — elite outcomes, dense grid of luminous markers */}
      <section>
        <div className="mb-12 flex items-center gap-4">
          <span className="dmf-eyebrow">Résultats d&apos;élite / 05</span>
          <div className="dmf-line flex-1" />
        </div>
        <h2 className="mb-14">{benefits.heading}</h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item) => (
            <div key={item.title} className="dmf-reveal flex gap-4">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{
                  background: "var(--dmf-copper)",
                  boxShadow: "0 0 10px 1px var(--dmf-copper)",
                }}
              />
              <div>
                <h3 className="mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--dmf-text-dim)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — luminous proof, full-bleed dark strip */}
      <section className="-mx-6 bg-[var(--dmf-surface-2)] px-6 py-20 sm:-mx-10 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <span className="dmf-eyebrow">Preuves / 06</span>
            <div className="dmf-line flex-1" />
          </div>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <h2>{testimonials.heading}</h2>
            <span className="dmf-eyebrow" style={{ color: "var(--dmf-copper)" }}>
              Signal &mdash; flux en direct
            </span>
          </div>
          {/* Instrument "signal readout": each proof is a stacked row with a
              live copper level-meter (echoing the Method power-line), a large
              luminous quote, and a right-aligned readout footer — deliberately
              NOT a 3-card grid. */}
          <div>
            {testimonials.quotes.map((item, index) => {
              const level = [88, 74, 96][index % 3];
              return (
                <div
                  key={item.name}
                  className="dmf-signal dmf-reveal grid grid-cols-[3px_1fr] gap-6 py-10 sm:grid-cols-[3px_1fr_auto] sm:gap-10 sm:py-12"
                >
                  <div
                    className="dmf-meter"
                    style={{ ["--dmf-fill" as string]: `${level}%` }}
                    aria-hidden="true"
                  />
                  <div>
                    <span
                      aria-hidden="true"
                      className="dmf-serif-num text-3xl leading-none"
                    >
                      &ldquo;
                    </span>
                    <p className="mt-3 max-w-2xl text-xl leading-relaxed text-foreground/95 sm:text-2xl">
                      {item.quote}
                    </p>
                    <div className="mt-6 flex items-center gap-3 sm:hidden">
                      <AvatarBlob
                        name={item.name}
                        size={40}
                        color="var(--dmf-surface-4)"
                        textColor="var(--dmf-copper)"
                      />
                      <div>
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-xs text-[var(--dmf-text-dim)]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden shrink-0 flex-col items-end gap-3 text-right sm:flex sm:w-44">
                    <AvatarBlob
                      name={item.name}
                      size={44}
                      color="var(--dmf-surface-4)"
                      textColor="var(--dmf-copper)"
                    />
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-[var(--dmf-text-dim)]">
                        {item.role}
                      </p>
                    </div>
                    <span
                      className="dmf-eyebrow text-[0.625rem]"
                      style={{ color: "var(--dmf-copper)" }}
                    >
                      {level}% d&apos;intensité
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Call-to-action — burns bright against the dark */}
      <section className="dmf-reveal relative overflow-hidden rounded-sm border border-[var(--dmf-line)] px-8 py-20 text-center sm:px-16 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.72 0.15 55 / 0.22), transparent 70%)",
          }}
        />
        <span className="dmf-eyebrow">Engagement / 07</span>
        <h2 className="mx-auto mt-6 max-w-2xl">{cta.heading}</h2>
        <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-[var(--dmf-text-dim)]">
          {cta.subcopy}
        </p>
        <Button size="lg" className="px-10">
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact / booking */}
      <section className="pb-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="dmf-eyebrow">Contact / 08</span>
          <div className="dmf-line flex-1" />
        </div>
        <div className="dmf-reveal grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1.1fr] sm:gap-16">
          <div>
            <h2 className="mb-6">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-[var(--dmf-text-dim)]">
              {contact.subcopy}
            </p>
          </div>
          <div className="sm:border-l sm:border-[var(--dmf-line)] sm:pl-16">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
