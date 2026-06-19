"use client";

import { useState } from "react";
import { PROJEKAT } from "@/lib/constants";

interface FormState {
  ime: string;
  email: string;
  telefon: string;
  poruka: string;
}

type Status = "idle" | "loading" | "success" | "error";

export function Kontakt() {
  const [form, setForm] = useState<FormState>({
    ime: "",
    email: "",
    telefon: "",
    poruka: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.ime,
          email: form.email,
          phone: form.telefon,
          message: form.poruka,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ ime: "", email: "", telefon: "", poruka: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          data.error ?? "Došlo je do greške. Pokušajte ponovo ili nas pozovite."
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Greška u mreži. Molimo pokušajte ponovo.");
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-zelena">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-zlato text-sm tracking-[0.3em] uppercase font-semibold mb-3">
            Kontakt
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-krema font-bold mb-5">
            Zainteresovani ste?
          </h2>
          <p className="text-krema/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Pošaljite nam upit i javićemo vam se u najkraćem roku sa svim
            informacijama o dostupnim apartmanima i uslovima kupovine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="border-l-4 border-zlato pl-5">
                <p className="text-zlato font-semibold text-sm tracking-wide uppercase mb-1">
                  Telefon za prodaju
                </p>
                <a
                  href={PROJEKAT.telefon_href}
                  className="text-krema text-2xl font-serif font-bold hover:text-zlato transition-colors"
                >
                  {PROJEKAT.telefon}
                </a>
              </div>

              <div className="border-l-4 border-zelena-svetla pl-5">
                <p className="text-stone text-sm tracking-wide uppercase mb-1 font-semibold">
                  Email
                </p>
                <a
                  href={`mailto:${PROJEKAT.email}`}
                  className="text-krema/80 hover:text-zlato transition-colors break-all"
                >
                  {PROJEKAT.email}
                </a>
              </div>

              <div className="border-l-4 border-zelena-svetla pl-5">
                <p className="text-stone text-sm tracking-wide uppercase mb-1 font-semibold">
                  Adresa
                </p>
                <p className="text-krema/80 text-sm leading-relaxed">
                  ul. Beli narcis br. 80
                  <br />
                  Beogradsko naselje, Divčibare
                </p>
              </div>

              <div className="bg-zelena-tamna p-5 mt-6">
                <p className="text-zlato text-sm font-semibold mb-2">
                  Investitor:
                </p>
                <p className="text-krema/70 text-sm">
                  {PROJEKAT.investitor}, Beograd
                  <br />
                  Gr. dozvola br. {PROJEKAT.dozvola}
                  <br />
                  Izdata: {PROJEKAT.dozvola_datum}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="bg-zelena-tamna border border-zlato/30 p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-zlato/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-zlato"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-krema font-bold mb-3">
                  Poruka je poslata!
                </h3>
                <p className="text-krema/60 mb-6">
                  Hvala vam na interesovanju. Javićemo vam se u najkraćem roku.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-zlato text-sm hover:underline cursor-pointer"
                >
                  Pošalji novu poruku
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-krema p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="ime"
                      className="block text-sm font-semibold text-zelena mb-2"
                    >
                      Ime i prezime *
                    </label>
                    <input
                      id="ime"
                      name="ime"
                      type="text"
                      required
                      value={form.ime}
                      onChange={handleChange}
                      placeholder="Marko Marković"
                      className="w-full border-2 border-krema-tamna bg-white px-4 py-3 text-dark placeholder:text-stone/50 focus:outline-none focus:border-zelena transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefon"
                      className="block text-sm font-semibold text-zelena mb-2"
                    >
                      Broj telefona
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      value={form.telefon}
                      onChange={handleChange}
                      placeholder="06x xxx xxxx"
                      className="w-full border-2 border-krema-tamna bg-white px-4 py-3 text-dark placeholder:text-stone/50 focus:outline-none focus:border-zelena transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-zelena mb-2"
                  >
                    Email adresa *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="marko@primer.rs"
                    className="w-full border-2 border-krema-tamna bg-white px-4 py-3 text-dark placeholder:text-stone/50 focus:outline-none focus:border-zelena transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="poruka"
                    className="block text-sm font-semibold text-zelena mb-2"
                  >
                    Poruka *
                  </label>
                  <textarea
                    id="poruka"
                    name="poruka"
                    required
                    rows={5}
                    value={form.poruka}
                    onChange={handleChange}
                    placeholder="Zainteresovan/a sam za apartman tip... Molim vas da me kontaktirate..."
                    className="w-full border-2 border-krema-tamna bg-white px-4 py-3 text-dark placeholder:text-stone/50 focus:outline-none focus:border-zelena transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-zelena text-zlato py-4 font-semibold text-base hover:bg-zelena-svetla transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? "Slanje..." : "Pošalji upit →"}
                </button>

                <p className="text-stone text-xs text-center">
                  Vaši podaci se koriste isključivo za kontakt u vezi kupovine
                  apartmana i neće biti prosleđeni trećim licima.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
