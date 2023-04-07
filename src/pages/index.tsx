import BlogPostCard from "@/components/Card";
import { BLOG_POSTS } from "@/data/posts";
import Hero from "@/components/Hero";
import AdvantagesSection from "@/components/AdvantagesSection";

export default function Home() {
    const posts = BLOG_POSTS;
    const latestPosts = posts.slice(0, 3);
    const otherPosts = posts.slice(3);

    return (
        <div className="flex flex-col min-h-screen text-black">
            <Hero />
            <main className="container mx-auto px-4 py-8 flex-grow">
                <h2 className="text-2xl font-bold mb-4">Najnowsze wpisy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {latestPosts.map((post) => (
                        <BlogPostCard key={post.title} post={post} />
                    ))}
                </div>
                <AdvantagesSection />
                <h2 className="text-2xl font-bold my-4">Pozostałe wpisy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherPosts.map((post) => (
                        <BlogPostCard key={post.title} post={post} />
                    ))}
                </div>
            </main>
        </div>
    );
}
