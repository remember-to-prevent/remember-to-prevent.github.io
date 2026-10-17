"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { Citation } from "@/content/types";
import { useLang } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { cn } from "@/lib/utils";

/**
 * Superscript citation markers [n] that open an accessible popover with the
 * full source record. Keyboard reachable, focus-trapped by Radix.
 */
export function CitationNote({
  ids,
  registry,
  startNumber = 1,
}: {
  ids: string[];
  registry: Citation[];
  startNumber?: number;
}) {
  const { t, lang } = useLang();
  const [openId, setOpenId] = useState<string | null>(null);

  if (!ids || ids.length === 0) return null;

  return (
    <sup className="ml-1 inline-flex gap-0.5 font-sans text-[0.7em] align-super">
      {ids.map((id, i) => {
        const citation = registry.find((c) => c.id === id);
        if (!citation) return null;
        const num = startNumber + i;
        return (
          <Popover key={id} open={openId === id} onOpenChange={(o) => setOpenId(o ? id : null)}>
            <PopoverTrigger
              asChild
              className="rounded-sm text-bronze-deep underline decoration-bronze-light decoration-dotted underline-offset-2 hover:text-poppy focus-visible:text-poppy"
            >
              <button
                type="button"
                aria-label={`${t(ui.common.sources)} ${num}: ${citation.publisher}`}
              >
                [{num}]
              </button>
            </PopoverTrigger>
            <PopoverContent
              side="top"
              align="center"
              className="w-80 border-bronze/40 bg-paper-raised p-4 text-ink shadow-xl"
            >
              <p className="font-sans text-xs font-semibold tracking-wide text-bronze-deep uppercase">
                {t(ui.common.sources)}
              </p>
              <p className="mt-1 font-serif text-sm leading-snug font-medium">
                {citation.title[lang]}
              </p>
              <p className="mt-1 font-sans text-xs text-stone">
                {citation.publisher} · {citation.kind}
              </p>
              <p className="mt-1 font-sans text-xs text-stone">
                {t(ui.common.accessed)}: {citation.accessDate}
              </p>
              {citation.note ? (
                <p className="mt-2 font-sans text-xs leading-snug text-stone italic">
                  {citation.note[lang]}
                </p>
              ) : null}
              <a
                href={citation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 font-sans text-xs font-medium text-poppy underline underline-offset-2"
              >
                {citation.url.replace(/^https?:\/\//, "").slice(0, 42)}
                <span className="sr-only"> ({t(ui.common.externalLink)})</span>
                <span aria-hidden="true">↗</span>
              </a>
            </PopoverContent>
          </Popover>
        );
      })}
    </sup>
  );
}

/** A full list of a chapter's sources, as a definition list. */
export function SourceList({
  registry,
  className,
}: {
  registry: Citation[];
  className?: string;
}) {
  const { t, lang } = useLang();
  if (registry.length === 0) return null;
  return (
    <dl className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {registry.map((c, i) => (
        <div key={c.id} className="border-l-2 border-bronze-light pl-3">
          <dt className="font-sans text-xs font-semibold text-bronze-deep">
            [{i + 1}] {c.publisher}
          </dt>
          <dd className="mt-0.5 font-serif text-sm leading-snug">
            {c.title[lang]}{" "}
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-poppy underline underline-offset-2"
            >
              {t(ui.common.sources)} ↗
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
}
