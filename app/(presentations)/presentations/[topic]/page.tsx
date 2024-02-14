import clsx from "clsx";
import { CardsProps, Card } from "@/components/cards/cards";
import styles from "./topic.module.scss";
import { markdownToIPresentation } from "@/utils/markdownToIPresentation";
import Pptgenerator from "@/components/pptgenerator/pptgenerator";
import Slide from "@/components/slides/slide";

async function WebA11ySlides({ params }) {
  const article = await markdownToIPresentation(params.topic);
  return (
    <main className={clsx(styles.root, "sub-grid")}>
      <section className={clsx(styles.mainSection, "sub-grid")}>
        <h1>{article.title}</h1>
        <p>{article.description}</p>

        <h2>Topics</h2>
        <ul role="list">
          {article.topics.map((card, index) => {
            return (
              <li key={index}>
                <Card
                  kind="slide"
                  title={card.title}
                  link={card.link}
                  description={card.content}
                  image={card.image}
                />
              </li>
            );
          })}
        </ul>
        <img src={`/${article.image.url}`} alt={article.image.alt} />
      </section>
      <Pptgenerator article={article}>
        <Slide article={article} />
      </Pptgenerator>
    </main>
  );
}

export default WebA11ySlides;
