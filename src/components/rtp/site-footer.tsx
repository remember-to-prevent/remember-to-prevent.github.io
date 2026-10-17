"use client";

import type { Citation } from "@/content/types";
import {
  chapters,
  timelineWwi,
  timelineWwii,
  casualties,
  holocaust,
  hunger,
} from "@/content";
import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";
import { PoppyMark } from "@/components/rtp/poppy";

/**
 * Transparency footer, modeled in spirit on the Global Food Crisis footer but
 * written for this project: independence statement, ONLY the sources actually
 * used (deduplicated from all content), pending license choice, honest access
 * dates, truthful privacy statement, and a discreet cross-link to the separate
 * Global Food Crisis project.
 */
export function SiteFooter() {
  const { t, lang } = useLang();

  const allCitations: Citation[] = [
    ...chapters.flatMap((c) => c.citations),
    ...timelineWwi.citations,
    ...timelineWwii.citations,
    ...casualties.citations,
    ...holocaust.citations,
    ...hunger.citations,
  ];
  const seen = new Set<string>();
  const unique = allCitations.filter((c) => {
    if (seen.has(c.id)) return false;
    seen.add(c.id);
    return true;
  });
  unique.sort((a, b) => a.publisher.localeCompare(b.publisher));

  return (
    <footer
      id="site-footer"
      className="rtp-grain mt-auto border-t border-bronze/40 bg-ink px-4 pt-14 pb-10 text-paper sm:px-6"
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3">
          <PoppyMark className="h-8 w-8" />
          <div>
            <p className="font-display text-lg font-semibold">{ui.footer.title}</p>
            <p className="font-sans text-[0.62rem] font-semibold tracking-[0.22em] text-bronze-light uppercase">
              {t(ui.hero.kicker)}
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-8 border-t border-bronze/25 pt-8">
          {/* Independence */}
          <section aria-label={lang === "en" ? "Independence statement" : "獨立聲明"}>
            <p className="font-serif text-sm leading-relaxed text-paper/75">
              {t(ui.footer.independence)}
            </p>
          </section>

          {/* Sources actually used */}
          <section aria-label={t(ui.footer.sourcesTitle)}>
            <h3 className="font-sans text-xs font-semibold tracking-[0.22em] text-bronze-light uppercase">
              {t(ui.footer.sourcesTitle)}
            </h3>
            <ul className="rtp-scroll mt-4 max-h-72 space-y-2.5 overflow-y-auto pr-2">
              {unique.map((c) => (
                <li key={c.id} className="border-l-2 border-bronze/40 pl-3">
                  <p className="font-sans text-xs font-semibold text-bronze-light">
                    {c.publisher}
                    <span className="ml-2 font-normal text-stone-light/70">· {c.kind}</span>
                  </p>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-sm leading-snug text-paper/90 underline decoration-bronze/60 decoration-dotted underline-offset-4 hover:decoration-poppy"
                  >
                    {c.title[lang]}
                    <span aria-hidden="true" className="ml-1 text-poppy">↗</span>
                    <span className="sr-only"> ({t(ui.common.externalLink)})</span>
                  </a>
                  <p className="mt-0.5 font-sans text-[0.66rem] text-stone-light/70">
                    {t(ui.common.accessed)}: {c.accessDate}
                    {c.note ? ` — ${c.note[lang]}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* License */}
          <section aria-label={t(ui.footer.licenseTitle)}>
            <h3 className="font-sans text-xs font-semibold tracking-[0.22em] text-bronze-light uppercase">
              {t(ui.footer.licenseTitle)}
            </h3>
            <p className="mt-2 font-serif text-sm leading-relaxed text-paper/75">
              {t(ui.footer.licenseText)}
            </p>
          </section>

          {/* Access dates */}
          <section aria-label={t(ui.footer.accessTitle)}>
            <h3 className="font-sans text-xs font-semibold tracking-[0.22em] text-bronze-light uppercase">
              {t(ui.footer.accessTitle)}
            </h3>
            <p className="mt-2 font-serif text-sm leading-relaxed text-paper/75">
              {t(ui.footer.accessText)}
            </p>
          </section>

          {/* Privacy */}
          <section aria-label={t(ui.footer.privacyTitle)}>
            <h3 className="font-sans text-xs font-semibold tracking-[0.22em] text-bronze-light uppercase">
              {t(ui.footer.privacyTitle)}
            </h3>
            <p className="mt-2 font-serif text-sm leading-relaxed text-paper/75">
              {t(ui.footer.privacyText)}
            </p>
          </section>

          {/* Editorial note */}
          <section aria-label={t(ui.footer.disclaimerTitle)}>
            <h3 className="font-sans text-xs font-semibold tracking-[0.22em] text-bronze-light uppercase">
              {t(ui.footer.disclaimerTitle)}
            </h3>
            <p className="mt-2 font-serif text-sm leading-relaxed text-paper/75">
              {t(ui.footer.disclaimerText)}
            </p>
          </section>

          {/* Further reading */}
          <section aria-label={t(ui.footer.furtherTitle)}>
            <h3 className="font-sans text-xs font-semibold tracking-[0.22em] text-bronze-light uppercase">
              {t(ui.footer.furtherTitle)}
            </h3>
            <p className="mt-2 font-serif text-sm leading-relaxed text-paper/75">
              {t(ui.footer.furtherText)}{" "}
              <a
                href="https://global-food-crisis.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-bronze-light underline decoration-bronze/60 underline-offset-4 hover:text-paper"
              >
                global-food-crisis.com
                <span aria-hidden="true" className="ml-1 text-poppy">↗</span>
                <span className="sr-only"> ({t(ui.common.externalLink)})</span>
              </a>
            </p>
          </section>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-bronze/25 pt-6 sm:flex-row">
          <p className="font-sans text-[0.66rem] tracking-[0.18em] text-stone-light/60 uppercase">
            The Past Cannot Be Changed. The Future Is Still Ours to Shape.
          </p>
          <a
            href="#top"
            className="rounded-full border border-bronze/40 px-4 py-1.5 font-sans text-xs font-semibold text-bronze-light transition-colors hover:bg-bronze/20 hover:text-paper"
          >
            ↑ {t(ui.common.backToTop)}
          </a>
        </div>
      </div>
    </footer>
  );
}
