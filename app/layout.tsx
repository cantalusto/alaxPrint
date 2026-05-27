import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
});

const body = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono',
});

const SITE_URL = 'https://alaxprint.com.br';
const SITE_NAME = 'AlaxPrint';
const TITLE = 'AlaxPrint — Venda, manutenção e locação de impressoras digitais, routers e 3D';
const DESCRIPTION =
  'Soluções completas para sua gráfica evoluir. Venda, manutenção, locação, suporte técnico e peças de reposição para impressoras digitais de grande formato, routers de recorte e impressoras 3D. Atendimento especializado, peças originais e parceria de verdade.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | AlaxPrint',
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'AlaxPrint' }],
  generator: 'Next.js',
  keywords: [
    'impressoras digitais',
    'impressora grande formato',
    'manutenção de impressoras',
    'locação de impressoras',
    'venda de impressoras',
    'router de recorte',
    'impressora 3D',
    'peças para impressoras',
    'suporte técnico impressoras',
    'gráfica',
    'eco-solvente',
    'impressora UV',
    'sublimática',
    'cabeçotes de impressão',
    'AlaxPrint',
  ],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'business',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/background01.png',
        width: 1200,
        height: 630,
        alt: 'AlaxPrint — Tecnologia que imprime soluções',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/background01.png'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon.svg' }],
    shortcut: ['/icon.svg'],
  },
  manifest: '/manifest.webmanifest',
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F1EA' },
    { media: '(prefers-color-scheme: dark)', color: '#06080F' },
  ],
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AlaxPrint',
  description: DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/background01.png`,
  priceRange: '$$',
  telephone: '+55-00-00000-0000',
  sameAs: ['https://instagram.com/alax.print', 'https://wa.me/'],
  areaServed: { '@type': 'Country', name: 'Brasil' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Soluções AlaxPrint',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Venda de impressoras digitais, routers e 3D' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manutenção preventiva e corretiva' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Locação de equipamentos gráficos' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Suporte técnico especializado' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peças de reposição originais e compatíveis' } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-paper text-ink-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
