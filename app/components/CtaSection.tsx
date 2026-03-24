import Button from "./Button";

interface CtaSectionProps {
  heading?: string;
  buttonText?: string;
  buttonHref?: string;
  bgColor?: "white" | "black";
}

export default function CtaSection({
  heading = "Starting a podcast shouldn't be so hard, I'll show you how.",
  buttonText = "Send Me An Email",
  buttonHref = "mailto:heidy@heidydelacruz.com",
  bgColor = "white",
}: CtaSectionProps) {
  const bg = bgColor === "black" ? "bg-brand-black text-white" : "bg-white";

  return (
    <section className={`py-24 lg:py-32 ${bg}`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-12">
          {heading}
        </h2>
        <Button href={buttonHref} size="lg" className="px-12 py-5 text-xl">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
