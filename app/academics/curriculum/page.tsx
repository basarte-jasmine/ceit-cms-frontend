"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type ProgramCode = "BSIT" | "BSEE" | "BSCE";

type CurriculumInfo = {
  name: string;
  paragraphs: string[];
  focusAreas: { title: string; detail: string }[];
};

const curriculumData: Record<ProgramCode, CurriculumInfo> = {
  BSIT: {
    name: "Bachelor of Science in Information Technology",
    paragraphs: [
      "The Bachelor of Science in Information Technology curriculum emphasizes quantitative and communications skills as well as providing a foundation in business environments. Upon graduation, students will receive the degree of Bachelor of Science in Information Technology.",
      "Graduates of this program will qualify for employment as entry-level computer software applications engineers, computer and information systems managers, computer systems analysts, network systems professionals and computer systems software engineers.",
      "BSIT students may specialize in technology or management domains including Network and Systems Engineering, Software Engineering, Information Systems Administration and Telecommunications.",
    ],
    focusAreas: [
      { title: "Network and Systems Engineering", detail: "Infrastructure design, systems integration, and administration" },
      { title: "Software Engineering", detail: "Software analysis, design, development, and quality assurance" },
      { title: "Information Systems Administration", detail: "Enterprise systems, data management, and operations support" },
      { title: "Telecommunications", detail: "Communication systems, connectivity, and network services" },
    ],
  },
  BSEE: {
    name: "Bachelor of Science in Electrical Engineering",
    paragraphs: [
      "The Electrical Engineering curriculum is designed to develop engineers equipped with knowledge in Mathematics, Natural Sciences, Engineering Sciences, Allied Courses, and Professional Electrical Engineering Courses to ensure a strong theoretical and analytical foundation. General Education courses are included to ensure that graduates understand and develop communication skills, critical thinking, and ethical responsibility within the context of society.",
      "The Professional Electrical Engineering Courses in the curriculum cover power systems, electrical machines, control systems, instrumentation, and electrical design, among others. Laboratory activities, research projects, and internships will further enhance the acquired knowledge and ability to solve and analyze related problems through hands-on skills, demonstration, and industry exposure.",
      "The curriculum ensures that the graduates will acquire the competencies required to promote technical proficiency, teamwork, ethical practices, and lifelong learning as a preparation for professional practice, licensure board examinations, and continuous development in the industry.",
    ],
    focusAreas: [
      { title: "Mathematics and Natural Sciences", detail: "Builds a strong theoretical and analytical foundation for engineering practice" },
      { title: "Engineering and Allied Courses", detail: "Develops technical depth and multidisciplinary understanding in electrical engineering contexts" },
      { title: "Professional Electrical Engineering Courses", detail: "Covers power systems, electrical machines, control systems, instrumentation, and electrical design" },
      { title: "Laboratory, Research, and Internship", detail: "Enhances hands-on skills, problem-solving ability, and industry readiness through practical exposure" },
      { title: "General Education and Professional Formation", detail: "Strengthens communication, critical thinking, ethics, teamwork, and lifelong learning" },
    ],
  },
  BSCE: {
    name: "Bachelor of Science in Civil Engineering",
    paragraphs: [
      "Civil engineering deals with the design, construction and maintenance of physical and naturally built environments, including works such as bridges, roads, canals, dams and buildings. This field is traditionally broken into several subdisciplines, including environmental engineering, geotechnical engineering, structural engineering, transportation engineering, municipal or urban engineering, water sources engineering, materials engineering, coastal engineering, surveying and construction engineering. Civil engineering takes place in all levels: in the public sector from municipal to national levels, and in the private sector from individual home owners to international companies.",
    ],
    focusAreas: [
      { title: "Civil Engineering Curriculum", detail: "Civil engineering deals with the design, construction and maintenance of physical and naturally built environments, including works such as bridges, roads, canals, dams and buildings." },
      { title: "Subdisciplines", detail: "Environmental engineering, geotechnical engineering, structural engineering, transportation engineering, municipal or urban engineering, water sources engineering, materials engineering, coastal engineering, surveying and construction engineering." },
      { title: "Scope of Practice", detail: "Civil engineering takes place in all levels: in the public sector from municipal to national levels, and in the private sector from individual home owners to international companies." },
    ],
  },
};

export default function CurriculumPage() {
  const [activeProgram, setActiveProgram] = useState<ProgramCode>("BSIT");
  const currentProgram = curriculumData[activeProgram];

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative overflow-hidden py-16 md:py-20 border-b border-border bg-cover bg-center"
        style={{ backgroundImage: "url('/banner_academics.png')" }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--navy-deep))/0.55]" />
        <div className="mx-auto max-w-[1400px] px-5 md:px-12">
          <h1 className="relative text-6xl md:text-7xl font-extrabold text-white">Curriculum</h1>
          <p className="relative mt-4 max-w-3xl text-base md:text-lg text-white/90 leading-relaxed">
            Explore the curriculum details and focus areas for BSIT, BSEE, and BSCE.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-5 md:px-12 py-8 md:py-10">
          <div className="p-1 md:p-0">
            <div className="flex flex-wrap gap-0 relative">
              {(["BSIT", "BSEE", "BSCE"] as ProgramCode[]).map((code) => {
                const isActive = activeProgram === code;
                return (
                  <button
                    key={code}
                    onClick={() => setActiveProgram(code)}
                    className={`px-6 py-3 text-sm md:text-base font-semibold border transition ${
                      isActive
                        ? "bg-[hsl(var(--navy-deep))] text-white border-[hsl(var(--navy-deep))]"
                        : "bg-secondary text-muted-foreground border-border hover:bg-secondary/70"
                    }`}
                  >
                    {code}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-border bg-background p-6 md:p-8 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{currentProgram.name}</h2>
              <div className="mt-3 space-y-4">
                {currentProgram.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Curriculum / Focus Areas</h3>
              <ul className="mt-3 space-y-2 text-base md:text-lg text-muted-foreground">
                {currentProgram.focusAreas.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#ef8a22] flex-shrink-0 mt-1" />
                    <span>
                      <span className="font-semibold text-foreground">{item.title}:</span> {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
