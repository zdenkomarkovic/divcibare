"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface LightboxProps {
  slike: { src: string; alt: string }[];
  aktivan: number | null;
  onZatvori: () => void;
  onPrethodna: () => void;
  onSledeca: () => void;
}

export function Lightbox({
  slike,
  aktivan,
  onZatvori,
  onPrethodna,
  onSledeca,
}: LightboxProps) {
  const touchStartX = useRef<number | null>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (aktivan === null) return;
      if (e.key === "Escape") onZatvori();
      if (e.key === "ArrowLeft") onPrethodna();
      if (e.key === "ArrowRight") onSledeca();
    },
    [aktivan, onZatvori, onPrethodna, onSledeca]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (aktivan !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [aktivan]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? 0;
    const diff = touchStartX.current - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) onSledeca();
      else onPrethodna();
    }
    touchStartX.current = null;
  };

  if (aktivan === null) return null;

  const slika = slike[aktivan];
  const ukupno = slike.length;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      onClick={onZatvori}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Zatvori */}
      <button
        onClick={onZatvori}
        className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2 cursor-pointer"
        aria-label="Zatvori"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Brojač */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-sm z-10 select-none">
        {aktivan + 1} / {ukupno}
      </div>

      {/* Swipe hint — samo mobile */}
      {ukupno > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs z-10 sm:hidden select-none">
          ← prevucite prstom →
        </div>
      )}

      {/* Prethodna — skrivena na mobilnom */}
      {ukupno > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrethodna(); }}
          className="absolute left-3 sm:left-6 text-white/70 hover:text-white z-10 p-2 cursor-pointer bg-black/30 hover:bg-black/60 transition-colors hidden sm:block"
          aria-label="Prethodna slika"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Slika */}
      <div
        className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4 sm:mx-20"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={slika?.src ?? ""}
          alt={slika?.alt ?? ""}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
      </div>

      {/* Sledeća — skrivena na mobilnom */}
      {ukupno > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onSledeca(); }}
          className="absolute right-3 sm:right-6 text-white/70 hover:text-white z-10 p-2 cursor-pointer bg-black/30 hover:bg-black/60 transition-colors hidden sm:block"
          aria-label="Sledeća slika"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Indikatori (tačkice) na mobilnom */}
      {ukupno > 1 && ukupno <= 30 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 sm:hidden">
          {slike.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-200 ${
                i === aktivan
                  ? "w-4 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
