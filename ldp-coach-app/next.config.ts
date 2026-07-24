import type { NextConfig } from "next";

// GitHub Pages serves this repo from a subpath: https://biribin.github.io/ldp-coach-gallery/
// `output: "export"` produces a fully static site in `out/`; basePath/assetPrefix make
// all internal links and asset URLs resolve correctly under that subpath.
// The GITHUB_PAGES env flag (set by the deploy workflow) scopes the prefix to CI builds,
// so `next dev` still runs at "/" locally.
const repo = "ldp-coach-gallery";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
};

export default nextConfig;
