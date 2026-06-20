"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";

const radoviFotos = [
  "IMG-22128644fb81d6bfe4e1e067e43209da-V.jpg",
  "IMG-25a1029b30094bd59a7cb20592c96878-V.jpg",
  "IMG-32579db1972624d0b897e876eb0a2b34-V.jpg",
  "IMG-3b148106b5220300b963c3033a1f025a-V.jpg",
  "IMG-40c77c69fca643c1d18b8b52e869aa94-V.jpg",
  "IMG-51b87438556b3a5ca6e5e114a5e7797a-V.jpg",
  "IMG-6cc6c98bbd9b0c4df0397435aab6a8b9-V.jpg",
  "IMG-6ebc3ca7ae3d32977a4961b91e35cc0e-V.jpg",
  "IMG-8a044484b88c2ea9b8e1592bc5523df7-V.jpg",
  "IMG-9454df63825cc44c164fa68a93f4edf0-V.jpg",
  "IMG-9deaa595953e516653377f1a259f5b10-V.jpg",
  "IMG-9e1ef07baacb26ee8865321aed5bc107-V.jpg",
  "IMG-b9426cf00a3514bd7cde9c314a75718b-V.jpg",
  "IMG-bcdca1b7fbe26c1d634164511bb02181-V.jpg",
  "IMG-ced841b406e582b670187de5ff7953dc-V.jpg",
  "IMG-ddd5593dd74fbbde1f535a717a5415a0-V.jpg",
  "IMG-de9d97c389e02f87b0d878b0842f6e03-V.jpg",
  "IMG-df39211d508e5ef88ebfd0c700db5b98-V.jpg",
  "IMG-df6058891fe370e8c18ae442bbe4727c-V.jpg",
  "IMG-e2613d069a17572da76f80bdb085cb18-V.jpg",
  "IMG-e2a8f01b02cc2be9e0a58d67778e89c7-V.jpg",
  "IMG-ef58acc49f104d8b18665bb30b03a338-V.jpg",
];

const slike = radoviFotos.map((f, i) => ({
  src: `/radovi/${f}`,
  alt: `Gradilište — fotografija ${i + 1}`,
}));

const faze = [
  { faza: "Jun 2023.", opis: "Izdata građevinska dozvola", done: true },
  { faza: "2024.", opis: "Početak radova — priprema terena i iskop", done: true },
  { faza: "2025.", opis: "Betonski radovi i zidanje", done: true },
  { faza: "2026.", opis: "Završni radovi i fasada", done: false },
  { faza: "Kraj 2026.", opis: "Primopredaja ključeva", done: false },
];

export function Izgradnja() {
  const [aktivan, setAktivan] = useState<number | null>(null);

  return (
    <section id="izgradnja" className="py-20 md:py-28 bg-zelena">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-zlato text-sm tracking-[0.3em] uppercase font-semibold mb-3">
            Dinamika izgradnje
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-krema font-bold mb-5">
            Radovi su u toku
          </h2>
          <p className="text-krema/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Pratite napredak gradnje kroz fotografije sa terena. Objekat raste korak po korak, uz
            punu transparentnost prema budućim vlasnicima.
          </p>
        </div>

        {/* Timeline */}
        {/* <div className="mb-14">
          <div className="flex flex-col sm:flex-row gap-0 justify-between relative">
            <div className="hidden sm:block absolute top-4 left-[5%] right-[5%] h-0.5 bg-zelena-svetla" />
            {faze.map((f, i) => (
              <div
                key={i}
                className="relative flex sm:flex-col items-start sm:items-center sm:text-center gap-4 sm:gap-2 mb-6 sm:mb-0 sm:flex-1"
              >
                <div
                  className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
                    f.done
                      ? "bg-zlato border-zlato"
                      : "bg-zelena border-zelena-svetla"
                  }`}
                >
                  {f.done && (
                    <svg
                      className="w-4 h-4 text-zelena"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <p
                    className={`text-xs font-bold tracking-widest uppercase mb-1 ${
                      f.done ? "text-zlato" : "text-krema/40"
                    }`}
                  >
                    {f.faza}
                  </p>
                  <p
                    className={`text-sm leading-tight ${
                      f.done ? "text-krema/80" : "text-krema/40"
                    }`}
                  >
                    {f.opis}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Galerija */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
          {slike.map((slika, i) => (
            <button
              key={slika.src}
              onClick={() => setAktivan(i)}
              className="relative aspect-square overflow-hidden group cursor-pointer block"
              aria-label={`Otvori ${slika.alt}`}
            >
              <Image
                src={slika.src}
                alt={slika.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-zelena-tamna/0 group-hover:bg-zelena-tamna/50 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-krema/40 text-sm mt-6">
          Kliknite na fotografiju za prikaz u punoj veličini · {slike.length} snimaka
        </p>
      </div>

      <Lightbox
        slike={slike}
        aktivan={aktivan}
        onZatvori={() => setAktivan(null)}
        onPrethodna={() =>
          setAktivan((a) => (a !== null ? (a - 1 + slike.length) % slike.length : 0))
        }
        onSledeca={() => setAktivan((a) => (a !== null ? (a + 1) % slike.length : 0))}
      />
    </section>
  );
}
