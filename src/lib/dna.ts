// Amino asit tek harf kodu → bir kodon (standart genetik kod)
const codon: Record<string, string> = {
  A: 'GCT', R: 'CGT', N: 'AAT', D: 'GAT', C: 'TGT', Q: 'CAA', E: 'GAA',
  G: 'GGT', H: 'CAT', I: 'ATT', L: 'CTG', K: 'AAA', M: 'ATG', F: 'TTT',
  P: 'CCT', S: 'TCT', T: 'ACT', W: 'TGG', Y: 'TAT', V: 'GTT',
};

/**
 * Bir metni kodonlara çevirir. Amino asit karşılığı olmayan harfler
 * (B, J, O, U, X, Z, boşluk) atlanır; dizinin sonuna stop kodonu eklenir.
 */
export function encodeName(name: string) {
  const letters = name
    .toLocaleUpperCase('tr')
    .replace(/İ/g, 'I')
    .normalize('NFD')
    .replace(/[^A-Z]/g, '')
    .split('')
    .filter((l) => codon[l]);
  const codons = [...letters.map((l) => codon[l]), 'TAA'];
  return { codons, protein: [...letters, '*'] };
}
