import Image from "next/image";
import { Shield, BookOpen, Briefcase, Heart } from "lucide-react";

const counsellingServices = [
  {
    icon: Heart,
    title: "Personal Counselling",
    sub: "Confidential one-on-one sessions to address personal concerns and emotional well-being.",
  },
  {
    icon: BookOpen,
    title: "Academic Guidance",
    sub: "Support for academic challenges, study skills, and educational planning.",
  },
  {
    icon: Briefcase,
    title: "Career Counselling",
    sub: "Assistance with career exploration, planning, and preparation for professional life.",
  },
];

const nstpPrograms = [
  {
    icon: Shield,
    name: "ROTC",
    desc: "Reserve Officers' Training Corps focuses on military training, discipline, and leadership development.",
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

const ojtSteps = [
  { num: 1, title: "Application & Eligibility Check", desc: "Submit your OJT application and verify your eligibility with your department." },
  { num: 2, title: "Company Placement", desc: "Get matched with partner companies or find your own placement with department approval." },
  { num: 3, title: "Training Period", desc: "Complete required hours while maintaining regular check-ins with your faculty supervisor." },
  { num: 4, title: "Evaluation & Completion", desc: "Submit final requirements and receive evaluation from both company and faculty supervisors." },
];

const Students = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <section className="bg-secondary/60 py-16 md:py-20 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-5 md:px-12">
          <h1 className="text-6xl md:text-7xl font-extrabold text-foreground">Student life</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Discover resources, programs, and opportunities designed to enrich your academic journey and personal growth.
          </p>
        </div>
      </section>

      {/* GUIDANCE & COUNSELLING */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-5 md:px-12 flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-extrabold text-foreground mb-6">Guidance &amp; Counselling</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Our Guidance and Counselling Center provides comprehensive support services to help you navigate academic
              challenges, personal concerns, and career decisions throughout your university journey.
            </p>
            <ul className="space-y-6">
              {counsellingServices.map((svc) => (
                <li key={svc.title} className="flex items-start gap-4">
                  <svc.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-bold text-foreground">{svc.title}</p>
                    <p className="text-base text-muted-foreground leading-relaxed mt-1">{svc.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 flex-shrink-0 flex justify-end">
            <div className="w-full max-w-650 h-110 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/Guidance.jpg"
                alt="Guidance & Counselling"
                width={500}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NSTP */}
      <section className="py-24 md:py-32 bg-secondary/40 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-5 md:px-12 text-center">
          <span className="inline-block bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full mb-6">
            Required Program
          </span>
          <h2 className="text-5xl font-extrabold text-foreground mb-6">National Service Training Program (NSTP)</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
            The NSTP aims to promote civic consciousness and defense preparedness among the youth while developing their
            physical, moral, spiritual, intellectual, and social well-being.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nstpPrograms.map((prog) => (
              <div key={prog.name} className="bg-background rounded-xl p-8 border border-border text-left shadow-sm hover:shadow-md transition">
                <prog.icon className="w-8 h-8 text-muted-foreground mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">{prog.name}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OJT */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-5 md:px-12 flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 flex-shrink-0">
            <div className="grid grid-cols-2 gap-3">
              <Image
                src="/ojt-image-1.jpg"
                alt="OJT Program 1"
                width={200}
                height={200}
                className="object-cover w-full h-auto rounded-lg"
              />
              <Image
                src="/ojt-image-2.jpg"
                alt="OJT Program 2"
                width={200}
                height={200}
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="inline-block bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full mb-6">
              Career Development
            </span>
            <h2 className="text-5xl font-extrabold text-foreground mb-6">On-The-Job Training (OJT)</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our OJT program provides valuable work experience in your field of study, helping you apply classroom knowledge to real-world situations and build professional connections.
            </p>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">OJT Process</h3>
              {ojtSteps.map((step) => (
                <div key={step.num} className="flex gap-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background font-bold text-lg flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;
