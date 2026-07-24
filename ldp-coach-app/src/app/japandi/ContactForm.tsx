"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Japandi variant): renders inputs and prevents
 * submission — no backend, no API route, no persisted data. Extracted as a
 * Client Component because it needs an onSubmit handler (Next.js App Router
 * forbids passing event handlers as Server Component props).
 *
 * Japandi form feel: calm bottom-border (underline) fields with generous
 * breathing room, no hard boxes — material honesty over framing.
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
      className="grid grid-cols-1 gap-10 sm:grid-cols-2"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field) => (
        <label
          key={field}
          className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
        >
          {field}
          <input
            // Coupled to field label wording: any label containing "email"
            // (case-insensitive) renders an email input. Update this check
            // if content.ts field labels change in a way that no longer
            // includes the word "email".
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full border-0 border-b border-border bg-transparent px-1 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-muted-foreground/50 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-offset-0"
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
