"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Bauhaus variant): renders inputs and prevents
 * submission — no backend, no API route, no persisted data. Extracted as a
 * Client Component because it needs an onSubmit handler (Next.js App Router
 * forbids passing event handlers as Server Component props).
 *
 * Bauhaus form feel: boxed fields on the 3px black grid line, flat primary-
 * color field labels, no rounding — a functional instrument, not a soft input.
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
      className="grid grid-cols-1 gap-0 border-[3px] border-[var(--bh-ink)] sm:grid-cols-2"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field, index) => (
        <label
          key={field}
          className={`flex flex-col gap-3 border-b-[3px] border-[var(--bh-ink)] p-6 last:border-b-[3px] sm:border-r-[3px] sm:[&:nth-child(2n)]:border-r-0 ${
            index === fields.length - 1 && fields.length % 2 === 1
              ? "sm:col-span-2"
              : ""
          }`}
        >
          <span className="bh-eyebrow">{field}</span>
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full border-[3px] border-[var(--bh-ink)] bg-[var(--bh-paper)] px-4 py-3 text-base font-medium text-foreground outline-none placeholder:text-muted-foreground/60 focus-visible:border-[var(--bh-blue)] focus-visible:ring-0"
            placeholder={field}
          />
        </label>
      ))}
      <div className="p-6 sm:col-span-2">
        <Button type="submit" size="lg" className="w-full bg-[var(--bh-red)] text-[var(--bh-paper)] hover:bg-[var(--bh-red)] sm:w-auto">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
