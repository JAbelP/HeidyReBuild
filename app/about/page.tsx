import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Button from "../components/Button";
import SectionDivider from "../components/SectionDivider";
import CtaSection from "../components/CtaSection";

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
          <SectionDivider center color="white" className="mb-8" />
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Let's get your Podcast Launched
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your voice to the forefront of the podcasting world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="mailto:heidy@heidydelacruz.com" variant="white">
              Request a consultation
            </Button>
            <Button href="/services" variant="outline-white">
              Discover my services
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left – Image */}
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-full h-full bg-brand-red opacity-10 rounded-lg -z-10"></div>
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <Image
                  src="/images/HDLC4984.jpg"
                  alt="Heidy De La Cruz"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Right – Text */}
            <div className="space-y-6">
              <SectionDivider />
              <h2 className="font-serif text-4xl lg:text-5xl font-bold">
                Welcome! I'm <span className="italic text-brand-red">Heidy</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                I'm a writer, podcaster, podcast launch coach, and speaker. Hosting the rapidly
                growing podcast, "The American Dream In The Eyes of Immigrants," is not just a
                passion; it's a mission. Through heartfelt conversations, I speak with immigrants,
                highlighting their journeys and holding them with compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">

            {/* Left – Content */}
            <div className="space-y-6 py-4 lg:pr-8">
              <SectionDivider />
              <h2 className="font-serif text-4xl lg:text-5xl font-bold">
                About <span className="italic text-brand-red">Me</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hi, I'm Heidy De La Cruz 👋<br />
                I'm a writer, podcaster, podcast-launch coach, speaker, and storyteller, passionate about amplifying voices that deserve to be heard.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For more than 20 years, writing has been part of my life. What started as a hobby slowly became a calling. I've always believed stories have power, especially the stories of people who are often overlooked or underrepresented.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, that belief fuels everything I create.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Why I Started My Podcast</strong><br />
                I'm the host of the award-winning podcast <em>The American Dream in the Eyes of Immigrants</em>, where I share the powerful journeys of immigrants who came to the United States in search of opportunity, safety, and a better future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through these conversations, I explore what the American Dream truly means — not through headlines or politics, but through real human experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The podcast has grown far beyond what I imagined. It's now listened to in over 100 countries and ranked in the top 5% globally, ranking number 1 constantly for immigration on GoodPods, reaching the Top 100 monthly and Top 10 weekly charts multiple times.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                But the numbers are only part of the story. What matters most to me is creating a space where immigrants can share their journeys openly — the struggles, the sacrifices, the culture shock, the wins, and the dreams that brought them here.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Because every immigrant story deserves to be told. And as the daughter of Dominican immigrants, I bring a unique perspective to how I handle these stories and podcasting.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>My Work as a Podcast Launch Strategist</strong><br />
                Alongside storytelling, I also help Latinas become podcasters with confidence and clarity, without the overwhelm.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Podcasting changed my life. It gave me a platform, a global audience, and opportunities I never expected.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Now I teach others how to do the same through my V.O.I.C.E. Method Podcast Launch Framework, where I walk through the entire process — from finding your "why" to choosing equipment, recording your first episode, creating systems, and marketing your show.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe podcasting doesn't have to be overwhelming and shouldn't be. With the right strategy and systems, it is one of the most powerful tools for building your brand, growing your audience, and creating meaningful connections.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>My Mission</strong><br />
                My mission is simple:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                <li>Tell stories that matter.</li>
                <li>Help Latinas share their voices.</li>
                <li>Create spaces where authenticity is valued more than perfection.</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether I'm writing, interviewing immigrants, or teaching someone how to launch their podcast, everything I do centers around one idea: Stories connect us.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>When I'm Not Podcasting</strong><br />
                When I'm not recording episodes or writing blog posts about podcasting and storytelling, you'll usually find me:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                <li>Writing for my weekly personal development newsletter, <em>Into My Thoughts</em></li>
                <li>Connecting with fellow creators and entrepreneurs</li>
                <li>Speaking at networking events or podcasting conferences</li>
                <li>Dreaming up new ways to grow my podcast and amplify immigrant stories</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                My long-term goal is to travel and record immigrant stories in person around the country, continuing to document the many versions of the American Dream.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Let's Connect</strong><br />
                If you're an immigrant with a story to share, an entrepreneur who wants to start a podcast, or someone who simply believes in the power of storytelling, I'd love to connect.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Because the stories we share today can inspire the people who come after us tomorrow.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With Love, Heidy
              </p>
            </div>

            {/* Right – Red Column sticky sidebar */}
            <div className="hidden lg:block self-start sticky top-8">
              <div className="bg-[#CC0000] rounded-2xl overflow-hidden shadow-2xl">
                {/* Heidy photo */}
                <div className="relative w-full" style={{aspectRatio: "4/5"}}>
                  <Image
                    src="/images/HDLC4829.jpg"
                    alt="Heidy De La Cruz"
                    fill
                    className="object-cover"
                  />
                  {/* gradient overlay into red panel */}
                  <div className="absolute inset-x-0 -bottom-7 h-full" style={{background: "linear-gradient(to top, #CC0000 0%, #CC0000 5%, transparent 20%)"}} />
                </div>

                {/* Content block */}
                <div className="px-8 pb-8 -mt-4 flex flex-col gap-6">
                  {/* Podcast cover */}
                  <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{aspectRatio: "1/1"}}>
                    <Image
                      src="/images/The American Dream in  The Eyes of Immigrants .png"
                      alt="The American Dream in the Eyes of Immigrants podcast"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Award badge */}
                  <div className="relative w-full rounded-xl overflow-hidden bg-black" style={{aspectRatio: "3/4"}}>
                    <Image
                      src="/images/Winner Digital Asset_WWP Awards 2025.png"
                      alt="WWP Awards 2025 Winner"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaSection
        heading="Let's start your own podcast today!"
        buttonText="Let's Start Your Podcast"
        bgColor="black"
      />

      <Testimonials
        heading="Love Notes"
        subheading="What clients are saying"
        testimonials={testimonials}
      />

      <Footer />
    </>
  );
}
