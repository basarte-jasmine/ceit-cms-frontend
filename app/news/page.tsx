"use client";

import { useState } from "react";
import { Newspaper, ThumbsUp, MessageCircle, Share2, ExternalLink, Search, Filter } from "lucide-react";

const categories = ["All", "Announcements", "Events", "Achievements", "Partnerships"];

const fbPosts = [
  {
    id: 1,
    category: "Announcements",
    date: "February 28, 2026",
    time: "10:32 AM",
    title: "Enrollment for AY 2026–2027 Now Open!",
    content:
      "📢 OFFICIAL ANNOUNCEMENT\n\nThe College of Engineering and Information Technology (CEIT) is pleased to announce that enrollment for Academic Year 2026–2027 is now officially open!\n\nAll incoming freshmen, transferees, and continuing students are advised to coordinate with their respective departments for enrollment schedules and requirements.\n\nFor inquiries, contact the Dean's Office at local 140.",
    image: true,
    likes: 248,
    comments: 34,
    shares: 91,
    tag: "Enrollment",
  },
  {
    id: 2,
    category: "Achievements",
    date: "February 20, 2026",
    time: "3:15 PM",
    title: "CEIT Students Top Regional Engineering Quiz Bee",
    content:
      "🏆 CONGRATULATIONS!\n\nWe are proud to announce that our BSEE students from PLV-CEIT clinched 1st place in the Regional Engineering Quiz Bee held last February 18, 2026 at Polytechnic University of the Philippines.\n\nThis achievement reflects the dedication of our students and faculty in upholding academic excellence. Mabuhay kayo!\n\n#PLVStrong #CEITPride",
    image: true,
    likes: 512,
    comments: 67,
    shares: 143,
    tag: "Achievement",
  },
  {
    id: 3,
    category: "Events",
    date: "February 14, 2026",
    time: "9:00 AM",
    title: "ITlympics 2026 — Registration Now Open",
    content:
      "💻 VITS presents: ITlympics 2026!\n\nThe annual IT competition organized by the Valenzuela Information Technology Society (VITS) is back! Registration is now open for all college students in Metro Manila.\n\nEvents include:\n• Web Design Challenge\n• Algorithm Sprint\n• Network Troubleshooting\n• UI/UX Showdown\n\nRegister at the VITS Facebook page. Limited slots only!",
    image: true,
    likes: 389,
    comments: 52,
    shares: 118,
    tag: "Event",
  },
  {
    id: 4,
    category: "Partnerships",
    date: "February 5, 2026",
    time: "2:00 PM",
    title: "CEIT Signs MOA with PHILEC Corporation",
    content:
      "🤝 PARTNERSHIP ANNOUNCEMENT\n\nPLV-CEIT has officially signed a Memorandum of Agreement (MOA) with PHILEC Corporation, paving the way for internship opportunities, industry mentorship, and collaborative research projects for our Electrical Engineering students.\n\nThis partnership strengthens our commitment to producing industry-ready graduates. Thank you, PHILEC!",
    image: true,
    likes: 204,
    comments: 19,
    shares: 76,
    tag: "Partnership",
  },
  {
    id: 5,
    category: "Announcements",
    date: "January 28, 2026",
    time: "11:45 AM",
    title: "PLV-CAT 2026 Results Released",
    content:
      "📋 IMPORTANT NOTICE\n\nThe results of the Pamantasan ng Lungsod ng Valenzuela College Admission Test (PLV-CAT) 2026 are now available.\n\nQualified applicants are advised to proceed to the Registrar's Office for next steps and to submit the required admission documents on or before March 10, 2026.\n\nCongratulations to all who passed! We look forward to welcoming you to the PLV family. 🎓",
    image: false,
    likes: 631,
    comments: 89,
    shares: 215,
    tag: "Announcement",
  },
  {
    id: 6,
    category: "Events",
    date: "January 15, 2026",
    time: "8:00 AM",
    title: "AEES General Assembly & Leadership Summit 2026",
    content:
      "⚡ AEES is calling all EE students!\n\nJoin us for the AEES General Assembly & Leadership Summit 2026 on January 22, 2026 at the PLV Auditorium.\n\nThis year's theme: \"Empowering the Next Generation of Electrical Engineers.\"\n\nAll BSEE students are encouraged to attend. Attendance will be recorded. See you there! 🔌",
    image: true,
    likes: 176,
    comments: 28,
    shares: 54,
    tag: "Event",
  },
];

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  Enrollment:    { bg: "bg-blue-50",    text: "text-blue-600",    border: "border-blue-200" },
  Achievement:   { bg: "bg-amber-50",   text: "text-amber-600",   border: "border-amber-200" },
  Event:         { bg: "bg-violet-50",  text: "text-violet-600",  border: "border-violet-200" },
  Partnership:   { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
  Announcement:  { bg: "bg-rose-50",    text: "text-rose-600",    border: "border-rose-200" },
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = fbPosts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.content.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
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
            <span>Home</span><span className="text-[#ef8a22]">›</span><span className="text-white/80">News</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">News</h1>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#ef8a22] to-transparent" />
          <p className="mt-4 max-w-2xl text-white/85 leading-relaxed">
            Latest announcements and updates from the College of Engineering and Information Technology.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-5 md:px-12 py-10 md:py-14">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <Newspaper className="w-5 h-5 text-[#ef8a22]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#ef8a22]"
            style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>FB Postings</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#dfe3ef] to-transparent" />
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full border transition-all hover:shadow-sm"
            style={{ color: "#1877F2", borderColor: "#1877F230", background: "#1877F210", fontFamily: "'Trebuchet MS', sans-serif" }}
          >
            <ExternalLink className="w-3 h-3" /> Visit Facebook Page
          </a>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">

          {/* ── SIDEBAR ── */}
          <aside className="space-y-4">
            {/* Search */}
            <div className="rounded-2xl bg-white border border-[#dfe3ef] shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-[#dfe3ef]" style={{ background: "linear-gradient(135deg, #f7f8fd, #f2f4fb)" }}>
                <p className="text-xs font-bold uppercase tracking-widest text-[#4e5a7b]"
                  style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>Search Posts</p>
              </div>
              <div className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4e5a7b]" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search news..."
                    className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-[#dfe3ef] bg-[#f7f8fd] text-[#1f2b55] placeholder-[#4e5a7b]/50 focus:outline-none focus:border-[#ef8a22]/50"
                  />
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="rounded-2xl bg-white border border-[#dfe3ef] shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-[#dfe3ef]" style={{ background: "linear-gradient(135deg, #f7f8fd, #f2f4fb)" }}>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#ef8a22]" />
                  <p className="text-xs font-bold uppercase tracking-widest text-[#4e5a7b]"
                    style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>Filter by Category</p>
                </div>
              </div>
              <div className="p-3 space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
                    style={{
                      background: activeCategory === cat ? "#1f2b5510" : "transparent",
                      color: activeCategory === cat ? "#1f2b55" : "#4e5a7b",
                      borderLeft: activeCategory === cat ? "3px solid #ef8a22" : "3px solid transparent",
                      fontFamily: "'Trebuchet MS', sans-serif",
                    }}
                  >
                    {cat}
                    <span className="float-right text-xs text-[#4e5a7b]/60">
                      {cat === "All" ? fbPosts.length : fbPosts.filter((p) => p.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* FB Page widget */}
            <div
              className="relative overflow-hidden rounded-2xl px-6 py-6 border border-[#1877F230]"
              style={{ background: "linear-gradient(135deg, #1877F215, #1877F208)" }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, #1877F2, transparent 70%)", transform: "translate(30%, -30%)" }} />
              <p className="text-xs font-black uppercase tracking-widest text-[#1877F2] mb-2"
                style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>Official Facebook Page</p>
              <p className="text-sm font-bold text-[#1f2b55] mb-1">PLV-CEIT</p>
              <p className="text-xs text-[#4e5a7b] mb-4">Follow us for real-time updates, announcements, and events.</p>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full text-white transition-all hover:opacity-90"
                style={{ background: "#1877F2", fontFamily: "'Trebuchet MS', sans-serif" }}>
                <ExternalLink className="w-3 h-3" /> Follow Page
              </a>
            </div>
          </aside>

          {/* ── POSTS FEED ── */}
          <div className="space-y-5">
            {filtered.length === 0 ? (
              <div className="rounded-2xl bg-white border border-[#dfe3ef] px-8 py-16 text-center">
                <p className="text-[#4e5a7b] text-sm">No posts found matching your search.</p>
              </div>
            ) : (
              filtered.map((post) => {
                const tag = tagColors[post.tag] ?? tagColors["Announcement"];
                return (
                  <article key={post.id}
                    className="rounded-2xl bg-white border border-[#dfe3ef] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">

                    {/* Post header */}
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-[#f2f4fb]">
                      <div className="w-10 h-10 rounded-full bg-[#1f2b55] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-black" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>PLV</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-[#1f2b55] leading-tight">PLV – CEIT Official</p>
                        <p className="text-xs text-[#4e5a7b]">{post.date} at {post.time}</p>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${tag.bg} ${tag.text} ${tag.border}`}
                        style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                        {post.tag}
                      </span>
                    </div>

                    {/* Post content */}
                    <div className="px-6 py-5">
                      <h2 className="text-lg font-extrabold text-[#1f2b55] mb-3 leading-tight">{post.title}</h2>
                      <p className="text-sm text-[#4e5a7b] leading-relaxed whitespace-pre-line line-clamp-5">{post.content}</p>
                    </div>

                    {/* Post image placeholder */}
                    {post.image && (
                      <div className="mx-6 mb-5 rounded-xl overflow-hidden border border-[#dfe3ef] bg-gradient-to-br from-[#f2f4fb] to-[#e8ecf7] h-48 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-xl bg-[#dfe3ef] mx-auto mb-2 flex items-center justify-center">
                            <Newspaper className="w-5 h-5 text-[#4e5a7b]" />
                          </div>
                          <p className="text-xs text-[#4e5a7b]" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>Post Image</p>
                        </div>
                      </div>
                    )}

                    {/* Engagement bar */}
                    <div className="px-6 py-3 border-t border-[#f2f4fb] flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-[#4e5a7b]">
                        <span className="w-5 h-5 rounded-full bg-[#1877F2] flex items-center justify-center">
                          <ThumbsUp className="w-3 h-3 text-white" />
                        </span>
                        <span className="ml-1">{post.likes}</span>
                        <span className="ml-3">{post.comments} comments</span>
                        <span className="ml-3">{post.shares} shares</span>
                      </div>
                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1877F2] hover:underline"
                        style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                        View on Facebook <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Reaction buttons */}
                    <div className="px-4 py-2 border-t border-[#f2f4fb] flex gap-1">
                      {[
                        { icon: <ThumbsUp className="w-3.5 h-3.5" />, label: "Like" },
                        { icon: <MessageCircle className="w-3.5 h-3.5" />, label: "Comment" },
                        { icon: <Share2 className="w-3.5 h-3.5" />, label: "Share" },
                      ].map((btn) => (
                        <button key={btn.label}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-[#4e5a7b] hover:bg-[#f2f4fb] transition-colors"
                          style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                          {btn.icon} {btn.label}
                        </button>
                      ))}
                    </div>

                  </article>
                );
              })
            )}
          </div>

        </div>
      </div>
    </main>
  );
}