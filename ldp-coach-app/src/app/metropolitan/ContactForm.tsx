"use client";

import { Button } from "@/components/ui/button";

const FIELD_TYPES: Record<string, string> = {
  email: "email",
};

/**
 * Placeholder-only contact form (Metropolitan variant): renders inputs and
 * prevents submission — no backend, no API route, no persisted data.
 * Extracted as a Client Component because it needs an onSubmit handler
 * (Next.js App Router forbids passing event handlers as Server Component
 * props).
 *
 * Metropolitan form feel: boxed ink-surface fields with sharp corners and a
 * brass focus ring — a confident, cultured intake rather than a soft prompt.
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
      {fields.map((field) => {
        const key = field.toLowerCase();
        return (
          <label
            key={field}
            className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {field}
            <input
              type={FIELD_TYPES[key] ?? "text"}
              name={key}
              className="w-full border border-[var(--met-line)] bg-[var(--met-surface-raised)] px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] placeholder:text-muted-foreground/50 focus-visible:border-[var(--met-brass)] focus-visible:ring-2 focus-visible:ring-[var(--met-brass)]/30 focus-visible:ring-offset-0"
              placeholder={field}
            />
          </label>
        );
      })}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
