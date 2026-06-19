import Image from "next/image";

export function Hero() {
  return (
    <section
      id="pocetna"
      className="relative h-screen min-h-[600px] flex items-end lg:items-end justify-center lg:justify-start"
    >
      <Image
        src="/hero.jpg"
        alt="Divčibare apartmani — 3D vizualizacija kompleksa"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zelena-tamna/70 via-zelena/30 to-zelena-tamna/0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
        <div className="text-center lg:text-left max-w-2xl">
          <p className="text-zlato text-xs sm:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase font-semibold mb-3 sm:mb-4">
            Divčibare · U izgradnji · Predprodaja
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-krema font-bold leading-tight mb-4 sm:mb-6">
            Vaš odmor na <span className="text-zlato italic">Divčibarama</span>
          </h1>
          <p className="text-krema/80 text-sm sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-10">
            Dva stambena objekta apartmanskog tipa u srcu planine. 32 funkcionalne jedinice
            kategorije B, 32 parking mesta. Idealno za odmor i investiciju.
          </p>

          <div className="flex flex-row gap-2 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#stanovi"
              className="bg-zlato text-zelena px-4 py-2.5 sm:px-8 sm:py-4 font-semibold text-sm sm:text-base hover:bg-zlato-svetlo transition-colors duration-200 tracking-wide"
            >
              Pogledajte stanove
            </a>
            <a
              href="#kontakt"
              className="hidden sm:block border-2 border-krema/60 text-krema px-4 py-2.5 sm:px-8 sm:py-4 font-semibold text-sm sm:text-base hover:border-zlato hover:text-zlato transition-colors duration-200 tracking-wide"
            >
              Pošaljite upit
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <a
          href="#o-projektu"
          className="text-krema/60 hover:text-zlato transition-colors animate-bounce"
          aria-label="Skrolujte dole"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
