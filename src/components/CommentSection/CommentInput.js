import React, { useState, useEffect } from "react";

const CommentInput = props => {
  const [inputValue, updateInputVal] = useState("");

  // Update the displayed comments with user's input
  const updateComment = () => {
    if (inputValue != "") {
      props.updateComments([
        ...props.comments,
        { username: "LAMBDA_LLAMA", text: inputValue }
      ]);
    }
  };

  // Clear form field after the comment has been submitted
  const clearField = () => {
    document.querySelectorAll(".clearField").forEach(function (x) {
      x.value === "" ? null : (x.value = "");
    });
    updateInputVal("");
  };

  // Handle form submit
  const handleSubmit = e => {
    e.preventDefault();
    clearField();
    updateComment();
  };

  // Keep track of changes being made in the input field
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
