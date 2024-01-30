import { Card, CardsProps } from "@/components/cards/cards";
import styles from "./presentation.module.scss";
import clsx from "clsx";

const dummyData: CardsProps[] = [
  {
    kind: "slide",
    title: "Card 1",
    description: "This is the description for card 1.",
    link: {
      href: "/",
      label: "Read more",
    },
    image: {
      url: "https://images.pexels.com/photos/3913019/pexels-photo-3913019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Card 1 Image",
    },
  },
  {
    kind: "slide",
    title: "Card 2",
    description: "This is the description for card 2.",
    link: {
      href: "/",
      label: "Read more",
    },
    image: {
      url: "https://images.pexels.com/photos/3913019/pexels-photo-3913019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Card 2 Image",
    },
  },
];

async function Presentations() {
  return (
    <main className={clsx("sub-grid", styles.root)}>
      <h1>Presentations Topics</h1>
      <ul>
        {dummyData.map((card, index) => (
          <li key={index}>
            <Card {...card} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Presentations;
