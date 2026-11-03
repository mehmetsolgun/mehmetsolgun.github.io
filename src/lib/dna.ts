// Amino asit tek harf kodu → bir kodon (standart genetik kod)
const codon: Record<string, string> = {
  A: 'GCT', R: 'CGT', N: 'AAT', D: 'GAT', C: 'TGT', Q: 'CAA', E: 'GAA',
  G: 'GGT', H: 'CAT', I: 'ATT', L: 'CTG', K: 'AAA', M: 'ATG', F: 'TTT',
  P: 'CCT', S: 'TCT', T: 'ACT', W: 'TGG', Y: 'TAT', V: 'GTT',
  // 21. ve 22. amino asitler: normalde stop olan kodonların yeniden kodlanmasıyla
  O: 'TAG', // pirolizin (amber)
  U: 'TGA', // selenosistein (opal)
};

export const recoded: Record<string, { name: string; codon: string }> = {
  O: { name: 'Pyl', codon: 'UAG' },
  U: { name: 'Sec', codon: 'UGA' },
};

export interface Codon {
  dna: string;
  aa: string; // tek harf; stop için '*'
}

/**
 * Bir metni kodonlara çevirir. Karşılığı olmayan harfler (B, J, X, Z, boşluk) atlanır;
 * dizinin sonuna gerçek stop kodonu (TAA) eklenir.
 */
export function encodeName(name: string): Codon[] {
  const letters = name
    .toLocaleUpperCase('tr')
    .replace(/İ/g, 'I')
    .normalize('NFD')
    .replace(/[^A-Z]/g, '')
    .split('')
    .filter((l) => codon[l]);
  return [...letters.map((aa) => ({ dna: codon[aa], aa })), { dna: 'TAA', aa: '*' }];
}
