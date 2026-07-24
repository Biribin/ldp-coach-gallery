"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Retro-futuristic variant): renders inputs
 * and prevents submission — no backend, no API route, no persisted data.
 * Client Component because it needs an onSubmit handler (Next.js App Router
 * forbids passing event handlers as Server Component props).
 *
 * Form feel: boxed chrome-edge fields with a cyan focus glow — a console
 * readout rather than a soft underline, matching the horizon/chrome motif.
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
          className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--rf-cyan)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {field}
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full rounded-[var(--radius)] border border-[var(--rf-hairline)] bg-[oklch(0.13_0.035_318)] px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none placeholder:text-muted-foreground/50 focus-visible:border-[var(--rf-cyan)]"
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
