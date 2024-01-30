import { Card, CardsProps } from "@/components/cards/cards";
import styles from "./presentation.module.scss";
import clsx from "clsx";

interface ITopics {
  title: string;
  content: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  image: {
    url: string;
    alt: string;
  };
}

interface IPresentations {
  kind: "slide" | "topic";
  title: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  image: {
    url: string;
    alt: string;
  };
  topics: ITopics[];
}

const dummyData: IPresentations[] = [
  {
    kind: "topic",
    title: "Introduction to web accessibility",
    description: `
        What is web accessibility, kind of disabilities, Understanding the web accessibility standards and guidelines.
    `,
    link: {
      href: "/",
      label: "Read more",
    },
    image: {
      url: "https://images.pexels.com/photos/3913019/pexels-photo-3913019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Card 1 Image",
    },
    topics: [
      {
        title: "What is web accessibility",
        description: "This is the description for card 1.",
        content: "This is the description for card 1.",
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
        title: "Why web accessibility",
        description: "This is the description for card 1.",
        content: "This is the description for card 1.",
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
        title: "How to make your website accessible",
        description: "This is the description for card 1.",
        content: "This is the description for card 1.",
        link: {
          href: "/",
          label: "Read more",
        },
        image: {
          url: "https://images.pexels.com/photos/3913019/pexels-photo-3913019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Card 1 Image",
        },
      },
    ],
  },
];

async function Presentations() {
  return (
    <main className={clsx("sub-grid", styles.root)}>
      <section>
        <h1>Presentations Topics</h1>
        <ul role="list">
          {dummyData.map((card, index) => (
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
