"use client";

import { useState, useEffect, useRef } from "react";
import { PROJEKAT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const stanovi = [
  { index: 0, tip: "C", naziv: "Studio 30 m²", povrsina: "30 m²" },
  { index: 1, tip: "A", naziv: "Apartman 40 m²", povrsina: "40 m²" },
  { index: 2, tip: "B", naziv: "Apartman 41 m²", povrsina: "41 m²" },
  { index: 3, tip: "D", naziv: "Duplex u potkrovlju", povrsina: "" },
];

function selectApartmentType(index: number) {
  document.getElementById("stanovi")?.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    window.dispatchEvent(
      new CustomEvent("selectApartmentType", { detail: index })
    );
  }, 400);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [stanuviOpen, setStanoviOpen] = useState(false);
  const [mobileStanoviOpen, setMobileStanoviOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setStanoviOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-zelena shadow-lg py-3"
          : "bg-zelena/80 backdrop-blur-sm py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#pocetna" className="flex items-center gap-3">
          <img
            src="/divcibare-logo.svg"
            alt="Divčibare logo"
            width={51}
            height={51}
            className="rounded-full"
          />
          <div>
            <span className="text-krema font-serif text-lg font-bold leading-tight block">
              {PROJEKAT.naziv}
            </span>
            <span className="text-stone text-xs tracking-widest uppercase">
              Divčibare
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#o-projektu"
            className="text-krema/80 hover:text-zlato text-sm tracking-wide transition-colors duration-200 font-medium"
          >
            O projektu
          </a>
          <a
            href="#izgradnja"
            className="text-krema/80 hover:text-zlato text-sm tracking-wide transition-colors duration-200 font-medium"
          >
            Izgradnja
          </a>

          {/* Dropdown — Stanovi */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setStanoviOpen(true)}
            onMouseLeave={() => setStanoviOpen(false)}
          >
            <button
              onClick={() => setStanoviOpen((o) => !o)}
              className="flex items-center gap-1.5 text-krema/80 hover:text-zlato text-sm tracking-wide transition-colors duration-200 font-medium cursor-pointer"
            >
              Stanovi
              <svg
                className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  stanuviOpen ? "rotate-180" : ""
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 w-56 transition-all duration-200 origin-top pt-2",
                stanuviOpen
                  ? "opacity-100 scale-y-100 pointer-events-auto"
                  : "opacity-0 scale-y-95 pointer-events-none"
              )}
            >
            <div className="bg-zelena-tamna border border-zelena-svetla/40 shadow-2xl">
              <div className="py-1">
                <div className="px-4 py-2 border-b border-zelena-svetla/30">
                  <span className="text-stone text-[10px] tracking-widest uppercase font-semibold">
                    Izaberite tip stana
                  </span>
                </div>
                {stanovi.map((s) => (
                  <button
                    key={s.tip}
                    onClick={() => {
                      selectApartmentType(s.index);
                      setStanoviOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 flex items-center justify-between group hover:bg-zelena-svetla/30 transition-colors duration-150 cursor-pointer border-b border-zelena-svetla/10 last:border-0"
                  >
                    <div>
                      <span className="text-krema text-sm font-medium group-hover:text-zlato transition-colors">
                        {s.naziv}
                      </span>
                    </div>
                    {s.povrsina && (
                      <span className="text-zlato text-xs font-bold">
                        {s.povrsina}
                      </span>
                    )}
                  </button>
                ))}
                <a
                  href="#stanovi"
                  onClick={() => setStanoviOpen(false)}
                  className="flex items-center justify-center gap-1 px-4 py-2.5 bg-zelena-svetla/20 text-krema/60 hover:text-zlato text-xs transition-colors"
                >
                  Svi stanovi →
                </a>
              </div>
            </div>
            </div>
          </div>

          <a
            href="#lokacija"
            className="text-krema/80 hover:text-zlato text-sm tracking-wide transition-colors duration-200 font-medium"
          >
            Lokacija
          </a>
          <a
            href="#kontakt"
            className="text-krema/80 hover:text-zlato text-sm tracking-wide transition-colors duration-200 font-medium"
          >
            Kontakt
          </a>
          <a
            href="#kontakt"
            className="bg-zlato text-zelena px-5 py-2.5 text-sm font-semibold hover:bg-zlato-svetlo transition-colors duration-200"
          >
            Pošaljite upit
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-krema p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meni"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-zelena-tamna border-t border-zelena-svetla/30">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {[
              { href: "#o-projektu", label: "O projektu" },
              { href: "#izgradnja", label: "Izgradnja" },
              { href: "#lokacija", label: "Lokacija" },
              { href: "#kontakt", label: "Kontakt" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-krema/80 hover:text-zlato py-3 px-2 text-base border-b border-zelena-svetla/20 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile stanovi dropdown */}
            <div className="border-b border-zelena-svetla/20">
              <button
                onClick={() => setMobileStanoviOpen((o) => !o)}
                className="w-full flex items-center justify-between text-krema/80 py-3 px-2 text-base cursor-pointer"
              >
                <span>Stanovi</span>
                <svg
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    mobileStanoviOpen ? "rotate-180" : ""
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileStanoviOpen && (
                <div className="pb-2 pl-3">
                  {stanovi.map((s) => (
                    <button
                      key={s.tip}
                      onClick={() => {
                        selectApartmentType(s.index);
                        setMenuOpen(false);
                        setMobileStanoviOpen(false);
                      }}
                      className="w-full text-left flex items-center justify-between py-2.5 px-2 text-sm text-krema/70 hover:text-zlato transition-colors cursor-pointer"
                    >
                      <span>{s.naziv}</span>
                      {s.povrsina && (
                        <span className="text-zlato text-xs font-bold">
                          {s.povrsina}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-3 bg-zlato text-zelena px-5 py-3 text-center font-semibold hover:bg-zlato-svetlo transition-colors"
            >
              Pošaljite upit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
