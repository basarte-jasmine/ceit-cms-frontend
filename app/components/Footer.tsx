import Link from "next/link";
import Image from "next/image";
import { Facebook } from "lucide-react";

const updates = [
  {
    name: "Association of Civil Engineering Students",
    link: "https://www.facebook.com/plv.aces",
  },
  {
    name: "Association of Electrical Engineering Students",
    link: "https://www.facebook.com/PLVAEES2004",
  },
  {
    name: "Valenzuela Information Technology Society",
    link: "https://www.facebook.com/ValenzuelaITSociety",
  },
];

// Navbar pages
const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/academics", label: "Academics" },
  { to: "/students", label: "Students" },
  { to: "/news", label: "News" },
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

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-12 py-8">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1.8fr_.85fr]">
          {/* Contact Section */}
          <div className="border-r border-white/10 pr-6">
            <div className="mb-4 flex items-start gap-3">
              <Image
                src="/box-icon.svg"
                alt="PLV CEIT logo"
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <h4 className="text-[24px] font-bold leading-none text-[#ffd043]">
                  Contact Us
                </h4>

                <a
                  href="https://www.facebook.com/plv.aces"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-[18px] font-semibold leading-tight text-white hover:text-[#ffd043] transition-colors"
                >
                  College Of Engineering And Information Technology
                </a>
              </div>
            </div>

            <div className="ml-[68px] space-y-1 text-[14px] text-white/80">
              <p>Maysan Road corner</p>
              <p>Tongco Street, Maysan,</p>
              <p>Valenzuela City 1440</p>
            </div>

            <div className="ml-[68px] mt-3 flex items-center gap-2">
              <a
                href="https://www.facebook.com/PamantasanNgLungsodNgValenzuelaOfficialAccount"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-white/15 p-1.5 text-white hover:bg-white/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="border-r border-white/10 pr-6">
            <h4 className="mb-4 text-[24px] font-bold leading-none text-[#ffd043]">
              Follow Us
            </h4>

            <div className="space-y-3">
              {updates.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded px-2 py-2 transition-colors hover:bg-white/10"
                >
                  {/* Placeholder Circle Logo */}
                  <div className="h-10 w-10 shrink-0 rounded-full overflow-hidden bg-white/20 border border-white/30 flex items-center justify-center">
                    <Image
                      src="/placeholder-logo.png"
                      alt="Department Logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>

                  <p className="text-[16px] leading-snug text-white/90 group-hover:text-white">
                    {item.name}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[24px] font-bold leading-none text-[#ffd043]">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.to} className="border-b border-white/20 pb-1.5">
                  <Link
                    href={item.to}
                    className="text-[16px] text-white/90 transition-colors hover:text-[#ffd043]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 border-t border-white/20 pt-5">
          <p className="text-[12px] text-white/70">
            © 2026 Copyright. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
