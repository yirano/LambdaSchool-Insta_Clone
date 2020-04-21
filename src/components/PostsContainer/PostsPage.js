import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import data from "../../dummy-data.js";

const PostsPage = () => {
  const [post, setPost] = useState(data);
  return (
    <div className="posts-container-wrapper">
      {post.map(post => {
        return <Post post={post} setPost={setPost} />;
      })}
    </div>
  );
};

export default PostsPage;
