import clsx from "clsx";
import { CardsProps, SlideCard } from "@/components/cards/cards";
import styles from "./presentation.module.scss";

const dummyData: CardsProps[] = [
  {
    title: "Card 1",
    description: "This is the description for card 1.",
    link: {
      href: "https://example.com/card1",
      label: "Read more",
    },
    image: {
      url: "https://example.com/card1.jpg",
      alt: "Card 1 Image",
    },
  },
  {
    title: "Card 2",
    description: "This is the description for card 2.",
    link: {
      href: "https://example.com/card2",
      label: "Read more",
    },
    image: {
      url: "https://example.com/card2.jpg",
      alt: "Card 2 Image",
    },
  },
  // Add more cards as needed
];

function WebA11ySlides({ params }) {
  return (
    <main className={clsx(styles.root)}>
      <h1>{params.presentation}</h1>
      <ul role="list">
        {dummyData.map((card, index) => (
          <li key={index}>
            <SlideCard {...card} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default WebA11ySlides;
