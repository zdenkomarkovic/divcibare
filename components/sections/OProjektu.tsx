"use client";

import Image from "next/image";
import { useState } from "react";
import { PROJEKAT } from "@/lib/constants";
import { Lightbox } from "@/components/ui/Lightbox";

const stats = [
  { broj: "2", opis: "Stambena objekta" },
  { broj: "32", opis: "Apartmana ukupno" },
  { broj: "32", opis: "Parking mesta" },
  { broj: "B", opis: "Kategorija objekta" },
];

const slike = [
  { src: "/planovi/katastarskiplan.jpg", alt: "Katastarski plan parcele 813/1, KO Divčibare" },
  { src: "/planovi/planprizemlja1.jpg", alt: "Osnova prizemlja — Objekat 1" },
  { src: "/planovi/planpotkrovlja3.jpg", alt: "Osnova potkrovlja — duplex" },
  { src: "/resenje/IMG-f69a3dbff5cef5b6ec2988b341850e98-V.jpg", alt: "Rešenje o građevinskoj dozvoli" },
];

export function OProjektu() {
  const [aktivan, setAktivan] = useState<number | null>(null);

  return (
    <section id="o-projektu" className="py-20 md:py-28 bg-krema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-zlato text-sm tracking-[0.3em] uppercase font-semibold mb-3">
            O projektu
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-zelena font-bold mb-5">
            Stambeno-apartmanski kompleks
          </h2>
          <p className="text-stone max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Moderan stambeni kompleks u izgradnji na Divčibarama, namenjen
            odmoru i investiciji na jednoj od omiljenih srpskih planina.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.opis} className="bg-zelena text-center py-8 px-4">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-zlato mb-2">
                {s.broj}
              </div>
              <div className="text-krema/70 text-sm sm:text-base tracking-wide">
                {s.opis}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-zelena font-bold mb-5">
              Projekat u brojkama
            </h3>
            <div className="space-y-4 text-dark/80 leading-relaxed">
              <p>
                Projekat predviđa izgradnju dva stambena objekta apartmanskog
                tipa (Objekat 1 i Objekat 2), svaki sa po{" "}
                <strong>16 stanova</strong> (funkcionalnih celina).
              </p>
              <p>
                Svaki objekat ima <strong>prizemlje, tri sprata</strong> i{" "}
                <strong>potkrovlje sa duplex apartmanima</strong>. Po spratu se
                nalaze četiri stambene jedinice različitih kvadratura.
              </p>
              <p>
                Objekti se grade na katastarskoj parceli{" "}
                <strong>{PROJEKAT.parcela}</strong>, površine{" "}
                <strong>{PROJEKAT.povrsina_parcele}</strong>, na adresi{" "}
                <strong>{PROJEKAT.adresa}</strong>.
              </p>
            </div>

            <div className="mt-8 bg-krema-tamna border-l-4 border-zlato p-5">
              <p className="text-sm text-stone font-semibold uppercase tracking-wide mb-2">
                Građevinska dozvola
              </p>
              <p className="text-dark text-sm leading-relaxed">
                Br. <strong>{PROJEKAT.dozvola}</strong> od{" "}
                <strong>{PROJEKAT.dozvola_datum}</strong>
                <br />
                Izdata od strane: {PROJEKAT.org_vlasti}
              </p>
            </div>

            <div className="mt-5 bg-krema-tamna border-l-4 border-zelena p-5">
              <p className="text-sm text-stone font-semibold uppercase tracking-wide mb-2">
                Investitor
              </p>
              <p className="text-dark text-sm">
                <strong>{PROJEKAT.investitor}</strong>, Beograd
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {slike.map((slika, i) => (
              <button
                key={slika.src}
                onClick={() => setAktivan(i)}
                className={`relative overflow-hidden group cursor-pointer ${
                  i === 0 ? "col-span-3 aspect-[16/9]" : "aspect-square"
                }`}
                aria-label={`Otvori: ${slika.alt}`}
              >
                <Image
                  src={slika.src}
                  alt={slika.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-zelena-tamna/0 group-hover:bg-zelena-tamna/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-zelena/80 px-3 py-2 flex items-center justify-between">
                  <span className="text-krema/80 text-xs tracking-wide">
                    {i === 0
                      ? "Katastarski plan"
                      : i === 1
                        ? "Osnova prizemlja"
                        : i === 2
                          ? "Osnova potkrovlja"
                          : "Gr. dozvola"}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-zlato opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        slike={slike}
        aktivan={aktivan}
        onZatvori={() => setAktivan(null)}
        onPrethodna={() =>
          setAktivan((a) => (a !== null ? (a - 1 + slike.length) % slike.length : 0))
        }
        onSledeca={() =>
          setAktivan((a) => (a !== null ? (a + 1) % slike.length : 0))
        }
      />
    </section>
  );
}
