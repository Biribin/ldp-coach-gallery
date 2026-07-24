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
 * Scandinavian page (brief #11) — hygge warmth, natural materials, cozy
 * minimalism. Renders the same eight-section arc as the reference routes
 * (hero → coach intro → method → services → benefits → testimonials → CTA →
 * contact), sourcing every line of copy from `coachContent` and every image
 * from the offline CSS/SVG placeholder primitives. The theme scope
 * (`.theme-scandinavian`) is applied by the parent route layout, not here.
 *
 * Composition intent: a "woven plank" rhythm — full-bleed honey-wood bands
 * alternate with contained cream bands, like planks underfoot, instead of
 * one repeated container width. Section breaks use the signature `sc-braid`
 * knitted-cable rule instead of a hairline. The method section breaks the
 * grid into a horizontal filmstrip of "hearth stones" rather than a stacked
 * list, and services are laid out as an asymmetric two-plus-one cluster.
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

  return (
    <main className="flex flex-col">
      {/* 1. Hero — an asymmetric, warm-lit thesis, not a centered box */}
      <section className="px-6 pb-20 pt-16 sm:px-10 sm:pt-24 lg:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="sc-eyebrow sc-rise block">
              Online &amp; In-Person Coaching
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
              <span className="sc-braid-sm sc-braid w-24" aria-hidden="true" />
            </div>
          </div>
          {/* Off-center "wood grain" panel — deliberate scale contrast against the type block */}
          <div
            className="sc-rise relative"
            style={{ animationDelay: "0.15s" }}
          >
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
                Coaching for the long, warm haul
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="sc-braid" aria-hidden="true" />

      {/* 2. Coach intro — full-bleed wood band, intimate & warm */}
      <section className="sc-plank px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 sm:grid-cols-[auto_1fr] sm:gap-16">
          <AvatarBlob
            name={coachName}
            size={140}
            color="var(--sc-cream)"
            textColor="var(--sc-wood)"
            className="ring-4 ring-[var(--sc-wool)]/40"
          />
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sc-wool)]">
              01 — Meet Your Coach
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

      {/* 3. Method — a horizontal filmstrip of "hearth stones", not a stacked list */}
      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="sc-eyebrow">02 — The Method</span>
          <h2 className="mb-12 mt-4 max-w-xl">{method.heading}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {method.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[var(--radius)] border border-border bg-[var(--card)] p-7 shadow-[var(--sc-shadow-soft)]"
              >
                <span className="text-4xl font-medium leading-none text-[var(--sc-wood)]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="mb-2 mt-5">{step.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <span className="sc-braid block" aria-hidden="true" />
      </div>

      {/* 4. Services — asymmetric two-plus-one cluster, dense vs airy */}
      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="sc-eyebrow">03 — Programs</span>
          <h2 className="mb-12 mt-4">{services.heading}</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader className="lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-8">
                <ShapeGraphic
                  shape="circle"
                  className="mb-6 h-14 w-14 lg:mb-0"
                  color="var(--sc-forest)"
                />
                <div>
                  <CardTitle className="text-2xl">
                    {services.programs[0].name}
                  </CardTitle>
                  <CardDescription className="mt-3 max-w-md leading-relaxed">
                    {services.programs[0].description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <span className="sc-braid-sm sc-braid mb-5 block w-16" aria-hidden="true" />
                <p className="text-lg font-semibold text-[var(--sc-wood)]">
                  {services.programs[0].priceLabel}
                </p>
              </CardContent>
            </Card>
            {services.programs.slice(1).map((program) => (
              <Card key={program.name}>
                <CardHeader>
                  <ShapeGraphic
                    shape="circle"
                    className="mb-6 h-10 w-10"
                    color="var(--sc-forest)"
                  />
                  <CardTitle className="text-xl">{program.name}</CardTitle>
                  <CardDescription className="mt-3 leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="sc-braid-sm sc-braid mb-5 block w-16" aria-hidden="true" />
                  <p className="text-lg font-semibold text-[var(--sc-wood)]">
                    {program.priceLabel}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits — full-bleed wool band, airy checklist */}
      <section className="bg-[var(--sc-wool)] px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="sc-eyebrow">04 — Why Clients Stay</span>
          <h2 className="mb-12 mt-4">{benefits.heading}</h2>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--sc-berry)]"
                />
                <div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials — dense stacked quotes, contained */}
      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="sc-eyebrow">05 — Client Results</span>
          <h2 className="mb-12 mt-4">{testimonials.heading}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.quotes.map((item) => (
              <Card key={item.name}>
                <CardContent className="flex flex-col gap-5">
                  <span
                    aria-hidden="true"
                    className="text-4xl leading-none text-[var(--sc-wood)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="text-lg leading-relaxed text-foreground/85"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.quote}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <AvatarBlob
                      name={item.name}
                      size={44}
                      color="var(--sc-forest)"
                      textColor="var(--sc-cream)"
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

      {/* 7. CTA — full-bleed berry-warmed band, a friendly invitation home */}
      <section className="bg-[var(--sc-forest)] px-6 py-20 text-center sm:px-10 sm:py-24">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sc-wool)]">
          06 — Ready?
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
      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-16">
          <div>
            <span className="sc-eyebrow">07 — Get in Touch</span>
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
