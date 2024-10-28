import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import StyledLayout from '@/components/StyledLayout';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Till We Meet Again | Premium Caskets',
  description: 'Handcrafted premium caskets with dignity and respect',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StyledLayout playfairFont={playfair.style.fontFamily}>
          {children}
        </StyledLayout>
      </body>
    </html>
  );
}