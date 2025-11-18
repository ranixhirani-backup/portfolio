import type { Metadata } from "next";
import { ghibliFont } from "@/lib/font"; // Import the ghibli font (fallback)
import "./globals.css";

// Lightweight fallbacks for local development to avoid remote Google font
// requests. They expose the same `variable` property used in layout classNames.
const nunito = { variable: "--font-nunito" };
const ptSans = { variable: "--font-pt-sans" };

export const metadata: Metadata = {
  title: "Rohit Sharma",
  description: "Portfolio in Ghibli Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${ptSans.variable} ${ghibliFont.variable} antialiased relative`}
      >
        <div className="texture" />
        {children}
      </body>
    </html>
  );
}