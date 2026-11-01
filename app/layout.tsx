import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-ui";
import { profile } from "./data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kinonjones.uk"),
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    url: "./",
    siteName: profile.name,
    images: [{ url: "/images/portrait.webp", alt: profile.name }],
  },
  twitter: { card: "summary" },
  title: {
    default: `${profile.name} | Aerospace Engineering`,
    template: `%s | ${profile.name}`,
  },
  description:
    "The portfolio of Kinon A. Southerton Jones, a First-Class Aerospace Engineering graduate from Kingston University. Design, analysis, simulation and practical engineering.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
