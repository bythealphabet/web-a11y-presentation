import { Card, CardsProps } from "@/components/cards/cards";
import styles from "./presentation.module.scss";
import clsx from "clsx";
import { getArticlesData } from "@/containers/getMarkdownlist";

async function Presentations() {
  const allArticles = await getArticlesData().then((articles) => {
    return articles;
  });

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
