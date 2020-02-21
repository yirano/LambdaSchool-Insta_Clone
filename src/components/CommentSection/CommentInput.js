// You do not need to do anything in this file
import React, { useState } from "react";

const CommentInput = props => {
  const { comments } = props.comment;
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      {console.log(comments)}
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
      <button>...</button>
    </form>
  );
};

export default CommentInput;
