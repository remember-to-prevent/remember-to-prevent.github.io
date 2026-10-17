/**
 * Renders the original OG social card (1200×630) from a hand-composed SVG.
 * Original artwork — no third-party assets. Run: bun scripts/make-og-image.ts
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const W = 1200;
const H = 630;

const poppy = `
  <g transform="translate(942 250)">
    <ellipse cx="-46" cy="-30" rx="52" ry="62" fill="#A93F2B" transform="rotate(-24 -46 -30)"/>
    <ellipse cx="46" cy="-30" rx="52" ry="62" fill="#A93F2B" transform="rotate(24 46 -30)"/>
    <ellipse cx="-40" cy="42" rx="46" ry="52" fill="#7E2D26" transform="rotate(18 -40 42)"/>
    <ellipse cx="40" cy="42" rx="46" ry="52" fill="#7E2D26" transform="rotate(-18 40 42)"/>
    <circle cx="0" cy="6" r="28" fill="#211E1A"/>
    <circle cx="-8" cy="-3" r="5.5" fill="#C2A878" opacity="0.9"/>
    <circle cx="9" cy="7" r="4" fill="#C2A878" opacity="0.6"/>
  </g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#211E1A"/>
  <rect x="26" y="26" width="${W - 52}" height="${H - 52}" fill="none" stroke="#96774C" stroke-width="2" opacity="0.55"/>
  <rect x="36" y="36" width="${W - 72}" height="${H - 72}" fill="none" stroke="#C2A878" stroke-width="1" opacity="0.35"/>
  ${poppy}
  <text x="96" y="150" font-family="DejaVu Sans, sans-serif" font-size="26" letter-spacing="7" fill="#C2A878">AN INDEPENDENT HISTORICAL EDUCATION PROJECT</text>
  <text x="96" y="290" font-family="DejaVu Serif, Georgia, serif" font-size="104" font-weight="700" fill="#F4EFE5">REMEMBER TO PREVENT</text>
  <rect x="98" y="324" width="290" height="4" fill="#A93F2B"/>
  <text x="96" y="386" font-family="DejaVu Sans, sans-serif" font-size="30" letter-spacing="12" fill="#96774C">CHAPTER 01</text>
  <text x="96" y="452" font-family="DejaVu Serif, Georgia, serif" font-style="italic" font-size="34" fill="#F4EFE5">The Past Cannot Be Changed.</text>
  <text x="96" y="498" font-family="DejaVu Serif, Georgia, serif" font-style="italic" font-size="34" fill="#F4EFE5">The Future Is Still Ours to Shape.</text>
  <text x="96" y="566" font-family="DejaVu Sans, sans-serif" font-size="24" letter-spacing="3" fill="#A69C8C">TWO WORLD WARS · LESSONS FOR HUMANITY · ACTIONS FOR TOMORROW</text>
  <text x="96" y="566" dx="0" font-family="DejaVu Sans, sans-serif" font-size="24" fill="#A69C8C"></text>
</svg>`;

mkdirSync("public", { recursive: true });
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("public/og-image.png");
console.log("Wrote public/og-image.png");
