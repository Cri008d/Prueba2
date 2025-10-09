// src/components/BlogCard.jsx
function BlogCard({ post }) {
  return (
    <div className="card h-100 shadow-sm">
      {post.imagen && (
        <img
          src={post.imagen}
          className="card-img-top"
          alt={post.titulo}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{post.titulo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {post.autor} - {post.fecha}
        </h6>
        <p className="card-text">{post.contenido}</p>
      </div>
    </div>
  );
}

export default BlogCard;
