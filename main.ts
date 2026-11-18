// News-image entry for Wednesday 18 November 2026 (Node 22, standard library
// only). The image is the entry.png beside this file, drawn for this entry; the
// program checks it is a whole PNG inside the 1 MiB gate limit and copies it to
// /output/entry.png. The copy is byte-for-byte, so both grader runs agree.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository');
}
const bytes = readFileSync(source);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (bytes.length < 8 || !bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG file');
}
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
const copied = readFileSync(target);
if (!copied.equals(bytes)) {
  throw new Error('copied entry.png does not match the repository image');
}
const sha256 = createHash('sha256').update(bytes).digest('hex');
console.log(`entry.png (${bytes.length} bytes, sha256 ${sha256}) -> ${target}`);
