import "../styles/globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "Tristan Jockel - 404: This page does not exist",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={space_grotesk.className}>
      <body className="flex h-screen w-screen flex-col items-center justify-center bg-background text-text selection:bg-text selection:text-background">
        <h1 className="font-extralight text-4xl">404</h1>
        <p className="mt-2 border-0 border-current/15 border-t-1 px-1 pt-2">
          This page does not exist.
        </p>
      </body>
    </html>
  );
}
