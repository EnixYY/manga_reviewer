import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";

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
      return <p className={styles.review}>{reviewData}</p>;
    } else {
      return (
        <>
          <p className={styles.review}>
            {reviewData}
            <br />
            <br />
            <a href={props.noReview}>
              Click to check out more info from My animelist!
            </a>
          </p>
        </>
      );
    }
  };

  return (
    <div className={styles.post}>
      <section>
        <img src={props.img} />
        <p className={styles.title}>{props.title}</p>
      </section>
      <div>{displayPost()}</div>
    </div>
  );
};

export default Post;
