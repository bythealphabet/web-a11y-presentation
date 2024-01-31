import { Card, CardsProps } from "@/components/cards/cards";
import styles from "./presentation.module.scss";
import clsx from "clsx";

const getDummyData = async () => {
  const response = await fetch("/api/presentation");
  console.log("response", response);

  return response.json();
};

async function Presentations() {
  getDummyData();
  return (
    <main className={clsx("sub-grid", styles.root)}>
      <section>
        <h1>Presentations Topics</h1>
        <ul role="list">
          {[].map((card, index) => (
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
