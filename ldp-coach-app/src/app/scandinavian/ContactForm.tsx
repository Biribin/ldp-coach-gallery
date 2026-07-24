"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Scandinavian variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Scandinavian form feel: soft, filled wool-toned fields with generous
 * rounded corners — a tactile, cozy container rather than Japandi's calm
 * underline, echoing the "comfortable and unhurried" brief.
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
          className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground"
        >
          {field}
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full rounded-[var(--radius)] border border-border bg-[var(--sc-wool)] px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors duration-500 ease-[var(--sc-ease)] placeholder:text-muted-foreground/60 focus-visible:border-[var(--sc-wood)] focus-visible:ring-2 focus-visible:ring-[var(--sc-wood)]/25"
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
