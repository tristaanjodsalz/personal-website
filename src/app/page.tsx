import Link from "next/link";

export default function HomePage() {
  return (
    <main className="">
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl text-right">Tristan Jockel</h1>
        <span className="m-6 w-0.5 h-32 bg-black" />
        <div className="w-32 h-32 rounded-full bg-red-200" />
      </div>
    </main>
  );
}
