// You do not need to do anything in this file
import React, { useState } from "react";

const CommentInput = props => {
  const { comments } = props.comment;
  const [currComment, updateComment] = useState(comments);
  const changeComment = () => {
    updateComment(
      currComment.push({
        username: "LAMBDALLAMA",
        text: "PEANUT BUTTA JELLY TIME"
      })
    );
    console.log(currComment);
  };
  const handleComment = e => {
    e.preventDefault();
  };
  return (
    <form className="comment-form" onSubmit={handleComment}>
      {/* {console.log(currComment)} */}
      <input
        type="text"
        // value={props.comment}
        placeholder="Add comment... "
        onChange={changeComment}
      />
      <button onClick={changeComment}>...</button>
    </form>
  );
};

export default CommentInput;
