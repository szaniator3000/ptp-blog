import Head from "next/head";
import React from "react";

const StatutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Statut Polskiego Towarzystwa Psychiatrycznego</title>
        <meta
          name="description"
          content="Statut Polskiego Towarzystwa Psychiatrycznego, z poprawkami wniesionymi na Walnym Zgromadzeniu Delegatów w dniu 26 kwietnia 1992 r. w Poznaniu, w dniu 3 czerwca 1998 r. w Bydgoszczy oraz w dniu 14 czerwca 2001 r. w Krakowie."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://example.com/statut" />
      </Head>

      {/* Hero section */}
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl font-bold">
            Statut Polskiego Towarzystwa Psychiatrycznego
          </h1>
        </div>
      </header>
      <main className="container mx-auto px-4 flex-1 py-8">
        <p>
          uchwalony na Nadzwyczajnym Walnym Zgromadzeniu Delegatów w dniu 30
          marca 1990 r. w Warszawie z poprawkami wniesionymi na Walnym
          Zgromadzeniu Delegatów w dniu 26 kwietnia 1992 r. w Poznaniu, w dniu 3
          czerwca 1998 r. w Bydgoszczy oraz w dniu 14 czerwca 2001 r. w Krakowie
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          I. Postanowienia ogólne
        </h2>
        <p>§ 1</p>
        <p>
          Stowarzyszenie nosi nazwę: Polskie Towarzystwo Psychiatryczne, zwane
          dalej Towarzystwem.
        </p>
        <p>§ 2</p>
        <p>
          Terenem działalności Towarzystwa jest obszar Rzeczypospolitej
          Polskiej, a siedzibą miasto stołeczne Warszawa.
        </p>
        <p>§ 3</p>
        <p>
          Towarzystwo jest stowarzyszeniem zarejestrowanym, działającym na
          podstawie obowiązującego prawa o stowarzyszeniach i z tego tytułu
          posiada osobowość prawną.
        </p>
        <p>§ 4</p>
        <p>
          Towarzystwo może być członkiem krajowych i zagranicznych stowarzyszeń
          o tych samych lub podobnych zadaniach.
        </p>
        <p>§ 5</p>
        <p>
          Towarzystwo może powoływać oddziały oraz koła, sekcje i komisje
          naukowe.
        </p>
      </main>
    </div>
  );
};
export default StatutPage;
