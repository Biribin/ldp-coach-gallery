"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Minimal variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Minimal form feel: single-column, bare underline fields, sharp corners,
 * near-instant focus transition — restraint carried all the way to the last
 * interactive surface on the page.
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
      className="flex flex-col gap-10"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field) => (
        <label
          key={field}
          className="flex flex-col gap-3 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
        >
          {field}
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-muted-foreground/40 focus-visible:border-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder={field}
          />
        </label>
      ))}
      <div>
        <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
