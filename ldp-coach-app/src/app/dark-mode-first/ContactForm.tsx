"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Dark Mode First variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Client Component because it needs an onSubmit handler (Next.js App Router
 * forbids passing event handlers as Server Component props).
 *
 * Form feel: raised-surface fields (elevation, not boxes with borders), cold
 * glow on focus — the "precision instrument" light activating on input.
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
          className="dmf-eyebrow flex flex-col gap-3"
        >
          {field}
          <input
            type={field.toLowerCase() === "email" ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full rounded-sm border border-[var(--dmf-line)] px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none placeholder:text-muted-foreground/50"
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
