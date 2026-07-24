"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Monochromatic variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Form feel: underline fields rendered directly on the deepest tonal band,
 * so the field itself reads as a lighter step against the dark surface —
 * tone is the only signal, never a second hue.
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
      className="grid grid-cols-1 gap-8 sm:grid-cols-2"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field) => (
        <label
          key={field}
          className="flex flex-col gap-2 text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-[var(--mono-400)]"
        >
          {field}
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full border-0 border-b border-[var(--mono-600)] bg-transparent px-1 py-3 font-serif text-lg font-normal normal-case tracking-normal text-[var(--mono-100)] outline-none transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-[var(--mono-600)] focus-visible:border-[var(--mono-100)] focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder={field}
          />
        </label>
      ))}
      <div className="sm:col-span-2">
        <Button
          type="submit"
          size="lg"
          className="mt-2 w-full bg-[var(--mono-100)] text-[var(--mono-950)] hover:bg-[var(--mono-200)] sm:w-auto"
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
