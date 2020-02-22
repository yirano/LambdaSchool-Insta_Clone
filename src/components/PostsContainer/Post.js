import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  const [likes, setLikes] = useState(12);
  const [comments, updateComments] = useState(props.post.comments);
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
      <LikeSection likes={likes} setLikes={setLikes} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={comments}
        updateComments={updateComments}
      />
    </div>
  );
};

export default Post;
