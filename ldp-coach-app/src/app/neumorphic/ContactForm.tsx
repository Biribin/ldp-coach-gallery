"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Neumorphic variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Neumorphic form feel: every field is a soft inset "pressed-in" well on the
 * same putty surface as the page — never a boxed, bordered input.
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
          className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
        >
          {field}
          <input
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full px-5 py-4 text-base font-normal normal-case tracking-normal text-foreground outline-none placeholder:text-muted-foreground/50"
            placeholder={field}
          />
        </label>
      ))}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="mt-2 w-full px-8 sm:w-auto">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
