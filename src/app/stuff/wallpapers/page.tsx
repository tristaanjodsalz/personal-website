import { DownloadIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Title } from "tristanjockel/components/text";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tristan Jodsalz - Wallpapers",
    description: "A collection of wallpapers I made.",
  } satisfies Metadata;
}

export default async function Wallpapers() {
  return (
    <main>
      <Title>Wallpapers</Title>
      <div className="mt-6 columns-1 sm:columns-2 md:columns-3">
        <ImageElement
          src="/stuff/wallpapers/flugzeug.png"
          alt="My current iPad wallpaper"
          width={2360}
          height={1640}
        />
        <ImageElement
          src="/stuff/wallpapers/iPhoneBluev4.png"
          alt="My chat background"
          width={1125}
          height={2436}
        />
        <ImageElement
          src="/stuff/wallpapers/pixelMond5k2k.png"
          alt="Space themed wallpaper"
          width={5120}
          height={2160}
        />
      </div>
    </main>
  );
}

function ImageElement({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="break-inside-avoid">
      <a href={src} className="w-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg"
        />
        <span className="mt-2 text-gray-500 text-sm dark:text-gray-400">
          {alt}
        </span>
        <DownloadIcon className="mb-0.5 inline h-[0.85em] text-gray-500 dark:text-gray-400" />
      </a>
    </div>
  );
}
