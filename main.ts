// The One-Line Exit — a one-line resignation letter for make.fun.
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt (no trailing newline,
// so the file holds exactly the line, inside the 1–140 character gate).

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "I resign, effective immediately — after four years of 'quick syncs', I am leaving to never hear those two words again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

if (line.length < 1 || line.length > 140) {
  throw new Error(`entry is ${line.length} characters, outside the 1–140 gate`);
}
if (line.trim() === "" || line.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote entry.txt (${line.length} chars)`);
