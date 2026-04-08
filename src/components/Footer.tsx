import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">
              <span className="text-[#d4a853]">Broke</span>
              <span className="text-white">Abroad</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Budget travel guides for explorers who want to see the world without going broke.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Explore</h4>
            <div className="flex flex-col gap-2">
              <Link href="/destinations" className="text-gray-500 hover:text-[#d4a853] text-sm transition-colors">All Destinations</Link>
              <Link href="/about" className="text-gray-500 hover:text-[#d4a853] text-sm transition-colors">About Us</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Follow</h4>
            <div className="flex flex-col gap-2">
              <a href="https://youtube.com/@BrokeAbroad01" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#d4a853] text-sm transition-colors">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
          Broke Abroad {new Date().getFullYear()}. Travel more, spend less.
        </div>
      </div>
    </footer>
  );
}
