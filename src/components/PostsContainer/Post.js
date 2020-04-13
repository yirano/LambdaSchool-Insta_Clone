import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  console.log(props);
  const [likes, setLikes] = useState(props.post.likes);
  const [comments, updateComments] = useState(props.post.comments);

  const handleLike = (e) => {
    e.target.classList.toggle("like-red");

    // If the user clicks on the heart icon to like the image, incrememt the like count by 1
    if (e.target.classList.value.includes("like-red")) {
      setLikes(likes + 1);
      e.target.style.color = "red";
      // Remove a like count otherwise
    } else {
      setLikes(likes - 1);
      e.target.style.color = "black";
    }
  }
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes={likes} setLikes={setLikes} handleLike={handleLike} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={comments}
        updateComments={updateComments}
      />
    </div>
  );
};

export default Post;
