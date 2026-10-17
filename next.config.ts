import type { NextConfig } from "next";

// Dual-mode configuration (verified against the deployed Global Food Crisis
// reference implementation):
// - Dev / preview (default): standalone output used by the sandbox runtime.
// - GitHub Pages export: CI sets NEXT_OUTPUT=export and (only when needed for
//   project sites) NEXT_PUBLIC_BASE_PATH=/REPOSITORY_NAME. This repository is
//   an organization root site (remember-to-prevent.github.io), so the site is
//   served at "/" and the base path stays empty — see .github/workflows/deploy.yml.
const isExport = process.env.NEXT_OUTPUT === "export";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export" as const } : { output: "standalone" as const }),
  basePath: basePath || undefined,
  trailingSlash: true,
  // Static export has no image optimization server (and the site uses no
  // next/image components today; kept for future-proofing, as in the reference).
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
