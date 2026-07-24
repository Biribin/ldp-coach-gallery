"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Swiss/International variant): renders
 * inputs and prevents submission — no backend, no API route, no persisted
 * data. Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Swiss form feel: each field is a numbered grid row, square-cornered boxed
 * input, hairline border, red focus ring — a form as an ordered register,
 * not a soft conversation.
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
      className="flex flex-col"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field, index) => (
        <label
          key={field}
          className="ch-row grid grid-cols-[3rem_1fr] items-center gap-4 py-5"
        >
          <span className="ch-coord">{(index + 1).toString().padStart(2, "0")}</span>
          <span className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {field}
            </span>
            <input
              // Coupled to field label wording: any label containing "email"
              // (case-insensitive) renders an email input. Update this check
              // if content.ts field labels change in a way that no longer
              // includes the word "email".
              type={field.toLowerCase().includes("email") ? "email" : "text"}
              name={field.toLowerCase()}
              className="w-full border border-border bg-transparent px-3 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] placeholder:text-muted-foreground/50 focus-visible:border-[var(--ch-red)]"
              placeholder={field}
            />
          </span>
        </label>
      ))}
      <div className="pt-8">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
