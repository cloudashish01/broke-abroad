import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Budget travel guides for explorers who want to see the world without going broke.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[#d4a853] text-sm font-semibold uppercase tracking-wider mb-2">Our Story</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        Travel More. <span className="text-[#d4a853]">Spend Less.</span>
      </h1>

      <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
        <p>
          We started Broke Abroad with a simple belief: you don&apos;t need a trust fund to see the
          world. Every day, we create short-form travel guides covering the most incredible
          destinations on a budget.
        </p>

        <div className="bg-[#1a1a28] rounded-2xl p-8 border border-white/5 my-10">
          <h2 className="text-2xl font-bold text-white mb-6">What You&apos;ll Find Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '💰', title: 'Budget Breakdowns', desc: 'Real costs with real numbers' },
              { icon: '🗺', title: 'Top Things to Do', desc: 'Curated highlights for every destination' },
              { icon: '💑', title: 'For Couples', desc: 'Romantic spots without the price tag' },
              { icon: '👨‍👩‍👧‍👦', title: 'For Families', desc: 'Kid-friendly activities on a budget' },
              { icon: '🎒', title: 'Solo Travel', desc: 'Safe, affordable solo adventures' },
              { icon: '🏠', title: 'Where to Stay', desc: 'Best neighborhoods and accommodation tips' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3 p-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p>
          Every guide starts as a 30-second YouTube Short — quick, visual, and packed with
          highlights. Then we publish the full written guide here with detailed tips for
          every type of traveler.
        </p>

        <div className="pt-6">
          <a
            href="https://youtube.com/@BrokeAbroad01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d4a853] text-[#0a0a0f] px-8 py-3 rounded-full font-semibold hover:bg-[#e6be6a] transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
