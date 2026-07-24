import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShapeGraphic, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Flat page (brief #14) — zero depth, bold solid colors, simple iconography,
 * crisp cleanliness. Renders the same eight-section arc as the reference
 * routes (hero → coach intro → method → services → benefits → testimonials
 * → CTA → contact), sourcing every line of copy from `coachContent`. The
 * theme scope (`.theme-flat`) is applied by the parent route layout.
 *
 * Composition intent: color IS the section boundary. Full-bleed solid blocks
 * (blue, yellow, coral, ink, paper) sit edge-to-edge with no gradients, no
 * shadows, no soft transitions between them — the opposite of the japandi
 * reference's negative-space breathing room. The signature device is the
 * "flat dial": a hard-ringed solid circle used for numerals and icons.
 */
export default function FlatPage() {
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

  const benefitIcons: Array<"circle" | "rect" | "triangle" | "polygon"> = [
    "circle",
    "rect",
    "triangle",
    "polygon",
    "circle",
  ];

  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero — asymmetric thesis, not a centered title-over-box */}
      <section className="relative bg-[var(--flat-blue)] px-6 pt-20 pb-24 text-white sm:px-10 sm:pt-28 sm:pb-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="flat-pop flat-eyebrow inline-block rounded-full border-2 border-white px-4 py-1.5">
              Online &amp; in-person coaching
            </span>
            <h1
              className="flat-pop mt-8 max-w-2xl text-white"
              style={{ animationDelay: "0.08s" }}
            >
              {heroHeadline}
            </h1>
          </div>
          <p
            className="flat-pop max-w-sm text-lg leading-relaxed text-white/90 lg:mb-2 lg:justify-self-end lg:text-right"
            style={{ animationDelay: "0.18s" }}
          >
            {heroSubcopy}
          </p>
        </div>

        <div
          className="flat-pop mx-auto mt-14 flex max-w-6xl flex-wrap items-center gap-4"
          style={{ animationDelay: "0.26s" }}
        >
          <Button
            size="lg"
            className="bg-[var(--flat-coral)] px-8 text-white hover:bg-[var(--flat-coral)]/90"
          >
            {cta.buttonLabel}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent px-8 text-white hover:bg-white hover:text-[var(--flat-blue)]"
          >
            {services.heading}
          </Button>
        </div>

        {/* Flat geometric motif — solid shapes, no gradient, breaks past the block edge */}
        <div className="pointer-events-none absolute -bottom-10 right-6 hidden sm:right-10 sm:block lg:right-16">
          <div className="flex items-end gap-4 opacity-95">
            <ShapeGraphic shape="circle" color="var(--flat-yellow)" className="h-16 w-16" />
            <ShapeGraphic shape="triangle" color="var(--flat-coral)" className="h-24 w-24" />
            <ShapeGraphic shape="rect" color="var(--flat-green)" className="h-12 w-12" />
          </div>
        </div>
      </section>

      {/* 2. Coach intro — flat yellow block, dense two-column */}
      <section className="bg-[var(--flat-yellow)] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16">
          <AvatarBlob
            name={coachName}
            size={140}
            color="var(--flat-ink)"
            textColor="var(--flat-yellow)"
            className="rounded-full"
          />
          <div>
            <h2 className="mb-2 text-[var(--flat-ink)]">{intro.heading}</h2>
            <p className="mb-8 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--flat-blue-ink)]">
              {coachName}
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {intro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="rounded-[var(--radius)] border-2 border-[var(--flat-ink)] bg-[var(--flat-paper)] p-5 text-sm leading-relaxed text-[var(--flat-ink)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Method — full-bleed ink block, dial sequence */}
      <section className="bg-[var(--flat-ink)] px-6 py-20 text-white sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-white">{method.heading}</h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {method.steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-start gap-5">
                <span
                  className="flat-dial bg-[var(--flat-yellow)] text-[var(--flat-ink)]"
                  style={{ borderColor: "white" }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services / programs — paper background, three solid-color cards */}
      <section className="bg-[var(--flat-paper)] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-[var(--flat-ink)]">{services.heading}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {services.programs.map((program, index) => {
              const blockColor = [
                "var(--flat-blue)",
                "var(--flat-coral)",
                "var(--flat-green)",
              ][index % 3];
              return (
                <Card
                  key={program.name}
                  className="flex flex-col justify-between gap-8 p-2"
                  style={{ backgroundColor: blockColor }}
                >
                  <CardContent className="flex flex-col gap-4 p-4 text-white">
                    <ShapeGraphic
                      shape={(["rect", "circle", "triangle"] as const)[index % 3]}
                      color="white"
                      className="h-10 w-10"
                    />
                    <h3 className="text-white">{program.name}</h3>
                    <p className="text-sm leading-relaxed text-white/90">
                      {program.description}
                    </p>
                  </CardContent>
                  <div className="border-t-2 border-white/40 px-4 pb-4 pt-4">
                    <p className="text-lg font-extrabold text-white">
                      {program.priceLabel}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Benefits — dense icon-led list, coral block */}
      <section className="bg-[var(--flat-coral)] px-6 py-20 text-white sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-white">{benefits.heading}</h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.items.map((item, index) => (
              <div key={item.title} className="flex gap-4">
                <span className="flat-dial h-12 w-12 shrink-0 bg-white text-[var(--flat-coral)]">
                  <ShapeGraphic
                    shape={benefitIcons[index % benefitIcons.length]}
                    color="var(--flat-coral)"
                    className="h-6 w-6"
                  />
                </span>
                <div>
                  <h3 className="mb-1 text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/85">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials — blue block, badge-labeled quote cards */}
      <section className="bg-[var(--flat-blue)] px-6 py-20 text-white sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-white">{testimonials.heading}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.quotes.map((item) => (
              <Card
                key={item.name}
                className="border-white bg-[var(--flat-paper)] p-2"
              >
                <CardContent className="flex flex-col gap-5 p-4">
                  <Badge className="w-fit bg-[var(--flat-yellow)] text-[var(--flat-ink)]">
                    Verified client
                  </Badge>
                  <p className="text-base leading-relaxed text-[var(--flat-ink)]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-1 flex items-center gap-3">
                    <AvatarBlob
                      name={item.name}
                      size={40}
                      color="var(--flat-ink)"
                      textColor="var(--flat-paper)"
                    />
                    <div>
                      <p className="text-sm font-extrabold text-[var(--flat-ink)]">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call-to-action — green block, easy and inviting */}
      <section className="bg-[var(--flat-green)] px-6 py-24 text-center text-white sm:px-10 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-white">{cta.heading}</h2>
          <p className="mx-auto mt-5 mb-10 max-w-md leading-relaxed text-white/90">
            {cta.subcopy}
          </p>
          <Button
            size="lg"
            className="bg-[var(--flat-ink)] px-10 text-white hover:bg-[var(--flat-ink)]/85"
          >
            {cta.buttonLabel}
          </Button>
        </div>
      </section>

      {/* 8. Contact / booking — paper block, plain and clear */}
      <section className="bg-[var(--flat-paper)] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="mb-6 text-[var(--flat-ink)]">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-muted-foreground">
              {contact.subcopy}
            </p>
          </div>
          <div className="rounded-[var(--radius)] border-2 border-[var(--flat-ink)] bg-white p-8">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
