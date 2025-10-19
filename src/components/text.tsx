export function Text({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p className={`mb-2 ${className ?? ""}`} {...props}>
      {children}
    </p>
  );
}

export function TextMuted({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p className={`text-current/80 ${className ?? ""}`} {...props}>
      {children}
    </p>
  );
}

export function TextExtraMuted({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p className={`text-current/60 text-sm ${className ?? ""}`} {...props}>
      {children}
    </p>
  );
}

export function Title({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className={`scroll-m-20 text-balance font-extrabold text-4xl tracking-tight ${className ?? ""}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={`mt-8 scroll-m-20 border-b border-b-current/20 pb-2 font-semibold text-3xl tracking-tight ${className ?? ""}`}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={`mt-4 scroll-m-20 font-semibold text-2xl tracking-tight ${className ?? ""}`}
      {...props}
    >
      {children}
    </h3>
  );
}
