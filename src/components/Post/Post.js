import React, { useEffect, useState } from "react";

const Post = (props) => {
  const [reviewData, setReviewData] = useState("");
  const fetchReview = async () => {
    const url = `https://api.jikan.moe/v4/manga/${props.review}/reviews`;

    const response = await fetch(url);

    const postData = await response.json();

    if (postData.data) {
      setReviewData(postData.data[0].review);
    } else {
      setReviewData(`No available review`);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  const displayPost = () => {
    if (reviewData !== "No available review") {
      return <p>{reviewData}</p>;
    } else {
      return (
        <>
          <p>{reviewData}</p>
          <a href={props.noReview}>
            Click to check out more info from My animelist!
          </a>
        </>
      );
    }
  };

  return (
    <div>
      <img src={props.img} />
      <p>{props.title}</p>
      <div>{displayPost()}</div>
    </div>
  );
};

export default Post;
