"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type AcademicTab = "About CEIT" | "Programs Offered" | "Admission";
type ProgramCode = "BSIT" | "BSEE" | "BSCE";

type ProgramInfo = {
  code: ProgramCode;
  name: string;
  overview: string;
  outcomes: string[];
  focusAreas: { title: string; detail: string }[];
  careers: string[];
};

const topTabs: AcademicTab[] = ["About CEIT", "Programs Offered", "Admission"];

const programs: Record<ProgramCode, ProgramInfo> = {
  BSCE: {
    code: "BSCE",
    name: "Bachelor of Science in Civil Engineering",
    overview:
      `
Civil engineering deals with the design, construction and maintenance of physical and naturally built environments, including works such as bridges, roads, canals, dams and buildings. This field is traditionally broken into several subdisciplines, including environmental engineering, geotechnical engineering, structural engineering, transportation engineering, municipal or urban engineering, water sources engineering, materials engineering, coastal engineering, surveying and construction engineering. Civil engineering takes place in all levels: in the public sector from municipal to national levels, and in the private sector from individual home owners to international companies.

The University will produce Civil Engineering graduates who will:
- Highly establish themselves in their specialized field of civil engineering and able to provide technical solutions to complex engineering problems;
- Continuously adapt to the developing needs of the profession by pursuing career improvement through studies and trainings;
- Involve themselves to the community to promote social and ethical responsibility, awareness and development.`,
    outcomes: [
      "Ability to apply knowledge of mathematics and science to solve engineering problems.",
      "Ability to design and conduct experiments, as well as to analyze and interpret data.",
      "Ability to design a system, component or process to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability, in accordance with standards.",
      "Ability to function in multidisciplinary teams.",
      "Ability to identify, formulate and solve engineering problems.",
      "Understanding of professional and ethical responsibilities.",
      "Ability to communicate effectively.",
      "Broad education necessary to understand the impact of engineering solutions in global, economic, environmental and societal contexts.",
      "Recognition of the need for and an ability to engage in lifelong learning.",
      "Knowledge of contemporary issues.",
      "Ability to use techniques, skills and modern engineering tools necessary for engineering practice.",
      "Knowledge and understanding of engineering and management principles as a member and leader in a team, to manage projects in multidisciplinary environments.",
      "Understand at least one specialized field in Civil Engineering.",
    ],
    focusAreas: [
      { title: "Civil Engineering Curriculum", detail: "Civil engineering deals with the design, construction and maintenance of physical and naturally built environments, including works such as bridges, roads, canals, dams and buildings." },
      { title: "Subdisciplines", detail: "Environmental engineering, geotechnical engineering, structural engineering, transportation engineering, municipal or urban engineering, water sources engineering, materials engineering, coastal engineering, surveying and construction engineering." },
      { title: "Scope of Practice", detail: "Civil engineering takes place in all levels: in the public sector from municipal to national levels, and in the private sector from individual home owners to international companies." },
    ],
    careers: [
      "Project Manager",
      "Project Engineer",
      "Structural Engineer",
      "Resident Engineer",
      "Quantity Surveyor",
      "Quality Control Engineer",
      "Application Engineer",
      "Project Control Executive",
      "Site Engineer",
      "Planning Engineer",
      "Design Engineer",
      "Water and Sanitation Engineer",
    ],
  },
  BSEE: {
    code: "BSEE",
    name: "Bachelor of Science in Electrical Engineering",
    overview:
      `In today’s world where computers, digital systems, and networks are deeply embedded in everyday life, the Computer Engineering program prepares students to become versatile and adaptive professionals. The program integrates core knowledge from computer science, electrical engineering, mathematics, and the natural sciences to develop a strong theoretical and practical foundation.

Recognizing the rapid evolution of computing technologies, the program emphasizes lifelong learning and continuous skills development. It distinguishes computer engineers by their ability to design and integrate hardware and software systems, going beyond simple assembly or configuration to solve complex and novel engineering problems while considering real-world constraints and trade-offs.

Graduates of the program are equipped with broad engineering knowledge and are prepared for professional practice, enabling them to contribute effectively to industry, research, and innovation in the ever-changing field of computer engineering.`,
    outcomes: [
      "Apply knowledge of mathematics and science to solve engineering problems.",
      "Design and conduct experiments, as well as analyze and interpret data.",
      "Design a system, component or process to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability, in accordance with standards.",
      "Function in multidisciplinary teams.",
      "Identify, formulate and solve engineering problems.",
      "Understand professional and ethical responsibilities.",
      "Communicate effectively.",
      "Have broad education necessary to understand the impact of engineering solutions in global, economic, environmental and societal contexts.",
      "Recognize the need for and have an ability to engage in lifelong learning.",
      "Have knowledge of contemporary issues.",
      "Use techniques, skills and modern engineering tools necessary for engineering practice.",
      "Have knowledge and understanding of engineering and management principles as a member and leader in a team, to manage projects in multidisciplinary environments.",
    ],
    focusAreas: [
      { title: "Mathematics and Natural Sciences", detail: "Builds a strong theoretical and analytical foundation for engineering practice" },
      { title: "Engineering and Allied Courses", detail: "Develops technical depth and multidisciplinary understanding in electrical engineering contexts" },
      { title: "Professional Electrical Engineering Courses", detail: "Covers power systems, electrical machines, control systems, instrumentation, and electrical design" },
      { title: "Laboratory, Research, and Internship", detail: "Enhances hands-on skills, problem-solving ability, and industry readiness through practical exposure" },
      { title: "General Education and Professional Formation", detail: "Strengthens communication, critical thinking, ethics, teamwork, and lifelong learning" },
    ],
    careers: [
      "Power Engineer (Power System Operation, Power System Protection, Power System Economics, Power Plant)",
      "Design Engineer (Advanced Power Systems, Advanced Electrical Design, Machine Automation, and Process Design)",
      "Illumination Engineer",
      "Entrepreneur",
      "Sales Engineer",
      "Distribution Engineer",
      "System Distribution Engineer",
      "Engineering Educator and Researcher",
      "Instrumentation and Control Engineer",
      "Safety Engineer",
      "Maintenance Engineer",
      "Construction and Project Engineer",
      "Electrical Design Inspector",
    ],
  },
  BSIT: {
    code: "BSIT",
    name: "Bachelor of Science in Information Technology",
    overview:
      `
The Bachelor of Science in Information Technology curriculum emphasizes quantitative and communications skills as well as providing a foundation in business environments. Upon graduation, students will receive the degree of Bachelor of Science in Information Technology.

Graduates of this program will qualify for employment as entry-level computer software applications engineers, computer and information systems managers, computer systems analysts, network systems professionals and computer systems software engineers.

BSIT students may specialize in technology or management domains including Network and Systems Engineering, Software Engineering, Information Systems Administration and Telecommunications.`,
    outcomes: [
      "Ability to apply knowledge of computing, basic science and mathematics appropriate to the discipline and the program educational objectives.",
      "Ability to analyze a problem, and identify and define the computing requirements appropriate to the problem's solution.",
      "Ability to design, implement and evaluate the capability of a computer-based system, process, component or program to meet desired needs.",
      "Ability to function effectively on teams to accomplish a common goal.",
      "Ability to understand professional, ethical, legal, security and social issues and responsibilities.",
      "Ability to communicate effectively with a range of audiences.",
      "Ability to analyze the local and global impact of computing on individuals, organizations and society.",
      "Ability to recognize the need for and ability to engage in continuing professional development.",
      "Ability to use techniques, skills and tools necessary to current computing practice.",
    ],
    focusAreas: [
      { title: "Network and Systems Engineering", detail: "Infrastructure design, systems integration, and administration" },
      { title: "Software Engineering", detail: "Software analysis, design, development, and quality assurance" },
      { title: "Information Systems Administration", detail: "Enterprise systems, data management, and operations support" },
      { title: "Telecommunications", detail: "Communication systems, connectivity, and network services" },
    ],
    careers: [
      "Entry-level Computer Software Applications Engineer",
      "Computer and Information Systems Manager",
      "Computer Systems Analyst",
      "Network Systems Professional",
      "Computer Systems Software Engineer",
      "BSIT students may specialize in technology or management domains including:",
      "Network and Systems Engineering",
      "Software Engineering",
      "Information Systems Administration",
      "Telecommunications",
    ],
  },
};

const Academics = () => {
  const [activeTab, setActiveTab] = useState<AcademicTab>("About CEIT");
  const [activeProgram, setActiveProgram] = useState<ProgramCode | null>(null);
  const [isProgramMenuOpen, setIsProgramMenuOpen] = useState(false);

  const currentProgram = activeProgram ? programs[activeProgram] : null;

  const handleTabChange = (tab: AcademicTab) => {
    if (tab === "Programs Offered") {
      setIsProgramMenuOpen((prev) => !prev);
    } else {
      setActiveTab(tab);
      setIsProgramMenuOpen(false);
    }
  };

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
          <div className="space-y-2 lg:hidden">
            {topTabs.map((tab) => {
              const isActive = activeTab === tab || (tab === "Programs Offered" && isProgramMenuOpen);
              return (
                <div key={tab}>
                  <button
                    onClick={() => handleTabChange(tab)}
                    className={`w-full px-5 py-3 text-left text-sm sm:text-base font-semibold border rounded-md transition ${
                      isActive
                        ? "bg-[hsl(var(--navy-deep))] text-white border-[hsl(var(--navy-deep))]"
                        : "bg-secondary text-muted-foreground border-border hover:bg-secondary/70"
                    }`}
                  >
                    {tab}
                  </button>

                  {tab === "Programs Offered" && isProgramMenuOpen && (
                    <div className="mt-1 overflow-hidden rounded-md border border-border bg-background">
                      {(["BSIT", "BSEE", "BSCE"] as ProgramCode[]).map((code) => (
                        <button
                          key={code}
                          onClick={() => {
                            setActiveProgram(code);
                            setActiveTab("Programs Offered");
                            setIsProgramMenuOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-base font-semibold text-foreground border-b border-border last:border-b-0 bg-background hover:bg-secondary transition"
                        >
                          {code}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden lg:flex flex-wrap gap-0 relative">
            {topTabs.map((tab) => {
              const isActive = activeTab === tab || (tab === "Programs Offered" && isProgramMenuOpen);
              return (
                <div key={tab} className="relative">
                  <button
                    onClick={() => handleTabChange(tab)}
                    className={`px-6 py-3 text-sm md:text-base font-semibold border transition ${
                      isActive
                        ? "bg-[hsl(var(--navy-deep))] text-white border-[hsl(var(--navy-deep))]"
                        : "bg-secondary text-muted-foreground border-border hover:bg-secondary/70"
                    }`}
                  >
                    {tab}
                  </button>

                  {tab === "Programs Offered" && isProgramMenuOpen && (
                    <div className="absolute left-0 top-full z-10 w-full overflow-hidden border-x border-b border-border bg-background">
                      {(["BSIT", "BSEE", "BSCE"] as ProgramCode[]).map((code) => (
                        <button
                          key={code}
                          onClick={() => {
                            setActiveProgram(code);
                            setActiveTab("Programs Offered");
                            setIsProgramMenuOpen(false);
                          }}
                          className="w-full px-5 py-3 text-left text-base font-semibold text-foreground border-b border-border last:border-b-0 bg-background hover:bg-secondary transition"
                        >
                          {code}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-5 rounded-lg border border-border bg-secondary/30 p-6 md:p-8">
            {activeTab === "About CEIT" && (
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">About CEIT</h2>
                <p>
                  The Engineering and Information Technology programs are designed to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Acquire full understanding of scientific principles and knowledge in their respective fields</li>
                  <li>Develop a high level of competence in engineering and IT methods and applications</li>
                  <li>Communicate effectively and succinctly the results of technical studies (both verbally and in writing)</li>
                  <li>Nurture the desire for continuing professional growth and explore new horizons in technology</li>
                  <li>Imbue graduates with socially and morally sound motivations and principles</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mt-4">Core Values</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Academic Excellence</li>
                  <li>Integrity and Professional Leadership</li>
                  <li>Scholarly Research</li>
                  <li>Commitment to Service</li>
                  <li>Lifelong Learning</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mt-4">College Aim</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To become the premiere institution of higher learning in Valenzuela City</li>
                  <li>To produce competent and committed engineers and IT professionals</li>
                  <li>To contribute to the development of the City of Valenzuela and the nation</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mt-4">Academic Support &amp; Training</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Engineering seminars and review sessions for graduating students</li>
                  <li>Assessment examinations to monitor board exam readiness</li>
                  <li>Laboratory facilities for hands-on learning</li>
                  <li>Industry linkages and research engagements</li>
                </ul>
              </div>
            )}

            {activeTab === "Programs Offered" && (
              <div>
                {currentProgram && (
                  <div className="mt-6 rounded-lg border border-border bg-background p-5 md:p-7 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{currentProgram.name}</h3>
                    <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{currentProgram.overview}</p>
                  </div>

                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground">Student Outcomes</h4>
                    <ul className="mt-3 space-y-2 text-base md:text-lg text-muted-foreground">
                      {currentProgram.outcomes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#ef8a22] flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground">Curriculum / Focus Areas</h4>
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

                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground">Career Opportunities</h4>
                    <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-base md:text-lg text-muted-foreground">
                      {currentProgram.careers.map((career) => (
                        <li key={career} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#ef8a22] flex-shrink-0 mt-1" />
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                )}
              </div>
            )}

            {activeTab === "Admission" && (
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Admission Requirements</h2>

                <div>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Grade 12 students who are expected to graduate at the end of the Academic Year 2025-2026.</li>
                    <li>Graduate of Senior High School of the previous Academic Year (2024-2025 and below) who have not enrolled in any Colleges and or Universities.</li>
                    <li>College Transferee - the applicant must be an incoming 2nd year level student at the time of application for the PLV-CAT 2026.</li>
                    <li>Alternative Learning System (ALS) or Philippine Education Placement Test (PEPT) completers whose eligibility is equivalent to a Senior High School Graduate as stated on the Certificate of Rating.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Policies &amp; Qualifications</h3>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>The applicant must be a registered voter of Valenzuela City.</li>
                    <li>One (1) or both biological parents of the applicant must be a registered voter of Valenzuela City.</li>
                    <li>The applicant must be a Filipino citizen.</li>
                    <li>The applicant must comply with the Academic Residency Requirements. A graduate of any Public or Private School in Valenzuela City.</li>
                    <li>The applicant must comply with the Grade Requirements.</li>
                    <li>The applicant must TAKE and PASS the Pamantasan ng Lungsod ng Valenzuela College Admission Test for Academic Year 2026-2027 (PLV-CAT).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Academic Retention</h3>
                  <p>
                    A student, in any regular semester and regardless of year level, who meets any of the following failure criteria within a single semester, shall be recommended for shifting to another degree program, subject to academic evaluation:
                  </p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Students enrolled in twenty-four (24) units or more: accumulation of twelve (12) units or more of failed courses.</li>
                    <li>Students enrolled in fewer than twenty-four (24) units: failure of fifty percent (50%) or more of the total enrolled courses.</li>
                    <li>All requirements for an Incomplete (INC) grade must be completed on or before the last day of enrollment of the succeeding semester; otherwise, the INC shall be converted to a failing grade and counted for academic retention purposes.</li>
                    <li>Prerequisites for courses shall not be waived, except for students with fourth-year status, subject to Department evaluation.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Shifting Requirements</h3>
                  <p>A student applying for shifting to CEIT programs must meet all the following requirements:</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Must be an incoming second-year student.</li>
                    <li>A minimum grade of 2.50 in all General Education, PATHFIT, and NSTP courses.</li>
                    <li>Passing results in the shifting examination and interview.</li>
                    <li>Availability of slots in the receiving department.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Additional Information</h3>
                  <p className="font-semibold mt-2">Grading System</p>
                  <p>The University uses the ten-point grading system.</p>
                  <p className="mt-2">Grade point equivalent:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>1.00 = 97-100</li>
                    <li>1.25 = 94-96</li>
                    <li>1.50 = 91-93</li>
                    <li>1.75 = 88-90</li>
                    <li>2.00 = 85-87</li>
                    <li>2.25 = 82-84</li>
                    <li>2.50 = 79-81</li>
                    <li>2.75 = 76-78</li>
                    <li>3.00 = 75</li>
                    <li>5.00 = Failed</li>
                    <li>INC = Incomplete</li>
                    <li>W = Withdrawn</li>
                    <li>D = Dropped</li>
                    <li>U.D = Unofficially Dropped</li>
                  </ul>

                  <p className="font-semibold mt-4">Curriculum Offerings</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bachelor of Science in Civil Engineering (BSCE)</li>
                    <li>Bachelor of Science in Computer Engineering (BSCpE)</li>
                    <li>Bachelor of Science in Electronics Engineering (BSECE)</li>
                    <li>Bachelor of Science in Electrical Engineering (BSEE)</li>
                    <li>Bachelor of Science in Information Technology (BSIT)</li>
                  </ul>

                  <p className="font-semibold mt-4">Contact Information</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>CEIT Faculty Room: 352-7000 loc. 141</li>
                    <li>Dean&apos;s Office: 352-7000 loc. 140</li>
                    <li>IT Office: 352-7000 loc. 139</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
