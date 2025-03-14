import { getSingletonHighlighter } from "shiki";

let highlighter;

export async function getHighlighter() {
  if (!highlighter) {
    highlighter = await getSingletonHighlighter({
      themes: ["github-dark", "github-light"],
      langs: ["javascript", "css", "html", "bash"],
    });
  }

  return highlighter;
}
