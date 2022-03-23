import React from "react";
import Post from "../Post";
import styles from "./ContainerRecommendations.module.css";

const ContainerRecommendations = (props) => {
  const allPostData = props.allPostData.map((data) => {
    return (
      <Post
        key={data.entry.mal_id}
        img={data.entry.images.webp.image_url}
        title={data.entry.title}
        review={data.entry.mal_id}
        noReview={data.entry.url}
        url={data.entry.url}
      />
    );
  });

  return (
    <div className={styles.container}>
      <h1>Recommendations</h1>
      {allPostData}
    </div>
  );
};

export default ContainerRecommendations;
