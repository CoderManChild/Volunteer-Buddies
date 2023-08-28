// src/components/Posts.js
import React from "react";
import "../styles/styles.css";
function Posts({ searchQuery }) {
  const posts = [
    { id: 1, title: "Post 1", content: "This is the content of post 1." },
    { id: 2, title: "Post 2", content: "This is the content of post 2." },
    { id: 3, title: "TacoBell", content: "This is the content of post 3" },
    // ... more posts
  ];
  const filteredPosts = posts.filter((posts) =>
    posts.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {searchQuery && (
        <h3 className="results">
          {filteredPosts.length} posts match your search
        </h3>
      )}
      <div className="posts">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Posts;
