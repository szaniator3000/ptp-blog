import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  const handleToggleChat = () => {
    setShowChat(!showChat);
  };
  return (
    <div className="flex flex-col min-h-screen text-black">
      <Head>
        <title>Strona głowna - PTP OKP</title>
        <meta name="description" content="Strona głowna - PTP OKP" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://example.com/statut" />
      </Head>
      <Hero />
      <Posts />
      <div className="my-6 border-b border-gray-300"></div>

      <main className="p-6 flex align-middle  justify-around">
        <div>
          <h1 className="text-2xl font-bold mb-4">Masz pytania?</h1>
          <p className="mb-4">Zadaj je nam bezpośrednio przez chat.</p>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleToggleChat}
        >
          {showChat ? "Ukryj czat" : "Pokaż czat"}
        </button>
        {showChat && (
          <div className="fixed bottom-0 right-0 m-4 bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-lg font-bold mb-2">Zadaj nam pytanie!</h2>
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                "https://www.facebook.com/      YourFacebookPageIDHere"
              )}&tabs=messages&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1234567890`}
              width="340"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
            <button
              className="bg-red-500 mt-2 hover:bg-red-200 text-white font-bold py-2 px-4 rounded"
              onClick={handleToggleChat}
            >
              {showChat ? "Ukryj czat" : "Pokaż czat"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
