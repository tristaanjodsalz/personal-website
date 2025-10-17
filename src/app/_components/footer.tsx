export function Footer() {
  return (
    <div className="flex w-screen flex-col justify-between gap-8 bg-background-light p-4 px-[max(calc(50vw-29rem),1rem)] text-neutral-400 sm:flex-row">
      <div>
        <p>Build by Tristaan Jodsalz :D</p>
      </div>
      <div className="sm:text-right">
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
