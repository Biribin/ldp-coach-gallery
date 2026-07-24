"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Organic/Fluid variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Organic/Fluid form feel: fully rounded pill fields resting on a soft sand
 * surface, generous internal padding, a focus glow rather than a hard ring —
 * the form itself reads as another soft, water-worn shape on the page.
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
      className="flex flex-col gap-5"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field) => (
        <label
          key={field}
          className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground"
        >
          {field}
          {field.toLowerCase().includes("goals") ? (
            <textarea
              name={field.toLowerCase()}
              rows={4}
              className="w-full resize-none rounded-[28px] border border-border bg-card px-6 py-4 text-base font-normal normal-case tracking-normal text-foreground outline-none placeholder:text-muted-foreground/50"
              placeholder={field}
            />
          ) : (
            <input
              type={field.toLowerCase().includes("email") ? "email" : "text"}
              name={field.toLowerCase()}
              className="w-full rounded-full border border-border bg-card px-6 py-4 text-base font-normal normal-case tracking-normal text-foreground outline-none placeholder:text-muted-foreground/50"
              placeholder={field}
            />
          )}
        </label>
      ))}
      <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto sm:self-start">
        {submitLabel}
      </Button>
    </form>
  );
}
