import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OProjektu } from "@/components/sections/OProjektu";
import { Izgradnja } from "@/components/sections/Izgradnja";
import { TipoviStanova } from "@/components/sections/TipoviStanova";
import { Lokacija } from "@/components/sections/Lokacija";
import { Kontakt } from "@/components/sections/Kontakt";
import { JsonLd } from "@/components/seo/JsonLd";
import { PROJEKAT, STANOVI } from "@/lib/constants";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://apartmanidivcibare.rs";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Divčibare Apartmani",
      inLanguage: "sr-RS",
    },
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE_URL}/#kompleks`,
      name: "Divčibare Apartmani",
      description:
        "Stambeno-apartmanski kompleks u izgradnji na Divčibarama. Dva objekta sa ukupno 32 apartmana kategorije B i 32 parking mesta. Predprodaja u toku.",
      url: SITE_URL,
      image: `${SITE_URL}/hero.jpg`,
      numberOfAccommodationUnits: 32,
      address: {
        "@type": "PostalAddress",
        streetAddress: PROJEKAT.adresa,
        addressLocality: "Divčibare",
        addressRegion: "Kolubarski okrug",
        postalCode: "14224",
        addressCountry: "RS",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: PROJEKAT.koordinate_lat,
        longitude: PROJEKAT.koordinate_lng,
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Parking",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Planinska klima",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Blizina skijaških staza",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Pešačke staze",
          value: true,
        },
      ],
      containsPlace: STANOVI.map((s) => ({
        "@type": "Apartment",
        name: s.naziv,
        description: s.opis,
        floorSize: {
          "@type": "QuantitativeValue",
          value: s.povrsina,
          unitCode: "MTK",
        },
      })),
    },
    {
      "@type": ["LocalBusiness", "RealEstateAgent"],
      "@id": `${SITE_URL}/#investitor`,
      name: "Divčibare Apartmani",
      url: SITE_URL,
      telephone: PROJEKAT.telefon_href.replace("tel:", ""),
      email: PROJEKAT.email,
      image: `${SITE_URL}/hero.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: PROJEKAT.adresa,
        addressLocality: "Divčibare",
        addressRegion: "Kolubarski okrug",
        postalCode: "14224",
        addressCountry: "RS",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: PROJEKAT.koordinate_lat,
        longitude: PROJEKAT.koordinate_lng,
      },
      hasMap: `https://maps.google.com/?q=${PROJEKAT.koordinate_lat},${PROJEKAT.koordinate_lng}`,
      areaServed: {
        "@type": "Place",
        name: "Divčibare, Srbija",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main>
        <Hero />
        <OProjektu />
        <Izgradnja />
        <TipoviStanova />
        <Lokacija />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
