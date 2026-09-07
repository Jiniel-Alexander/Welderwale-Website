import { LocalBusinessSchema } from '@/components/StructuredData';
import AnalyticsScripts from '@/components/AnalyticsScripts';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://welderwale.com'),
  title: {
    default: 'Welderwale – Precision Metal Fabrication & Structural Welding Mumbai & Thane',
    template: '%s | Welderwale Fabrication',
  },
  description:
    'Certified structural welding and metal fabrication contractors serving Mumbai, Thane, and Bhayandar within 50 km. Sliding gates, industrial sheds, staircases, window safety grills, and custom steel works.',
  keywords: [
    'metal fabrication mumbai',
    'welding services thane',
    'metal gates manufacturer bhayandar',
    'industrial shed fabrication',
    'custom staircase steel',
    'window safety grills mumbai',
    'terrace pergola fabrication',
  ],
  openGraph: {
    title: 'Welderwale – Metal Fabrication & Structural Welding',
    description:
      'Precision steel & metal fabrication solutions. Instant quotes, site visits, and certified welding services in Mumbai & Thane.',
    url: 'https://welderwale.com',
    siteName: 'Welderwale',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <LocalBusinessSchema />
        <AnalyticsScripts />
      </head>
      <body className="bg-background text-body font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
