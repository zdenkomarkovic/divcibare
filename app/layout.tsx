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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Apartmani Divčibare — Prodaja apartmana na Divčibarama",
    template: "%s | Divčibare Apartmani",
  },
  description:
    "Prodaja apartmana na Divčibarama u izgradnji. Stambeno-apartmanski kompleks — 2 objekta, 32 apartmana kategorije B, 32 parking mesta. Predprodaja u toku. Investitor: Dragan Prošić.",
  keywords: [
    "apartmani divčibare",
    "prodaja apartmana divčibare",
    "kupovina apartmana divčibare",
    "stanovi divčibare",
    "novogradnja divčibare",
    "predprodaja apartmana planina",
    "apartmani maljen",
    "planinski apartmani srbija",
    "investicija nekretnine divčibare",
    "stambeni kompleks divčibare",
    "apartmani beli narcis divčibare",
    "odmor planina apartman",
  ],
  authors: [{ name: "Dragan Prošić" }],
  creator: "Dragan Prošić",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: "Divčibare Apartmani",
    title: "Apartmani Divčibare — Prodaja apartmana na Divčibarama",
    description:
      "Predprodaja apartmana na Divčibarama. 32 apartmana kategorije B u 2 objekta, 32 parking mesta. Planinska klima, blizina ski staza, 110 km od Beograda.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Divčibare apartmani — 3D vizualizacija stambenog kompleksa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartmani Divčibare — Predprodaja u toku",
    description:
      "32 apartmana kategorije B na Divčibarama. Planinska klima, parking, 110 km od Beograda.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "RS-12",
    "geo.placename": "Divčibare, Srbija",
    "geo.position": "44.1082;20.0736",
    ICBM: "44.1082, 20.0736",
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
