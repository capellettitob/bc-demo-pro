import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beauty Concept by Andreea Maxim — Centro estetico a Cesena',
  description:
    'Beauty Concept by Andreea Maxim — centro estetico a Cesena. Unghie, viso e cura della persona in uno spazio luminoso e minimale.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Beauty Concept by Andreea Maxim — Cesena',
    description:
      'Centro estetico a Cesena. Unghie, viso e cura della persona in uno spazio luminoso e minimale.',
    locale: 'it_IT',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#EFEDE7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        {/* Body serif (Cormorant) + logo faces (Playfair Display, Allura),
            single Google Fonts request, preconnected. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Cormorant+Garamond:wght@300;400;500;600&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
