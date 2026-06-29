import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find(
    (b) => b.id === id
  );

  if (!blog) {
    return (
      <div className="blog-page">
        <h1>Blog Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="reading-bar"></div>

      <div className="blog-page">
        <h1>{blog.title}</h1>

        <p className="blog-meta">
          {blog.date} • {blog.readTime} • {blog.tag}
        </p>

        <article className="blog-content">
          {blog.content
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line, index) => (
              <p key={index}>{line}</p>
            ))}
        </article>
      </div>
    </>
  );
}