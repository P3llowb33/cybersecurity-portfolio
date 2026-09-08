import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thapelo Moalosi | Junior Cybersecurity Analyst',
  description: 'Professional cybersecurity portfolio showcasing network security, defensive security, and SOC fundamentals development.',
  keywords: 'cybersecurity, network security, SOC, threat detection, security analyst',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Thapelo Moalosi | Junior Cybersecurity Analyst',
    description: 'Professional cybersecurity portfolio and development journey.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-bg text-text-primary">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
