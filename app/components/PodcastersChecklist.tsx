export default function PodcastersChecklist() {
  return (
    <section className="py-20 bg-brand-black text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
          The Podcasters Checklist
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          If you are feeling overwhelmed with the process of starting your podcast here's a mini checklist to help you on your way.
        </p>
        <a
          href="https://mailchi.mp/3e49ffb0968d/podcastcoachingnewsletter"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-red text-white px-10 py-4 rounded-md hover:bg-brand-dark transition-colors font-medium text-lg"
        >
          Subscribe
        </a>
      </div>
    </section>
  );
}
