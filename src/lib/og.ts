// Paylaşım görselleri (1200×630 PNG): sayfanın kromozomu + başlık, sitenin renkleriyle.
// Derleme sırasında satori (HTML/CSS → SVG) ve resvg (SVG → PNG) ile üretilir.
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import satori from 'satori';
import { initWasm, Resvg } from '@resvg/resvg-wasm';
import profile from '../data/profile.json';
import { bandsFor, chromosomes, type ChromName } from './genome';
import { encodeName } from './dna';

const W = 1200;
const H = 630;
const PX = 72;
const PY = 56;
// latin-ext alt kümesi (ş, ğ, ı, İ) ayrı dosyada; satori eksik glifi sonraki aileden alır
const SERIF = 'Serif, SerifExt';
const MONO = 'Mono, MonoExt';
const C = {
  bg: '#fafaf7',
  fg: '#15171b',
  soft: '#3b3f46',
  muted: '#6b7079',
  line: '#cfcdc5',
  accent: '#0a7d6f',
  mark: '#c23a41',
  bands: ['#f1f0ea', '#d8d6ce', '#a9a7a0', '#6f6d68', '#2d2c2a'],
  acen: '#c46a6e',
};

const nm = (p: string) => resolve('node_modules', p);
let ready: Promise<{ name: string; data: Buffer; weight: 400 | 500; style: 'normal' }[]> | undefined;

function setup() {
  ready ??= (async () => {
    await initWasm(readFile(nm('@resvg/resvg-wasm/index_bg.wasm')));
    const font = async (name: string, file: string, weight: 400 | 500) => ({
      name,
      data: await readFile(nm(file)),
      weight,
      style: 'normal' as const,
    });
    return Promise.all([
      font('Serif', '@fontsource/source-serif-4/files/source-serif-4-latin-400-normal.woff', 400),
      font('SerifExt', '@fontsource/source-serif-4/files/source-serif-4-latin-ext-400-normal.woff', 400),
      font('Mono', '@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff', 400),
      font('MonoExt', '@fontsource/jetbrains-mono/files/jetbrains-mono-latin-ext-400-normal.woff', 400),
      font('Mono', '@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff', 500),
    ]);
  })();
  return ready;
}

type Node = { type: string; props: { style?: Record<string, unknown>; children?: unknown } };
const h = (style: Record<string, unknown>, children?: unknown): Node => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, children },
});

function ideogram(chrom: ChromName, width: number) {
  const { centromere } = chromosomes[chrom];
  const arm = (seed: string, frac: number, acenSide: 'left' | 'right') => {
    const w = Math.round(width * frac) - 4;
    const bands = bandsFor(seed, Math.round(frac * 22) + 3);
    const cells = bands.map((b) => h({ width: (b.end - b.start) * w, height: '100%', background: C.bands[b.stain] }));
    const acen = h({ width: 12, height: '100%', background: C.acen });
    return h(
      { width: w, height: 26, borderRadius: 13, overflow: 'hidden', border: `2px solid ${C.line}`, background: C.bands[0] },
      acenSide === 'right' ? [...cells, acen] : [acen, ...cells],
    );
  };
  return h({ position: 'relative', width, gap: 8 }, [
    arm(`${chrom}p`, centromere, 'right'),
    arm(`${chrom}q`, 1 - centromere, 'left'),
    h({
      position: 'absolute',
      left: Math.round(width * 0.04),
      top: -8,
      width: Math.round(width * 0.16),
      height: 42,
      border: `3px solid ${C.mark}`,
      borderRadius: 5,
    }),
  ]);
}

export async function renderOg(opts: { chrom: ChromName; label: string; title: string; tagline: string }) {
  const fonts = await setup();
  const { chrom, label, title, tagline } = opts;
  const len = chromosomes[chrom].length.toLocaleString('en-US');
  const seq = encodeName(profile.name)
    .map((c) => c.dna)
    .join(' ');
  const inner = W - 2 * PX;
  const size = title.length > 70 ? 54 : title.length > 40 ? 62 : 72;

  const tree = h(
    // satori'de padding genişliğe eklenir: iç ölçü = tuval − kenar boşlukları
    { width: inner, height: H - 2 * PY, flexDirection: 'column', padding: `${PY}px ${PX}px`, background: C.bg, fontFamily: SERIF, color: C.fg },
    [
      h({ justifyContent: 'space-between', fontFamily: MONO, fontSize: 22, color: C.muted }, [
        h({ gap: 12 }, [h({ color: C.fg, fontWeight: 500 }, chrom), h({}, `· ${label}`)]),
        h({}, 'mehmetsolgun.github.io'),
      ]),
      h({ marginTop: 26 }, [ideogram(chrom, inner)]),
      h({ marginTop: 14, fontFamily: MONO, fontSize: 18, color: C.muted }, `${chrom}:1–${len}`),
      h({ flex: 1, alignItems: 'center' }, [
        h({ fontSize: size, lineHeight: 1.12, letterSpacing: -1, maxWidth: inner }, title),
      ]),
      h({ justifyContent: 'space-between', alignItems: 'flex-end', borderTop: `2px solid ${C.line}`, paddingTop: 24 }, [
        h({ flexDirection: 'column', gap: 6 }, [
          h({ fontSize: 34 }, [h({}, profile.name), h({ color: C.muted }, `, ${profile.credentials}`)]),
          h({ fontFamily: MONO, fontSize: 19, color: C.soft }, tagline),
        ]),
        h({ fontFamily: MONO, fontSize: 15, color: C.accent, maxWidth: 420, textAlign: 'right' }, `5′–${seq}–3′`),
      ]),
    ],
  );

  const svg = await satori(tree as any, { width: W, height: H, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
}
