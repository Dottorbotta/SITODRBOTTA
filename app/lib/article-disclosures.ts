import type { Article } from "../data/articles";

const conciseAiLabel = "Immagine generata con IA.";

// The first editorial series runs through source article 300. The original
// articles and publications 001–025 predate sourceArticleId in the data.
export function isInFirst300(article: Article): boolean {
  return !article.sourceArticleId || Number(article.sourceArticleId) <= 300;
}

export function hasAiCover(article: Pick<Article, "imageCaption">): boolean {
  return /generata con IA/i.test(article.imageCaption ?? "");
}

export function coverCaption(article: Article): string {
  if (isInFirst300(article) && hasAiCover(article)) return conciseAiLabel;
  return article.imageCaption ?? "Metodo Corpo Capace · Dr. Botta";
}

export function inlineImageCaption(article: Article, caption: string): string {
  if (isInFirst300(article) && /generata con IA/i.test(caption)) return conciseAiLabel;
  return caption;
}
