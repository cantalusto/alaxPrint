import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AlaxPrint',
    short_name: 'AlaxPrint',
    description:
      'Venda, manutenção, locação e suporte técnico para impressoras digitais de grande formato.',
    start_url: '/',
    display: 'standalone',
    background_color: '#06080F',
    theme_color: '#FF6A1A',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  };
}
