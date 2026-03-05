/**
 * Post-build script for Vite static output on GitHub Pages.
 *
 * 1. Adds `.nojekyll` so underscore-prefixed assets are served.
 * 2. Creates `404.html` as a copy of `index.html` for SPA deep-link fallback.
 */

import fs from "fs";
import path from "path";

const outDir = path.resolve("dist");

// ── 1. .nojekyll ────────────────────────────────────────────────────────────────
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
console.log("Created .nojekyll");

const indexPath = path.join(outDir, "index.html");
const fallbackPath = path.join(outDir, "404.html");

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, fallbackPath);
  console.log("Created 404.html fallback");
}

console.log("Post-build complete.");
