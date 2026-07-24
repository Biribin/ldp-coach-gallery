"use client";

import { Button } from "@/components/ui/button";

/**
 * Placeholder-only contact form (Neo-Geo variant): renders inputs and prevents
 * submission — no backend, no API route, no persisted data. Extracted as a
 * Client Component because it needs an onSubmit handler (Next.js App Router
 * forbids passing event handlers as Server Component props).
 *
 * Neo-Geo form feel: each field is a framed grid module — exact hairline box,
 * a tabular index marker, and a crisp cobalt keyline on focus that snaps in.
 * Precise and engineered, the opposite of japandi's soft underline fields.
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
      className="grid grid-cols-1 gap-[var(--ng-unit)] sm:grid-cols-2"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field, index) => (
        <label
          key={field}
          className={
            // "Goals" (last field) spans the full module row for balance.
            "flex flex-col gap-2" + (index === fields.length - 1 ? " sm:col-span-2" : "")
          }
        >
          <span className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
            <span className="ng-index text-[var(--ng-cobalt)]">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            {field}
          </span>
          <input
            // Coupled to field label wording: any label containing "email"
            // (case-insensitive) renders an email input. Update this check
            // if content.ts field labels change in a way that no longer
            // includes the word "email".
            type={field.toLowerCase().includes("email") ? "email" : "text"}
            name={field.toLowerCase()}
            className="w-full border border-[var(--ng-line-strong)] bg-card px-3 py-2.5 text-base text-foreground outline-none transition-[box-shadow,border-color] duration-[var(--ng-beat)] ease-[cubic-bezier(0.2,0.8,0.2,1)] placeholder:text-muted-foreground/50 focus-visible:border-[var(--ng-cobalt)] focus-visible:shadow-[3px_3px_0_0_var(--ng-cobalt)]"
            placeholder={field}
          />
        </label>
      ))}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="mt-1 w-full sm:w-auto">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
