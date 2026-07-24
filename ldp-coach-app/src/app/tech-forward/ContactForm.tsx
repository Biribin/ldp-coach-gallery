"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Tech Forward variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Tech Forward form feel: bracketed mono labels like schematic callouts,
 * crisp hairline-boxed fields — an instrument-panel input array.
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
      {fields.map((field, index) => (
        <label
          key={field}
          className="tf-mono flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
        >
          <span>
            [{(index + 1).toString().padStart(2, "0")}] {field}
          </span>
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full border border-border bg-card px-4 py-3 text-sm font-normal normal-case tracking-normal text-foreground outline-none transition-colors duration-200 ease-[var(--tf-ease)] placeholder:text-muted-foreground/50 focus-visible:border-[var(--tf-signal)] focus-visible:ring-2 focus-visible:ring-[var(--tf-signal)]/30 focus-visible:ring-offset-0"
            placeholder={field}
          />
        </label>
      ))}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto">
          {submitLabel} →
        </Button>
      </div>
    </form>
  );
}
