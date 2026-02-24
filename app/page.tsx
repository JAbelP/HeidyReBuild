import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="font-serif text-2xl font-bold">
                Heidy De La Cruz
                <div className="text-xs text-brand-red font-sans font-normal tracking-wide">
                  PODCAST COACH
                </div>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-brand-red transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-900 hover:text-brand-red transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-900 hover:text-brand-red transition-colors">
                Services
              </a>
              <a href="#testimonials" className="text-gray-900 hover:text-brand-red transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-900 hover:text-brand-red transition-colors">
                Contact
              </a>
              <a
                href="#contact"
                className="bg-brand-red text-white px-6 py-2.5 rounded-md hover:bg-brand-dark transition-colors font-medium"
              >
                Book a Call
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <Image
                  src="https://placehold.co/600x800/e5e5e5/666666?text=Hero+Photo"
                  alt="Heidy De La Cruz - Hero Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-20 h-1 bg-brand-red"></div>
              <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Elevate Your Online Presence with Podcasting
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 max-w-xl">
                Ready to break the internet without breaking a sweat? Let's turn your digital presence into a podcasting sensation!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-brand-red text-white px-8 py-4 rounded-md hover:bg-brand-dark transition-colors font-medium text-lg"
                >
                  Get In Touch
                </a>
                <a
                  href="#about"
                  className="border-2 border-brand-red text-brand-red px-8 py-4 rounded-md hover:bg-brand-red hover:text-white transition-colors font-medium text-lg"
                >
                  Learn More
                </a>
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
                  src="https://placehold.co/600x800/e5e5e5/666666?text=About+Photo"
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
              <a
                href="#services"
                className="inline-block bg-brand-red text-white px-8 py-4 rounded-md hover:bg-brand-dark transition-colors font-medium text-lg mt-4"
              >
                More About Me
              </a>
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
                So, What's the Scoop On Me?
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
              <a
                href="#services"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-brand-red transition-colors font-medium text-lg mt-4"
              >
                Learn More
              </a>
            </div>

            {/* Right - Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square">
                  <Image
                    src="https://placehold.co/400x400/e5e5e5/666666?text=Collage+1"
                    alt="Heidy De La Cruz - Collage Photo 1"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative aspect-square mt-12">
                  <Image
                    src="https://placehold.co/400x400/e5e5e5/666666?text=Collage+2"
                    alt="Heidy De La Cruz - Collage Photo 2"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative aspect-square -mt-12">
                  <Image
                    src="https://placehold.co/400x400/e5e5e5/666666?text=Collage+3"
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
                  <span className="text-3xl">🎙</span>
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
                  <span className="text-3xl">🚀</span>
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
                  <span className="text-3xl">📣</span>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3">Effective Marketing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      I'll equip you with marketing strategies to promote your podcast, grow your audience, and maximize your impact. Learn how to leverage social media, SEO, and community building to reach your ideal listeners.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-block bg-brand-red text-white px-8 py-4 rounded-md hover:bg-brand-dark transition-colors font-medium text-lg mt-4"
              >
                Yes, I'm Ready!
              </a>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red opacity-20 -z-10"></div>
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <Image
                  src="https://placehold.co/600x800/e5e5e5/666666?text=Services+Photo"
                  alt="Heidy De La Cruz - Services Photo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 lg:py-32 bg-brand-red text-white relative overflow-hidden">
        {/* Decorative stars */}
        <div className="absolute top-10 left-10 text-4xl opacity-30">✦</div>
        <div className="absolute top-32 right-20 text-3xl opacity-40">✧</div>
        <div className="absolute bottom-20 left-1/4 text-5xl opacity-20">✴</div>
        <div className="absolute bottom-32 right-1/3 text-4xl opacity-30">✦</div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-4">
            What Our Clients Have to Say About Their
          </h2>
          <p className="font-serif text-4xl lg:text-5xl italic text-center mb-16">
            Experience With Us
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white text-gray-900 p-8 rounded-lg">
              <div className="text-brand-red text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "Heidy is a knowledgeable and engaging host who answered many of my questions about podcasting. Her insights helped me understand the process and feel confident about starting my own show."
              </p>
              <p className="font-bold">— Andrea D.</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white text-gray-900 p-8 rounded-lg">
              <div className="text-brand-red text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "This coaching was everything I needed and more to start this journey. Heidy's guidance was clear, practical, and incredibly empowering. I couldn't have asked for a better experience!"
              </p>
              <p className="font-bold">— Brandell T.</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white text-gray-900 p-8 rounded-lg">
              <div className="text-brand-red text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "I got this wild idea to do a podcast, and then the universe sent me Heidy! She was personable, organized, and super supportive. Working with her made the whole process fun and achievable."
              </p>
              <p className="font-bold">— Kimberly Cline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Podcasters Checklist CTA */}
      <section className="py-20 bg-brand-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            The Podcasters Checklist
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you are feeling overwhelmed with the process of starting your podcast here's a mini checklist to help you on your way.
          </p>
          <a
            href="#subscribe"
            className="inline-block bg-brand-red text-white px-10 py-4 rounded-md hover:bg-brand-dark transition-colors font-medium text-lg"
          >
            Subscribe
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-12">
            Starting a podcast shouldn't be so hard, I'll show you how.
          </h2>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-red text-white px-12 py-5 rounded-md hover:bg-brand-dark transition-colors font-medium text-xl"
          >
            Book A Call with Heidy
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
            {/* Logo */}
            <div className="font-serif text-xl font-bold">
              Heidy De La Cruz
              <div className="text-xs text-brand-red font-sans font-normal tracking-wide mt-1">
                PODCAST COACH
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#home" className="hover:text-brand-red transition-colors">Home</a>
              <a href="#about" className="hover:text-brand-red transition-colors">About</a>
              <a href="#services" className="hover:text-brand-red transition-colors">Services</a>
              <a href="#testimonials" className="hover:text-brand-red transition-colors">Testimonials</a>
              <a href="#contact" className="hover:text-brand-red transition-colors">Contact</a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-end gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2024 Heidy De La Cruz. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
