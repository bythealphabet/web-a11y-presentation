import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export interface CardsProps {
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

export function SlideCard({ title, description, link, image }: CardsProps) {
  return (
    <Card>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>

      <CardBody>
        <p>{description}</p>
        <img src={image.url} alt={image.alt} width={300} height={300} />
        <Link href={link.href}>{link.label}</Link>
      </CardBody>
    </Card>
  );
}
