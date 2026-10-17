import { cn } from "@/lib/utils";

/**
 * Original stylized poppy mark — created for this project.
 * A remembrance symbol rendered in muted poppy red with a charcoal center.
 */
export function PoppyMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-10 w-10", className)}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
    >
      <g transform="translate(32 33)">
        <ellipse
          cx="-9"
          cy="-6"
          rx="10"
          ry="12"
          fill="#A93F2B"
          transform="rotate(-24 -9 -6)"
        />
        <ellipse
          cx="9"
          cy="-6"
          rx="10"
          ry="12"
          fill="#A93F2B"
          transform="rotate(24 9 -6)"
        />
        <ellipse
          cx="-8"
          cy="8"
          rx="9"
          ry="10"
          fill="#7E2D26"
          transform="rotate(18 -8 8)"
        />
        <ellipse
          cx="8"
          cy="8"
          rx="9"
          ry="10"
          fill="#7E2D26"
          transform="rotate(-18 8 8)"
        />
        <circle cx="0" cy="1" r="5.5" fill="#211E1A" />
        <circle cx="-1.6" cy="-0.6" r="1.1" fill="#C2A878" opacity="0.85" />
        <circle cx="1.8" cy="1.4" r="0.8" fill="#C2A878" opacity="0.6" />
      </g>
    </svg>
  );
}
