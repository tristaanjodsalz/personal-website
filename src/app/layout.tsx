import "tristanjockel/styles/globals.css";

import type { Metadata } from "next";
import { Roboto, Space_Mono } from "next/font/google";
import { ThemeProvider } from "./_components/theme-provider";

export const metadata: Metadata = {
  title: "",
  description: "",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const roboto = Roboto({});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${roboto.className}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
