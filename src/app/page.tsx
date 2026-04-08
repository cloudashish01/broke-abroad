import { getAllDestinations } from '@/lib/destinations';
import DestinationCard from '@/components/DestinationCard';
import Link from 'next/link';

export default function Home() {
  const destinations = getAllDestinations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a853]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4a853]/3 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-[#d4a853] text-sm font-semibold uppercase tracking-[0.3em] mb-6">
            Budget Travel Guides
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            See the World.{' '}
            <span className="text-[#d4a853]">Keep Your Wallet.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Daily destination guides with real budget breakdowns, local tips, and honest
            advice for every type of traveler.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/destinations"
              className="bg-[#d4a853] text-[#0a0a0f] px-8 py-3 rounded-full font-semibold hover:bg-[#e6be6a] transition-colors"
            >
              Explore Destinations
            </Link>
            <a
              href="https://youtube.com/@BrokeAbroad01"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:border-[#d4a853] hover:text-[#d4a853] transition-colors"
            >
              Watch Shorts
            </a>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      {destinations.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#d4a853] text-sm font-semibold uppercase tracking-wider mb-2">Latest Guides</p>
              <h2 className="text-3xl font-bold">Featured Destinations</h2>
            </div>
            <Link href="/destinations" className="text-[#d4a853] text-sm font-medium hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.slice(0, 6).map((dest, i) => (
              <DestinationCard
                key={dest.slug}
                slug={dest.slug}
                title={dest.title}
                destination={dest.destination}
                description={dest.description}
                tags={dest.tags}
                heroImage={dest.heroImage}
                index={i}
              />
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {destinations.length === 0 && (
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="bg-[#1a1a28] rounded-2xl p-12 border border-white/5">
            <p className="text-4xl mb-4">🌍</p>
            <h2 className="text-2xl font-bold mb-3">Coming Soon</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              We&apos;re building our collection of budget travel guides. Subscribe on YouTube to get notified!
            </p>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1a1a28] to-[#12121a] border border-white/5 p-12 md:p-16 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a853]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
            New destination every day
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8 relative z-10">
            30-second travel Shorts on YouTube + full written guides here. Subscribe and never miss a guide.
          </p>
          <a
            href="https://youtube.com/@BrokeAbroad01"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </>
  );
}
