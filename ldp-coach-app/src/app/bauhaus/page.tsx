import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShapeGraphic, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Bauhaus page (brief #05) — honest, functional, no-nonsense transformation.
 * Renders the same eight-section arc as the reference routes (hero → coach
 * intro → method → services → benefits → testimonials → CTA → contact),
 * sourcing every line of copy from `coachContent` and every visual from the
 * offline placeholder primitives. The theme scope (`.theme-bauhaus`) is
 * applied by the parent route layout, not here.
 *
 * Composition intent vs. neo-geo/neobrutalist: the primary triad (red, blue,
 * yellow) as FLAT saturated fields — never outlines, never soft gradients —
 * divided by bold 3px black grid rules, never hairlines. No offset shadows
 * anywhere; color and grid alone carry the structure. The hero is a literal
 * Bauhaus poster composition (asymmetric overlapping circle/square/triangle)
 * with the headline cut directly into the grid, not centered over a box.
 */

const TRIAD = ["var(--bh-red)", "var(--bh-blue)", "var(--bh-yellow)"] as const;

export default function BauhausPage() {
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

  return (
    <main className="mx-auto max-w-6xl border-x-[3px] border-[var(--bh-ink)] px-0">
      {/* 1. Hero — a Bauhaus poster: asymmetric shape cluster, headline cut into the grid */}
      <section className="relative overflow-hidden border-b-[3px] border-[var(--bh-ink)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col justify-center border-b-[3px] border-[var(--bh-ink)] px-6 py-16 sm:px-12 sm:py-24 lg:border-b-0 lg:border-r-[3px]">
            <span className="bh-eyebrow bh-rise">
              Bauhaus · La forme suit la fonction
            </span>
            <h1
              className="bh-rise mt-8 max-w-xl"
              style={{ animationDelay: "0.08s" }}
            >
              {heroHeadline}
            </h1>
            <p
              className="bh-rise mt-8 max-w-md text-lg leading-relaxed text-foreground/75"
              style={{ animationDelay: "0.16s" }}
            >
              {heroSubcopy}
            </p>
            <div
              className="bh-rise mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "0.24s" }}
            >
              <Button size="lg" className="bg-[var(--bh-blue)] px-8 text-[var(--bh-paper)] hover:bg-[var(--bh-blue)]">
                {cta.buttonLabel}
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                {services.heading}
              </Button>
            </div>
          </div>
          {/* Signature: an asymmetric primary-shape composition, Kandinsky-honest */}
          <div
            className="bh-rise relative flex min-h-[360px] items-center justify-center bg-[var(--bh-paper)] p-10 sm:min-h-[440px]"
            style={{ animationDelay: "0.1s" }}
            aria-hidden="true"
          >
            <div className="absolute inset-6 border-[3px] border-[var(--bh-ink)]" />
            <div
              className="absolute left-[8%] top-[12%] h-28 w-28 rounded-full"
              style={{ background: "var(--bh-red)" }}
            />
            <div
              className="absolute bottom-[14%] right-[10%] h-32 w-32"
              style={{ background: "var(--bh-blue)" }}
            />
            <ShapeGraphic
              shape="triangle"
              color="var(--bh-yellow)"
              className="absolute right-[18%] top-[8%] h-24 w-24"
            />
            <div className="absolute left-[20%] top-1/2 h-3 w-2/3 -translate-y-1/2 bg-[var(--bh-ink)]" />
            <div className="absolute bottom-[10%] left-[12%] h-16 w-16 rounded-full border-[3px] border-[var(--bh-ink)]" />
          </div>
        </div>
      </section>

      {/* 2. Coach intro — direct, structural, a functional profile */}
      <section className="grid grid-cols-1 border-b-[3px] border-[var(--bh-ink)] lg:grid-cols-[auto_1fr]">
        <div className="flex items-center justify-center border-b-[3px] border-[var(--bh-ink)] bg-[var(--bh-yellow)] p-10 lg:border-b-0 lg:border-r-[3px]">
          <AvatarBlob
            name={coachName}
            size={148}
            color="var(--bh-ink)"
            textColor="var(--bh-yellow)"
          />
        </div>
        <div className="px-6 py-14 sm:px-12 sm:py-16">
          <div className="mb-10 flex items-center gap-4">
            <span className="bh-eyebrow">01</span>
            <div className="bh-rule flex-1" />
          </div>
          <h2 className="bh-reveal mb-4 max-w-lg">{intro.heading}</h2>
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--bh-blue)]">
            {coachName} — {tagline}
          </p>
          <div className="flex max-w-xl flex-col gap-5">
            {intro.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="leading-relaxed text-foreground/80"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Method — a principled system, four color-coded functional blocks */}
      <section className="border-b-[3px] border-[var(--bh-ink)] px-6 py-14 sm:px-12 sm:py-16">
        <div className="mb-10 flex items-center gap-4">
          <span className="bh-eyebrow">02</span>
          <div className="bh-rule flex-1" />
        </div>
        <h2 className="bh-reveal mb-12 max-w-xl">{method.heading}</h2>
        <div className="bh-reveal grid grid-cols-1 gap-0 border-[3px] border-[var(--bh-ink)] sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col gap-5 border-[var(--bh-ink)] p-7 [&:not(:last-child)]:border-b-[3px] sm:[&:nth-child(-n+2)]:border-b-[3px] sm:[&:nth-child(n+3)]:border-b-0 sm:[&:nth-child(odd)]:border-r-[3px] lg:[&:nth-child(-n+3)]:border-b-0 lg:[&:not(:last-child)]:border-r-[3px]"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-extrabold leading-none tabular-nums">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0"
                  style={{
                    background: TRIAD[index % TRIAD.length],
                    borderRadius: index % 3 === 1 ? "9999px" : "0",
                  }}
                />
              </div>
              <h3>{step.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Programs — clear functional blocks in flat primary color */}
      <section className="border-b-[3px] border-[var(--bh-ink)] px-6 py-14 sm:px-12 sm:py-16">
        <div className="mb-10 flex items-center gap-4">
          <span className="bh-eyebrow">03</span>
          <div className="bh-rule flex-1" />
        </div>
        <h2 className="bh-reveal mb-12 max-w-xl">{services.heading}</h2>
        <div className="bh-reveal grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.programs.map((program, index) => (
            <Card key={program.name} className="flex flex-col overflow-hidden">
              <div
                aria-hidden="true"
                className="flex h-20 items-center justify-between border-b-[3px] border-[var(--bh-ink)] px-6"
                style={{ background: TRIAD[index % TRIAD.length] }}
              >
                <span className="text-3xl font-extrabold text-[var(--bh-ink)]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <ShapeGraphic
                  shape={(["circle", "rect", "triangle"] as const)[index % 3]}
                  color="var(--bh-ink)"
                  className="h-9 w-9"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{program.name}</CardTitle>
                <CardDescription className="mt-3 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="bh-rule mb-5" />
                <p className="text-lg font-bold">{program.priceLabel}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. Benefits — outcomes, stated plainly on the grid */}
      <section className="border-b-[3px] border-[var(--bh-ink)] px-6 py-14 sm:px-12 sm:py-16">
        <div className="mb-10 flex items-center gap-4">
          <span className="bh-eyebrow">04</span>
          <div className="bh-rule flex-1" />
        </div>
        <h2 className="bh-reveal mb-12 max-w-xl">{benefits.heading}</h2>
        {/*
          Asymmetric benefit board: the first outcome runs full-width as a
          color-flooded feature bar; the remaining four fill a clean 2-col
          (sm) / 4-col (lg) register with no orphan half-cell — the audit's
          lone-cell rhythm break is designed out, not patched.
        */}
        <div className="bh-reveal border-[3px] border-[var(--bh-ink)]">
          {(() => {
            const [feature, ...rest] = benefits.items;
            return (
              <>
                <div
                  className="flex flex-col gap-3 border-b-[3px] border-[var(--bh-ink)] p-8 sm:flex-row sm:items-center sm:gap-8"
                  style={{ background: "var(--bh-yellow)" }}
                >
                  <div className="flex items-center gap-4 sm:w-56 sm:shrink-0">
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 shrink-0 rounded-full bg-[var(--bh-ink)]"
                    />
                    <h3 className="text-[var(--bh-ink)]">{feature.title}</h3>
                  </div>
                  <p className="leading-relaxed text-[var(--bh-ink)]/80">
                    {feature.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  {rest.map((item, index) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-4 border-[var(--bh-ink)] p-7 [&:not(:last-child)]:border-b-[3px] sm:[&:nth-child(-n+2)]:border-b-[3px] sm:[&:nth-child(n+3)]:border-b-0 sm:[&:nth-child(odd)]:border-r-[3px] lg:[&:nth-child(-n+3)]:border-b-0 lg:[&:not(:last-child)]:border-r-[3px]"
                    >
                      <span
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0"
                        style={{
                          background: TRIAD[index % TRIAD.length],
                          borderRadius: index % 2 === 0 ? "9999px" : "0",
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
              </>
            );
          })()}
        </div>
      </section>

      {/* 6. Testimonials — evidence as an asymmetric specimen board */}
      <section className="border-b-[3px] border-[var(--bh-ink)] px-6 py-14 sm:px-12 sm:py-16">
        <div className="mb-10 flex items-center gap-4">
          <span className="bh-eyebrow">05</span>
          <div className="bh-rule flex-1" />
        </div>
        <h2 className="bh-reveal mb-12 max-w-xl">{testimonials.heading}</h2>
        {/*
          Specimen board (not a 3-card grid): a single black-ruled frame in an
          asymmetric Bauhaus arrangement — the first proof is a featured band
          with a flat primary-color plate carrying its initials; the remaining
          proofs sit in equal cells below, divided by grid rules, never gaps.
        */}
        <div className="bh-reveal bh-board">
          {(() => {
            const [feature, ...rest] = testimonials.quotes;
            return (
              <>
                <div className="bh-board-feature">
                  <div
                    className="bh-board-plate"
                    style={{ background: TRIAD[0] }}
                  >
                    <AvatarBlob
                      name={feature.name}
                      size={104}
                      color="var(--bh-ink)"
                      textColor="var(--bh-paper)"
                    />
                  </div>
                  <div className="flex flex-col gap-6 p-8 sm:p-10">
                    <span
                      aria-hidden="true"
                      className="h-2 w-12"
                      style={{ background: TRIAD[0] }}
                    />
                    <p className="text-lg leading-relaxed text-foreground/90">
                      {feature.quote}
                    </p>
                    <div className="mt-auto">
                      <p className="text-sm font-bold">{feature.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {feature.role}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bh-board-grid">
                  {rest.map((item, index) => (
                    <div key={item.name} className="bh-board-cell flex flex-col gap-5">
                      <span
                        aria-hidden="true"
                        className="h-2 w-10"
                        style={{ background: TRIAD[(index + 1) % TRIAD.length] }}
                      />
                      <p className="flex-1 leading-relaxed text-foreground/85">
                        {item.quote}
                      </p>
                      <div className="bh-rule-thin" />
                      <div className="flex items-center gap-3">
                        <AvatarBlob
                          name={item.name}
                          size={40}
                          color={TRIAD[(index + 1) % TRIAD.length]}
                          textColor="var(--bh-ink)"
                        />
                        <div>
                          <p className="text-sm font-bold">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* 7. Call-to-action — direct as a well-designed tool */}
      <section className="relative overflow-hidden border-b-[3px] border-[var(--bh-ink)] bg-[var(--bh-blue)] px-6 py-16 text-center sm:px-16 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-10 h-40 w-40 rounded-full"
          style={{ background: "var(--bh-red)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -left-8 h-32 w-32"
          style={{ background: "var(--bh-yellow)" }}
        />
        <div className="bh-reveal relative">
          <span className="bh-eyebrow bh-eyebrow-invert justify-center">
            06
          </span>
          <h2 className="mx-auto mt-6 max-w-xl text-[var(--bh-paper)]">
            {cta.heading}
          </h2>
          <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-[var(--bh-paper)]/80">
            {cta.subcopy}
          </p>
          <Button size="lg" className="bg-[var(--bh-yellow)] px-8 text-[var(--bh-ink)] hover:bg-[var(--bh-yellow)]">
            {cta.buttonLabel}
          </Button>
        </div>
      </section>

      {/* 8. Contact / booking */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
        <div className="border-b-[3px] border-[var(--bh-ink)] px-6 py-14 sm:px-12 sm:py-16 lg:border-b-0 lg:border-r-[3px]">
          <div className="mb-10 flex items-center gap-4">
            <span className="bh-eyebrow">07</span>
            <div className="bh-rule flex-1" />
          </div>
          <h2 className="mb-6 max-w-sm">{contact.heading}</h2>
          <p className="max-w-sm leading-relaxed text-foreground/70">
            {contact.subcopy}
          </p>
        </div>
        <div className="px-6 py-14 sm:px-12 sm:py-16">
          <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
        </div>
      </section>
    </main>
  );
}
