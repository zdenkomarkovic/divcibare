"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/ui/Lightbox";

interface TipStana {
  tip: string;
  naziv: string;
  povrsina: string;
  opis: string;
  spratovi: string;
  brJedinica: string;
  slika: string;
}

const tipovi: TipStana[] = [
  {
    tip: "C",
    naziv: "Studio 30 m²",
    povrsina: "30 m²",
    opis: "Kompaktan studio apartman idealan za kratke boravke ili iznajmljivanje. Efikasno iskorišćen prostor sa svim potrebnim sadržajima.",
    spratovi: "Prizemlje, 1. i 2. sprat",
    brJedinica: "1 po spratu / 3 ukupno po objektu",
    slika: "/planovi/planprizemlja2.jpg",
  },
  {
    tip: "A",
    naziv: "Apartman 40 m²",
    povrsina: "40 m²",
    opis: "Funkcionalan dvosban apartman sa dnevnim boravkom otvorenim prema trpezariji i kuhinji, jednom spavaćom sobom i kompletnim kupatilom. Savršen za porodični odmor.",
    spratovi: "Prizemlje, 1. i 2. sprat",
    brJedinica: "2 po spratu / 6 ukupno po objektu",
    slika: "/40.PNG",
  },
  {
    tip: "B",
    naziv: "Apartman 41 m²",
    povrsina: "41 m²",
    opis: "Prostrana stambena jedinica sa nešto povećanom površinom dnevnog boravka. Odlična iskoristivost prostora i pristup zajedničkim sadržajima objekta.",
    spratovi: "Prizemlje, 1. i 2. sprat",
    brJedinica: "1 po spratu / 3 ukupno po objektu",
    slika: "/41.PNG",
  },
  {
    tip: "D",
    naziv: "Duplex — Potkrovlje",
    povrsina: "",
    opis: "Ekskluzivni dvospratni duplex apartman u potkrovlju sa galerijom na gornjem nivou. Panoramski prozori sa pogledom na planinu. Premium kategorija.",
    spratovi: "Potkrovlje (2 nivoa)",
    brJedinica: "4 ukupno po objektu",
    slika: "/planovi/planpotkrovlja1.jpg",
  },
];

const defaultTip: TipStana = tipovi[0]!;

const struktura = [
  { sprat: "Prizemlje", jedinice: "4 apartmana (2×40m² + 1×41m² + 1×30m²)" },
  { sprat: "1. sprat", jedinice: "4 apartmana (2×40m² + 1×41m² + 1×30m²)" },
  { sprat: "2. sprat", jedinice: "4 apartmana (2×40m² + 1×41m² + 1×30m²)" },
  { sprat: "Potkrovlje", jedinice: "4 duplex apartmana" },
];

const svePlanSlike = [
  ...tipovi.map((t) => ({ src: t.slika, alt: `Osnova — ${t.naziv}` })),
  { src: "/IMG-da82ce443282a4cce5c6186a3b4ffdac-V.jpg", alt: "Parking — 32 mesta, parcela 813/1 KO Divčibare" },
];

export function TipoviStanova() {
  const [aktivan, setAktivan] = useState(0);
  const [lightboxSlika, setLightboxSlika] = useState<number | null>(null);
  const tip: TipStana = tipovi[aktivan] ?? defaultTip;

  useEffect(() => {
    const handler = (e: CustomEvent<number>) => {
      setAktivan(e.detail);
    };
    window.addEventListener("selectApartmentType", handler as EventListener);
    return () =>
      window.removeEventListener(
        "selectApartmentType",
        handler as EventListener
      );
  }, []);

  return (
    <section id="stanovi" className="py-20 md:py-28 bg-krema-tamna">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-zlato text-sm tracking-[0.3em] uppercase font-semibold mb-3">
            Tipovi stanova
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-zelena font-bold mb-5">
            Struktura objekta
          </h2>
          <p className="text-stone max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Svaki od dva objekta ima prizemlje, tri sprata i potkrovlje sa
            duplex apartmanima — ukupno 16 stambenih jedinica po objektu.
          </p>
        </div>

        <div className="bg-zelena mb-12 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {struktura.map((s, i) => (
              <div
                key={i}
                className={`p-6 border-r border-zelena-svetla/30 last:border-r-0 ${
                  i === struktura.length - 1 ? "bg-zelena-svetla/20" : ""
                }`}
              >
                <p className="text-zlato font-bold text-sm tracking-widest uppercase mb-2">
                  {s.sprat}
                </p>
                <p className="text-krema/70 text-sm leading-relaxed">
                  {s.jedinice}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tipovi.map((t, i) => (
            <button
              key={t.tip}
              onClick={() => setAktivan(i)}
              className={cn(
                "px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer",
                aktivan === i
                  ? "bg-zelena text-zlato"
                  : "bg-krema text-zelena border-2 border-zelena/20 hover:border-zelena"
              )}
            >
              {t.tip === "D"
                ? "Tip D — Duplex u potkrovlju"
                : `Tip ${t.tip} — ${t.povrsina}`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Slika plana */}
          {aktivan === 0 || aktivan === 3 ? (
            <div className="relative aspect-[4/3] bg-zelena/10 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-zelena/20">
              <svg className="w-12 h-12 text-zelena/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-zelena/40 text-sm font-medium tracking-wide">
                Slika u pripremi
              </p>
            </div>
          ) : (
            <button
              onClick={() => setLightboxSlika(aktivan)}
              className="relative aspect-[4/3] overflow-hidden bg-zelena/5 group cursor-zoom-in w-full"
              aria-label={`Uvećaj osnovu — ${tip.naziv}`}
            >
              <Image
                src={tip.slika}
                alt={`Osnova — ${tip.naziv}`}
                fill
                className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-zelena-tamna/0 group-hover:bg-zelena-tamna/20 transition-colors duration-300 flex items-end justify-end p-3">
                <span className="text-white/0 group-hover:text-white/80 transition-colors bg-zelena/80 px-2 py-1 text-xs flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  Uvećaj
                </span>
              </div>
            </button>
          )}

          <div className="bg-krema p-8">
            <div className="inline-block bg-zelena text-zlato px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4">
              Tip {tip.tip}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-zelena font-bold mb-2">
              {tip.naziv}
            </h3>
            {tip.povrsina && (
              <p className="text-3xl font-serif font-bold text-zlato mb-6">
                {tip.povrsina}
              </p>
            )}
            <p className="text-dark/70 leading-relaxed mb-8">{tip.opis}</p>

            <div className="space-y-3 border-t border-krema-tamna pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-stone font-medium">Spratnost</span>
                <span className="text-dark font-semibold">{tip.spratovi}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone font-medium">Br. jedinica</span>
                <span className="text-dark font-semibold">{tip.brJedinica}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone font-medium">Kategorija</span>
                <span className="text-dark font-semibold">B</span>
              </div>
            </div>

            <a
              href="#kontakt"
              className="mt-8 w-full bg-zelena text-zlato px-6 py-4 font-semibold text-center block hover:bg-zelena-svetla transition-colors duration-200"
            >
              Zainteresovani ste? Pošaljite upit →
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => setLightboxSlika(4)}
            className="relative aspect-[4/3] overflow-hidden group cursor-zoom-in w-full"
            aria-label="Uvećaj sliku parkinga"
          >
            <Image
              src="/IMG-da82ce443282a4cce5c6186a3b4ffdac-V.jpg"
              alt="Parking — 32 mesta, parcela 813/1 KO Divčibare"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-zelena-tamna/10 group-hover:bg-zelena-tamna/40 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-zelena/80 px-3 py-2 flex items-center justify-between">
              <span className="text-krema/80 text-xs tracking-wide">
                Parking — 32 mesta
              </span>
              <svg className="w-3.5 h-3.5 text-zlato opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </button>
          <div className="bg-zelena p-6 flex flex-col justify-center">
            <h4 className="font-serif text-xl text-zlato font-bold mb-3">
              32 parking mesta
            </h4>
            <p className="text-krema/70 text-sm leading-relaxed">
              Projektom je predviđeno ukupno 32 parking mesta na katastarskoj
              parceli 813/1, KO Divčibare, čime je svaka funkcionalna celina
              obezbeđena sopstvenim parking prostorom.
            </p>
          </div>
        </div>
      </div>

      <Lightbox
        slike={svePlanSlike}
        aktivan={lightboxSlika}
        onZatvori={() => setLightboxSlika(null)}
        onPrethodna={() =>
          setLightboxSlika((a) =>
            a !== null ? (a - 1 + svePlanSlike.length) % svePlanSlike.length : 0
          )
        }
        onSledeca={() =>
          setLightboxSlika((a) =>
            a !== null ? (a + 1) % svePlanSlike.length : 0
          )
        }
      />
    </section>
  );
}
