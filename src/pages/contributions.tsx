import Head from "next/head";

const MembershipFeesPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Składki członkowskie | Polskie Towarzystwo Psychiatryczne</title>
            </Head>

            <header className="bg-gray-900 text-white py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Składki członkowskie</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 flex-1">
                <div className="py-8">
                    <h2 className="text-2xl font-bold mb-4">
                        Wysokości składek w kolejnych latach:
                    </h2>
                    <ul className="list-disc pl-4 mb-4">
                        <li>od 2012: 120 zł</li>
                        <li>2008 - 2011: 100 zł</li>
                        <li>2007: 70 zł</li>
                    </ul>
                    <p className="mb-4">
                        Uchwałą Zarządu Głównego PTP dokonano umorzenia zadłużenia członków
                        za lata do 2006 włącznie.
                    </p>
                    <p className="mb-4">
                        Składki za rok 2011 i kolejne należy wpłacać na konto Zarządu
                        Głównego Polskiego Towarzystwa Psychiatrycznego.
                    </p>
                    <h3 className="text-lg font-bold mb-2">Dane do przelewu:</h3>
                    <p className="mb-4">78 1020 1156 0000 7702 0006 8015</p>
                    <h3 className="text-lg font-bold mb-2">Adres:</h3>
                    <p className="mb-4">
                        Polskie Towarzystwo Psychiatryczne
                        <br/>
                        ul. Sobieskiego 9<br/>
                        02-957 Warszawa
                    </p>
                    <p className="mb-4">
                        W tytule przelewu prosimy podać: imię i nazwisko członka PTP oraz
                        wskazać rok (lata) za jaki regulowana jest składka, a także nazwę
                        oddziału regionalnego tj. `Oddział Kujawsko-Pomorski`.
                    </p>
                    <p className="mb-8">
                        Składki za lata od 2007 do 2010 włącznie należy wpłacać na rachunek
                        Oddziału Kujawsko-Pomorskiego PTP.
                    </p>
                    <h3 className="text-lg font-bold mb-2">Dane do przelewu:</h3>
                    <p className="mb-4">61 1020 1462 0000 7002 0195 1086</p>
                    <p className="mb-8">
                        Polskie Towarzystwo Psychiatryczne Oddział Kujawsko-Pomorski
                        <br/>
                        ul. M. Skłodowskiej-Curie 9; 85-067 Bydgoszcz
                    </p>
                    <h2 className="text-2xl font-bold mb-4">
                        Zwolnienia z opłaty składek przysługują:
                    </h2>
                    <ul className="list-disc pl-4 mb-4">
                        <li>
                            Emerytom niepracującym (podstawa: pisemne oświadczenie członka
                            zawierające datę przejścia na emeryturę; zwolnienie obejmuje okres
                            od pierwszego pełnego roku kalendarzowego emerytury).
                        </li>
                        <li>
                            Rencistom (podstawa: pisemne oświadczenie członka zawierające datę
                            przejścia na rentę inwalidzką; zwolnienie obejmuje okres od
                            pierwszego pełnego roku kalendarzowego pobierania renty).
                        </li>
                        <li>
                            Decyzją Zarządu Oddziału z opłaty składek członkowskich mogą
                            również zostać zwolnieni członkowie PTP, którzy w wyniku
                            długotrwałej niezdolności do pracy wynikającej z przyczyn
                            zdrowotnych lub losowych nie mogli wykonywać zawodu. Zwolnienie
                            dotyczyć może roku kalendarzowego, w którym niezdolność do pracy
                            występowała lub kolejnego roku / kolejnych lat. Decyzję o
                            zwolnieniu z opłaty składek podejmuje Zarząd Oddziału, na pisemny,
                            umotywowany wniosek członka.
                        </li>
                    </ul>
                    <p className="mb-8">
                        INFORMACJE DOTYCZĄCE WYSOKOŚCI ZALEGŁOŚCI SKŁADKOWYCH MOŻNA UZYSKAĆ
                        KONTAKTUJĄC SIĘ BEZPOŚREDNIO ZE SKARBNIKIEM ODDZIAŁU
                        KUJAWSKO-POMORSKIEGO.
                    </p>
                </div>
            </main>


        </div>
    );
};
export default MembershipFeesPage;
