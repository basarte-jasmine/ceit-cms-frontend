import type { Article } from "@/lib/types/article";

const API_BASE_URL = "/api";

async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    const fallbackError = `Request failed with status ${response.status}`;
    let detail = fallbackError;

    try {
      const data = (await response.json()) as { detail?: string };
      detail = data?.detail ?? fallbackError;
    } catch {
      detail = fallbackError;
    }

    throw new Error(detail);
  }

  return (await response.json()) as T;
}

export async function fetchArticles(): Promise<Article[]> {
  return apiRequest<Article[]>("/articles/");
}
