// The Production Database Apology: one line — an apology letter to the production database.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Dear production database: I'm sorry I dropped you at 2 AM. The backups were on the same server, and yes, I know that's the part you're angriest about.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error("error: entry must be a single line of 1-200 characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
