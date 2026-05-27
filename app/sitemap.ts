import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alaxprint.com.br';
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/#servicos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#produtos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#diferenciais`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/#contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
