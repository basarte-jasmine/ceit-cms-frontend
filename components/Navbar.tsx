"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // hide on scroll down, show on scroll up
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  const links = [
    { to: "/", label: "Home" },
    { to: "/academics", label: "Academics" },
    { to: "/academics/curriculum", label: "Curriculum" },
    { to: "/students", label: "Students" },
    { to: "/facility", label: "Facility" },
    { to: "/news", label: "News Page" },
    { to: "/newsletter", label: "CEIT Newsletter" },
    { to: "/administration", label: "Administration" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || 0;
      const goingDown = currentY > lastScrollY.current;

      // don't hide right at the top
      if (currentY < 20) {
        setIsHidden(false);
      } else if (goingDown) {
        setIsHidden(true);
        // close menus when hiding
        setMobileMenuOpen(false);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={[
        "sticky top-0 z-[90] bg-background border-b border-border",
        "transition-transform duration-300 ease-in-out",
        isHidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-16 flex items-center justify-between h-20">
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src="/CEIT_Logo.png"
            alt="PLV CEIT logo"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = pathname === link.to;

            return (
              <div key={link.to} className="relative">
                <Link
                  href={link.to}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-accent border-b-2 border-accent pb-1"
                      : "text-slate-600 hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 z-[100] overflow-hidden bg-background border-b border-border shadow-md transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-[calc(100vh-5rem)] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-background px-6 py-4 space-y-4 overflow-y-auto transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-2"
          }`}
          style={{ maxHeight: "calc(100vh - 5rem)" }}
        >
          {links.map((link) => {
            const isActive = pathname === link.to;

            return (
              <div key={link.to}>
                <Link
                  href={link.to}
                  onClick={handleLinkClick}
                  className={`block text-sm font-medium transition-colors py-2 ${
                    isActive ? "text-accent" : "text-slate-600 hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
