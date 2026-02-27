import Image from "next/image";
import { Facebook } from "lucide-react";

const orgLinks = [
  {
    name: "Association of Civil Engineering Students",
    link: "https://www.facebook.com/plv.aces",
    image: "/CE_Logo.png",
  },
  {
    name: "Association of Electrical Engineering Students",
    link: "https://www.facebook.com/PLVAEES2004",
    image: "/EE_Logo.png",
  },
  {
    name: "Valenzuela Information Technology Society",
    link: "https://www.facebook.com/ValenzuelaITSociety",
    image: "/vits-logo.png",
  },
];

const coreValues = [
  "Academic Excellence",
  "Integrity and Professional Leadership",
  "Scholarly Research",
  "Commitment to Service",
  "Life Long Learning",
];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden text-primary-foreground"
      style={{ background: "hsl(var(--navy-deep))" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,29,66,.72)_0%,rgba(7,29,66,.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(39,120,255,.18)_0,transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 bg-[linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100%]" />

      <div className="relative mx-auto max-w-[1480px] px-6 py-8 md:px-12">
        <div className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
          <div className="p-2 lg:pr-8">
            <h4 className="mb-3 text-[24px] font-bold leading-none text-[#ffd043]">Core Values</h4>
            <ul className="space-y-2">
              {coreValues.map((value) => (
                <li key={value}>
                  <p className="text-[15px] leading-relaxed text-white/85">{value}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-2 lg:border-l lg:border-white/20 lg:px-8">
            <h4 className="mb-3 text-[24px] font-bold leading-none text-[#ffd043]">Vision</h4>
            <p className="text-[15px] leading-relaxed text-white/85">
              Aims to become the premiere institution of higher learning providing the city with competent and committed engineers and IT professionals that will help the development of the city of Valenzuela and the nation.
            </p>
          </div>

          <div className="p-2 lg:border-l lg:border-white/20 lg:px-8">
            <h4 className="mb-3 text-[24px] font-bold leading-none text-[#ffd043]">Mission</h4>
            <p className="text-[15px] leading-relaxed text-white/85">
            To develop the student of the city of Valenzuela into top caliber engineers and IT professionals who are proficient, committed and environmentally aware with good leadership skills that will comply with the needs of the city and the nation.
            </p>
          </div>

          <div className="p-2 lg:border-l lg:border-white/20 lg:pl-8">
            <h4 className="mb-3 text-[24px] font-bold leading-none text-[#ffd043]">Our Address</h4>
            <p className="text-[15px] leading-relaxed text-white/85">
              Maysan Road corner Tongco Street, Maysan,
              <br />
              Valenzuela City 1440
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/20 pt-6">
          <div className="flex flex-wrap justify-center gap-3">
            {orgLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/15 transition-colors hover:bg-white/30"
                aria-label={item.name}
              >
                <Image src={item.image} alt={item.name} width={44} height={44} className="object-cover" />
              </a>
            ))}
            <a
              href="https://www.facebook.com/PamantasanNgLungsodNgValenzuelaOfficialAccount"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white transition-colors hover:bg-white/30"
              aria-label="PLV Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <p className="text-center text-[12px] text-[#ffd043]">COLLEGE OF ENGINEERING AND INFORMATION TECHNOLOGY</p>
          <p className="text-center text-[12px] text-white/70">© 2026 Pamantasan ng Lungsod ng Valenzuela. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
