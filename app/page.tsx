import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OProjektu } from "@/components/sections/OProjektu";
import { Izgradnja } from "@/components/sections/Izgradnja";
import { TipoviStanova } from "@/components/sections/TipoviStanova";
import { Lokacija } from "@/components/sections/Lokacija";
import { Kontakt } from "@/components/sections/Kontakt";

export const metadata = {
  title: "Divčibare Apartmani — Stambeni kompleks u izgradnji",
  description:
    "Ekskluzivni stambeno-apartmanski kompleks na Divčibarama. Dva objekta sa 32 apartmana kategorije B. Predprodaja u toku.",
};

export default function HomePage() {
  return (
    <>
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
