"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, FileText, Check } from "lucide-react";

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
      <section className="py-24 md:py-32 text-center border-b border-border bg-white">
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
            {studentOrgs.map((org, index) => (
              <div key={org.abbr} className="flex flex-col items-center gap-5">
                <div
                  className="relative w-32 h-32 rounded-full overflow-hidden bg-white logo-float"
                  style={{ animationDelay: `${index * 0.25}s` }}
                >
                  <Image
                    src={org.image}
                    alt={org.name}
                    fill
                    className="object-cover"
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
      <section className="bg-[#f5f5f6] overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-stretch min-h-[550px]">
          <div className="relative lg:w-1/2 flex-shrink-0 flex items-end justify-center lg:justify-start">
            <div
              className="absolute bottom-0 left-0 w-[70%] h-[88%] rounded-tr-[90px] lg:rounded-tr-[120px]"
              style={{ background: "hsl(var(--accent))" }}
            />
            <div className="relative z-10 ml-0 lg:ml-14 mb-0">
              <div className="w-[300px] h-[320px] sm:w-[360px] sm:h-[380px] lg:w-[400px] lg:h-[420px] bg-gray-400 rounded-lg overflow-hidden flex items-center justify-center">
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

          <div className="lg:w-1/2 flex flex-col justify-center items-center text-center px-5 sm:px-10 lg:px-16 py-16 md:py-20">
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
              href="/administration"
              className="mt-8 inline-flex items-center gap-2 text-base border border-foreground/40 rounded-full px-8 py-3 hover:border-accent hover:text-accent transition-colors w-fit"
            >
              Meet the school officials <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-[#e3e7f1] bg-white">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-7 h-7 text-[#ef8a22]" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f2b55]">Registrar&apos;s Office</h2>
          </div>

          <div className="h-px bg-[#dfe3ef] mb-6" />

          <p className="text-lg text-[#4e5a7b] leading-relaxed max-w-4xl">
            The Registrar&apos;s Office maintains academic records, coordinates course registration, and ensures the integrity
            of academic policies and procedures.
          </p>

          <div className="mt-8 rounded-xl border border-[#dfe3ef] bg-[#f3f4f8] p-6 md:p-8">
            <h3 className="text-xl font-bold text-[#1f2b55] mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Course Registration & Add/Drop",
                "Transcript Requests",
                "Degree Verification",
                "Graduation Processing",
              ].map((service) => (
                <li key={service} className="flex items-center gap-3 text-[#1f2b55]">
                  <Check className="w-5 h-5 text-[#ef8a22]" />
                  <span className="text-lg">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-base text-[#4e5a7b] leading-relaxed">
            <p className="font-semibold text-[#1f2b55]">Contact Information:</p>
            <p>Telephone: 8352 7000 local 125</p>
            <p>Email: registrarsoffice_plv@yahoo.com</p>
            <p>Location: Maysan Road corner Tongco Street, Maysan, Valenzuela City, Valenzuela, Philippines</p>
            <p>Hours: Monday-Friday, 8:00 AM - 5:00 PM</p>
          </div>
        </div>
      </section>

    </div>
  );
}
