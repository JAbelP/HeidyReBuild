import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PodcastAppearances from "../components/PodcastAppearances";

export const metadata: Metadata = {
  title: "Contact | Heidy De La Cruz – Podcast Coach",
  description: "Get in touch with Heidy De La Cruz to discuss your content journey. Book a complimentary consultation or reach out directly.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="w-20 h-1 bg-brand-red mx-auto mb-8"></div>
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Let&apos;s Discuss{" "}
            <span className="italic text-brand-red">Your Content Journey</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
            Whether you&apos;re a business looking to amplify your brand or a coach exploring new marketing strategies, I&apos;m here to help you get started.
          </p>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Are you a business looking to amplify your brand and increase service awareness?
          </p>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Or perhaps you&apos;re a coach aiming to elevate your business and explore innovative marketing strategies?
          </p>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Look no further! I&apos;m Heidy, and I&apos;m here to guide you through the simple and effective process of launching your podcast.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-20 h-1 bg-brand-red mx-auto mb-8"></div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-16">
            Get in touch today and receive a complimentary consultation
          </p>

          <div className="grid sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
            {/* Virtually */}
            <div className="bg-white rounded-lg p-10 shadow-sm flex flex-col items-center gap-6">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2">Virtually</h3>
                <p className="text-gray-600 mb-6">Zoom is my thing</p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-red text-white px-8 py-3 rounded-md hover:bg-brand-dark transition-colors font-medium"
                >
                  Book a Consultation
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg p-10 shadow-sm flex flex-col items-center gap-6">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2">Email</h3>
                <p className="text-gray-600 mb-6">Send me a message anytime</p>
                <a
                  href="mailto:heidy@heidydelacruz.com"
                  className="inline-block bg-brand-red text-white px-8 py-3 rounded-md hover:bg-brand-dark transition-colors font-medium"
                >
                  heidy@heidydelacruz.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PodcastAppearances />

      <Footer />
    </>
  );
}
