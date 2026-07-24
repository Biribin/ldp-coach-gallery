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
 * Tech Forward page (brief #15) — innovative, precise, data-driven, engineered.
 * Renders the same eight-section arc as the reference routes (hero → coach
 * intro → method → services → benefits → testimonials → CTA → contact),
 * sourcing every line of copy from `coachContent` and every image from the
 * offline CSS/SVG placeholder primitives. The theme scope
 * (`.theme-tech-forward`) is applied by the parent route layout, not here.
 *
 * Composition intent: a blueprint/instrument-panel atmosphere — fine grid
 * backdrops, mono-type coordinate labels ([01/08]) and registration-mark
 * ticks marking section boundaries, a dark HUD readout as the hero's
 * signature element, crisp hairline cards. Rhythm varies deliberately:
 * full-bleed grid hero, dense data-panel method, airy card grid for
 * services, a tight two-column ledger for benefits.
 */
export default function TechForwardPage() {
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
    <main className="flex flex-col">
      {/* 1. Hero — thesis: asymmetric, grid-backed, HUD readout as signature */}
      <section className="tf-grid-bg relative overflow-hidden border-b border-border px-6 pb-20 pt-24 sm:px-10 sm:pt-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div>
            <div className="tf-in tf-eyebrow flex items-center gap-3">
              <span className="tf-blink" aria-hidden="true" />
              Statut système : nouvelles clientes acceptées
            </div>
            <h1 className="tf-in mt-8 max-w-2xl" style={{ animationDelay: "0.05s" }}>
              {heroHeadline}
            </h1>
            <p
              className="tf-in mt-8 max-w-lg text-lg leading-relaxed text-(--tf-ink-soft)"
              style={{ animationDelay: "0.1s" }}
            >
              {heroSubcopy}
            </p>
            <div className="tf-in mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.15s" }}>
              <Button size="lg" className="px-8">
                {cta.buttonLabel}
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                {services.heading}
              </Button>
            </div>
          </div>

          {/* Signature element: dark HUD instrument panel with fabricated live metrics */}
          <div
            className="tf-in tf-hud flex flex-col justify-between border border-border p-6"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="tf-mono flex items-center justify-between text-[0.7rem] uppercase tracking-[0.14em] text-(--tf-panel-foreground)/60">
              <span>Coaching OS</span>
              <span>v2.4</span>
            </div>
            <dl className="tf-mono mt-8 grid grid-cols-2 gap-y-6 text-(--tf-panel-foreground)">
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.14em] text-(--tf-panel-foreground)/50">
                  Gain de force moy.
                </dt>
                <dd className="mt-1 text-2xl font-medium">+27%</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.14em] text-(--tf-panel-foreground)/50">
                  Clientes actives
                </dt>
                <dd className="mt-1 text-2xl font-medium">142</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.14em] text-(--tf-panel-foreground)/50">
                  Fréquence des points
                </dt>
                <dd className="mt-1 text-2xl font-medium">7d</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.14em] text-(--tf-panel-foreground)/50">
                  Rétention
                </dt>
                <dd className="mt-1 text-2xl font-medium">94%</dd>
              </div>
            </dl>
            <div className="tf-mono mt-8 border-t border-(--tf-panel-foreground)/15 pt-4 text-[0.65rem] uppercase tracking-[0.14em] text-(--tf-panel-foreground)/50">
              Dernière synchro : continue
            </div>
          </div>
        </div>
      </section>

      {/* 2. Coach intro — framed as the architect of the system */}
      <section className="border-b border-border px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="tf-tick mb-14">
            <span className="tf-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              [01 / 08] &nbsp;Opératrice
            </span>
            <div className="tf-rule flex-1" />
          </div>
          <div className="tf-reveal grid grid-cols-1 items-start gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
            <AvatarBlob
              name={coachName}
              size={120}
              color="var(--tf-signal)"
              textColor="var(--tf-panel)"
              className="ring-1 ring-border"
            />
            <div>
              <h2 className="mb-3">{intro.heading}</h2>
              <p className="tf-mono mb-8 text-sm text-(--tf-signal)">{coachName}</p>
              <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
                {intro.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="border-l border-border pl-5 leading-relaxed text-(--tf-ink-soft)"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Method — dense engineered sequence, mono step indices */}
      <section className="tf-grid-bg border-b border-border px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="tf-tick mb-14">
            <span className="tf-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              [02 / 08] &nbsp;Méthode
            </span>
            <div className="tf-rule flex-1" />
          </div>
          <h2 className="tf-reveal mb-14 max-w-xl">{method.heading}</h2>
          <div className="tf-reveal grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {method.steps.map((step, index) => (
              <div key={step.title} className="flex flex-col gap-4 bg-card p-7">
                <span className="tf-mono text-3xl font-medium text-(--tf-signal)">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p className="text-sm leading-relaxed text-(--tf-ink-soft)">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services — airy card grid, smart offerings */}
      <section className="border-b border-border px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="tf-tick mb-14">
            <span className="tf-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              [03 / 08] &nbsp;Programmes
            </span>
            <div className="tf-rule flex-1" />
          </div>
          <h2 className="tf-reveal mb-14 max-w-xl">{services.heading}</h2>
          <div className="tf-reveal grid grid-cols-1 gap-6 sm:grid-cols-3">
            {services.programs.map((program, index) => (
              <Card key={program.name} className="gap-0 py-0">
                <CardHeader className="border-b border-border py-6">
                  <div className="flex items-center justify-between">
                    <ShapeGraphic
                      shape="polygon"
                      className="h-9 w-9"
                      color="var(--tf-signal)"
                      secondaryColor="var(--tf-panel)"
                    />
                    <span className="tf-mono text-xs text-muted-foreground">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <CardTitle className="mt-4 text-lg">{program.name}</CardTitle>
                  <CardDescription className="mt-2 leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-6">
                  <p className="tf-mono text-lg font-medium text-(--tf-signal)">
                    {program.priceLabel}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits — tight two-column ledger, optimized outcomes */}
      <section className="border-b border-border bg-secondary/40 px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="tf-tick mb-14">
            <span className="tf-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              [04 / 08] &nbsp;Résultats
            </span>
            <div className="tf-rule flex-1" />
          </div>
          <div className="tf-reveal grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <h2 className="max-w-sm">{benefits.heading}</h2>
            <div className="divide-y divide-border border-t border-border">
              {benefits.items.map((item, index) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-2 py-6 sm:grid-cols-[3rem_10rem_1fr] sm:gap-6"
                >
                  <span className="tf-mono text-sm text-muted-foreground">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-base">{item.title}</h3>
                  <p className="col-span-2 text-sm leading-relaxed text-(--tf-ink-soft) sm:col-span-1 sm:col-start-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials — verified telemetry log: stacked data records under a signal-strip header */}
      <section className="relative overflow-hidden border-b border-border px-6 py-24 sm:px-10 sm:py-28">
        <GradientBlock
          aspect="aspect-auto"
          className="absolute inset-x-0 top-0 h-40 opacity-[0.08]"
          from="var(--tf-signal)"
          to="transparent"
          angle={180}
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="tf-tick mb-14">
            <span className="tf-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              [05 / 08] &nbsp;Résultats vérifiés
            </span>
            <div className="tf-rule flex-1" />
          </div>
          <h2 className="tf-reveal mb-14 max-w-xl">{testimonials.heading}</h2>
          {/* Verified telemetry log: stacked data records, not a card grid */}
          <div className="tf-log tf-reveal">
            <div className="tf-mono flex items-center justify-between border-b border-border bg-secondary/40 px-6 py-3 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
              <span>Journal des résultats clientes</span>
              <span className="flex items-center gap-2">
                <span className="tf-blink" aria-hidden="true" />
                {testimonials.quotes.length} dossiers vérifiés
              </span>
            </div>
            {testimonials.quotes.map((item, index) => (
              <div
                key={item.name}
                className="tf-log-row grid grid-cols-1 gap-x-8 gap-y-4 px-6 py-8 sm:grid-cols-[auto_1fr] sm:py-9"
              >
                <div className="flex items-start gap-4 sm:w-56 sm:flex-col sm:gap-4">
                  <AvatarBlob
                    name={item.name}
                    size={44}
                    color="var(--tf-signal)"
                    textColor="var(--tf-panel)"
                  />
                  <div>
                    <p className="tf-mono text-[0.7rem] uppercase tracking-[0.14em] text-(--tf-signal)">
                      REC_{(index + 1).toString().padStart(2, "0")} · vérifié
                    </p>
                    <p className="mt-2 text-sm font-medium">{item.name}</p>
                    <p className="tf-mono text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-foreground/90">
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA — the future, landed with precision */}
      <section className="tf-hud tf-reveal mx-6 my-24 border border-border px-8 py-16 text-center sm:mx-10 sm:px-16 sm:py-20">
        <span className="tf-mono text-xs uppercase tracking-[0.14em] text-(--tf-signal)">
          [06 / 08] Démarrer
        </span>
        <h2 className="mx-auto mt-6 max-w-xl text-(--tf-panel-foreground)">{cta.heading}</h2>
        <p className="mx-auto mb-10 mt-5 max-w-md leading-relaxed text-(--tf-panel-foreground)/70">
          {cta.subcopy}
        </p>
        <Button size="lg" className="px-8">
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact / booking */}
      <section className="px-6 pb-28 pt-4 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="tf-tick mb-14">
            <span className="tf-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              [07 / 08] &nbsp;Connexion
            </span>
            <div className="tf-rule flex-1" />
          </div>
          <div className="tf-reveal grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <h2 className="mb-6">{contact.heading}</h2>
              <p className="max-w-md leading-relaxed text-(--tf-ink-soft)">
                {contact.subcopy}
              </p>
            </div>
            <div className="border border-border p-8">
              <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
