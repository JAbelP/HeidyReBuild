import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PodcastAppearances from "../components/PodcastAppearances";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  title: "About | Heidy De La Cruz – Podcast Coach",
  description: "Learn about Heidy De La Cruz — copywriter, speaker, and dedicated podcast coach helping you launch your podcast the simple way.",
};

const testimonials = [
  {
    quote: "Heidy is a knowledgeable and engaging host who answered many of my questions about podcasting. Her insights helped me understand the process and feel confident about starting my own show.",
    name: "Andrea D.",
  },
  {
    quote: "This coaching was everything I needed and more to start this journey. Heidy's guidance was clear, practical, and incredibly empowering. I couldn't have asked for a better experience!",
    name: "Brandell T.",
  },
  {
    quote: "I got this wild idea to do a podcast, and then the universe sent me Heidy! She was personable, organized, and super supportive. Working with her made the whole process fun and achievable.",
    name: "Kimberly Cline",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-24 lg:py-36 bg-gradient-to-br from-brand-dark via-brand-red to-brand-redLight text-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="w-20 h-1 bg-white mx-auto mb-8 opacity-60"></div>
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Let's get your Podcast Launched
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your voice to the forefront of the podcasting world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-red px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              Request a consultation
            </a>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-brand-red transition-colors font-medium text-lg"
            >
              Discover my services
            </Link>
          </div>
        </div>
      </section>

      <PodcastAppearances />

      {/* Welcome */}
      <section className="py-20 lg:py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="w-20 h-1 bg-brand-red mx-auto mb-8"></div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            Welcome! I'm <span className="italic text-brand-red">Heidy</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            I'm a copywriter, speaker, and your dedicated podcast coach. Through my podcast{" "}
            <span className="font-semibold">"The American Dream In The Eyes of Immigrants,"</span>{" "}
            I amplify stories that deserve to be heard — and now I'm here to help you share yours.
          </p>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left – Content */}
            <div className="space-y-6">
              <div className="w-20 h-1 bg-brand-red"></div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold">
                About <span className="italic text-brand-red">Me</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                As the daughter of Dominican immigrants, I bring a unique perspective to my multifaceted career. With a Master's Degree in Healthcare Administration and a Bachelor's Degree in Psychology and Healthcare Administration, my background provides a solid foundation for understanding human stories.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a published poet, author of <span className="font-semibold">"Words From The Heart,"</span> and curator of the weekly Substack newsletter, <span className="font-semibold">"Into My Thoughts,"</span> where I share personal experiences, life lessons, and faith-based insights.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I am the founder of <span className="font-semibold">De La Cruz Media</span>, a thriving company offering services as a copywriter, speaker, and, most notably, a highly sought-after Podcast Coach. My podcasting expertise lies not only in its technicalities but in the art of compassionate storytelling.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're seeking captivating copy, a dynamic speaker, or guidance on launching and growing your podcast, I bring a wealth of experience and a unique perspective to every endeavor.
              </p>
            </div>

            {/* Right – Logo / Brand Image */}
            <div className="relative flex items-center justify-center">
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-brand-red opacity-10 rounded-lg -z-10"></div>
              <div className="relative aspect-square w-full max-w-sm mx-auto">
                <Image
                  src="/images/de-la-cruz-media-logo.png"
                  alt="De La Cruz Media – Heidy De La Cruz Podcast Coach"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-brand-black text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-10">
            Let's start your own podcast today!
          </h2>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-red text-white px-12 py-5 rounded-md hover:bg-brand-dark transition-colors font-medium text-xl"
          >
            Book a consultation
          </a>
        </div>
      </section>

      <Testimonials
        heading="Love Notes"
        subheading="What clients are saying"
        testimonials={testimonials}
      />

      <Footer />
    </>
  );
}
