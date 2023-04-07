import Head from "next/head";
import Image from "next/image";
import { FaBrain } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className="relative bg-gray-900">
            <div className="absolute top-0 left-0 w-full h-full">
                <Image
                    src="/images/meditation.jpg"
                    alt="Brain"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-40"
                ></div>
            </div>
            <div className="relative container mx-auto py-24 lg:py-32 z-10">
                <h1 className="text-white text-2xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Witajcie w Polskim Towarzystwie Psychiatrycznym Oddziału Kujawsko-Pomorskiego!
          </span>
                </h1>
                <p className="text-white text-2xl mb-6">
                    Jesteśmy bardzo zadowoleni, że tu jesteście. Nasza społeczność skupia
                    się na poprawie jakości życia osób dotkniętych chorobami psychicznymi,
                    a także na edukowaniu i wspieraniu specjalistów zajmujących się tą
                    dziedziną. Cieszymy się, że możemy działać razem na rzecz zdrowia
                    psychicznego naszej społeczności.
                </p>
                <div className="flex items-center text-white">
                    <p className="text-lg sm:text-xl md:text-2xl ">
                        Dążymy do tego, aby każdy człowiek miał dostęp do profesjonalnej
                        pomocy, a także dobrej i wrażliwej opieki. Chcemy, aby choroby
                        psychiczne nie były już tematem tabu i by każdy mógł zwrócić się o
                        pomoc, kiedy tylko jej potrzebuje.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
