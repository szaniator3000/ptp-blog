import React from "react";
import Head from "next/head";

const Membership = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Membership | Polskie Towarzystwo Psychiatryczne</title>
            </Head>

            {/* Hero section */}
            <header className="bg-gray-900 py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-white text-3xl font-bold">Jak zostać członkiem PTP?</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 flex-1 py-8">
                <section>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                        Zgodnie ze Statutem
                    </h2>
                    <p className="mb-4">
                        Decyzję o przyjęciu w poczet członków Polskiego Towarzystwa Psychiatrycznego podejmuje właściwy terenowo Zarząd Oddziału PTP, na pisemny wniosek zainteresowanego poparty przez dwóch członków zwyczajnych PTP posiadających minimum roczny staż członkowski i uregulowane składki wobec PTP.
                    </p>
                    <p className="mb-4">
                        Szczegółowe kwestie reguluje Rozdział III Statutu PTP.
                    </p>
                    <p className="mb-4">
                        Zachęcamy do korzystania z możliwości składania aplikacji za pośrednictwem aplikacji SORGA (system obsługujący PTP): <a href="https://psychiatria.sorga.pl">https://psychiatria.sorga.pl</a>.
                    </p>
                    <p className="mb-4">
                        PONIŻEJ SKRÓCONA INSTRUKCJA:
                    </p>
                    <p className="mb-4">
                        Zmiana danych w systemie
                    </p>
                    <p className="mb-4">
                        Użyj opcji Rekrutacja / Deklaracja członkowska.
                    </p>
                    <p className="mb-4">
                        Deklaracja członkowska
                    </p>
                    <p className="mb-4">
                        System obsługi członków ma zaimplementowany formularz, który automatyzuje część procedury wnioskowania o członkostwo. Nie trzeba już pozyskiwać osobiście podpisów członków wprowadzających. Wystarczy podać w formularzu adresy e-mail członków wprowadzających przypisane do ich konta.
                    </p>
                    <p className="mb-4">
                        System wyśle deklarację członkowską do oddziału wyłącznie, jeśli obaj członkowie wprowadzający mają opłacone wszystkie składki oraz po zalogowaniu się potwierdzą zgodę na wprowadzenie danej osoby jako nowego członka PTP.
                    </p>
                    <p className="mb-4">
                        W przypadku braku zgody członka wprowadzającego, system wyśle do oddziału wniosek o członkostwo, który będzie musiał zostać zatwierdzony przez Zarząd Oddziału.
