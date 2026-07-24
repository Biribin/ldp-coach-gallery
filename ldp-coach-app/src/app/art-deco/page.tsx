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
 * Art Deco page (brief #13) — golden-age ballroom glamour.
 * Renders the same eight-section arc as the japandi reference (hero → coach
 * intro → method → services → benefits → testimonials → CTA → contact),
 * sourcing every line of copy from `coachContent` and every image from the
 * offline CSS/SVG placeholder primitives. The theme scope (`.theme-art-deco`)
 * is applied by the parent route layout, not here.
 *
 * Composition intent: strict bilateral symmetry as the organizing law — a
 * centered axis, mirrored gold frames, stepped chevron dividers between every
 * section. The signature: a concentric stepped sunburst arch framing the
 * hero headline, echoed smaller as the divider motif throughout. The Method
 * section breaks the grid — it radiates from a center point as a fan instead
 * of stacking, since Art Deco motifs are fundamentally sunburst geometry.
 */

function SunburstArch({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 9 }, (_, i) => i);
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {rays.map((i) => {
        const angle = -90 + (i - 4) * 11;
        const rad = (angle * Math.PI) / 180;
        const x2 = 200 + 190 * Math.sin(rad);
        const y2 = 200 - 190 * Math.cos(rad);
        return (
          <line
            key={i}
            x1={200}
            y1={200}
            x2={x2}
            y2={y2}
            stroke="var(--deco-gold)"
            strokeWidth={i === 4 ? 2 : 1}
            opacity={0.35 + (4 - Math.abs(i - 4)) * 0.12}
          />
        );
      })}
      {[60, 100, 140, 180].map((r) => (
        <path
          key={r}
          d={`M ${200 - r} 200 A ${r} ${r} 0 0 1 ${200 + r} 200`}
          fill="none"
          stroke="var(--deco-gold)"
          strokeWidth={1.5}
        />
      ))}
    </svg>
  );
}

function ChevronDivider({ index }: { index: number }) {
  return (
    <div className="flex items-center gap-6" aria-hidden="true">
      <span className="deco-numeral text-sm">{(index + 1).toString().padStart(2, "0")}</span>
      <div className="deco-chevron flex-1" />
      <span className="deco-numeral text-sm">{(index + 1).toString().padStart(2, "0")}</span>
    </div>
  );
}

export default function ArtDecoPage() {
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
    <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20 sm:gap-32 sm:px-10 sm:py-28">
      {/* 1. Hero — thesis: a centered sunburst arch crowning the headline,
          strict symmetry, not a plain centered title over a box. */}
      <section className="deco-fan-in relative flex flex-col items-center pt-8 text-center">
        <SunburstArch className="h-40 w-full max-w-2xl sm:h-52" />
        <span className="deco-eyebrow -mt-6 sm:-mt-10">Un Atelier de Coaching d&rsquo;Exception</span>
        <h1 className="mt-8 max-w-4xl text-[var(--deco-ivory)]">{heroHeadline}</h1>
        <div className="deco-rule my-8 max-w-xs" style={{ animationDelay: "0.2s" }} />
        <p
          className="deco-rise max-w-xl text-lg leading-relaxed text-foreground/75"
          style={{ animationDelay: "0.25s" }}
        >
          {heroSubcopy}
        </p>
        <div
          className="deco-rise mt-10 flex justify-center"
          style={{ animationDelay: "0.35s" }}
        >
          <Button size="lg" className="px-12">
            {cta.buttonLabel}
          </Button>
        </div>
      </section>

      <ChevronDivider index={0} />

      {/* 2. Coach intro — presented with glamour and authority, framed
          symmetrically inside a gold double-line frame. */}
      <section className="grid grid-cols-1 items-center gap-12 sm:grid-cols-[1fr_auto_1fr] sm:gap-16">
        <div className="hidden justify-self-end sm:block">
          <ShapeGraphic
            shape="line"
            className="h-32 w-32 rotate-45"
            color="var(--deco-gold)"
          />
        </div>
        <div className="deco-reveal deco-frame flex flex-col items-center p-10 text-center sm:p-14">
          {/* Bilateral-symmetry cue for mobile, where the flanking side
              line-graphics are hidden. */}
          <div className="deco-ornament mb-6 w-24 sm:hidden" aria-hidden="true">
            <div className="deco-rule" />
          </div>
          <AvatarBlob
            name={coachName}
            size={112}
            color="var(--deco-gold)"
            textColor="var(--deco-obsidian)"
          />
          <p className="deco-eyebrow mt-6">{coachName}</p>
          <h2 className="mt-4 text-[var(--deco-ivory)]">{intro.heading}</h2>
          <div className="mt-8 flex max-w-xl flex-col gap-5">
            {intro.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-foreground/80">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="hidden justify-self-start sm:block">
          <ShapeGraphic
            shape="line"
            className="h-32 w-32 -rotate-45"
            color="var(--deco-gold)"
          />
        </div>
      </section>

      <ChevronDivider index={1} />

      {/* 3. Method — the section that breaks the grid: a radial fan instead
          of a stacked list, since sunburst geometry IS the Art Deco motif. */}
      <section className="deco-reveal flex flex-col items-center text-center">
        <span className="deco-eyebrow">Sa Méthode Signature</span>
        <h2 className="mt-4 mb-16 text-[var(--deco-ivory)]">{method.heading}</h2>
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-4">
          {method.steps.map((step, index) => {
            const isOuter = index === 0 || index === method.steps.length - 1;
            return (
              <div
                key={step.title}
                className="flex flex-col items-center"
                style={{
                  transform: isOuter ? undefined : "translateY(-0.75rem)",
                }}
              >
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <ShapeGraphic
                    shape="polygon"
                    className="absolute inset-0"
                    color="var(--deco-emerald)"
                    secondaryColor="var(--deco-gold)"
                  />
                  <span className="deco-numeral relative text-2xl">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-[var(--deco-ivory)]">{step.title}</h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-foreground/70">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <ChevronDivider index={2} />

      {/* 4. Services / programs — exclusive offerings, symmetrical three-up,
          each an engraved gold-bordered plaque. */}
      <section className="deco-reveal">
        <div className="flex flex-col items-center text-center">
          <span className="deco-eyebrow">Offres d&rsquo;Exception</span>
          <h2 className="mt-4 mb-16 text-[var(--deco-ivory)]">{services.heading}</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {services.programs.map((program) => (
            <Card key={program.name} className="text-center">
              <CardHeader>
                <ShapeGraphic
                  shape="triangle"
                  className="mx-auto mb-6 h-10 w-10"
                  color="var(--deco-gold)"
                />
                <CardTitle className="text-[var(--deco-ivory)]">{program.name}</CardTitle>
                <CardDescription className="mt-4 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="deco-rule mb-5" />
                <p className="text-lg font-medium text-[var(--deco-gold)]">
                  {program.priceLabel}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <ChevronDivider index={3} />

      {/* 5. Benefits — aspirational outcomes, dense symmetrical grid, each
          marked with a small gold diamond rather than a bullet. */}
      <section className="deco-reveal flex flex-col items-center text-center">
        <span className="deco-eyebrow">Des Résultats à la Hauteur</span>
        <h2 className="mt-4 mb-16 text-[var(--deco-ivory)]">{benefits.heading}</h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 text-left sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 bg-[var(--deco-gold)]"
              />
              <div>
                <h3 className="text-[var(--deco-ivory)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ChevronDivider index={4} />

      {/* 6. Testimonials — reworked into a Deco "marquee" triptych: the
          strongest voice is set as a raised centered plaque, flanked by two
          quieter quoted columns divided by vertical gold hairlines — bilateral
          symmetry around a featured centerpiece, not a flat three-card grid. */}
      <section className="deco-reveal flex flex-col items-center gap-14 bg-[var(--deco-ink)] px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="flex flex-col items-center gap-4">
          <span className="deco-eyebrow">Preuves d&rsquo;Élégance</span>
          <h2 className="text-[var(--deco-ivory)]">{testimonials.heading}</h2>
          <div className="deco-ornament w-40" aria-hidden="true">
            <div className="deco-rule" />
          </div>
        </div>
        {(() => {
          const quotes = testimonials.quotes;
          const featuredIndex = Math.floor(quotes.length / 2);
          const featured = quotes[featuredIndex];
          const flanking = quotes.filter((_, i) => i !== featuredIndex);
          const left = flanking.slice(0, Math.ceil(flanking.length / 2));
          const right = flanking.slice(Math.ceil(flanking.length / 2));

          const Column = ({
            items,
            align,
          }: {
            items: typeof quotes;
            align: "left" | "right";
          }) => (
            <div
              className={`flex flex-1 flex-col gap-10 ${
                align === "left" ? "lg:text-right" : "lg:text-left"
              } text-center`}
            >
              {items.map((item) => (
                <figure key={item.name} className="flex flex-col gap-3">
                  <blockquote
                    className="leading-relaxed text-foreground/80"
                    style={{ fontFamily: "var(--font-deco-body)" }}
                  >
                    {item.quote}
                  </blockquote>
                  <figcaption
                    className={`flex flex-col items-center gap-0.5 ${
                      align === "left" ? "lg:items-end" : "lg:items-start"
                    }`}
                  >
                    <span className="deco-eyebrow text-[0.7rem]">{item.name}</span>
                    <span className="text-xs tracking-wide text-muted-foreground">
                      {item.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          );

          return (
            <div className="flex w-full max-w-5xl flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-10">
              <Column items={left} align="left" />
              <div className="deco-rule-v hidden lg:block" aria-hidden="true" />
              {/* Featured centerpiece plaque */}
              <figure className="deco-frame deco-plaque flex flex-1 flex-col items-center gap-5 px-8 py-10 text-center sm:px-10">
                <span
                  aria-hidden="true"
                  className="text-6xl leading-none text-[var(--deco-gold)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  &ldquo;
                </span>
                <blockquote className="max-w-sm text-lg leading-relaxed text-foreground/90">
                  {featured.quote}
                </blockquote>
                <AvatarBlob
                  name={featured.name}
                  size={52}
                  color="var(--deco-gold)"
                  textColor="var(--deco-obsidian)"
                />
                <figcaption className="flex flex-col items-center gap-0.5">
                  <span className="deco-eyebrow">{featured.name}</span>
                  <span className="text-xs tracking-wide text-muted-foreground">
                    {featured.role}
                  </span>
                </figcaption>
              </figure>
              <div className="deco-rule-v hidden lg:block" aria-hidden="true" />
              <Column items={right} align="right" />
            </div>
          );
        })()}
      </section>

      <ChevronDivider index={5} />

      {/* 7. Call-to-action — an invitation to something exclusive, framed
          by a second, smaller sunburst arch mirroring the hero. */}
      <section className="deco-reveal relative flex flex-col items-center px-8 py-16 text-center sm:px-16 sm:py-20">
        <SunburstArch className="pointer-events-none absolute inset-x-0 top-0 h-32 w-full max-w-xl self-center opacity-60" />
        <span className="deco-eyebrow relative mt-10">Une Invitation</span>
        <h2 className="relative mx-auto mt-6 max-w-xl text-[var(--deco-ivory)]">{cta.heading}</h2>
        <p className="relative mx-auto mb-10 mt-5 max-w-md leading-relaxed text-foreground/75">
          {cta.subcopy}
        </p>
        <Button size="lg" className="relative px-12">
          {cta.buttonLabel}
        </Button>
      </section>

      <ChevronDivider index={6} />

      {/* 8. Contact / booking — an engraved invitation card. */}
      <section className="deco-reveal flex flex-col items-center gap-10 text-center">
        <span className="deco-eyebrow">Solliciter une Présentation</span>
        <h2 className="max-w-xl text-[var(--deco-ivory)]">{contact.heading}</h2>
        <p className="max-w-md leading-relaxed text-foreground/75">{contact.subcopy}</p>
        <div className="w-full max-w-2xl">
          <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
        </div>
      </section>

      {/* Closing gradient wash — a quiet golden horizon, not decoration for
          its own sake: the last visual note before the page ends. */}
      <GradientBlock
        aspect="aspect-[16/3]"
        from="var(--deco-obsidian)"
        via="var(--deco-bordeaux)"
        to="var(--deco-gold)"
        angle={90}
      />
    </main>
  );
}
