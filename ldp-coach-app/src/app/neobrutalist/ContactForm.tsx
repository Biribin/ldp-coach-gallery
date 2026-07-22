"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (PAGE-07): renders inputs and prevents
 * submission — no backend, no API route, no persisted data. Extracted as a
 * Client Component because it needs an onSubmit handler.
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
        <label key={field} className="flex flex-col gap-2 text-sm font-bold uppercase">
          {field}
          <input
            // Coupled to field label wording: any label containing "email"
            // (case-insensitive) renders an email input. Update this check
            // if content.ts field labels change in a way that no longer
            // includes the word "email".
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="border-4 border-foreground bg-background px-3 py-2 text-base font-normal normal-case text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            placeholder={field}
          />
        </label>
      ))}
      <Button type="submit" size="lg" className="sm:col-span-2">
        {submitLabel}
      </Button>
    </form>
  );
}
