// src/components/Posts.js
import React, { useMemo } from "react";
import "../styles/styles.css";

const Posts = ({ searchQuery }) => {
  const posts = [
    { id: 1, title: "Post 1", content: "This is the content of post 1." },
    { id: 2, title: "Post 2", content: "This is the content of post 2." },
    { id: 3, title: "TacoBell", content: "This is the content of post 3" },
    // ... more posts
  ];

  const filteredPosts = useMemo(() => 
    posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase())),
    [posts, searchQuery]
  );

  return (
    <>
      {searchQuery && (
        <h3 className="results">
          {filteredPosts.length} posts match your search
        </h3>
      )}
      <section className="posts">
        {filteredPosts.map(post => (
          <article key={post.id} className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default Posts;
