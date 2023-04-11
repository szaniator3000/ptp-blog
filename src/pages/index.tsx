import Hero from "@/components/Hero";
import Posts from "@/components/Posts";

export default function Home() {


    return (
        <div className="flex flex-col min-h-screen text-black">
            <Hero/>
            <Posts/>
        </div>
    );
}
