import './globals.css';

export const metadata = {
  title: 'Welderwale – Precision Metal Fabrication & Installation',
  description: 'Professional metal fabrication services across Mumbai, Thane and Bhayandar. Get a quote, call or WhatsApp instantly.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body className="bg-background text-body font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
