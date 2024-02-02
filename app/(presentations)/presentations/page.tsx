import { Card, CardsProps } from "@/components/cards/cards";
import styles from "./presentation.module.scss";
import clsx from "clsx";
import { markdownToIPresentation } from "@/containers/markdownToIPresentation";
import { getArticlesData } from "@/containers/getMarkdownlist";

async function Presentations() {
  const article: any = markdownToIPresentation(
    "markdown-articles/introduction-web-a11y.md"
  ).then((presentation) => {
    return presentation;
  });

  const articleArray = [await article];

  const allArticles = await getArticlesData().then((articles) => {
    return articles;
  });
  console.log("allArticles", allArticles[0].topics);

  return (
    <main className={clsx("sub-grid", styles.root)}>
      <section>
        <h1>Presentations Topics</h1>
        <ul role="list">
          {allArticles.map((card, index) => (
            <li key={index}>
              <Card {...card} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Presentations;
