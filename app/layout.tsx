import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaowser Pro — App & Web Developer",
  description:
    "Kaowser Pro — Personal portfolio of Kaowser Ahmed, App & Web Developer and Vibe Coder. Building fast, modern digital experiences.",
  keywords: [
    "Kaowser Ahmed",
    "App Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Vibe Coder",
    "Portfolio",
  ],
  authors: [{ name: "Kaowser Ahmed" }],
  openGraph: {
    title: "Kaowser Pro — App & Web Developer",
    description:
      "Kaowser Pro — Building fast, modern digital experiences. App & Web Developer • Vibe Coder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
