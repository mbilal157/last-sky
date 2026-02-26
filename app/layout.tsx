import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  title: "The Skyline Production",
  description:
    "Skyline Production is a full-service creative agency offering web design, development, graphic design, video editing, and animation services. We help brands grow with modern, user-focused digital solutions.",
  keywords: [
    "Skyline Production",
    "web development",
    "graphic design",
    "video editing",
    "animation services",
    "digital agency Pakistan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
          <Navbar />
          {children}
      </body>
    </html>
  );
}
