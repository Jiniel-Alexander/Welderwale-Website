import type { Metadata, Viewport } from 'next';
import './globals.css';
import { getCompanySettings, getServices, getLocations, getThemeSettings } from '@/lib/db';
import { Header } from '@/components/public/Header';
import { Footer } from '@/components/public/Footer';
import { MobileStickyBar } from '@/components/public/MobileStickyBar';
import { generateCssVariables } from '@/lib/themeEngine';

export const metadata: Metadata = {
  title: 'Welderwale | Precision Metal Fabrication & Welding in Mumbai & Thane',
  description: 'Professional metal fabrication, industrial factory sheds, automated gates, SS glass railings, pergolas, and custom steel structures across Mumbai, Thane, Bhayandar & 50 KM radius.',
  keywords: [
    'metal fabrication mumbai',
    'welding services thane',
    'industrial shed fabrication bhayandar',
    'metal gates manufacturer',
    'ss glass railing mumbai',
    'custom metal frames',
    'welderwale'
  ],
  authors: [{ name: 'Welderwale' }],
  metadataBase: new URL('https://welderwale.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Welderwale | Precision Metal Fabrication & Welding Services',
    description: 'Expert metal fabrication and installation. Industrial sheds, gates, railings, and pergolas in Mumbai, Thane & Bhayandar.',
    url: 'https://welderwale.com',
    siteName: 'Welderwale',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Welderwale Metal Fabrication Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const company = await getCompanySettings();
  const services = await getServices();
  const locations = await getLocations();
  const theme = await getThemeSettings();
  const dynamicCss = generateCssVariables(theme);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style dangerouslySetInnerHTML={{ __html: dynamicCss }} />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased pb-mobile-nav">
        <Header company={company} services={services} locations={locations} />
        <main className="flex-grow">{children}</main>
        <Footer company={company} services={services} locations={locations} />
        <MobileStickyBar company={company} />
      </body>
    </html>
  );
}
