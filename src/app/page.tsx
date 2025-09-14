import { MapPin } from "lucide-react";
import Image from "next/image";

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
        <main>
          <p>
            Hi, I'm Tristan! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Natus dolore quibusdam, exercitationem nulla sit et vero
            officiis, alias quis iure quisquam saepe voluptates ipsa, in fuga
            laboriosam! Nam, tempora aut.
          </p>
        </main>
      </div>
    </>
  );
}
