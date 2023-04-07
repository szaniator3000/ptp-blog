import {useRouter} from "next/router";
import {BLOG_POSTS} from "@/data/posts";

interface BlogPostPageProps {
    post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({post}) => {
    return (
        <div className="">
            {/* Hero section with post image */}
            {post.image && (
                <div
                    className="bg-cover bg-center"
                    style={{backgroundImage: `url(${post.image})`, height: "480px"}}
                ></div>
            )}

            {/* Main content section */}
            <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
                <div className="flex items-center mt-4">
                    <p className="text-sm text-gray-500">By {post.author}</p>
                    <span className="mx-2 text-sm text-gray-500">|</span>
                    <p className="text-sm text-gray-500">
                        {post.publicationDate.toDateString()}
                    </p>
                </div>
                {post.tags.length > 0 && (
                    <div className="mt-4">
                        <span className="text-sm font-medium text-gray-500">Tags:</span>{" "}
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                )}
                <div
                    className="prose mt-8"
                    dangerouslySetInnerHTML={{__html: post.content}}
                ></div>
                {post.comments.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-lg font-medium text-gray-900">
                            Comments ({post.comments.length})
                        </h2>
                        <ul className="mt-4">
                            {post.comments.map((comment, index) => (
                                <li key={index} className="mb-2">
                                    {comment}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

const BlogPostPageWrapper: React.FC = () => {
    const router = useRouter();
    const {slug} = router.query;

    // Find the post that matches the slug parameter
    const post = BLOG_POSTS.find((post) => post.slug === slug);

    // Display an error message if the post doesn't exist
    if (!post) {
        return <p>Post not found</p>;
    }

    return <BlogPostPage post={post}/>;
};

export default BlogPostPageWrapper;
