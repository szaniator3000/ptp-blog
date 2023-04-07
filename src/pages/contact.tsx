import React from "react";
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
      <div className="flex flex-col min-h-screen text-gray-800">
        <header className="bg-gray-900 py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-3xl font-bold">Kontakt</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold mb-4">
              Oddział Kujawsko-Pomorski PTP
            </h2>
            <div className="mb-4 flex items-center">
              <FiMapPin className="mr-2 h-6 w-6 text-gray-700" />
              <p>
                I Klinika Psychiatrii, <br />
                Szpital Uniwersytecki nr 1 im. Jurasza w Bydgoszczy <br />
                ul. M. Skłodowskiej-Curie 9 <br />
                85-067 Bydgoszcz
              </p>
            </div>
            <div className="mb-4 flex items-center">
              <FiPhone className="mr-2 h-6 w-6 text-gray-700" />
              <p>
                tel./fax. <a href="tel:+48525853766">52 585 3766</a>
              </p>
            </div>
            <div className="mb-4 flex items-center">
              <FiMail className="mr-2 h-6 w-6 text-gray-700" />
              <p>
                Adres mailowy:{" "}
                <a href="mailto:info@ptpokp.pl">info@ptpokp.pl</a>
              </p>
            </div>
            <div className="mb-4" style={{ height: "500px", width: "100%" }}>
              <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.000618609504!2d18.01111711604136!3d53.12883497991793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f958bd7e91e91%3A0x68e087d1810787c2!2sI%20Klinika%20Psychiatrii%20Szpitala%20Uniwersyteckiego%20Nr%201%20im.%20dr%20A.%20Jurasza%20w%20Bydgoszczy!5e0!3m2!1sen!2spl!4v1654822875506!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
              ></iframe>
            </div>
          </div>
        </main>
      </div>
  );
};

export default Contact;
