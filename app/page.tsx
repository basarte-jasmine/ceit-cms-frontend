"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    heading: "April Joy Yapcengco ends her run with grace, grit, and glory",
    description:
      "The Pamantasan ng Lungsod ng Valenzuela's courts bids a triumphant and emotional farewell to one of its most iconic athletes—April Joy Yapcengco.",
  },
  {
    heading: "Excellence in Engineering and Information Technology",
    description:
      "Providing world-class education that prepares students to solve complex problems and lead innovation in a rapidly changing world.",
  },
  {
    heading: "CEIT Shines Bright at PLV Intramurals 2025",
    description:
      "The PLV Intramurals 2025 officially wrapped up bringing weeks of excitement, camaraderie, and competitive spirit across various sports.",
  },
];

const studentOrgs = [
  { name: "Association of Civil Engineering Students", abbr: "ACES", image: "/CE_Logo.png" },
  { name: "Association of Electrical Engineering Students", abbr: "AEES", image: "/EE_Logo.png" },
  { name: "Valenzuela Information Technology Society", abbr: "VITS", image: "/vits-logo.png" },
];

const newsItems = [
  {
    title: "April Joy Yapcengco Ends Her Run with Grace, Grit, and Glory.",
    description:
      "The Pamantasan ng Lungsod ng Valenzuela's courts bids a triumphant and emotional farewell to one of its most iconic athletes—April Joy Yapcengco.",
  },
  {
    title: "CEIT Shines Bright at PLV Intramurals 2025",
    description:
      "The PLV Intramurals 2025 officially wrapped up last April 21, bringing weeks of excitement, camaraderie, and competitive spirit across various sports.",
  },
  {
    title: "PLV CEIT Celebrates New Civil Engineer Board Passers",
    description:
      "The College of Engineering and Information Technology proudly celebrates the success of its recent Civil Engineering graduates who passed the April 2025 Civil Engineering Licensure Examination.",
  },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section
        className="relative w-full overflow-hidden flex flex-col"
        style={{ background: "hsl(var(--navy-mid))", minHeight: "640px" }}
      >
        <div className="absolute inset-0 bg-gray-600 opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, hsl(var(--navy-deep) / 0.85) 0%, transparent 60%)",
          }}
        />

        {/* SLIDER CONTENT */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-5 md:px-12 pb-24 max-w-[1400px] w-full mx-auto">
          {/* viewport */}
          <div className="overflow-hidden">
            {/* track */}
            <div
              className="flex transition-transform duration-700 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroSlides.map((slide, idx) => (
                <div key={idx} className="min-w-full">
                  <div className="max-w-5xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                      {slide.heading}
                    </h1>
                    <p className="text-lg text-white/80 mt-6 leading-relaxed max-w-3xl">
                      {slide.description}
                    </p>

                    <button className="mt-8 border border-white/70 text-white text-base px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-colors w-fit">
                      READ MORE <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <button
          onClick={prevSlide}
          type="button"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentSlide ? "bg-accent" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* COLLEGE INTRO */}
      <section className="py-24 md:py-32 text-center border-b border-border bg-[#f5f5f6]">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div className="w-28 h-28 rounded-full bg-gray-300 mx-auto mb-10 overflow-hidden flex items-center justify-center">
            <Image
              src="/CEIT_Logo.png"
              alt="College Logo"
              width={112}
              height={112}
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-5xl font-extrabold text-accent leading-tight">
            College of Engineering and Information Technology
          </h2>
          <p className="text-xl text-muted-foreground mt-8 leading-relaxed">
            Our college offers Civil Engineering, Electrical Engineering, and Information Technology programs.
            Each program is supported by a dedicated student organization:
          </p>

          <div className="flex justify-center gap-16 md:gap-32 mt-20 flex-wrap">
            {studentOrgs.map((org) => (
              <div key={org.abbr} className="flex flex-col items-center gap-5">
                <div className="relative w-32 h-32">
                  <Image
                    src={org.image}
                    alt={org.name}
                    fill
                    
                  />
                </div>
                <p className="text-base text-muted-foreground max-w-[260px] text-center leading-relaxed">
                  {org.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE DEAN */}
      <section className="bg-secondary/40 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-stretch min-h-[550px]">
          <div className="relative md:w-1/2 flex-shrink-0 flex items-end">
            <div
              className="absolute bottom-0 left-0 w-[65%] h-[88%] rounded-tr-[120px]"
              style={{ background: "hsl(var(--accent))" }}
            />
            <div className="relative z-10 ml-14 mb-0">
              <div className="w-[400px] h-[420px] bg-gray-400 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/Engr-Jordan.jpg"
                  alt="Dean"
                  width={400}
                  height={420}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col justify-center px-5 md:px-16 py-20">
            <p className="text-base font-bold text-accent uppercase tracking-widest mb-4">
              Meet the Dean
            </p>
            <h2 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight">
              Engr. Jordan Velasco
            </h2>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-lg">
              Under his guidance, the College continues to uphold its mission of producing future-ready engineers and IT
              professionals who are equipped to meet the evolving demands of society and industry.
            </p>
            <Link
              href="/academics"
              className="mt-8 inline-flex items-center gap-2 text-base border border-foreground/40 rounded-full px-8 py-3 hover:border-accent hover:text-accent transition-colors w-fit"
            >
              Meet the school officials <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-24 md:py-32 bg-[#f5f5f6]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-12">
          <h2 className="text-5xl font-extrabold text-accent uppercase tracking-widest mb-16">
            NEWS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {newsItems.map((item, i) => (
              <div key={i} className="px-0 md:px-10 first:pl-0 last:pr-0 py-8 md:py-0">
                <h3 className="text-3xl font-bold text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground mt-4 leading-relaxed italic">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-right">
            <Link
              href="/news"
              className="text-base font-bold text-accent inline-flex items-center gap-2 hover:underline"
            >
              VIEW ALL NEWS <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
