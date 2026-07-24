"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Luxury Minimal variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Luxury Minimal form feel: hairline-underline fields only, vast label
 * tracking, no boxes — access to something rare should feel unhurried, not
 * transactional.
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
          className="lm-eyebrow flex flex-col gap-3"
        >
          {field}
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base font-light normal-case tracking-normal text-foreground outline-none transition-colors duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] placeholder:text-muted-foreground/40 focus-visible:border-[var(--lm-bronze)] focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder={field}
          />
        </label>
      ))}
      <div className="mt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
