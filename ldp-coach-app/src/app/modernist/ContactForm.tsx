"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Modernist variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Modernist form feel: boxed fields with a flat 1px hairline border and a
 * small square corner (var(--radius): 2px) — functional, not decorative, in
 * keeping with the flat-offset-shadow language used across the page.
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
            className="w-full border border-[var(--mo-line)] bg-card px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-muted-foreground/50 focus-visible:border-[var(--mo-teal)] focus-visible:ring-2 focus-visible:ring-[var(--mo-teal)]/30"
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
