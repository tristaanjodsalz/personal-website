import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "tristanjockel/components/link";
import { Text } from "tristanjockel/components/text";

export default function HomePage() {
  return (
    <>
      <div className="mt-[15vh] mb-[12vh] flex items-center justify-center">
        <div className="ml-4 text-right">
          <h1 className="mb-0.5 text-right text-4xl">Tristan Jockel</h1>
          <div className="hidden text-current/60 sm:block">
            <span className="mr-4">
              <MapPin className="mr-[-0.4rem] mb-1 inline h-[0.8em]" /> European
              Union
            </span>
            <span>he/him</span>
          </div>
        </div>
        <span className="m-6 h-32 w-[1px] bg-[#63636340] dark:bg-[#63636380]" />
        <Image
          src={"/image.png"}
          className="mr-6 h-32 w-32 rounded-full object-cover"
          alt="Picture of Tristan Jockel"
          width={256}
          height={128}
          priority
        />
      </div>
      <div className="flex flex-col justify-center sm:flex-row">
        <Main />
      </div>
    </>
  );
}

function Main() {
  return (
    <main className="w-full">
      <Text>Hi, I'm Tristan!</Text>
      <Text>
        I am a student from Germany interested in software development,
        networking and natural sciences.
        <br />
        In my free time I like to code web apps, adminiseter servers, a
        kubernetes cluster, AS207792, my autonomous system, and, of course,
        spend time with my friends.
        <br />
        Feel free to check out my <Link href="/now">/now</Link> page to see what
        I am doing curently and also check out my <Link href="/blog">blog</Link>
        .
      </Text>
      <Text>
        Besites the the <span className="italic">nerd</span> stuff I also
        somethimes watch Formula 1 and lissten to{" "}
        <Link href="https://music.apple.com/de/album/hamilton-an-american-musical-original-broadway-cast/1025210938">
          Hamilton
        </Link>
        . I have a friend who has a big obsession with this musical and after I
        watched it the first time I am also a big fan.
      </Text>
    </main>
  );
}
