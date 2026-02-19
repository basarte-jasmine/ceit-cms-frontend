import { GraduationCap, Check, FileText } from "lucide-react";

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
    imageRight: true,
  },
  {
    name: "Electrical Engineering",
    description:
      "Our Electrical Engineering program focuses on the study and application of electricity, electronics, and electromagnetism, preparing students for careers in power systems, electronics design, and more.",
    specializations: [
      { title: "Power Systems", sub: "Generation, transmission, and distribution of electrical power" },
      { title: "Electronics and Embedded Systems", sub: "Circuit design, microprocessors, and control systems" },
    ],
    imageRight: false,
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
    imageRight: true,
  },
];

const officials = [
  { name: "Dr. Nedena C. Torralba", role: "University President" },
  { name: "Engr. Jordan N. Velasco", role: "Dean, College of Engineering and Information Technology" },
  { name: "Dr. Nelda Gene C. Mariano", role: "Vice President for Academic Affairs" },
  { name: "Dr. John Cabaddu", role: "Vice President for Administration" },
  { name: "Norie Caunda", role: "Secretary, College of Engineering and Information Technology" },
];

const Academics = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-secondary/60 py-12 md:py-14 border-b border-border">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12">
          <h1 className="text-5xl font-extrabold text-foreground">Academics</h1>
          <p className="text-base text-muted-foreground mt-2 max-w-2xl">
            Discover our programs designed to inspire, challenge, and prepare you for success in a rapidly changing world.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12">
          <div className="text-center mb-12">
            <GraduationCap className="w-8 h-8 text-accent mx-auto mb-2" />
            <h2 className="text-5xl font-bold text-foreground">Our Programs</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
              Our programs combine rigorous technical education with hands-on experience, preparing students to solve complex
              problems and lead innovation.
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((prog) => (
              <div
                key={prog.name}
                className={`flex flex-col md:flex-row gap-8 items-center ${!prog.imageRight ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 flex-shrink-0">
                  <div className="w-full h-56 md:h-64 bg-gray-300 rounded flex items-center justify-center text-gray-600 text-sm font-medium">
                    Image Placeholder
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold text-foreground">{prog.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{prog.description}</p>
                  <ul className="mt-4 space-y-2.5">
                    {prog.specializations.map((s) => (
                      <li key={s.title} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{s.title}</p>
                          <p className="text-xs text-muted-foreground">{s.sub}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 border-b border-border">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">Registrar's Office</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The Registrar's Office maintains academic records, coordinates course registration, and ensures the integrity of
            academic policies and procedures.
          </p>
          <div className="mt-5 bg-secondary/40 rounded-lg p-5 border border-border">
            <h4 className="text-sm font-bold text-foreground mb-3">Services</h4>
            <ul className="space-y-1.5">
              {[
                "Course Registration & Add/Drop",
                "Transcript Requests",
                "Degree Verification",
                "Graduation Processing",
              ].map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-accent" /> {s}
                </li>
              ))}
            </ul>
            <div className="mt-5 text-xs text-muted-foreground space-y-0.5 border-t border-border pt-4">
              <p>Contact Information:</p>
              <p>Telephone: 8352 7000 local 125</p>
              <p>Email: registrarsoffice_plv@yahoo.com</p>
              <p>Location: Maysan Road corner Tongco Street, Maysan, Valenzuela City, Valenzuela, Philippines</p>
              <p>Hours: Monday-Friday, 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12 text-center">
          <h2 className="text-5xl font-bold text-foreground">School Officials</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Meet the dedicated leaders who guide our College of Engineering and Information Technology.
          </p>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 mt-10">
            {officials.map((official) => (
              <div key={official.name} className="flex flex-col items-center w-44">
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs font-medium mb-3">
                  Photo
                </div>
                <p className="text-sm font-semibold text-foreground text-center">{official.name}</p>
                <p className="text-xs text-muted-foreground text-center mt-0.5">{official.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
