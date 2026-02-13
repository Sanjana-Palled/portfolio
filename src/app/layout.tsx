import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Particles from '@/components/Particles';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sanjana C Palled | Flutter Developer',
  description: 'Portfolio of Sanjana C Palled - Flutter Developer specializing in healthcare apps.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="viewport-glow" />
        <Particles />
        {children}
      </body>
    </html>
  );
}
