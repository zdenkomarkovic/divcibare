import { PROJEKAT } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zelena-tamna text-krema/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-zlato font-serif text-2xl">⌂</span>
              <div>
                <span className="text-krema font-serif text-lg font-bold block">
                  {PROJEKAT.naziv}
                </span>
                <span className="text-stone text-xs tracking-widest uppercase">
                  Divčibare
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-krema/60">
              Stambeno-apartmanski kompleks kategorije B na Divčibarama. Dva
              objekta, 32 funkcionalne jedinice, 32 parking mesta.
            </p>
          </div>

          <div>
            <h4 className="text-zlato font-semibold text-sm tracking-widest uppercase mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={PROJEKAT.telefon_href}
                  className="hover:text-zlato transition-colors"
                >
                  {PROJEKAT.telefon}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PROJEKAT.email}`}
                  className="hover:text-zlato transition-colors"
                >
                  {PROJEKAT.email}
                </a>
              </li>
              <li className="text-krema/50">{PROJEKAT.adresa}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-zlato font-semibold text-sm tracking-widest uppercase mb-4">
              Pravne informacije
            </h4>
            <ul className="space-y-2 text-sm text-krema/50">
              <li>Investitor: {PROJEKAT.investitor}</li>
              <li>Gr. dozvola br. {PROJEKAT.dozvola}</li>
              <li>Izdata: {PROJEKAT.dozvola_datum}</li>
              <li>{PROJEKAT.org_vlasti}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zelena-svetla/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-krema/40">
          <span>
            © {year} {PROJEKAT.naziv}. Sva prava zadržana.
          </span>
          <span>Parcela {PROJEKAT.parcela} · {PROJEKAT.povrsina_parcele}</span>
          <span>
            Izrada sajta:{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zlato transition-colors"
            >
              Manikam Web Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
