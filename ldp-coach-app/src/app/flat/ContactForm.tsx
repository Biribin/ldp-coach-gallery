"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Flat variant): renders inputs and prevents
 * submission — no backend, no API route, no persisted data. Client Component
 * because it needs an onSubmit handler (Next.js App Router forbids passing
 * event handlers as Server Component props).
 *
 * Flat form feel: solid 2px-bordered blocks, no soft focus glow — a hard
 * color-swap on focus instead, consistent with zero-depth flat iconography.
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
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field) => (
        <label
          key={field}
          className="flex flex-col gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-foreground"
        >
          {field}
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full bg-card px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:bg-[var(--flat-yellow)]"
            placeholder={field}
          />
        </label>
      ))}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="mt-1 w-full sm:w-auto">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
