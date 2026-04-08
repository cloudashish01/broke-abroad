'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-[#d4a853]">Broke</span>
          <span className="text-white">Abroad</span>
        </Link>

        <div className="flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-[#d4a853]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://youtube.com/@BrokeAbroad01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-[#d4a853] text-[#0a0a0f] px-4 py-2 rounded-full hover:bg-[#e6be6a] transition-colors"
          >
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  );
}
