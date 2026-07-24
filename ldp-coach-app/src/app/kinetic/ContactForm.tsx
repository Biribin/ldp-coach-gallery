"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Kinetic variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Kinetic form feel: sharp-cornered fields with a cobalt focus state that
 * snaps in — an entry gate to the program, not a soft contact card.
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
          className="kin-eyebrow flex flex-col gap-2"
        >
          {field}
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full border-2 border-foreground/15 bg-card px-4 py-3 text-base font-medium normal-case tracking-normal text-foreground outline-none transition-colors duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] placeholder:text-muted-foreground/50 focus-visible:border-[var(--kin-cobalt)] focus-visible:ring-0"
            placeholder={field}
          />
        </label>
      ))}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto sm:px-12">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
