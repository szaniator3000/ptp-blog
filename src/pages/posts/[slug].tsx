import { useRouter } from "next/router";
import { POSTS } from "@/data/posts";

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const post = POSTS.find((post) => post.slug === slug);

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 py-6">
      {/* Post image */}
      <div className="lg:w-1/3">
        <img
          src={post?.image || "/placeholder.png"}
          alt={post?.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Post content */}
      <div className="lg:w-2/3">
        <div className="flex flex-wrap items-center">
          {/* Post categories */}
          {post?.categories?.map((category, index) => (
            <span
              key={index}
              className="text-xs uppercase tracking-wide bg-gray-200 text-gray-600 rounded-full px-2 py-1 mr-2 mb-2"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Post title */}
        <h2 className="text-2xl font-bold text-gray-900 mt-2">{post?.title}</h2>

        {/* Post summary */}
        <p className="text-gray-700 mt-2">{post?.summary}</p>

        {/* Post details */}
        <div className="flex items-center mt-4">
          <span className="text-xs uppercase tracking-wide text-gray-600 mr-2">
            {post?.author || "Anonymous"}
          </span>
          <span className="text-xs uppercase tracking-wide text-gray-600 mr-2">
            {post?.publicationDate}
          </span>
          {post?.tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs uppercase tracking-wide bg-gray-200 text-gray-600 rounded-full px-2 py-1 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
