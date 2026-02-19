"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";

type DeptTag = "CE" | "EE" | "IT";

type Article = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  author: string;
  datePublished: string; // display string is fine
  tags: DeptTag[];
  section: "headline" | "academic" | "mustread";
};

const articles: Article[] = [
  {
    slug: "april-joy-yapcengco-ends-her-run",
    category: "NON-ACADEMIC / INTRAMURALS",
    title: "April Joy Yapcengco Ends Her Run with Grace, Grit, and Glory.",
    subtitle: "A Final Intramurals for the PLV Star",
    author: "PLV CEIT Editorial Team",
    datePublished: "April 21, 2025",
    tags: ["CE"], // Yapcengco = CE
    section: "headline",
  },
  {
    slug: "plv-ceit-new-civil-engineer-board-passers",
    category: "ACADEMIC / ALUMNI",
    title: "PLV CEIT Celebrates New Civil Engineer Board Passers.",
    subtitle: "Forty alumni passes their licensure exam.",
    author: "CEIT Communications",
    datePublished: "April 2025",
    tags: ["CE"], // Board passers = CE
    section: "academic",
  },
  {
    slug: "ceit-shines-bright-plv-intramurals-2025",
    category: "ACADEMIC / ITLYMPICS",
    title: "CEIT Shines Bright at PLV Intramurals 2025.",
    subtitle: "PLV Intramurals 2025: A Celebration of Spirit and Sportsmanship",
    author: "CEIT Sports Desk",
    datePublished: "April 21, 2025",
    tags: ["CE", "EE", "IT"], // Intramurals = CE, EE, IT
    section: "mustread",
  },
];

// Tag color mapping: CE yellow, EE gray, IT purple
const tagClass: Record<string, string> = {
  CE: "bg-[#ffd043] text-[#071d42]",
  EE: "bg-gray-400 text-[#071d42]",
  IT: "bg-purple-500 text-white",
};

function TagPills({ tags = [] as DeptTag[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide ${tagClass[t]}`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function normalizeDeptParam(dept: unknown): DeptTag | "ALL" {
  const value = Array.isArray(dept) ? dept[0] : dept;
  const v = typeof value === "string" ? value.toLowerCase() : "";

  if (v === "ce") return "CE";
  if (v === "ee") return "EE";
  if (v === "it") return "IT";
  return "ALL";
}

function NewsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeFilter = normalizeDeptParam(searchParams.get("dept"));

  const setFilter = (dept: "ALL" | "ce" | "ee" | "it") => {
    // Keep the user on /news, just change the query
    if (dept === "ALL") {
      router.push("/news");
      return;
    }
    router.push(`/news?dept=${dept}`);
  };

  const filtered = articles.filter((a) => {
    if (activeFilter === "ALL") return true;
    return a.tags.includes(activeFilter);
  });

  const headlineArticle = filtered.find((a) => a.section === "headline");
  const academicArticles = filtered.filter((a) => a.section === "academic");
  const mustReadArticles = filtered.filter((a) => a.section === "mustread");

  return (
    <div className="min-h-screen bg-background">
      {/* FILTER BAR */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">
                News
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Filter by department: CE, EE, or IT
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setFilter("ALL")}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  activeFilter === "ALL"
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-foreground border-border hover:border-foreground/40"
                }`}
              >
                All
              </button>

              <button
                type="button"
                onClick={() => setFilter("ce")}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  activeFilter === "CE"
                    ? "bg-[#ffd043] text-[#071d42] border-[#ffd043]"
                    : "bg-background text-foreground border-border hover:border-[#ffd043]"
                }`}
              >
                CE
              </button>

              <button
                type="button"
                onClick={() => setFilter("ee")}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  activeFilter === "EE"
                    ? "bg-gray-400 text-[#071d42] border-gray-400"
                    : "bg-background text-foreground border-border hover:border-gray-400"
                }`}
              >
                EE
              </button>

              <button
                type="button"
                onClick={() => setFilter("it")}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  activeFilter === "IT"
                    ? "bg-purple-500 text-white border-purple-500"
                    : "bg-background text-foreground border-border hover:border-purple-500"
                }`}
              >
                IT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HEADLINE */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12 py-12 md:py-14">
          <h2 className="text-5xl text-muted-foreground mb-7">Headline</h2>

          {!headlineArticle ? (
            <p className="text-muted-foreground">
              No headline article matches this filter.
            </p>
          ) : (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 flex flex-col justify-end">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {headlineArticle.category}
                </p>

                <Link href={`/news/${headlineArticle.slug}`} className="group">
                  <h1 className="text-5xl font-extrabold text-foreground leading-snug group-hover:text-accent transition-colors">
                    {headlineArticle.title}{" "}
                    <span className="text-accent font-semibold">
                      {headlineArticle.subtitle}
                    </span>
                  </h1>
                </Link>

                {/* TAGS BELOW TITLE */}
                <TagPills tags={headlineArticle.tags} />

                <Link
                  href={`/news/${headlineArticle.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm text-foreground hover:text-accent transition-colors w-fit"
                >
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="md:w-1/2">
                <div className="w-full h-72 bg-gray-300 rounded-sm border border-border flex items-center justify-center text-gray-600 text-sm font-medium">
                  Cover Placeholder
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ACADEMIC + MUST READ */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
            <div className="px-5 md:px-6 py-5 md:py-6 border-r border-border flex items-center gap-2 text-3xl font-semibold text-foreground">
              <GraduationCap className="w-4 h-4" /> Academic
            </div>
            <div className="px-5 md:px-6 py-5 md:py-6 flex items-center gap-2 text-3xl font-semibold text-foreground">
              <BookOpen className="w-4 h-4" /> Must read
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-r border-border px-5 md:px-6 py-8">
              {academicArticles.length === 0 ? (
                <p className="text-muted-foreground">
                  No academic articles match this filter.
                </p>
              ) : (
                academicArticles.map((article) => (
                  <div key={article.slug}>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      {article.category}
                    </p>

                    <Link href={`/news/${article.slug}`} className="group">
                      <h3 className="text-5xl font-extrabold text-foreground leading-snug group-hover:text-accent transition-colors">
                        {article.title}{" "}
                        <span className="text-accent font-semibold text-5xl">
                          {article.subtitle}
                        </span>
                      </h3>
                    </Link>

                    {/* TAGS BELOW TITLE */}
                    <TagPills tags={article.tags} />

                    <Link
                      href={`/news/${article.slug}`}
                      className="mt-3 inline-flex items-center gap-1 text-sm text-foreground hover:text-accent transition-colors"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))
              )}
            </div>

            <div className="px-5 md:px-6 py-8">
              {mustReadArticles.length === 0 ? (
                <p className="text-muted-foreground">
                  No must-read articles match this filter.
                </p>
              ) : (
                mustReadArticles.map((article) => (
                  <div key={article.slug}>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      {article.category}
                    </p>

                    <Link href={`/news/${article.slug}`} className="group">
                      <h3 className="text-5xl font-extrabold text-foreground leading-snug group-hover:text-accent transition-colors">
                        {article.title}{" "}
                        <span className="text-accent font-semibold text-5xl">
                          {article.subtitle}
                        </span>
                      </h3>
                    </Link>

                    {/* TAGS BELOW TITLE */}
                    <TagPills tags={article.tags} />

                    <Link
                      href={`/news/${article.slug}`}
                      className="mt-3 inline-flex items-center gap-1 text-sm text-foreground hover:text-accent transition-colors"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function News() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <NewsContent />
    </Suspense>
  );
}
