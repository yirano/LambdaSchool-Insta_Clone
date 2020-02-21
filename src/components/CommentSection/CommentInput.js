// You do not need to do anything in this file
import React, { useState } from "react";

const CommentInput = props => {
  const changeComment = () => {

    console.log(props);
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
      <button onClick={() => {
        props.updateComments(
          props.currComments.push({
            username: "LAMBDALLAMA",
            text: "PEANUT BUTTA JELLY TIME"
          })
        )
      }}>...</button>
    </form>
  );
};

export default CommentInput;
