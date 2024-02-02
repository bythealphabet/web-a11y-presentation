import fs from "node:fs/promises";
import path from "node:path";
import { markdownToIPresentation } from "./markdownToIPresentation";

const markdownArticlesDir = path.join(process.cwd(), "markdown-articles");

export async function getArticlesData() {
  try {
    const files = await fs.readdir(markdownArticlesDir);

    const articlesData = [];

    for (const file of files) {
      if (path.extname(file) === ".md") {
        const articleData = await markdownToIPresentation(
          "markdown-articles/" + file
        );

        articlesData.push(articleData);
      }
    }

    return articlesData;
  } catch (error) {
    console.error("Error reading markdown articles:", error);
    return [];
  }
}
