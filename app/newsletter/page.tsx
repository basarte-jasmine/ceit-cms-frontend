"use client";

import { useState } from "react";
import { BookOpen, Download, Calendar, Eye, Search, ChevronRight, Star } from "lucide-react";

const issues = [
  {
    id: 1,
    volume: "Vol. 5",
    issue: "Issue 2",
    title: "Engineering the Future: Innovation at CEIT",
    date: "February 2026",
    featured: true,
    coverColor: "from-[#1f2b55] to-[#162046]",
    accentColor: "#ef8a22",
    summary:
      "This issue highlights the groundbreaking research projects of our BSEE and BSIT students, faculty achievements, the ITlympics 2026 results, and a special feature on PLV-ACES joining the American Concrete Institute.",
    articles: [
      "From the Dean's Desk: A New Chapter for CEIT",
      "BSEE Students Win Regional Quiz Bee",
      "ITlympics 2026: VITS Hosts Biggest IT Competition Yet",
      "PLV-ACES: Building Bridges, Shaping Futures",
      "Faculty Spotlight: Engr. Jordan Velasco on Engineering Education",
    ],
    views: 1204,
    pages: 24,
  },
  {
    id: 2,
    volume: "Vol. 5",
    issue: "Issue 1",
    title: "Foundations: Celebrating CEIT's Growth",
    date: "October 2025",
    featured: false,
    coverColor: "from-[#b45309] to-[#d97706]",
    accentColor: "#fff",
    summary:
      "The first issue of Volume 5 celebrates the college's growing enrollment, new industry partnerships, and the remarkable performance of our graduates in the recent licensure examinations.",
    articles: [
      "CEIT at 23: A Legacy of Excellence",
      "New MOA with PHILEC: Opportunities for EE Students",
      "Topnotchers: CEIT Graduates Ace the Board Exams",
      "Research Corner: Sustainable Engineering Solutions",
      "Student Life: AEES Leadership Summit Recap",
    ],
    views: 987,
    pages: 20,
  },
  {
    id: 3,
    volume: "Vol. 4",
    issue: "Issue 2",
    title: "Resilience & Renewal: CEIT Post-Pandemic",
    date: "February 2025",
    featured: false,
    coverColor: "from-[#065f46] to-[#047857]",
    accentColor: "#fff",
    summary:
      "Reflecting on the college's return to full face-to-face classes, this issue features student testimonials, revamped laboratory facilities, and highlights from the 2025 CEIT Research Symposium.",
    articles: [
      "Back in the Halls: Students Return to Campus",
      "Lab Upgrades: Better Tools for Better Engineers",
      "Research Symposium 2025 Highlights",
      "Alumni Voices: Where Are They Now?",
      "VITS Goes Back to Basics: Fundamentals of IT",
    ],
    views: 834,
    pages: 22,
  },
  {
    id: 4,
    volume: "Vol. 4",
    issue: "Issue 1",
    title: "Digital Horizons: CEIT in the Modern Era",
    date: "October 2024",
    featured: false,
    coverColor: "from-[#1e3a8a] to-[#2563eb]",
    accentColor: "#fff",
    summary:
      "This issue explores the integration of digital tools in CEIT classrooms, the launch of the new IT laboratory, and interviews with industry professionals on the future of engineering.",
    articles: [
      "Digital Transformation in Engineering Education",
      "New IT Lab: State-of-the-Art Learning Environment",
      "Industry Talk: The Engineer of Tomorrow",
      "PLV-ACES Joins PICE as Student Chapter",
      "Math Wizards: CEIT Students Excel in Regional Math Olympiad",
    ],
    views: 712,
    pages: 18,
  },
];

export default function NewsletterPage() {
  const [search, setSearch] = useState("");
  const [activeVolume, setActiveVolume] = useState("All");

  const volumes = ["All", "Vol. 5", "Vol. 4"];
  const featured = issues[0];
  const rest = issues.slice(1);

  const filtered = rest.filter((issue) => {
    const matchVol = activeVolume === "All" || issue.volume === activeVolume;
    const matchSearch = issue.title.toLowerCase().includes(search.toLowerCase()) ||
      issue.summary.toLowerCase().includes(search.toLowerCase());
    return matchVol && matchSearch;
  });

  return (
    <main className="min-h-screen bg-[#f2f4fb]">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden py-16 md:py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner_academics.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/85 via-[#0d1f3c]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f2f4fb] to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-12">
          <div className="flex items-center gap-2 text-white/50 text-xs mb-4 uppercase tracking-widest"
            style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
            <span>Home</span><span className="text-[#ef8a22]">›</span><span className="text-white/80">Newsletter</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">CEIT Newsletter</h1>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#ef8a22] to-transparent" />
          <p className="mt-4 max-w-2xl text-white/85 leading-relaxed">
            Published stories, feature articles, and college highlights — the official publication of CEIT.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-5 md:px-12 py-10 md:py-14">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-5 h-5 text-[#ef8a22]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#ef8a22]"
            style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>Official College Publication</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#dfe3ef] to-transparent" />
        </div>

        {/* ── FEATURED ISSUE ── */}
        <div className="mb-10">
          <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${featured.coverColor} border border-white/10 shadow-xl`}>
            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            {/* Orange glow */}
            <div className="absolute top-0 right-0 w-80 h-80 blur-3xl opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #ef8a22, transparent 70%)" }} />

            <div className="relative grid md:grid-cols-[1fr_320px] gap-0">
              {/* Left: Content */}
              <div className="px-8 py-10 md:px-10 md:py-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-[#1f2b55] bg-[#ef8a22]"
                    style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                    <Star className="w-3 h-3" /> Latest Issue
                  </span>
                  <span className="text-white/50 text-xs">{featured.volume} · {featured.issue}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
                  {featured.title}
                </h2>
                <div className="flex items-center gap-3 text-white/50 text-xs mb-5"
                  style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {featured.date}</span>
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {featured.views.toLocaleString()} views</span>
                  <span>{featured.pages} pages</span>
                </div>

                <p className="text-white/75 text-sm leading-relaxed mb-6 max-w-xl">{featured.summary}</p>

                <div className="mb-7 space-y-1.5">
                  {featured.articles.map((article, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-white/80">
                      <ChevronRight className="w-3.5 h-3.5 text-[#ef8a22] flex-shrink-0" />
                      {article}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-[#1f2b55] bg-[#ef8a22] hover:opacity-90 transition-opacity"
                    style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                    <Eye className="w-4 h-4" /> Read Issue
                  </button>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white border border-white/30 hover:bg-white/10 transition-colors"
                    style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                    <Download className="w-4 h-4" /> Download PDF
                  </button>
                </div>
              </div>

              {/* Right: Magazine cover mockup */}
              <div className="hidden md:flex items-center justify-center px-8 py-10">
                <div className="relative w-48 h-64 rounded-xl shadow-2xl overflow-hidden border border-white/20"
                  style={{ background: "linear-gradient(160deg, #f2f4fb 0%, #e8ecf7 100%)" }}>
                  {/* Cover mockup */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-[#ef8a22]" />
                  <div className="p-4">
                    <p className="text-[8px] font-black uppercase tracking-widest text-[#ef8a22] mb-1"
                      style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>CEIT NEWSLETTER</p>
                    <p className="text-[10px] font-black text-[#1f2b55] leading-tight mb-3">{featured.volume} · {featured.issue}</p>
                    <div className="w-full h-20 rounded-lg bg-gradient-to-br from-[#dfe3ef] to-[#c8cfe8] mb-3 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-[#4e5a7b]/40" />
                    </div>
                    <p className="text-[9px] font-bold text-[#1f2b55] leading-snug">{featured.title}</p>
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="h-px bg-[#dfe3ef] mb-2" />
                      <p className="text-[8px] text-[#4e5a7b]">{featured.date} · PLV-CEIT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-8">

          {/* ── SIDEBAR ── */}
          <aside className="space-y-4">

            {/* Search */}
            <div className="rounded-2xl bg-white border border-[#dfe3ef] shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-[#dfe3ef]" style={{ background: "linear-gradient(135deg, #f7f8fd, #f2f4fb)" }}>
                <p className="text-xs font-bold uppercase tracking-widest text-[#4e5a7b]"
                  style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>Search Issues</p>
              </div>
              <div className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4e5a7b]" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search newsletter..."
                    className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-[#dfe3ef] bg-[#f7f8fd] text-[#1f2b55] placeholder-[#4e5a7b]/50 focus:outline-none focus:border-[#ef8a22]/50"
                  />
                </div>
              </div>
            </div>

            {/* Filter by volume */}
            <div className="rounded-2xl bg-white border border-[#dfe3ef] shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-[#dfe3ef]" style={{ background: "linear-gradient(135deg, #f7f8fd, #f2f4fb)" }}>
                <p className="text-xs font-bold uppercase tracking-widest text-[#4e5a7b]"
                  style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>Filter by Volume</p>
              </div>
              <div className="p-3 space-y-1">
                {volumes.map((vol) => (
                  <button
                    key={vol}
                    onClick={() => setActiveVolume(vol)}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
                    style={{
                      background: activeVolume === vol ? "#1f2b5510" : "transparent",
                      color: activeVolume === vol ? "#1f2b55" : "#4e5a7b",
                      borderLeft: activeVolume === vol ? "3px solid #ef8a22" : "3px solid transparent",
                      fontFamily: "'Trebuchet MS', sans-serif",
                    }}
                  >
                    {vol}
                    <span className="float-right text-xs text-[#4e5a7b]/60">
                      {vol === "All" ? issues.length : issues.filter((i) => i.volume === vol).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="rounded-2xl bg-white border border-[#dfe3ef] shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-[#dfe3ef]" style={{ background: "linear-gradient(135deg, #f7f8fd, #f2f4fb)" }}>
                <p className="text-xs font-bold uppercase tracking-widest text-[#4e5a7b]"
                  style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>Publication Stats</p>
              </div>
              <div className="px-5 py-4 space-y-3">
                {[
                  { label: "Total Issues", value: issues.length },
                  { label: "Total Views", value: issues.reduce((a, b) => a + b.views, 0).toLocaleString() },
                  { label: "Volumes Published", value: 5 },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-xs text-[#4e5a7b]">{stat.label}</span>
                    <span className="text-sm font-extrabold text-[#ef8a22]" style={{ fontFamily: "'Georgia', serif" }}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* ── ISSUES GRID ── */}
          <div className="space-y-5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xl font-extrabold text-[#1f2b55]">Past Issues</h3>
              <span className="text-xs text-[#4e5a7b]" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                {filtered.length} issue{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl bg-white border border-[#dfe3ef] px-8 py-16 text-center">
                <p className="text-[#4e5a7b] text-sm">No issues found.</p>
              </div>
            ) : (
              filtered.map((issue) => (
                <article
                  key={issue.id}
                  className="group rounded-2xl bg-white border border-[#dfe3ef] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="grid md:grid-cols-[160px_1fr] items-stretch">

                    {/* Cover mockup */}
                    <div className={`relative bg-gradient-to-br ${issue.coverColor} flex items-center justify-center p-5 min-h-[160px]`}>
                      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
                        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                      <div className="relative w-24 h-32 rounded-lg shadow-lg overflow-hidden bg-white/10 border border-white/20 flex flex-col p-2">
                        <div className="h-1 rounded-full bg-[#ef8a22] mb-2" />
                        <p className="text-[6px] font-black uppercase tracking-widest text-white/70 mb-1"
                          style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>CEIT</p>
                        <div className="flex-1 rounded bg-white/10 flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white/40" />
                        </div>
                        <p className="text-[5px] text-white/50 mt-2 leading-tight">{issue.volume} · {issue.issue}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#ef8a22]"
                            style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>{issue.volume} · {issue.issue}</span>
                          <span className="w-1 h-1 rounded-full bg-[#dfe3ef]" />
                          <span className="flex items-center gap-1 text-xs text-[#4e5a7b]">
                            <Calendar className="w-3 h-3" /> {issue.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-extrabold text-[#1f2b55] leading-tight mb-2">{issue.title}</h3>
                        <p className="text-sm text-[#4e5a7b] leading-relaxed line-clamp-2 mb-3">{issue.summary}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {issue.articles.slice(0, 3).map((a, i) => (
                            <span key={i} className="text-[10px] px-2.5 py-1 rounded-full border border-[#dfe3ef] bg-[#f7f8fd] text-[#4e5a7b]"
                              style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>{a}</span>
                          ))}
                          {issue.articles.length > 3 && (
                            <span className="text-[10px] px-2.5 py-1 rounded-full border border-[#dfe3ef] bg-[#f7f8fd] text-[#4e5a7b]"
                              style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>+{issue.articles.length - 3} more</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-[#4e5a7b]">
                          <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {issue.views.toLocaleString()}</span>
                          <span>{issue.pages} pages</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full border border-[#dfe3ef] text-[#4e5a7b] hover:bg-[#f2f4fb] transition-colors"
                            style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                            <Eye className="w-3.5 h-3.5" /> Read
                          </button>
                          <button className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-[#1f2b55] text-white hover:opacity-90 transition-opacity"
                            style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                            <Download className="w-3.5 h-3.5" /> PDF
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </article>
              ))
            )}
          </div>

        </div>
      </div>
    </main>
  );
}