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
 * Corporate Professional page (brief #09) — trust-building, established,
 * refined. Renders the same eight-section arc as the japandi reference (hero
 * -> coach intro -> method -> services -> benefits -> testimonials -> CTA ->
 * contact), sourcing every line of copy from `coachContent` and every image
 * from the offline CSS/SVG placeholder primitives. The theme scope
 * (`.theme-corporate-professional`) is applied by the parent route layout,
 * not here.
 *
 * Composition intent: a "letterhead / dossier" motif rather than japandi's
 * subtraction or neo-geo's tessellation — a running vertical spine rule
 * threads the page like a formal document's margin, numbered sections read
 * like clauses, and the credential ledger band right after the hero is the
 * signature moment: an immediate, numbers-first trust anchor styled like an
 * official letterhead certification strip.
 */
export default function CorporateProfessionalPage() {
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
    <main className="mx-auto flex max-w-6xl flex-col px-6 py-20 sm:px-10 sm:py-28">
      {/* 1. Hero — an asymmetric masthead, not a centered title-over-box */}
      <section className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-[1.3fr_1fr] sm:gap-10 sm:pb-24">
        <div>
          <div className="cp-rise flex items-center gap-4">
            <span className="cp-eyebrow">Est. Coaching Practice</span>
          </div>
          <h1 className="cp-rise mt-8 max-w-2xl" style={{ animationDelay: "0.08s" }}>
            {heroHeadline}
          </h1>
          <p
            className="cp-rise mt-8 max-w-lg text-lg leading-relaxed text-foreground/75"
            style={{ animationDelay: "0.16s" }}
          >
            {heroSubcopy}
          </p>
          <div className="cp-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.24s" }}>
            <Button size="lg" className="px-8 bg-[var(--cp-cobalt)] text-[var(--cp-cobalt-foreground)] hover:bg-[var(--cp-cobalt)]/90">
              {cta.buttonLabel}
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              {services.heading}
            </Button>
          </div>
        </div>
        {/* Asymmetric companion block — scale contrast against the headline column */}
        <div className="cp-rise self-stretch" style={{ animationDelay: "0.3s" }}>
          <div className="cp-spine h-full">
            <GradientBlock
              aspect="aspect-auto h-full min-h-[16rem]"
              className="rounded-[var(--radius)]"
              from="var(--primary)"
              via="var(--cp-navy-soft)"
              to="var(--cp-cobalt)"
              angle={160}
            />
          </div>
        </div>
      </section>

      {/* SIGNATURE: credential ledger band — letterhead-style proof strip */}
      <section className="cp-rise" style={{ animationDelay: "0.36s" }}>
        <div className="cp-letterhead-rule cp-rule-draw" />
        <div className="grid grid-cols-1 gap-8 bg-[var(--cp-ledger-bg)] px-2 py-10 sm:grid-cols-3 sm:gap-6 sm:px-4">
          {[
            { value: "10+", label: "Years in Practice" },
            { value: "480", label: "Clients Coached" },
            { value: "96%", label: "Program Completion" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-4 sm:flex-col sm:items-start sm:gap-2">
              <span className="cp-serif cp-tabular text-4xl font-semibold text-primary sm:text-5xl">
                {stat.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-[var(--cp-line)]" />
      </section>

      {/* 2. Coach intro — establishes authority and warmth */}
      <section className="cp-spine mt-24 sm:mt-32">
        <div className="mb-10 flex items-center gap-4">
          <span className="cp-eyebrow">01 — About the Coach</span>
        </div>
        <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
          <AvatarBlob
            name={coachName}
            size={132}
            color="var(--primary)"
            textColor="var(--primary-foreground)"
            className="ring-1 ring-[var(--cp-line)]"
          />
          <div>
            <h2 className="mb-4">{intro.heading}</h2>
            <p className="mb-8 text-sm font-semibold tracking-wide text-[var(--cp-cobalt)]">
              {coachName}
            </p>
            <div className="flex max-w-2xl flex-col gap-5">
              {intro.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-foreground/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Method — presented as a proven, numbered process */}
      <section className="cp-spine mt-24 sm:mt-32">
        <div className="mb-10 flex items-center gap-4">
          <span className="cp-eyebrow">02 — The Method</span>
        </div>
        <h2 className="mb-14 max-w-xl">{method.heading}</h2>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--cp-line)] bg-[var(--cp-line)] sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((step, index) => (
            <div key={step.title} className="flex flex-col gap-4 bg-card p-8">
              <span className="cp-serif text-3xl font-semibold text-[var(--cp-cobalt)]">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — professional clarity, dense structured rows */}
      <section className="cp-spine mt-24 sm:mt-32">
        <div className="mb-10 flex items-center gap-4">
          <span className="cp-eyebrow">03 — Programs</span>
        </div>
        <h2 className="mb-14 max-w-xl">{services.heading}</h2>
        <div className="flex flex-col divide-y divide-[var(--cp-line)] border-y border-[var(--cp-line)]">
          {services.programs.map((program, index) => (
            <div
              key={program.name}
              className="grid grid-cols-1 items-center gap-6 py-8 sm:grid-cols-[3rem_1fr_auto] sm:gap-10"
            >
              <span className="cp-serif cp-tabular hidden text-2xl font-semibold text-muted-foreground sm:block">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-2">{program.name}</h3>
                <p className="max-w-xl leading-relaxed text-foreground/70">
                  {program.description}
                </p>
              </div>
              <div className="flex items-center gap-6 sm:flex-col sm:items-end sm:gap-3">
                <p className="cp-serif text-lg font-semibold text-primary">
                  {program.priceLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Benefits — reliable outcomes, dense grid, airy elsewhere for rhythm variety */}
      <section className="cp-spine mt-24 sm:mt-32">
        <div className="mb-10 flex items-center gap-4">
          <span className="cp-eyebrow">04 — Reliable Outcomes</span>
        </div>
        <h2 className="mb-14 max-w-xl">{benefits.heading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item) => (
            <Card key={item.title} className="gap-3">
              <CardHeader>
                <ShapeGraphic
                  shape="rect"
                  className="mb-4 h-8 w-8"
                  color="var(--cp-cobalt)"
                />
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="mt-2 leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — full-bleed band against the contained rhythm above/below */}
      <section className="cp-rise -mx-6 mt-24 bg-primary px-6 py-20 text-primary-foreground sm:-mx-10 sm:mt-32 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--cp-cobalt)]">
              05 — Client Results
            </span>
          </div>
          <h2 className="mb-14 max-w-xl text-primary-foreground">{testimonials.heading}</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {testimonials.quotes.map((item) => (
              <div key={item.name} className="flex flex-col gap-5 border-t-2 border-[var(--cp-cobalt)] pt-6">
                <p className="cp-serif text-lg leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <AvatarBlob
                    name={item.name}
                    size={40}
                    color="var(--cp-cobalt)"
                    textColor="var(--cp-cobalt-foreground)"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-primary-foreground/65">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call-to-action — a confident, low-risk next step */}
      <section className="mt-24 rounded-[var(--radius)] border border-[var(--cp-line)] px-8 py-16 text-center shadow-[var(--cp-shadow-card)] sm:mt-32 sm:px-16 sm:py-20">
        <span className="cp-eyebrow">06 — Next Step</span>
        <h2 className="mx-auto mt-6 max-w-xl">{cta.heading}</h2>
        <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-foreground/70">
          {cta.subcopy}
        </p>
        <Button size="lg" className="px-8 bg-[var(--cp-cobalt)] text-[var(--cp-cobalt-foreground)] hover:bg-[var(--cp-cobalt)]/90">
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact / booking */}
      <section className="cp-spine mt-24 sm:mt-32">
        <div className="mb-10 flex items-center gap-4">
          <span className="cp-eyebrow">07 — Get in Touch</span>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-16">
          <div>
            <h2 className="mb-6">{contact.heading}</h2>
            <p className="max-w-md leading-relaxed text-foreground/70">
              {contact.subcopy}
            </p>
            <Separator className="my-8 max-w-md bg-[var(--cp-line)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Response within 1 business day
            </p>
          </div>
          <div className="rounded-[var(--radius)] border border-[var(--cp-line)] bg-card p-8 shadow-[var(--cp-shadow-card)] sm:p-10">
            <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}
