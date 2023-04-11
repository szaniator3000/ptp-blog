import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full">
                <Image
                    src="/images/hero.jpg"
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="relative z-10 py-20 md:py-32 lg:py-48">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl">
                        Witaj na blogu Polskiego Towarzystwa Psychiatrycznego Oddziału Kujawsko-Pomorskiego!                     </h1>
                    <p className="mt-4 text-xl text-white">
                        Nasza strona internetowa jest miejscem, w którym znajdziesz wartościowe informacje i artykuły na temat zdrowia psychicznego, terapii oraz różnych aspektów psychiatrii.                     </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
