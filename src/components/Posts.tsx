import BlogPostCard from "@/components/Card";
import useSWR from "swr";
import { Carousel } from "react-responsive-carousel"; // Import the Carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BlogPost } from "@/types/post";
import { useEffect, useState } from "react"; // Import the CSS for the Carousel

const Posts = () => {
  const { data, error } = useSWR("/api/posts", async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data as BlogPost[];
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const latestPosts = data.slice(0, 3);
  const otherPosts = data.slice(3);

  return (
    <main className="container mx-auto px-4 py-8 flex-grow">
      <h2 className="text-2xl font-bold mb-4">Najnowsze wpisy</h2>
      <div className="max-w-1/2">
        <Carousel autoPlay showThumbs={false} infiniteLoop>
          {latestPosts.map((post) => (
            <div key={post.title}>
              <BlogPostCard post={post} />
            </div>
          ))}
        </Carousel>
      </div>
      <h2 className="text-2xl font-bold my-4">Pozostałe wpisy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherPosts.map((post) => (
          <div key={post.title}>
            <BlogPostCard post={post} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Posts;
