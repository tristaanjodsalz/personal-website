export function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`mb-2 ${className ?? ""}`}>{children}</p>;
}

export function TextMuted({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-current/80 ${className ?? ""}`}>{children}</p>;
}

export function TextExtraMuted({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-current/60 text-sm ${className ?? ""}`}>{children}</p>
  );
}

export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`scroll-m-20 text-balance font-extrabold text-4xl tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mt-8 scroll-m-20 border-b border-b-current/20 pb-2 font-semibold text-3xl tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`mt-4 scroll-m-20 font-semibold text-2xl tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
}
