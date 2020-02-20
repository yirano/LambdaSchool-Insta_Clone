// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import data from '../../dummy-data.js';


const CommentSection = props => {
  // Add state for the comments
  const [comment, setComment] = useState(data);
  console.log(data);
  console.log(comment[0]);
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comment.map(props => {
        console.log(props);
        return (
          <Comment comment={props.comments} />
        )
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
