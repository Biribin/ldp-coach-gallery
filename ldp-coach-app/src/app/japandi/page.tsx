import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
 * Japandi page (brief #01) — Japanese restraint × Scandinavian warmth.
 * Renders the same eight-section arc as the neobrutalist reference (hero →
 * coach intro → method → services → benefits → testimonials → CTA →
 * contact), sourcing every line of copy from `coachContent` and every image
 * from the offline CSS/SVG placeholder primitives. The theme scope
 * (`.theme-japandi`) is applied by the parent route layout, not here.
 *
 * Composition intent vs. the neobrutalist route: subtraction over framing.
 * Sections breathe in generous negative space rather than living inside
 * heavy bordered blocks; rules are hairlines, surfaces are softly lifted (no
 * hard offset shadows); a *single* warm-clay accent appears only at decisive
 * moments (dots, numerals, price, focus ring); headings are humanist serif in
 * title case. The rhythm is low and steady — an ordered, meditative descent.
 */
export default function JapandiPage() {
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
    <main className="mx-auto flex max-w-5xl flex-col gap-28 px-6 py-24 sm:gap-40 sm:px-10 sm:py-36">
      {/* 1. Hero — a tranquil, exhaled opening */}
      <section className="pt-6 sm:pt-10">
        <span
          aria-hidden="true"
          className="jp-rise block h-1.5 w-1.5 rounded-full bg-[var(--jp-clay)]"
        />
        <h1
          className="jp-rise mt-10 max-w-3xl"
          style={{ animationDelay: "0.1s" }}
        >
          {heroHeadline}
        </h1>
        <p
          className="jp-rise mt-8 max-w-xl text-lg leading-relaxed text-foreground/70"
          style={{ animationDelay: "0.2s" }}
        >
          {heroSubcopy}
        </p>
        <div
          className="jp-rise mt-12 flex flex-wrap gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <Button size="lg" className="px-8">
            {cta.buttonLabel}
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            {services.heading}
          </Button>
        </div>
        {/* Material "image" surrogate — a warm wood→paper wash, softly set */}
        <div
          className="jp-rise mt-20"
          style={{ animationDelay: "0.35s" }}
        >
          <GradientBlock
            aspect="aspect-[16/6]"
            className="rounded-xl"
            from="oklch(0.82 0.04 70)"
            via="oklch(0.9 0.02 72)"
            to="oklch(0.965 0.008 81)"
          />
        </div>
      </section>

      {/* 2. Coach intro — intimate, the coach as a calm guide */}
      <section>
        <div className="mb-12 flex items-center gap-4">
          <span className="jp-eyebrow">01</span>
          <div className="h-px flex-1 bg-[var(--jp-line)]" />
        </div>
        <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
          <AvatarBlob
            name={coachName}
            size={132}
            color="var(--jp-stone)"
            textColor="var(--foreground)"
            className="ring-1 ring-[var(--jp-line)]"
          />
          <div className="sm:border-l sm:border-[var(--jp-line)] sm:pl-16">
            <h2 className="mb-4">{intro.heading}</h2>
            <p className="mb-8 text-sm font-medium tracking-wide text-[var(--jp-clay)]">
              {coachName}
            </p>
            <div className="flex max-w-xl flex-col gap-5">
              {intro.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-relaxed text-foreground/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Method — a considered philosophy, laid out as an ordered sequence */}
      <section>
        <div className="mb-12 flex items-center gap-4">
          <span className="jp-eyebrow">02</span>
          <div className="h-px flex-1 bg-[var(--jp-line)]" />
        </div>
        <h2 className="mb-14">{method.heading}</h2>
        <div className="divide-y divide-[var(--jp-line)]">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="grid grid-cols-1 gap-6 py-12 first:pt-0 sm:grid-cols-[11rem_1fr] sm:gap-12"
            >
              <div className="flex items-baseline gap-5">
                <span className="jp-serif text-5xl leading-none tabular-nums text-[var(--jp-clay)]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
              </div>
              <p className="max-w-prose leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — uncluttered clarity */}
      <section>
        <div className="mb-12 flex items-center gap-4">
          <span className="jp-eyebrow">03</span>
          <div className="h-px flex-1 bg-[var(--jp-line)]" />
        </div>
        <h2 className="mb-14">{services.heading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {services.programs.map((program) => (
            <Card key={program.name} className="text-center">
              <CardHeader>
                <ShapeGraphic
                  shape="circle"
                  className="mx-auto mb-6 h-10 w-10"
                  color="var(--jp-stone)"
                />
                <CardTitle className="text-xl">{program.name}</CardTitle>
                <CardDescription className="mt-3 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Separator className="mb-5 bg-[var(--jp-line)]" />
                <p className="jp-serif text-lg font-medium text-[var(--jp-clay)]">
                  {program.priceLabel}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. Benefits — framed as long-term wellbeing */}
      <section>
        <div className="mb-12 flex items-center gap-4">
          <span className="jp-eyebrow">04</span>
          <div className="h-px flex-1 bg-[var(--jp-line)]" />
        </div>
        <h2 className="mb-14">{benefits.heading}</h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--jp-clay)]"
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
      </section>

      {/* 6. Testimonials — understated proof */}
      <section>
        <div className="mb-12 flex items-center gap-4">
          <span className="jp-eyebrow">05</span>
          <div className="h-px flex-1 bg-[var(--jp-line)]" />
        </div>
        <h2 className="mb-14">{testimonials.heading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.quotes.map((item) => (
            <Card key={item.name}>
              <CardContent className="flex flex-col gap-5">
                <span
                  aria-hidden="true"
                  className="jp-serif text-4xl leading-none text-[var(--jp-clay)]"
                >
                  &ldquo;
                </span>
                <p className="jp-serif text-lg leading-relaxed text-foreground/85">
                  {item.quote}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <AvatarBlob
                    name={item.name}
                    size={40}
                    color="var(--jp-stone)"
                    textColor="var(--foreground)"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action — invites rather than pushes */}
      <section className="rounded-2xl border border-[var(--jp-line)] bg-secondary/60 px-8 py-16 text-center shadow-[var(--jp-shadow-soft)] sm:px-16 sm:py-20">
        <span className="jp-eyebrow">06</span>
        <h2 className="mx-auto mt-6 max-w-xl">{cta.heading}</h2>
        <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-foreground/70">
          {cta.subcopy}
        </p>
        <Button size="lg" className="px-8">
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact / booking */}
      <section>
        <div className="mb-12 flex items-center gap-4">
          <span className="jp-eyebrow">07</span>
          <div className="h-px flex-1 bg-[var(--jp-line)]" />
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1.1fr] sm:gap-16">
          <div>
            <h2 className="mb-6">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-foreground/70">
              {contact.subcopy}
            </p>
          </div>
          <div className="sm:border-l sm:border-[var(--jp-line)] sm:pl-16">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
