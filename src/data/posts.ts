import {BlogPost} from "@/types/post";

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "zyczenia",
        title: "Życzenia Bożego Narodzenia",
        author: "Autor",
        publicationDate: new Date("2022-12-24"),
        content: "# Szanowne Koleżanki,\n" +
            "# Szanowni Koledzy,\n" +
            "\n" +
            "Wobec zbliżających się Świąt Wielkanocy życzę, aby to był dla wszystkich Państwa czas odpoczynku i radości, czas pięknych rodzinnych spotkań i głębokich przeżyć.\n" +
            "\n" +
            "Pozdrawiam serdecznie,\n" +
            "\n" +
            "Wojciech Kosmowski\n" +
            "Przewodniczący Oddziału Kujawsko-Pomorskiego Polskiego Towarzystwa Psychiatrycznego\n",
        category: "Życzenia",
        tags: ["Boże Narodzenie", "Święta"],
        image: "/images/christmas.jpg"
    },
    {
        slug: "zaproszenie-oplatek-ptp",
        title: "Zaproszenie na Spotkanie Opłatkowe",
        author: "Autor",
        publicationDate: new Date("2022-12-15"),
        content: "# Zaproszenie na Świąteczne Spotkanie Opłatkowe\n" +
            "\n" +
            "Drodzy Członkowie Polskiego Towarzystwa Psychiatrycznego Oddziału Kujawsko-Pomorskiego,\n" +
            "\n" +
            "Z radością informujemy, że w dniu 12.13.2022 o godzinie 18.30 w Karczmie Góralskiej Gazdówka (Szosa Gdańska 9, Żołędowo) odbędzie się tradycyjne Świąteczne Spotkanie Opłatkowe.\n" +
            "\n" +
            "Tego wieczoru będziemy mieli okazję spotkać się, porozmawiać, a przede wszystkim złożyć sobie życzenia na zbliżające się Święta Bożego Narodzenia i Nowy Rok.\n" +
            "\n" +
            "W imieniu zarządu Oddziału Kujawsko-Pomorskiego Polskiego Towarzystwa Psychiatrycznego serdecznie zapraszam Państwa do wzięcia udziału w tym wyjątkowym wydarzeniu.\n" +
            "\n" +
            "Z poważaniem,\n" +
            "dr Wojciech Kosmowski\n" +
            "Przewodniczący Oddziału Kujawsko-Pomorskiego Polskiego Towarzystwa Psychiatrycznego\n"
        , category: "Życzenia",
        tags: ["Boże Narodzenie", "Święta"],
        image: "/images/WIGILIA_2022_OKP_PTP_zaproszenie.jpg"
    },
    {
        slug: "konferencja-psychiatria-detencyjna",
        title: "Konferencja 'Psychiatria detencyjna'",
        author: "Autor",
        publicationDate: new Date("2022-10-11"),
        content: "# Konferencja 'Psychiatria detencyjna'\n" +
            "\n" +
            "Wojewódzki Szpital dla Nerwowo i Psychicznie Chorych im. dr J. Bednarza w Świeciu oraz Polskie Towarzystwo Psychiatryczne Oddział Kujawsko-Pomorski serdecznie zapraszają na konferencję 'Psychiatria detencyjna'.\n" +
            "\n" +
            "## Program\n" +
            "\n" +
            "13.00-13.15 – Otwarcie konferencji, przywitanie gości – dr Sławomir Biedrzycki Z-ca Dyrektora ds. Lecznictwa w Wojewódzkim Szpitalu dla Nerwowo i Psychicznie Chorych im. dr J. Bednarza w Świeciu\n" +
            "\n" +
            "13.15-13.40 - „Psychiatria sądowa w Polsce - stan aktualny i perspektywy” – Inga Markiewicz – prawnik, psycholog Katedra Medycyny Sądowej - Instytut Psychiatrii i Neurologii w Warszawie, Komisja psychiatryczna ds. środków zabezpieczających przy Ministrze Zdrowia\n" +
            "\n" +
            "13.40-14.05 - „Czynniki determinujące zachowania przestępcze u mężczyzn chorych na schizofrenię” – dr n. med. Justyna Sipowicz Koordynator Oddziału IXA Psychiatrii Sądowej podstawowego stopnia zabezpieczenia w Wojewódzkim Szpitalu dla Nerwowo i Psychicznie Chorych im. dr J. Bednarza w Świeciu.\n" +
            "\n" +
            "14.05-14.30 - „Urojenia usystematyzowane – diagnostyka i orzecznictwo sądowe” – dr n. med. Ryszard Kujawski Koordynator Oddziału IXB Psychiatrii Sądowej podstawowego stopnia zabezpieczenia w Wojewódzkim Szpitalu dla Nerwowo i Psychicznie Chorych im. dr J. Bednarza w Świeciu.\n" +
            "\n" +
            "14.30-14.55- „Wyzwania, przeszkody i nadzieje współczesnej psychiatrii sądowej oddziału o wzmocnionym zabezpieczeniu” – dr Bartosz Nadolski Koordynator Oddziału XIII Psychiatrii Sądowej o wzmocnionym zabezpieczeniu w Wojewódzkim Szpitalu dla Nerwowo i Psychicznie Chorych im. dr J. Bednarza w Świeciu.\n" +
            "\n" +
            "14.55-15.10 – Dyskusja, sprawy organizacyjne Polskiego Towarzystwa Psychiatrycznego Oddziału Kujawsko-Pomorskiego.\n" +
            "\n" +
            "## Informacje praktyczne\n" +
            "\n" +
            "Termin konferencji: 11.10.2022 r. (wtorek) w godz. 13.00-16.00, po konferencji lunch.\n" +
            "\n" +
            "Miejsce konferencji: Wojewódzki Szpital dla Nerwowo i Psychicznie Chorych im. dr J. Bednarza w Świeciu, ul. Sądowa 18, sala wykładowo-gimnastyczna.\n" +
            "\n" +
            "Serdecznie zapraszamy wszystkich zainteresowanych tematem 'Psychiatria detencyjna'. Konferencja to doskonała okazja do pogłębienia wiedzy i wymiany doświadczeń z innymi specjalistami w tej dziedzinie.\n"
        ,
        category: "Konferencje",
        tags: ["Psychiatria detencyjna", "Wojewódzki Szpital dla Nerwowo i Psychicznie Chorych", "Polskie Towarzystwo Psychiatryczne", "Świecie"],
        image: "/images/meditation.jpg"
    },
    {
        slug: "zasoby-medyczne-dla-pacjentow-ukrainskojezycznych",
        title: "Zasoby medyczne dla pacjentów ukraińskojęzycznych",
        author: "Autor",
        publicationDate: new Date("2023-05-17"),
        content: "# Zasoby medyczne dla pacjentów ukraińskojęzycznych\n" +
            "\n" +
            "W związku z wojną na wschodniej granicy Polski i napływem uchodźców z Ukrainy, coraz większą potrzebę w leczeniu osób mówiących po ukraińsku oraz po rosyjsku stają się materiały medyczne w tych językach.\n" +
            "\n" +
            "## Zasoby dostępne online\n" +
            "\n" +
            "### 1. Medycyna Praktyczna\n" +
            "\n" +
            "Na stronie internetowej czasopisma 'Medycyna Praktyczna' dostępne są darmowe materiały dla lekarzy, w tym także w języku ukraińskim. Wśród nich można znaleźć artykuły dotyczące chorób, diagnostyki i leczenia.\n" +
            "\n" +
            "Link: [https://www.mp.pl/kurier/292414,materialy-dla-lekarzy](https://www.mp.pl/kurier/292414,materialy-dla-lekarzy)\n" +
            "\n" +
            "### 2. Zasoby w 4 językach\n" +
            "\n" +
            "Dla studentów i lekarzy, którzy mają kontakt z pacjentami mówiącymi po ukraińsku oraz po rosyjsku, zostało przygotowane specjalne opracowanie. W pliku o nazwie 'BADANIE PSYCHIATRYCZNE_form_pl-en-uk-ruv2' znajdują się informacje dotyczące badania psychiatrycznego oraz historii choroby w czterech językach: polskim, angielskim, ukraińskim i rosyjskim.\n" +
            "\n" +
            "Link do pliku: [https://www.dropbox.com/sh/8yceoup4jmxyvq5/AADNHQzDVbwhqNyt1mqUJoC6a?dl=0](https://www.dropbox.com/sh/8yceoup4jmxyvq5/AADNHQzDVbwhqNyt1mqUJoC6a?dl=0)\n" +
            "\n" +
            "## Podsumowanie\n" +
            "\n" +
            "Dostępność materiałów medycznych w języku ukraińskim oraz rosyjskim jest coraz bardziej potrzebna ze względu na sytuację geopolityczną na wschodzie Polski. Dzięki takim inicjatywom, jakie podjął Wojewódzki Szpital dla Nerwowo i Psychicznie Chorych im. dr J. Bednarza w Świeciu oraz Polskie Towarzystwo Psychiatryczne Oddział Kujawsko-Pomorski, pacjenci mówiący po ukraińsku i rosyjsku mają dostęp do specjalistycznych materiałów medycznych w swoim języku. To bardzo ważne, żeby osoby te otrzymały odpowiednią opiekę medyczną, a takie inicjatywy są krokiem w dobrym kierunku.\n"
        ,
        category: "Materiały medyczne",
        tags: ["Ukraiński", "Rosyjski", "Medycyna Praktyczna", "Wojewódzki Szpital dla Nerwowo i Psychicznie Chorych", "Polskie Towarzystwo Psychiatryczne", "Świecie"],
        image: "/images/medyczne-zasoby-ukrainski.jpg"
    }

];

