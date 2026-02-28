export type FacilityItem = {
  slug: string;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  galleryImages?: string[];
};

export const facilities: FacilityItem[] = [
  {
    slug: "computer-laboratory",
    title: "Computer Laboratory",
    image: "/2nd_comlab.png",
    shortDescription:
      "A laboratory with 40 WiFi-enabled desktop computers connected to the PLV World server.",
    fullDescription:
      "A laboratory comprises of 40 units of WiFi-enabled desktop computers also connected to the PLV World server in order for the students to make use of its programs and to monitor as well their attendance inside the laboratory. The laboratory caters computing activities from basic office suites such as word processing, slide presentations, spreadsheets, and database management systems to professional software such as CADs, animation software, game engines, graphic design applications, and video and audio editing tools.",
    galleryImages: ["/2nd_comlab.png", "/comblab1.jpg", "/comblab2.jpg", "/comblab3.jpg", "/comblab4.jpg"],
  },
  {
    slug: "drawing-room",
    title: "Drawing Room",
    image: "/Drawing room1.jpg",
    shortDescription:
      "Spacious and well-lit rooms with tilted drafting tables for engineering manual drawing work.",
    fullDescription:
      "Spacious and well-lit rooms consist of tilted drawing tables made of smooth-surfaced boards with steel frames, intended for manual drafting on large sheets of paper for engineering students.",
    galleryImages: ["/Drawing room1.jpg", "/drawing2.jpg", "/2nd_drawing.png"],
  },
  {
    slug: "materials-testing-laboratory",
    title: "Materials Testing Laboratory",
    image: "/materials testing laboratory-0.jpg",
    shortDescription:
      "Laboratory for testing the strength and properties of cement, concrete, soil, steel, and related materials.",
    fullDescription:
      "The Materials Testing Laboratory is equipped for different tests on construction materials such as cement, concrete, soil, and steel. It includes designated areas for Universal Testing Machine procedures, curing of concrete samples, and structural demonstrations using truss, beam, and column scale models.",
    galleryImages: ["/materials testing laboratory-0.jpg", "/materials testing laboratory-1.jpg", "/materials testing laboratory.jpg", "/utm room.jpg", "/curing area.jpg"],
  },
  {
    slug: "fluid-mechanics-laboratory",
    title: "Fluid Mechanics Laboratory",
    image: "/fluid mechanics lab-0.jpg",
    shortDescription:
      "Laboratory space for fluid mechanics activities and demonstrations in engineering courses.",
    fullDescription:
      "The material testing laboratory is provided with equipment for various testing of the strength of construction materials such as cement, concrete, soil, and steel. Areas for testing using the Universal Testing Machine, curing of concrete samples, and other structural testing demonstrations of trusses, beams, and column scale models are located in this laboratory.",
    galleryImages: ["/fluid mechanics lab-0.jpg", "/fluid mechanics lab.jpg"],
  },
  {
    slug: "electronics-engineering-laboratory",
    title: "Electronics Engineering Laboratory",
    image: "/electronics engineering lab-0.jpg",
    shortDescription:
      "Hands-on electronics laboratory for circuit, robotics, instrumentation, and communication courses.",
    fullDescription:
      "The Electronics Engineering Laboratory is utilized for teaching electronics-related courses such as Electronic Circuit Devices and Analysis, Logic Circuits and Switching Theory, Industrial Electronics, Robotics, Instrumentation and Control, and Communication Technology. The laboratory is equipped with apparatus for hands-on experiments that provide students with an avenue to apply the principles and theories of electronics engineering in actual or simulated environments. Inside the laboratory, students are encouraged to collaborate with others and use their creativity to solve electronics engineering problems.",
    galleryImages: ["/electronics engineering lab-0.jpg", "/electronics engineering lab.jpg", "/electrical engineering laboratory-0.jpg", "/electrical engineering laboratory.jpg"],
  },
  {
    slug: "mechanical-and-instrumentation-engineering-lab",
    title: "Mechanical and Instrumentation Engineering Lab",
    image: "/mechanical engineering lab-0.jpg",
    shortDescription:
      "Laboratory for electronics, instrumentation, robotics, and communication technology hands-on activities.",
    fullDescription:
      "The Electronics Engineering Laboratory is utilized for teaching electronics-related courses such as Electronic Circuit Devices and Analysis, Logic Circuits and Switching Theory, Industrial Electronics, Robotics, Instrumentation and Control, and Communication Technology. The laboratory is equipped with apparatus for hands-on experiments that provide students with an avenue to apply the principles and theories of electronics engineering in actual or simulated environments. Inside the laboratory, students are encouraged to collaborate with others and use their creativity to solve electronics engineering problems.",
    galleryImages: ["/mechanical engineering lab-0.jpg", "/mechanical engineering lab.jpg", "/electronics engineering lab-0.jpg", "/electronics engineering lab.jpg"],
  },
  {
    slug: "electrical-engineering-lab",
    title: "Electrical Engineering Lab",
    image: "/electrical engineering laboratory-0.jpg",
    shortDescription:
      "Hands-on electrical lab for machines, power systems, controls, and renewable energy applications.",
    fullDescription:
      "The electrical engineering laboratory offers hands-on simulations for key subjects such as power system analysis, AC and DC machines, electrical systems, and renewable energy design. Students gain practical experience operating equipment like motors and generators, learning principles such as synchronization, controls, and power flow. The lab also includes solar PV and wind turbine modules, smart grid applications, and maintenance exercises, allowing students to apply concepts both experimentally and in real-life scenarios.",
    galleryImages: ["/electrical engineering laboratory-0.jpg", "/electrical engineering laboratory.jpg"],
  },
  {
    slug: "ceit-building",
    title: "CEIT Building",
    image: "/ceitbuilding.jpg",
    shortDescription:
      "Main academic facility that houses classrooms, laboratories, and student support spaces.",
    fullDescription:
      "The CEIT Building serves as the primary venue for engineering and IT classes, laboratory activities, and selected student services.",
    galleryImages: ["/ceitbuilding.jpg", "/ce_exCElling-towards-the-future.png"],
  },
  {
    slug: "fifth-floor-classroom",
    title: "Classroom",
    image: "/5thfloorclassroom.jpg",
    shortDescription:
      "General classroom space used for lectures, discussions, and course-based activities.",
    fullDescription:
      "This classroom supports regular instruction for undergraduate courses and can be configured for lecture and collaborative learning sessions.",
    galleryImages: ["/5thfloorclassroom.jpg"],
  },
  {
    slug: "lecture-hall",
    title: "Lecture Hall",
    image: "/lecture hall.jpg",
    shortDescription:
      "Large-capacity hall for lectures, seminars, orientations, and academic events.",
    fullDescription:
      "The lecture hall is used for classes and college-wide presentations that require a larger audience setup. Seating, projection, and audio support are available depending on event requirements.",
    galleryImages: ["/lecture hall.jpg", "/lecturelab.jpg"],
  },
  {
    slug: "ceit-library",
    title: "CEIT Library",
    image: "/library_ceit.jpg",
    shortDescription:
      "Learning resource space for references, study sessions, and quiet academic work.",
    fullDescription:
      "The CEIT Library provides students with access to course references and a study-friendly environment for individual or small-group academic work.",
    galleryImages: ["/library_ceit.jpg"],
  },
  {
    slug: "quality-assurance-lab",
    title: "Quality Assurance Lab",
    image: "/quality_assurance_lab.jpg",
    shortDescription:
      "Dedicated space for quality checks, documentation activities, and process support.",
    fullDescription:
      "The Quality Assurance Lab supports accreditation and quality-related activities, including documentation, review sessions, and process coordination.",
    galleryImages: ["/quality_assurance_lab.jpg"],
  },
  {
    slug: "quiet-study-room",
    title: "Quiet Study Room",
    image: "/quiet study room.jpg",
    shortDescription:
      "Low-noise study room designed for focused reading, review, and academic preparation.",
    fullDescription:
      "The Quiet Study Room is intended for students who need a calm environment for concentrated work. It is commonly used for self-study, exam preparation, and individual research.",
    galleryImages: ["/quiet study room.jpg", "/studyroom.jpg", "/collab1.jpg"],
  },
];
