export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://apartmanidivcibare.rs";

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "Divčibare Apartmani";

export const PROJEKAT = {
  naziv: "Divčibare Apartmani",
  investitor: "Dragan Prošić",
  adresa: "ul. Beli narcis br. 80, Divčibare",
  adresaKratko: "Beogradsko naselje, Divčibare",
  parcela: "813/1, KO Divčibare",
  povrsina_parcele: "3.000 m²",
  dozvola: "ROP-VAL-29125-CPIH-4/2023",
  dozvola_datum: "15.06.2023.",
  org_vlasti: "Gradska uprava Valjevo",
  telefon: "064 190 0222",
  telefon_href: "tel:+381641900222",
  email: "draganprosic1975@gmail.com",
  koordinate_lat: 44.1082,
  koordinate_lng: 20.0736,
} as const;

export const STANOVI = [
  {
    tip: "A",
    naziv: "Apartman 40 m²",
    povrsina: "40 m²",
    opis: "Funkcionalan dvosban apartman sa dnevnim boravkom, kuhinjom, spavaćom sobom i kupatilom.",
    spratovi: ["Prizemlje", "1. sprat", "2. sprat"],
    count: 2,
  },
  {
    tip: "B",
    naziv: "Apartman 41 m²",
    povrsina: "41 m²",
    opis: "Prostrani dvosban apartman sa terasom i pogledom na planinu.",
    spratovi: ["Prizemlje", "1. sprat", "2. sprat"],
    count: 1,
  },
  {
    tip: "C",
    naziv: "Studio 30 m²",
    povrsina: "30 m²",
    opis: "Kompaktan studio apartman, idealan za odmor ili kratkoročni najam.",
    spratovi: ["Prizemlje", "1. sprat", "2. sprat"],
    count: 1,
  },
  {
    tip: "D",
    naziv: "Duplex — Potkrovlje",
    povrsina: "60–80 m²",
    opis: "Dvospratni duplex apartman u potkrovlju sa galerijom i panoramskim prozorima.",
    spratovi: ["Potkrovlje"],
    count: 4,
  },
] as const;
