import { ITopics } from "@/types/presentation-topics";
import PptxGenJS from "pptxgenjs";
import matter from "gray-matter";

interface ParsedArticle {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  topics: ITopics[];
}

const articleContent = `
---
title: "My Article Title"
description: "This is a description of my article."
image:
  url: "/path/to/image.jpg"
  alt: "Image Alt Text"
topics:
  - title: "Topic 1"
    content: "Content of Topic 1"
    description: "Description of Topic 1"
    link:
      href: "/topic-1"
      label: "Read more"
    image:
      url: "/path/to/topic-1-image.jpg"
      alt: "Topic 1 Image Alt Text"
  # Add more topics...
---
# Article Content
This is the main content of your article.
`;

const { data, content } = matter(articleContent);

console.log(data);
console.log(content);

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

function convertToStructuredData(data: ParsedArticle): IPresentations {
  const presentationData: IPresentations = {
    kind: "slide",
    title: data.title,
    description: data.description,
    link: {
      href: "/article-link", // You can set this based on your requirements
      label: "Read more",
    },
    image: data.image,
    topics: data.topics,
  };

  return presentationData;
}

const structuredData = convertToStructuredData(data as ParsedArticle);
console.log(structuredData);

export function generateSlides(topics: ITopics[]) {
  const pptx = new PptxGenJS();

  topics.forEach((topic, index) => {
    // Create a new slide
    const slide = pptx.addSlide();

    // Add content to the slide (customize this based on your needs)
    slide.addText(topic.title, { x: 1, y: 1, fontFace: "Arial", fontSize: 18 });
    slide.addText(topic.content, {
      x: 1,
      y: 2,
      fontFace: "Arial",
      fontSize: 14,
    });

    // Add an image
    slide.addImage({ path: topic.image.url, x: 1, y: 3, w: 4, h: 3 });
  });

  // Save the presentation
  pptx.writeFile({ fileName: "presentation.pptx" });
}

export const generation = generateSlides(structuredData.topics);
