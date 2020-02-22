// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(e => (
        <Comment comment={e} />
      ))}
      <CommentInput currComments={props.currComments} updateComments={props.updateComments} comments={props.comments}
      />
    </div>
  );
};
export default CommentSection;
