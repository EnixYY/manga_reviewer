import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  const [reviewData, setReviewData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReview = async () => {
    const url = `https://api.jikan.moe/v4/manga/${props.review}/reviews`;

    try {
      const response = await fetch(url);

      const postData = await response.json();

      if (postData.data) {
        setReviewData(postData.data[0].review);
      } else {
        setReviewData(`No available review`);
      }
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
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
        <br />
        <a href={props.url} className={styles.title}>
          {props.title}
        </a>
      </section>
      <div>{displayPost()}</div>
    </div>
  );
};

export default Post;
