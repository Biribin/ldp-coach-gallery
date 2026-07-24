"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Typography First variant): renders inputs
 * and prevents submission — no backend, no persisted data. Client Component
 * because it needs an onSubmit handler (forbidden as a Server Component prop).
 *
 * Form feel: labels rendered as oversized uppercase display words standing in
 * for a headline, inputs are blunt bottom-lined fields — the form itself
 * reads as one more typographic statement, not a boxed widget.
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
      className="flex flex-col gap-8"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field) => (
        <label key={field} className="flex flex-col gap-3">
          <span className="tf-label">{field}</span>
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full border-0 border-b-2 border-[var(--tf-line)] bg-transparent px-1 py-3 text-2xl font-medium text-foreground outline-none transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] placeholder:text-muted-foreground/40 focus-visible:border-[var(--tf-coral)] focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder={field}
          />
        </label>
      ))}
      <Button
        type="submit"
        size="lg"
        className="mt-4 w-full bg-[var(--tf-coral)] px-8 text-lg text-[var(--tf-ink)] hover:bg-[var(--tf-ochre)] sm:w-auto"
      >
        {submitLabel}
      </Button>
    </form>
  );
}
