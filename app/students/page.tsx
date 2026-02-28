"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Shield, BookOpen, Briefcase, Heart, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

type DepartmentKey = "EE" | "IT" | "CE";

const departments: Record<
  DepartmentKey,
  {
    title: string;
    description: string;
    image: string;
    socialLinks: { label: string; url: string }[];
  }
> = {
  EE: {
    title: "Association of Electrical Engineering Students (AEES)",
    description:
      "The Association of Electrical Engineering Students (AEES), established in 2004, two years after the founding of Pamantasan ng Lungsod ng Valenzuela, is a duly recognized student organization committed to the academic, professional, and personal development of electrical engineering students. The organization upholds active student involvement, discipline, and continuous excellence while fostering camaraderie, cooperation, and leadership among its members to prepare them for future professional practice.",
    image: "/EE_studentlife.png",
    socialLinks: [
      { label: "Facebook", url: "https://www.facebook.com/PLVAEES2004" },
      { label: "Email", url: "mailto:aeesplv@gmail.com" },
    ],
  },
  IT: {
    title: "Valenzuela Information Technology Society (VITS)",
    description:
      "The Valenzuela Information Technology Society (VITS) was founded in 2011 within the Department of Information Technology at Pamantasan ng Lungsod ng Valenzuela. The organization was established to unify the voices of Information Technology students. VITS aims to build strong camaraderie among the members and to strengthen the foundation of Information Technology students at PLV. Additionally, VITS serves as a representation of the PLV student body, conveying the needs and grievances of its members.",
    image: "/IT_studentlife.jpg",
    socialLinks: [
      { label: "VITS Page", url: "https://www.facebook.com/ValenzuelaITSociety" },
      { label: "VITS ITlympics Page", url: "https://www.facebook.com/PLVVITSITLympics" },
    ],
  },
  CE: {
    title: "PLV-ACES",
    description:
      "PLV-ACES was founded in 2012 to support the academic and professional growth of civil engineering students and dedicated to upholding a strong union among its members while fostering a culture of technical excellence. In 2022, it becomes a student chapter of the Philippine Institute of Civil Engineering (PICE), strengthening its industry connections. In 2023, it further expanded learning and networking opportunities by joining the American Concrete Institute (ACI), providing members with broader opportunities for technical knowledge, research, and industry connections.",
    image: "/CE_studentlife.jpg",
    socialLinks: [
      { label: "Facebook", url: "https://www.facebook.com/plv.aces" },
      { label: "Instagram", url: "https://www.instagram.com/plv.aces" },
    ],
  },
};

const guidanceCards = [
  {
    icon: MessageCircle,
    title: "Personal Counselling",
    body: "Confidential one-on-one sessions to address personal concerns and emotional well-being.",
  },
  {
    icon: BookOpen,
    title: "Academic Guidance",
    body: "Support for academic challenges, study skills, and educational planning.",
  },
  {
    icon: Briefcase,
    title: "Career Counselling",
    body: "Assistance with career exploration, planning, and preparation for professional life.",
  },
];

const nstpPrograms = [
  {
    icon: Shield,
    name: "ROTC",
    desc: "Reserve Officers' Training Corps focuses on military training discipline and leadership development.",
  },
  {
    icon: Heart,
    name: "CWTS",
    desc: "Civic Welfare Training Service focuses on activities that contribute to the general welfare and betterment of communities.",
  },
  {
    icon: BookOpen,
    name: "LTS",
    desc: "Literacy Training Service focuses on teaching literacy and numeracy skills to communities in need.",
  },
];

export default function Students() {
  const departmentOrder: DepartmentKey[] = ["CE", "EE", "IT"];
  const headerSlides = [
    "/aces1.jpg",
    "/aees1.jpg",
    "/vits1.jpg",
    "/aces2.jpg",
    "/aees2.jpg",
    "/vits2.jpg",
    "/aces3.jpg",
    "/aees3.jpg",
    "/vits3.jpg",
  ];
  const [currentHeaderSlide, setCurrentHeaderSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeaderSlide((prev) => (prev + 1) % headerSlides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [headerSlides.length]);

  const prevHeaderSlide = () => {
    setCurrentHeaderSlide((prev) => (prev - 1 + headerSlides.length) % headerSlides.length);
  };

  const nextHeaderSlide = () => {
    setCurrentHeaderSlide((prev) => (prev + 1) % headerSlides.length);
  };

  return (
    <div className="min-h-screen bg-[#f2f4fb]">
      <section className="relative h-[440px] md:h-[560px] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentHeaderSlide * 100}%)` }}
          >
            {headerSlides.map((slide) => (
              <div key={slide} className="relative h-full min-w-full">
                <Image src={slide} alt="Student life banner" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/15" />

        <button
          onClick={prevHeaderSlide}
          type="button"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/25 p-2 text-white transition-colors hover:bg-white/35"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextHeaderSlide}
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/25 p-2 text-white transition-colors hover:bg-white/35"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
          {headerSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentHeaderSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors ${index === currentHeaderSlide ? "bg-[#ef8a22]" : "bg-white/45"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-5 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white">Students</h1>
            <p className="mt-5 max-w-3xl text-base md:text-lg text-white/90 leading-relaxed">
              Explore student organizations, support services, and programs that enrich campus life and help learners thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 md:mt-12 max-w-[1200px] px-5 md:px-8 relative z-10">
        <div className="px-2 md:px-0">
          <div className="space-y-7">
            {departmentOrder.map((key, index) => {
              const department = departments[key];
              const isReverse = index % 2 === 1;

              return (
                <div key={key} className="pb-7 border-b border-[#dfe3ef] last:border-b-0 last:pb-0">
                  <div className={`grid gap-6 items-center md:grid-cols-2 ${isReverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className="flex h-full flex-col">
                      <h2 className="text-3xl font-bold text-[#1f2b55] leading-tight">{department.title}</h2>
                      <p className="mt-4 text-[#4e5a7b] leading-relaxed">{department.description}</p>

                      <div className="mt-4 flex flex-wrap gap-3">
                        {department.socialLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target={link.url.startsWith("http") ? "_blank" : undefined}
                            rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm font-semibold text-[#0f8d83] hover:underline"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="relative h-[260px] md:h-[360px] w-full rounded-xl overflow-hidden bg-[#e8ecf7] border border-[#dfe3ef]">
                      <Image src={department.image} alt={department.title} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 md:px-8 py-14 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-5xl font-extrabold text-[#1f2b55]">Guidance &amp; Counselling</h2>
            <div className="mt-8 space-y-4">
              {guidanceCards.map((card) => (
                <article key={card.title} className="rounded-xl border border-[#dfe3ef] bg-white p-5">
                  <div className="flex items-start gap-3">
                    <card.icon className="h-5 w-5 text-[#f08a24] mt-0.5" />
                    <div>
                      <h3 className="text-2xl font-bold text-[#1f2b55]">{card.title}</h3>
                      <p className="mt-1 text-[#4e5a7b]">{card.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#dfe3ef] bg-white">
              <Image src="/Guidance.jpg" alt="Guidance and counselling" fill className="object-cover" />
            </div>
            <p className="mt-4 text-lg text-[#4e5a7b] leading-relaxed">
              Our Guidance and Counseling Center provides comprehensive support services to help you navigate academic
              challenges, personal concerns, and career decisions throughout your university journey.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fd] border-y border-[#e3e7f1] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 text-center">
          <span className="inline-flex rounded-full bg-[#ef8a22] px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
            Required Program
          </span>
          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold text-[#1f2b55]">
            National Service Training Program (NSTP)
          </h2>
          <p className="mt-4 text-lg text-[#4e5a7b] max-w-3xl mx-auto leading-relaxed">
            The NSTP aims to promote civic consciousness and defense preparedness among the youth while developing their physical, moral, spiritual, intellectual, and social well-being.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {nstpPrograms.map((prog) => (
              <article key={prog.name} className="rounded-xl border border-[#dfe3ef] bg-white p-6 text-left">
                <prog.icon className="h-6 w-6 text-[#1f2b55]" />
                <h3 className="mt-4 text-3xl font-bold text-[#1f2b55]">{prog.name}</h3>
                <p className="mt-3 text-[#4e5a7b] leading-relaxed">{prog.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
