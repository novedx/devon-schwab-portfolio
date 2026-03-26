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
  description: 'ACE Nominee. Emmy Honored. TV Editor, Producer, Filmmaker, and Visual Artist based in NYC.',
  openGraph: {
    title: 'Devon Schwab',
    description: 'ACE Nominee. Emmy Honored. TV Editor, Producer, Filmmaker, and Visual Artist.',
    url: 'https://www.devonschwab.com',
    siteName: 'Devon Schwab',
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
