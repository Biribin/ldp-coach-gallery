"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Gradient Modern variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data. Extracted
 * as a Client Component because it needs an onSubmit handler (Next.js App
 * Router forbids passing event handlers as Server Component props).
 *
 * Gradient Modern form feel: soft-cornered, warm-white fields that glow with a
 * coral→rose ring on focus — color as atmosphere carried into the inputs, with
 * the same liquid easing as the rest of the page.
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
          className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
        >
          {field}
          <input
            // Coupled to field label wording: any label containing "email"
            // (case-insensitive) renders an email input. Update this check
            // if content.ts field labels change in a way that no longer
            // includes the word "email".
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full rounded-[var(--radius)] border border-[var(--input)] bg-[oklch(1_0_0_/_0.6)] px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-[border-color,box-shadow,background-color] duration-[var(--gm-beat)] ease-[cubic-bezier(0.65,0,0.35,1)] placeholder:text-muted-foreground/55 focus-visible:border-[var(--gm-rose)] focus-visible:bg-[oklch(1_0_0_/_0.85)] focus-visible:shadow-[var(--gm-glow-ring)]"
            placeholder={field}
          />
        </label>
      ))}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="gm-grad-btn mt-2 w-full sm:w-auto">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
