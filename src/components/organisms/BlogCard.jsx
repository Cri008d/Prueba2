// src/components/BlogCard.jsx
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import React from 'react'


function BlogCard({ post }) {
  return (
    <div className="card h-100 shadow-sm">
      {post.imagen && (
        <Image
          src={post.imagen}
          alt={post.titulo}
          className="card-img-top"
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{post.titulo}</h5>
        <Text className="text-muted">
          {post.autor} - {post.fecha}
        </Text>
        <Text className="card-text">{post.contenido}</Text>
      </div>
    </div>
  );
}

export default BlogCard;
