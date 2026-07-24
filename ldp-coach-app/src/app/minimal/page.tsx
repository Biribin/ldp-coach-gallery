import { Button } from "@/components/ui/button";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Minimal page (brief #07) — extreme reduction, maximum whitespace.
 * Renders the same eight-section arc as the reference routes (hero → coach
 * intro → method → services → benefits → testimonials → CTA → contact),
 * sourcing every line of copy from `coachContent`. No imagery primitives are
 * used deliberately: the brief calls for essential elements only, and a
 * gradient/shape/avatar placeholder would itself be an ornament this style
 * exists to strip away. The theme scope (`.theme-minimal`) is applied by the
 * parent route layout, not here.
 *
 * Signature: the hero headline is set at extreme scale (huge, ultralight,
 * tightly tracked) with exactly one word underlined by a drawn accent
 * stroke — the single spot of color on the page until the final CTA button,
 * which spends the accent a second and last time. Every other surface stays
 * ink-on-white with hairline rules. Section rhythm alternates dense
 * (method, divided list) against airy (benefits, wide single column) rather
 * than repeating one card layout.
 */
export default function MinimalPage() {
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

  const heroWords = heroHeadline.split(" ");
  const lastWord = heroWords.pop();

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-32 px-6 py-28 sm:gap-48 sm:px-10 sm:py-40">
      {/* 1. Hero — a thesis stated large, asymmetric, not centered */}
      <section>
        <span className="mn-in mn-eyebrow block">{coachName}</span>
        <h1 className="mn-in mt-10 max-w-4xl" style={{ animationDelay: "0.1s" }}>
          {heroWords.join(" ")}{" "}
          <span className="relative inline-block">
            {lastWord}
            <span
              aria-hidden="true"
              className="mn-draw absolute -bottom-1 left-0 h-[3px] w-full bg-[var(--mn-accent)] sm:-bottom-2"
            />
          </span>
        </h1>
        <p
          className="mn-in mt-14 max-w-md text-lg leading-relaxed text-muted-foreground sm:ml-auto sm:text-right"
          style={{ animationDelay: "0.2s" }}
        >
          {heroSubcopy}
        </p>
      </section>

      {/* 2. Coach intro — understated, no photo surrogate, text alone */}
      <section className="border-t pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[10rem_1fr] sm:gap-16">
          <h2 className="text-base font-medium tracking-tight text-muted-foreground sm:text-lg">
            {intro.heading}
          </h2>
          <div className="flex max-w-xl flex-col gap-6">
            {intro.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-foreground/85">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Method — reduced to its essence, a dense divided sequence */}
      <section>
        <h2 className="mb-16">{method.heading}</h2>
        <div className="border-t">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="grid grid-cols-1 gap-4 border-b py-10 sm:grid-cols-[6rem_10rem_1fr] sm:items-baseline sm:gap-8"
            >
              <span className="mn-num text-4xl">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p className="max-w-md leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — uncluttered clarity, no cards, no borders */}
      <section>
        <h2 className="mb-16">{services.heading}</h2>
        <div className="flex flex-col gap-16 sm:gap-20">
          {services.programs.map((program) => (
            <div
              key={program.name}
              className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
            >
              <div className="max-w-xl">
                <h3 className="mb-2 text-xl font-normal">{program.name}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
              </div>
              <span className="whitespace-nowrap text-lg font-light tracking-tight text-foreground/70">
                {program.priceLabel}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Benefits — stated simply, one wide airy column, no icons */}
      <section className="border-t pt-16">
        <h2 className="mb-16 max-w-lg">{benefits.heading}</h2>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2">
          {benefits.items.map((item) => (
            <div key={item.title}>
              <h3 className="mb-3">{item.title}</h3>
              <p className="max-w-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — shown with restraint, no avatars, quiet attribution */}
      <section>
        <h2 className="mb-16">{testimonials.heading}</h2>
        <div className="flex flex-col gap-14">
          {testimonials.quotes.map((item) => (
            <div key={item.name} className="max-w-2xl">
              <p className="text-xl font-light leading-relaxed text-foreground/90 sm:text-2xl">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-5 text-sm text-muted-foreground">
                {item.name} <span className="mx-2 text-border">/</span>
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action — isolated, clear, the accent spent a second time */}
      <section className="flex flex-col items-start gap-10 border-t pt-20 text-left sm:items-center sm:pt-24 sm:text-center">
        <h2 className="max-w-xl">{cta.heading}</h2>
        <p className="max-w-sm leading-relaxed text-muted-foreground">
          {cta.subcopy}
        </p>
        <Button
          size="lg"
          className="mn-accent-bg h-14 rounded-none px-10 text-base hover:opacity-85"
        >
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact / booking */}
      <section className="border-t pt-16">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-[1fr_1.2fr] sm:gap-20">
          <div>
            <h2 className="mb-6">{contact.heading}</h2>
            <p className="max-w-sm leading-relaxed text-muted-foreground">
              {contact.subcopy}
            </p>
          </div>
          <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
        </div>
      </section>
    </main>
  );
}
