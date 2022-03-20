import React from "react";
import Post from "./Post";

const ContainerRecommendations = (props) => {
  const allPostData = props.allPostData.map((data) => {
    return (
      <Post
        key={data.entry.mal_id}
        img={data.entry.images.webp.image_url}
        title={data.entry.title}
        review={data.entry.mal_id}
      />
    );
  });

  return (
    <div>
      <h3>Recommendations</h3>
      {allPostData}
    </div>
  );
};

export default ContainerRecommendations;
