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
 * Kinetic page (brief #12) — motion-driven athletic energy, controlled not
 * chaotic. Renders the same eight-section arc as the reference routes (hero
 * -> coach intro -> method -> services -> benefits -> testimonials -> CTA ->
 * contact), sourcing every line of copy from `coachContent` and every image
 * from the offline CSS/SVG placeholder primitives. The theme scope
 * (`.theme-kinetic`) is applied by the parent route layout, not here.
 *
 * Composition intent: momentum builds as you scroll. The hero opens on an
 * asymmetric diagonal split instead of a centered title; method and CTA
 * sections use `.kin-slant` clip-path cuts so the grid itself breaks;
 * entrances surge in from the direction of travel (`.kin-surge`); the
 * signature `.kin-track` sweep (a stopwatch-lane pulse) appears once, on the
 * method section, as the one orchestrated motion moment.
 */
export default function KineticPage() {
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
    <main className="flex flex-col overflow-x-clip">
      {/* 1. Hero — asymmetric diagonal thesis, not a centered title */}
      <section className="relative grid grid-cols-1 gap-10 px-6 pb-20 pt-16 sm:px-10 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4 lg:pb-28">
        <div className="relative z-10">
          <span className="kin-eyebrow kin-surge block">Coaching / In Motion</span>
          <h1
            className="kin-surge mt-6 max-w-2xl text-foreground"
            style={{ animationDelay: "0.08s" }}
          >
            {heroHeadline}
          </h1>
          <p
            className="kin-surge mt-8 max-w-md text-lg leading-relaxed text-foreground/75"
            style={{ animationDelay: "0.16s" }}
          >
            {heroSubcopy}
          </p>
          <div
            className="kin-surge mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <Button size="lg" className="bg-[var(--kin-cobalt)] px-8 text-primary-foreground">
              {cta.buttonLabel}
            </Button>
            <Button size="lg" variant="outline" className="border-2 px-8">
              {services.heading}
            </Button>
          </div>
        </div>
        {/* Diagonal-cut visual block breaking out of the grid on the right */}
        <div
          className="kin-slant relative min-h-[16rem] lg:-mr-10 lg:min-h-0"
          style={{ animationDelay: "0.3s" }}
        >
          <GradientBlock
            aspect="aspect-square"
            className="h-full"
            variant="linear"
            angle={125}
            from="var(--kin-cobalt)"
            via="var(--kin-ink)"
            to="var(--kin-coral)"
          />
        </div>
      </section>

      {/* 2. Coach intro — charged introduction, off-center portrait */}
      <section className="border-t-2 border-foreground/10 px-6 py-20 sm:px-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="kin-numeral text-3xl">01</span>
          <div className="h-0.5 flex-1 bg-foreground/10" />
        </div>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="mb-4">{intro.heading}</h2>
            <p className="mb-8 text-sm font-bold uppercase tracking-widest text-[var(--kin-coral)]">
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
          <AvatarBlob
            name={coachName}
            size={148}
            color="var(--kin-cobalt)"
            textColor="var(--kin-chalk)"
            className="order-1 -rotate-3 lg:order-2"
          />
        </div>
      </section>

      {/* 3. Method — diagonal-clipped full-bleed band, the signature sweep */}
      <section className="kin-slant kin-track -my-6 bg-[var(--kin-ink)] px-6 py-24 text-[var(--kin-chalk)] sm:px-10 sm:py-32">
        <div className="mb-14 flex items-center gap-4">
          <span className="kin-eyebrow text-[var(--kin-lime)]">02 — The System</span>
          <div className="h-0.5 flex-1 bg-white/15" />
        </div>
        <h2 className="mb-14 text-[var(--kin-chalk)]">{method.heading}</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="kin-rise border-l-2 border-[var(--kin-lime)] pl-5"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="kin-numeral text-5xl text-[var(--kin-lime)]">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[var(--kin-chalk)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — dense, staggered momentum cards */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mb-12 flex items-center gap-4">
          <span className="kin-numeral text-3xl">03</span>
          <div className="h-0.5 flex-1 bg-foreground/10" />
        </div>
        <h2 className="mb-14">{services.heading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.programs.map((program, index) => (
            <Card
              key={program.name}
              className="kin-rise"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <ShapeGraphic
                  shape={index === 1 ? "triangle" : "rect"}
                  className="mb-5 h-12 w-12"
                  color={index === 1 ? "var(--kin-coral)" : "var(--kin-cobalt)"}
                />
                <CardTitle className="text-xl">{program.name}</CardTitle>
                <CardDescription className="mt-3 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Separator className="mb-4" />
                <p className="kin-numeral text-lg">{program.priceLabel}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. Benefits — momentum list, directional markers */}
      <section className="border-y-2 border-foreground/10 bg-accent px-6 py-20 sm:px-10">
        <div className="mb-12 flex items-center gap-4">
          <span className="kin-numeral text-3xl">04</span>
          <div className="h-0.5 flex-1 bg-foreground/15" />
        </div>
        <h2 className="mb-14">{benefits.heading}</h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, index) => (
            <div
              key={item.title}
              className="kin-rise flex gap-4"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <ShapeGraphic
                shape="line"
                className="mt-1 h-6 w-6 shrink-0 -rotate-45"
                color="var(--kin-coral)"
              />
              <div>
                <h3 className="mb-1">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — proof, compact and airy for rhythm contrast */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mb-12 flex items-center gap-4">
          <span className="kin-numeral text-3xl">05</span>
          <div className="h-0.5 flex-1 bg-foreground/10" />
        </div>
        <h2 className="mb-14">{testimonials.heading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.quotes.map((item) => (
            <Card key={item.name}>
              <CardContent className="flex flex-col gap-5">
                <ShapeGraphic
                  shape="triangle"
                  className="h-6 w-6"
                  color="var(--kin-cobalt)"
                />
                <p className="text-base leading-relaxed text-foreground/85">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <AvatarBlob
                    name={item.name}
                    size={40}
                    color="var(--kin-coral)"
                    textColor="var(--kin-chalk)"
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

      {/* 7. Call-to-action — full-bleed slant, lands with athletic power */}
      <section className="kin-slant-reverse -my-4 bg-[var(--kin-cobalt)] px-6 py-24 text-center text-primary-foreground sm:px-10 sm:py-32">
        <span className="kin-eyebrow text-[var(--kin-lime)]">06 — Go Time</span>
        <h2 className="mx-auto mt-6 max-w-2xl text-primary-foreground">{cta.heading}</h2>
        <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-primary-foreground/85">
          {cta.subcopy}
        </p>
        <Button size="lg" variant="secondary" className="px-10">
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact / booking */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mb-12 flex items-center gap-4">
          <span className="kin-numeral text-3xl">07</span>
          <div className="h-0.5 flex-1 bg-foreground/10" />
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="mb-6">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-foreground/70">
              {contact.subcopy}
            </p>
          </div>
          <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
        </div>
      </section>
    </main>
  );
}
