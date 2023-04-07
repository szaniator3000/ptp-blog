import BlogPostCard from "@/components/Card";
import {BLOG_POSTS} from "@/data/posts";
import Hero from "@/components/Hero";


export default function Home() {
    const posts = BLOG_POSTS;
    return (
        <div className="flex flex-col min-h-screen text-black">
            <main className="container mx-auto px-4 py-8 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map((post) => (
                        <BlogPostCard key={post.title} post={post}/>
                    ))}
                </div>
            </main>
        </div>
    );
}
