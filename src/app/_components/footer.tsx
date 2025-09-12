export function Footer() {
  return (
    <div className="flex w-screen flex-row justify-between gap-8 bg-background-light p-4 px-[max(calc(50vw-29rem),4rem)] text-neutral-400">
      <div>
        <p>Build by Tristan Jockel :D</p>
      </div>
      <div className="text-right">
        <p>
          Source available on{" "}
          <a
            href="https://github.com/Minecrafter5K/personal-website"
            className=" underline"
          >
            Minecrafer5K/personal-website
          </a>
        </p>
      </div>
    </div>
  );
}
