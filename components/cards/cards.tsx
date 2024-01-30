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
    <div className={clsx(styles.root)}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image.url} alt={image.alt} width={300} height={300} />
      <Link href={link.href}>{link.label}</Link>
    </div>
  );
}
