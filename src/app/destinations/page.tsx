import { getAllDestinations } from '@/lib/destinations';
import DestinationCard from '@/components/DestinationCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Destinations',
  description: 'Browse all budget travel guides — from Southeast Asia to Eastern Europe.',
};

export default function DestinationsPage() {
  const destinations = getAllDestinations();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-[#d4a853] text-sm font-semibold uppercase tracking-wider mb-2">Explore</p>
        <h1 className="text-4xl font-bold mb-4">All Destinations</h1>
        <p className="text-gray-400 max-w-xl">
          Every guide includes budget tips, things to do, and tailored advice for couples, families, and solo travelers.
        </p>
      </div>

      {destinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
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
      ) : (
        <div className="bg-[#1a1a28] rounded-2xl p-12 border border-white/5 text-center">
          <p className="text-4xl mb-4">🌍</p>
          <h2 className="text-2xl font-bold mb-3">Guides coming soon</h2>
          <p className="text-gray-500">New destinations added daily. Check back tomorrow!</p>
        </div>
      )}
    </div>
  );
}
