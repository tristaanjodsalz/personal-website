import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="mt-[15vh] mb-[12vh] flex items-center justify-center">
        <div>
          <h1 className="mb-0.5 text-right text-4xl">Tristan Jockel</h1>
          <span className="mr-4 text-current/60">he/him</span>
          <span className="text-current/60">European Union</span>
        </div>
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
      <main className="my-[5vh] flex w-screen justify-center">
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
