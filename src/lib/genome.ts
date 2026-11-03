// Her sayfa bir kromozom. Uzunluklar ve sentromer konumları GRCh38'e yakındır.
export const chromosomes = {
  chr1: { length: 248_956_422, centromere: 0.5 },
  chr2: { length: 242_193_529, centromere: 0.39 },
  chr3: { length: 198_295_559, centromere: 0.46 },
  chr4: { length: 190_214_555, centromere: 0.26 },
  chr5: { length: 181_538_259, centromere: 0.27 },
  chr6: { length: 170_805_979, centromere: 0.36 },
  chrX: { length: 156_040_895, centromere: 0.39 },
} as const;

export type ChromName = keyof typeof chromosomes;

export interface Band {
  start: number; // kol içindeki oran, 0–1
  end: number;
  stain: 0 | 1 | 2 | 3 | 4;
}

function prng(seed: string) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

/** Giemsa boyamasına benzeyen, tohuma göre her zaman aynı çıkan bant deseni. */
export function bandsFor(seed: string, count: number): Band[] {
  const rand = prng(seed);
  const widths = Array.from({ length: count }, () => 0.4 + rand());
  const total = widths.reduce((a, b) => a + b, 0);
  let pos = 0;
  return widths.map((w, i) => {
    const start = pos;
    pos += w / total;
    // açık (gneg) ve koyu (gpos) bantlar sırayla gelir
    const stain = (i % 2 === 0 ? 0 : 1 + Math.floor(rand() * 4)) as Band['stain'];
    return { start, end: pos, stain };
  });
}
