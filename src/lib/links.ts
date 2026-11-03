import profile from '../data/profile.json';

const labels: Record<string, string> = {
  orcid: 'ORCID',
  researchgate: 'ResearchGate',
  dergipark: 'DergiPark',
  scholar: 'Google Scholar',
  linkedin: 'LinkedIn',
  github: 'GitHub',
};

/** Doldurulmuş akademik profil bağlantıları: [anahtar, etiket, url] */
export const profileLinks = Object.entries(profile.links)
  .filter(([, url]) => url)
  .map(([key, url]) => ({ key, label: labels[key] ?? key, url }));
