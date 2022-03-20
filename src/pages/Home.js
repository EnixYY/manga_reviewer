import React, { useState, useEffect } from "react";
import ContainerRecommendations from "../components/ContainerRecommendations";

const Home = () => {
  const [postData, setPostData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPostImage = async () => {
    const url = `https://api.jikan.moe/v4/manga/${randomInt()}/recommendations`;
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      const postData = await response.json();
      console.log(postData.data.splice(0, 2));

      setPostData(postData.data.splice(0, 2));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPostImage();
  }, []);

  const randomInt = () => {
    return Math.floor(Math.random() * (50 - 1) + 1);
  };

  // let content = "";
  // if (heroImage) {
  //   content = <></>;
  // }

  // if (error) {
  //   content = <p>{error}</p>;
  // }

  // if (isLoading) {
  //   content = <p>loading</p>;
  // }

  return (
    <div>
      <ContainerRecommendations allPostData={postData} />
    </div>
  );
};

export default Home;
