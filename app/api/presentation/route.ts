import { IPresentations } from "@/types/presentation-topics";
import { NextResponse } from "next/server";

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

export const GET = async (req: Request) => {
  return NextResponse.json({ dummyData });
};

export const POST = async (req: Request) => {
  const data = await req.json();
  return NextResponse.json({ message: data });
};
