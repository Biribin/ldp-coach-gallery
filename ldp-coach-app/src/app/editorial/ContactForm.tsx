"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Editorial variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Editorial form feel: a magazine "reply card" — tracked small-caps labels
 * sitting above ruled underline fields, ink-on-paper, the submit set as a
 * crisp print CTA. Deliberately spare so it reads as the coupon at the foot of
 * a feature rather than a web app form.
 */
export function ContactForm({
  fields,
  submitLabel,
}: {
  fields: string[];
  submitLabel: string;
}) {
  return (
    <form
      className="flex flex-col gap-9"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field) => (
        <label
          key={field}
          className="ed-eyebrow flex flex-col gap-3"
        >
          {field}
          <input
            // Coupled to field label wording: any label containing "email"
            // (case-insensitive) renders an email input. Update this check
            // if content.ts field labels change in a way that no longer
            // includes the word "email".
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full border-0 border-b border-[var(--ed-rule-strong)] bg-transparent px-0 py-2 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-muted-foreground/50 focus-visible:border-[var(--ed-red)] focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder={field}
          />
        </label>
      ))}
      <div className="pt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
