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
 * Modernist page (brief #18) — mid-century clean lines, functional beauty,
 * timeless proportion. Renders the same eight-section arc as the japandi
 * reference (hero -> coach intro -> method -> services -> benefits ->
 * testimonials -> CTA -> contact), sourcing every line of copy from
 * `coachContent` and every image from the offline placeholder primitives.
 * The theme scope (`.theme-modernist`) is applied by the parent route
 * layout, not here.
 *
 * Composition intent: this is mid-century (Eames/Knoll), not 1920s Bauhaus
 * and not 1960s Swiss grid-math — both already exist as separate routes in
 * this gallery. The signature device is the "shelf datum": a horizontal rule
 * with two rectangular pegs, standing in for modular-furniture joinery,
 * recurring as the only section divider. The hero breaks from centered
 * convention with a deliberate asymmetric split; services breaks the 3-card
 * grid into an uneven 5/7 column composition; testimonials run as a dense
 * stacked ledger rather than cards, for rhythm variety across the page.
 */
export default function ModernistPage() {
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
      {/* 1. Hero — a thesis, not a centered title: asymmetric split, the
          headline set hard against the left edge while a wood-tone block
          anchors the right, breaking the grid immediately. */}
      <section className="grid grid-cols-1 gap-10 pt-4 sm:grid-cols-12 sm:gap-8 sm:pt-8">
        <div className="mo-rise sm:col-span-7">
          <span className="mo-eyebrow">Coaching, considered</span>
          <h1 className="mt-6 max-w-xl">{heroHeadline}</h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground/75">
            {heroSubcopy}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="px-8">
              {cta.buttonLabel}
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              {services.heading}
            </Button>
          </div>
        </div>
        <div
          className="mo-rise relative sm:col-span-5"
          style={{ animationDelay: "0.15s" }}
        >
          <GradientBlock
            aspect="aspect-[3/4]"
            variant="linear"
            angle={165}
            from="var(--mo-walnut)"
            via="var(--mo-clay)"
            to="var(--mo-paper)"
          />
          <div className="absolute -bottom-5 left-0 right-8">
            <div className="mo-shelf" />
          </div>
        </div>
      </section>

      {/* 2. Coach intro — full-bleed rhythm break: text runs wide under a
          shelf datum, the avatar sits inline as a small credential mark
          rather than a portrait-scale anchor. */}
      <section>
        <div className="mo-shelf mb-14" />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-12">
          <div className="sm:col-span-4">
            <h2>{intro.heading}</h2>
            <div className="mt-6 flex items-center gap-3">
              <AvatarBlob
                name={coachName}
                size={44}
                color="var(--mo-walnut)"
                textColor="var(--mo-paper)"
              />
              <p className="text-sm font-semibold tracking-wide text-[var(--mo-teal)]">
                {coachName}
              </p>
            </div>
          </div>
          <div className="flex max-w-2xl flex-col gap-5 sm:col-span-8">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-foreground/80">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Method — dense stacked ledger, numerals set in the display serif
          as the structural device (the content is genuinely sequential). */}
      <section>
        <div className="mo-shelf mb-14" />
        <h2 className="mb-12 max-w-lg">{method.heading}</h2>
        <div className="grid grid-cols-1 border-t border-[var(--mo-line)] sm:grid-cols-2">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-6 border-b border-[var(--mo-line)] py-10 pr-6 sm:odd:border-r sm:odd:pr-10"
            >
              <span className="mo-serif shrink-0 text-4xl leading-none tabular-nums text-[var(--mo-teal)]">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="max-w-sm leading-relaxed text-foreground/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — the grid break: an uneven 5/7 split
          instead of three even cards. The lead program gets a full block,
          the remaining two stack as a compact ledger beside it. */}
      <section>
        <div className="mo-shelf mb-14" />
        <h2 className="mb-12">{services.heading}</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-12">
          <Card className="sm:col-span-5">
            <CardHeader>
              <ShapeGraphic
                shape="rect"
                className="mb-6 h-9 w-9"
                color="var(--mo-teal)"
              />
              <CardTitle className="text-2xl">
                {services.programs[0].name}
              </CardTitle>
              <CardDescription className="mt-4 leading-relaxed">
                {services.programs[0].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mo-shelf mb-5" />
              <p className="mo-serif text-xl font-medium text-[var(--mo-teal)]">
                {services.programs[0].priceLabel}
              </p>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-6 sm:col-span-7">
            {services.programs.slice(1).map((program) => (
              <div
                key={program.name}
                className="flex flex-col gap-4 border border-[var(--mo-line)] p-7 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="mb-2">{program.name}</h3>
                  <p className="max-w-md leading-relaxed text-foreground/70">
                    {program.description}
                  </p>
                </div>
                <p className="mo-serif shrink-0 text-lg font-medium text-[var(--mo-teal)]">
                  {program.priceLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits — quiet grid, airy, no cards: functional clarity. */}
      <section>
        <div className="mo-shelf mb-14" />
        <h2 className="mb-12">{benefits.heading}</h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item) => (
            <div key={item.title}>
              <div className="mb-4 h-px w-8 bg-[var(--mo-teal)]" />
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — dense stacked ledger (rhythm contrast against the
          card grid used in services), each row a full-width quote line. */}
      <section>
        <div className="mo-shelf mb-14" />
        <h2 className="mb-12">{testimonials.heading}</h2>
        <div className="flex flex-col divide-y divide-[var(--mo-line)] border-y border-[var(--mo-line)]">
          {testimonials.quotes.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-12 sm:gap-8"
            >
              <div className="flex items-center gap-3 sm:col-span-3">
                <AvatarBlob
                  name={item.name}
                  size={40}
                  color="var(--mo-walnut)"
                  textColor="var(--mo-paper)"
                />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
              <p className="mo-serif text-lg leading-relaxed text-foreground/85 sm:col-span-9">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action — flat walnut block, decisive, no gradient glow. */}
      <section className="border border-[var(--mo-line)] bg-[var(--mo-walnut-deep)] px-8 py-16 text-center sm:px-16 sm:py-20">
        <h2 className="mx-auto max-w-xl text-[var(--mo-paper)]">
          {cta.heading}
        </h2>
        <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-[var(--mo-paper)]/75">
          {cta.subcopy}
        </p>
        <Button size="lg" className="px-8">
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact / booking */}
      <section>
        <div className="mo-shelf mb-14" />
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-12 sm:gap-16">
          <div className="sm:col-span-4">
            <h2 className="mb-6">{contact.heading}</h2>
            <p className="max-w-sm leading-relaxed text-foreground/70">
              {contact.subcopy}
            </p>
          </div>
          <div className="sm:col-span-8">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
