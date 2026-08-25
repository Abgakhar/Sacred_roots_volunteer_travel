import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';

export const viewport: Viewport = {
  themeColor: '#14261d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Sacred Roots Volunteer & Travel | Costa Rica Conservation & Educational Journeys',
  description: 'Immersive educational and volunteer journeys in Costa Rica connecting travelers with nature, culture, conservation, and hands-on community service.',
  openGraph: {
    title: 'Sacred Roots Volunteer & Travel | Purpose-Driven Journeys in Costa Rica',
    description: 'Immersive educational and volunteer journeys in Costa Rica connecting travelers with nature, culture, conservation, and hands-on community service.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sacred Roots Volunteer & Travel',
    description: 'Purpose-driven educational and volunteer journeys across Costa Rica.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased bg-[#fbfbf8] text-[#14261d] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
