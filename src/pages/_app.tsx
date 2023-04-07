import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import HeroSection from "@/components/Hero";

export default function App({Component, pageProps}: AppProps) {
    return (
        <main>
            <Navbar/>
            <Component {...pageProps} />;
            <Footer/>
        </main>
    );
}
