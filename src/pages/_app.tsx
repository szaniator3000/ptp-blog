import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import HeroSection from "@/components/Hero";

function App({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full mx-auto my-4">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
