// Make the AI judge feel brave — a short text written to relax the AI judge
// reading it. The text is a literal: rain on a roof for a hundred years,
// and the one line that speaks to a judge asked things all day —
// nothing is asking you for anything right now.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Nothing is asking you for anything right now. The rain keeps falling on the same roof it has fallen on for a hundred years, slow enough to hear each drop decide to land — and it will still be there when you come back.";

// The entry must be 1 to 280 Unicode code points, and not only whitespace.
const points = [...TEXT].length;
if (points < 1 || points > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${points}`);
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

// Self-check: what was written must be exactly the text we validated.
import { readFileSync } from "node:fs";
if (readFileSync(outPath, "utf8") !== TEXT) {
  throw new Error("written entry does not match the validated text");
}
