// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import data from '../../dummy-data.js';


const CommentSection = props => {

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map(e => (
          <Comment comment={e} />
        ))}
      <CommentInput />
    </div>
  );
};
export default CommentSection;
