// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";

const LikeSection = props => {
  const handleLike = e => {
    e.target.classList.toggle("like-red");

    if (e.target.classList.value.includes("like-red")) {
      console.log("yes");
      props.setLikes(props.likes + 1);
      e.target.style.color = "red";
    } else {
      props.setLikes(props.likes - 1);
      e.target.style.color = "black";
    }
    console.log(e.target.classList);

    // if (e.target.style.color === "red") {
    //   props.setLikes(props.likes + 1);
    //   // return (e.target.style.color = "black");
    // } else if (e.target.style.color === "black") {
    //   props.setLikes(props.likes - 1);
    //   // return (e.target.style.color = "red");
    // }
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
