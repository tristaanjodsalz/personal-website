"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { href: "/blog", label: "Blog" },
  { href: "/now", label: "Projects (/now)" },
  { href: "/stuff", label: "Random Stuff" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const { body } = document;

    if (isMenuOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const navLinks = useMemo(
    () =>
      navItems.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className="transition-colors duration-150 hover:text-text/75 focus:text-text/75"
            onClick={() => setIsMenuOpen(false)}
          >
            {label}
          </Link>
        </li>
      )),
    [],
  );

  return (
    <>
      <MainHeader
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
      />

      {isMenuOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          className="fixed inset-0 z-20 flex flex-col bg-background/50 backdrop-blur-lg backdrop-grayscale-25"
          onClick={() => setIsMenuOpen(false)}
          onKeyDown={(event) => {
            if (
              event.key === "Escape" ||
              event.key === "Enter" ||
              event.key === " "
            ) {
              event.preventDefault();
              setIsMenuOpen(false);
            }
          }}
        >
          <MainHeader
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            navLinks={navLinks}
          />
          <nav className="flex flex-col items-center gap-6 pt-10 font-semibold text-2xl text-text">
            <ul
              className="flex w-full flex-col items-center gap-6"
              onClick={(event) => event.stopPropagation()}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  event.stopPropagation();
                  setIsMenuOpen(false);
                } else {
                  event.stopPropagation();
                }
              }}
            >
              {navLinks}
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
}

function MainHeader({
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: React.ReactNode;
}) {
  return (
    <nav className="flex items-center justify-between p-6 px-[max(calc(50vw-29rem),1rem)] text-text/95">
      <Link href="/" className="font-medium">
        Tristan Jockel
      </Link>

      <div className="hidden sm:block">
        <ul className="flex list-none gap-6 p-0 font-medium text-sm">
          {navLinks}
        </ul>
      </div>

      <button
        className="sm:hidden"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Navigation schließen" : "Navigation öffnen"}
        type="button"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? (
          <XIcon className="h-6 text-text/95" />
        ) : (
          <MenuIcon className="h-6 text-text/95" />
        )}
      </button>
    </nav>
  );
}
