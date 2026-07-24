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
 * Gradient Modern page (brief #06) — color as atmosphere, not accent.
 * Renders the same eight-section arc as the reference routes (hero → coach
 * intro → method → services → benefits → testimonials → CTA → contact),
 * sourcing every line of copy from `coachContent` and every image from the
 * offline CSS/SVG placeholder primitives. The theme scope
 * (`.theme-gradient-modern`) — which also paints the sunrise→twilight
 * atmospheric page wash — is applied by the parent route layout, not here.
 *
 * Composition intent vs. the japandi route: addition + color over subtraction.
 * Where japandi subtracts into hairlines and a single clay note, this page
 * builds with gradient surfaces, spectrum-clipped emphasis, generous 20px
 * radii, soft glow shadows, and liquid "breathing" motion. Color carries the
 * entire emotional charge: an asymmetric gradient-hero, gradient-tinted method
 * cards, gradient-led benefit bars, and a full coral→violet CTA panel — one
 * continuous, color-rich ascent in energy.
 */
export default function GradientModernPage() {
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

  // Style a single emphasis word ("Transform") in the shared headline with the
  // spectrum clip — the copy itself is unchanged, only its treatment shifts.
  const [beforeTransform, afterTransform] = heroHeadline.split("Transform");

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-28 px-6 py-24 sm:gap-36 sm:px-10 sm:py-32">
      {/* 1. Hero — a vibrant, immersive gradient opening (asymmetric) */}
      <section className="grid grid-cols-1 items-center gap-14 pt-6 sm:grid-cols-[1.05fr_0.95fr] sm:gap-16 sm:pt-10">
        <div>
          <span className="gm-eyebrow gm-rise">Contemporary Strength</span>
          <h1 className="gm-rise mt-6 max-w-xl" style={{ animationDelay: "0.08s" }}>
            {beforeTransform}
            <span className="gm-grad-text">Transform</span>
            {afterTransform}
          </h1>
          <p
            className="gm-rise mt-6 max-w-md text-lg leading-relaxed text-foreground/75"
            style={{ animationDelay: "0.16s" }}
          >
            {heroSubcopy}
          </p>
          <div
            className="gm-rise mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <Button size="lg" className="gm-grad-btn px-8">
              {cta.buttonLabel}
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              {services.heading}
            </Button>
          </div>
        </div>

        {/* Ambient "image" surrogate — a breathing multi-stop gradient orb with
         * soft glow blooms. Pure CSS via the GradientBlock primitive; the
         * .gm-breathe class slowly shifts its spectrum like light. */}
        <div className="gm-rise relative" style={{ animationDelay: "0.2s" }}>
          <GradientBlock
            aspect="aspect-square"
            variant="conic"
            from="oklch(0.7 0.17 38)"
            via="oklch(0.6 0.2 18)"
            to="oklch(0.58 0.2 320)"
            angle={210}
            className="gm-breathe rounded-[2rem] shadow-[var(--gm-shadow-lift)]"
          />
          {/* Glow blooms layered over the orb — decorative, no text */}
          <GradientBlock
            aspect="aspect-square"
            variant="radial"
            from="oklch(0.95 0.12 70 / 0.55)"
            to="oklch(0.95 0.12 70 / 0)"
            className="pointer-events-none absolute -left-6 -top-6 h-1/2 w-1/2 rounded-full blur-2xl"
          />
          <GradientBlock
            aspect="aspect-square"
            variant="radial"
            from="oklch(0.8 0.16 320 / 0.5)"
            to="oklch(0.8 0.16 320 / 0)"
            className="pointer-events-none absolute -bottom-8 -right-6 h-1/2 w-1/2 rounded-full blur-2xl"
          />
        </div>
      </section>

      {/* 2. Coach intro — radiating warmth, the coach as a contemporary guide */}
      <section>
        <div className="mb-10 flex items-center gap-4">
          <span className="gm-pill">01 · Meet the coach</span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-[auto_1fr] sm:gap-16">
          <div className="relative mx-auto sm:mx-0">
            {/* Gradient ring behind the avatar — a soft halo of spectrum color */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full blur-md"
              style={{
                background:
                  "conic-gradient(from 140deg, var(--gm-coral), var(--gm-rose), var(--gm-violet), var(--gm-indigo), var(--gm-coral))",
              }}
            />
            <AvatarBlob
              name={coachName}
              size={140}
              color="var(--card)"
              textColor="var(--gm-ink)"
              className="ring-4 ring-[var(--card)]"
            />
          </div>
          <div>
            <h2 className="mb-3">{intro.heading}</h2>
            <p className="gm-eyebrow mb-7">{tagline}</p>
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

      {/* 3. Method — dimensional clarity via gradient-tinted step cards */}
      <section>
        <div className="mb-10 flex items-center gap-4">
          <span className="gm-pill">02 · The method</span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <h2 className="mb-14 max-w-xl">{method.heading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {method.steps.map((step, index) => (
            <Card key={step.title} className="overflow-hidden">
              {/* Gradient header band — each step shifts hue along the spectrum */}
              <div
                aria-hidden="true"
                className="h-1.5 w-full"
                style={{
                  background: `linear-gradient(100deg, var(--gm-coral), var(--gm-rose) ${
                    30 + index * 18
                  }%, var(--gm-violet) ${60 + index * 10}%, var(--gm-indigo))`,
                }}
              />
              <CardHeader>
                <div className="mb-5 flex items-center gap-3">
                  <span className="gm-grad-text text-4xl font-bold tabular-nums leading-none">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <ShapeGraphic
                    shape="circle"
                    className="h-7 w-7"
                    color="var(--gm-rose)"
                  />
                </div>
                <CardTitle className="text-2xl">{step.title}</CardTitle>
                <CardDescription className="mt-3 leading-relaxed text-foreground/70">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — distinguished by color and depth */}
      <section>
        <div className="mb-10 flex items-center gap-4">
          <span className="gm-pill">03 · Programs</span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <h2 className="mb-14 max-w-xl">{services.heading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {services.programs.map((program, index) => (
            <Card key={program.name} className="flex flex-col">
              <CardHeader>
                <GradientBlock
                  aspect="aspect-[16/7]"
                  variant="linear"
                  angle={120}
                  from={
                    ["oklch(0.7 0.17 38)", "oklch(0.6 0.2 18)", "oklch(0.58 0.2 320)"][
                      index
                    ]
                  }
                  to={
                    ["oklch(0.6 0.2 18)", "oklch(0.58 0.2 320)", "oklch(0.5 0.16 280)"][
                      index
                    ]
                  }
                  className="mb-6 rounded-2xl"
                />
                <CardTitle className="text-xl">{program.name}</CardTitle>
                <CardDescription className="mt-3 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Separator className="mb-5 bg-[var(--border)]" />
                <p className="gm-grad-text text-lg font-semibold">
                  {program.priceLabel}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. Benefits — glowing with optimism, led by gradient accent bars */}
      <section>
        <div className="mb-10 flex items-center gap-4">
          <span className="gm-pill">04 · Why clients stay</span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <h2 className="mb-14 max-w-xl">{benefits.heading}</h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, index) => (
            <div key={item.title} className="flex gap-4">
              {/* Gradient leading bar — a vertical spectrum strip per benefit */}
              <div
                aria-hidden="true"
                className="w-1.5 shrink-0 rounded-full"
                style={{
                  background: `linear-gradient(180deg, var(--gm-coral), var(--gm-rose) ${
                    40 + index * 12
                  }%, var(--gm-violet))`,
                }}
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

      {/* 6. Testimonials — modern polish, spectrum-clipped names */}
      <section>
        <div className="mb-10 flex items-center gap-4">
          <span className="gm-pill">05 · Client results</span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <h2 className="mb-14 max-w-xl">{testimonials.heading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.quotes.map((item) => (
            <Card key={item.name}>
              <CardContent className="flex flex-col gap-5">
                <span
                  aria-hidden="true"
                  className="gm-grad-text text-5xl font-bold leading-none"
                >
                  &ldquo;
                </span>
                <p className="text-lg leading-relaxed text-foreground/85">
                  {item.quote}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <AvatarBlob
                    name={item.name}
                    size={40}
                    color="var(--secondary)"
                    textColor="var(--gm-ink)"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[var(--gm-ink)]">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action — the signature gradient moment: the panel IS color */}
      <section
        className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-20"
        style={{
          background:
            "linear-gradient(125deg, var(--gm-coral), var(--gm-rose) 42%, var(--gm-magenta) 62%, var(--gm-violet) 85%, var(--gm-indigo))",
        }}
      >
        {/* Soft light bloom over the gradient panel — depth through glow */}
        <GradientBlock
          aspect="aspect-square"
          variant="radial"
          from="oklch(1 0 0 / 0.35)"
          to="oklch(1 0 0 / 0)"
          className="pointer-events-none absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full blur-2xl"
        />
        <div className="relative">
          <span
            className="text-xs font-bold uppercase tracking-[0.24em]"
            style={{ color: "oklch(0.99 0.01 68)" }}
          >
            06 · Your next step
          </span>
          <h2
            className="mx-auto mt-6 max-w-xl"
            style={{ color: "oklch(0.99 0.01 68)" }}
          >
            {cta.heading}
          </h2>
          <p
            className="mx-auto mb-10 mt-5 max-w-md leading-relaxed"
            style={{ color: "oklch(0.99 0.01 68 / 0.88)" }}
          >
            {cta.subcopy}
          </p>
          <Button
            size="lg"
            className="px-8"
            style={{
              backgroundColor: "oklch(0.99 0.01 68)",
              color: "var(--gm-rose)",
            }}
          >
            {cta.buttonLabel}
          </Button>
        </div>
      </section>

      {/* 8. Contact / booking */}
      <section>
        <div className="mb-10 flex items-center gap-4">
          <span className="gm-pill">07 · Get in touch</span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1.1fr] sm:gap-16">
          <div>
            <h2 className="mb-6">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-foreground/75">
              {contact.subcopy}
            </p>
          </div>
          <div className="sm:border-l sm:border-[var(--border)] sm:pl-16">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
