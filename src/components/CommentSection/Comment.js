import React from "react";
import "./Comment.css";

const Comment = props => {
  const { username, text } = props.comment;
  return (
    <div className="comment-text">
      <span className="user">{username}</span>{" "}
      <span className="comment">{text}</span>
    </div>
  );
};

export default Comment;
