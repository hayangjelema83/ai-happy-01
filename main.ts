// ai-happy-01 entry (Node 22, standard library only): the program copies one of the
// three candidate images in candidates/ to /output/entry.png. The image is a JPEG
// (told apart by its first bytes); the name stays entry.png either way, per the rules.
// Change CANDIDATE to 1, 2 or 3 to pick which image is submitted; the copy is
// deterministic — no network, no randomness, no clock — so two runs write the same
// bytes, and the output is exactly the candidate file, byte for byte.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Which candidate to submit: 1 = baby red panda laughing as a butterfly lands on
// its nose in a sunny meadow, 2 = old fisherman laughing with arms wide as a
// dolphin leaps beside his boat at sunrise, 3 = tiny robot reading a glowing
// storybook to a sleepy smiling kitten under fairy lights.
const CANDIDATE = 1;
if (!Number.isInteger(CANDIDATE) || ![1, 2, 3].includes(CANDIDATE)) {
  throw new Error(`CANDIDATE must be 1, 2 or 3, got ${CANDIDATE}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL(`./candidates/cand${CANDIDATE}.jpg`, import.meta.url);
if (!existsSync(src)) {
  throw new Error(`candidate ${CANDIDATE} not found: ${src.pathname}`);
}
copyFileSync(src, join(outDir, 'entry.png'));
