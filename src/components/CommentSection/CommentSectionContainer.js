// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map(e => (
        <Comment comment={e} />
      ))}
      <CommentInput currComments={props.currComments} updateComments={props.updateComments} />
      {setTimeout(function () {
        console.log(props);
      }, 8000)}
    </div>
  );
};
export default CommentSection;
