"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Material variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Material form feel: tonal filled fields (MD3 filled text field pattern) —
 * soft lavender surface, label riding above the field, pill submit button.
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
          className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
        >
          {field}
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full rounded-2xl border border-transparent bg-[var(--md-surface-dim)] px-4 py-3.5 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-all duration-200 ease-[var(--md-ease-standard)] placeholder:text-muted-foreground/50 focus-visible:border-[var(--md-primary)] focus-visible:bg-[var(--md-surface)]"
            placeholder={field}
          />
        </label>
      ))}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="mt-2 w-full px-8 sm:w-auto">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
