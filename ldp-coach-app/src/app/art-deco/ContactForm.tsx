"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Art Deco variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Art Deco form feel: sharp-cornered gold-bordered fields set inside a
 * symmetrical two-column frame, tracked uppercase labels — an engraved
 * invitation card, not a soft web form.
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
      className="deco-frame grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 sm:gap-10 sm:p-12"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field) => (
        <label
          key={field}
          className="deco-eyebrow flex flex-col gap-3 text-[var(--deco-gold)]"
        >
          {field}
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full border border-[var(--border)] bg-transparent px-3 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] placeholder:text-muted-foreground/50 focus-visible:border-[var(--deco-gold)] focus-visible:ring-2 focus-visible:ring-[var(--deco-gold)]/40 focus-visible:ring-offset-0"
            placeholder={field}
            style={{ fontFamily: "var(--font-deco-body)" }}
          />
        </label>
      ))}
      <div className="sm:col-span-2 sm:text-center">
        <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto sm:px-12">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
