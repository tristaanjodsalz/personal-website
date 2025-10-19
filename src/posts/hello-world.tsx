import Image from "next/image";
import Link from "next/link";

export const meta = {
  slug: "hello-world",
  title: "Hello World",
  date: "2025-09-17",
  description: "Welcome to my Website and Blog!",
};

export default function HelloWorldPost() {
  return (
    <>
      <p>
        Hi! This will be my new online presence. What can you expect here?
        <br />
        Blog posts, updates on what I am doing on{" "}
        <Link href="/now" className="underline">
          /now
        </Link>
        {", "}
        and things I am interested in: technical stuff like programming, web
        dev, and networking.
      </p>
      <p className="mt-1">
        There may also be other content, so be prepared for{" "}
        <span className="italic">memes</span>:
      </p>
      <Image
        className="my-6 rounded-md sm:w-96"
        src={"/blog/hello-world/meme.jpg"}
        height={736}
        width={736}
        alt="Leclerc F1 meme"
      />

      <p>See you in my next post, Tristan :D</p>
    </>
  );
}
