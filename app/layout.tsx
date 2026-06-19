import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Divčibare Apartmani — Stambeni kompleks u izgradnji",
    template: "%s | Divčibare Apartmani",
  },
  description:
    "Ekskluzivni stambeno-apartmanski kompleks na Divčibarama. Dva objekta sa 32 apartmana kategorije B. Predprodaja u toku. Investitor: Dragan Prošić, Beograd.",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Divčibare Apartmani",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sr"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-krema text-dark font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
