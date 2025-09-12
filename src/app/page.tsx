import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex h-[75vh] items-center justify-center">
        <h1 className="text-right text-4xl">Tristan Jockel</h1>
        <span className="m-6 h-32 w-[1px] bg-[#63636340] dark:bg-[#63636380]" />
        <Image
          src={"/image.png"}
          className="h-32 w-32 rounded-full object-cover"
          alt="Picture of Tristan Jockel"
          width={256}
          height={128}
          objectFit="cover"
        />
      </div>
      <main className="flex w-screen justify-center">
        <div>
          <p className="max-w-4xl p-4">
            Hi, I'm Tristan! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Natus dolore quibusdam, exercitationem nulla sit et vero
            officiis, alias quis iure quisquam saepe voluptates ipsa, in fuga
            laboriosam! Nam, tempora aut.
          </p>
        </div>
      </main>
    </>
  );
}
1;
