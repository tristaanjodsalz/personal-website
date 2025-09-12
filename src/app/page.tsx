export default function HomePage() {
  return (
    <>
      <div className="h-[75vh] flex items-center justify-center">
        <h1 className="text-4xl text-right">Tristan Jockel</h1>
        <span className="m-6 w-[1px] h-32 dark:bg-[#63636380] bg-[#63636340]" />
        <div className="w-32 h-32 rounded-full bg-red-200" />
      </div>
      <main className="flex justify-center w-screen">
        <p className="max-w-4xl p-4">
          Hi, I'm Tristan! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Natus dolore quibusdam, exercitationem nulla sit et vero
          officiis, alias quis iure quisquam saepe voluptates ipsa, in fuga
          laboriosam! Nam, tempora aut.
        </p>
      </main>
    </>
  );
}
