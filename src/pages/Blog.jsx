import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

export default function Blog() {
  return (
    <div className="section">
      <>
  <h1 className="blog-title">
    Engineering Notes
  </h1>

  <p className="blog-subtitle">
    Thoughts on Networking,
    System Design,
    Java,
    DSA,
    IIoT and Software Engineering.
  </p>
</>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </div>
  );
}

