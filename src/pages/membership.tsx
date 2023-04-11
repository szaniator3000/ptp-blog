import Head from "next/head";

const MembershipPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Jak zostać członkiem PTP? | Polskie Towarzystwo Psychiatryczne</title>
            </Head>

            {/* Hero section */}
            <header className="bg-gray-900 py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-white text-3xl font-bold">Jak zostać członkiem PTP?</h1>
                </div>
            </header>

            {/* Main content */}
            <main className="container mx-auto px-4 flex-1 py-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Zgłoszenie kandydatury</h2>
                    <p className="mb-4">
                        Zgodnie ze Statutem decyzję o przyjęciu w poczet członków Polskiego Towarzystwa Psychiatrycznego
                        podejmuje właściwy terenowo Zarząd Oddziału PTP, na pisemny wniosek zainteresowanego poparty
                        przez dwóch członków zwyczajnych PTP posiadających minimum roczny staż członkowski i uregulowane
                        składki wobec PTP.
                    </p>
                    <p className="mb-4">
                        Szczegółowe kwestie reguluje Rozdział III Statutu PTP.
                    </p>
                    <p className="mb-4">
                        Zachęcamy do korzystania z możliwości składania aplikacji za pośrednictwem aplikacji SORGA
                        (system obsługujący PTP):&nbsp;
                        <a href="https://psychiatria.sorga.pl" target="_blank" rel="noopener noreferrer"
                           className="underline">
                            https://psychiatria.sorga.pl
                        </a>.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Deklaracja członkowska</h2>
                    <p className="mb-4">
                        System obsługi członków ma zaimplementowany formularz, który automatyzuje część procedury
                        wnioskowania o członkostwo. Nie trzeba już pozyskiwać osobiście podpisów członków
                        wprowadzających. Wystarczy podać w formularzu adresy e-mail członków wprowadzających przypisane
                        do ich konta.
                    </p>

                    <p className="mb-4">
                        System wyśle deklarację członkowską do oddziału wyłącznie, jeśli obaj członkowie wprowadzający
                        mają opłacone wszystkie składki oraz po zalogowaniu się potwierdzą zgodę na wprowadzenie danej
                        osoby jako nowego członka PTP.
                    </p>
                    <p className="mb-4">
                        Poniżej znajduje się instrukcja akceptacji wniosków przez członków wprowadzających.
                    </p>
                    <p className="mb-4">
                        Pobierz:&nbsp;
                        <a href="/downloads/instruction.pdf" download className="underline">
                            Instrukcja opłacania składek członkowskich PTP (PDF)
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Wniosek papierowy</h2>
                    <p className="mb-4">
                        Alternatywnie można składać wnioski w formie dotychczas stosowanej tj. papierowej (jednak
                        procedura ta trwa dłużej w stosunku do aplikacji SORGA).
                    </p>
                    <p className="mb-4">
                        Deklarację członkowską (druk do pobrania:&nbsp;
                        <a href="/downloads/declaration.docx" download className="underline">
                            MS Word
                        </a>,&nbsp;
                        <a href="/downloads/declaration.pdf" download className="underline">
                            PDF
                        </a>) należy wydrukować DWUSTRONNIE w dwóch egzemplarzach i przesłać na adres oddziału wraz z
                        potwierdzeniem wpłaty aktualnej składki członkowskiej.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default MembershipPage;
