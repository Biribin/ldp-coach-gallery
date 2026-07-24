import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientBlock, ShapeGraphic, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Glassmorphism page (brief #10) — translucent layered panels, blurred
 * depth, floating surfaces over a luminous dawn-toned background. Renders
 * the same eight-section arc as the reference routes (hero → coach intro →
 * method → services → benefits → testimonials → CTA → contact), sourcing
 * every line of copy from `coachContent` and every image from the offline
 * CSS/SVG placeholder primitives. The theme scope (`.theme-glassmorphism`)
 * and the fixed ambient background are applied by the parent route layout.
 *
 * SIGNATURE: the hero is a stack of three overlapping glass panes at
 * different depths/blur strengths (not a centered title-over-box) — the
 * one element this page should be remembered by. Section rhythm
 * deliberately varies: full-bleed hero vs. contained sections, a dense
 * services grid vs. an airy stacked benefits list, a heavy-blur CTA slab.
 */
export default function GlassmorphismPage() {
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
    <main className="relative flex flex-col gap-32 pb-32 sm:gap-44">
      {/* 1. Hero — a thesis in overlapping glass, not a centered title-over-box */}
      <section className="relative px-6 pt-20 sm:px-10 sm:pt-28 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Back pane: soft, heavily blurred, offset up-left — pure atmosphere carrier */}
          <div
            className="gm-glass gm-glass--heavy gm-float col-span-1 -mb-16 hidden aspect-square rounded-[2rem] lg:col-span-4 lg:block lg:translate-y-10"
            style={{ animationDelay: "0.05s" }}
          >
            {/* Inner wrapper carries the perpetual orb drift so it never collides
                with .gm-float's entrance animation on the pane itself. */}
            <div className="gm-orb h-full w-full">
              <GradientBlock
                aspect="aspect-square"
                className="h-full w-full rounded-[2rem] opacity-70 mix-blend-overlay"
                variant="radial"
                from="var(--gm-glow-sky)"
                to="transparent"
              />
            </div>
          </div>

          {/* Mid pane: the headline, largest and frontmost, asymmetric placement */}
          <div
            className="gm-glass gm-glass--lift gm-float relative z-10 col-span-1 px-8 py-14 sm:px-12 sm:py-16 lg:col-span-8 lg:-ml-20 lg:px-16 lg:py-20"
            style={{ animationDelay: "0.15s" }}
          >
            <Badge className="mb-8">Coaching en ligne et en présentiel</Badge>
            <h1 className="max-w-2xl text-balance">{heroHeadline}</h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground/80">
              {heroSubcopy}
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
              <Button size="lg" className="px-8">
                {cta.buttonLabel}
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                {services.heading}
              </Button>
            </div>
          </div>

          {/* Front accent pane: small, tucked bottom-right, tightest blur — the "closest" layer */}
          <div
            className="gm-glass gm-float relative z-20 col-span-1 -mt-10 ml-auto hidden w-56 rounded-2xl p-5 sm:block lg:col-span-4 lg:col-start-9 lg:-mt-6 lg:w-auto"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="gm-eyebrow">Résultats est.</p>
            <p className="mt-3 text-4xl font-medium" style={{ fontFamily: "var(--font-heading)" }}>
              200+
            </p>
            <p className="mt-1 text-sm text-foreground/70">
              transformations menées à terme
            </p>
          </div>
        </div>
      </section>

      {/* 2. Coach intro — presented on an elegant single glass pane, avatar breaking the edge */}
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="gm-glass gm-reveal relative overflow-visible px-8 py-14 sm:px-14 sm:py-16">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-14">
              <div className="shrink-0 sm:-mt-24">
                <AvatarBlob
                  name={coachName}
                  size={148}
                  color="var(--gm-glow-coral)"
                  textColor="var(--primary-foreground)"
                  className="rounded-full ring-4 ring-(--gm-white-veil) drop-shadow-xl"
                />
              </div>
              <div>
                <p className="gm-eyebrow mb-4">À propos</p>
                <h2 className="mb-3">{intro.heading}</h2>
                <p className="mb-8 text-sm font-semibold tracking-wide text-primary">
                  {coachName}
                </p>
                <div className="flex max-w-2xl flex-col gap-5">
                  {intro.paragraphs.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-foreground/85">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Method — a horizontal filmstrip of glass steps. On wide screens the
          four steps fit and center as a block under the heading; on narrow
          screens the row scrolls horizontally (snap). The inner track is
          w-max + mx-auto so it hugs its content and centers within the section. */}
      <section className="px-6 sm:px-0 lg:px-0">
        <div className="mx-auto mb-12 max-w-5xl px-0 sm:px-10 lg:px-16">
          <p className="gm-eyebrow mb-4">La Méthode</p>
          <h2 className="max-w-xl">{method.heading}</h2>
        </div>
        <div className="scrollbar-none snap-x snap-mandatory overflow-x-auto px-6 pb-6 sm:px-10 lg:px-16">
          {/* items-stretch → all four plates take the tallest card's height, so
              they align on BOTH the top and bottom edges even when one step's
              description wraps to more lines than the others. */}
          <div className="mx-auto flex w-max items-stretch gap-6">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="gm-glass gm-glass--lift flex w-64 shrink-0 snap-start flex-col gap-5 px-8 py-10 sm:w-64"
            >
              <span
                className="text-5xl leading-none tabular-nums text-primary"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p className="leading-relaxed text-foreground/80">{step.description}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* 4. Services / programs — dense three-up grid of frosted panels, each glowing a different hue */}
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="gm-eyebrow mb-4">Programmes</p>
              <h2 className="max-w-xl">{services.heading}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {services.programs.map((program, index) => {
              const glow = [
                "var(--gm-glow-coral)",
                "var(--gm-glow-violet)",
                "var(--gm-glow-sky)",
              ][index % 3];
              return (
                <Card key={program.name} className="gm-reveal relative overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-2xl"
                    style={{ background: glow }}
                  />
                  <CardHeader className="relative">
                    <ShapeGraphic
                      shape="circle"
                      className="mb-6 h-10 w-10"
                      color={glow}
                    />
                    <CardTitle className="text-xl">{program.name}</CardTitle>
                    <CardDescription className="mt-3 leading-relaxed">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <p
                      className="text-lg font-medium text-primary"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {program.priceLabel}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Benefits — airy stacked list, no cards, generous space between glass rows */}
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="gm-eyebrow mb-4">Pourquoi elles restent</p>
          <h2 className="mb-14 max-w-xl">{benefits.heading}</h2>
          <div className="flex flex-col gap-4">
            {benefits.items.map((item) => (
              <div
                key={item.title}
                className="gm-glass gm-reveal flex items-center gap-6 px-7 py-6 sm:px-9"
              >
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: "var(--gm-glow-coral)" }}
                />
                <div>
                  <h3 className="mb-1">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials — a "depth column": one featured quote held at the front
          focal plane, the remaining voices resting as receding glass panes at
          greater blur/lower opacity behind it, so credibility reads through
          layered translucency rather than a flat row of equal cards. */}
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="gm-eyebrow mb-4">Témoignages</p>
          <h2 className="mb-14 max-w-xl">{testimonials.heading}</h2>
          {(() => {
            const [lead, ...rest] = testimonials.quotes;
            return (
              <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
                {/* Front focal plane — the featured voice, largest & clearest */}
                <figure className="gm-glass gm-glass--lift gm-reveal relative z-10 flex flex-col gap-6 px-8 py-12 sm:px-12 sm:py-14">
                  <span
                    aria-hidden="true"
                    className="text-7xl leading-none text-primary/80"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    &ldquo;
                  </span>
                  <blockquote className="-mt-6 text-2xl leading-snug text-foreground/90 sm:text-3xl">
                    {lead.quote}
                  </blockquote>
                  <figcaption className="mt-2 flex items-center gap-4">
                    <AvatarBlob
                      name={lead.name}
                      size={52}
                      color="var(--gm-glow-coral)"
                      textColor="var(--primary-foreground)"
                      className="ring-2 ring-(--gm-white-veil)"
                    />
                    <div>
                      <p className="text-sm font-semibold">{lead.name}</p>
                      <p className="text-xs text-muted-foreground">{lead.role}</p>
                    </div>
                  </figcaption>
                </figure>
                {/* Receding planes — supporting voices set deeper in the glass */}
                <div className="flex flex-col gap-6 lg:pt-10">
                  {rest.map((item) => (
                    <figure
                      key={item.name}
                      className="gm-glass gm-glass--lift gm-depth-back flex flex-col gap-4 px-7 py-8 sm:px-8"
                    >
                      <blockquote className="leading-relaxed text-foreground/85">
                        {item.quote}
                      </blockquote>
                      <figcaption className="flex items-center gap-3">
                        <AvatarBlob
                          name={item.name}
                          size={38}
                          color="var(--gm-glow-violet)"
                          textColor="var(--primary-foreground)"
                        />
                        <div>
                          <p className="text-sm font-semibold">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.role}</p>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 7. Call-to-action — a single heavy-blur slab, full-bleed within the container, the deepest glass on the page */}
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="gm-glass gm-glass--heavy gm-reveal relative overflow-hidden px-8 py-20 text-center sm:px-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 0%, var(--gm-glow-coral), transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="gm-eyebrow mb-6">Prête quand vous l'êtes</p>
              <h2 className="mx-auto max-w-xl">{cta.heading}</h2>
              <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-foreground/85">
                {cta.subcopy}
              </p>
              <Button size="lg" className="px-10">
                {cta.buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact / booking — form resting on its own glass pane */}
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="gm-glass gm-reveal px-8 py-14 sm:px-14 sm:py-16">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-16">
              <div>
                <p className="gm-eyebrow mb-4">Contact</p>
                <h2 className="mb-6">{contact.heading}</h2>
                <p className="max-w-md leading-relaxed text-foreground/85">
                  {contact.subcopy}
                </p>
              </div>
              <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
