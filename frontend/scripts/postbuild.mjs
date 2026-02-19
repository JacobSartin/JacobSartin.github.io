/**
 * Post-build script for Next.js static export on plain static hosts (e.g. GitHub Pages).
 *
 * Fixes two issues:
 * 1. Adds .nojekyll so GitHub Pages serves files/dirs starting with "_".
 * 2. Flattens RSC payload directories — the client requests dot-separated filenames
 *    like __next.projects.this-page.__PAGE__.txt but the export writes them in nested
 *    directories like __next.projects/this-page/__PAGE__.txt. This script creates the
 *    flat copies the client expects.
 */

import fs from "fs";
import path from "path";

const outDir = path.resolve("out");

// ── 1. .nojekyll ────────────────────────────────────────────────────────────────
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
console.log("Created .nojekyll");

// ── 2. Flatten __next.* RSC directories ─────────────────────────────────────────
let created = 0;

/**
 * Walk `dir` looking for directories whose name starts with "__next.".
 * Regular directories (route segments) are recursed into normally.
 */
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const full = path.join(dir, entry.name);

    if (entry.name.startsWith("__next.")) {
      flattenRscDir(full, dir, entry.name);
    } else {
      walk(full);
    }
  }
}

/**
 * Recursively flatten an RSC directory.
 *
 * For every file inside `rscDir` (at any depth), create a sibling file in
 * `parentDir` whose name encodes the full sub-path with dots as separators.
 *
 *   __next.projects/this-page/__PAGE__.txt
 *   →  __next.projects.this-page.__PAGE__.txt
 */
function flattenRscDir(rscDir, parentDir, prefix) {
  for (const entry of fs.readdirSync(rscDir, { withFileTypes: true })) {
    const full = path.join(rscDir, entry.name);

    if (entry.isDirectory()) {
      flattenRscDir(full, parentDir, `${prefix}.${entry.name}`);
    } else if (entry.isFile()) {
      // Strip the extension, build the flat name, re-add the extension.
      const ext = path.extname(entry.name); // .txt
      const base = path.basename(entry.name, ext); // __PAGE__
      const flatName = `${prefix}.${base}${ext}`;
      const flatPath = path.join(parentDir, flatName);

      if (!fs.existsSync(flatPath)) {
        fs.copyFileSync(full, flatPath);
        created++;
      }
    }
  }
}

walk(outDir);
console.log(`Flattened ${created} RSC payload file(s).`);
console.log("Post-build complete.");
