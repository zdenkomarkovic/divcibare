import { PROJEKAT } from "@/lib/constants";

const prednosti = [
  { ikona: "🏔️", naslov: "Planinska klima", opis: "Čist planinski vazduh i priroda na 1100m nadmorske visine" },
  { ikona: "⛷️", naslov: "Zimski turizam", opis: "Blizina skijaških staza i zimskih sadržaja Divčibara" },
  { ikona: "🌲", naslov: "Priroda i šetnja", opis: "Pešačke staze, šume i panoramski pogledi tokom cele godine" },
  { ikona: "🚗", naslov: "Pristupačnost", opis: "Samo 110 km od Beograda, dobra saobraćajna povezanost" },
];

export function Lokacija() {
  return (
    <section id="lokacija" className="py-20 md:py-28 bg-krema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-zlato text-sm tracking-[0.3em] uppercase font-semibold mb-3">
            Lokacija
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-zelena font-bold mb-5">
            Divčibare — srce planine
          </h2>
          <p className="text-stone max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Planina Maljen, Beogradsko naselje, ul. Beli narcis br. 80.
            Idealna pozicija za odmor u svim godišnjim dobima.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {prednosti.map((p) => (
            <div key={p.naslov} className="bg-zelena/5 border border-zelena/10 p-5 text-center">
              <span className="text-3xl block mb-3">{p.ikona}</span>
              <h4 className="text-zelena font-semibold text-sm mb-2">{p.naslov}</h4>
              <p className="text-stone text-xs leading-relaxed">{p.opis}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.5!2d20.0736!3d44.1082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDA2JzI5LjUiTiAyMMKwMDQnMjUuMCJF!5e0!3m2!1ssr!2srs!4v1700000000000!5m2!1ssr!2srs"
                title="Lokacija Divčibare apartmani — Beli narcis 80"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>

          <div className="bg-zelena text-krema p-8 flex flex-col justify-center">
            <h3 className="font-serif text-xl font-bold text-zlato mb-6">
              Adresa objekta
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <span className="text-zlato mt-0.5">📍</span>
                <div>
                  <p className="font-semibold text-sm">Adresa</p>
                  <p className="text-krema/70 text-sm mt-1">
                    ul. Beli narcis br. 80
                    <br />
                    Beogradsko naselje
                    <br />
                    Divčibare, Valjevo
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-zlato mt-0.5">📞</span>
                <div>
                  <p className="font-semibold text-sm">Telefon za prodaju</p>
                  <a
                    href={PROJEKAT.telefon_href}
                    className="text-zlato hover:text-zlato-svetlo transition-colors text-base font-bold mt-1 block"
                  >
                    {PROJEKAT.telefon}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-zlato mt-0.5">✉️</span>
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <a
                    href={`mailto:${PROJEKAT.email}`}
                    className="text-krema/70 hover:text-zlato transition-colors text-sm mt-1 block break-all"
                  >
                    {PROJEKAT.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-zlato mt-0.5">🏗️</span>
                <div>
                  <p className="font-semibold text-sm">Parcela</p>
                  <p className="text-krema/70 text-sm mt-1">
                    {PROJEKAT.parcela}
                    <br />
                    Površina: {PROJEKAT.povrsina_parcele}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${PROJEKAT.koordinate_lat},${PROJEKAT.koordinate_lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border-2 border-zlato text-zlato px-5 py-3 text-sm font-semibold text-center hover:bg-zlato hover:text-zelena transition-colors duration-200"
            >
              Otvori u Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
