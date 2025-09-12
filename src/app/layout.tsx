import "tristanjockel/styles/globals.css";

import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { ThemeProvider } from "./_components/theme-provider";

export const metadata: Metadata = {
  title: "Tristan Jockel",
  description: "",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${space_grotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col justify-between gap-2 bg-background text-text selection:bg-text selection:text-background">
        <div>
          <Header />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
