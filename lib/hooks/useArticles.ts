"use client";

import useSWR from "swr";
import { fetchArticles } from "@/lib/api";
import type { Article } from "@/lib/types/article";

export function useArticles() {
  return useSWR<Article[]>("articles", fetchArticles, {
    refreshInterval: 30000,
    revalidateOnFocus: true,
  });
}
