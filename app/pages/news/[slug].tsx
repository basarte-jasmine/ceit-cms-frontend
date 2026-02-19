"use client";

import Link from "next/link";
import { useRouter } from "next/router";

type DeptTag = "CE" | "EE" | "IT";

type Article = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  author: string;
  datePublished: string;
  tags: DeptTag[];
};

const ARTICLES: Article[] = [
  {
    slug: "april-joy-yapcengco-ends-her-run",
    category: "NON-ACADEMIC / INTRAMURALS",
    title: "April Joy Yapcengco Ends Her Run with Grace, Grit, and Glory.",
    subtitle: "A Final Intramurals for the PLV Star",
    author: "PLV CEIT Editorial Team",
    datePublished: "April 21, 2025",
    tags: ["CE"],
  },
  {
    slug: "plv-ceit-new-civil-engineer-board-passers",
    category: "ACADEMIC / ALUMNI",
    title: "PLV CEIT Celebrates New Civil Engineer Board Passers.",
    subtitle: "Forty alumni passes their licensure exam.",
    author: "CEIT Communications",
    datePublished: "April 2025",
    tags: ["CE"],
  },
  {
    slug: "ceit-shines-bright-plv-intramurals-2025",
    category: "ACADEMIC / ITLYMPICS",
    title: "CEIT Shines Bright at PLV Intramurals 2025.",
    subtitle: "PLV Intramurals 2025: A Celebration of Spirit and Sportsmanship",
    author: "CEIT Sports Desk",
    datePublished: "April 21, 2025",
    tags: ["CE", "EE", "IT"],
  },
];

const tagClass: Record<string, string> = {
  CE: "bg-[#ffd043] text-[#071d42]",
  EE: "bg-gray-400 text-[#071d42]",
  IT: "bg-purple-500 text-white",
};

function TagPills({ tags = [] as DeptTag[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
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

export default function NewsArticlePage() {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : "";

  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-[900px] mx-auto px-5 md:px-12 py-12">
          <p className="text-muted-foreground">Article not found.</p>
          <Link href="/news" className="mt-4 inline-block text-accent hover:underline">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  // Dummy content (from you). We’ll show it for all articles for now.
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="max-w-[900px] mx-auto px-5 md:px-12 py-10 md:py-12">
          <Link href="/news" className="text-sm text-muted-foreground hover:text-accent transition-colors">
            ← Back to News
          </Link>

          <p className="mt-5 text-xs text-muted-foreground uppercase tracking-wider">
            {article.category}
          </p>

          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-foreground leading-snug">
            {article.title}{" "}
            <span className="text-accent font-semibold">{article.subtitle}</span>
          </h1>

          <TagPills tags={article.tags} />

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground/80">Author:</span>{" "}
              {article.author}
            </span>
            <span>
              <span className="font-semibold text-foreground/80">Date:</span>{" "}
              {article.datePublished}
            </span>
          </div>

          {/* Cover Placeholder */}
          <div className="mt-8 w-full h-[320px] bg-gray-300 rounded-sm border border-border flex items-center justify-center text-gray-600 text-sm font-medium">
            Cover Placeholder
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[900px] mx-auto px-5 md:px-12 py-10 md:py-12">
          <div className="prose prose-slate max-w-none">
            <p>
              This year’s Intramurals, which concluded last April 21, 2025, marked April Joy’s final appearance as a
              student-athlete, and she didn’t leave without making another mark. She brought home a bronze medal in the
              Badminton Team Event, and once again earned a coveted spot in the Women’s Basketball Mythical Five, while
              helping her team secure a 1st runner-up finish.
            </p>

            <p>
              But April Joy’s impact goes far beyond medals and trophies. For years, she has been a dominant force in
              Badminton, Basketball, and even Volleyball, racking up titles and MVP awards with consistency and class.
              Her athletic résumé reads like a highlight reel:
            </p>

            <h3>PLV Intramurals 2025</h3>
            <ul>
              <li>1st Runner-Up in Women’s Basketball</li>
              <li>2nd Runner-Up in Badminton Team Event</li>
              <li>Mythical Five Awardee in Women’s Basketball</li>
            </ul>

            <h3>SK Marulas Sports League 2024</h3>
            <ul>
              <li>Champion in Badminton Mixed Doubles</li>
              <li>2nd Runner-Up in Women&apos;s Basketball 3x3</li>
            </ul>

            <h3>PLV CEIT Palarong Pinoy 2024</h3>
            <ul>
              <li>Champion in Women&apos;s Volleyball</li>
            </ul>

            <h3>SK Gen. T. De Leon Summer League 2023</h3>
            <ul>
              <li>Champion in Badminton Mixed Doubles</li>
            </ul>

            <h3>PLV Intramurals 2023</h3>
            <ul>
              <li>Champion in Women&apos;s Basketball</li>
              <li>Champion in Badminton Women&apos;s Doubles</li>
              <li>Mythical Five Awardee in Women’s Basketball</li>
              <li>Season MVP in Women’s Basketball</li>
            </ul>

            <h3>WES Olympics 2022</h3>
            <ul>
              <li>Champion in Badminton Mixed Doubles</li>
            </ul>

            <h3>PLV Intramurals 2020</h3>
            <ul>
              <li>Champion in Women&apos;s Basketball</li>
              <li>1st Runner-Up in Badminton Women&apos;s Singles</li>
              <li>Mythical Five Awardee in Women’s Basketball</li>
              <li>Season MVP in Women’s Basketball</li>
            </ul>

            <p>
              Whether she was on the badminton court or the basketball court, April Joy always played with passion,
              focus, and quiet confidence. Known not just for her athletic abilities, but also for her warm presence and
              sportsmanship, she quickly became one of the most admired athletes during every Intramurals season—a
              familiar face many looked up to and rooted for.
            </p>

            <p>
              With graduation just around the corner, April Joy is set to close this chapter of her PLV journey, leaving
              behind a legacy that will be hard to match. Her success in sports mirrors her dedication to her Civil
              Engineering degree—a balance that speaks volumes about her discipline and determination.
            </p>

            <p>
              Congratulations, April Joy Yapcengco! Thank you for giving us years of unforgettable performances, team
              spirit, and heart. The College of Engineering and Information Technology, and the entire PLV community,
              salute you.
            </p>

            <p>
              As the lights dim on your final Intramurals, your legacy continues to shine—bright, inspiring, and
              unforgettable. 🌟
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
