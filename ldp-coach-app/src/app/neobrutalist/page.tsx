import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
 * Neobrutalist proof-of-concept page (brief #17).
 * Renders exactly eight section elements in the standard arc order, sourcing
 * all copy from `coachContent` and all imagery from the offline CSS/SVG
 * placeholder primitives. The theme scope (`.theme-neobrutalist`) is applied
 * by the parent route layout, not here — this file only renders content.
 */
export default function NeobrutalistPage() {
  const { heroHeadline, heroSubcopy, coachName, intro, method, services, benefits, testimonials, cta, contact } =
    coachContent;

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 sm:py-24">
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-4 border-foreground bg-card p-8 nb-shadow sm:p-14">
        <div className="absolute -top-10 -right-10 hidden w-40 rotate-12 opacity-90 sm:block">
          <ShapeGraphic shape="polygon" />
        </div>
        <Badge variant="outline" className="mb-6 bg-accent text-accent-foreground">
          Fitness Coaching
        </Badge>
        <h1 className="max-w-3xl text-foreground">{heroHeadline}</h1>
        <p className="mt-6 max-w-xl text-lg font-medium text-foreground/80">{heroSubcopy}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="lg" className="nb-shadow-sm bg-primary text-primary-foreground">
            {cta.buttonLabel}
          </Button>
          <Button size="lg" variant="outline">
            See Programs
          </Button>
        </div>
        <GradientBlock
          className="mt-14 border-4 border-foreground"
          variant="linear"
          from="var(--primary)"
          via="var(--secondary)"
          to="var(--accent)"
        />
      </section>

      {/* 2. Coach intro */}
      <section className="grid grid-cols-1 gap-10 border-4 border-foreground bg-card p-8 nb-shadow sm:grid-cols-[auto_1fr] sm:p-12">
        <AvatarBlob name={coachName} size={140} className="border-4 border-foreground" />
        <div>
          <h2 className="mb-2">{intro.heading}</h2>
          <p className="mb-4 text-sm font-bold tracking-wide text-primary uppercase">
            {coachName}
          </p>
          <div className="flex flex-col gap-4">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-foreground/85">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Method */}
      <section className="border-4 border-foreground bg-secondary p-8 text-secondary-foreground nb-shadow sm:p-12">
        <h2 className="mb-10">{method.heading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col gap-3 border-4 border-foreground bg-background p-5 text-foreground nb-shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-foreground bg-primary text-lg font-black text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="text-lg">{step.title}</h3>
              </div>
              <p className="text-sm text-foreground/80">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services / programs */}
      <section>
        <h2 className="mb-10">{services.heading}</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {services.programs.map((program, index) => (
            <Card
              key={program.name}
              className={
                index === 1
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-card-foreground"
              }
            >
              <CardHeader>
                <ShapeGraphic
                  shape={index === 0 ? "circle" : index === 1 ? "triangle" : "rect"}
                  className="mb-4 h-16 w-16"
                  color={index === 1 ? "var(--secondary)" : "var(--primary)"}
                />
                <CardTitle className="text-xl">{program.name}</CardTitle>
                <CardDescription
                  className={index === 1 ? "text-primary-foreground/80" : undefined}
                >
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Separator className="mb-4" />
                <p className="text-lg font-black uppercase">{program.priceLabel}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="border-4 border-foreground bg-accent p-8 text-accent-foreground nb-shadow sm:p-12">
        <h2 className="mb-10">{benefits.heading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <ShapeGraphic shape="line" className="mt-1 h-8 w-8 shrink-0" color="var(--foreground)" />
              <div>
                <h3 className="mb-1 text-base">{item.title}</h3>
                <p className="text-sm text-foreground/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials / client results */}
      <section>
        <h2 className="mb-10">{testimonials.heading}</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {testimonials.quotes.map((item) => (
            <Card key={item.name} className="border-4 border-foreground nb-shadow-sm">
              <CardContent className="flex flex-col gap-4">
                <p className="text-base font-medium text-foreground/90">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <AvatarBlob name={item.name} size={44} />
                  <div>
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 7. Call-to-action */}
      <section className="border-4 border-foreground bg-primary p-10 text-center text-primary-foreground nb-shadow sm:p-16">
        <h2 className="mb-4">{cta.heading}</h2>
        <p className="mx-auto mb-8 max-w-xl text-lg font-medium">{cta.subcopy}</p>
        <Button size="lg" variant="secondary" className="border-4 border-foreground">
          {cta.buttonLabel}
        </Button>
      </section>

      {/* 8. Contact / booking */}
      <section className="border-4 border-foreground bg-card p-8 nb-shadow sm:p-12">
        <h2 className="mb-3">{contact.heading}</h2>
        <p className="mb-8 max-w-xl text-foreground/80">{contact.subcopy}</p>
        <ContactForm fields={contact.fields} submitLabel={contact.submitLabel} />
      </section>
    </main>
  );
}
