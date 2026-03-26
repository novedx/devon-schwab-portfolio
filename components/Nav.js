'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/',        label: 'Work'    },
  { href: '/bio',     label: 'Bio'     },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex items-center justify-between">
      {/* Logo / Name */}
      <Link
        href="/"
        className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors"
      >
        Devon Schwab
      </Link>

      {/* Nav links */}
      <nav>
        <ul className="flex items-center gap-6 md:gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    'text-xs tracking-[0.18em] uppercase transition-colors',
                    isActive
                      ? 'text-accent font-semibold'
                      : 'text-white/60 hover:text-white',
                  ].join(' ')}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
