import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <div className="p-6 px-[max(calc(50vw-29rem),1rem)] text-text/95">
      <Link href={"/"}>Tristan Jockel</Link>
      <ul className="float-right hidden list-none gap-6 p-0 sm:flex">
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/now"}>Projects (/now)</Link>
        </li>
        <li>
          <a href="https://cheatsheet.miniwar.de/">
            Cheatsheet{" "}
            <ExternalLink className="mb-0.5 ml-[-0.3rem] inline h-[0.8em] text-current/50" />
          </a>
        </li>
      </ul>
    </div>
  );
}
