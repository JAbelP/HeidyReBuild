type Testimonial = {
  quote: string;
  name: string;
};

type Props = {
  heading?: string;
  subheading?: string;
  testimonials: Testimonial[];
};

export default function Testimonials({
  heading = "What Our Clients Have to Say About Their",
  subheading = "Experience With Us",
  testimonials,
}: Props) {
  const cols =
    testimonials.length === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-3";

  return (
    <section className="py-24 lg:py-32 bg-brand-red text-white relative overflow-hidden">
      <div className="absolute top-10 left-10 text-4xl opacity-30">✦</div>
      <div className="absolute top-32 right-20 text-3xl opacity-40">✧</div>
      <div className="absolute bottom-20 left-1/4 text-5xl opacity-20">✴</div>
      <div className="absolute bottom-32 right-1/3 text-4xl opacity-30">✦</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-4">
          {heading}
        </h2>
        <p className="font-serif text-4xl lg:text-5xl italic text-center mb-16">
          {subheading}
        </p>

        <div className={`grid ${cols} gap-6`}>
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white text-gray-900 p-8 rounded-lg flex flex-col">
              <div className="text-brand-red text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <p className="font-bold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
