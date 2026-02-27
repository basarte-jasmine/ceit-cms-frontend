import Image from "next/image";
import { GraduationCap, Check, FileText } from "lucide-react";

const programs = [
  {
    name: "Civil Engineering",
    description:
      "Our Civil Engineering program prepares students to design, build, and maintain the infrastructure that supports modern society—from bridges and buildings to water systems and transportation networks.",
    image: "/ce-program.jpg",
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
    image: "/ee-program.jpg",
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
    image: "/it-program.jpg",
    specializations: [
      { title: "Software Development", sub: "Programming, web development, and application design" },
      { title: "Network Administration", sub: "Network design, security, and management" },
      { title: "Cybersecurity", sub: "Threat analysis, security protocols, and digital forensics" },
    ],
    imageRight: true,
  },
];

const Academics = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="page-hero-gradient py-16 md:py-20 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-5 md:px-12">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white">Academics</h1>
          <p className="text-lg text-white/90 mt-4 max-w-2xl">
            Discover our programs designed to inspire, challenge, and prepare you for success in a rapidly changing world.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-5 md:px-12">
          <div className="text-center mb-16">
            <GraduationCap className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-5xl font-extrabold text-foreground">Our Programs</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Our programs combine rigorous technical education with hands-on experience, preparing students to solve complex
              problems and lead innovation.
            </p>
          </div>

          <div className="space-y-20">
            {programs.map((prog) => (
              <div
                key={prog.name}
                className={`flex flex-col lg:flex-row gap-16 items-start ${!prog.imageRight ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="lg:w-1/2 flex-shrink-0">
                  <Image
                    src={prog.image}
                    alt={prog.name}
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-4xl font-extrabold text-foreground">{prog.name}</h3>
                  <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{prog.description}</p>
                  <ul className="mt-8 space-y-4">
                    {prog.specializations.map((s) => (
                      <li key={s.title} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-base font-semibold text-foreground">{s.title}</p>
                          <p className="text-sm text-muted-foreground mt-1">{s.sub}</p>
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
