import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShapeGraphic, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Retro-futuristic page (brief #08) — 80s vision of the future, refined
 * nostalgia. Renders the same eight-section arc as the reference routes
 * (hero → coach intro → method → services → benefits → testimonials → CTA →
 * contact), sourcing every line of copy from `coachContent` and every visual
 * from the offline placeholder primitives. The theme scope
 * (`.theme-retro-futuristic`) is applied by the parent route layout.
 *
 * Signature device: `.rf-horizon` + `.rf-sun` — a chrome sun sinking behind a
 * perspective grid floor, anchoring the hero and echoed as the CTA's closing
 * horizon. Section rhythm deliberately varies: full-bleed horizon hero,
 * bordered intro grid, numbered stacked method, three-card services, dense
 * icon-led benefit grid, quote cards, full-bleed horizon CTA, boxed contact
 * console.
 */
export default function RetroFuturisticPage() {
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
      {/* 1. Hero — full-bleed horizon + chrome sun, the signature moment */}
      <section className="rf-horizon relative flex min-h-[92vh] flex-col justify-end overflow-hidden px-6 pb-20 pt-32 sm:px-10">
        <div aria-hidden="true" className="rf-sun" />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <span className="rf-eyebrow rf-rise block">Coaching / Transformation</span>
          <h1 className="rf-rise mt-6 max-w-4xl" style={{ animationDelay: "0.1s" }}>
            {heroHeadline}
          </h1>
          <p
            className="rf-rise mt-8 max-w-xl text-lg leading-relaxed text-foreground/80"
            style={{ animationDelay: "0.2s" }}
          >
            {heroSubcopy}
          </p>
          <div className="rf-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="px-8">
              {cta.buttonLabel}
            </Button>
            <Button size="lg" variant="outline" className="rf-btn-outline px-8">
              {services.heading}
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-28 px-6 py-24 sm:gap-36 sm:px-10 sm:py-32">
        {/* 2. Coach intro — bordered chrome panel, asymmetric */}
        <section>
          <div className="mb-12 flex items-center gap-4">
            <span className="rf-eyebrow rf-eyebrow--magenta">01 / The Coach</span>
            <div className="rf-rule flex-1" />
          </div>
          <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
            <div className="relative w-fit rounded-full shadow-[var(--rf-glow-magenta)]">
              <AvatarBlob
                name={coachName}
                size={140}
                color="var(--rf-magenta)"
                textColor="oklch(0.13 0.03 320)"
                className="ring-2 ring-[var(--rf-cyan)]"
              />
            </div>
            <div className="border-l border-[var(--rf-hairline)] pl-10 sm:pl-16">
              <h2 className="mb-4">{intro.heading}</h2>
              <p className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-[var(--rf-cyan)]">
                {coachName}
              </p>
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

        {/* 3. Method — numbered stacked sequence, chrome-gradient numerals */}
        <section>
          <div className="mb-12 flex items-center gap-4">
            <span className="rf-eyebrow">02 / The Method</span>
            <div className="rf-rule flex-1" />
          </div>
          <h2 className="mb-14">{method.heading}</h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--rf-hairline)] bg-[var(--rf-hairline)] sm:grid-cols-2">
            {method.steps.map((step, index) => (
              <div key={step.title} className="flex gap-6 bg-[var(--rf-night)] p-8">
                <span className="rf-num text-5xl leading-none">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2 text-foreground">{step.title}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-foreground/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Services / programs — three chrome cards */}
        <section>
          <div className="mb-12 flex items-center gap-4">
            <span className="rf-eyebrow rf-eyebrow--magenta">03 / Programs</span>
            <div className="rf-rule flex-1" />
          </div>
          <h2 className="mb-14">{services.heading}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
            {services.programs.map((program, index) => (
              <Card key={program.name} className="text-left">
                <CardHeader>
                  <ShapeGraphic
                    shape={index === 0 ? "triangle" : index === 1 ? "polygon" : "circle"}
                    className="mb-6 h-10 w-10"
                    color="var(--rf-magenta)"
                    secondaryColor="var(--rf-cyan)"
                  />
                  <CardTitle className="text-xl">{program.name}</CardTitle>
                  <CardDescription className="mt-3 leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rf-rule mb-5" />
                  <p
                    className="text-lg font-bold uppercase tracking-wide text-[var(--rf-gold)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {program.priceLabel}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. Benefits — dense icon-led grid */}
        <section>
          <div className="mb-12 flex items-center gap-4">
            <span className="rf-eyebrow">04 / Why Clients Stay</span>
            <div className="rf-rule flex-1" />
          </div>
          <h2 className="mb-14">{benefits.heading}</h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius)] border border-[var(--rf-hairline)] bg-[var(--rf-night-deep)] p-6"
              >
                <span
                  aria-hidden="true"
                  className="mb-4 block h-1.5 w-8 rounded-full bg-[var(--rf-cyan)]"
                  style={{ boxShadow: "var(--rf-glow-cyan)" }}
                />
                <h3 className="mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Testimonials — quote cards */}
        <section>
          <div className="mb-12 flex items-center gap-4">
            <span className="rf-eyebrow rf-eyebrow--magenta">05 / Results</span>
            <div className="rf-rule flex-1" />
          </div>
          <h2 className="mb-14">{testimonials.heading}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.quotes.map((item) => (
              <Card key={item.name}>
                <CardContent className="flex flex-col gap-5">
                  <span
                    aria-hidden="true"
                    className="text-4xl leading-none text-[var(--rf-magenta)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    &ldquo;
                  </span>
                  <p className="leading-relaxed text-foreground/85">{item.quote}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <AvatarBlob
                      name={item.name}
                      size={40}
                      color="var(--rf-cyan)"
                      textColor="oklch(0.13 0.03 320)"
                    />
                    <div>
                      <p className="text-sm font-bold">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* 7. Call-to-action — full-bleed horizon, closing echo of the hero */}
      <section className="rf-horizon relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-10">
        <div aria-hidden="true" className="rf-sun" style={{ bottom: "-10%" }} />
        <div className="relative z-10 mx-auto max-w-xl">
          <span className="rf-eyebrow">06 / Begin</span>
          <h2 className="mx-auto mt-6">{cta.heading}</h2>
          <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-foreground/80">
            {cta.subcopy}
          </p>
          <Button size="lg" className="px-8">
            {cta.buttonLabel}
          </Button>
        </div>
      </section>

      {/* 8. Contact / booking — boxed console */}
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <section>
          <div className="mb-12 flex items-center gap-4">
            <span className="rf-eyebrow rf-eyebrow--magenta">07 / Transmit</span>
            <div className="rf-rule flex-1" />
          </div>
          <div className="grid grid-cols-1 gap-12 rounded-[var(--radius)] border border-[var(--rf-hairline)] bg-[var(--rf-night-deep)] p-8 sm:grid-cols-[1fr_1.1fr] sm:gap-16 sm:p-14">
            <div>
              <h2 className="mb-6">{contact.heading}</h2>
              <p className="max-w-md leading-relaxed text-foreground/75">{contact.subcopy}</p>
              <div className="mt-8">
                <Badge className="border-[var(--rf-cyan)] text-[var(--rf-cyan)]">
                  Online &amp; In-Person
                </Badge>
              </div>
            </div>
            <div>
              <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
