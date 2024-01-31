import fs from "node:fs/promises";
import path from "path";
import { TokensList, marked } from "marked";
import { IPresentations } from "@/types/presentation-topics";

export async function markdownToIPresentation(
  filePath: string
): Promise<IPresentations> {
  const markdown = await fs.readFile(
    path.join(process.cwd(), filePath),
    "utf-8"
  );

  let image: { href: string; alt: string; title: string } = {
    href: "",
    alt: "",
    title: "",
  };

  const renderer = {
    image(href: string, title: any, text: string) {
      //Todo: The docs say title is a string, when making it a string, it breaks the code, therefore, it's any, but it should be string, make sure to fix this in the future.
      const modifiedHref = href.replace(/\.\.\/public\//, "");

      image = {
        href: modifiedHref,
        alt: text,
        title,
      };

      return `<img src="${href}" alt="${text}" />`;
    },
  };

  marked.use({ renderer });
  marked.parse(markdown);

  const tokens: TokensList = marked?.lexer(markdown);

  const presentation: IPresentations = {
    kind: "topic",
    title: "",
    description: "",
    link: {
      href: filePath,
      label: path.basename(filePath, ".md"),
    },
    image: {
      url: image.href,
      alt: image.alt,
    },
    topics: [],
  };
  let paragraphCounter = 0;

  tokens.forEach((token) => {
    if (token.type === "heading" && token.depth === 1) {
      presentation.title = token.text;
    } else if (token.type === "heading" && token.depth === 3) {
      presentation.topics.push({
        title: token.text,
        content: "",
        description: "",
        link: {
          href: "",
          label: "",
        },
        image: {
          url: "",
          alt: "",
        },
      });
    } else if (token.type === "paragraph") {
      paragraphCounter++;
      if (paragraphCounter === 2) {
        presentation.description = token.text;
      } else if (paragraphCounter > 2) {
        const lastTopic = presentation.topics[presentation.topics.length - 1];
        if (lastTopic) {
          lastTopic.content += token.text;
        }
      }
    }
  });

  return presentation;
}
