import { getDestination, getAllSlugs } from '@/lib/destinations';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = await getDestination(slug);
  if (!dest) return { title: 'Not Found' };
  return {
    title: dest.title,
    description: dest.description,
    openGraph: {
      title: dest.title,
      description: dest.description,
      type: 'article',
      url: `https://brokeabroad.com/destinations/${slug}`,
      images: dest.heroImage ? [{ url: dest.heroImage, width: 1200, height: 627 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: dest.title,
      description: dest.description,
      images: dest.heroImage ? [dest.heroImage] : [],
    },
    alternates: {
      canonical: `https://brokeabroad.com/destinations/${slug}`,
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const dest = await getDestination(slug);
  if (!dest) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: dest.title,
    description: dest.description,
    image: dest.heroImage || undefined,
    datePublished: dest.pubDate,
    author: {
      '@type': 'Organization',
      name: 'Broke Abroad',
      url: 'https://brokeabroad.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Broke Abroad',
      url: 'https://brokeabroad.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://brokeabroad.com/destinations/${slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: dest.heroImage ? `url(${dest.heroImage})` : 'linear-gradient(135deg, #12121a, #1a1a28)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12 w-full">
          <div className="flex gap-2 mb-4">
            {dest.tags.map(tag => (
              <span key={tag} className="text-xs bg-[#d4a853]/20 text-[#d4a853] px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">{dest.destination}</h1>
          <p className="text-gray-400 text-lg">{dest.description}</p>
          <p className="text-gray-600 text-sm mt-3">
            Published {new Date(dest.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: dest.htmlContent || '' }}
        />
      </article>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-[#1a1a28] rounded-2xl p-8 border border-white/5 text-center">
          <h3 className="text-xl font-bold mb-2">Want the 30-second version?</h3>
          <p className="text-gray-500 mb-6">Watch our {dest.destination} travel Short on YouTube</p>
          <a
            href="https://youtube.com/@BrokeAbroad01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>
    </>
  );
}
