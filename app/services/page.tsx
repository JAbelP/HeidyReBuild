import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import PodcastersChecklist from "../components/PodcastersChecklist";
import Button from "../components/Button";
import SectionDivider from "../components/SectionDivider";
import CtaSection from "../components/CtaSection";

export const metadata: Metadata = {
  title: "Services | Heidy De La Cruz – Podcast Coach",
  description: "Podcast coaching, copywriting, course, and blog services to help you launch and grow your podcast.",
};

type Service = {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  isEmail: boolean;
  image: string;
  imagePosition: string;
};

const services: Service[] = [
  {
    title: "6 Weeks Podcast Launch Strategy",
    price: "$1,500",
    description:
      "We will meet weekly for an hour for six weeks. We will set up a day and time that works best for you. This is for you if you're looking to: Launch your podcast but want guidance and weekly feedback. 1:1 weekly support and accountability for launching your podcast. Ready to take action but need extra support.",
    buttonText: "Book Now",
    buttonHref: "https://stan.store/heidydelacruz/p/11-coaching-to-launch-your-podcast",
    isEmail: false,
    image: "/images/services-hero.jpg",
    imagePosition: "object-top",
  },
  {
    title: "One Hour Podcast Strategy Call",
    price: "$70",
    description:
      "In one hour, we will strategize your next steps in podcasting! Whether growing or starting your show!",
    buttonText: "Book a Call",
    buttonHref: "https://stan.store/heidydelacruz/p/book-a-11-call-with-me-hj62a",
    isEmail: false,
    image: "/images/HDLC4704.jpg",
    imagePosition: "object-top",
  },
  {
    title: "The V.O.I.C.E. Method Podcast Launch Course",
    price: "$197",
    description:
      "Become a podcaster in 6-weeks or less with The V.O.I.C.E. Method!",
    buttonText: "Enroll Now",
    buttonHref: "https://stan.store/heidydelacruz/p/launch-your-podcast-with-this-amazing-course",
    isEmail: false,
    image: "/images/about-photo.jpg",
    imagePosition: "object-top",
  },
  {
    title: "Podcast Editing and Production Services",
    price: "Starting at $80/episode",
    description:
      "Looking to take podcast management, editing, or production off your plate? Send me an email to discuss your podcasting needs. I'll tailor a package just for you!",
    buttonText: "Email Heidy",
    buttonHref: "mailto:heidy@heidydelacruz.com",
    isEmail: true,
    image: "/images/services-photo.png",
    imagePosition: "object-top",
  },
];

const testimonials = [
  {
    quote:
      "This coaching was everything I needed and more to start this journey. It's been something I've been building up to do for a little over a year, and we were able to map out and simplify the process in six weeks.",
    name: "Brandell T.",
  },
  {
    quote:
      "I got this wild idea to do a podcast, and then the universe sent me Heidy! She was personable, organized, and super supportive. Working with her made the whole process fun and achievable.",
    name: "Kimberly Cline",
  },
  {
    quote:
      "Heidy made launching my podcast so much less intimidating. She broke everything down step by step and was always available to answer my questions. Couldn't recommend her enough!",
    name: "Casey",
  },
  {
    quote:
      "Heidy is a knowledgeable and engaging host who answered many of my questions about podcasting. Her insights helped me understand the process and feel confident about starting my own show.",
    name: "Andrea D.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionDivider center className="mb-8" />
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Let's Make <span className="italic text-brand-red">Podcasting</span> Your Next Adventure!
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            If the chaos of online marketing has left you feeling lost and overlooked, it's time to transform your approach. This is where I come in. As your podcast coach, I specialize in simplifying the podcasting journey, turning your pain points into powerful stepping stones toward success.
          </p>
          {/* Hero image */}
          <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
            <Image
              src="/images/HDLC4829.jpg"
              alt="Heidy De La Cruz – Podcast Coach"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionDivider center className="mb-6" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold">
              How Can I <span className="italic text-brand-red">Help</span> You?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-video">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover ${service.imagePosition ?? "object-center"}`}
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-serif text-2xl font-bold">{service.title}</h3>
                    <span className="flex-shrink-0 bg-brand-red text-white text-sm font-medium px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1 mb-8">
                    {service.description}
                  </p>
                  <Button
                    href={service.buttonHref}
                    size="md"
                    {...(!service.isEmail && { target: "_blank", rel: "noopener noreferrer" })}
                    className="self-start"
                  >
                    {service.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} />

      <PodcastersChecklist />

      <CtaSection heading="Starting a podcast shouldn't be so hard, I'll show you how." />

      <Footer />
    </>
  );
}
