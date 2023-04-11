import React from "react";
import Head from "next/head";

const Downloads = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Pliki do pobrania | Polskie Towarzystwo Psychiatryczne</title>
        <meta
          name="description"
          content="Pliki do pobrania związane z Polskim Towarzystwem Psychiatrycznym. Znajdź informacje, formularze i dokumenty związane z członkostwem, działalnością towarzystwa i innymi tematami."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://example.com/pliki-do-pobrania" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pliki do pobrania | Polskie Towarzystwo Psychiatryczne"
        />
        <meta
          property="og:description"
          content="Pliki do pobrania związane z Polskim Towarzystwem Psychiatrycznym. Znajdź informacje, formularze i dokumenty związane z członkostwem, działalnością towarzystwa i innymi tematami."
        />
        <meta
          property="og:url"
          content="https://example.com/pliki-do-pobrania"
        />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pliki do pobrania | Polskie Towarzystwo Psychiatryczne"
        />
        <meta
          name="twitter:description"
          content="Pliki do pobrania związane z Polskim Towarzystwem Psychiatrycznym. Znajdź informacje, formularze i dokumenty związane z członkostwem, działalnością towarzystwa i innymi tematami."
        />
        <meta
          name="twitter:image"
          content="https://example.com/twitter-image.jpg"
        />
      </Head>
      {/* Hero section */}
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl font-bold">Pliki do pobrania </h1>
        </div>
      </header>
      {/* File downloads section */}
      <main className="container mx-auto px-4 flex-1 py-8 space-y-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-800 text-center mt-4">
              PTP Formularz Członkostwa (DOC)
            </h3>
            <p className="text-gray-600 text-center mt-2">
              PTP Formularz Członkostwa (DOC) to formularz zgłoszeniowy do
              Polskiego Towarzystwa Psychologicznego. Formularz jest dostępny w
              formacie DOC, czyli jako dokument Microsoft Word.{" "}
            </p>
          </div>
          <div className="bg-gray-100 px-4 py-2">
            <a
              href="/downloads/ptp-formularz-czlonkostwa.doc"
              download
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full block text-center"
            >
              Pobierz
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-800 text-center mt-4">
              PTP Formularz Członkostwa (PDF)
            </h3>
            <p className="text-gray-600 text-center mt-2">
              PTP Formularz Członkostwa (PDF) to formularz zgłoszeniowy do
              Polskiego Towarzystwa Psychologicznego. Formularz jest dostępny w
              formacie PDF, czyli jako plik Adobe Acrobat.{" "}
            </p>
          </div>
          <div className="bg-gray-100 px-4 py-2">
            <a
              href="/downloads/ptp-formularz-czlonkostwa.pdf"
              download
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full block text-center"
            >
              Pobierz
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-800 text-center mt-4">
              Instrukcja opłacania składek (PDF)
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Instrukcja opłacania składek (PDF) to dokument zawierający
              informacje na temat sposobu regulowania należności członkowskich.{" "}
            </p>
          </div>
          <div className="bg-gray-100 px-4 py-2">
            <a
              href="/path/to/file.pdf"
              download
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full block text-center"
            >
              Pobierz
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Downloads;
