"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Check, MapPin, Phone, Mail, Clock } from "lucide-react";
import { facilities } from "@/lib/facilities";

const studentOrgs = [
  { name: "Association of Civil Engineering Students", abbr: "ACES", image: "/CE_Logo.png", color: "#c8860a", program: "Civil Engineering" },
  { name: "Association of Electrical Engineering Students", abbr: "AEES", image: "/EE_Logo.png", color: "#1a5fa8", program: "Electrical Engineering" },
  { name: "Valenzuela Information Technology Society", abbr: "VITS", image: "/vits-logo.png", color: "#1d7a4e", program: "Information Technology" },
];

type OrgCardStyle = CSSProperties & Record<"--org-color", string>;

export default function Index() {
  const featuredFacilities = facilities.filter((f) => f.slug !== "ceit-building");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = featuredFacilities.length;

  useEffect(() => {
    if (totalSlides === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const goTo = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((index + totalSlides) % totalSlides);
      setIsTransitioning(false);
    }, 150);
  };

  const activeFacility = featuredFacilities[currentSlide] ?? null;
  const prevFacility = featuredFacilities[(currentSlide - 1 + totalSlides) % totalSlides];
  const nextFacility = featuredFacilities[(currentSlide + 1) % totalSlides];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#f9f8f5" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .ceit-root { font-family: 'Source Sans 3', sans-serif; }
        .display-font { font-family: 'Playfair Display', Georgia, serif; }

        .hero-bg {
          background: linear-gradient(135deg, #0c1e3c 0%, #162d56 40%, #1a3566 70%, #0f2040 100%);
          position: relative;
          overflow: hidden;
        }
        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }
        .hero-accent-line {
          width: 4px;
          height: 60px;
          background: linear-gradient(180deg, #e8a020, #f5c842);
          border-radius: 2px;
          display: inline-block;
        }
        .facility-card-main {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.25), 0 4px 16px rgba(0,0,0,0.1);
          transition: opacity 0.3s ease;
        }
        .facility-side-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .facility-side-card:hover {
          background: rgba(255,255,255,0.15);
          transform: scale(1.02);
        }
        .slide-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .slide-dot.active {
          background: #e8a020;
          width: 28px;
          border-radius: 4px;
        }
        .nav-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.08);
          color: white;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s ease;
          backdrop-filter: blur(4px);
        }
        .nav-btn:hover { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.7); }

        .stat-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 20px 24px;
          text-align: center;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .stat-card:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }

        .section-eyebrow {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e8a020;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .section-eyebrow::before {
          content: '';
          display: block;
          width: 32px;
          height: 2px;
          background: #e8a020;
          border-radius: 1px;
        }

        .org-card {
          background: white;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          border: 1px solid #eee;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .org-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 4px;
          background: var(--org-color);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }
        .org-card:hover::before { transform: scaleX(1); }
        .org-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }

        .dean-section {
          background: linear-gradient(135deg, #0c1e3c 0%, #162d56 100%);
          position: relative;
          overflow: hidden;
        }
        .dean-section::after {
          content: '';
          position: absolute;
          top: -50%; right: -20%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(232,160,32,0.08), transparent 70%);
          pointer-events: none;
        }
        .dean-img-frame {
          position: relative;
          display: inline-block;
        }
        .dean-img-frame::before {
          content: '';
          position: absolute;
          inset: -12px;
          border: 2px solid rgba(232,160,32,0.4);
          border-radius: 20px;
          z-index: 0;
        }
        .dean-img-frame::after {
          content: '';
          position: absolute;
          bottom: -20px; right: -20px;
          width: 120px; height: 120px;
          background: linear-gradient(135deg, #e8a020, #f5c842);
          border-radius: 12px;
          z-index: -1;
          opacity: 0.5;
        }

        .registrar-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.08);
          border: 1px solid #e8eaf0;
          overflow: hidden;
        }
        .service-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid #f0f1f5;
          font-family: 'Source Sans 3', sans-serif;
          font-size: 15px;
          color: #2d3561;
          font-weight: 500;
        }
        .service-item:last-child { border-bottom: none; }
        .check-icon {
          width: 24px; height: 24px;
          background: #fff8ee;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .facilities-grid-preview {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 40px;
        }
        @media (max-width: 768px) {
          .facilities-grid-preview { grid-template-columns: 1fr; }
          .dean-layout { flex-direction: column !important; gap: 34px !important; }
          .hero-main-grid { grid-template-columns: 1fr !important; }
          .facility-side-panel { display: none !important; }
          .facility-main-grid { grid-template-columns: 1fr !important; }
          .facility-main-image { min-height: 220px !important; }
          .facility-main-content { padding: 24px 20px !important; }
          .dean-photo-wrap {
            max-width: 360px !important;
            min-height: 430px !important;
            margin: 0 auto !important;
          }
          .dean-photo-card {
            width: 245px !important;
            height: 320px !important;
            border-radius: 14px !important;
          }
        }

        .facility-thumb {
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 4/3;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .facility-thumb:hover { transform: scale(1.02); }
        .facility-thumb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(10,20,50,0.85) 100%);
          display: flex;
          align-items: flex-end;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .facility-thumb:hover .facility-thumb-overlay { opacity: 1; }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 24px;
        }
        @media (max-width: 640px) { .contact-grid { grid-template-columns: 1fr; } }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: #f9f9fb;
          border-radius: 12px;
          border: 1px solid #eaecf2;
        }
        .contact-icon {
          width: 36px; height: 36px;
          background: linear-gradient(135deg, #e8a020, #f5c842);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .text-link {
          text-decoration: underline;
          text-underline-offset: 4px;
          user-select: text;
          -webkit-user-select: text;
          cursor: pointer;
        }
        .hero-inner,
        .about-inner,
        .dean-inner,
        .registrar-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .registrar-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 900px) {
          .about-grid,
          .registrar-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 640px) {
          .hero-inner { padding: 24px 16px 28px !important; }
          .hero-badge { margin-bottom: 18px !important; }
          .hero-heading { margin-bottom: 22px !important; gap: 12px !important; }
          .hero-title {
            font-size: clamp(32px, 11vw, 44px) !important;
            line-height: 1.06 !important;
          }
          .hero-subtitle {
            font-size: 14px !important;
            line-height: 1.6 !important;
            margin-top: 10px !important;
            max-width: 100% !important;
          }
          .hero-main-grid { gap: 10px !important; }
          .facility-card-main { border-radius: 12px !important; }
          .hero-controls {
            margin-top: 14px !important;
            gap: 10px !important;
            flex-wrap: wrap !important;
          }
          .hero-view-all {
            margin-right: 0 !important;
            font-size: 12px !important;
          }
          .about-section,
          .dean-section-pad,
          .registrar-section {
            padding: 48px 16px !important;
          }
          .about-title {
            font-size: clamp(36px, 9vw, 44px) !important;
            line-height: 1.02 !important;
          }
          .about-copy {
            font-size: 14px !important;
            line-height: 1.7 !important;
          }
          .org-list { gap: 14px !important; }
          .org-card { padding: 16px 14px !important; }
          .org-card p { word-break: break-word; }
          .dean-copy {
            width: 100% !important;
            text-align: left !important;
          }
          .dean-title {
            font-size: clamp(42px, 10vw, 52px) !important;
            line-height: 1.02 !important;
          }
          .dean-text {
            font-size: 14px !important;
            line-height: 1.75 !important;
          }
          .registrar-title {
            font-size: clamp(34px, 9vw, 42px) !important;
          }
        }
      `}</style>

      <div className="ceit-root">

        {/* ─── HERO ─── */}
        <section className="hero-bg">
          <div className="hero-inner" style={{ padding: "48px 24px 52px" }}>

            {/* Top badge */}
            <div className="hero-badge" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.25)" }}>
                <Image src="/CEIT_Logo.png" alt="CEIT" width={40} height={40} style={{ objectFit: "cover" }} />
              </div>
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                PLV · CEIT Campus
              </span>
            </div>

            {/* Headline */}
            <div className="hero-heading" style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 48 }}>
              <div className="hero-accent-line" style={{ marginTop: 8, flexShrink: 0 }} />
              <div>
                <h1 className="display-font hero-title" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: "white", lineHeight: 1.08, margin: 0, letterSpacing: "-0.02em" }}>
                  Discover Our <span style={{ color: "#f5c842" }}>World-Class</span> Facilities
                </h1>
                <p className="hero-subtitle" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.72)", marginTop: 16, maxWidth: 480, lineHeight: 1.65, fontWeight: 300 }}>
                  Explore state-of-the-art learning spaces, laboratories, and support centers across the CEIT campus.
                </p>
              </div>
            </div>

            {/* Facility Carousel */}
            <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 80px", gap: 12, alignItems: "stretch" }} className="hero-main-grid">
              {/* Prev */}
              <Link
                href={prevFacility ? `/facility/${prevFacility.slug}` : "/facility"}
                className="facility-side-card facility-side-panel"
                style={{ border: "none", padding: 0, textAlign: "left", minHeight: 300, position: "relative", display: "block" }}
                aria-label={prevFacility ? `Open ${prevFacility.title}` : "Open facility"}
              >
                {prevFacility && (
                  <>
                    <Image src={prevFacility.image} alt={prevFacility.title} fill style={{ objectFit: "cover", opacity: 0.6 }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(8,16,36,0.7))" }} />
                    <div style={{ position: "absolute", bottom: 12, left: 8, right: 8 }}>
                      <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.8)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", writingMode: "vertical-rl", transform: "rotate(180deg)", margin: "0 auto" }}>{prevFacility.title}</p>
                    </div>
                  </>
                )}
              </Link>

              {/* Main Active */}
              <div className="facility-card-main" style={{ opacity: isTransitioning ? 0.5 : 1 }}>
                <div className="facility-main-grid" style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                  <Link
                    href={activeFacility ? `/facility/${activeFacility.slug}` : "/facility"}
                    className="facility-main-image"
                    style={{ position: "relative", minHeight: 320, overflow: "hidden", display: "block" }}
                    aria-label={activeFacility ? `Open ${activeFacility.title}` : "Open facility"}
                  >
                    {activeFacility && (
                      <>
                        <Image src={activeFacility.image} alt={activeFacility.title} fill style={{ objectFit: "cover" }} />
                        <div style={{ position: "absolute", top: 16, left: 16 }}>
                          <span style={{ background: "#e8a020", color: "white", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 20, fontFamily: "'Source Sans 3', sans-serif" }}>
                            Featured
                          </span>
                        </div>
                      </>
                    )}
                  </Link>
                  <div className="facility-main-content" style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8a020", marginBottom: 10 }}>
                      Campus Facility
                    </p>
                      <h2 className="display-font" style={{ fontSize: "clamp(24px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 14 }}>
                        <Link
                          href={activeFacility ? `/facility/${activeFacility.slug}` : "/facility"}
                          className="text-link"
                          style={{ color: "#111d3a" }}
                          aria-label={activeFacility ? `Open ${activeFacility.title}` : "Open facility"}
                        >
                          {activeFacility?.title ?? "Facility"}
                      </Link>
                    </h2>
                    <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 15, color: "#5a6480", lineHeight: 1.7, marginBottom: 24, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {activeFacility?.shortDescription ?? "View complete facility details."}
                    </p>
                    <Link
                      href={activeFacility ? `/facility/${activeFacility.slug}` : "/facility"}
                      className="text-link"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, color: "#162d56", fontFamily: "'Source Sans 3',sans-serif", width: "fit-content" }}
                      aria-label={activeFacility ? `Explore ${activeFacility.title}` : "Explore facility"}
                    >
                      Explore this space
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Next */}
              <Link
                href={nextFacility ? `/facility/${nextFacility.slug}` : "/facility"}
                className="facility-side-card facility-side-panel"
                style={{ border: "none", padding: 0, textAlign: "left", minHeight: 300, position: "relative", display: "block" }}
                aria-label={nextFacility ? `Open ${nextFacility.title}` : "Open facility"}
              >
                {nextFacility && (
                  <>
                    <Image src={nextFacility.image} alt={nextFacility.title} fill style={{ objectFit: "cover", opacity: 0.6 }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(8,16,36,0.7))" }} />
                    <div style={{ position: "absolute", bottom: 12, left: 8, right: 8 }}>
                      <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.8)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", writingMode: "vertical-rl", transform: "rotate(180deg)", margin: "0 auto" }}>{nextFacility.title}</p>
                    </div>
                  </>
                )}
              </Link>
            </div>

            {/* Controls row */}
            <div className="hero-controls" style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                {featuredFacilities.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} className={`slide-dot${i === currentSlide ? " active" : ""}`} aria-label={`Slide ${i + 1}`} />
                ))}
                <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginLeft: 12 }}>
                  {currentSlide + 1} / {totalSlides}
                </span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <Link href="/facility" className="text-link hero-view-all" style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", marginRight: 12, display: "flex", alignItems: "center", gap: 6 }}>
                  View all <ArrowRight size={14} />
                </Link>
                <button className="nav-btn" onClick={() => goTo(currentSlide - 1)}><ChevronLeft size={18} /></button>
                <button className="nav-btn" onClick={() => goTo(currentSlide + 1)}><ChevronRight size={18} /></button>
              </div>
            </div>
          </div>

        </section>

        {/* ─── ABOUT THE COLLEGE ─── */}
        <section className="about-section" style={{ background: "#f9f8f5", padding: "80px 24px" }}>
          <div className="about-inner">
            <div className="about-grid">
              <div>
                <div className="section-eyebrow" style={{ marginBottom: 20 }}>About the College</div>
                <h2 className="display-font about-title" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: "#0f1e3c", lineHeight: 1.1, marginBottom: 24 }}>
                  College of Engineering &amp; Information Technology
                </h2>
                <p className="about-copy" style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 16, color: "#5a6480", lineHeight: 1.8, marginBottom: 20 }}>
                  PLV's CEIT is committed to producing competent, innovative, and socially responsible engineers and IT professionals ready to meet the demands of a rapidly evolving world.
                </p>
                <p className="about-copy" style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 16, color: "#5a6480", lineHeight: 1.8, marginBottom: 32 }}>
                  Our three flagship programs — Civil Engineering, Electrical Engineering, and Information Technology — are supported by industry-aligned curricula and dedicated student organizations.
                </p>
                <Link href="/academics" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#0f1e3c", color: "white", padding: "14px 28px", borderRadius: 50, fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, fontWeight: 700, textDecoration: "none", letterSpacing: "0.04em", transition: "all 0.2s" }}>
                  Explore Programs <ArrowRight size={16} />
                </Link>
              </div>
              <div className="org-list" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }}>
                {studentOrgs.map((org, i) => (
                  <div key={org.abbr} className="org-card" style={{ "--org-color": org.color, display: "flex", alignItems: "center", gap: 20, textAlign: "left", padding: "20px 24px" } as OrgCardStyle}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `2px solid ${org.color}22` }}>
                      <Image src={org.image} alt={org.name} width={64} height={64} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: org.color, marginBottom: 4 }}>{org.abbr}</p>
                      <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, fontWeight: 600, color: "#1a2340", marginBottom: 2 }}>{org.program}</p>
                      <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: "#8a93ae" }}>{org.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── MEET THE DEAN ─── */}
        <section className="dean-section">
          <div className="dean-inner dean-section-pad" style={{ padding: "80px 24px" }}>
            <div className="dean-layout" style={{ display: "flex", gap: 64, alignItems: "center" }}>
              <div className="dean-photo-wrap" style={{ flexShrink: 0, position: "relative", width: "100%", maxWidth: 500, minHeight: 560, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                <div
                  style={{
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "72%",
                    height: "74%",
                    borderTopRightRadius: 130,
                    borderBottomRightRadius: 38,
                    background: "linear-gradient(135deg, #e39c13 0%, #f3c847 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 36,
                    left: "60%",
                    width: 4,
                    height: "84%",
                    background: "rgba(255,255,255,0.32)",
                    borderRadius: 3,
                  }}
                />
                <div style={{ position: "relative", zIndex: 2, marginBottom: 18 }}>
                  <div
                    className="dean-photo-card"
                    style={{
                      width: 300,
                      height: 390,
                      borderRadius: 14,
                      overflow: "hidden",
                      border: "6px solid #0b0f1a",
                      boxShadow: "0 16px 34px rgba(0,0,0,0.35)",
                      position: "relative",
                      background: "#0b0f1a",
                    }}
                  >
                    <Image src="/Engr-Jordan.jpg" alt="Dean Engr. Jordan Velasco" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                  </div>
                </div>
              </div>
              <div className="dean-copy">
                <div className="section-eyebrow" style={{ marginBottom: 20, color: "#f5c842" }}>
                  <span style={{ width: 32, height: 2, background: "#f5c842", borderRadius: 1, display: "inline-block" }} />
                  Meet the Dean
                </div>
                <h2 className="display-font dean-title" style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: 24 }}>
                  Engr. Jordan<br />Velasco
                </h2>
                <p className="dean-text" style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 16, color: "rgba(255,255,255,0.72)", lineHeight: 1.8, marginBottom: 12, maxWidth: 520 }}>
                  Under his visionary guidance, the College of Engineering and Information Technology continues to uphold its mission of producing future-ready engineers and IT professionals.
                </p>
                <p className="dean-text" style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
                  His leadership focuses on equipping graduates with the technical skills, professional ethics, and innovative mindset needed to meet evolving industry demands.
                </p>
                <Link href="/administration" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "2px solid rgba(255,255,255,0.4)", color: "white", padding: "14px 28px", borderRadius: 50, fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "all 0.2s", letterSpacing: "0.04em" }}>
                  Meet School Officials <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── REGISTRAR'S OFFICE ─── */}
        <section className="registrar-section" style={{ background: "#f9f8f5", padding: "80px 24px", borderTop: "1px solid #eaecf0" }}>
          <div className="registrar-inner">
            <div className="section-eyebrow" style={{ marginBottom: 16 }}>Administrative Services</div>
            <h2 className="display-font registrar-title" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#0f1e3c", lineHeight: 1.1, marginBottom: 8 }}>
              Registrar's Office
            </h2>
            <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 16, color: "#5a6480", marginBottom: 40, maxWidth: 600, lineHeight: 1.7 }}>
              The Registrar's Office maintains academic records, coordinates course registration, and ensures the integrity of academic policies and procedures.
            </p>

            <div className="registrar-grid">
              <div className="registrar-card">
                <div style={{ padding: "28px 28px 8px", borderBottom: "1px solid #f0f1f5" }}>
                  <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8a020", marginBottom: 4 }}>Services Offered</p>
                  <h3 className="display-font" style={{ fontSize: 22, fontWeight: 700, color: "#0f1e3c" }}>Academic Services</h3>
                </div>
                <div style={{ padding: "8px 28px 24px" }}>
                  {["Course Registration & Add/Drop", "Transcript Requests", "Degree Verification", "Graduation Processing"].map((service) => (
                    <div key={service} className="service-item">
                      <div className="check-icon">
                        <Check size={13} color="#e8a020" strokeWidth={3} />
                      </div>
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              <div className="registrar-card">
                <div style={{ padding: "28px 28px 8px", borderBottom: "1px solid #f0f1f5" }}>
                  <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8a020", marginBottom: 4 }}>Get in Touch</p>
                  <h3 className="display-font" style={{ fontSize: 22, fontWeight: 700, color: "#0f1e3c" }}>Contact Information</h3>
                </div>
                <div style={{ padding: "20px 28px" }}>
                  <div className="contact-grid">
                    {[
                      { icon: Phone, label: "Telephone", value: "8352 7000 local 125" },
                      { icon: Mail, label: "Email", value: "registrarsoffice_plv@yahoo.com" },
                      { icon: MapPin, label: "Location", value: "Maysan Road corner Tongco St., Valenzuela City" },
                      { icon: Clock, label: "Office Hours", value: "Mon–Fri, 8:00 AM – 5:00 PM" },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="contact-item">
                        <div className="contact-icon"><Icon size={16} color="white" /></div>
                        <div>
                          <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a93ae", marginBottom: 2 }}>{label}</p>
                          <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: "#1a2340", fontWeight: 500 }}>{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
