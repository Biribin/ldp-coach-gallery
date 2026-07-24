"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Glassmorphism variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Glass form feel: each field is its own frosted pane resting on the
 * ambient background, rounded and softly bordered rather than boxed in a
 * hard container.
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
          className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gm-ink-soft)]"
        >
          {field}
          <input
            // Coupled to field label wording: any label containing "email"
            // (case-insensitive) renders an email input. Update this check
            // if content.ts field labels change in a way that no longer
            // includes the word "email".
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
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
