import React from "react";

const LikeSection = props => {

  // Handle what happens when the user clicks the 'heart' icon
  const handleLike = e => {
    e.target.classList.toggle("like-red");
    if (e.target.classList.value.includes("like-red")) {
      props.setLikes(props.likes + 1);
      e.target.style.color = "red";
    } else {
      props.setLikes(props.likes - 1);
      e.target.style.color = "black";
    }
  };
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i onClick={handleLike} className="far fa-heart" />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">{props.likes} likes</p>
    </div>
  );
};

export default LikeSection;
