"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Corporate Professional variant): renders
 * inputs and prevents submission — no backend, no API route, no persisted
 * data. Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Corporate Professional form feel: boxed, letterhead-style fields with
 * visible labels above each input and a confident cobalt focus ring —
 * structured and dependable, like filling out an intake form for a firm
 * you already trust.
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
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field) => (
        <label
          key={field}
          className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
        >
          {field}
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full rounded-[var(--radius)] border border-border bg-card px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors duration-500 ease-[var(--cp-ease)] placeholder:text-muted-foreground/50 focus-visible:border-[var(--cp-cobalt)] focus-visible:ring-2 focus-visible:ring-[var(--cp-cobalt)]/25 focus-visible:ring-offset-0"
            placeholder={field}
          />
        </label>
      ))}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
