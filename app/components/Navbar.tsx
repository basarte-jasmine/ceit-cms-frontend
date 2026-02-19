"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const departments = [
  { to: "/news?dept=ce", label: "CE" },
  { to: "/news?dept=ee", label: "EE" },
  { to: "/news?dept=it", label: "IT" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);

  // hide on scroll down, show on scroll up
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  const links = [
    { to: "/", label: "Home" },
    { to: "/academics", label: "Academics" },
    { to: "/students", label: "Students" },
    { to: "/news", label: "News" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setNewsDropdownOpen(false);
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
        setNewsDropdownOpen(false);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "sticky top-0 z-50 bg-background border-b border-border",
        "transition-transform duration-300 ease-in-out",
        isHidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-16 flex items-center justify-between h-20">
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src="/box-icon.svg"
            alt="PLV CEIT logo"
            width={42}
            height={42}
            className="rounded-full"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = pathname === link.to;
            const isNews = link.to === "/news";

            return (
              <div key={link.to} className="relative">
                {isNews ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setNewsDropdownOpen(true)}
                    onMouseLeave={() => setNewsDropdownOpen(false)}
                  >
                    <Link
                      href={link.to}
                      className={`text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                        isActive
                          ? "text-accent border-b-2 border-accent pb-1"
                          : "text-slate-600 hover:text-accent"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          newsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {newsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg py-2 animate-fade-in-pop">
                        {departments.map((dept) => (
                          <Link
                            key={dept.to}
                            href={dept.to}
                            onClick={handleLinkClick}
                            className="block px-4 py-2 text-sm text-slate-600 hover:text-accent hover:bg-secondary/50 transition-colors"
                          >
                            {dept.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
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
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in-pop">
          <div className="px-6 py-4 space-y-4">
            {links.map((link) => {
              const isActive = pathname === link.to;
              const isNews = link.to === "/news";

              return (
                <div key={link.to}>
                  {isNews ? (
                    <>
                      <Link
                        href={link.to}
                        onClick={handleLinkClick}
                        className={`block text-sm font-medium transition-colors flex items-center justify-between py-2 ${
                          isActive ? "text-accent" : "text-slate-600 hover:text-accent"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            newsDropdownOpen ? "rotate-180" : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setNewsDropdownOpen(!newsDropdownOpen);
                          }}
                        />
                      </Link>

                      {newsDropdownOpen && (
                        <div className="pl-4 space-y-2 mt-2 border-l-2 border-border">
                          {departments.map((dept) => (
                            <Link
                              key={dept.to}
                              href={dept.to}
                              onClick={handleLinkClick}
                              className="block py-2 text-sm text-slate-600 hover:text-accent transition-colors"
                            >
                              {dept.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.to}
                      onClick={handleLinkClick}
                      className={`block text-sm font-medium transition-colors py-2 ${
                        isActive ? "text-accent" : "text-slate-600 hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
