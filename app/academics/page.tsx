"use client";

import { useState } from "react";
import { Check, FileText } from "lucide-react";

const programs = [
  {
    name: "Civil Engineering",
    description:
      "Our Civil Engineering program prepares students to design, build, and maintain the infrastructure that supports modern society—from bridges and buildings to water systems and transportation networks.",
    specializations: [
      { title: "Structural Engineering", sub: "Design of buildings, bridges, and other structures" },
      { title: "Environmental Engineering", sub: "Water resources, waste management, and sustainability" },
      { title: "Transportation Systems", sub: "Highway design, traffic management, and urban planning" },
    ],
  },
  {
    name: "Electrical Engineering",
    description:
      "Our Electrical Engineering program focuses on the study and application of electricity, electronics, and electromagnetism, preparing students for careers in power systems, electronics design, and more.",
    specializations: [
      { title: "Power Systems", sub: "Generation, transmission, and distribution of electrical power" },
      { title: "Electronics and Embedded Systems", sub: "Circuit design, microprocessors, and control systems" },
    ],
  },
  {
    name: "Information Technology",
    description:
      "Our Information Technology program equips students with the skills to design, implement, and manage computing systems and networks that power modern organizations.",
    specializations: [
      { title: "Software Development", sub: "Programming, web development, and application design" },
      { title: "Network Administration", sub: "Network design, security, and management" },
      { title: "Cybersecurity", sub: "Threat analysis, security protocols, and digital forensics" },
    ],
  },
];

type AcademicTab =
  | "About"
  | "Our Programs"
  | "Goals & Objectives"
  | "Student Outcomes"
  | "Curriculum"
  | "Career Opportunities";

const tabContent: Record<
  AcademicTab,
  {
    title: string;
    paragraphs: string[];
    bullets?: string[];
    sections?: { heading: string; items: string[] }[];
  }
> = {
  About: {
    title: "About CEIT",
    paragraphs: [
      "The College of Engineering & Information Technology (CEIT) of Pamantasan ng Lungsod ng Valenzuela (PLV) is one of the premier academic units of the university, dedicated to producing highly competent, ethical, and industry-ready professionals in engineering and information technology.",
      "Established to serve the growing technical and industrial needs of Valenzuela City and the nation, CEIT continuously develops graduates who are:",
    ],
    bullets: [
      "Technically proficient",
      "Globally competitive",
      "Environmentally and socially responsible",
      "Equipped with leadership and management skills",
      "Committed to lifelong learning",
    ],
    sections: [
      {
        heading: "Programs Offered",
        items: [
          "Bachelor of Science in Civil Engineering (BSCE)",
          "Bachelor of Science in Electrical Engineering (BSEE)",
          "Bachelor of Science in Information Technology (BSIT)",
        ],
      },
    ],
  },
  "Our Programs": {
    title: "Our Programs",
    paragraphs: [
      "Explore CEIT degree programs and expand each one to view its focus areas.",
    ],
  },
  "Goals & Objectives": {
    title: "Goals & Objectives",
    paragraphs: [
      "CEIT aims to become a dynamic center for the development of competent and competitive human resources who contribute to technological advancement and national development.",
      "The College specifically seeks to:",
    ],
    bullets: [
      "Provide accessible and quality engineering and IT education to qualified students of Valenzuela City",
      "Develop strong foundational knowledge in mathematics, natural sciences, and engineering principles",
      "Enhance analytical thinking and problem-solving skills",
      "Train students in modern engineering tools, software, and laboratory equipment",
      "Prepare students for professional licensure examinations (for board programs)",
      "Develop research competence and innovation capability",
      "Promote ethical responsibility and professional integrity",
      "Encourage leadership, teamwork, and effective communication",
      "Instill commitment to community service and nation-building",
      "Foster continuous professional growth and lifelong learning",
    ],
    sections: [
      {
        heading: "Program Educational Objectives (PEOs)",
        items: [
          "Each program includes clearly defined PEOs describing the expected professional accomplishments of graduates within three to five years after graduation.",
        ],
      },
    ],
  },
  "Student Outcomes": {
    title: "Student Outcomes",
    paragraphs: [
      "Student Outcomes define the competencies students must demonstrate upon graduation.",
      "By the end of their program, CEIT graduates are expected to:",
    ],
    sections: [
      {
        heading: "Technical Competencies",
        items: [
          "Apply knowledge of mathematics, science, and engineering principles",
          "Analyze complex engineering and computing problems",
          "Design systems, components, or processes within realistic constraints",
          "Conduct experiments and interpret technical data",
          "Use modern engineering and computing tools",
        ],
      },
      {
        heading: "Professional Skills",
        items: [
          "Communicate effectively in written and oral formats",
          "Work effectively in multidisciplinary teams",
          "Manage projects and assume leadership roles",
          "Apply engineering and management principles",
        ],
      },
      {
        heading: "Ethical & Social Responsibility",
        items: [
          "Understand professional and ethical responsibilities",
          "Recognize the societal and environmental impact of engineering solutions",
          "Address contemporary issues in engineering and technology",
        ],
      },
      {
        heading: "Lifelong Learning",
        items: [
          "Recognize the need for continuous professional development",
          "Adapt to technological advancements and evolving industry demands",
        ],
      },
    ],
  },
  Curriculum: {
    title: "Curriculum",
    paragraphs: [
      "The CEIT curriculum is carefully designed to balance theoretical knowledge and practical experience.",
    ],
    sections: [
      {
        heading: "Foundation Courses",
        items: [
          "Mathematics (Calculus, Differential Equations, Engineering Mathematics)",
          "Physics and Natural Sciences",
          "General Education Courses",
          "Communication and Humanities",
        ],
      },
      {
        heading: "Core Engineering / IT Courses",
        items: [
          "Discipline-specific professional courses",
          "System design and analysis",
          "Software and hardware integration",
          "Power systems, circuits, telecommunications",
          "Network systems and database management",
        ],
      },
      {
        heading: "Laboratory and Practical Training",
        items: [
          "Computer Laboratories (40 WiFi-enabled units connected to PLV server)",
          "Materials Testing Laboratory",
          "Fluid Mechanics Laboratory",
          "Electronics Engineering Laboratory",
          "Electrical Engineering Laboratory",
          "Mechanical & Instrumentation Laboratory",
          "Drawing Rooms for manual drafting",
        ],
      },
      {
        heading: "Capstone & Internship",
        items: [
          "Capstone Design Projects",
          "Research Projects",
          "Industry Internship / On-the-Job Training",
          "Review sessions and board exam preparation seminars",
        ],
      },
    ],
  },
  "Career Opportunities": {
    title: "Career Opportunities",
    paragraphs: [
      "Graduates of CEIT are prepared for diverse professional careers across industries, government, research institutions, and private enterprises.",
    ],
    sections: [
      {
        heading: "Civil Engineering",
        items: [
          "Structural Engineer",
          "Project Engineer",
          "Site Engineer",
          "Quantity Surveyor",
          "Planning Engineer",
          "Water & Sanitation Engineer",
        ],
      },
      {
        heading: "Computer Engineering",
        items: [
          "Hardware Design Engineer",
          "Embedded Systems Engineer",
          "Firmware Engineer",
          "Software Engineer",
          "Systems Engineer",
          "Cybersecurity Engineer",
          "Robotics / IoT Engineer",
        ],
      },
      {
        heading: "Electronics Engineering",
        items: [
          "Telecommunications Engineer",
          "Semiconductor Engineer",
          "ICT Specialist",
          "Biomedical Engineer",
          "R&D Engineer",
          "Aerospace Engineer",
        ],
      },
      {
        heading: "Electrical Engineering",
        items: [
          "Power Systems Engineer",
          "Control Engineer",
          "Electrical Design Engineer",
          "Maintenance Engineer",
          "Distribution Engineer",
          "Engineering Educator",
        ],
      },
      {
        heading: "Information Technology",
        items: [
          "Software Applications Engineer",
          "Systems Analyst",
          "Network Administrator",
          "Information Systems Manager",
          "Cloud Infrastructure Engineer",
          "Database Administrator",
        ],
      },
      {
        heading: "Further Paths",
        items: [
          "Advanced studies, research, entrepreneurship, and leadership roles",
        ],
      },
    ],
  },
};

const Academics = () => {
  const [activeTab, setActiveTab] = useState<AcademicTab>("Goals & Objectives");
  const [expandedProgram, setExpandedProgram] = useState<string>(programs[0].name);

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative overflow-hidden py-16 md:py-20 border-b border-border bg-cover bg-center"
        style={{ backgroundImage: "url('/banner_academics.png')" }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--navy-deep))/0.55]" />
        <div className="max-w-[1400px] mx-auto px-5 md:px-12">
          <h1 className="relative text-6xl md:text-7xl font-extrabold text-white">Academics</h1>
          <p className="relative text-lg text-white/90 mt-4 max-w-2xl">
            Discover our programs designed to inspire, challenge, and prepare you for success in a rapidly changing world.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-6">
          <div className="flex flex-wrap gap-0">
            {(Object.keys(tabContent) as AcademicTab[]).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm md:text-base font-semibold border transition ${
                    isActive
                      ? "bg-[hsl(var(--navy-deep))] text-white border-[hsl(var(--navy-deep))]"
                      : "bg-secondary text-muted-foreground border-border hover:bg-secondary/70"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="mt-5 rounded-lg border border-border bg-secondary/30 p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">{tabContent[activeTab].title}</h2>
            {activeTab === "Our Programs" ? (
              <div className="mt-5 space-y-2">
                {programs.map((program) => {
                  const isOpen = expandedProgram === program.name;
                  return (
                    <div key={program.name} className="overflow-hidden border border-border bg-secondary/40">
                      <button
                        onClick={() => setExpandedProgram(isOpen ? "" : program.name)}
                        className="w-full flex items-stretch text-left"
                      >
                        <span className="w-14 flex items-center justify-center bg-secondary border-r border-border text-2xl text-foreground">
                          {isOpen ? "−" : "+"}
                        </span>
                        <span className="px-5 py-4 text-base md:text-xl font-semibold text-foreground">{program.name}</span>
                      </button>
                      {isOpen && (
                        <div className="px-5 md:px-8 py-5 border-t border-border">
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{program.description}</p>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mt-6">Focus Areas</h3>
                          <ul className="mt-3 space-y-3 text-base md:text-lg text-muted-foreground">
                            {program.specializations.map((item) => (
                              <li key={item.title} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-[#ef8a22] flex-shrink-0 mt-1" />
                                <span>
                                  <span className="font-semibold text-foreground">{item.title}:</span> {item.sub}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="mt-3 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-5xl">
                {tabContent[activeTab].paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {tabContent[activeTab].bullets && (
                  <ul className="list-disc pl-5 space-y-1">
                    {tabContent[activeTab].bullets?.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {tabContent[activeTab].sections?.map((section) => (
                  <div key={section.heading}>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mt-4">{section.heading}</h3>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-5 md:px-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-7 h-7 text-accent" />
            <h2 className="text-5xl font-extrabold text-foreground">Registrar&apos;s Office</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            The Registrar&apos;s Office maintains academic records, coordinates course registration, and ensures the integrity of
            academic policies and procedures.
          </p>
          <div className="mt-8 bg-secondary/40 rounded-lg p-8 border border-border">
            <h4 className="text-lg font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Course Registration & Add/Drop",
                "Transcript Requests",
                "Degree Verification",
                "Graduation Processing",
              ].map((s) => (
                <li key={s} className="flex items-center gap-3 text-base text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" /> {s}
                </li>
              ))}
            </ul>
            <div className="mt-8 text-sm text-muted-foreground space-y-1 border-t border-border pt-6">
              <p className="font-semibold">Contact Information:</p>
              <p>Telephone: 8352 7000 local 125</p>
              <p>Email: registrarsoffice_plv@yahoo.com</p>
              <p>Location: Maysan Road corner Tongco Street, Maysan, Valenzuela City, Valenzuela, Philippines</p>
              <p>Hours: Monday-Friday, 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Academics;
