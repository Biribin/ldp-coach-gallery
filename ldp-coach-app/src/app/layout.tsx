import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GalleryNav } from "@/components/GalleryNav";
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
  title: "Galerie de landing pages — Coach fitness",
  description:
    "Une galerie de concepts de landing page pour une coach fitness fictive, chacun décliné dans un style visuel radicalement différent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <GalleryNav />
      </body>
    </html>
  );
}
