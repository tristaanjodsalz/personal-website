import type { Metadata } from "next";
import Link from "tristanjockel/components/link";
import { Title } from "tristanjockel/components/text";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tristaan Jodsalz - /now: Current Projects",
    description: "A non exaustive list of things I am working on.",
  } satisfies Metadata;
}

export default async function NowPage() {
  return (
    <main>
      <Title>A collection of random stuff :P</Title>
      <ul className="mt-6 list-disc pl-6">
        <ListItem href="https://cheatsheet.miniwar.de/">Cheatsheet</ListItem>
        <ListItem href="/stuff/wallpapers">Wallpapers</ListItem>
      </ul>
    </main>
  );
}

function ListItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li className="">
      <Link href={href}>{children}</Link>
    </li>
  );
}
