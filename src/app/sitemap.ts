import { MetadataRoute } from 'next';
import places from '@/i18n/region.json';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || 'www.ingapircaecuador.com'}`;

  const paths = ['nearby','nearby/templo-del-sol', ...Object.keys(places).map(s => 'nearby/'+s)];
  return [
    ...paths.flatMap(path => {
      const languages = Object.fromEntries(["en", "es", "zh"].map(l => [l, `${baseUrl}/${l}/${path}`]));
      return Object.values(languages).map(url => ({url,alternates:{languages}}));
    }),
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
          en: `${baseUrl}/en`,
        },
      },
    },
  ];
}