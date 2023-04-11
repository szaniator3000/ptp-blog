import fs from "fs";
import path from "path";
import { BLOG_POSTS } from "@/data/posts";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Your list of blog posts
  const blogPosts = BLOG_POSTS;

  // List all files in the /public/images/random directory
  const randomImagesPath = path.join(
    process.cwd(),
    "public",
    "images",
    "random"
  );
  const randomImages = fs.readdirSync(randomImagesPath);

  // Loop through each blog post and update the image URL if necessary
  const updatedBlogPosts = blogPosts.map((blogPost) => {
    if (!blogPost.image) {
      // If the blog post doesn't have its own image, generate a random one
      const randomImage =
        randomImages[Math.floor(Math.random() * randomImages.length)];
      blogPost.image = `/images/random/${randomImage}`;
    }
    return blogPost;
  });

  // Return the updated list of blog posts
  res.status(200).json(updatedBlogPosts);
}
