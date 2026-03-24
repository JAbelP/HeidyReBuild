import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import PodcastersChecklist from "./components/PodcastersChecklist";
import Button from "./components/Button";
import SectionDivider from "./components/SectionDivider";
import CtaSection from "./components/CtaSection";

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

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <Image
                  src="/images/HDLC4704.jpg"
                  alt="Heidy De La Cruz - Hero Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <SectionDivider />
              <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Helping Latinas become Podcasters with The V.O.I.C.E Method
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 max-w-xl">
                Ready to break the internet without breaking a sweat? Let's turn your digital presence into a podcasting sensation!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="#contact">Get In Touch</Button>
                <Button href="#about" variant="secondary">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="bg-black py-6 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="text-white text-2xl font-serif inline-block px-8">
              Let's get your Podcast Launched • Let's get your Podcast Launched • Let's get your Podcast Launched • Let's get your Podcast Launched •
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="absolute -left-8 -top-8 w-full h-full bg-brand-red opacity-20 rounded-lg -z-10"></div>
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <Image
                  src="/images/RE9A0715_(2048).jpg"
                  alt="Heidy De La Cruz - About Photo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold">
                Hi I'm, <span className="text-brand-red italic">Heidy De La Cruz</span>
              </h2>
              <p className="text-xl font-medium text-gray-900">
                Content Creator & Podcast Coach
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If the chaos of online marketing has left you feeling lost and overlooked, it's time to transform your approach. By harnessing the influential power of podcasting, you can rise above the noise, captivate your audience, and establish an unmissable online presence. This is where I come in — I specialize in simplifying the podcasting journey, turning your pain points into powerful stepping stones toward success.
              </p>
              <h3 className="text-2xl font-serif font-bold text-brand-red pt-4">
                Let's Make Podcasting Your Next Adventure!
              </h3>
              <Button href="#services" className="mt-4">More About Me</Button>
            </div>
          </div>
        </div>
      </section>


      {/* So What's the Scoop Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-brand-dark to-brand-red text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold">
                What's Holding you Back from Starting?
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  I'm not just a coach; I'm a creator, storyteller, and advocate for authentic voices. Through my podcast, <span className="font-bold">"The American Dream In The Eyes of Immigrants,"</span> I explore powerful stories that inspire and connect communities.
                </p>
                <p>
                  My poetry book, <span className="font-bold">"Words From The Heart,"</span> reflects my passion for meaningful expression, while my Substack, <span className="font-bold">"Into My Thoughts,"</span> gives you a peek into the ideas and insights that fuel my creative journey.
                </p>
                <p>
                  I believe in the transformative power of podcasting to build connections, share stories, and create impact. Let's work together to amplify your voice and make your mark in the podcasting world.
                </p>
              </div>
              <Button
                href="https://quiz.tryinteract.com/#/69779e8fd55a23ed54af415e"
                variant="outline-white"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                Take The Quiz
              </Button>
            </div>

            {/* Right - Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square">
                  <Image
                    src="/images/HDLC4789.jpg"
                    alt="Heidy De La Cruz - Collage Photo 1"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative aspect-square mt-12">
                  <Image
                    src="/images/collage-2.png"
                    alt="Heidy De La Cruz - Collage Photo 2"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative aspect-square -mt-12">
                  <Image
                    src="/images/collage-3.png"
                    alt="Heidy De La Cruz - Collage Photo 3"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-red opacity-80 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold">
                How Can I <span className="italic text-brand-red">Help</span> You?
              </h2>

              {/* Service 1 */}
              <div className="border-b border-brand-red pb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-red rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3">Strategic Planning</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Together, we'll outline a customized podcasting strategy tailored to your unique goals and audience. From concept development to content planning, I'll help you build a solid foundation for success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="border-b border-brand-red pb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-red rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3">Effortless Execution</h3>
                    <p className="text-gray-700 leading-relaxed">
                      I'll guide you through the process step by step, from recording your first episode to launching your podcast on major platforms. No technical overwhelm, just clear guidance and support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="pb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-red rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3">Effective Marketing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      I'll equip you with marketing strategies to promote your podcast, grow your audience, and maximize your impact. Learn how to leverage social media, SEO, and community building to reach your ideal listeners.
                    </p>
                  </div>
                </div>
              </div>

              <Button href="#contact" className="mt-4">Yes, I'm Ready!</Button>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red opacity-20 -z-10"></div>
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <Image
                  src="/images/services-photo.png"
                  alt="Heidy De La Cruz - Services Photo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="testimonials">
        <Testimonials testimonials={testimonials} />
      </div>

      <PodcastersChecklist />

      <div id="contact">
        <CtaSection heading="Starting a podcast shouldn't be so hard, I'll show you how." />
      </div>

      <Footer />
    </>
  );
}
