//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import data from '../../dummy-data.js';

const PostsPage = () => {
  // set up state for your data
  const [post, setPost] = useState(data);
  return (
    <div className="posts-container-wrapper">
      {post.map(post => {
        return <Post post={post} setPost={setPost} />
      })}
    </div>
  );
};

export default PostsPage;

