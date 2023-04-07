import React, {Fragment} from "react";
import {IoIosContact} from "react-icons/io";
import PersonCard from "@/components/PersonCard";
import Head from "next/head";

const boardMembers = [
    {
        name: "Wojciech Eugeniusz Kosmowski",
        position: "Przewodniczący",
    },
    {
        name: "Wiktor Dróżdż",
        position: "Wiceprzewodniczący",
    },
    {
        name: "Witold Franciszek Bartkowiak",
        position: "Skarbnik",
    },
    {
        name: "Lech Miłosz Giziński",
        position: "Sekretarz",
    },
    {
        name: "Ewa Kordyjak-Starczewska",
        position: "Członek",
    },
    {
        name: "Sławomir Biedrzycki",
        position: "Członek",
    },
    {
        name: "Ewelina Rybak-Szaniawska",
        position: "Członek",
    },
];

const revisionCommission = [
    {
        name: "Krzysztof Nicpoń",
    },
    {
        name: "Tomasz Kalasiński",
    },
    {
        name: "Dominika Chylińska-Mazurkiewicz",
    },
];

const collegiateCourt = [
    {
        name: "Damian Czarnecki",
        position: "Przewodniczący",
    },
    {
        name: "Małgorzata Dąbkowska",
        position: "Wiceprzewodnicząca",
    },
    {
        name: "Marek Runge",
        position: "Sekretarz",
    },
    {
        name: "Magdalena Lewandowska",
        position: "Członek",
    },
    {
        name: "Roma Bajzert",
        position: "Członek",
    },
];


const ManagementPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>
                    Zarząd Oddziału Kujawsko-Pomorskiego | Polskie Towarzystwo Psychiatryczne
                </title>
            </Head>


            {/* Hero section */}
            <header className="bg-gray-900 py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-white text-3xl font-bold">Zarząd PTP Odział Kujawsko-Pomorski</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 flex-1 py-8">
                {/* Board members */}
                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                        Zarząd
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {boardMembers.map((member) => (
                            <PersonCard key={member.name} name={member.name} position={member.position}/>
                        ))}
                    </div>
                </section>

                {/* Revision Commission */}
                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                        Komisja Rewizyjna
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {revisionCommission.map((member) => (
                            <PersonCard key={member.name} name={member.name}/>
                        ))}
                    </div>
                </section>

                {/* Collegiate Court */}
                <section>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                        Sąd Koleżeński
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {collegiateCourt.map((member) => (
                            <PersonCard key={member.name} name={member.name} position={member.position}/>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};
export default ManagementPage;
