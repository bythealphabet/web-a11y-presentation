import Link from "next/link";
import styles from "./cards.module.scss";
import clsx from "clsx";

export interface CardsProps {
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
}

export function Card({ kind, title, description, link, image }: CardsProps) {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <figure>
        {image?.url && (
          <img
            src={`/${image?.url}`}
            alt={image?.alt}
            width={300}
            height={300}
          />
        )}
      </figure>
      {link && (
        <Link href={link?.href}>
          <span>{link?.label}</span>
        </Link>
      )}
    </>
  );
}
