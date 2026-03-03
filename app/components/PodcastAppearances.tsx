import Image from "next/image";

const appearances = [
  {
    image: "/images/podcast-appearance-1.png",
    href: "https://open.spotify.com/episode/5HISPxGMmNDHIITeHKUDfa?si=9bebbb8537264e3d",
  },
  {
    image: "/images/podcast-appearance-2.png",
    href: "https://open.spotify.com/episode/2QzjYCMM5ij4WxajkaakDG",
  },
  {
    image: "/images/podcast-appearance-3.png",
    href: "https://open.spotify.com/",
  },
  {
    image: "/images/podcast-appearance-4.png",
    href: "https://open.spotify.com/",
  },
  {
    image: "/images/podcast-appearance-5.png",
    href: "https://open.spotify.com/episode/06e5FyItfDnzApX7ZtQtnM",
  },
  {
    image: "/images/podcast-appearance-6.png",
    href: "https://open.spotify.com/episode/1is270467V2MnokwoAPYlm",
  },
];

export default function PodcastAppearances() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold">
            You Might Have Heard Me On
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {appearances.map((appearance, i) => (
            <a
              key={i}
              href={appearance.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square">
                <Image
                  src={appearance.image}
                  alt={`Podcast appearance ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-brand-red font-medium mb-1">Guest Appearance</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-red">
                  Listen on Spotify
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
