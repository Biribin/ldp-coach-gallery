import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GradientBlock, AvatarBlob } from "@/components/placeholders";
import { coachContent } from "@/lib/content";
import { ContactForm } from "./ContactForm";

/**
 * Editorial page (brief #03) — a coaching feature story set like a print
 * magazine. Renders the same eight-section arc as the japandi / neobrutalist
 * references (hero → coach intro → method → services → benefits →
 * testimonials → CTA → contact), sourcing every line of copy from
 * `coachContent` and every image from the offline placeholder primitives. The
 * theme scope (`.theme-editorial`) is applied by the parent route layout, not
 * here.
 *
 * Composition intent vs. the reference routes: this is art direction, not
 * framing. A masthead cover opens the piece (kicker, oversized display
 * headline, standfirst, byline, ink rule); the profile runs as a genuine
 * two-column article with a crimson drop cap; the method reads as a numbered
 * feature deck with big serif folios; programs sit as boxed magazine sidebars;
 * benefits are a ruled contents list; testimonials are quoted sources beside a
 * full-bleed pull quote; the CTA is a confident closing statement. Type — a
 * high-contrast display serif over sans body — and the reading rhythm carry
 * the whole page.
 */
export default function EditorialPage() {
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

  // Split the profile copy: first paragraph opens the article (drop cap),
  // the rest flow as multi-column body text.
  const [ledeParagraph, ...bodyParagraphs] = intro.paragraphs;

  return (
    <main className="mx-auto max-w-6xl px-6 pb-28 pt-10 sm:px-10 sm:pb-40 sm:pt-14">
      {/* Masthead — the running head of the publication */}
      <header className="ed-reveal flex items-baseline justify-between gap-4 pb-4">
        <span className="ed-serif text-xl font-black tracking-tight sm:text-2xl">
          THE&nbsp;STRONG&nbsp;LIFE
        </span>
        <span className="ed-caption hidden sm:inline">
          Issue 03 · The Coaching Feature
        </span>
        <span className="ed-eyebrow">Vol. I</span>
      </header>
      <div className="ed-rule-ink" />

      {/* 1. Hero — the cover / opening spread */}
      <section className="grid grid-cols-1 gap-10 pt-12 sm:pt-16 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
        <div className="ed-reveal flex flex-col justify-between">
          <div>
            <p className="ed-eyebrow mb-6">The Coaching Feature · {tagline}</p>
            <h1 className="mb-8">{heroHeadline}</h1>
            <p className="ed-serif max-w-2xl text-xl italic leading-snug text-foreground/80 sm:text-2xl">
              {heroSubcopy}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button size="lg" className="px-8">
              {cta.buttonLabel}
            </Button>
            <span className="ed-caption">
              Words &amp; coaching by {coachName}
            </span>
          </div>
        </div>
        {/* Full-bleed cover "photograph" — a print duotone wash */}
        <figure
          className="ed-reveal flex flex-col"
          style={{ animationDelay: "0.12s" }}
        >
          <GradientBlock
            aspect="aspect-[3/4]"
            className="w-full"
            from="oklch(0.5 0.19 25)"
            via="oklch(0.4 0.09 30)"
            to="oklch(0.16 0.012 75)"
          />
          <figcaption className="ed-caption mt-3 border-t border-[var(--ed-rule)] pt-3">
            Fig. 1 — Strength, built to last. Photographed for this issue.
          </figcaption>
        </figure>
      </section>

      {/* 2. Coach intro — the profile, set as a two-column article */}
      <section className="pt-28 sm:pt-36">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-[var(--ed-rule)] pb-4">
          <div className="flex items-baseline gap-5">
            <span className="ed-folio text-5xl sm:text-6xl">01</span>
            <div>
              <p className="ed-eyebrow mb-1">The Profile</p>
              <h2 className="text-3xl sm:text-4xl">{intro.heading}</h2>
            </div>
          </div>
          <AvatarBlob
            name={coachName}
            size={92}
            color="var(--ed-red)"
            textColor="var(--primary-foreground)"
            className="hidden shrink-0 sm:block"
          />
        </div>
        <p className="ed-caption mb-6">A profile of {coachName}</p>
        <div className="ed-body ed-columns ed-dropcap max-w-none">
          <p className="mb-5">{ledeParagraph}</p>
          {bodyParagraphs.map((paragraph, index) => (
            <p key={index} className="mb-5">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* 3. Method — a numbered feature deck */}
      <section className="pt-28 sm:pt-36">
        <div className="mb-12 flex items-end gap-5 border-b border-[var(--ed-rule)] pb-4">
          <span className="ed-folio text-5xl sm:text-6xl">02</span>
          <div>
            <p className="ed-eyebrow mb-1">The Approach</p>
            <h2 className="text-3xl sm:text-4xl">{method.heading}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2">
          {method.steps.map((step, index) => (
            <article key={step.title} className="flex gap-6">
              <span className="ed-folio text-4xl leading-none">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="ed-rule mb-4" />
                <h3 className="mb-3">{step.title}</h3>
                <p className="ed-body text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Services / programs — boxed magazine sidebars */}
      <section className="pt-28 sm:pt-36">
        <div className="mb-12 flex items-end gap-5 border-b border-[var(--ed-rule)] pb-4">
          <span className="ed-folio text-5xl sm:text-6xl">03</span>
          <div>
            <p className="ed-eyebrow mb-1">The Guide</p>
            <h2 className="text-3xl sm:text-4xl">{services.heading}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.programs.map((program, index) => (
            <Card key={program.name} className="flex flex-col">
              <CardHeader className="gap-0">
                <span className="ed-eyebrow mb-4">
                  No. {(index + 1).toString().padStart(2, "0")}
                </span>
                <CardTitle className="text-2xl leading-tight">
                  {program.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="ed-body flex-1 text-base leading-relaxed">
                  {program.description}
                </p>
                <Separator className="my-5 bg-[var(--ed-rule)]" />
                <p className="ed-serif text-lg font-bold text-[var(--ed-red)]">
                  {program.priceLabel}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. Benefits — argued as a ruled contents list */}
      <section className="pt-28 sm:pt-36">
        <div className="mb-12 flex items-end gap-5 border-b border-[var(--ed-rule)] pb-4">
          <span className="ed-folio text-5xl sm:text-6xl">04</span>
          <div>
            <p className="ed-eyebrow mb-1">The Case</p>
            <h2 className="text-3xl sm:text-4xl">{benefits.heading}</h2>
          </div>
        </div>
        <div className="divide-y divide-[var(--ed-rule)]">
          {benefits.items.map((item, index) => (
            <div
              key={item.title}
              className="grid grid-cols-1 gap-x-8 gap-y-2 py-6 first:pt-0 sm:grid-cols-[3rem_1fr_2fr] sm:items-baseline"
            >
              <span className="ed-folio text-2xl">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="text-xl">{item.title}</h3>
              <p className="ed-body text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials — quoted sources beside a full pull quote */}
      <section className="pt-28 sm:pt-36">
        <div className="mb-12 flex items-end gap-5 border-b border-[var(--ed-rule)] pb-4">
          <span className="ed-folio text-5xl sm:text-6xl">05</span>
          <div>
            <p className="ed-eyebrow mb-1">The Sources</p>
            <h2 className="text-3xl sm:text-4xl">{testimonials.heading}</h2>
          </div>
        </div>

        {/* Lead pull quote — the first testimonial, blown up like a magazine
            callout with a crimson rule bar */}
        <figure className="mb-14 flex gap-6 sm:gap-8">
          <div className="ed-bar shrink-0" />
          <div>
            <blockquote className="ed-pullquote">
              {testimonials.quotes[0].quote}
            </blockquote>
            <figcaption className="ed-caption mt-5">
              — {testimonials.quotes[0].name}, {testimonials.quotes[0].role}
            </figcaption>
          </div>
        </figure>

        {/* Remaining sources as a two-column quoted set */}
        <div className="grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
          {testimonials.quotes.slice(1).map((item) => (
            <figure key={item.name} className="flex flex-col">
              <div className="ed-rule mb-5" />
              <blockquote className="ed-serif text-lg italic leading-relaxed text-foreground/85">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <AvatarBlob
                  name={item.name}
                  size={40}
                  color="var(--ed-paper)"
                  textColor="var(--ed-ink)"
                  className="ring-1 ring-[var(--ed-rule)]"
                />
                <span className="ed-caption">
                  {item.name} · {item.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action — a confident closing statement */}
      <section className="pt-28 sm:pt-36">
        <div className="ed-rule-ink mb-10" />
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="ed-eyebrow mb-6">In Closing</p>
            <h2 className="mb-6 max-w-2xl text-4xl sm:text-5xl">
              {cta.heading}
            </h2>
            <p className="ed-serif max-w-xl text-xl italic leading-snug text-foreground/80">
              {cta.subcopy}
            </p>
          </div>
          <div className="flex lg:justify-end">
            <Button size="lg" className="px-10 py-6 text-base">
              {cta.buttonLabel}
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Contact — the reply card at the foot of the feature */}
      <section className="pt-24 sm:pt-32">
        <div className="mb-10 flex items-end gap-5 border-b border-[var(--ed-rule)] pb-4">
          <span className="ed-folio text-5xl sm:text-6xl">06</span>
          <div>
            <p className="ed-eyebrow mb-1">The Reply Card</p>
            <h2 className="text-3xl sm:text-4xl">{contact.heading}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1.15fr] sm:gap-16">
          <div>
            <p className="ed-body max-w-md text-base leading-relaxed">
              {contact.subcopy}
            </p>
            <p className="ed-caption mt-8">
              Coaching by {coachName} · Online &amp; in person
            </p>
          </div>
          <div className="sm:border-l sm:border-[var(--ed-rule)] sm:pl-16">
            <ContactForm
              fields={contact.fields}
              submitLabel={contact.submitLabel}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
