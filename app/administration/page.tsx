import Image from "next/image";

const administrators = [
  {
    name: "Engr. Jordan Velasco",
    role: "Dean, College of Engineering and Information Technology",
    image: "/Engr-Jordan.jpg",
    bio: "Provides strategic leadership and oversees CEIT academic quality, student development, and institutional partnerships.",
  },
  {
    name: "Academic Affairs Office",
    role: "Program and Curriculum Management",
    image: "/CEIT_Logo.png",
    bio: "Supports curriculum implementation, faculty coordination, and continuous improvement initiatives across CEIT programs.",
  },
  {
    name: "Student Services Office",
    role: "Student Support and Engagement",
    image: "/PLV_LOGO.png",
    bio: "Handles student records support, advisories, and co-curricular coordination to strengthen student success and welfare.",
  },
];

const officials = [
  { name: "Dr. Nedena C. Torralba", role: "University President", image: "/PLV_LOGO.png" },
  { name: "Engr. Jordan N. Velasco", role: "Dean, College of Engineering and Information Technology", image: "/Engr-Jordan.jpg" },
  { name: "Dr. Nelda Gene C. Mariano", role: "Vice President for Academic Affairs", image: "/CEIT_Logo.png" },
  { name: "Dr. John Cabaddu", role: "Vice President for Administration", image: "/PLV_LOGO.png" },
  { name: "Norie Caunda", role: "Secretary, College of Engineering and Information Technology", image: "/CEIT_Logo.png" },
];

const AdministrationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border page-hero-gradient py-14 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">Administration</h1>
          <p className="mt-5 max-w-3xl text-base md:text-lg text-white/90 leading-relaxed">
            Meet the administrators and school officials who lead CEIT programs, student services, and institutional development.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-12 text-center">
          <h2 className="text-5xl font-extrabold text-foreground">School Officials</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Meet the dedicated leaders who guide our College of Engineering and Information Technology.
          </p>
          <div className="flex flex-wrap justify-center gap-x-20 gap-y-16 mt-16">
            {officials.map((official) => (
              <div key={official.name} className="flex flex-col items-center w-56">
                <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center overflow-hidden mb-6 border border-border">
                  <Image
                    src={official.image}
                    alt={official.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-bold text-foreground text-center">{official.name}</p>
                <p className="text-base text-muted-foreground text-center mt-2">{official.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdministrationPage;

