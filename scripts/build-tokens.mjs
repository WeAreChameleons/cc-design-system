/**
 * Build design tokens from Tokens Studio JSON → CSS, Tailwind, and JS outputs.
 *
 * Source: tokens/figma-tokens.json (synced from Figma via Tokens Studio plugin)
 * Output:
 *   dist/tokens.css       — CSS custom properties
 *   dist/tailwind.css     — Tailwind @theme block for cc-website
 *   dist/tokens.js        — JS/TS module with token values
 *
 * Run: node scripts/build-tokens.mjs
 */

import StyleDictionary from "style-dictionary";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const TOKENS_FILE = resolve(ROOT, "tokens/figma-tokens.json");
const DIST = resolve(ROOT, "dist");

// ── 1. Flatten Tokens Studio format to Style Dictionary format ──
function flattenTokens(obj, prefix = "") {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}/${key}` : key;
    if (value && typeof value === "object" && "$value" in value) {
      // Leaf token
      result[path] = {
        value: String(value.$value),
        type: value.$type || "other",
      };
    } else if (value && typeof value === "object" && !("$themes" in value) && !("$metadata" in value)) {
      Object.assign(result, flattenTokens(value, path));
    }
  }
  return result;
}

// ── 2. Load and parse ──
const raw = JSON.parse(readFileSync(TOKENS_FILE, "utf-8"));
const coreTokens = raw.core || raw;
const flat = flattenTokens(coreTokens);

// Convert to Style Dictionary input format
const sdTokens = {};
for (const [path, token] of Object.entries(flat)) {
  const parts = path.split("/");
  let current = sdTokens;
  for (let i = 0; i < parts.length - 1; i++) {
    current[parts[i]] = current[parts[i]] || {};
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = { value: token.value };
}

// Write temp file for Style Dictionary
mkdirSync(DIST, { recursive: true });
const tempFile = resolve(DIST, "_tokens-input.json");
writeFileSync(tempFile, JSON.stringify(sdTokens, null, 2));

// ── 3. Build with Style Dictionary ──
const sd = new StyleDictionary({
  source: [resolve(DIST, "_tokens-input.json")],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: `${DIST}/`,
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: { outputReferences: true },
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: `${DIST}/`,
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();

// ── 4. Generate Tailwind @theme block ──
const cssContent = readFileSync(resolve(DIST, "tokens.css"), "utf-8");
const varRegex = /--([^:]+):\s*([^;]+);/g;
let tailwindVars = [];
let match;
while ((match = varRegex.exec(cssContent)) !== null) {
  tailwindVars.push(`  --${match[1]}: ${match[2]};`);
}

const tailwindCSS = `/* Auto-generated from figma-tokens.json — do not edit manually */
/* Copy this @theme block into your Tailwind globals.css */

@theme {
${tailwindVars.join("\n")}

  /* CC Brand — Core Palette */
  --color-cc-black: var(--color-primary-neutral-black);
  --color-cc-white: var(--color-primary-neutral-white);
  --color-cc-parchment: var(--color-primary-beige-00);
  --color-cc-burnt-sienna: var(--color-primary-orange-00);
  --color-cc-straw: var(--color-secondary-green-00);
  --color-cc-electric-blue: var(--color-secondary-blue-00);

  /* CC Brand — Parchment Tints */
  --color-cc-parchment-20: var(--color-primary-beige-tint-20);
  --color-cc-parchment-40: var(--color-primary-beige-tint-40);
  --color-cc-parchment-60: var(--color-primary-beige-tint-60);
  --color-cc-parchment-80: var(--color-primary-beige-tint-80);

  /* CC Brand — Burnt Sienna Tints */
  --color-cc-burnt-sienna-20: var(--color-primary-orange-tint-20);
  --color-cc-burnt-sienna-40: var(--color-primary-orange-tint-40);
  --color-cc-burnt-sienna-60: var(--color-primary-orange-tint-60);
  --color-cc-burnt-sienna-80: var(--color-primary-orange-tint-80);

  /* CC Brand — Straw Tints */
  --color-cc-straw-20: var(--color-secondary-green-tint-20);
  --color-cc-straw-40: var(--color-secondary-green-tint-40);
  --color-cc-straw-60: var(--color-secondary-green-tint-60);
  --color-cc-straw-80: var(--color-secondary-green-tint-80);

  /* CC Brand — Electric Blue Tints */
  --color-cc-electric-blue-20: var(--color-secondary-blue-tint-20);
  --color-cc-electric-blue-40: var(--color-secondary-blue-tint-40);
  --color-cc-electric-blue-60: var(--color-secondary-blue-tint-60);
  --color-cc-electric-blue-80: var(--color-secondary-blue-tint-80);

  /* CC Brand — Grey */
  --color-cc-grey: var(--color-primary-grey-mid);
  --color-cc-grey-light: var(--color-primary-grey-light);

  /* CC Brand — Aliases */
  --color-cc-cream: var(--color-primary-beige-00);
  --color-cc-rust: var(--color-primary-orange-10);
  --color-cc-offwhite: #f8f7f3;
  --color-cc-orange: var(--color-primary-orange-00);

  /* CC Admin — Semantic Tokens */
  --color-cc-text-primary: #121212;
  --color-cc-text-secondary: #6b6b6b;
  --color-cc-text-muted: #9a9a9a;
  --color-cc-border: #e5e5e5;
  --color-cc-border-light: #f0f0f0;
  --color-cc-surface: #ffffff;
  --color-cc-surface-hover: #faf8f2;

  /* Fonts */
  --font-display: var(--font-family-display);
  --font-sans: var(--font-family-body);
}
`;

writeFileSync(resolve(DIST, "tailwind.css"), tailwindCSS);

// Clean up temp file
import { unlinkSync } from "fs";
try { unlinkSync(tempFile); } catch {}

console.log("✓ Built tokens:");
console.log("  dist/tokens.css     — CSS custom properties");
console.log("  dist/tailwind.css   — Tailwind @theme block");
console.log("  dist/tokens.js      — JS/TS module");
