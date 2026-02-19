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
      <section className="bg-secondary/60 py-12 md:py-14 border-b border-border">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12">
          <h1 className="text-5xl font-extrabold text-foreground">Student life</h1>
          <p className="text-base text-muted-foreground mt-2 max-w-md">
            Discover resources, programs, and opportunities designed to enrich your academic journey and personal growth.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 border-b border-border">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12 flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold text-foreground">Guidance &amp; Counselling</h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Our Guidance and Counselling Center provides comprehensive support services to help you navigate academic
              challenges, personal concerns, and career decisions throughout your university journey.
            </p>
            <ul className="mt-6 space-y-4">
              {counsellingServices.map((svc) => (
                <li key={svc.title} className="flex items-start gap-3">
                  <svc.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{svc.title}</p>
                    <p className="text-xs text-muted-foreground">{svc.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 flex-shrink-0">
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
              Image Placeholder
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/40 border-b border-border">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12 text-center">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded mb-4">
            Required Program
          </span>
          <h2 className="text-5xl font-bold text-foreground">National Service Training Program (NSTP)</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-lg mx-auto leading-relaxed">
            The NSTP aims to promote civic consciousness and defense preparedness among the youth while developing their
            physical, moral, spiritual, intellectual, and social well-being.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {nstpPrograms.map((prog) => (
              <div key={prog.name} className="bg-background rounded-xl p-6 border border-border text-left">
                <prog.icon className="w-6 h-6 text-muted-foreground mb-4" />
                <h3 className="text-3xl font-bold text-foreground">{prog.name}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12 flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/2 grid grid-cols-2 gap-3">
            <div className="bg-gray-300 h-52 rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">Image Placeholder</div>
            <div className="bg-gray-400 h-52 rounded-lg mt-8 flex items-center justify-center text-gray-600 text-sm font-medium">Image Placeholder</div>
          </div>

          <div className="md:w-1/2">
            <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded mb-3">
              Career Development
            </span>
            <h2 className="text-5xl font-bold text-foreground">On-The-Job Training (OJT)</h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Our OJT program provides valuable work experience in your field of study, helping you apply classroom knowledge
              to real-world situations and build professional connections.
            </p>
            <h4 className="text-sm font-bold text-foreground mt-6 mb-4">OJT Process</h4>
            <ol className="space-y-4">
              {ojtSteps.map((step) => (
                <li key={step.num} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;
