import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Devon Schwab',
  description: 'ACE Nominee & Emmy Honored Editor, Producer, Filmmaker and Visual Artist. 10+ years at SNL and Late Night with Seth Meyers.',
  openGraph: {
    title: 'Devon Schwab',
    description: 'ACE Nominee & Emmy Honored Editor, Producer, Filmmaker and Visual Artist.',
    url: 'https://www.devonschwab.com',
    siteName: 'Devon Schwab',
    images: [
      {
        url: 'https://www.devonschwab.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Devon Schwab - Editor & Producer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devon Schwab',
    description: 'ACE Nominee & Emmy Honored Editor, Producer, Filmmaker and Visual Artist.',
    images: ['https://www.devonschwab.com/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-white font-sans min-h-screen">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
