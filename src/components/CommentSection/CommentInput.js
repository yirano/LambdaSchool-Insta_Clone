// You do not need to do anything in this file
import React, { useState, useEffect } from "react";

const CommentInput = props => {
  const [inputValue, updateInputVal] = useState('');

  const updateComment = () => {
    if (inputValue != '') {
      props.updateComments(
        [...props.comments, { username: "LAMBDA_LLAMA", text: inputValue }]);
    } else {
      console.log("say something fool");
    }
  }
  const clearField = () => {
    updateInputVal({ ...inputValue })
  }
  const handleSubmit = e => {
    e.preventDefault();
    updateComment();
    clearField();
  };
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={(e) => { updateInputVal(e.target.value) }}
      />
      <button>...</button>
    </form>
  );
};

export default CommentInput;
