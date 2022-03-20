import React from "react";

const Post = (props) => {
  return (
    <div>
      <img src={props.img} />
      <p>{props.title}</p>
      <p>{props.review}</p>
    </div>
  );
};

export default Post;
