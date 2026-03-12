"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Newspaper, ThumbsUp, MessageCircle, Share2, ExternalLink, Search, Filter } from "lucide-react";
import { fetchArticles, likeArticle } from "@/lib/api";
import type { Article } from "@/lib/types/article";

const categories = ["All", "Announcements", "Events", "Achievements", "Partnerships"];

type NewsPost = {
  id: string;
  category: string;
  date: string;
  time: string;
  title: string;
  content: string;
  imageUrl: string | null;
  likes: number;
  comments: number;
  shares: number;
  tag: string;
};

function resolveImageUrl(path: string | null | undefined): string | null {
  if (!path) {
    return null;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const apiBase = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1";
  const backendOrigin = apiBase.replace(/\/api\/v1\/?$/, "");
  return `${backendOrigin}${path.startsWith("/") ? "" : "/"}${path}`;
}

function mapArticleToPost(article: Article): NewsPost {
  const createdAt = new Date(article.created_at);
  const categoryMap: Record<Article["category"], string> = {
    announcements: "Announcements",
    achievements: "Achievements",
    events: "Events",
    partnerships: "Partnerships",
  };
  const tagMap: Record<Article["category"], string> = {
    announcements: "Announcement",
    achievements: "Achievement",
    events: "Event",
    partnerships: "Partnership",
  };
  const category = categoryMap[article.category] ?? "Announcements";

  return {
    id: article.id,
    category,
    date: createdAt.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    time: createdAt.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
    title: article.title,
    content: article.body,
    imageUrl: resolveImageUrl(article.image_path),
    likes: article.like_count,
    comments: 0,
    shares: 0,
    tag: tagMap[article.category] ?? "Announcement",
  };
}

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  Enrollment: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
  Achievement: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
  Event: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200" },
  Partnership: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
  Announcement: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200" },
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [likingPostIds, setLikingPostIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const articles = await fetchArticles();
        setPosts(articles.map((article) => mapArticleToPost(article)));
      } catch {
      }
    };

    void loadArticles();
  }, []);

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.content.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleLike = async (postId: string) => {
    if (likingPostIds.has(postId)) {
      return;
    }

    setLikingPostIds((prev) => new Set(prev).add(postId));
    setPosts((prev) => prev.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)));

    try {
      const updated = await likeArticle(postId);
      setPosts((prev) => prev.map((post) => (post.id === postId ? { ...post, likes: updated.like_count } : post)));
    } catch {
      setPosts((prev) => prev.map((post) => (post.id === postId ? { ...post, likes: Math.max(0, post.likes - 1) } : post)));
    } finally {
      setLikingPostIds((prev) => {
        const next = new Set(prev);
        next.delete(postId);
        return next;
      });
    }
  };

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
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-[#ef8a22]">›</span>
            <span className="text-white/80">News</span>
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
                      {cat === "All" ? posts.length : posts.filter((p) => p.category === cat).length}
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

                    {post.imageUrl && (
                      <div className="mx-6 mb-5 rounded-xl overflow-hidden border border-[#dfe3ef] bg-[#f2f4fb] h-64">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
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
                      <button
                        onClick={() => void handleLike(post.id)}
                        disabled={likingPostIds.has(post.id)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-[#4e5a7b] hover:bg-[#f2f4fb] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
                      >
                        <ThumbsUp className="w-3.5 h-3.5" /> Like
                      </button>
                      <button
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-[#4e5a7b] hover:bg-[#f2f4fb] transition-colors"
                        style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
                      >
                        <MessageCircle className="w-3.5 h-3.5" /> Comment
                      </button>
                      <button
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-[#4e5a7b] hover:bg-[#f2f4fb] transition-colors"
                        style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
                      >
                        <Share2 className="w-3.5 h-3.5" /> Share
                      </button>
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
