import type { Metadata } from "next";
import { Bitter, Karla } from "next/font/google";
import "./globals.css";

const displayFont = Bitter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Roger Ross Plumbing & Heating | Roxborough's Neighbor Plumber",
  description:
    "Your neighbor, not just your plumber. 5.0 stars from 463 Google reviews. Nearly 20 years serving Roxborough, Manayunk, and NW Philadelphia. Cast iron, copper, old stacks — we know these houses. Call (215) 482-2969.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
