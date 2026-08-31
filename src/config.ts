// ─────────────────────────────────────────────────────────────────────────────
//  PER-PROJECT BRANDING  ·  the ONLY file that changes between blog repos.
//  Owner-locked via CODEOWNERS — the SEO team does not edit this (see CONTRIBUTING.md).
// ─────────────────────────────────────────────────────────────────────────────
export const SITE = {
  brand: 'QuickZTNA',
  title: 'QuickZTNA Blog',
  description: 'Guides, tips, and product updates from the QuickZTNA team.',
  url: 'https://blog.quickztna.com',
  marketingUrl: 'https://quickztna.com',
  marketingLabel: 'quickztna.com',
  author: 'QuickZTNA Team',
  accent: '#0891b2',
  tagline: 'Zero-trust access, simplified.',
  locale: 'en',
} as const;

export const NAV = [
  { label: 'Blog', href: '/' },
  { label: 'Tags', href: '/tags/' },
  { label: 'About', href: '/about/' },
];
