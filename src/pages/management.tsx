import React, { Fragment } from "react";
import { IoIosContact } from "react-icons/io";
import PersonCard from "@/components/PersonCard";
import Head from "next/head";
import {
  boardMembers,
  collegiateCourt,
  revisionCommission,
} from "@/data/management";

const ManagementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>
          Zarząd Oddziału Kujawsko-Pomorskiego | Polskie Towarzystwo
          Psychiatryczne
        </title>
        <meta
          name="description"
          content="Zarząd Oddziału Kujawsko-Pomorskiego Polskiego Towarzystwa Psychiatrycznego. Informacje o składzie zarządu i działalności."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://example.com/zarzad-kujawsko-pomorski"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Zarząd Oddziału Kujawsko-Pomorskiego | Polskie Towarzystwo Psychiatryczne"
        />
        <meta
          property="og:description"
          content="Zarząd Oddziału Kujawsko-Pomorskiego Polskiego Towarzystwa Psychiatrycznego. Informacje o składzie zarządu i działalności."
        />
        <meta
          property="og:url"
          content="https://example.com/zarzad-kujawsko-pomorski"
        />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Zarząd Oddziału Kujawsko-Pomorskiego | Polskie Towarzystwo Psychiatryczne"
        />
        <meta
          name="twitter:description"
          content="Zarząd Oddziału Kujawsko-Pomorskiego Polskiego Towarzystwa Psychiatrycznego. Informacje o składzie zarządu i działalności."
        />
        <meta
          name="twitter:image"
          content="https://example.com/twitter-image.jpg"
        />
      </Head>

      {/* Hero section */}
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl font-bold">
            Zarząd PTP Odział Kujawsko-Pomorski
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 flex-1 py-8">
        {/* Board members */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Zarząd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {boardMembers.map((member) => (
              <PersonCard
                key={member.name}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
        </section>

        {/* Revision Commission */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Komisja Rewizyjna
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {revisionCommission.map((member) => (
              <PersonCard key={member.name} name={member.name} />
            ))}
          </div>
        </section>

        {/* Collegiate Court */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Sąd Koleżeński
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {collegiateCourt.map((member) => (
              <PersonCard
                key={member.name}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export default ManagementPage;
