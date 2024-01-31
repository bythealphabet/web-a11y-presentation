export interface ITopics {
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

export interface IPresentations {
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
