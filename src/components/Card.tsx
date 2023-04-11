import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {format} from "date-fns";
import {pl} from "date-fns/locale";
import {BlogPost} from "@/types/post";

interface BlogPostCardProps {
    post: BlogPost;
}

const defaultImage = "/images/hero.jpg"; // path to default image

const BlogPostCard: React.FC<BlogPostCardProps> = ({post}) => {
    const {title, author, publicationDate, content, category, tags, image} = post;

    const [hover, setHover] = useState(false);
    console.log(publicationDate);
    return (
        <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ${
                hover ? "shadow-2xl" : ""
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="relative h-64">
                <Image
                    className="object-cover absolute inset-0 w-full h-full"
                    src={image || defaultImage}
                    alt=""
                    width={500}
                    height={500}
                />
                <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            </div>
            <div className="p-6">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-sm mb-2 text-gray-500">
                    Dodane przez {author} | {format(new Date(publicationDate), "d MMMM yyyy", {locale: pl})}
                </p>
                <p className="text-gray-500 mb-4">{content.slice(0, 100)}...</p>
                <div className="flex flex-wrap mb-4">
                    <div className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                        {category}
                    </div>
                    {tags.map((tag) => (
                        <div
                            key={tag}
                            className="bg-gray-200 text-gray-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <Link href={`posts/${post?.slug}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Czytaj więcej...
                    </button>

                </Link>
            </div>
        </div>
    );
};

export default BlogPostCard;
