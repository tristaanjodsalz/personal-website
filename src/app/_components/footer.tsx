export function Footer() {
  return (
    <div className="flex w-screen flex-col justify-between gap-8 bg-background-light p-4 px-[max(calc(50vw-29rem),1rem)] text-neutral-400 sm:flex-row">
      <div>
        <p>Build by Tristan Jockel :D</p>
      </div>
      <div className="sm:text-right">
        <p>
          Source available on{" "}
          <a
            href="https://github.com/tristaanjodsalz/personal-website"
            className=" underline"
          >
            tristaanjodsalz/personal-website
          </a>
        </p>
      </div>
    </div>
  );
}
