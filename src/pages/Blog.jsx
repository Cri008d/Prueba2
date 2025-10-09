// src/pages/Blog.jsx
import posts from "../data/blog";
import BlogCard from "../components/organisms/BlogCard";

function Blog() {
  return (
    <div className="container mt-5">
      <h2>Blog</h2>
      <p className="text-muted">Últimas publicaciones y novedades</p>

      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-4">
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
