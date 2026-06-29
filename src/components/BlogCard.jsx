import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <span className="blog-tag">
          {blog.tag}
        </span>

        <span className="blog-meta-small">
          {blog.readTime}
        </span>
      </div>

      <h3>{blog.title}</h3>

      <p>{blog.excerpt}</p>

      <div className="blog-footer">
        <span>{blog.date}</span>

        <Link
          to={`/blog/${blog.id}`}
          className="read-more"
        >
          Read Article →
        </Link>
      </div>
    </div>
  );
}
