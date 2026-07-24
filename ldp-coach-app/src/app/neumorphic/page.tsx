import { Button } from "@/components/ui/button";
import { AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Neumorphic page (brief #20) — soft extruded elements, dual light/dark
 * shadows, tactile monochrome surfaces. Renders the same eight-section arc as
 * the reference routes (hero → coach intro → method → services → benefits →
 * testimonials → CTA → contact), sourcing every line of copy from
 * `coachContent` and every image from the offline CSS/SVG placeholder
 * primitives. The theme scope (`.theme-neumorphic`) is applied by the parent
 * route layout, not here.
 *
 * Composition intent: the entire page is ONE continuous putty-colored
 * canvas — sections never change background color or draw a border. Depth
 * comes only from raised (`.nm-raised`) vs inset (`.nm-inset`) shadow pairs.
 * The Method section breaks from every other route's card grid: four steps
 * live as pressable dials recessed into a single large inset panel. The
 * hero's scroll-cue and the method's step markers share one signature motif
 * — the soft dial/toggle track — so the page is remembered by one tactile
 * idea, not a pile of separate effects.
 */
export default function NeumorphicPage() {
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
    <main className="mx-auto flex max-w-5xl flex-col gap-24 px-6 py-20 sm:gap-32 sm:px-10 sm:py-28">
      {/* 1. Hero — asymmetric: an oversized raised numeral-badge beside the
          thesis line, not a centered title over a box */}
      <section className="grid grid-cols-1 items-center gap-12 pt-6 sm:grid-cols-[1fr_auto] sm:gap-10 sm:pt-10">
        <div>
          <span className="nm-eyebrow nm-rise">Personal Coaching</span>
          <h1 className="nm-rise mt-6 max-w-2xl" style={{ animationDelay: "0.08s" }}>
            {heroHeadline}
          </h1>
          <p
            className="nm-rise mt-7 max-w-lg text-lg leading-relaxed text-foreground/70"
            style={{ animationDelay: "0.16s" }}
          >
            {heroSubcopy}
          </p>
          <div
            className="nm-rise mt-10 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "0.24s" }}
          >
            <Button size="lg" className="px-8">
              {cta.buttonLabel}
            </Button>
            {/* Signature motif, introduced here as a scroll-cue: a soft
                dial track with a breathing thumb */}
            <div
              aria-hidden="true"
              className="nm-dial-track flex h-11 w-20 items-center p-1.5"
            >
              <div
                className="nm-dial-thumb nm-thumb-breathe h-8 w-8"
                style={{ ["--nm-thumb-travel" as string]: "32px" }}
              >
                <span className="h-2 w-2 rounded-full bg-[var(--nm-accent)]" />
              </div>
            </div>
          </div>
        </div>
        {/* Oversized raised disc — the "extruded" thesis object, deliberately
            not a photo-shaped box */}
        <div
          className="nm-raised nm-rise mx-auto flex h-52 w-52 shrink-0 items-center justify-center rounded-full sm:h-64 sm:w-64"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="nm-inset flex h-36 w-36 items-center justify-center rounded-full sm:h-44 sm:w-44">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nm-accent)]">
              Est. Strength
            </span>
          </div>
        </div>
      </section>

      {/* 2. Coach intro — raised panel, photo as a recessed well */}
      <section className="nm-raised grid grid-cols-1 gap-10 p-8 sm:grid-cols-[auto_1fr] sm:gap-14 sm:p-14">
        <div className="nm-inset flex h-28 w-28 shrink-0 items-center justify-center rounded-full sm:h-36 sm:w-36">
          <AvatarBlob
            name={coachName}
            size={72}
            color="transparent"
            textColor="var(--nm-accent)"
          />
        </div>
        <div>
          <h2 className="mb-3">{intro.heading}</h2>
          <p className="mb-7 text-sm font-semibold tracking-wide text-[var(--nm-accent)]">
            {coachName}
          </p>
          <div className="flex max-w-xl flex-col gap-5">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-foreground/75">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Method — the grid-breaking section: one large inset panel holding
          four pressable dials in a row instead of a repeated card layout */}
      <section>
        <h2 className="mb-3 text-center">{method.heading}</h2>
        <p className="mx-auto mb-12 max-w-md text-center leading-relaxed text-foreground/65">
          Four gentle stages, always in the same soft rhythm.
        </p>
        <div className="nm-inset-lg grid grid-cols-1 gap-10 p-8 sm:grid-cols-4 sm:gap-6 sm:p-12">
          {method.steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="nm-raised nm-pressable mb-5 flex h-20 w-20 items-center justify-center rounded-full">
                <span className="text-2xl font-semibold tabular-nums text-[var(--nm-accent)]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-2">{step.title}</h3>
              <p className="max-w-[16rem] text-sm leading-relaxed text-foreground/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — raised panels, dense grid rhythm */}
      <section>
        <h2 className="mb-12 text-center">{services.heading}</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {services.programs.map((program) => (
            <div key={program.name} className="nm-raised flex flex-col gap-5 p-8">
              <div className="nm-inset flex h-14 w-14 items-center justify-center rounded-full">
                <span
                  aria-hidden="true"
                  className="h-4 w-4 rounded-full bg-[var(--nm-accent)]"
                />
              </div>
              <h3>{program.name}</h3>
              <p className="flex-1 text-sm leading-relaxed text-foreground/65">
                {program.description}
              </p>
              <p className="text-lg font-semibold text-[var(--nm-accent)]">
                {program.priceLabel}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Benefits — airy, no cards at all: inset pill markers only */}
      <section>
        <h2 className="mb-12 text-center">{benefits.heading}</h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="nm-inset mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--nm-accent)]" />
              </span>
              <div>
                <h3 className="mb-1.5">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/65">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — full-bleed rhythm break: one wide inset strip
          instead of three separate raised cards */}
      <section className="nm-inset-lg grid grid-cols-1 gap-10 p-8 sm:grid-cols-3 sm:gap-8 sm:p-12">
        <h2 className="col-span-full mb-2 text-center">{testimonials.heading}</h2>
        {testimonials.quotes.map((item) => (
          <div key={item.name} className="nm-raised flex flex-col gap-5 p-7">
            <p className="text-base leading-relaxed text-foreground/80">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="mt-auto flex items-center gap-3">
              <span className="nm-inset flex h-10 w-10 items-center justify-center rounded-full">
                <AvatarBlob
                  name={item.name}
                  size={26}
                  color="transparent"
                  textColor="var(--nm-accent)"
                />
              </span>
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 7. Call-to-action — a single large raised disc-button moment */}
      <section className="flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-xl">{cta.heading}</h2>
        <p className="max-w-md leading-relaxed text-foreground/70">{cta.subcopy}</p>
        <button
          type="button"
          className="nm-raised nm-pressable flex h-40 w-40 flex-col items-center justify-center gap-1 rounded-full text-sm font-semibold uppercase tracking-[0.14em] text-[var(--nm-accent)] sm:h-48 sm:w-48"
        >
          <span>{cta.buttonLabel.split(" ")[0]}</span>
          <span>{cta.buttonLabel.split(" ").slice(1).join(" ")}</span>
        </button>
      </section>

      {/* 8. Contact / booking */}
      <section className="nm-raised grid grid-cols-1 gap-12 p-8 sm:grid-cols-[1fr_1.2fr] sm:p-14">
        <div>
          <h2 className="mb-5">{contact.heading}</h2>
          <p className="max-w-md leading-relaxed text-foreground/70">
            {contact.subcopy}
          </p>
        </div>
        <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
      </section>
    </main>
  );
}
