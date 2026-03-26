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
  description: 'Devon Schwab',
  openGraph: {
    title: 'Devon Schwab',
    description: 'Devon Schwab',
    url: 'https://www.devonschwab.com',
    siteName: 'Devon Schwab',
  },
  twitter: {
    card: 'summary',
    title: 'Devon Schwab',
    description: 'Devon Schwab',
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
