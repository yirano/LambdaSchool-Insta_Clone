// You do not need to do anything in this file
import React, { useState, useEffect } from "react";

const CommentInput = props => {
  const [inputValue, updateInputVal] = useState("");

  const updateComment = () => {
    if (inputValue != "") {
      props.updateComments([
        ...props.comments,
        { username: "LAMBDA_LLAMA", text: inputValue }
      ]);
    }
  };
  const clearField = () => {
    document.querySelectorAll(".clearField").forEach(function(x) {
      x.value === "" ? null : (x.value = "");
    });
    updateInputVal("");
  };
  const handleSubmit = e => {
    e.preventDefault();
    clearField();
    updateComment();
  };
  const handleChange = e => {
    updateInputVal(e.target.value);
    e.target.style.color = "black";
  };
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        class="clearField"
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={handleChange}
      />
      <button>...</button>
    </form>
  );
};

export default CommentInput;
